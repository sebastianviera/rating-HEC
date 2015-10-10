var express = require('express');
var app = express();
var port = 8000 | process.env.PORT;

// initial moving of contact list ot back-end
candidateList = [
		{name:'Ali Saberi', overAllRate: 7, subrates:{item1:1, item2:2, item3:3, item4:4}},
		{name:'Mostafa Purmehdi', overAllRate: 5, subrates:{item1:3, item2:3, item3:3, item4:3}},
		{name:'Sina Sheikh', overAllRate: 2, subrates:{item1:3, item2:3, item3:3, item4:3}},
		{name:'Mirza Abbass', overAllRate: 0, subrates:{item1:3, item2:3, item3:3, item4:3}}
		];

app.use(express.static(__dirname + '/public'));

app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');
  res.json(candidateList);
  // db.contactlist.find(function (err, docs) {
  //   console.log(docs);
  //   res.json(docs);
  });

app.listen(port, function(){
	console.log("Server is listening at the port: " + port);
});