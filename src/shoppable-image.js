export default class ShoppableImage extends window.HTMLElement {
    constructor () {
      super()

      this.elements = this.querySelectorAll('.shoppable-wrapper')
      if (!this.elements) return

      this.elements.forEach((el) => {
        el.addEventListener('mouseover', () => {
          el.classList.add("hover-active");
        });
  
        el.addEventListener('mouseout', () => {
          el.classList.remove("hover-active");
        });
  
        el.addEventListener('click', () => {
          el.classList.add("hover-active");
        });
      });
    }
  }
  