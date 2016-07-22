var request = require('request');

var CronJob = require('cron').CronJob;

module.exports  = function(send_data, fbdata) {
	new CronJob(fbdata.cron_job_time, function () {
	  	var str = 'https://graph.facebook.com/v2.6/' + fbdata.page + '?access_token=' + fbdata.app_key + '|' + fbdata.app_secret + '&fields=' + fbdata.field;
		request(str, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var field  = fbdata.fields;
				var data = {
					'dataid': "facebookPage",
					'title': "Facebook Likes",
					'current' :  JSON.parse(body).fan_count
				}
				send_data.emit('data', data);
			} else {
				send_data.emit('nodata', "Facebook Error");
			}
		})
	}, null, true, 'America/Los_Angeles');
}
