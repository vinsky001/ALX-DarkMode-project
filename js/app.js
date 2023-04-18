if (document.querySelector("#theme-switch") != null) {
    const themeSwitch = document.getElementById("theme-switch");
    const themeIcon = document.getElementById("theme-icon");
    const themeMessage = document.getElementById("theme-message");
    const contributeLink = document.getElementById("contribute-link");
    let darkModeOn = localStorage.getItem("mode", "light");
    
    
    // Set UI to appropriate mode whenever page is loaded
    darkModeOn === "dark" ? updateUIToDark() : updateUIToLight();

    themeSwitch.addEventListener("change", async () => {
        // Toggle darkModeOn 
        darkModeOn = darkModeOn === "dark" ? "light" : "dark";
        localStorage.setItem("mode", darkModeOn);

        if (darkModeOn === "dark") {
            // Update the UI to the dark mode
            updateUIToDark();
            }
        else {
            // Update the UI to the light mode
            updateUIToLight();
        }
    });

    
    async function updateUIToDark() {
        themeSwitch.checked = true;
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        themeMessage.textContent = "Switch Off Dark Mode";
        contributeLink.classList.remove("contribute-link-light-mode");
        contributeLink.classList.add("contribute-link-dark-mode");
        document.querySelector(".card-head").classList.add("dark-theme");
        document.querySelector(".card-body").classList.add("dark-theme");
        document.querySelector(".card-content").classList.add("dark-theme");
        document.querySelector(".card-foot").classList.add("dark-theme");
        let [tab] = await chrome.tabs.query({
            active: true, lastFocusedWindow: true
        });
        chrome.scripting.executeScript({
            target: {tabId: tab.id, allFrames: true}
            , files: ["js/toggleDark.js"],
        });
    }

    async function updateUIToLight() {
        themeSwitch.checked = false;
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        themeMessage.textContent = "Switch On Dark Mode";
        contributeLink.classList.remove("contribute-link-dark-mode");
        contributeLink.classList.add("contribute-link-light-mode");
        document.querySelector(".card-head").classList.remove("dark-theme");
        document.querySelector(".card-body").classList.remove("dark-theme");
        document.querySelector(".card-content").classList.remove("dark-theme");
        document.querySelector(".card-foot").classList.remove("dark-theme");
    }
}