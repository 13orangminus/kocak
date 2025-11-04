// nomor 1
let a = 10 //global

 function local() {
     let b = 20; //local
     console.log(a);
     console.log(b);
}


// nomor 2
console.log(c);
var c = 2

console.log(d);
let d = 4

console.log(e);
const e = 6


// nomor 3
function akunSaldo() {
    let saldo = 0;
    
    return {
        tambahSaldo: function (jumlah) {
            saldo += jumlah;
            console.log(`Saldo berhasil ditambahkan sebesar ${jumlah}. Total saldo: ${saldo}`);
        },
        sisaSaldo: function () {
            console.log(`Saldo saat ini: ${saldo}`);
        },
        getSaldo: function() { // <-- FUNGSI BARU UNTUK MELIHAT SALDO
            return saldo;
        }
    };
}

const akunSaya = akunSaldo();