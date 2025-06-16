document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    const username = document.getElementById('username').value;
    // Di aplikasi nyata, Anda akan mengirim data ini ke server untuk validasi
    // Untuk demo ini, kita simpan username di localStorage agar bisa diakses halaman lain
    localStorage.setItem('loggedInUser', username);

    // Arahkan ke halaman menu utama
    window.location.href = 'menu.html';
});