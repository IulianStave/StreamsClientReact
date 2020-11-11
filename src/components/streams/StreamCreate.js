import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  // renderInput(formProps) {
  renderInput({ input }) {
    return (
      // <input {...formProps.input}
      <input
        {...input}
        // onChange={formProps.input.onChange}
        // value={formProps.input.value}
      />
    );
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
