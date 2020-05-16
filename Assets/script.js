//Doc.Ready to let JS load before running

$(document).ready({


    //*************SEARCH BUTTON & SEARCH LOG*****************/
    //1. Create Event Listener for Search button
    //2. Check local storage for most recent search history
            // if no history, set hist variable to empty array []
            // if history, set hist variable to previous history searches
    //3. Check if history.length > 0
            // if yes, call function to search for weather
    //4. Pass history.length -1 as argument in search weather function

    //**************CURRENT WEATHER*********************/
    //1. Create ajax call to search weather API for current location
    
    // success key to handle response
    //check if search value (city) exists in history array
        //if does not exist, push to history & save to LS
        // also pass search value as argument to function make row

//make row creates LI tag, gives class name, gives text
    //append LI tag toUL with class name history (HTML)

//empty saved from today

//create title h3 tag with class & text data.name & timestamp
// create div w/ id name card
//create p tag for wind/humid/temp
//create cardbody div
//create img tag, append to title

    //append img tag to title
    //append temp to card body
    //append cardbody to card
    //append card to div on HTML tag "today"


// call 2 functions
    //ajax GET
    // function data
//for loop over data.list (5 day forcast)

//create dynamic elements, assign value
//append to bigger element
//make 5 for 5 day forcast

//get UV index for lat/long
//use URL/API
//create elements & attach value





























});