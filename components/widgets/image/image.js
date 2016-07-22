var React = require('react');
var ReactDOM = require('react-dom');
var Widget = require('./../Widget');


var Image = React.createClass({
  mixins: [],

  propTypes : {
    src : React.PropTypes.string,
  },

  getInitialState: function() {
    return {
      src: this.props.src,
    };
  },  
  
  render: function() {
    return (
      <Widget className="widget-image"  widgetid={this.props.widgetid} row={this.props.row} col={this.props.col} sizex={this.props.sizex} sizey={this.props.sizey}>
        <a href="http://repozitory.com"><img src={this.state.src} data-bind-width="width"/></a>
      </Widget>
    );
  }
});
module.exports = Image;