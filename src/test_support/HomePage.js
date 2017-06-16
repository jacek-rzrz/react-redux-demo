import { Counter } from '../counter';
import { Provider } from 'react-redux';
import { push } from 'react-router-redux';

export class HomePage {

  constructor(screen) {
    this.screen = screen;
  }

  open() {
    const reduxProvider = this.screen.find(Provider);
    const store = reduxProvider.prop('store');
    store.dispatch(push(''));
  }

  isCurrent() {
    return this.screen.find('[data-qa="home-page"]').exists();
  }

  clickCountersLink() {
    this.screen.find('[data-qa="counters-link"]')
      .simulate('click', {button: 0});
  }

  clickSignUpLink() {
    this.screen.find('[data-qa="sign-up-link"]')
      .simulate('click', {button: 0});
  }
}
