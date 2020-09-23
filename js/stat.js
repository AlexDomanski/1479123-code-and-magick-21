"use strict";

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var FIRST_PLAYER_NAME_X = 110;
var FIRST_PLAYER_NAME_Y = 75;
var FIRST_PLAYER_BAR_X = 160;
var FIRST_PLAYER_BAR_Y = 60;
var FIRST_PLAYER_BAR_WIDTH = 430;
var FIRST_PLAYER_BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText(
    'Вы',
    FIRST_PLAYER_NAME_X,
    FIRST_PLAYER_NAME_Y
  );
  ctx.fillRect(
    FIRST_PLAYER_BAR_X,
    FIRST_PLAYER_BAR_Y,
    FIRST_PLAYER_BAR_WIDTH,
    FIRST_PLAYER_BAR_HEIGHT
  );

  ctx.fillText('Иван', 110, 105);
  ctx.fillRect(160, 90, 430, 20);

  ctx.fillText('Юлия', 110, 135);
  ctx.fillRect(160, 120, 430, 20);
};
