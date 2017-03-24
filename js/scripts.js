$(document).ready(function(){
  $("form#Suggester").submit(function(event) {
    var name = $("#nameInput").val();
    var group1 = $("input:radio[name=group1]:checked").val();
    var group2 = $("input:radio[name=group2]:checked").val();
    var group3 = $("input:radio[name=group3]:checked").val();
    console.log();

    if (group1 === 'option1') {
      if (group2 === 'option3' || 'option4') {
        if (group3 === 'option5') {
          alert('PHP sounds good')
        }
      }
    };
    if (group1 === 'option1') {
      if (group2 === 'option3' || 'option4') {
        if (group3 === 'option6') {
          alert("Ruby might be what you're looking for")
        }
      }
    };
    if (group1 === 'option2') {
      if (group2 === 'option3' || 'option4') {
        if (group3 === 'option5') {
          alert("Java might be what you're looking for")
        }
      }
    };
    if (group1 === 'option2') {
      if (group2 === 'option3' || 'option4') {
        if (group3 === 'option6') {
          alert("C# sounds good")
        }
      }
    };
    event.preventDefault();
  });
});
