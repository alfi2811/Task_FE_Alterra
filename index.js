var _ = require("lodash");

const anggota_kelas = ["budi", "sita", "ayu", "rena", "omen"]
let mengumpulkan_tugas = ["rena", "omen"]
console.log("=========== No 1 ===========")
console.log("No 1a")
console.log(_.difference(anggota_kelas, mengumpulkan_tugas))
console.log("No 1b")
console.log(_.chunk(anggota_kelas, 2))
console.log("No 1c")
console.log(_.join(anggota_kelas, '-'))
console.log("No 1d")
console.log(_.tail(anggota_kelas))
console.log("No 1e")
console.log(_.reverse(anggota_kelas))

console.log("=========== No 2 ===========")
const countValley = (arr) => {
  let curr = 0, sum = 0, i = 0;
  do {
    let tmp = curr
    if(arr[i] === "D") curr -= 1
    else curr += 1    
    if (curr === 0 && tmp <= 0) sum++
    i++
  } while(i < arr.length);  
  return sum
}

let a = "DDUUDDUDUUUD"
let b = "UDDDUDUU"
let c = "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD"

console.log("Jumlah Lembah = ", countValley(_.split(a, '')))
console.log("Jumlah Lembah = ", countValley(_.split(b, '')))
console.log("Jumlah Lembah = ", countValley(_.split(c, '')))


console.log("=========== No 3 ===========")
class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }
  perkenalanDiri() {
    return `Halo, saya ${this.nama}. ${this.umur> 17? 'Saya sudah dewasa': 'Saya masih di bawah umur' }`
  }
}

class Pelajar extends Orang {
  constructor(nama, umur) {
    super(nama, umur);
    this.pekerjaan = "Siswa/Mahasiswa"
  }
}

class Pekerja extends Orang {
  constructor(nama, umur, pekerjaan) {
    super(nama, umur);
    this.pekerjaan = pekerjaan
  }
  perkenalanProfesi() {
    return `Hi, Saya seorang ${this.pekerjaan}`
  }
}

const ana = new Orang('Ana', 10);
const ini = new Pelajar('Ini', 18);
const budi = new Pekerja('Budi', 20, 'Koki');

console.log(ana.perkenalanDiri());
console.log(ini.perkenalanDiri());
console.log(ini.pekerjaan);
console.log(budi.perkenalanDiri());
console.log(budi.perkenalanProfesi());
console.log(budi.pekerjaan);