const themeSwitch = document.getElementById("theme-switch");
const themeIcon = document.getElementById("theme-icon");
const themeMessage = document.getElementById("theme-message");
const contributeLink = document.getElementById("contribute-link");
let darkModeOn = false;

// Inverts the popup color
function invert(darkModeOn) {
    // If dark mode is applied
    if (!darkModeOn) {
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        let media = document.querySelectorAll("img, picture, video");
        media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
        });
    }
    else {
        document.body.style.filter = "invert(0)";
        let media = document.querySelectorAll("img, picture, video");
        media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(0)"
        });
    }
}

themeSwitch.addEventListener("change", () => {
    // If dark mode is applied
    if (!darkModeOn) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        themeMessage.textContent = "Switch Off Dark Mode";
        contributeLink.classList.remove("contribute-link-light-mode");
        contributeLink.classList.add("contribute-link-dark-mode");
    }
    else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        themeMessage.textContent = "Switch On Dark Mode";
        contributeLink.classList.remove("contribute-link-dark-mode");
        contributeLink.classList.add("contribute-link-light-mode");
    }

    invert(darkModeOn);

    darkModeOn = !darkModeOn;
});