//    * Implement the logic for the `UserSearch` component. As with the CLI component, you should start with pseudocode.

//    * This component requires you to use the `weather-js` NPM package. Take a moment to 
// research and experiment with the API, documented here:  <https://www.npmjs.com/package/weather-js>

//    * Create a `UserSearch` constructor. It should accept a user's name and location as arguments, 
// and store the value of `Date.now()` in a `date` property.

//    * Objects returned by the `UserSearch` constructor should also have a `getWeather` function, 
// which should log or return the weather in the user's location.

//    * When you finish, return to the code for your CLI and incorporate your completed `UserSearch` component. (edited)



var weather = require("weather-js");


var UserSearch = function(name, location){
    this.name = name;
    this.date = Date.now();
    this.location = location;
    console.log(this.date);
    this.getWeather = function(location){
        weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
            console.log("made it here");
            if(err) console.log(err);
            console.log(JSON.stringify(result, null, 2))
         });
    };
};


module.exports = UserSearch;