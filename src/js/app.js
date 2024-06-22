/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

// support webp, identify device
import BaseHelpers from './helpers/BaseHelpers.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import SliderInit from './modules/SwiperInit.js';
import FaqCard from './modules/FaqCard.js';

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // new HeaderBtnToggle();
  // slider init
  // SliderInit();
  // faq card
  new FaqCard();
});

document.addEventListener('DOMContentLoaded', function () {
  const minusBtn = document.querySelector('.js-good-count-minus');
  const plusBtn = document.querySelector('.js-good-count-plus');
  const input = document.querySelector('.good-count__input');
  const minValue = parseInt(input.min);
  const maxValue = parseInt(input.max);

  function updateButtons() {
    const value = parseInt(input.value);
    minusBtn.classList.toggle('is-disabled', value <= minValue);
    plusBtn.classList.toggle('is-disabled', value >= maxValue);
  }

  function updateInputValue(increment) {
    let value = parseInt(input.value);
    value += increment;
    value = Math.max(minValue, Math.min(maxValue, value));
    const prefix = input.dataset.prefix;
    input.value = `${value} ${prefix}`;
    updateButtons();
  }

  function setInitialValue() {
    const initialValue = parseInt(input.value);
    const prefix = input.dataset.prefix;
    input.value = `${initialValue} ${prefix}`;
    updateButtons();
  }

  minusBtn.addEventListener('click', function () {
    updateInputValue(-1);
  });

  plusBtn.addEventListener('click', function () {
    updateInputValue(1);
  });

  setInitialValue();
});