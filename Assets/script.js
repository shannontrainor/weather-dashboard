//Doc.Ready to let JS load before running

$(document).ready (function (){
    //Create Event Listener for Search btn
    $("#search-button").on("click", function (){
        //check if working  alert("clicked");
        //create varaiable for giving value to searchValue
        var searchValue = $("#search-value").val();
        //clear search value box
        $("#search-value").val("");

        //call searchWeather function
        searchWeather(searchValue);
    });


    $(".history").on("click", "li", function () {
        searchWeather($(this).text());
    });

    //make row, create LI tag, give class name, give text
    function makeRow(text) {
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
        //append LI tag to UL with class name history (HTML)
        $(".history").append(li);
    }

    //function for current weather search
    function searchWeather(searchValue) {
        // Create ajax call to search weather API for current location
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=295371f9dffd88f4084ef49bfd45aaae&units=imperial",
            dataType: "JSON",
             // success key to handle response
            success: function(data) {
                // if history is available, set hist variable to previous history searches
                if (history.indexOf(searchValue) === -1) {
                    history.push(searchValue);
                    //if history not available, push & save to local storage
                    window.localStorage.setItem("history", JSON.stringify(history));
                    //call makeRow function, pass search value as argument to function to make row
                    makeRow(searchValue);
                };

                //clear history from today
                $("#today").empty();
                //title h3 tag with class & text data.name & timestamp
                var title = $("<h3>").addClass("card-title").text(data.name + "(" + new Date().toLocaleDateString() + ")");
                //div w/ id card
                var card = $("<div>").addClass("card");
                //p tags for wind/humid/temp
                var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + "mph");
                var humidity = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
                var temperature = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + "F");
                //cardbody div
                var cardBody = $("<div>").addClass("card-body");
                //create image tag
                var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                //append all to title/HTML
                title.append(image);
                cardBody.append(title, wind, humidity, temperature);
                card.append(cardBody);
                $("#today").append(card);
            
                //call forecast function
                getForecast(searchValue);
            }    
        });
    };



    function getForecast (searchValue) {
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=295371f9dffd88f4084ef49bfd45aaae&units=imperial",
            dataType: "json",
            //success key to handle response
            success: function (data) {
                //add HTML & append to div, add content to new row
                $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");
                //for loop over data.list for 5 day forecasts
                for (var i = 0; i < data.list.length; i++) {
                        //set time of forecast
                    if (data.list[i].dt_txt.indexOf("13:00:00") !== -1) {
                        //create dynamic elements & add class/attributes/value
                        var column = $("<div>").addClass("col-md-2");
                        var card = $("<div>").addClass("card bg-primary text-white");
                        var body = $("<div>").addClass("card-body p-2");
                        var title = $("<h5>").addClass("card-title").text(new Date(data.list[i].dt_txt).toLocaleDateString());
                        var image = $("<img>").attr("src", "https://openweathermap.org/img/w" + data.list[i].weather[0].icon + ".png");

                        var p1 = $("<p>").addClass("card-text").text("Temperature: " + data.list[i].main.temp_max + "F");
                        var p2 = $("<p>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + "%");

                        //append to page
                        column.append(card.append(body.append(title, image, p1, p2)));
                        $("#forecast .row").append(col);

                    };
                };

            }
        });
    };

    function getUVIndex (lat, lon) {
        $.ajax ({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/uvi?appid=295371f9dffd88f4084ef49bfd45aaae&lat=" + lat + "&lon=" + lon,
            dataType: "json",
                //success function
            success: function (data) {
                    //dynamic elements & values
                var uv = $("<p>").text("UV Index: ");
                var btn = $("<span>").addClass("btn btn-sm").text(data.value);

                $("#today .card-body").append(uv.append(btn));

            }
        })
    }
    

            //get search history, turn into array if  available, empty array if none
    var history = JSON.parse(window.localStorage.getItem("history")) || [];
    
    //Check if history.length > 0
    if (history.length > 0) {
        //if yes, call function to search for weather
        searchWeather(history[history.length-1]);
        //Pass history.length -1 as argument in search weather function
    }

        //add row for each search
    for (var i=0; i < history.length; i++) {
        makeRow(history[i]);
    }

















});

    //***************5 DAY FORECAST****************/

        //2. create dynamic elements, assign value
        //3. append to bigger element
        //4. make 5 for 5 day forcast
        //5. get UV index for lat/long
        //6. use URL/API
        //7. create elements & attach value
