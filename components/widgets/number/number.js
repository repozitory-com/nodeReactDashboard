var React = require('react');
var ReactDOM = require('react-dom');
var Widget = require('./../Widget');



var Number = React.createClass({

  propTypes : {
    icon : React.PropTypes.string,
    initialTitle : React.PropTypes.string,
    initialText : React.PropTypes.string,
    initialInfo : React.PropTypes.string,
    style : React.PropTypes.string,
  },
  
  getInitialState: function() {
    var date = new Date();
    return {
      title: this.props.initialTitle,
      text: this.props.initialText,
      info: this.props.initialInfo,
      arrowClass: "icon-arrow-up",
      updatedAt: "Last updated: " + date.toLocaleTimeString(),
      current:10
    };
  },    

  render: function() {
    return (
      <Widget className="widget-number"  widgetid={this.props.widgetid} row={this.props.row} col={this.props.col} sizex={this.props.sizex} sizey={this.props.sizey} style={this.props.style}> 
        <h1 className="title">{this.props.title}</h1>
        <h2 className="value">{this.props.current}</h2>
        <h4>({this.props.text})</h4>
        <p className="more-info">{this.state.info}</p>
        <p className="updated-at">{this.state.updatedAt}</p>
      </Widget>     
    );
  }
});

module.exports = Number;