'use strict';

const target = document.querySelector('#target');
target.innerHTML =
    '<li>First item</li>\n' +
    '<li>Second item</li>\n' +
    '<li>Third item</li>';

// 1. tapa
target.classList.add('my-list');
/* 2. tapa
target.className = 'my-list';
*/