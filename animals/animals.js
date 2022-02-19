import { animals } from '../data.js';
import { findById } from '../utils.js';

const animalName = document.getElementById('name');
const animalImage = document.getElementById('image');
const animalType = document.getElementById('type');
const animalSaying = document.getElementById('saying');

const params = new URLSearchParams(window.location.search);
// console.log(params.get('id'));

const animalSelected = findById(params.get('id'), animals);
const typeOfAnimal = animalSelected.type;
animalImage.src = `../assets/${typeOfAnimal}.svg`;

animalName.textContent = `${animalSelected.name}`;
animalType.textContent = `Classification: ${typeOfAnimal.toUpperCase()} `;
animalSaying.textContent = `${animalSelected.says} `;