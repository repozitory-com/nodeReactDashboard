var socketServer = require('socket.io')
var fs = require('fs');

//include all jobs to get data and send to UI dashboard
module.exports  =  function(server) {

	var io = socketServer.listen(server);


	io.sockets.on('connection', function(socket){
		require('./jobs/text')(socket);
		fs.readFile('dashboard.config.js', function(err, data) {
			if(err) {
				console.log("error in reading file - ", err);
			}
			if(data) {
				var jobs = JSON.parse(data.toString())
				if(jobs.facebookPage) {
					require('./jobs/facebook')(socket, jobs.facebookPage);
				}
				if(jobs.github) {
					require('./jobs/github')(socket, jobs.github);
				}
			}	
		});
	})
}
