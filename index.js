// no. 1
/*
Buatlah sebuah variabel String lalu ubahlah string tersebut dengan mengganti semua huruf vokal dengan simbol “*”. Variable bisa langsung dibuat dengan value “The quick brown fox jumps over the lazy dog”, ataupun bisa berupa input dari user.
*/
console.log("-- No. 1 --");
const awal = "The quick brown fox jumps over the lazy dog";
const baru = awal.replace(/[a,i,u,e,o]/g, "*");

console.log(baru);

// no. 2
/* Buatlah sebuah array yang berisi angka-angka. Berikan output yang berisi jumlah dari semua angka di dalam array tersebut, dan ketika jumlahnya lebih dari 30, tambahkan kata “It’s big!” */

// jumlah dalam array
console.log("-- No. 2 --");
const array = [2, 2, 6, 4, 7, 8];
let sumArray = 0;

for (let i = 0; i < array.length; i++) {
	sumArray += array[i];
}

if (sumArray >= 30) {
	hasil = "It's big"; // ketika jumlah array lebih dari 30
} else if (sumArray <= 29) {
	hasil = "It's Small"; // ketika jumlah array kurang dari 30
}
console.log("jumlah array : " + sumArray + " " + hasil);

// No. 3
/* Berikan output yang berisi angka yang paling kecil dan yang paling besar yang berada di dalam array tersebut, dengan catatan, angka-angka di dalam array tidak boleh berurutan */

// masih menggunakan array yang sama
console.log("-- No. 3 --");
const min = Math.min(...array);
const max = Math.max(...array);
console.log("nilai array terkecil : " + min);
console.log("nilai array terbesar : " + max);
