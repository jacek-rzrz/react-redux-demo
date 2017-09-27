import React from 'react';
import PropTypes from 'prop-types';

export class SubmitButton extends React.Component {

    render() {
        const {disabled, type} = this.props;
        const className = type === 'secondary' ? 'btn-secondary' : 'btn-primary';
        return (
            <div className="form-item">
                <div />
                <button type="submit" className={className} disabled={disabled} data-qa="sign-up-next">
                    next
                </button>
            </div>
        );

    }


}

SubmitButton.propTypes = {
    disabled: PropTypes.bool.isRequired
};

SubmitButton.styleguide = {
    name: 'this name is optional',
    description: 'this is an optional component desc',
    examples: {
        primary__enabled: {description: '', props: {disabled: false}},
        primary__disabled: {description: '', props: {disabled: true}},
        secondary__enabled: {description: '', props: {type: 'secondary', disabled: false}},
        secondary__disabled: {description: '', props: {type: 'secondary', disabled: true}},
    }
};