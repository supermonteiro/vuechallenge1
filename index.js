var Vue = require("./node_modules/vue/dist/vue.js")

var app = new Vue({
  data: {
    messageName: "Enter the recipe name",
    messageIngredient: "Enter the ingredient",
    searchName: "",
    searchIngredient: "",
  },
  methods: {
    searchByName: function (searchName) {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        params: {
          s: searchName,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert(
              "Server returned " + response.status + " : " + response.statusText
            );
          }
        })
        .then((response) => {
          this.result = response.body;
          this.responseAvailable = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searchByIngredient: function (searchIngredient) {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        params: {
          i: searchIngredient,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert(
              "Server returned " + response.status + " : " + response.statusText
            );
          }
        })
        .then((response) => {
          this.result = response.body;
          this.responseAvailable = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});