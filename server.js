const express = require("express");
const app = express();
const PORT = 3000;
const handlebars = require("express-handlebars");

app.use(express.static("public/images"));

app.engine('handlebars',handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

app.get('/',function(req,res){
  res.render("index",{
    title: 'Welcome to your user page',
    name: 'Petaaaaaaar',
    age: '48',
    location: 'Next to me',
    pic: "sloth.jpg"
  });
})

app.listen(PORT, function(){
  console.log("Listening on " + PORT);
})
