import React from "react";
import { connect } from "react-redux";

class StreamEdit extends React.Component {
  componentDidMount() {
    // We use ownProps property match -> params -> id
    // passed by default when rendering in Route component
    // based on path
    this.props.fetchStream(this.props.match.params.id);
  }
  
  
  render() {
    console.log(this.props);
    return <div>Edit a stream</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps)(StreamEdit);
