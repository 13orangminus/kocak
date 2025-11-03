function togglePopup(modalNumber) {
    const modal = document.getElementById('popupModal' + modalNumber);
    if (modal) {
        modal.classList.toggle('hidden');
    }
}

function f1() {
    togglePopup('1');
}

function f2() {
    togglePopup('2');
}

function f3() {
    togglePopup('3');
}

function f4() {
    togglePopup('4');
}

// === FUNGSI UNTUK MENANGANI SUBMIT FORM ===

// Menambahkan event listener untuk form F1 (Kalkulator)
document.getElementById('F1').addEventListener('submit', function(event) {
    event.preventDefault();

    // 1. Mengambil nilai dari input dan mengubahnya menjadi angka
    const num1 = Number(document.getElementById('firstNumber').value);
    const num2 = Number(document.getElementById('secondNumber').value);
    const operator = document.getElementById('operator').value;

    let result;
    let isValid = true;

    // 2. Logika kalkulasi menggunakan switch-case
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
        case 'x': // Menambahkan 'x' sebagai alternatif untuk perkalian
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            isValid = false;
            alert('Operator tidak valid! Gunakan +, -, *, atau /');
    }

    // 3. Menampilkan hasil jika operator valid
    if (isValid) {
        const outputBox = document.getElementById('outputBox');
        outputBox.innerHTML += `<p>Hasil: ${num1} ${operator} ${num2} = ${result}</p>`;
        togglePopup('1'); // Menutup modal
        this.reset(); // Mengosongkan form
    }
});

// Menambahkan event listener untuk form F2
document.getElementById('F2').addEventListener('submit', function(event) {
    // 1. Mencegah form dari perilaku default (refresh halaman)
    event.preventDefault();

    // 2. Mengambil nilai dari input
    const namaDepan = document.getElementById('namaDepan').value;
    const namaBelakang = document.getElementById('namaBelakang').value;

    // 3. Menambahkan data ke outputBox
    const outputBox = document.getElementById('outputBox');
    outputBox.innerHTML += `<p>Nama Lengkap: ${namaDepan} ${namaBelakang}</p>`;

    // 4. Menutup modal
    togglePopup('2');

    // 5. Mengosongkan form
    this.reset();
});

// Menambahkan event listener untuk form F3
document.getElementById('F3').addEventListener('submit', function(event) {
    event.preventDefault();
    const pesanAlam = document.getElementById('pesanAlam').value;
    const outputBox = document.getElementById('outputBox');
    outputBox.innerHTML += `<p>Pesan Alam: ${pesanAlam}</p>`;
    togglePopup('3');
    this.reset();
});

// Menambahkan event listener untuk form F4
document.getElementById('F4').addEventListener('submit', function(event) {
    event.preventDefault();
    const dataLain = document.getElementById('dataLain').value;
    const outputBox = document.getElementById('outputBox');
    outputBox.innerHTML += `<p>Data Lain: ${dataLain}</p>`;
    togglePopup('4');
    this.reset();
});

// === FUNGSI UTILITAS (OPSIONAL TAPI BERGUNA) ===
function clearOutput() {
    document.getElementById('outputBox').innerHTML = '';
}

function addNewPharaghraph() {
    document.getElementById('outputBox').innerHTML += '<br>';
}