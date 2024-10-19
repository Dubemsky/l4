// Synchronous XMLHttpRequest
function fetchDataSync() {
    let reference = JSON.parse(fetchSync('data/reference.json'));
    let data1 = JSON.parse(fetchSync('data/' + reference.data_location));
    let data2 = JSON.parse(fetchSync('data/' + data1.data_location));
    let data3 = JSON.parse(fetchSync('data/data3.json'));

    processAndDisplay(data1.data.concat(data2.data).concat(data3.data));
}

function fetchSync(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url, false);  // false for synchronous
    request.send();
    return request.responseText;
}

// Process the data and display it
function processAndDisplay(data) {
    const tbody = document.querySelector('#data-table tbody');
    tbody.innerHTML = '';
    data.forEach(item => {
        let [firstName, lastName] = item.name.split(' ');
        let row = `<tr><td>${firstName}</td><td>${lastName}</td><td>${item.id}</td></tr>`;
        tbody.innerHTML += row;
    });
}
