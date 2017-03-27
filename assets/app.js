$(document).ready(function() {

    var gifCount = 0;

    // Adding click event listener to TV Show button
    $("#addtvShow").on("click", function(event) {
        event.preventDefault();
        // Grabbing and storing the value from the field
        var tvShow = $("#tvShow-input").val().trim();
        console.log(tvShow);

               var gifClose = $("<button>");

               gifClose.attr("show-name", tvShow);
               gifClose.attr("type", "button");
               gifClose.attr("type", "submit");
               gifClose.addClass("btn btn-primary");
               gifClose.text(tvShow);

               $("#tvShows").append(gifClose);

            //empty input field
             $("#tvShow-input").val("");

              // Add to the gifCount
              gifCount++;



                // Adding click event listen listener to all buttons
    $("button").on("click", function() {
      // Grabbing and storing the data-count property from button
      var tvShowGIF = tvShow;
      console.log(tvShowGIF);

      // Constructing a queryURL using the animal name
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
            tvShowGIF + "&api_key=dc6zaTOxFJmzC&limit=10";

      // Performing an AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .done(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var tvShowDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var tvShowImg = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            tvShowImg.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the tvS
            tvShowDiv.append(p);
            tvShowDiv.append(tvShowImg);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(tvShowDiv);
          }
            });
         });              
           
    });
 }); 



