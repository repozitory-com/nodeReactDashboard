## Introduction
User Friendly Dashboard using NodeJS and ReactJS. This is demo dashboard built using NodeJS on server side and ReactJS on client side. For example - this dashboard displays the (*personal*) facebook page counts / impressions, github repos / watchers / forks using line graphs, text, list and many more.  


## Demo
<http://demodash.repozitory.com>


## Key Features

1. We use premade widgets, or fully customizable using ReactJS.
2. We write cron job to update the data after every n time period to your dashboard.
3. Also used the Node JS and socket.io to push data to dashboard.
4. Drag & Drop interface for re-arranging your widgets.
5. Host your dashboards in 30 minutes.


## Getting Started
1. Take clone somewhere in your projects folder

 	```git clone https://github.com/repozitory-com/nodeReactDashboard.git```

2. Install from npm

	```npm install```

3. Edit dashboard.config.js 
	
	- add your facebook app Id and secret key
	- add cron time to run the job to get data updated like every day.
	- example for cron job time -  
	```
	# ┌───────────── min (0 - 59)
	# │ ┌────────────── hour (0 - 23)
	# │ │ ┌─────────────── day of month (1 - 31)
	# │ │ │ ┌──────────────── month (1 - 12)
	# │ │ │ │ ┌───────────────── day of week (0 - 6) (0 to 6 are Sunday to
	# │ │ │ │ │                  Saturday, or use names; 7 is also Sunday)
	# │ │ │ │ │
	# │ │ │ │ │
	# * * * * *  command to execute
	```

4. Start server

	```npm start```

5. Open browser and open below URL

	```
	<http://localhost:3000>
	```
6. More components can be added to this dashboard and can get updated data (*daily, hourly*) from Google Analytics, Trello, Stripe and other APIs on your own dashboard. 

---------------------------

##Browser Compatibility
Tested in Chrome, Safari, and Firefox.


##License
Distributed under the MIT license


##Credits
Node React Dashboard is developed and maintained by Repozitory <http://repozitory.com> a software development company working on web and mobile dashboards. If you are interested in getting a custom dashboard for your company please contact kunal@repozitory.com.
