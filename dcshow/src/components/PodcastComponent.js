import React, { Component } from 'react';

import './css/standard.css'
import './css/podcast.css';


// import route Components here


class Podcast extends Component {

  constructor(props){
    super(props);
    this.song=new Audio(this.props.source);
    this.duration=document.getElementById("duration")
    this.state={
      currentTime: document.getElementById('currentTime'),
      songSlider: document.getElementById('podcastSlider'),
      play: false

    }
    this.durationShower=setTimeout(this.showDuration.bind(this), 1000);
    this.podcastSliderUpdater=setInterval(this.updateSongSlider.bind(this), 1000);

  };

  componentWillUnmount(){
    clearInterval(this.podcastSliderUpdater);
    clearTimeout(this.durationShower);

  }
 updateSongSlider(){
    var songTime=Math.round(this.song.currentTime);
    var currentTime=document.getElementById("currentTime");
    currentTime.textContent=this.convertTime(songTime);
    var songSlider=document.getElementById('podcastSlider');
    songSlider.value=songTime;


  }
  convertTime(seconds){
    var minutes=Math.floor(seconds/60);
    var seconds=seconds % 60;
    minutes=(minutes < 10) ?   minutes : minutes;
    seconds=(seconds< 10) ? "0" + seconds : seconds;
    return (minutes +":"+seconds);
  }

  showDuration(){
    var duration=Math.floor(this.song.duration);
    var podcastSlider=document.getElementById('podcastSlider');
    podcastSlider.setAttribute("max", duration);
    var durationObj=document.getElementById("duration");
    durationObj.textContent=this.convertTime(duration);

  }

   playOrPauseSong(){
     var playPauseButton=document.getElementById("playPauseButton");
     if(this.state.play===false){
         this.song.play();
         playPauseButton.src=require("../assets/pauseImage.png");
         this.setState({
           play:true
         });
     }
     else{
       this.song.pause();
       playPauseButton.src=require("../assets/playImage.jpg");
       this.setState({
         play:false
       });

     }


  }


  seekPodcast(){
    var podcastSlider=document.getElementById("podcastSlider");
    var currentTime=document.getElementById("currentTime");
    this.song.currentTime=podcastSlider.value;
    currentTime.textContent=this.convertTime(this.song.currentTime);
  }

  adjustVolume(){
    var volumeSlider=document.getElementById("volumeSlider");
    this.song.volume=volumeSlider.value;
  }
  downloadPodcast(){

  }




  render() {
    return (

      <div className="podcast row">
      <div className="logo  col-3">
      <img src={require("../assets/logo.png")}/>
      </div>


        <div  className="podcastTitle col-4"><div className="title">{this.props.title}</div>
         </div>

        <div class="controllers col-5 ">
          <div class="buttons">
             <a href={this.props.source} download={this.props.title}><img src={require("../assets/downloadImage.png")}  id="downloadButton" /></a>
                 <img id="playPauseButton" src={require("../assets/playImage.jpg")}  onClick={this.playOrPauseSong.bind(this)}/>
          </div>
          <div class="podcastSlider">
          <div id="currentTime" className="current-time">00:00</div>
          <input id="podcastSlider"  type='range' min='0' step='1' onChange={this.seekPodcast.bind(this)}/>
          <div id="duration" className="duration"> 00:00 </div>
          </div>



        </div>





  </div>

    );
  }
}
export default Podcast;
