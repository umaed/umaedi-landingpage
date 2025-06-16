// script_tebak_member.js

document.addEventListener('DOMContentLoaded', () => {
    // Daftar member JKT48 (sesuai request Anda)
    const members = [
        { name: 'Oline', image: 'foto/jkt48/oline.jpg' },
        { name: 'Erine pacar umaedi', image: 'foto/jkt48/erine.jpg' }, // Sesuai request
        { name: 'Fritzy', image: 'foto/jkt48/fritzy.jpg' },
        { name: 'Moreen', image: 'foto/jkt48/moreen.jpg' },
        { name: 'Lily', image: 'foto/jkt48/lily.jpg' },
        { name: 'Delyn', image: 'foto/jkt48/delyn.jpg' },
        { name: 'Christy', image: 'foto/jkt48/christy.jpg' },
        { name: 'Marsha', image: 'foto/jkt48/marsha.jpg' }
    ];

    const imageContainer = document.getElementById('image-container');
    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');
    const scoreEl = document.getElementById('score');
    const feedbackEl = document.getElementById('feedback');
    const yearSpan = document.getElementById('year');

    let currentMemberIndex;
    let score = 0;
    let shuffledMembers;

    function startGame() {
        score = 0;
        updateScore();
        shuffledMembers = [...members].sort(() => 0.5 - Math.random()); // Acak urutan member
        currentMemberIndex = 0;
        showQuestion();
    }

    function showQuestion() {
        feedbackEl.textContent = '';
        nextBtn.style.display = 'none';
        optionsContainer.innerHTML = '';

        const currentMember = shuffledMembers[currentMemberIndex];
        imageContainer.innerHTML = `<img src="${currentMember.image}" alt="Tebak Member Ini!">`;

        // Buat pilihan ganda
        const options = generateOptions(currentMember.name);
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => checkAnswer(option, currentMember.name, button));
            optionsContainer.appendChild(button);
        });
    }

    function generateOptions(correctAnswer) {
        let options = [correctAnswer];
        // Pastikan pilihan jawaban unik
        while (options.length < 4) {
            const randomMember = members[Math.floor(Math.random() * members.length)];
            if (!options.includes(randomMember.name)) {
                options.push(randomMember.name);
            }
        }
        return options.sort(() => 0.5 - Math.random()); // Acak pilihan jawaban
    }

    function checkAnswer(selected, correct, button) {
        disableOptions();
        if (selected === correct) {
            score++;
            feedbackEl.textContent = "Benar! Kamu Keren!";
            feedbackEl.style.color = "#28a745";
            button.classList.add('correct');
        } else {
            feedbackEl.textContent = `Salah! Jawaban yang benar adalah ${correct}`;
            feedbackEl.style.color = "#dc3545";
            button.classList.add('wrong');
        }
        updateScore();
        nextBtn.style.display = 'block';
    }
    
    function disableOptions() {
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
        });
    }

    function nextQuestion() {
        currentMemberIndex++;
        if (currentMemberIndex < shuffledMembers.length) {
            showQuestion();
        } else {
            imageContainer.innerHTML = `<h2>Game Selesai!</h2>`;
            optionsContainer.innerHTML = `<p>Skor akhir kamu adalah ${score} dari ${shuffledMembers.length}.</p>`;
            nextBtn.textContent = 'Mulai Lagi';
            nextBtn.onclick = startGame;
        }
    }
    
    function updateScore() {
        scoreEl.textContent = score;
    }

    // Event listener untuk tombol lanjut
    nextBtn.addEventListener('click', nextQuestion);

    // Set tahun di footer
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Mulai permainan saat halaman dimuat
    startGame();
});