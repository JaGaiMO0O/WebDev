
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let shapes = [];
let current_shape_index = null;
let is_dragging = false;
let startX;
let startY;
let oldX, oldY;
const grid_min_x = 0;
const grid_max_x = 700;
const grid_min_y = 0;
const grid_max_y = 700;
const GRID_SIZE = 100;

// Initialize shapes
shapes.push({ x: 800, y: 50, width: 100, height: 100, color: 'blue', rotation: 0, selected: false });
shapes.push({ x: 800, y: 175, width: 100, height: 200, color: 'orange', rotation: 0, selected: false });
shapes.push({ x: 800, y: 400, width: 100, height: 300, color: 'purple', rotation: 0, selected: false });
shapes.push({ x: 50, y: 800, width: 300, height: 100, color: 'red', rotation: 0, selected: false });
shapes.push({ x: 375, y: 800, width: 400, height: 100, color: 'yellow', rotation: 0, selected: false });

// Get the actual dimensions after rotation
function getRotatedDimensions(shape) {
    if (shape.rotation % 180 === 0) {
        return { width: shape.width, height: shape.height };
    } else {
        return { width: shape.height, height: shape.width };
    }
}

// Get the bounding box for collision detection (accounting for rotation around first tile)
function getRotatedBounds(shape) {
    if (shape.rotation === 0) {
        return {
            x1: shape.x,
            y1: shape.y,
            x2: shape.x + shape.width,
            y2: shape.y + shape.height,
            width: shape.width,
            height: shape.height
        };
    }

    // Calculate bounds when rotated around the first tile center
    const firstTileCenterX = shape.x + GRID_SIZE / 2;
    const firstTileCenterY = shape.y + GRID_SIZE / 2;

    // Get the corners of the original shape
    const corners = [
        { x: 0, y: 0 },
        { x: shape.width, y: 0 },
        { x: shape.width, y: shape.height },
        { x: 0, y: shape.height }
    ];

    // Rotate each corner around the first tile center
    const angle = shape.rotation * Math.PI / 180;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    const rotatedCorners = corners.map(corner => {
        // Translate to origin (relative to first tile center)
        const relX = corner.x - GRID_SIZE / 2;
        const relY = corner.y - GRID_SIZE / 2;

        // Rotate
        const rotX = relX * cos - relY * sin;
        const rotY = relX * sin + relY * cos;

        // Translate back to world coordinates
        return {
            x: firstTileCenterX + rotX,
            y: firstTileCenterY + rotY
        };
    });

    // Find bounding box
    const xs = rotatedCorners.map(c => c.x);
    const ys = rotatedCorners.map(c => c.y);

    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    return {
        x1: minX,
        y1: minY,
        x2: maxX,
        y2: maxY,
        width: maxX - minX,
        height: maxY - minY
    };
}

// Check if mouse is inside a shape (accounting for rotation around first tile)
let is_mouse_in_shape = function (x, y, shape) {
    if (shape.rotation === 0) {
        // Simple case - no rotation
        return (
            x >= shape.x &&
            x <= shape.x + shape.width &&
            y >= shape.y &&
            y <= shape.y + shape.height
        );
    }

    // For rotated shapes, transform mouse coordinates back to shape's local space
    const firstTileCenterX = shape.x + GRID_SIZE / 2;
    const firstTileCenterY = shape.y + GRID_SIZE / 2;

    // Translate mouse position relative to rotation center
    const relX = x - firstTileCenterX;
    const relY = y - firstTileCenterY;

    // Rotate back by negative angle
    const angle = -shape.rotation * Math.PI / 180;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    const localX = relX * cos - relY * sin + GRID_SIZE / 2;
    const localY = relX * sin + relY * cos + GRID_SIZE / 2;

    // Check if point is inside the original shape bounds
    return (
        localX >= 0 &&
        localX <= shape.width &&
        localY >= 0 &&
        localY <= shape.height
    );
}

// Check collision between shapes
function checkCollision(shapeToCheck) {
    for (const shape of shapes) {
        if (shape === shapeToCheck) continue;

        const a = getRotatedBounds(shapeToCheck);
        const b = getRotatedBounds(shape);

        if (a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1) {
            return true;
        }
    }
    return false;
}

// Check if shape is within grid bounds
function isWithinBounds(shape) {
    const bounds = getRotatedBounds(shape);
    return bounds.x1 >= grid_min_x &&
        bounds.y1 >= grid_min_y &&
        bounds.x2 <= grid_max_x &&
        bounds.y2 <= grid_max_y;
}

// Check if shape position is aligned to grid
function isGridAligned(shape) {
    return (shape.x % GRID_SIZE === 0) && (shape.y % GRID_SIZE === 0);
}

let mouse_down = function (event) {
    event.preventDefault();

    const rect = canvas.getBoundingClientRect();
    startX = event.clientX - rect.left;
    startY = event.clientY - rect.top;

    shapes.forEach(shape => shape.selected = false);

    let index = 0;
    for (let shape of shapes) {
        if (is_mouse_in_shape(startX, startY, shape)) {
            current_shape_index = index;
            is_dragging = true;
            shape.selected = true;
            oldX = shape.x;
            oldY = shape.y;
            draw_shapes();
            return;
        }
        index++;
    }

    current_shape_index = null;
    draw_shapes();
}

