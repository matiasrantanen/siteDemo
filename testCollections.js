db.dropDatabase();

//create stanleycup collection and add the documents included
db.stanleycup.save(
	[
		{year:'2018', team:'Washington Capitals'},
		{year:'2017', team:'Pittsburgh Penguins'},
		{year:'2016', team:'Pittsburgh Penguins'},
		{year:'2015', team:'Chicago Blackhawks'}
	]
);

// create topplayers collections and add the documents included
db.topplayers.save(
	[
		{season:'2017-2018', player:'Connor McDavid', team: 'Edmonton Oilers', score: '108'},
		{season:'2016-2017', player:'Connor McDavid', team: 'Edmonton Oilers', score: '100'},
		{season:'2015-2016', player:'Patrick Kane', team: 'Chicago BlackHawks', score: '106'},
		{season:'2014-2015', player:'Jamie Benn', team: 'Dallas Stars', score: '86'},
		{season:'2013-2014', player:'Sidney Crosby', team: 'Pittsburgh Penguins', score: '104'}
	]
);