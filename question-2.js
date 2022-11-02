async function getCatFacts() {
    try {
      const response = await fetch("https://noroff.herokuapp.com/v1/cat-facts/facts");
      const results = await response.json();
      console.log(results.length);
    } catch (error) {
      console.log(error);
    }
  }

fetch ("https://noroff.herokuapp.com/v1/cat-facts/facts")

    .then(function(response) {
        // console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data.length);

    })
    .catch(function(error) {
        console.log(error);
    });


// getCatFacts();


//---------------------------RESULT FROM THE REPO--------------------------------------

fetch("https://noroff.herokuapp.com/v1/cat-facts/facts")
    .then(function (response) {
        return response.json();
    })
    .then(function (results) {
        console.log(results.length);
    })
    .catch(function (error) {
        console.log(error);
    });

// we can also enclose the code in a function and then call it
// this will have the same effect but means the code is reusable and can be called again from somewhere else in the code
function getCatFacts() {
    fetch("https://noroff.herokuapp.com/v1/cat-facts/facts")
        .then(function (response) {
            return response.json();
        })
        .then(function (results) {
            console.log(results.length);
        })
        .catch(function (error) {
            console.log(error);
        });
}

getCatFacts();

// with arrow functions
function getCatFacts2() {
    fetch("https://noroff.herokuapp.com/v1/cat-facts/facts")
        .then((response) => response.json())
        .then((results) => {
            console.log(results.length);
        })
        .catch((error) => console.log(error));
}

getCatFacts2();