import React, {PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors;
};

const renderField = ({input, label, type, meta: {touched, error}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const NewBookingForm = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="category" type="text" component={renderField} label="Category"/>
      <Field name="customer" type="text" component={renderField} label="Name"/>
      <Field name="details" type="text" component={renderField} label="Details"/>
      <Field name="status" type="text" component={renderField} label="Status"/>
      <div>
        <button type="submit" disabled={submitting}>Save booking</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
      </div>
    </form>
  );
};

NewBookingForm.propTypes = {
  //myProp: Proptypes.array.isRequired
};

export default reduxForm({
  form: 'newBooking',
  validate
})(NewBookingForm);
