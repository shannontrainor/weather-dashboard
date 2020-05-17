//Doc.Ready to let JS load before running

$(document).ready (function (){
    //Create Event Listener for Search btn
    $("#search-button").on("click", function (){
        //check if working  //alert("clicked");
    });

    function searchWeather(searchValue) {
        $.ajax({
                type: "GET"
                url: "api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=c280336eb7ed8cace2e8a869de69702a&units=imperial",
                dataType: "JSON", 
        
            
        });
};

    //*************SEARCH BUTTON & SEARCH LOG*****************/
    //2. Check local storage for most recent search history
            // if no history, set hist variable to empty array []
            // if history, set hist variable to previous history searches
    //3. Check if history.length > 0
            // if yes, call function to search for weather
    //4. Pass history.length -1 as argument in search weather function

    //**************CURRENT WEATHER*********************/
    //1. Create ajax call to search weather API for current location
        // success key to handle response
    //2. Check if search value (city) exists in history array
        //if does not exist, push to history & save to local storage
        // also pass search value as argument to function to make row  
    //3. make row create LI tag, give class name, give text
        //append LI tag to UL with class name history (HTML)
    //4. empty saved from today
    //5. create title h3 tag with class & text data.name & timestamp
    //6. create div w/ id name card
    //7. create p tag for wind/humid/temp
    //8. create cardbody div
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

