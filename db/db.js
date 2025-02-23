const mongoose = require("mongoose");

// ------------------------------------------- mongodb connection code s-------------------------------------------
// let dbURI = "";  // cloud URI
let dbURI = "mongodb://localhost/matirxRestaurantDB";
mongoose.connect(dbURI);

// ------------------------------------------- mongodb connected disconnected events-------------------------------------------

mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
    // process.exit(1);
});

mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});

process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});

// ------------------------------------------- mongodb connected disconnected eventss-------------------------------------------

module.exports = mongoose;
