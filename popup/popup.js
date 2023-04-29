if (document.querySelector("#theme-switch") != null) {
  const themeSwitch = document.getElementById("theme-switch");
  const themeIcon = document.getElementById("theme-icon");
  const themeMessage = document.getElementById("theme-message");
  const contributeLink = document.getElementById("contribute-link");
  let mode;

  // get initial mode from storage
  chrome.storage.sync.get(["mode"]).then((result) => {
    mode = result.mode;
    if (mode === "dark") {
      themeSwitch.checked = true;
      updateUIToDark();
    } else {
      themeSwitch.checked = false;
      updateUIToLight();
    }
  });

  themeSwitch.addEventListener("change", (e) => {
    mode = e.target.checked ? "dark" : "light";
    chrome.storage.sync.set({ mode });

    if (mode === "dark") {
      updateUIToDark();
    } else {
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
