function Nilai(){
    confirm("Cek Nilai Siswa");
    let a = prompt("Masukkan Nilai Anda:");
    let Nilai = (a);

    if (Nilai < 0) {
        alert("Isi dulu nilai nya bro")
        console.log("Aduh nilai nya gak sesuai bro");
    } else if (Nilai >= 90) {
        alert("Nilai kamu:A (GG bet bro)")
        console.log("Nilai kamu:'A' (GG bet bro)");
    } else if (Nilai >= 80) {
        alert("Nilai kamu:B (Nice Bro)")
        console.log("Nilai kamu:'B' (Nice Bro)");
    } else if (Nilai >= 70) {
        alert("Nilai kamu:C (Hmm Okelah)")
        console.log("Nilai kamu:'C' (Hmm Okelah)");
    } else if (Nilai >= 60) {
        alert("Nilai kamu:D (Buruk)")
        console.log("Nilai kamu:'D' (Buruk)");
    } else if (Nilai <= 60) {
        alert("Nilai kamu:E (Sangat Buruk)")
        console.log("Milai kamu:'E' (Sangat Buruk)");
    } else {
        alert("Isi dulu nilai nya bro")
        console.log("Aduh nilai gak sesuai bro");
    }
}