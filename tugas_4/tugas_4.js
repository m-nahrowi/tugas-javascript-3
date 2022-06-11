import fetch from 'node-fetch'; // versi 3

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    data.map((data_1) => 
        console.log(data_1.name))
    // console.log(hasil) // array output
  })
  .catch((err)=>{
    console.log(err)
  })

