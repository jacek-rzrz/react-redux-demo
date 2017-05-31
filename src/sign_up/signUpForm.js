import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { saveSignUpData } from './actions';
import { push } from 'react-router-redux';

export const signUpForm = ({ key, nextRoute }) => component => {
  const onSubmit = (values, dispatch) => {
    dispatch(saveSignUpData({[key]: values}));
    dispatch(push(nextRoute));
  };
  const mapStateToProps = state => ({
    form: key,
    initialValues: state.signUp[key],
    onSubmit
  });
  return connect(mapStateToProps)(reduxForm()(component));
};
