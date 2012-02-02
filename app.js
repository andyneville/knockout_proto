var express = require("express"),
    app     = express.createServer();
    
app.get("/", function(req, res) {
  res.redirect("/index.html");
});

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);
});

// Only listen on $ node app.js

if (!module.parent) {
  app.listen(process.env.PORT);
  console.log("Express server listening on port %d", app.address().port);
}
