//js because nothing is pushed
var tableEl = document.getElementById("search-results");

const renderTable = (data) => {
  var tableHtml = `
    <tr>
        <th>User ID</th>
        <th>Username</th>
        <th>email</th>
    </tr>
        `;
  for (var i = 0; i < data.length; i++) {
    let rowhtml = `
        <tr>
            <td>${data[i].id}</td>
            <td><a href="LINK HERE">${data[i].username}</a></td>
            <td>${data[i].email}</td>
        </tr>
        `;
    tableHtml += rowhtml;
  }
  tableEl.innerHTML = tableHtml;
};

const submitSearch = (input) => {
  fetch(`/search/user?username=${input}`)
    .then((res) => res.json())
    .then((data) => {
      renderTable(data);
    });
};
