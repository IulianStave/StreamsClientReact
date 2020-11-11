import React from "react";
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  // state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "336604617237-0jlrqv3440ql2ctk7fpfjcqluasl1uk0.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          // add event listener
          this.onAuthChange(this.auth.isSignedIn.get());
          // wait that authentication state is changed
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // onAuthChange = () => {
  //   this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  // };  
  
  onAuthChange = isSignedInCheck=> {
    if (isSignedInCheck){
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    //if (this.state.isSignedIn == null) {
    if (this.props.isSignedIn == null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui blue google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}


const mapStateToProps = state => {
  return {isSignedIn: state.auth.isSignedIn };
};

export default connect (
  mapStateToProps,
  { signIn, signOut}
)(GoogleAuth);
