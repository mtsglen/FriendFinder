let existingUsers = [];

let incomingUser = {};

$("#subButton").on("click", function() {
  event.preventDefault();
  console.log("one");
  let questions = $('.dropdownMenuButton');
  let answers = [];
  console.log("two");
  for (var i=0; i<questions.length; i++) {
    let values = dropdown-menu.val();
    answers.push(values);
    
  }
  console.log("three");
  
  incomingUser = {
    name: $('#name').val().trim(),
    picture: $('#picture').val().trim(),
    answers: answers
  };
  console.log(incomingUser);
});

console.log(incomingUser);
