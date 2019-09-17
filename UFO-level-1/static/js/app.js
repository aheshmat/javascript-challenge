// from data.js
var tableData = data;

// YOUR CODE HERE!
// hook into the button
d3.selectAll("#filter-btn").on("click", handleClick);

// create the function to build the table
function buildTable(somedata) {
  let tbody = d3.select("tbody");
  tbody.html("");

  somedata.forEach(row => {
    // console.log(row);
    let tr = tbody.append("tr");

    Object.values(row).forEach(cell => {
      let c = tr.append("td");
      c.text(cell);
    })
  });
}

// add function to handle click
function handleClick() {
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  if (date) {
    filteredData = filteredData.filter( element => element.datetime === date);
  }

    buildTable(filteredData);
}


// call the build table funciton with the non-filtered data
buildTable(data);