var request = require('request');

module.exports  = function(send_data) {
	var data = {
        'dataid': 'text',
        'title': 'Sample Dashboard',
        'info' : 'This is a sample dashboard'
	}
	send_data.emit('data', data);
}