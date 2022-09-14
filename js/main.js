if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
}

$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".banner .bg").css({
        "transform" : "translate(0px, " + st/25 + "px"
    });
    $(".banner .truck").css({
        "transform" : "translate(0px, " + st/18 + "px"
    });
    $(".banner .img").css({
        "transform" : "translate(0px, " + st/10 + "px"
    });
    // $(".banne__logo").css({
    //     "transform" : "translate(" + -st/10 + "px, " + "0px"
    // });
    // $(".banner__phone").css({
    //     "transform" : "translate(" + -st/20 + "px, " + "0px"
    // });
});
$(".burgir_btn .btn").click(function() {
    $(".burgir_btn").toggleClass("open");
    $(".header__navbar").toggleClass("open");
});
if(document.querySelector('.btn_burgir_left')) {
    $(".btn_burgir_left").click(function() {
        $(".burgir_btn").toggleClass("open");
        $(".header__navbar").toggleClass("open");
    });
}
$(".header__call").click(function() {
    $(".modal").addClass("open");
});
$(".modal__close").click(function() {
    $(".modal").removeClass("open");
});