$(() => {
    setNavigation();
});

function setNavigation() {
    let path = window.location.pathname;

    $(".nav-item .nav-link").each(function() {
        let href = $(this).attr("href");
        if(path === href) {
            $(this).addClass("active");
        }
    });
}