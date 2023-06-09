'use strict';
require('es6-promise').polyfill();

import   tabs  from'./modules/tabs';
import   modal, { openModal }  from'./modules/modal';
import   timer  from'./modules/timer';
import   cards  from'./modules/cards';
import   calc  from'./modules/calc';
import   forms  from'./modules/forms';
import   slider  from'./modules/slider';

window.addEventListener('DOMContentLoaded', () =>{

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);
      

    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    modal('[data-modal]','.modal', modalTimerId);
    timer('.timer', '2023-06-11');
    cards();
    calc();
    forms('.form',modalTimerId);
    slider({
        container:'.offer__slider',
        nextArrow:'.offer__slider-next',
        prevArrov:'.offer__slider-prev',
        slide:'.offer__slide',
        totalCounter:'#total',
        currentCountr:'#current',
        wrapper:'.offer__slider-wrapper',
        field:'.offer__slider-inner'
    });
});
