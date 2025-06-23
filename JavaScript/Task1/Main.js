import { frames } from "./Warframes.js";

let currentGenderFilter = 'All';
let currentSearchTerm = '';

function createGenderDropdown() {
    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = 'custom-dropdown';
    
    const dropdownBtn = document.createElement('button');
    dropdownBtn.className = 'dropdown-toggle';
    dropdownBtn.textContent = 'All Genders';
    dropdownContainer.appendChild(dropdownBtn);
    
    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu';
    
    ['All', 'Male', 'Female'].forEach(option => {
        const menuItem = document.createElement('div');
        menuItem.className = 'dropdown-item';
        menuItem.textContent = option;
        menuItem.addEventListener('click', () => {
            dropdownBtn.textContent = option === 'All' ? 'All Genders' : option;
            currentGenderFilter = option;
            applyFilters();
            dropdownMenu.classList.remove('show');
        });
        dropdownMenu.appendChild(menuItem);
    });
    
    dropdownContainer.appendChild(dropdownMenu);
    
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });
    
    document.querySelector('.inputs').appendChild(dropdownContainer);
}

function renderFrames(framesToRender) {
    const grid = document.getElementById('table');
    grid.innerHTML = '';
    
    if (framesToRender.length === 0) {
        grid.innerHTML = '<div class="no-results">No Warframes match your search</div>';
        return;
    }
    
    framesToRender.forEach(frame => {
        grid.innerHTML += `
        <div class="WarFrame ${frame.gender}" id="${frame.id}">
            <img src="${frame.image}" alt="${frame.name}">
            <span>Name: ${frame.name}</span>
            <span>Gender: ${frame.gender}</span>
        </div>
        `;
    });
}

function applyFilters() {
    let filtered = frames;
    
    if (currentGenderFilter !== 'All') {
        filtered = filtered.filter(frame => frame.gender === currentGenderFilter);
    }
    
    if (currentSearchTerm) {
        filtered = filtered.filter(frame => 
            frame.name.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    renderFrames(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    createGenderDropdown();
    
    document.getElementById('name').addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.toLowerCase();
        applyFilters();
    });
    
    document.addEventListener('click', () => {
        document.querySelector('.dropdown-menu')?.classList.remove('show');
    });
    
    applyFilters();
});




// function createGenderDropdown() {
//     const dropdownContainer = document.createElement('div');
//     dropdownContainer.className = 'custom-dropdown';

//     const dropdownBtn = document.createElement('button');
//     dropdownBtn.className = 'dropdown-toggle';
//     dropdownBtn.textContent = 'Filter by Gender';
//     dropdownContainer.appendChild(dropdownBtn);

//     const dropdownMenu = document.createElement('div');
//     dropdownMenu.className = 'dropdown-menu';

//     const options = ['All', 'Male', 'Female'];
//     options.forEach(option => {
//         const menuItem = document.createElement('div');
//         menuItem.className = 'dropdown-item';
//         menuItem.textContent = option;
//         menuItem.dataset.gender = option;
//         menuItem.addEventListener('click', () => {
//             dropdownBtn.textContent = option;
//             filterByGender(option);
//             dropdownMenu.classList.remove('show');
//         });
//         dropdownMenu.appendChild(menuItem);
//     });

//     dropdownContainer.appendChild(dropdownMenu);


//     dropdownBtn.addEventListener('click', () => {
//         dropdownMenu.classList.toggle('show');
//     });


//     document.addEventListener('click', (e) => {
//         if (!dropdownContainer.contains(e.target)) {
//             dropdownMenu.classList.remove('show');
//         }
//     });

//     document.querySelector('.inputs').appendChild(dropdownContainer);
// }

// function renderFrames(framesToRender = frames) {
//     const grid = document.getElementById('table');
//     grid.innerHTML = '';

//     framesToRender.forEach((frame) => {
//         grid.innerHTML += `
//         <div class="WarFrame" id="${frame.id}">
//             <img src="${frame.image}">
//             <span>Name: ${frame.name}</span>
//             <span>Gender: ${frame.gender}</span>
//         </div>
//         `;
//     });
// }




// function filterFrames() {
//     const nameSearch = document.getElementById('name').value.toLowerCase();

//     const filtered = frames.filter(frame => {
//         const matchesName = frame.name.toLowerCase().includes(nameSearch);
//         return matchesName;
//     });

//     renderFrames(filtered);
// }

// function filterByGender(gender) {
//     const filtered = gender === 'All'
//         ? frames
//         : frames.filter(frame => frame.gender === gender);
//     renderFrames(filtered);
// }

// function setupEventListeners() {
//     document.getElementById('name').addEventListener('input', filterFrames);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     createGenderDropdown();
//     renderFrames();
//     setupEventListeners();
// });