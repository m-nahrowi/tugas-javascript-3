
const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'Febuary', 'March', 'April', 'May', 'Juni', 'July',
            'August', 'September', 'October', 'November', 'Desember'];
        if (!error) {
            callback(null, month)
        }else {
            callback(new Error('Sorry Data Not Found'))
        }
    }, 4000)
}


let showMonth = (error, month) => {
      if (error !== null){
        console.log(error)
    }else{
        month.map((num)=>{
            console.log(num) 
        })
    }
}

getMonth(showMonth)



// const getMonth = (callback) => {
//     setTimeout(() => {
//         let error = false
//         let month = ['January', 'Febuary', 'March', 'April', 'May', 'Juni', 'July',
//             'August', 'September', 'October', 'November', 'Desember'];
//         if (!error) {
//             callback(null, month)
//             callback(new Error('Sorry Data Not Found'))
//         }
//     }, 4000)
// }

// month =  ['January', 'Febuary', 'March', 'April', 'May', 'Juni', 'July',
//             'August', 'September', 'October', 'November', 'Desember'];

// function showMonth(month) {

//     // const temp = month;

//     // let temp = month.map(arr => arr);
//     // console.log(temp.prototype.map(arr=> arr))
//     const array = month.map((num) => {
//         return num
//     })


//     // console.log(error)
//     // console.log(month)
//     // console.log(month.map(keluar))
//     // function keluar(num){
//     //     return num;
//     // }
// }
// // getMonth(showMonth);


// // function tampil_data(month){
// //     // console.log(error)
// //     // console.log(month)
// //     // console.log(month.map(item=>item))
// //     let temp = month.map((item)=>{
// //         return item
// //     })
// //     console.log(temp)
// // }
// // getMonth(tampil_data)

// console.log(showMonth())
