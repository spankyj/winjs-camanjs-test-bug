$(document).ready(function() {
    $("a").click(function (ev) {
        console.log('clicked');
        Caman("#image", function () {
            this.brightness(10);
            this.contrast(30);
            this.sepia(60);
            this.saturation(-30);
            this.render();
            this.render(function () {

            });
        });
        ev.preventDefault();
    });
});