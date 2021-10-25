var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "Indonesia";
  return console.log(
    "perkenalan nama saya " +
    nama +
    " nomor urut " +
    a +
    " sekarang sedang mengikuti " +
    b + 
    " berasal dari " +
    asal
  )
}

terdaftar = true;
if (terdaftar) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

console.log("array - " + lengkap_arr[2])
a = b;
// nama = b;

// console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();


let bdays = ['10-17','05-19','20-19']

for (let i = 0; i < bdays.length; i++) {
  const element = bdays[i].replace("-", "/");
  bdays[i] = element;
}

bdays.map(data => {        
    return console.log(data)
  })

let arr = [1.5, 2.56, 5.1, 12.33]

for (let i = 0; i < arr.length; i++) {  
  arr[i] = Math.ceil(arr[i]);
}

arr.map(data => {        
  return console.log(data)
})

let nilai1 = [1, 2, 3, 4, 5]
let nilai2 = 0;
nilai1.map(data => nilai2 += data )

console.log(nilai2)

var filterValue = [-4,3,2,-21,1]
filterValue = filterValue.filter(data => data > 0)
console.log(filterValue)