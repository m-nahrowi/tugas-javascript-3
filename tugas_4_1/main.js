

fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => response.json())
    .then(json => {

        let li = `<tr><th>Name</th></tr>`;

        json.forEach(user => {
            li += `<tr>
                <td>${user.name} </td>      
            </tr>`;
        });

        document.getElementById("users").innerHTML = li;
    });