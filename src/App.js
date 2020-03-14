import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Remote from './components/Remote';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';

import home1ON from './room1L.PNG'; 
import home1OFF from './room1D.PNG'; 
import home2ON from './room2L.PNG'; 
import home2OFF from './room2D.PNG'; 

import home3ON from './room3L.PNG'; 
import home3OFF from './room3D.PNG'; 
import home4ON from './room4L.PNG'; 
import home4OFF from './room4D.PNG'; 

import tvOFF from './tvoff.PNG';
import tvON from './tvon.gif';  

import airOFF from './airoff.PNG'; 
import airON from './airon.PNG'; 
import background1n from './background1D.PNG';
import background2n from './background2D.PNG';
import background3n from './background3D.PNG';
import background1d from './background1L.PNG';
import background2d from './background2L.PNG';
import background3d from './background3L.PNG';

import remote from './remote.png';
import Clock from './components/Clock';
import human from'./human.png';



export default class App extends Component {
  constructor() {
     super();
     this.state = {
        house1img: home1OFF,
        house2img: home2OFF, 
        house3img: home3OFF,
        house4img: home4OFF,
        tvimg: tvOFF,
        airimg: airOFF,
        background1img: background1n,
        background2img: background2n,
        background3img: background3n,
        background4img: background3n,
       right : 10,
       bottom : 10,

     }
  }
  
  handleHomeChange = (toggle) => { 
    if (toggle == true){
      this.setState({house1img : home1ON}) 
    } else {
      this.setState({house1img : home1OFF})
    }
  }
  handleHome2Change = (toggle) => { 
    if (toggle == true){
      this.setState({house2img : home2ON}) 
    } else {
      this.setState({house2img : home2OFF})
    }
  }
  handleHome3Change = (toggle) => { 
    if (toggle == true){
      this.setState({house3img : home3ON}) 
    } else {
      this.setState({house3img : home3OFF})
    }
  }
  handleHome4Change = (toggle) => { 
    if (toggle == true){
      this.setState({house4img : home4ON}) 
    } else {
      this.setState({house4img : home4OFF})
    }
  }
  handleTVChange = (toggle) => { 
    if (toggle == true){
      this.setState({tvimg : tvON}) 
    } else {
      this.setState({tvimg : tvOFF})
    }
  }
  handleAirChange = (toggle) => { 
    if (toggle == true){
      this.setState({airimg : airON}) 
      toggle = false
    } else {
      this.setState({airimg : airOFF})
    }
  }
  up = (toggle) => { 
      this.setState({bottom : this.state.bottom + 10 }) 
  }
  down = (toggle) => { 
      this.setState({bottom : this.state.bottom - 10 }) 
  }
  right = (toggle) => { 
      this.setState({right : this.state.right + 10 }) 
  }
  left = (toggle) => { 
      this.setState({right : this.state.right - 10 }) 
  }
  changeBackground = (toggle) =>{
    if (toggle == true){
      this.setState({background1img : background1d}) 
      this.setState({background2img : background2d})
      this.setState({background3img : background3d})
      this.setState({background4img : background3d})
    } else {
      this.setState({background1img : background1n})
      this.setState({background2img : background2n})
      this.setState({background3img : background3n})
      this.setState({background4img : background3n})
    }
  }

  render() {
  var backgroundDynamic1 = {  
    backgroundImage:`url(${this.state.background1img})`
  }; 
  var backgroundDynamic2 = {  
    backgroundImage:`url(${this.state.background2img})`
  }; 
  var backgroundDynamic3 = {  
    backgroundImage:`url(${this.state.background3img})`
  }; 
  var backgroundDynamic4 = {  
    backgroundImage:`url(${this.state.house2img})`
  };
  var backgroundDynamic5 = {  
    backgroundImage:`url(${this.state.house4img})`
  };
  var humanPosition = {
    right : this.state.right,
    bottom : this.state.bottom
  };
  var height44 = {
    height: '44%'
  };
    return (
      <div className="App">
        <div className="human" style={ humanPosition }>
          <img src={human}/>
        </div>
       <Router>
         <Header  changeBackground={this.changeBackground}/>
         <div className="inner">
          <div className="layout-prin">
            <div className="layout-top" >
              <div className="layout-left" style={ backgroundDynamic1 } >
                <div className="house-1">
                  <img className="house-image" src={this.state.house1img} alt="Logo" />
                </div>             
              </div>
              <div className="layout-right"  style={ backgroundDynamic2 } >
                <div className="house-2" style={ backgroundDynamic4 }>
                  <div className="layout-top">
                    <div className="layout-left">
                      <div className="layout-top">
                        <div className="layout-left">
                        </div>
                        <div className="layout-right">
                          <div className="layout-top height35">
                          1
                          </div>
                          <div className="layout-bottom" >
                            <Clock/>
                          </div>
                        </div>
                      </div>
                      <div className="layout-bottom" >
                        <div className="layout-left lay-3">
                        </div>
                        <div className="layout-right">
                        </div>
                      </div>
                    </div>
                    <div className="layout-right">
                    </div>
                  </div>
                  <div className="layout-bottom" >
                    <div className="layout-left lay-3">
                    </div>
                    <div className="layout-right">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-bottom" >
              <div className="layout-left lay-3" style={ backgroundDynamic3 }> 
                <div className="house-3">
                  <img className="house-image" src={this.state.house3img} alt="Logo" />
                </div>
              </div>
              <div className="layout-right" style={ backgroundDynamic3 }>
                <div className="house-4" style={ backgroundDynamic5 }>
                  <div className="layout-top" style={height44}>
                    <div className="layout-left">
                      <div className="layout-top">
                        <div className="layout-left">
                        </div>
                        <div className="layout-right">
                        </div>
                      </div>
                      <div className="layout-bottom" >
                        <div className="layout-left lay-3">
                          <img className="air-image" src={this.state.airimg} alt="Logo" />
                        </div>
                        <div className="layout-right">
                        </div>
                      </div>
                    </div>
                    <div className="layout-right">
                    </div>
                  </div>
                  <div className="layout-bottom" >
                    <div className="layout-left lay-3">
                    </div>
                    <div className="layout-right">
                      <div className="layout-top">
                        <div className="layout-left">
                          <img className="tv-image" src={this.state.tvimg} alt="Logo" />
                        </div>
                        <div className="layout-right">
                        </div>
                      </div>
                      <div className="layout-bottom" >
                        <div className="layout-left lay-3">
                        </div>
                        <div className="layout-right">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="layout-1">
            <Remote handleHomeChange={this.handleHomeChange}
            handleHome2Change = {this.handleHome2Change}
            handleHome3Change = {this.handleHome3Change}
            handleHome4Change = {this.handleHome4Change}
            handleTVChange = {this.handleTVChange}
            handleAirChange = {this.handleAirChange}
            up = {this.up}
            down = {this.down}
            left = {this.left}
            right = {this.right}/>
          </div>
         </div>
       </Router>

      </div>
    );
  }
} 