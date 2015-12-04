var db = {},
	datastore = require('nedb');
// Initialize Users DB
db.users = new datastore({ 
	  filename: 'data/users.db', 
	  autoload: true,
	  timestampData: true	   
	});
	
// Set Autocompaction to 30 Second intervals
var AutocompactionInterval = 30000;
db.users.persistence.setAutocompactionInterval(AutocompactionInterval);

module.exports = db;
