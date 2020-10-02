'use strict';

const WIZARDS_DATA = {
  names: [
    `Иван`,
    `Хуан Себастьян`,
    `Мария`,
    `Кристоф`,
    `Виктор`,
    `Юлия`,
    `Люпита`,
    `Вашингтон`,
  ],
  lastNames: [
    `да Марья`,
    `Верон`,
    `Мирабелла`,
    `Вальц`,
    `Онопко`,
    `Топольницкая`,
    `Нионго`,
    `Ирвинг`,
  ],
  coatColors: [
    `rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`,
  ],
  eyesColors: [
    `black`,
    `red`,
    `blue`,
    `yellow`,
    `green`,
  ]
};

const WIZARDS_NUMBER = 4;
const userDialog = document.querySelector(`.setup`);
const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const fragment = document.createDocumentFragment();


const getRandomArrayElement = (array) => {
  return array[Math.round(Math.random() * array.length)];
};

const createWizard = () => {
  let wizard = {};
  wizard.name = getRandomArrayElement(WIZARDS_DATA.names) + ` ` + getRandomArrayElement(WIZARDS_DATA.lastNames);
  wizard.coatColor = getRandomArrayElement(WIZARDS_DATA.coatColors);
  wizard.eyesColor = getRandomArrayElement(WIZARDS_DATA.eyesColors);
  return wizard;
};

const createWizards = () => {
  const wizards = [];

  for (let i = 0; i < WIZARDS_NUMBER; i++) {
    wizards.push(createWizard());
  }

  return wizards;
};

const renderWizard = (wizard) => {
  let wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return wizardElement;
};

const renderWizards = (wizards) => {
  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
};

const wizards = createWizards();

renderWizards(wizards);
similarListElement.appendChild(fragment);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);
userDialog.classList.remove(`hidden`);
