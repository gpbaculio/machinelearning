class SketchPad {
  constructor(container, size = 400) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = size;
    this.canvas.height = size;
    this.canvas.style = `
        background-color: white;
        box-shadow: 0 0 10px 2px black;
    `;
    container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.#addEventListeners();
  }
  #addEventListeners() {
    this.canvas.onmousedown = (evt) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouse = [
        Math.round(evt.clientX - rect.left),
        Math.round(evt.clientY - rect.top),
      ]; // [x, y] coordinates
      console.log(mouse);
    };
  }
}
