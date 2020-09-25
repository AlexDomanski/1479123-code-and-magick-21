"use strict";

// Константы
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const GAP = 10;
const BAR_GAP = 50;
const FONT_COLOR = `#000`;
const TEXT_X = 125;
const TEXT_Y = 25;
const TEXT_GAP = 20;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const FIRST_PLAYER_COLOR = `rgba(255, 0, 0, 1)`;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const renderText = (ctx, text, x, y) => {
  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(text, x, y);
};

const getMaxElement = (arr) => {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


let barColor = () => `hsla(230, 60%, ${Math.random() * 75}%, 1)`;

window.renderStatistics = (ctx, names, times) => {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);
  renderText(ctx, `Ура вы победили!`, TEXT_X, TEXT_Y);
  renderText(ctx, `Список результатов:`, TEXT_X, TEXT_Y + TEXT_GAP);


  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    let barX = CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i;
    let barHeight = BAR_HEIGHT * times[i] / maxTime;

    ctx.fillStyle = FONT_COLOR;

    ctx.fillText(
        names[i],
        barX,
        CLOUD_HEIGHT - TEXT_GAP
    );

    ctx.fillText(
        Math.round(times[i]),
        barX,
        CLOUD_HEIGHT - BAR_GAP - barHeight
    );

    ctx.fillStyle = (names[i] === `Вы`) ? FIRST_PLAYER_COLOR : barColor();

    ctx.fillRect(
        barX,
        CLOUD_HEIGHT - TEXT_Y - barHeight,
        BAR_WIDTH,
        barHeight
    );
  }
};
