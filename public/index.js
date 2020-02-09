function Search() {
  console.log("Searching...");
  const promise1 = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "http://localhost:3306/Search?searchbox=" +
        document.getElementById("mySearchBox").value
    );
    xhr.onload = function() {
      const data = JSON.parse(xhr.response);
      // console.log(data);
      populateDiv(data);
    };
    xhr.send();
  }).then(responsData => {
    console.log(responsData);
  });
}

function Action() {
  console.log("Adding Data..");

  const promise1 = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "http://localhost:3306/action_page?firstname=" +
        document.getElementById("myFirstName").value +
        "&lastname=" +
        document.getElementById("myLastName").value +
        "&Address=" +
        document.getElementById("myAddress").value
    );
    xhr.onload = function() {
      // const data = JSON.parse(xhr.response);
      console.log(xhr.response);
      if (xhr.response === "Success") {
        alert(
          "Record added for " + document.getElementById("myFirstName").value
        );
      }
    };
    xhr.send();
  }).then(responsData => {
    console.log(responsData);
  });
}
function populateDiv(data) {
  let String =
    '<div class="table-responsive"><table class="table"><thead><tr><th>#</th><th>Firstname</th><th>Lastname</th><th>Address</th></tr></thead><tbody>';
  for (let prop in data) {
    console.log(data[prop]);
    String =
      String +
      "<tr><td>" +
      prop +
      "</td><td>" +
      data[prop].firstname +
      "</td><td>" +
      data[prop].lastname +
      "</td><td>" +
      data[prop].address +
      "</td></tr>";
  }
  String += "</tbody></table></div>";
  document.getElementById("InsertDiv").innerHTML = String;
}
