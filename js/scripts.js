$(document).ready(function(){
  $("form#Suggester").submit(function(event) {
    var name = $("input#nameInput").val();
    var group1 = $("input:radio[name=group1]:checked").val();
    var group2 = $("input:radio[name=group2]:checked").val();
    var group3 = $("input:radio[name=group3]:checked").val();
    console.log();

    if (group1 === 'option1') {
      if (group2 === 'option3' || 'option4') {
        if (group3 === 'option5') {
          alert('Hey ' + name + ' PHP sounds good!')
        }
      }
    };
    if (group1 === 'option1') {
      if (group2 === 'option3' || 'option4') {
        if (group3 === 'option6') {
          alert('Hey ' + name +  " Ruby might be what you're looking for!")
        }
      }
    };
    if (group1 === 'option2') {
      if (group2 === 'option3' || 'option4') {
        if (group3 === 'option5') {
          alert('Hey ' + name +  " Java might be what you're looking for!")
        }
      }
    };
    if (group1 === 'option2') {
      if (group2 === 'option3' || 'option4') {
        if (group3 === 'option6') {
          alert('Hey ' + name +  " C# sounds good!")
        }
      }
    };
    event.preventDefault();
  });
});
