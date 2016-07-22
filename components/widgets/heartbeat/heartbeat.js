var React = require('react');
var ReactDOM = require('react-dom');
var Widget = require('./../Widget');

var HeartBeat = React.createClass({
  propTypes : {
    icon : React.PropTypes.string,
    maxTime : React.PropTypes.number,

  },

  getDefaultProps : function() {
    return {
      maxTime: 30,
      icon : "icon-time",
      heartbeat :'My Richa'
    };
  },  

  getInitialState: function() {
    return {
      secondsElapsed: 0,
      isAlive: true
    };
  },

  tick: function() {
    var secondsElapsed = this.state.secondsElapsed + 1
    this.setState({
      isAlive: secondsElapsed < this.props.maxTime,
      secondsElapsed: secondsElapsed,
    });
  },

  onChange: function(data) { 
    this.setState({
      isAlive: true,
      secondsElapsed: 0,
    });
  },
  
  getDataFromServer: function() {
    
  },

  componentDidMount: function() { 
    this.interval = setInterval(this.tick, 1000);
  }, 
  
  componentWillUnmount: function() { 
    clearInterval(this.interval);
  }, 

  render: function() {
    return (
      <Widget className={this.state.isAlive ? 'widget-pass' : 'widget-fail'} widgetid={this.props.widgetid} row={this.props.row} col={this.props.col} sizex={this.props.sizex} sizey={this.props.sizey}>
        <h1 className="title">Time Elapsed</h1>
        <h4>(Seconds since last loaded)</h4>
        <h3>{this.state.secondsElapsed}</h3>
        <i className={'icon-background ' + (this.state.isAlive ? 'icon-ok-circle' : 'icon-ban-circle')}></i>
      </Widget>
    );
  }
});


module.exports = HeartBeat;