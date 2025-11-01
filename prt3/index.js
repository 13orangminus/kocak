
function login(){

    let email = prompt("Masukan Email")
    let pw = prompt("Masukan Password")

    if(!email || !pw) {
        alert("Email atau Password Belom Di isi")
        console.log("Login Gagal")
    } else if (email == "saya@email.com" && pw == "112233445566") {
        console.log("Login Berhasil")
    } else {
        alert("Email Atau Password anda salah")
        console.log("Login Gagal")
    }
}

//Contoh if, else, else if
function cekAksesPengguna() {
    let statusPengguna = prompt("Apa Status Pengguna Anda")
    let levelAkses = prompt("Apa Level akses Anda")

    if (statusPengguna === 'aktif') {
    //if digunakan untuk mengecek kondisi
        console.log("Pengguna aktif terdeteksi");
        
        if (levelAkses === 'admin') {
            console.log("Akses diberikan: Admin memiliki semua hak akses");
        } else if (levelAkses === 'moderator') {
            console.log("Akses diberikan: Moderator memiliki akses terbatas");
        } else {
          //else digunakan jika kondisi tidak terpenuhi
            console.log("Akses diberikan: Pengguna biasa dengan akses standar");
        }
    } else if (statusPengguna === 'nonaktif') {
      //else if digunakan untuk mengecek kondisi lain jika kondisi pertama tidak terpenuhi
        console.log("Pengguna tidak aktif, akses dibatasi");
        if (levelAkses === 'admin') {
            console.log("Namun Admin masih bisa mengakses data");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses data");
        } else {
            console.log("Pengguna biasa tidak bisa mengakses data");
        }
    } else if (statusPengguna === 'banned') {
        console.log("Pengguna diblokir");
        if (levelAkses === 'admin') {
            console.log("Admin juga tidak bisa mengakses");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses");
        } else {
            console.log("Pengguna biasa sangat dibatasi");
        }
    } else {
        console.log("Status pengguna tidak dikenali, akses ditolak");
    }
}

//Contoh of switch case
function listmenu(){
    if( confirm("Anda mau makan?")) { 
    let menu = prompt("Nomor Berapa Anda Pilih Pilih Menu Makanannya: \n 1. Mie ayam \n 2. Bakso \n 3. Soto")
    switch(menu) {
    //switch digunakan untuk mengecek nilai yang sama
    //\n digunakan untuk membuat baris baru pada prompt
        case '1':
        //case digunakan untuk menentukan pilihan
            console.log("Anda Memilih Mie Ayam : RP 15.000");
            if (confirm("Mau tambah lagi?")) {
                }
            break;
            //break digunakan untuk mengakhiri case
        case '2':
            console.log("Anda Memilih Bakso : RP 20.000");
            break;
        case '3':
            console.log("Anda Memilih Soto : RP 25.000");
            break;
        case '1 & 2':
            console.log("Anda Memilih Mie Ayam dan Bakso : RP 35.000");
            break;
        default:
        //default digunakan jika tidak ada case yang sesuai
            console.log("Menu Tidak Tersedia");
            break;
        }
    }
}


//NB from me:
//apa itu if, else, else if, switch, case, break, default
//if adalah sebuah pernyataan kondisional yang digunakan untuk mengeksekusi kode tertentu jika kondisi yang diberikan bernilai true
//else adalah sebuah pernyataan kondisional yang digunakan untuk mengeksekusi kode tertentu jika kondisi if bernilai false
//else if adalah sebuah pernyataan kondisional yang digunakan untuk mengecek kondisi lain jika kondisi if sebelumnya bernilai false
//switch adalah sebuah pernyataan kondisional yang digunakan untuk mengeksekusi kode tertentu berdasarkan nilai dari sebuah variabel atau ekspresi
//case adalah sebuah pernyataan yang digunakan di dalam switch untuk menentukan nilai yang akan dibandingkan dengan nilai dari variabel atau ekspresi
//break adalah sebuah pernyataan yang digunakan untuk menghentikan eksekusi dari sebuah case di dalam switch
//default adalah sebuah pernyataan yang digunakan di dalam switch untuk mengeksekusi kode tertentu jika tidak ada case yang sesuai dengan nilai dari variabel atau ekspresi
//\n adalah karakter khusus yang digunakan untuk membuat baris baru di dalam string
//function yang di gunakan:
//fungsi login untuk mengecek email dan password
//menggunakan if, else, else if yang berfungsi untuk mengecek kondisi dan mengeksekusi kode berdasarkan kondisi tersebut
//fungsi cekAksesPengguna untuk mengecek status dan level akses pengguna
//menggunakan if, else if, else untuk menentukan akses berdasarkan status dan level akses pengguna di dalam fungsi tersebut
//fungsi listmenu untuk menampilkan menu makanan berdasarkan pilihan user
//menggunakan switch dan case untuk mengecek pilihan menu dan mengeksekusi kode berdasarkan pilihan tersebut dan juga terdapat default untuk menangani pilihan yang tidak sesuai