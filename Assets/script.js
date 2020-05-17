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

    //function for current weather search
    function searchWeather(searchValue) {
        // Create ajax call to search weather API for current location
        $.ajax({
                type: "GET",
                url: "api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=c280336eb7ed8cace2e8a869de69702a&units=imperial",
                dataType: "JSON",
                 // success key to handle response
                success: function(data) {
                    if (history.indexOf(searchValue) === -1) {
                        history.push(searchValue);
                        window.localStorage.setItem("history", JSON.stringify(history));

                    }

                }
                   
        });
    };



                    // Check local storage for most recent search history
                // if history, set hist variable to previous history searches

    //**HTML SYNTAX FOR CURRENT WEATHER**

    //title h3 tag with class & text data.name & timestamp
    var title = $("<h3>").addClass("card-title").text(data.name + "(" + new Date().toLocaleDateString() + ")");
    //div w/ id card
    var card = $("<div>").addClass("card");
    //p tags for wind/humid/temp
    var wind = $("<p>").addClass("card-text").text("Wind Speed:" + data.wind.speed + "mph");
    var humid = $("<p>").addClass("card-text").text("Humidity:" + data.main.humidity + "%");
    var temp = $("<p>").addClass("card-text").text("Temperature:" + data.main.temp + "F");
    //cardbody div
    var cardBody = $("<div>").addClass("card-body");

            // if no history, set hist variable to empty array []
            //get search history, turn into array if any is available
    var history = JSON.parse(window.localStorage.getItem("history")) || [];
    
    //Check if history.length > 0
    if (history.length > 0) {
    //if yes, call function to search for weather
        searchWeather(history[history.length-1]);
        //Pass history.length -1 as argument in search weather function

    }



















});

    //*************SEARCH BUTTON & SEARCH LOG*****************/

    //**************CURRENT WEATHER*********************/
    //2. Check if search value (city) exists in history array
        //if does not exist, push to history & save to local storage
        // also pass search value as argument to function to make row  
    //3. make row create LI tag, give class name, give text
        //append LI tag to UL with class name history (HTML)
    //4. empty saved from today
    //9.create img tag, append to title
        //append img tag to title
        //append temp to card body
        //append cardbody to card
        //append card to div on HTML tag "today"

    //***************5 DAY FORECAST****************/
        // 1. call 2 functions
                //ajax GET
                // function data
        //for loop over data.list (5 day forcast)

        //2. create dynamic elements, assign value
        //3. append to bigger element
        //4. make 5 for 5 day forcast
        //5. get UV index for lat/long
        //6. use URL/API
        //7. create elements & attach value
