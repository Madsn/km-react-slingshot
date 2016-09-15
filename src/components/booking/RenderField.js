/*eslint-disable react/prop-types */
import React from 'react';

const RenderField = ({input, label, type, meta: {touched, error}}) => {
  return (
    <div className="form-group">
      <label className="col-sm-2 control-label">{label}</label>
      <div className="col-sm-10">
        <input {...input} className="form-control" placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default RenderField;
