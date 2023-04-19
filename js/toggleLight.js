(function () {

    removeClasses(fetch("body"));
    removeClasses(fetch(".navbar.navbar-default.navbar-fixed-top.topbar.visible-xs"));
    removeClasses(fetch(".hidden-xs.navigation.sidebar"));

    function fetch(selector) {
        return document.querySelectorAll(selector);
    }

    function removeClass(element) {
        element.classList.remove("dark");
    }

    function removeClasses(elements) {
        elements.forEach( 
            (element) => {
                removeClass(element);
        });
    }

}())