
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

const hari_1 = "seninn"
const hari_2 = "selasa"


// then-catch

cekHariKerja(hari_1).then((item) => {
    console.log(item, `hari ini kerja`);
}).catch((err) => {
    // console.log(`${err}`)
    console.log(err)
})

// uji 2

// cekHariKerja(hari).then(resolvedValue=>{
//       console.log(resolvedValue,`| hari ini kerja`)
//     //   console.log("sukses")
// }).catch(err => {
//         console.log(err)
// })

// try catch

async function proces(param) {
    try {
        const hari = await cekHariKerja(param)
        console.log(hari, ` hari ini kerja`)
    } catch (err) {
        // console.log(`${err}`)
        console.log(err)
    } finally {
        console.log('Proses Berakhir')
    }
}

proces(hari_2)
