# JS300_FoodTruckAPI
JS300 Spring 2015 Course Project
Brian Forcum

This repository holds the starter files for my Food Truck API, which will assist users in finding food trucks in the Seattle area.  Info about each truck includes:
                    1.  Name
                    2.  Type of food served and description
                    3.  Schedule of operation
                    4.  Payment types accepted
                    5.  Links to website and social media sites

This app was built using Node.js and is dependent upon Express, Underscore, and Mongoose node modules. These dependencies can be found in the package.json file in the root folder.    

In the app directory, the app.js file uses an Express application that connects to a MongoDB database to serve the food truck data (a copy of the original JSON file that was used to populate the MongoDB database has also been included in the root directory in the event that you choose to serve the data without using MongoDB).  

The app.js file uses a Mongoose model from the truckModel.js file to serve the food truck data.  The truckModel.js file can be found in the app/models directory. 

The app.js file also uses a truckRoutes module to initiate the express routes for the application.  The file containing this module is called truckRoutes.js and can be found in the routes folder of the app directory.

In the app/public directory, you will find an index.html file that serves as the default file to be served when users visit the root url.  This file is served via Express middleware in the app.js file. 
 
In the app/public/js directory, you will find a client.js file which serves as the entry point for the client-side application.  Client.js uses jQuery to populate the unordered list on the index.html page with the food truck data from the MongoDB database.

Inside the app/js/libs directory, if you choose to use it, place the 3rd party libraries needed for this application (jQuery, Underscore, and Backbone). Currently, these libraries are called in the index.html file using CDN references instead, so the app/js/libs directory does not need local copies.

In the root directory, you will find a Gruntfile.js file. This file is used to implement code linting using jsHint and unit testing using Mocha via Grunt.  Also included in the Gruntfile is a watch task, which can be implemented in the command line to automatically lint js files upon any saved changes.  No unit tests have been written for this app yet, but a tests folder has been provided in the root directory in the event that you should choose to add testing via Mocha.  Dev dependencies are listed in the package.JSON file.

Also in the root directory, you will find a reference to the MIT license used for this app.  
