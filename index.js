var http = require("http"),
   fileSystem = require("fs"),
   path = require("path");

http
   .createServer(function (request, response) {
      var filePath = "./oneFormFix.js";

      response.writeHead(200, {
         "Content-Type": "text/javascript",
      });

      var readStream = fileSystem.createReadStream(filePath);
      // We replaced all the event handlers with a simple call to readStream.pipe()
      readStream.pipe(response);
   })
   .listen(process.env.PORT || 8080);
