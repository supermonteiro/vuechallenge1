const CocktailAPI = require("./cocktaildb");
const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const requestListener = function (req, res) {
  fs.readFile(__dirname + "/index.html")
    .then((contents) => {      
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(contents);
    })
    .catch((err) => {
      //res.writeHead(500);
      //res.end(err);
      console.error(`Could not read index.html file: ${err}`);
      process.exit(1);
      return;
    });
};

const server = http.createServer(requestListener);

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});

const asyncApiCall = async () => {
    try {
      const response = await CocktailAPI.getRecipeByName("margarita");      
      console.log(response.data.drinks[0].strDrink);      
    } catch (e) {
      console.log(e);      
    }
};
//asyncApiCall();
