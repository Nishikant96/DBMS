// const Search =
function Search() {
  //   fetch("/Search").then(function(response) {
  console.log("textContent 123");
  //     response.text().then(function(text) {
  //       var textContent = text;
  //       console.log("textContent");
  //     });
  //   });

  const promise1 = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/Search");
    xhr.onload = function() {
      const data = JSON.parse(xhr.response);
      console.log(data);
    };
    xhr.send();
  }).then(responsData => {
    console.log(responsData);
  });
}

// etch(url)
//   .then((resp) => resp.json()) // Transform the data into json
//   .then(function(data) {
//     // Create and append the li's to the ul
//     })
//   })
