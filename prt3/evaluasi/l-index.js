function usia(){

    let usia = (prompt("Masukkan usia Anda:"));
    let Kategori = (prompt("Pilih Kategori Usia Anda" + "\n 1. Anak-anak \n 2. Remaja \n 3. Dewasa"));

    if (usia < 0) {
        alert("Usia Belom Di isi")
        console.log("Usia tidak valid");
    } else if (usia <= 12) {
        alert("Kategori Usia: Anak-anak")
        console.log("Anak-anak");
    } else if (usia <= 19) {
        alert("Kategori Usia: Remaja")
        console.log("Remaja");
    } else if (usia <= 59) {
        alert("Kategori Usia: Dewasa")
        console.log("Dewasa");
    } else {
        alert("Usia Belom Di isi")
        console.log("Usia tidak valid");
    }
}

function mencetakAngka() {
    for (let i = 1; i <= 10; i++) {
        console.log("Cetakan ke-" + i);
    }
}

function menampilkanHariDanAngka() {
    let hari = prompt("Masukkan nama hari (misalnya: \n 1.Senin \n 2.Selasa \n 3.Rabu \n 4.Kamis \n 5.Jumat \n 6.Sabtu \n 7.Minggu):");
    let angka = parseInt(prompt("Masukkan angka antara 1 hingga 7:"));
    let namaHari;

    switch(angka) {
        case 1:
            namaHari = "Senin";
            break; 
        case 2:
            namaHari = "Selasa";
            break;
        case 3:
            namaHari = "Rabu";
            break;
        case 4:
            namaHari = "Kamis";
            break;
        case 5:
            namaHari = "Jumat";
            break;
        case 6:
            namaHari = "Sabtu";
            break;
        case 7:
            namaHari = "Minggu";
            break;
        default:
            namaHari = "Hari dan Angka tidak valid";
    }
    console.log("Hari yang dimasukkan: " + hari);
    console.log("Hari sesuai angka: " + namaHari);
}