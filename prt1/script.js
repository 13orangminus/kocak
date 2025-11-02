// Title

function sayHello() {
    console.time("f1");
    console.info('Info Time Terkini dari F1 >>');
    console.timeLog("f1");
    alert('Hello Selamat Datang');
    let nama = prompt("Nama Siapa?");
    confirm(nama + " Klik Button ")
    console.log(nama + " Telah Klik Button");
    console.count("submited"); 
    console.timeEnd("f1");
}

// NB From Me :
//function sayHello() adalah sebuah fungsi JavaScript yang melakukan beberapa tindakan ketika dipanggil. Berikut adalah penjelasan dari setiap bagian kode di dalam fungsi tersebut:
// console.count() digunakan untuk menghitung berapa kali sebuah kode dieksekusi.
// console.countReset() digunakan untuk mereset hitungan dari console.count().
// console.time() digunakan untuk memulai timer dengan label tertentu.
// console.timeEnd() digunakan untuk menghentikan timer dan mencetak waktu yang telah berlalu sejak timer dimulai.
// console.timeLog() digunakan untuk mencatat waktu yang telah berlalu tanpa menghentikan timer.
// console.group() digunakan untuk mengelompokkan beberapa log bersama-sama dalam konsol.
// console.groupEnd() digunakan untuk mengakhiri pengelompokan log yang dimulai dengan console.group().
// console.table() digunakan untuk menampilkan data dalam format tabel di konsol.
// console.warn() digunakan untuk menampilkan pesan peringatan di konsol.
// console.error() digunakan untuk menampilkan pesan kesalahan di konsol.   
//console.info() digunakan untuk menampilkan pesan informasi di konsol.

function resetCount() {
    console.countReset("submited");
    alert("Button Submitted Ke reset");
    console.info("Button Reset Berhasil");
    
}


console.warn("Ini Contoh Warning");
console.error("Ini Contoh Error");

let userData = [
    { userId: "user123", loginStatus: "active", lastLogin: "2024-03-20" },
    { userId: "user456", loginStatus: "inactive", lastLogin: "2024-03-15" },
    { userId: "user45678", loginStatus: "inactive 001", lastLogin: "2024-03-15" },
];


console.group('API Response Debug');
console.table(userData);
console.log('Status Code:', "Successfull");
console.log('Response Time:', "Successfull");
console.log('Payload Size:', "Successfull");
console.groupEnd();

// console.info("Test Log Info");

