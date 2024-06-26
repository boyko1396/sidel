export default class GoodCount {
  constructor(minusSelector, plusSelector, inputSelector) {
    this.minusBtn = document.querySelector(minusSelector);
    this.plusBtn = document.querySelector(plusSelector);
    this.input = document.querySelector(inputSelector);

    if (this.minusBtn && this.plusBtn && this.input) {
      this.minValue = parseInt(this.input.min);
      this.maxValue = parseInt(this.input.max);
      this.prefix = this.input.dataset.prefix;
      this.setInitialValue();

      this.minusBtn.addEventListener('click', () => this.updateInputValue(-1));
      this.plusBtn.addEventListener('click', () => this.updateInputValue(1));
    }
  }

  updateButtons() {
    const value = parseInt(this.input.value);
    this.minusBtn.classList.toggle('is-disabled', value <= this.minValue);
    this.plusBtn.classList.toggle('is-disabled', value >= this.maxValue);
  }

  updateInputValue(increment) {
    let value = parseInt(this.input.value);
    value += increment;
    value = Math.max(this.minValue, Math.min(this.maxValue, value));
    this.input.value = `${value} ${this.prefix}`;
    this.updateButtons();
  }

  setInitialValue() {
    const initialValue = parseInt(this.input.value);
    this.input.value = `${initialValue} ${this.prefix}`;
    this.updateButtons();
  }
}