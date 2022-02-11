$(document).ready(function () {
    //popover function
    $(function () {
        $('[data-toggle="popover"]').popover()
    })
    // Smooth scroll
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    

    });
});