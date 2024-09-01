document.addEventListener('DOMContentLoaded', () => {
    // Array of inspirational quotes
    const quotes = [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        "The best way to predict your future is to create it."
    ];

    // Function to get a random quote
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    // Show a popup with an inspirational quote every 10 seconds
    setInterval(() => {
        alert(getRandomQuote());
    }, 10000); // 10000 milliseconds = 10 seconds
});
