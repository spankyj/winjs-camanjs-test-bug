$(document).ready(function() {
    $("a").click(function (ev) {
        var start, end;
        console.log('clicked');
        Caman.Event.listen("renderFinished", function () {
            end = performance.now();
            console.log(performance.now() + ", render finished")
            console.log("time: " + (end - start));
            $("#time").html(end - start);
        })
        Caman("#image", function () {
            this.brightness(10);
            this.contrast(30);
            this.sepia(60);
            this.saturation(-30);
            console.log(performance.now() + ", render started");
            start = performance.now();
            this.render();
            this.render();
            console.log(performance.now() + ", render returned");
        });
        ev.preventDefault();
    });
});