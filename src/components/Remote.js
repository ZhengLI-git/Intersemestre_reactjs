import React from 'react'  
import { Component } from 'react'; 

export default class Remote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text1: "ON",
            text2: "ON",
            text3: "ON",
            text4: "ON",
            text5: "TV              ON ",
            text6: "Air conditioner ON ",
        };
    }  
	handleClick1 = (e) => {
		if (this.state.text1 =="ON"){
			this.props.handleHomeChange(true)
			this.setState({ text1: "OFF" });
		}
		else{
			this.props.handleHomeChange(false)
			this.setState({ text1: "ON" });
		} 
	} 
	handleClick2 = (e) => {
		if (this.state.text2 =="ON"){
			this.props.handleHome2Change(true)
			this.setState({ text2: "OFF" });
		}

		else{
			this.props.handleHome2Change(false)
			this.setState({ text2: "ON" }); 
		}
	} 
	handleClick3 = (e) => {
		if (this.state.text3 =="ON"){
			this.props.handleHome3Change(true)
			this.setState({ text3: "OFF" });
		}
		else{
			this.props.handleHome3Change(false)
			this.setState({ text3: "ON" }); 
		}		
	} 
	handleClick4 = (e) => {
		if (this.state.text4 =="ON"){
			this.props.handleHome4Change(true)
			this.setState({ text4: "OFF" });
		}
		else{
			this.props.handleHome4Change(false)
			this.setState({ text4: "ON" }); 
		}
	} 
	handleClick5 = (e) => {
		if (this.state.text5 =="TV              ON "){
			this.props.handleTVChange(true)
			this.setState({ text5: "TV              OFF" });
		}
		else{
			this.props.handleTVChange(false)
			this.setState({ text5: "TV              ON " }); 
		}
	} 
	handleClick6 = (e) => {
		if (this.state.text6 =="Air conditioner ON "){
			this.props.handleAirChange(true)
			this.setState({ text6: "Air conditioner OFF" });
		}
		else{
			this.props.handleAirChange(false)
			this.setState({ text6: "Air conditioner ON "}); 
		}
	} 
    render() { 
        return (
            <div className="remote">
	            <div className="remote-children">
	              <button onClick={this.handleClick1} className="remote-btn">
	                {this.state.text1}
	              </button>
	              <button onClick={this.handleClick2} className="remote-btn">
	                {this.state.text2}
	              </button>
	            </div>
	            <div className="remote-children">
	              <button onClick={this.handleClick3} className="remote-btn">
	                {this.state.text3}
	              </button>
	              <button onClick={this.handleClick4} className="remote-btn">
	                {this.state.text4}
	              </button>
	            </div>
	            <div className="remote-children">
	              <button onClick={this.handleClick5} className="remote-full-btn">
	                {this.state.text5}
	              </button> 
	            </div>
	            <div className="remote-children">
	              <button onClick={this.handleClick6} className="remote-full-btn">
	                {this.state.text6}
	              </button> 
	            </div>
	            <div className="remote-children">
	              <button onClick={this.props.up} className="remote-center-btn">
	                up
	              </button> 
	            </div>
	            <div className="remote-children">
	              <button onClick={this.props.right} className="remote-group-btn">
	                right
	              </button>
	              <div className="remote-group-btn">
	              </div>
	              <button onClick={this.props.left} className="remote-group-btn">
	                left
	              </button>
	            </div>
	            <div className="remote-children">
	              <button onClick={this.props.down} className="remote-center-btn">
	                down
	              </button>
	            </div>
	      	</div>
        );
    }
} 