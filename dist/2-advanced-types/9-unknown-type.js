"use strict";
function render1(document) {
    document.toUpperCase();
    document.draw();
    document.run();
}
function render2(document) {
    if (typeof document == "string") {
        document.toUpperCase();
    }
}
