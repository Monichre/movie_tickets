function Movie(title, age, time) {
  this.name = title;
  this.age = age;
  this.time = time;
}

Movie.prototype.addPrice = function(){
  if (this.time < 6 && (this.name == 'birdman' || this.name == 'drive')){
    var price = 5;
    return price;
  } else if (this.time < 6 && (this.name == 'birds' || this.name == 'starwars')){
    var price = 3;
    return price;
  } else if (this.time > 6 && (this.name == 'birdman' || this.name == 'drive')){
    var price = 10;
    return price;
  } else {
    var price = 7;
    return price;
  };
}

  //*************************************** UI FUNCT *********************************



  $(document).ready(function() {
    var ticket = [];
    var total = 0;
    $('#movies').submit(function(event){
      event.preventDefault();
      var age = $('#Age').val();
      var movie = $(this).find('.radio :checked').val();
      var time = $("." + movie).val();
      var movieInfo = new Movie(movie, age, time);

      ticket.push(movieInfo.addPrice());
      console.log(ticket);

      ticket.forEach(function(ticket) {
        
        return total += ticket;
      });
      $("#show-result").show();
      $(".result").text(" Thanks your total is: " + total)

    });
  });
