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

    this.path = [];
    this.isDrawing = false;

    this.#addEventListeners();
  }
  #addEventListeners() {
    this.canvas.onmousedown = (evt) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouse = [
        Math.round(evt.clientX - rect.left),
        Math.round(evt.clientY - rect.top),
      ]; // [x, y] coordinates
      this.path = [mouse];
      this.isDrawing = true;
    };
    this.canvas.onmousemove = (evt) => {
      if (this.isDrawing) {
        const rect = this.canvas.getBoundingClientRect();
        const mouse = [
          Math.round(evt.clientX - rect.left),
          Math.round(evt.clientY - rect.top),
        ]; // [x, y] coordinates
        this.path.push(mouse);
        console.log(this.path.length);
      }
    };
    this.canvas.onmouseup = () => {
      this.isDrawing = false;
      this.path = [];
    };
  }
}
