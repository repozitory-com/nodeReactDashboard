var React = require('react');
var ReactDOM = require('react-dom');


var Widget = React.createClass({
    propTypes : {
      widgetid: React.PropTypes.string.isRequired,
      row : React.PropTypes.string.isRequired,
      col : React.PropTypes.string.isRequired,
      className: React.PropTypes.string,
      sizex : React.PropTypes.string,
      sizey : React.PropTypes.string,
    },

    getDefaultProps : function() {
      return {
        sizex : "3",
        sizey : "3",
        className: "widget-text"
      };
    },  

    render: function() {
      return (
        <div className="grid-stack-item" data-gs-x={this.props.row} data-gs-y={this.props.col} 
        data-gs-width={this.props.sizex} data-gs-height={this.props.sizey}>
          <div className={'grid-stack-item-content widget ' + ' ' +  (this.props.className)+' ' +(this.props.widgetid)}>
            {this.props.children}
          </div>
        </div>
      );
    }    
  });
module.exports = Widget;