var React = require('react');
var ReactDOM = require('react-dom');

var Widget = require('./../Widget');

var Text = React.createClass({
  mixins: [],

  propTypes : {
    initialIcon : React.PropTypes.string,
    initialTitle : React.PropTypes.string,
    initialInfo : React.PropTypes.string,
    initialText : React.PropTypes.string,
    style : React.PropTypes.string,
  },
  
  getDefaultProps : function() {
    return {
      initialIcon : "",
      initialTitle : "",
      initialInfo : "",
      initialText : "",
      style : "",
    };
  },   

  getInitialState: function() {
    return {
      title: this.props.initialTitle,
      text: this.props.initialText,
      info: this.props.initialInfo,
      icon: this.props.initialIcon,
      updatedAt: ""
    };
  },  

  render: function() {
    return (
      <Widget widgetid={this.props.widgetid} row={this.props.row} col={this.props.col} sizex={this.props.sizex} sizey={this.props.sizey}>
        <h1 className="title">{this.props.title}</h1>
        <h3>{this.props.text}</h3>
        <p className="more-info">{this.props.info}</p>
        <p className="updated-at">{this.props.updatedAt}</p>
        <i className={'icon-background ' + (this.props.icon)}></i>
      </Widget>        
    );
  }    
});

module.exports = Text;