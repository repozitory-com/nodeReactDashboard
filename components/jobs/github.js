var request = require('request');

var CronJob = require('cron').CronJob;

module.exports  = function(send_data, githubData) {

	var options = {
	  url: 'https://api.github.com/orgs/' + githubData.user + '/repos',
	  headers: {
	    'User-Agent': 'request'
	  }
	};

	new CronJob(githubData.cron_job_time, function () {
	  	var forks = 0 ;

	  	request(options, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var watchersList= [];
				var allData = JSON.parse(body)
				allData.forEach(function(data){
					watchersList.push({
						"label":data.name,
						"value":data.watchers
					})
					forks += data.forks ;
				})
			    send_data.emit('data', {
					'dataid': 'githubForks',
			        'title': 'Github Repo Forks',
			        'current' : forks
				});
				send_data.emit('data',{
					'dataid': 'githubWatchers',
			        'title': 'Github Repo Watchers',
			        'items' : watchersList 
				});

			}else {
				send_data.emit("nodata", "Github Error");
			}
		})
 
	}, null, true, 'America/Los_Angeles');
}