import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <div className="detail__container">
        <img classname="detail_img" src={location.state.poster} alt={location.state.title} title={location.state.title}/>
        <span className="detail_title">{location.state.title}</span>
        <span>{location.state.year}</span>
        <span>{location.state.summary}</span>
        <span>{location.state.genres}</span>
      </div>
    } else {
      return null;
    }
  }
}
export default Detail;
