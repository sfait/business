function changeTitle() {
    const message = "Zamów Magazyn Business";
    let original;

    window.addEventListener("focus", function() {
        if (original) {
            document.title = original;
        }
    })

    window.addEventListener("blur", function() {
        const title = document.title;
        if (title != message) {
            original = title;
        }
        document.title = message;
    })
}

function countingDownDays() {
    const daysCounter = document.querySelector(".promotion-days-counter");
    const countDownDate = new Date("Jan 1, 2020 00:00:00").getTime();

    const setinterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        daysCounter.textContent = days;

        if (distance < 0) {
            clearInterval(setinterval);
            daysCounter.textContent = "0";
        }
    }, 1000);
}


const init = () => {
    changeTitle();
    countingDownDays();
}

document.addEventListener("DOMContentLoaded", init);
