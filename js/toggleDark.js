(function () {
    addClasses(fetch("body"));
    addClasses(fetch(".navbar.navbar-default.navbar-fixed-top.topbar.visible-xs"));
    addClasses(fetch(".hidden-xs.navigation.sidebar"));

    function fetch(selector) {
        return document.querySelectorAll(selector);
    }

    function addClass(element) {
        element.classList.add("dark");
    }

    function addClasses(elements) {
        elements.forEach(
            (element) => {
                addClass(element);
        })
    };

})()