let mouse_up = function (event) {
    if (!is_dragging) return;

    event.preventDefault();
    is_dragging = false;

    if (current_shape_index !== null) {
        const shape = shapes[current_shape_index];

        const snappedX = Math.round(shape.x / GRID_SIZE) * GRID_SIZE;
        const snappedY = Math.round(shape.y / GRID_SIZE) * GRID_SIZE;

        shape.x = snappedX;
        shape.y = snappedY;

        // Check if the snapped position is valid
        if (!isWithinBounds(shape) || checkCollision(shape)) {
            // Invalid position, revert to old position
            shape.x = oldX;
            shape.y = oldY;
        }

        draw_shapes();
    }
};

let mouse_out = function (event) {
    if (!is_dragging) {
        return;
    }
    event.preventDefault();
    is_dragging = false;
}

let mouse_move = function (event) {
    if (!is_dragging || current_shape_index === null) return;

    event.preventDefault();
    const rect = canvas.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;

    let dx = mouseX - startX;
    let dy = mouseY - startY;

    let shape = shapes[current_shape_index];
    const newX = shape.x + dx;
    const newY = shape.y + dy;

    // Temporarily move the shape
    shape.x = newX;
    shape.y = newY;

    // Check if the new position is valid
    if (!isWithinBounds(shape) || checkCollision(shape)) {
        // Invalid position, revert
        shape.x -= dx;
        shape.y -= dy;
    } else {
        // Valid position, update start coordinates
        startX = mouseX;
        startY = mouseY;
    }

    draw_shapes();
}

canvas.onmousedown = mouse_down;
canvas.onmouseup = mouse_up;
canvas.onmouseout = mouse_out;
canvas.onmousemove = mouse_move;

let draw_shapes = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid first
    const canvasWidth = grid_max_x;
    const canvasHeight = grid_max_y;

    ctx.strokeStyle = 'lightgray';
    ctx.lineWidth = 1;

    for (let x = 0; x <= canvasWidth; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasHeight);
        ctx.stroke();
    }

    for (let y = 0; y <= canvasHeight; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvasWidth, y);
        ctx.stroke();
    }

    // Draw shapes rotating around the first tile (100x100 grid cell)
    for (let shape of shapes) {
        ctx.save();

        // Rotate around the center of the first grid cell
        const firstTileCenterX = shape.x + GRID_SIZE / 2;
        const firstTileCenterY = shape.y + GRID_SIZE / 2;

        ctx.translate(firstTileCenterX, firstTileCenterY);
        ctx.rotate(shape.rotation * Math.PI / 180);
        ctx.translate(-GRID_SIZE / 2, -GRID_SIZE / 2);

        ctx.fillStyle = shape.color;
        ctx.fillRect(0, 0, shape.width, shape.height);

        if (shape.selected) {
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 3;
            ctx.strokeRect(0, 0, shape.width, shape.height);
        }

        ctx.restore();
    }
}

draw_shapes();

const rotateButton = document.getElementById('rotateButton');

rotateButton.addEventListener('click', () => {
    const selectedShape = shapes.find(shape => shape.selected);

    if (!selectedShape) return;

    const oldRotation = selectedShape.rotation;
    const oldX = selectedShape.x;
    const oldY = selectedShape.y;

    // Rotate 90 degrees
    selectedShape.rotation = (oldRotation + 90) % 360;

    // Check if rotation is valid (within bounds and no collision)
    if (!isWithinBounds(selectedShape) || checkCollision(selectedShape)) {
        // Invalid rotation, revert everything
        selectedShape.rotation = oldRotation;
        selectedShape.x = oldX;
        selectedShape.y = oldY;
    } else {
        // Valid rotation - ensure the first tile stays grid-aligned
        selectedShape.x = Math.round(selectedShape.x / GRID_SIZE) * GRID_SIZE;
        selectedShape.y = Math.round(selectedShape.y / GRID_SIZE) * GRID_SIZE;

        // Double-check after snapping
        if (!isWithinBounds(selectedShape) || checkCollision(selectedShape)) {
            selectedShape.rotation = oldRotation;
            selectedShape.x = oldX;
            selectedShape.y = oldY;
        }
    }

    draw_shapes();
});

const resetButton = document.getElementById('resetGame');

resetButton.addEventListener('click', () => {
    shapes = [];
    shapes.push({ x: 800, y: 50, width: 100, height: 100, color: 'blue', rotation: 0, selected: false });
    shapes.push({ x: 800, y: 175, width: 100, height: 200, color: 'orange', rotation: 0, selected: false });
    shapes.push({ x: 800, y: 400, width: 100, height: 300, color: 'purple', rotation: 0, selected: false });
    shapes.push({ x: 50, y: 800, width: 300, height: 100, color: 'red', rotation: 0, selected: false });
    shapes.push({ x: 375, y: 800, width: 400, height: 100, color: 'yellow', rotation: 0, selected: false });

    current_shape_index = null;
    is_dragging = false;

    draw_shapes();
});
