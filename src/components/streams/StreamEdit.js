import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    // We use ownProps property match -> params -> id
    // passed by default when rendering in Route component
    // based on path

    // Trigger an action creator fetchStream wired up to the class 
    // component via connect to ensure component isolation
    // No mather how the user gets to this page
    // the component StreamEdit will fetch his own data - the stream
    // from selected from the url (based on id)
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
