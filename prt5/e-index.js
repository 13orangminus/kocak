function pencatatanPengeluaran(pengeluaranAwal) {
    let total = pengeluaranAwal;

    return function (pengeluaranBaru) {
        total += pengeluaranBaru;
        console.log(`Total pengeluaran sekarang: ${total}`);
        return total;
    };
}

pencatatanPengeluaran(10000)(5000); 