(function ($) {
    $.fn.createElement = function (options) {
        let myElement = $.extend({
            element: "p",
            text: "You write text",
            fonts: "20"
        }, options);

        let newElement = $("<" + myElement.element + "></" + myElement.element + ">");
        newElement.text(myElement.text);
        newElement.css("font-size", myElement.fonts + "px");


        this.append(newElement);
        return this;
    }
}(jQuery));