document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Quote Generator
    const quotes = [
        "“You taught me that not knowing the answer is not a dead end. It is the first, brave step toward finding a better question.”",
        "“Thank you for seeing potential in me when I couldn't see it in myself.”",
        "“Your patience turned my frustration into understanding. I'll never forget that.”",
        "“Great teachers don't just teach subjects; they teach us how to think and believe.”",
        "“The impact of a truly dedicated teacher extends far beyond the four walls of a classroom.”"
    ];

    let currentQuoteIndex = 0;
    const quoteTextElem = document.getElementById('quote-text');
    const noteIdElem = document.getElementById('note-id');
    const nextBtn = document.getElementById('next-quote-btn');

    nextBtn.addEventListener('click', () => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quoteTextElem.textContent = quotes[currentQuoteIndex];
        noteIdElem.textContent = `NOTE NO. 0${currentQuoteIndex + 1}`;
    });

    // 2. Note Pinning Functionality
    const noteForm = document.getElementById('note-form');
    const notesGrid = document.getElementById('notes-grid');

    const cardStyles = [
        'card-white',
        'card-yellow',
        'card-green',
        'card-orange'
    ];
    
    const cardIcons = ['✏️', '👥', '💡', '❤️', '⭐', '✒️'];

    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const authorInput = document.getElementById('author-input').value.trim();
        const messageInput = document.getElementById('message-input').value.trim();

        if (!messageInput) return;

        // Choose random background style and icon
        const randomStyle = cardStyles[Math.floor(Math.random() * cardStyles.length)];
        const randomIcon = cardIcons[Math.floor(Math.random() * cardIcons.length)];
        const authorText = authorInput ? authorInput.toUpperCase() : 'ANONYMOUS STUDENT';

        // Create new card element
        const newCard = document.createElement('div');
        newCard.className = `sticky-card ${randomStyle}`;
        newCard.innerHTML = `
            <span class="card-icon">${randomIcon}</span>
            <p class="card-body">"${messageInput}"</p>
            <span class="card-author">— ${authorText}</span>
        `;

        // Prepend new card to the wall with a slight scale animation
        newCard.style.opacity = '0';
        newCard.style.transform = 'scale(0.8)';
        notesGrid.insertBefore(newCard, notesGrid.firstChild);

        setTimeout(() => {
            newCard.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            newCard.style.opacity = '1';
            newCard.style.transform = 'rotate(-1deg) scale(1)';
        }, 50);

        // Reset Form
        noteForm.reset();
    });
});
