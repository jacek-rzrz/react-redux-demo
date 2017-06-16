import { submit, setValue, click } from '.';
import { Link } from 'react-router';

export class SignUpPage {

    constructor(screen) {
      this.screen = screen;
    }

    isCurrent() {
      return this.screen.find('form').exists();
    }

    clickNext() {
      submit(this.screen.find('[data-qa="sign-up-next"]'));
    }

    clickPaymentLink() {
      click(this.screen.find('a[href="/sign-up/payment"]'));
    }

    clickAddressLink() {
      click(this.screen.find('a[href="/sign-up/address"]'));
    }

    clickContactLink() {
      click(this.screen.find('a[href="/sign-up/contact"]'));
    }

    fillIn(field, value) {
      setValue(this.getField(field), value);
    }

    getField(name) {
      return this.screen.find(`[name="${name}"]`);
    }

    getFieldValue(name) {
      return this.getField(name).prop('value');
    }

    fillInFirstName(firstName) {
      this.fillIn('firstName', firstName);
    }

    getFirstName() {
      return this.getFieldValue('firstName');
    }

    fillInLastName(lastName) {
      this.fillIn('lastName', lastName);
    }

    getLastName() {
      return this.getFieldValue('lastName');
    }

    fillInEmail(email) {
      this.fillIn('email', email);
    }

    getEmail() {
      return this.getFieldValue('email');
    }

    fillInStreet(street) {
      this.fillIn('street', street);
    }

    getStreet() {
      return this.getFieldValue('street');
    }

    fillInPostCode(postCode) {
      this.fillIn('postCode', postCode);
    }

    getPostCode() {
      return this.getFieldValue('postCode');
    }

    fillInCity(city) {
      this.fillIn('city', city);
    }

    getCity() {
      return this.getFieldValue('city');
    }

    fillInCardNumber(cardNumber) {
      this.fillIn('cardNumber', cardNumber);
    }

    getCardNumber() {
      return this.getFieldValue('cardNumber');
    }

    fillInCardExpiryDate(cardExpiryDate) {
      this.fillIn('cardExpiryDate', cardExpiryDate);
    }

    getCardExpiryDate() {
      return this.getFieldValue('cardExpiryDate');
    }

    fillInCardCvv(cardCvv) {
      this.fillIn('cardCvv', cardCvv);
    }

    getCardCvv() {
      return this.getFieldValue('cardCvv');
    }

    getSignUpDetailsConfirmation() {
      const getValue = dataQa => this.screen.find(`[data-qa="${dataQa}"]`).text();
      return {
        name: getValue('name'),
        email: getValue('email'),
        address: getValue('address'),
        payment: getValue('payment'),
      };
    }
}
