/* eslint-disable react/prop-types */

import React, {PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import RenderField from './RenderField';

const validate = (values) => {
  const errors = {};
    if(!values.customer) {
      errors.customer = 'Name is required';
    }
  return errors;
};

const NewBookingForm = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props;
  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <Field name="category" type="text" component={RenderField} label="Category"/>
      <Field name="customer" type="text" component={RenderField} label="Name"/>
      <Field name="details" type="text" component={RenderField} label="Details"/>
      <Field name="status" type="text" component={RenderField} label="Status"/>
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <div className="btn-group">
            <button className="btn btn-success" type="submit" disabled={submitting}>Save booking</button>
            <button className="btn btn-danger" type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
          </div>
        </div>
      </div>
    </form>
  );
};

NewBookingForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'newBooking',
  validate
})(NewBookingForm);
