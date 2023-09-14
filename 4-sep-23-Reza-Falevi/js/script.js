function hitungLuas() {
    // Mengambil nilai dari input
    const inputSisi = document.getElementById("luasSisi");
    const sisi = parseFloat(inputSisi.value);

    // Memeriksa apakah nilai yang dimasukkan adalah angka
    if (isNaN(sisi)) {
        alert("Masukkan tidak valid. Harap masukkan angka.");
    } else {
        // Menghitung luas persegi
        const luas = sisi * sisi;

        // Menampilkan hasil luas di label atau di mana pun yang Anda inginkan
        const labelHasil = document.getElementById("HasilLuas");
        labelHasil.innerHTML = "Luas Persegi: " + luas;
    }
}

function hitungKeliling() {
    // Mengambil nilai dari input
    const inputSisi = document.getElementById("KelilingPersegi");
    const sisi = parseFloat(inputSisi.value);
  
    // Memeriksa apakah nilai yang dimasukkan adalah angka
    if (isNaN(sisi)) {
      alert("Masukkan tidak valid. Harap masukkan angka.");
    } else {
      // Menghitung keliling persegi (4 x sisi)
      const keliling = 4 * sisi;
  
      // Menampilkan hasil keliling di dalam elemen dengan id "HasilKeliling"
      const hasilKeliling = document.getElementById("HasilKeliling");
      hasilKeliling.innerHTML = "Keliling Persegi: " + keliling;
    }
}