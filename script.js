// Menjalankan kode ini setelah seluruh konten halaman (HTML) selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    console.log("Website profil berhasil dimuat!");

    // Contoh interaksi sederhana:
    // Cari semua tombol kontak
    const tombol = document.querySelectorAll('.tombol-kontak');

    // Untuk setiap tombol, tambahkan 'event listener'
    tombol.forEach(function(t) {
        t.addEventListener('click', function() {
            alert("Anda akan diarahkan ke halaman kontak saya. Terima kasih!");
        });
    });

});
