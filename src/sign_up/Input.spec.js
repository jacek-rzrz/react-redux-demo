import React from 'react';
import { mount } from 'enzyme';
import { Input } from './Input';

describe('Input', () => {

  describe('when a validation error occurs', () => {
    it('renders the error message', () => {
      const props = {
        input: {
          name: 'myfield'
        },
        meta: {
          touched: true,
          error: 'password is too long'
        }
      };
      const input = mount(<Input {...props} />);

      const errorMsg = input.find('[data-qa="myfield-error"]');
      expect(errorMsg).toHaveText('password is too long');
    });

    describe('before the field is touched', () => {
      it('does not render the error tag', () => {
        const props = {
          input: {},
          meta: {
            touched: false,
            error: 'some error'
          }
        };
        const input = mount(<Input {...props} />);

        const errorMsg = input.find('[data-qa="myfield-error"]');
        expect(errorMsg).not.toBePresent();
      });
    });


  });

});
