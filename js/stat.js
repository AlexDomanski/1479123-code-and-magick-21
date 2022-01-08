'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const SHIFT = 50;
const FONT_GAP = 15;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const MY_COLOR = `rgba(255, 0, 0, 1)`;


const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + GAP * 3, CLOUD_Y + FONT_GAP);
  ctx.fillText(
      `Список результатов:`,
      CLOUD_X + GAP * 3,
      CLOUD_Y + FONT_GAP * 2 + GAP
  );

  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    let columnHight = (BAR_HEIGHT * times[i]) / maxTime;

    ctx.fillText(
        players[i],
        CLOUD_X + SHIFT + SHIFT * i + BAR_WIDTH * i,
        CLOUD_HEIGHT - GAP
    );


    ctx.fillText(
        times[i].toFixed(0),
        CLOUD_X + SHIFT + SHIFT * i + BAR_WIDTH * i,
        CLOUD_HEIGHT - GAP * 4 - columnHight
    );
    ctx.save();
    ctx.fillStyle = players[i] === `Вы` ? MY_COLOR : `hsl(240, 100%, ${100 * Math.random()}%)`;
    ctx.fillRect(
        CLOUD_X + SHIFT + SHIFT * i + BAR_WIDTH * i,
        CLOUD_HEIGHT - GAP * 2 - columnHight,
        BAR_WIDTH,
        (BAR_HEIGHT * times[i]) / maxTime
    );
    ctx.restore();
  }
};
