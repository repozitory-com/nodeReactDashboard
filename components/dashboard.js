var React = require('react');
var ReactDOM = require('react-dom');

var io = require('socket.io-client');

var Widget = require('./widgets/Widget');
var Text = require('./widgets/text/text');
var Number = require('./widgets/number/number');
var Meter = require('./widgets/meter/meter');
var List = require('./widgets/list/list');
var Image = require('./widgets/image/image');
var HeartBeat = require('./widgets/heartbeat/heartbeat');
var Clock = require('./widgets/clock/clock');


var Dashboard = React.createClass({
    propTypes : {
      widgetHeight : React.PropTypes.number,
      widgetWidth : React.PropTypes.number,
      margins : React.PropTypes.arrayOf(React.PropTypes.number),
    },

    componentWillMount() {
      this.socket = io("http://" + window.location.hostname + ":3001");
      this.socket.on("data", this.getData);
      this.socket.on("nodata", this.errorHandle);
    },

   
    connect() {
      this.setState({status: 'connected'});
    },

    disconnect() {
      this.setState({status: 'disconnected'});
    },

    getData(data) {
      var key = data.dataid;
      var value = data;
      var newState = {};
      newState[key] = value;
      this.setState(newState);
    },
    
    errorHandle(data) {
      alert("OOPS! " + data + " Please check settings and try again.");
    },
   
    getDefaultProps : function() {
      return {
        widgetHeight : 180,
        widgetWidth : 360,
        margin: 5 
      };
    },  
    getInitialState: function() {
      return {
        "text":{title:""}
      }
    },

    componentDidMount: function() {
      $(".grid-stack").gridstack({
        cellHeight: 100,
        verticalMargin: 5
      });
    },

    render: function() {
      return (
        <div className="grid-stack">
            <Text widgetid="mywidget3" row="3" col="0" {...this.state.text}/>
            <Clock widgetid="clock" row="6" col="0" />
            <Number widgetid="valuation" row="9" col="0" title="Facebook Count" text="Github" style="{color:'darkblue'}" initialInfo="This is just sample data" {...this.state.facebookPage}/>
            <Number widgetid="valuation" row="3" col="3" title="Github Forks"  text="octokit" initialInfo="This is just sample data"  sizex="6" {...this.state.githubForks}/>
            <List widgetid="mylist" row="0" col="3" sizey="5" title="Github Watchers" {...this.state.githubWatchers}/>
            <HeartBeat widgetid="hearthbeat" row="9" col="3" />
            <Image widgetid="image" row="0" col="0" src="http://repozitory.com/logo.png" {...this.state} sizey="1"/>
        </div>
      );
    }
});

module.exports = Dashboard;

