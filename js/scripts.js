$(document).ready(function() {
  $("form#new-place").submit(function(event){
    event.preventDefault();
    var locationName = $("input#location-name").val();
    var dateVisted = $("input#date-visited").val();
    var landmark = $("input#landmark").val();
    var notes = $("input#notes").val();

    var newLocation = { nameLocation: locationName, date: dateVisted, landmark: landmark, notes: notes };

    $("ul#places").append("<li><span class='location'>" + newLocation.nameLocation + "</span></li>");

    $(".location").click(function() {
      $("#show-location").show();


      $(".location-name").text(newLocation.nameLocation);
      $(".date-visted").text(newLocation.date);
      $(".landmark").text(newLocation.landmark);
      $(".notes").text(newLocation.notes);

    });

  });

});
