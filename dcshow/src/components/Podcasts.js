import React, { Component } from 'react';
import Podcast from './PodcastComponent'

class Podcasts extends Component {
  render() {
    return (
      <div className="Podcasts">
      <Podcast title={"The first DC Show"} source={require("../podcasts/firstShow.mp3")}/>
      </div>
    );
  }
}


export default Podcasts;
