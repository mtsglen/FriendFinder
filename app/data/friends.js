let existingUsers = [];

let incomingUser = {};

$(".button").on("click", function() {
  event.preventDefault();
  let questions = $('.dropdownMenuButton');
  let answers = [];
  for (var i=0; i<questions.length; i++) {
    let values = dropdown-menu.val();
    answers.push(values);
    
  }
  incomingUser = {
    name: $('#name').val().trim(),
    picture: $('#picture').val().trim(),
    answers: answers
  };
  
});