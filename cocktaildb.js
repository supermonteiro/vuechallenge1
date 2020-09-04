const axios = require("axios");
const BASE_URL = `https://www.thecocktaildb.com`;
module.exports = {
  getRecipeByName: (recipe) =>
    axios({
      method: "POST",
      url: BASE_URL + `/api/json/v1/1/search.php`,
      headers: {
        "content-type": "application/json",
      },
      params: {
        s: recipe,
      },
    }),
};
