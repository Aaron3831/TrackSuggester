$(document).ready(function(){
  $("form#Suggester").submit(function(event) {
    var group1 = $("input:radio[name=group1]:checked").val();
    var group2 = $("input:radio[name=group2]:checked").val();
    var group3 = $("input:radio[name=group3]:checked").val();
    console.log();

    // if (group1 ) {
    //
    // } else {
    //   alert(C# might be a place to start!)
    // }
    event.preventDefault();
  });
});
