'use strict';

const setupBlock = document.querySelector(`.setup`);
setupBlock.classList.remove(`hidden`);
const wizardsTemplate = document.querySelector(`#similar-wizard-template`).content;
const coatColors = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyesColors = [`black`, `red`, `blue`, `yellow`, `green`];
const USERS = [
  {name: `Иван`,
    lastName: `да Марья`},
  {name: `Хуан Себастьян`,
    lastName: `Верон`},
  {name: `Мария`,
    lastName: `Мирабелла`},
  {name: `Кристоф`,
    lastName: `Вальц`},
  {name: `Виктор`,
    lastName: `Онопко`},
  {name: `Юлия`,
    lastName: `Топольницкая`},
  {name: `Люпита`,
    lastName: `Нионго`},
  {name: `Вашингтон`,
    lastName: `Ирвинг`}
];

const userName = wizardsTemplate.querySelector(`.setup-similar-label`);
const coatColor = wizardsTemplate.querySelector(`.wizard-coat`);
const eyesColor = wizardsTemplate.querySelector(`.wizard-eyes`);
const fragment = document.createDocumentFragment();
const listOfWizards = document.querySelector('.setup-similar-list');
const wizardsSection = document.querySelector('.setup-similar');

const randomName = function () {
  return USERS[Math.round(Math.random() * 7)].name + ` ` + USERS[Math.round(Math.random() * 7)].lastName;
};

const randomColors = function (item) {
  return item[Math.round(Math.random() * 5)];
};


for (let i = 0; i < 4; i++) {
  const wizardElement = wizardsTemplate.cloneNode(true);
  userName.textContent = randomName();
  coatColor.style.fill = randomColors(coatColors);
  eyesColor.style.fill = randomColors(eyesColors);

  fragment.appendChild(wizardElement);
}
listOfWizards.appendChild(fragment);
wizardsSection.classList.remove('hidden');
