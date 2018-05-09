let friends = require('../data/friends.js');

module.exports = function (app) {
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });
  

  app.post('/api/friends', function(req, res) {
    console.log(req.body);
    console.log(friends);
    var newUser = req.body;
  
    var currentScore;
    var userindex = 0;
    var newdiff = 0;
    var diffAmount = 0;

    for (var i = 0; i < friends.length; i++) {
      var existing = friends[i].scores;
      diffAmount = 0;
      newdiff = 0;
      for (var k = 0; k < newUser.answers.length; k++) {
        diffAmount = Math.abs(parseInt(existing[k]) - parseInt(newUser.answers[k]));
        newdiff += diffAmount
      }
      if (i == 0) {
        currentScore = newdiff
        // console.log("0 ");
        
      } else if (newdiff < currentScore) {
        currentScore = newdiff;
        userindex = i;
        // console.log("User index" + i);
        
      }
      // console.log("current score: " + currentScore + friends[userindex].name);
      
  }
    friends.push(newUser);
    // console.log(friends);
    
    var bestFriend = friends[userindex];
    // console.log(bestFriend);
    res.json({ bestFriend: bestFriend});
    // console.log(friends);
    // console.log(incoming);
    
  
})
} 