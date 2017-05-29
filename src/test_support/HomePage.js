import { Counter } from '../counter';

export class HomePage {

  constructor(screen) {
    this.screen = screen;
  }

  isCurrent() {
    return this.screen.find('[data-qa="home-page"]');
  }

  clickCountersLink() {
    this.screen.find('[data-qa="counters-link"]')
      .simulate('click', {button: 0});
  }
}
