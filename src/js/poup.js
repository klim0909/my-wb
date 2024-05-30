export class poup {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
      <div class="navigation-content" id="navigation-content" style="display: flex; transform: translate(0px, 0px);">
      <div class="pop-nav">
          <div class="logo">
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="black" stroke-width="2" fill="white" />
          <text x="50%" y="50%" text-anchor="middle" stroke="#000" stroke-width="1px" dy=".3em" font-size="20">rain09k</text>
      </svg>
          </div>
          <div class="navigation-close">
              <span class="close-first"></span>
              <span class="close-second"></span>
          </div>
        </div>
          <div class="navigation-links">
              <a href="#" data-text="HOME" id="home-link">HOME</a>
              <a href="#" data-text="ABOUT" id="about-link">ABOUT</a>
              <a href="#" data-text="BLOG" id="blog-link">BLOG</a>
              <a href="#" data-text="PORTFOLIO" id="portfolio-link">PORTFOLIO</a>
              <a href="#" data-text="CONTACT" id="contact-link">CONTACT</a>
          </div>
      </div>
    `;
  }
 
  bindToDOM() {
      this.parentEl.innerHTML = poup.markup;
      const addButton = this.parentEl.querySelector('.navigation-close');
        addButton.addEventListener('click', () => {
            this.removeTask();
        });
  }
  removeTask() {
    this.parentEl.innerHTML = ''; // Удаляем все содержимое родительского элемента
}
}
        
