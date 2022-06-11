// Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1
// program cari planet
const cekNamaPlanet = (planet) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dataPlanet = ['Merkurius', 'Venus', 'Bumi', 'Mars', 'Jupyter', 'Satrunus', 'Uranus', 'Neptunus']
            let cek = dataPlanet.find((item)=>{
                return item === planet
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Kamu harus pilih nama planet'))
            }
        }, 2000);
    })
}

// then ctach

cekNamaPlanet('Venus').then((item) => {
    // let time = 0;
    console.log(item, ` adalah planet`);
}).catch((err) => {
    // console.log(`${err}`)
    console.log(err)
})


// try-catch

const Planet = "Bumi";

async function cekPlanet(param) {
    try {
        const planet = await cekNamaPlanet(param)
        console.log(planet, ` ini planet`)
    } catch (err) {
        // console.log(`${err}`)
        console.log(err)
    } finally {
        console.log('Proses Berakhir')
    }
}

cekPlanet(Planet)




// program mencari buah

const cekNamaBuah = (buah) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dataBuah = ['Semangka', 'Pisang', 'Mangga', 'Pepaya', 'Jeruk', 'Anggur', 'Melon', 'Manggis']
            let cek = dataBuah.find((item)=>{
                return item === buah
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Kamu harus pilih nama buah'))
            }
        }, 3000);
    })
}


// then-catch
cekNamaBuah('Pepaya').then((buah) => {
    let time = 0;
    console.log(buah, ` adalah buah`);
}).catch((err) => {
    // console.log(`${err}`)
    console.log(err)
})


async function cekBuah(param) {
    try {
        const buah = await cekNamaBuah(param)
        console.log(buah, ` adalah buah`)
    } catch (err) {
        // console.log(`${err}`)
        console.log(err)
    } finally {
        console.log('Proses Berakhir')
    }
}

cekBuah("Pisang")


