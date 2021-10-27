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
// jawaban no 1b
terdaftar = true;
if (terdaftar) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;

// jawaban no 1a
console.log("array - " + lengkap_arr[2])

// console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);

// jawaban no 1c
perkenalan();

// jawaban no 2a
// dikarenakan pada code yang belum diubah tersebut di baris 4 variabel terdaftar di inisiasikan false sehingga tidak masuk dalam persyaratan dalam if sehingga perintah yang didalam if tidak dijalankan

// jawaban no 2b
// nama = b error dikarenakan nama di inisiasikan sebagai variabel konstan sehingga valuenya tidak dapat diubah kembali

// jawaban no 2c
// tidak karena pada baris 28 menyebabkan error dikarenakan memanggil variable asal yang merupakan variable local sehingga tidak dapat dipanggil diluar fungsinya.

const foo = ['Budi', 'Sita', 'Ayu'];
// jawaban no 3
let c;
[a, b, c] = foo;
console.log(a,b,c);

let bdays = ['10-17', '05-19', '20-19']
// jawaban no 4
bdays = bdays.map((data) => (data.replace("-", "/")))
console.log(bdays)

let nilai1 = [1, 2, 3, 4, 5, 6]
// jawaban no 5
nilai1 = nilai1.map((data) => (data * 2))
console.log(nilai1)

let arr = [1.5, 2.56, 5.1, 12.33]
// jawaban no 6
arr = arr.map((data) => (Math.ceil(data)))
console.log(arr)