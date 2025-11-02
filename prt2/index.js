let nama = "Yudis";


// String
let namaVar = "Ini Value String";
let namaVar1 = 'String';
// Number / Integer
let namaVar2 = 100;
// Boolean 
let namaVar3 = true ;
let namaVar4 = false ;
// Null 
let namaVar5 = null;
// Undifined 
let namaVar6 = undefined; 
let namaVarr5;


// console.log("Check Value: " +namaVar2);
// console.log("Check Type Data: " + typeof namaVar2);



function namaFunction() {
    console.log("Si "+ nama + " Telah ngisi nama");
    confirm("Oh kamu namanya adalah "+ nama +" kah?")
    namaF2()
}
//digunakan untuk memanggil function lain
//console.log nya akan di eksekusi setelah function ini di panggil
//confirm akan menampilkan pop up dialog


function namaF2(){
    console.log("Ini Function 2 Berjalan");
}
//function ini akan berjalan setelah function namaFunction di panggil
//consolr.log nya akan di eksekusi setelah function ini di panggil

// 3 OPSI 
// LET - VAR - CONST
//A.Let:cara lama, memiliki scope function
//B.Var:cara deklarasi variabel yang bisa diubah nilainya
//C.Const:deklarasi variabel yang nilainya tetap (konstan)

// let alamat = prompt("Masukan Alamat Anda");

let a = 90;
let b = a;
let c = b + a;
let d = a + b * c ;
//let a, b, c, d digunakan untuk mendeklarasikan variabel
//berguna untuk perhitungan matematika

var e = "Halo ";
const f = "Nama ";
let g = "Saya ";
let h = "Yudis ";
//berguna untuk penggabungan string

let result = e + f + g + h;
//digunakan untuk menampilkan hasil di console browser

console.log(result);
// console.log((90*180)+90);


function add(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) + Number(b)
    console.log("Hasil dari "+ a +"+"+ b +" Adalah " + result);
}
//function untuk penjumlahan
//prompt digunakan untuk menampilkan dialog input
//Number digunakan untuk mengubah string menjadi number agar bisa di hitung
//console.log untuk menampilkan hasil di console browser

function minus(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) - Number(b)
    console.log("Hasil dari "+ a +"-"+ b +" Adalah " + result);
}
//function untuk pengurangan
//prompt digunakan untuk menampilkan dialog input
//Number digunakan untuk mengubah string menjadi number agar bisa di hitung
//console.log untuk menampilkan hasil di console browser

function multiply(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) * Number(b)
    console.log("Hasil dari "+ a +"x"+ b +" Adalah " + result);
}
//function untuk perkalian
//prompt digunakan untuk menampilkan dialog input
//Number digunakan untuk mengubah string menjadi number agar bisa di hitung
//console.log untuk menampilkan hasil di console browser

function devide(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) / Number(b)
    console.log("Hasil dari "+ a +"/"+ b +" Adalah " + result);
}
//function untuk pembagian
//prompt digunakan untuk menampilkan dialog input
//Number digunakan untuk mengubah string menjadi number agar bisa di hitung
//console.log untuk menampilkan hasil di console browser

function modulus(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) % Number(b)
    console.log("Sisa Bagi dari "+ a +" Di Bagi "+ b +" Sisanya " + result);
}
//function untuk modulus / sisa bagi
//prompt digunakan untuk menampilkan dialog input
//Number digunakan untuk mengubah string menjadi number agar bisa di hitung
//console.log untuk menampilkan hasil di console browser

function exponen(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) ** Number(b)
    console.log("Hasil dari "+ a +" Pangkat "+ b +" Adalah " + result);
}
//function untuk perpangkatan
//prompt digunakan untuk menampilkan dialog input
//Number digunakan untuk mengubah string menjadi number agar bisa di hitung
//console.log untuk menampilkan hasil di console browser

// let w = "10"
// console.log(w);
// console.log(typeof w);
// // let ww = Number(w);
// let ww = + w
// console.log(ww);
// console.log(typeof ww);

// OPERATOR PERBANDINGAN 

let m = 10;
let n = 10 ;
// digunakan untuk membandingkan dua nilai
// > | < | == | != | >= | <= | === | !== 

let v = m !== n;
//berguna untuk membandingkan nilai dan tipe data
// (&&) | (||) | (!) | 

// && hanya true apabila kondisi sama sama true 
// console.log(true && true); // TRUE
// console.log(5 > 4 && 9 < 10 )
// console.log(false && true); // FALSE
// console.log(12 != 12 && "45" !== 45);
// console.log(true && false); // FALSE

// (||) BISA TRUE APABILA SALAH SATU KONDISI TRUE
// console.log(true || false); // TRUE
// console.log(false || true); // TRUE
// console.log(false || false); // FALSE
// console.log(true || true); // TRUE

// (!) BISA MEMBALIKAN FAKTA
let data = "Santri";
//digunakan untuk negasi atau membalikkan nilai
// console.log(!false); // TRUE
// console.log(!true); // FALSE
if(data != "Santri" ) {
}

// console.log(!true);


let x = m == n && m >= n ; // TRUE 
//di gunakan untuk menguji pemahaman operator logika
//jawaban nya adalah true
//karena kedua kondisi di kiri dan kanan adalah true


// console.log(typeof x);
// console.log(x);

// OPERATOR COMPARASION FOR >> GREATER THEN (>)
// console.log(5 > 5); // False
// console.log(6 > 5); // True 
// console.log(6 > 90); // False 
// console.log(5 >= 5); // True

// OPERATOR COMPARASION FOR >> LESS THEN (<)
// console.log(5 < 5); // False
// console.log(5 <= 5); // True


function checkUmur(){
    let data = prompt("Santri Mana ?")
    // let result = + umur 

    if(data != "PIT") {
       console.log("Anda Bukan Santri");
       console.log(data != "PIT");
    } 
    //digunakan untuk mengecek kondisi
    else
    {
        console.log("Oke Santri");
        console.log(data != "PIT");
    }
    //jika kondisi terpenuhi maka akan mengeksekusi blok kode di if
    //jika tidak terpenuhi maka akan mengeksekusi blok kode di else
}
    if(data == "PIT") {
        console.log("Oke Santri");
        console.log(data != "PIT");
    }
    //jika kondisi terpenuhi maka akan mengeksekusi blok kode di if
    else{
       console.log("Anda Bukan Santri");
       console.log(data != "PIT");
    }
    //jika kondisi terpenuhi maka akan mengeksekusi blok kode di if
    //jika tidak terpenuhi maka akan mengeksekusi blok kode di else
    if(!data){
        console.log(!data);
        console.log(data);
        console.warn("Anda Belom Ngisi Data");
    }
    //digunakan untuk mengecek kondisi 
    else {
        console.log(!data);
        console.log(data);
        console.log("Oke Data Di terima");
    }
    //jika kondisi terpenuhi maka akan mengeksekusi blok kode di if
    //jika tidak terpenuhi maka akan mengeksekusi blok kode di else

console.log(70 > 90 && 23 < 90 && !true || 87 > 67 && 54 < 90 && !true); //
//di gunakan untuk menguji pemahaman operator logika
//jawaban nya adalah false
//karena semua kondisi di kiri dan kanan adalah false