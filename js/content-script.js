const toggleDark = function () {
  addClasses(fetch("body"));
  addClasses(
    fetch(".navbar.navbar-default.navbar-fixed-top.topbar.visible-xs"),
  );
  addClasses(fetch(".hidden-xs.navigation.sidebar"));

  function fetch(selector) {
    return document.querySelectorAll(selector);
  }

  function addClass(element) {
    element.classList.add("dark");
  }

  function addClasses(elements) {
    elements.forEach((element) => {
      addClass(element);
    });
  }
};

const toggleLight = function () {
  removeClasses(fetch("body"));
  removeClasses(
    fetch(".navbar.navbar-default.navbar-fixed-top.topbar.visible-xs"),
  );
  removeClasses(fetch(".hidden-xs.navigation.sidebar"));

  function fetch(selector) {
    return document.querySelectorAll(selector);
  }

  function removeClass(element) {
    element.classList.remove("dark");
  }

  function removeClasses(elements) {
    elements.forEach((element) => {
      removeClass(element);
    });
  }
};

(async () => {
  let mode;

  const updateUI = (mode) => {
    if (mode === "dark") {
      toggleDark();
    } else {
      toggleLight();
    }
  };

  // set mode on page load
  await chrome.storage.sync.get(["mode"]).then((result) => {
    mode = result.mode;
    document.addEventListener("DOMContentLoaded", () => {
      updateUI(result.mode);
    });
  });

  // listen for change in mode
  await chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync") {
      mode = changes.mode.newValue;
      updateUI(mode);
    }
  });
})();

document.addEventListener('DOMContentLoaded', function() {
  var pendingLogsDiv = document.querySelector('.pending_logs');
  
  // Check if the div with class "pending_logs" exists
  if (pendingLogsDiv) {
    var listGroupItems = pendingLogsDiv.querySelectorAll('.list-group-item');
    
    // Loop through each list-group-item element
    for (var i = 0; i < listGroupItems.length; i++) {
      var listGroupItem = listGroupItems[i];
      var bpiStatusSpan = listGroupItem.querySelector('.bpi-status');
      
      // Check if list-group-item has a child element with class "bpi-status"
      if (bpiStatusSpan) {
        var strongElement = bpiStatusSpan.querySelector('strong');
        
        // Check if bpi-status span has a child <strong> element with the word "second deadline"
        if (strongElement && strongElement.innerText.includes('deadline for a second chance before')) {
          // Add the class "in_second_deadline" to the respective list-group-item element
          listGroupItem.classList.add('in_second_deadline');
        }
      }
    }
  }
});
