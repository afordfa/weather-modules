var UserSearch = require("./user.js");
var fs = require("fs");


var WeatherAdmin = function(name, location){
    this.user = new UserSearch(name, location);
    this.name = name;
    this.location = location;

    this.getData = function(){
        //returns a list of all searches users have executed
        fs.readFile("log.txt", "utf-8", function(error, data){
            console.log(data);
        });
    }

    
    this.newUserSearch = function(name, location){
        var newUserSearch = new UserSearch(name, location);
        var logTxt = "\n date: " + this.user.date + " user: " + name + " location: " + location;
    
        //searches weather of an area
        fs.appendFile("log.txt", logTxt, function(err){
            if (err) {
                return console.log(err);
            }
        });
        newUserSearch.getWeather();
    }
}


module.exports = WeatherAdmin;
