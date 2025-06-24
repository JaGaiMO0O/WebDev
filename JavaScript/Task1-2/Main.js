import { frames } from "./Warframes.js";

function createGenderDropdown() {
    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = 'custom-dropdown';

    const dropdownBtn = document.createElement('button');
    dropdownBtn.className = 'dropdown-toggle';
    dropdownBtn.textContent = 'Filter by Gender';
    dropdownContainer.appendChild(dropdownBtn);

    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu';

    const options = ['All', 'Male', 'Female'];
    options.forEach(option => {
        const menuItem = document.createElement('div');
        menuItem.className = 'dropdown-item';
        menuItem.textContent = option;
        menuItem.dataset.gender = option;
        menuItem.addEventListener('click', () => {
            dropdownBtn.textContent = option;
            filterByGender(option);
            dropdownMenu.classList.remove('show');
        });
        dropdownMenu.appendChild(menuItem);
    });

    dropdownContainer.appendChild(dropdownMenu);


    dropdownBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });


    document.addEventListener('click', (e) => {
        if (!dropdownContainer.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    document.querySelector('.inputs').appendChild(dropdownContainer);
}

function createPriceSelection() {
    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = 'custom-dropdown';

    const dropdownBtn = document.createElement('button');
    dropdownBtn.className = 'dropdown-toggle';
    dropdownBtn.textContent = 'Select Price Range';
    dropdownContainer.appendChild(dropdownBtn);

    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu';

    const options = ['All', 'More Than 500', 'Less Than 500'];
    options.forEach(option => {
        const menuItem = document.createElement('div');
        menuItem.className = 'dropdown-item';
        menuItem.textContent = option;
        menuItem.dataset.gender = option;
        menuItem.addEventListener('click', () => {
            dropdownBtn.textContent = option;
            filterByPrice(option);
            dropdownMenu.classList.remove('show');
        });
        dropdownMenu.appendChild(menuItem);
    });

    dropdownContainer.appendChild(dropdownMenu);


    dropdownBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });


    document.addEventListener('click', (e) => {
        if (!dropdownContainer.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    document.querySelector('.inputs').appendChild(dropdownContainer);
}

function renderFrames(framesToRender = frames) {
    const grid = document.getElementById('table');
    grid.innerHTML = '';

    const isAdmin = localStorage.getItem('userRole') === 'admin';

    framesToRender.forEach((frame) => {
        const frameClass = isAdmin ? 'WarFrameAdmin' : 'WarFrame';
        grid.innerHTML += `
        <div class="${frameClass}">
            <img src="${frame.image}">
            <span>Name: ${frame.name}</span>
            <span>Gender: ${frame.gender}</span>
            <span>Price: ${frame.price}</span>
        </div>
        `;
    });
}

let selectedGender = 'All';
let selectedPrice = 'All';

function filterFrames(gender, price) {
    const nameSearch = document.getElementById('name').value.toLowerCase();

    const filteredName = frames.filter(frame => {
        const matchesName = frame.name.toLowerCase().includes(nameSearch);
        const matchesGender = selectedGender === 'All' || frame.gender === selectedGender;
        const matchesPrice = selectedPrice === 'All' || selectedPrice == 'More Than 500' && frame.price > 500 || selectedPrice == 'Less Than 500' && frame.price < 500;
        return matchesName && matchesGender && matchesPrice;
    });

    renderFrames(filteredName);
}

function filterByGender(gender) {
    selectedGender = gender;
    filterFrames();
}

function filterByPrice(price) {
    selectedPrice = price;
    filterFrames();
}

function setupEventListeners() {
    document.getElementById('name').addEventListener('input', filterFrames);
}

document.addEventListener('DOMContentLoaded', () => {
    createGenderDropdown();
    createPriceSelection();
    setupEventListeners();
    renderFrames();
});

