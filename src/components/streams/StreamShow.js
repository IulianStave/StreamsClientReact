import React from "react";
import { fetchStream } from "../../actions";
import { connect } from "react-redux";
import flv from "flv.js";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }
  
  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    // OBS setup: Source: Input, Output Settings:: Service = Custom... 
    // Server = rtmp://localhost/live 
    // Key=StreamId
    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;
    
    // set up video player
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }


  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;
    return (
      <div className="item">
        <video ref={this.videoRef} controls={true} style={{ width: "100%" }} />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
