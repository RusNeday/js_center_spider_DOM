'use strict';

const wall = document.querySelector('.wall');

const styleWall = getComputedStyle(wall);

const spider = document.querySelector('.spider');

const styleSpider = getComputedStyle(spider);

spider.style.top = `${(parseFloat(styleWall.width) / 2)
  - parseFloat(styleSpider.width) / 2}px`;

spider.style.left = `${(parseFloat(styleWall.height) / 2)
- parseFloat(styleSpider.height) / 2}px`;
