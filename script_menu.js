
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chat-input');
const chatContent = document.getElementById('chat-content');

if (chatInput) {
  chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const userMsg = chatInput.value;
      if (userMsg.trim()) {
        chatContent.innerHTML += `<div><strong>Anda:</strong> ${userMsg}</div>`;
        let botReply = "";

        if (userMsg.toLowerCase().includes("halo")) {
          botReply = "Halo juga! Ada yang bisa saya bantu?";
        } else if (userMsg.toLowerCase().includes("produk")) {
          botReply = "Silakan kunjungi bagian Produk di menu untuk info lengkap.";
        } else {
          botReply = "Maaf, saya masih belajar menjawab itu. Coba pertanyaan lain.";
        }

        chatContent.innerHTML += `<div><strong>Bot:</strong> ${botReply}</div>`;
        chatInput.value = "";
        chatContent.scrollTop = chatContent.scrollHeight;
      }
    }
  });
}

    // Toggle Dark Mode
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('umaediDarkMode', 'enabled');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('umaediDarkMode', 'disabled');
  }
});

// Saat load halaman, cek preferensi dark mode
const darkPref = localStorage.getItem('umaediDarkMode');
if (darkPref === 'enabled') {
  document.body.classList.add('dark');
  darkToggle.checked = true;
}

    // 1. Ambil dan tampilkan username dari localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const welcomeMessage = document.getElementById('welcomeMessage'); // Pastikan ID ini ada di h1 selamat datang

    if (loggedInUser && usernameDisplay) {
        usernameDisplay.textContent = loggedInUser;
    } else if (usernameDisplay) {
        usernameDisplay.textContent = 'Guest'; // Default jika tidak ada user
    }

    if (welcomeMessage) {
        if (loggedInUser) {
            welcomeMessage.textContent = `Selamat Datang, ${loggedInUser}!`;
        } else {
            welcomeMessage.textContent = `Selamat Datang!`;
        }
    }


    // 2. Fungsi Logout
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('loggedInUser'); // Hapus username dari localStorage
            window.location.href = 'Login.html'; // Arahkan kembali ke halaman login
        });
    }

    // 3. Dinamisasi tahun di footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 4. Inisialisasi Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#64ffda"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff", // Bisa juga #233554 atau #112240 untuk lebih subtle
                    "opacity": 0.15, // Lebih subtle
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab" // Lebih smooth 'grab' atau 'bubble'
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.3 // Opacity garis saat di-grab
                        }
                    },
                    "bubble": {
                        "distance": 200, // Jarak bubble
                        "size": 20,     // Ukuran bubble
                        "duration": 2,
                        "opacity": 0.3,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    } else {
        console.warn('Particles.js library not found. Background animation will not load.');
        const particlesDiv = document.getElementById('particles-js');
        if (particlesDiv) {
            particlesDiv.style.backgroundColor = '#0a192f'; // Fallback background color
        }
    }

    // 5. Smooth scroll untuk link navigasi
    const navLinksForScroll = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinksForScroll.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Update active link (opsional, bisa juga dihandle oleh event scroll)
                // navLinksForScroll.forEach(link => link.classList.remove('active'));
                // this.classList.add('active');
            }
        });
    });

    // 6. Set active link on scroll (dan saat load awal)
    const sections = document.querySelectorAll('main section[id]'); // Hanya section di main dengan ID
    const navLinks = document.querySelectorAll('.nav-links a');

    function changeLinkState() {
        let index = sections.length;
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        while(--index && window.scrollY + navbarHeight + 50 < sections[index].offsetTop) {} // +50 untuk offset

        navLinks.forEach((link) => link.classList.remove('active'));

        // Cek jika ada section yang cocok
        if (index >= 0 && sections[index]) {
            const activeLink = document.querySelector(`.nav-links a[href="#${sections[index].id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        } else if (window.scrollY < sections[0].offsetTop - navbarHeight - 50) {
            // Jika scroll di paling atas sebelum section pertama, aktifkan link "home" atau link pertama
            const homeLink = document.querySelector('.nav-links a[href="#home"]'); // Asumsi #home adalah yang pertama
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    }

    // Panggil saat load awal dan saat scroll
    if (sections.length > 0) { // Hanya jalankan jika ada section yang di-track
        changeLinkState(); // Panggil saat load
        window.addEventListener('scroll', changeLinkState);
    }


    // 7. Fungsi untuk Form Laporan WhatsApp
    const laporanForm = document.getElementById('laporanForm');
    if (laporanForm) {
        laporanForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah submit form standar

            const namaPelapor = document.getElementById('namaPelapor').value;
            const emailPelapor = document.getElementById('emailPelapor').value;
            const detailMasalah = document.getElementById('detailMasalah').value;
            const nomorWhatsApp = '+6283818115136'; // Nomor WhatsApp tujuan (milik Anda)

            // Validasi dasar agar nama dan detail masalah tidak kosong
            if (!namaPelapor.trim() || !detailMasalah.trim()) {
                alert('Nama Pelapor dan Detail Masalah tidak boleh kosong.');
                return;
            }

            let pesanWhatsApp = `Halo Umaedi Tech,\n\nSaya ingin melaporkan masalah/bug:\n\n*Nama Pelapor:* ${namaPelapor}\n`;
            if (emailPelapor.trim()) { // Hanya tambahkan email jika diisi
                pesanWhatsApp += `*Email:* ${emailPelapor}\n`;
            }
            pesanWhatsApp += `*Detail Masalah:*\n${detailMasalah}\n\nTerima kasih.`;

            // Encode pesan untuk URL WhatsApp
            const encodedPesan = encodeURIComponent(pesanWhatsApp);

            // Buat link WhatsApp
            const linkWA = `https://wa.me/${nomorWhatsApp}?text=${encodedPesan}`;

            // Buka link di tab baru
            window.open(linkWA, '_blank');

            // Opsional: Reset form setelah submit
            laporanForm.reset();
        });
    }

}); // Akhir dari event listener DOMContentLoaded