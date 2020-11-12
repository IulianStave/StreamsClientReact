import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  // renderInput(formProps) {
  renderInput({ input, label }) {
    return (
      // <input {...formProps.input}
      <div className="field">
        <label>{label}</label>
        <input
          {...input}
          // onChange={formProps.input.onChange}
          // value={formProps.input.value}
        />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
