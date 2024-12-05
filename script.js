const targetDate = new Date("Dec 31, 2024 23:59:59").getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Time calculations
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "We're Live!";
    }
}, 1000);
