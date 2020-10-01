'use strict';

const WIZARDS = {
  name: [
    `Иван`,
    `Хуан Себастьян`,
    `Мария`,
    `Кристоф`,
    `Виктор`,
    `Юлия`,
    `Люпита`,
    `Вашингтон`,
  ],
  lastName: [
    `да Марья`,
    `Верон`,
    `Мирабелла`,
    `Вальц`,
    `Онопко`,
    `Топольницкая`,
    `Нионго`,
    `Ирвинг`,
  ],
  coatColor: [
    `rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`,
  ],
  eyesColor: [
    `black`,
    `red`,
    `blue`,
    `yellow`,
    `green`,
  ]
};

const WIZARDS_AMOUNT = 4;
const userDialog = document.querySelector(`.setup`);
const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const fragment = document.createDocumentFragment();


const getRandomCharacteristics = (array) => {
  return array[Math.round(Math.random() * array.length)];
};

const createWizard = () => {
  let wizard = [];
  WIZARDS.name = getRandomCharacteristics(WIZARDS.name) + ` ` + getRandomCharacteristics(WIZARDS.lastName);
  WIZARDS.coatColor = getRandomCharacteristics(WIZARDS.coatColor);
  WIZARDS.eyesColor = getRandomCharacteristics(WIZARDS.eyesColor);
  return wizard;
};

const wizards = [];
for (let i = 0; i < WIZARDS_AMOUNT; i++) {
  wizards[i] = createWizard();
}

for (let i = 0; i < WIZARDS.name.length; i++) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = WIZARDS.name[i];
  wizardElement.querySelector(`.wizard-coat`).style.fill = WIZARDS.coatColor[i];
  wizardElement.querySelector(`.wizard-eyes`).style.fill = WIZARDS.eyesColor[i];
  similarListElement.appendChild(wizardElement);
}


for (let i = 0; i < WIZARDS_AMOUNT; i++) {
  const newElement = document.createElement(`div`);
  newElement.className = 'el';
  newElement.innerHTML = '<span>' + i + '</span>';

  fragment.appendChild(newElement);
}

similarListElement.appendChild(fragment);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);
userDialog.classList.remove(`hidden`);
