export default class ShoppableImage extends window.HTMLElement {
    constructor () {
      super()

      this.elements = this.querySelectorAll('.shoppable-wrapper')
      // console.dir(this.elements[0].childNodes[1])
      if (!this.elements) return

      this.elements.forEach((el) => {
        this.dot = el.querySelector('.dot')
        this.dot.addEventListener('mouseover', () => {
          el.classList.add("hover-active");
        });
  
        el.addEventListener('mouseout', () => {
          el.classList.remove("hover-active");
        });
  
        this.dot.addEventListener('click', () => {
          el.classList.add("hover-active");
        });
      });
    }
  }
  