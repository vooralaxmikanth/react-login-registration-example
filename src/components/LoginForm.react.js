import React  from 'react';
import {Field, reduxForm} from 'redux-form';
import FormField from './FormField';
// import '../styles/login-page.css';

const LoginForm = (props) => {

  const {handleSubmit} = props;

  return (
    <form className="form-signin" onSubmit={handleSubmit}>

        <h2 className="form-signin-heading">Please log in</h2>

        <Field component={FormField}
               name="username"
               id="username"
               type="text"
               placeholder="Username or Email Address"
               required="required"
        />

        <Field component={FormField}
               name="password"
               id="password"
               type="password"
               placeholder="Password"
               required="required"
        />

        <button className="btn btn-lg btn-primary btn-block"
                disabled={props.pristine || props.isSubmitting}
                type="submit">
          {props.isSubmitting ? <i className="fa fa-spin fa-spinner" /> : null} Log in
        </button>

      </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  pristine: React.PropTypes.bool.isRequired,
  isSubmitting: React.PropTypes.bool.isRequired
};

// Decorate the form component
export default reduxForm({
  form: 'login' // a unique name for this form
})(LoginForm);
