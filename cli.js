var WeatherAdmin = require("./admin");
var UserSearch = require("./user.js");


var arguments = process.argv;
var role = arguments[2];
var name = arguments[3];
var location = arguments[4];

var MyAdmin = new WeatherAdmin(name, location);

if (role === "admin") {
    MyAdmin.getData();


} else {
    //do this if the person is a user
    MyAdmin.newUserSearch(name, location);
}
