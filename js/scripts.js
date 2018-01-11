$(document).ready(function() {
  $("form#celebmatch").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var aliens = $("select#aliens").val();

    if (gender === 'wizard' && age < 50) {
      $('#jennifer').show();
    } else if (gender === 'hobbit' && age > 50) {
      $('#chris').show();
    }

    event.preventDefault();
  });
});
