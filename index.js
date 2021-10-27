console.log("========== No 1 ==========")
let nilai1 = [1,2,3,4,5]
let nilai2 = nilai1.reduce((accum, currVal) => accum += currVal, 0)
console.log(nilai2)

console.log("========== No 2 ==========")
var filterValue = [-4,3,2,-21,1]
var newFilterValue = filterValue.filter((num) => num > 0)
console.log(newFilterValue)

console.log("========== No 3 ==========")
var data = [
  {name: 'daniel', age: 45},
  {name: 'john', age: 30},
  {name: 'robert', age: null},
  {name: 'jen', age: undefined},
  {name: null, age: undefined},
]
var filterData = data.filter((data) => data.name && data.age)
console.log(filterData)

console.log("========== No 4 ==========")
const konfersiMenit = (number) => {
  let hours = Math.floor(number / 60)
  let minutes = number % 60
  minutes = minutes < 10? '0' + minutes: minutes

  return hours + ':' + minutes
}
console.log(konfersiMenit(88)) // 1:28
console.log(konfersiMenit(53)) // 0:53
console.log(konfersiMenit(120)) // 2:00
console.log(konfersiMenit(124)) // 2:04

console.log("========== No 5 ==========")
function inputHarusGenap(angka) {
  if(angka % 2 != 0) {
    throw new Error("Invalid")
  }  
  return "Valid"
}

try {
  console.log(inputHarusGenap(7))
} catch(e) {
  console.error(e.message)
}

try {
  console.log(inputHarusGenap(4))
} catch(e) {
  console.error(e.message)
}

console.log("========== No 6 ==========")
function perkalianUnik(arr) {
  arr = arr.map((data, index) => {    
    let tmp = arr.filter((dt, idx) => dt !== data || index !== idx )
    tmp = tmp.reduce((acc, curr) => acc *= curr, 1)
    return tmp
  })
  return arr
}
console.log(perkalianUnik([2,4,6]))
console.log(perkalianUnik([1,2,3,4,5]))
console.log(perkalianUnik([1,4,3,2,5]))
console.log(perkalianUnik([1,3,3,1]))
console.log(perkalianUnik([2,1,8,10,2]))
