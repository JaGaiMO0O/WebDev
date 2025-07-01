let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");






let shapes = [];
let current_shape_index = null;
let is_dragging = false;
let startX;
let startY;
const grid_min_x = 0;
const grid_max_x = 700;
const grid_min_y = 0;
const grid_max_y = 700;
shapes.push({ x: 800, y: 50, width: 100, height: 100, color: 'blue', rotation: 0, selected: false });
shapes.push({ x: 800, y: 175, width: 100, height: 200, color: 'orange', rotation: 0, selected: false });
shapes.push({ x: 800, y: 400, width: 100, height: 300, color: 'purple', rotation: 0, selected: false });
shapes.push({ x: 50, y: 800, width: 300, height: 100, color: 'red', rotation: 0, selected: false });
shapes.push({ x: 375, y: 800, width: 400, height: 100, color: 'yellow', rotation: 0, selected: false });

let is_mouse_in_shape = function (x, y, shape) {

    const originX = shape.x + 50;
    const originY = shape.y + 50;

    const dx = x - originX;
    const dy = y - originY;
    const angle = shape.rotation * Math.PI / 90;

    const cos = Math.cos(-angle);
    const sin = Math.sin(-angle);
    const localX = dx * cos - dy * sin;
    const localY = dx * sin + dy * cos;

    return (
        localX >= -50 && localX <= shape.width -50 && localY >= -50 && localY <= shape.height -50
    );
}

let mouse_down = function (event) {
    event.preventDefault();

    startX = parseInt(event.clientX);
    startY = parseInt(event.clientY);

    shapes.forEach(shape => shape.selected = false);

    let index = 0;
    for (let shape of shapes) {
        if (is_mouse_in_shape(startX, startY, shape)) {
            current_shape_index = index;
            is_dragging = true;
            shape.selected = true; 
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


        shape.x = Math.round(shape.x / 100) * 100;
        shape.x = Math.max(0, Math.min(shape.x, 700 - shape.width));

        shape.y = Math.round(shape.y / 100) * 100;
        shape.y = Math.max(0, Math.min(shape.y, 700 - shape.height));
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
    if (!is_dragging) {
        return
    } else {
        event.preventDefault();
        let mouseX = parseInt(event.clientX);
        let mouseY = parseInt(event.clientY);

        let dx = mouseX - startX;
        let dy = mouseY - startY;

        let current_shape = shapes[current_shape_index];
        current_shape.x += dx;
        current_shape.y += dy;

        draw_shapes();

        startX = mouseX;
        startY = mouseY;
    }
}

canvas.onmousedown = mouse_down;
canvas.onmouseup = mouse_up;
canvas.onmouseout = mouse_out;
canvas.onmousemove = mouse_move;


let draw_shapes = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let shape of shapes) {
        ctx.save();
        
        const pivotX = shape.x + 50;
        const pivotY = shape.y + 50;

        ctx.translate(pivotX, pivotY);
        ctx.rotate(shape.rotation * Math.PI / 90);

        ctx.fillStyle = shape.color;
        ctx.fillRect(-50, -50, shape.width, shape.height);

        if (shape.selected) {
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 3;
            ctx.strokeRect(-50, -50, shape.width, shape.height);
        }

        ctx.restore();

    }

//Grid

    const gridSize = 100;
    const gridCols = 7;
    const gridRows = 7;
    const canvasWidth = canvas.width - 300;
    const canvasHeight = canvas.height - 300;

    ctx.strokeStyle = 'lightgray';
    ctx.lineWidth = 1;

    for (let x = 0; x <= canvasWidth; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasHeight);
        ctx.stroke();
    }

    for (let y = 0; y <= canvasHeight; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvasWidth, y);
        ctx.stroke();
    }

}


draw_shapes();

const rotateButton = document.getElementById('rotateButton');

rotateButton.addEventListener('click', () => {
    const selectedShape = shapes.find(shape => shape.selected);

    if (!selectedShape) return;

    const newRotation = (selectedShape.rotation + 45) % 360;
    const rotatedWidth = newRotation % 180 === 0 ? selectedShape.width : selectedShape.height;
    const rotatedHeight = newRotation % 180 === 0 ? selectedShape.height : selectedShape.width;

    const pivotX = selectedShape.x + 50;
    const pivotY = selectedShape.y + 50;

    let newX = pivotX - 50;
    let newY = pivotY - 50;
    if (newRotation === 90 || newRotation === 270) {
        newX = pivotX - selectedShape.height / 4;
        newY = pivotY - selectedShape.width / 4;
    }

    if(newX >= grid_min_x && newX + rotatedWidth <= grid_max_x && newY >= grid_min_y && newY + rotatedHeight <= grid_max_y){
        selectedShape.rotation = newRotation;
        selectedShape.x = Math.round(newX / 100) * 100;
        selectedShape.y = Math.round(newY / 100) * 100;
        draw_shapes();
    };

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