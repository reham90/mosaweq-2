let hint = document.querySelector(".preloader");
window.onload = function() {
    //hide the preloader
    setTimeout(function() {
        hint.style.display = "none";
    }, 700);
};
$(document).ready(function() {
    new WOW().init();

    //phone size menu onclick
    if ($(window).width() <= 991) {


        ///// search in mobile /////////
        $(".fixed-search").click(function(e) {
            e.preventDefault();
            $(".overlay-box").fadeToggle(300);
            $(".search-section").toggleClass("search-open");
            $(".fixed-search .open-search").toggleClass("close-search");
            $("body").toggleClass("overflow");

        });




    }


    ///////// ** upload images ** /////////



    ImgUpload();


    function ImgUpload() {
        var imgWrap = "";
        var imgArray = [];

        $('.upload__inputfile').each(function() {
            $(this).on('change', function(e) {
                imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
                var maxLength = $(this).attr('data-max_length');

                var files = e.target.files;
                var filesArr = Array.prototype.slice.call(files);
                var iterator = 0;
                filesArr.forEach(function(f, index) {

                    if (!f.type.match('image.*')) {
                        return;
                    }

                    if (imgArray.length > maxLength) {
                        return false
                    } else {
                        var len = 0;
                        for (var i = 0; i < imgArray.length; i++) {
                            if (imgArray[i] !== undefined) {
                                len++;
                            }
                        }
                        if (len > maxLength) {
                            return false;
                        } else {
                            imgArray.push(f);

                            var reader = new FileReader();
                            reader.onload = function(e) {
                                var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                                imgWrap.append(html);
                                iterator++;
                            }
                            reader.readAsDataURL(f);
                        }
                    }
                });
            });
        });

        $('body').on('click', ".upload__img-close", function(e) {
            var file = $(this).parent().data("file");
            for (var i = 0; i < imgArray.length; i++) {
                if (imgArray[i].name === file) {
                    imgArray.splice(i, 1);
                    break;
                }
            }
            $(this).parent().parent().remove();
        });
    }

    $('input[type=file]').change(function() {
        var filename = $(this).val().split('\\').pop();
        var idname = $(this).attr('id');
        console.log($(this));
        console.log(filename);
        console.log(idname);
        $('label').find('span').html(filename);

    });

    ///////// ** main** /////////
    var specials = new Swiper(".main-slider .swiper-container", {
        loop: true,
        autoplay: true,
        pagination: {
            el: ".main-slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".main-slider .swiper-btn-next",
            prevEl: ".main-slider .swiper-btn-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 1,
            },
        },
    });

    ////////////** footer transfer into accordion **//////////

    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("footer-accordion");
        $(".nav-foot").addClass("footer-panel");
    }
    $(".footer-accordion").click(function() {
        var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
        $(".footer-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css("max-height") == "0px") {
            $(this).siblings().css("max-height", x);
            $(this).siblings(".nav-foot").css("padding-top", "15px");
        } else {
            $(this).siblings().css("max-height", "0");
            $(this).siblings(".nav-foot").css("padding-top", "0");
        }

        $(".footer-accordion").not(this).siblings().css("max-height", "0");
        $(".footer-accordion")
            .not(this)
            .siblings(".nav-foot")
            .css("padding-top", "0");
    });
    //////////** fixed arrow to top**//////////
    $(".arrow-top").click(function() {
        $("html,body").animate({
                scrollTop: 0,
            },
            1500
        );
    });
    $(this).scrollTop() >= 500 ?
        $(".arrow-top").fadeIn(300) :
        $(".arrow-top").fadeOut(300);

    $(window).scroll(function() {
        $(this).scrollTop() >= 500 ?
            $(".arrow-top").fadeIn(300) :
            $(".arrow-top").fadeOut(300);
    });
});
/////////////////////////////////////////////////////// search in mobile //////////////////////

///////// **show adv by clicking button on map view** /////////
function showAdv(id) {
    $('#' + id).show();
    $('.hide').not('#' + id).hide();

}



///////// **my-account-section-tabs** /////////
tabControl();

/*
We also apply the switch when a viewport change is detected on the fly
(e.g. when you resize the browser window or flip your device from 
portrait mode to landscape). We set a timer with a small delay to run 
it only once when the resizing ends. It's not perfect, but it's better
than have it running constantly during the action of resizing.
*/
var resizeTimer;
$(window).on('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        tabControl();
    }, 250);
});

/*
The function below is responsible for switching the tabs when clicked.
It switches both the tabs and the accordion buttons even if 
only the one or the other can be visible on a screen. We prefer
that in order to have a consistent selection in case the viewport
changes (e.g. when you esize the browser window or flip your 
device from portrait mode to landscape).
*/
function tabControl() {
    var tabs = $('.tabbed-content').find('.tabs');
    if (tabs.is(':visible')) {
        tabs.find('a').on('click', function(event) {
            event.preventDefault();
            var target = $(this).attr('href'),
                tabs = $(this).parents('.tabs'),
                buttons = tabs.find('a'),
                item = tabs.parents('.tabbed-content').find('.item');
            buttons.removeClass('active');
            item.removeClass('active');
            $(this).addClass('active');
            $(target).addClass('active');
            div2.style.display = "none";
            div1.style.display = "block";
            openChatDiv.style.display = "none";
            chatDiv.style.display = "block";
            reportDetails.style.display = "none";
            reports.style.display = "block";
        });
    } else {
        $('.item').on('click', function() {
            var container = $(this).parents('.tabbed-content'),
                currId = $(this).attr('id'),
                items = container.find('.item');
            container.find('.tabs a').removeClass('active');
            items.removeClass('active');
            $(this).addClass('active');
            container.find('.tabs a[href$="#' + currId + '"]').addClass('active');
        });
    }
}



///////////////////* upload user img *//////////////////////////////////
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#user_photo')
                .attr('src', e.target.result)
                .width(128)
                .height('130');
        };

        reader.readAsDataURL(input.files[0]);
    }
}
$("#imgpath").change(function() {
    readURL(this);
});

/////////////////////////////* show edit-adv-section by clicking on edit-btn *//////////////////////////////
function showEdit() {
    let div1 = document.querySelector('#div1');
    let div2 = document.querySelector('#div2');

    if (div1.style.display == "block") {
        div1.style.display = "none";
        div2.style.display = "flex";
    } else {
        div1.style.display = "block";
        div2.style.display = "none";
    }

};

function openChat() {
    let chatDiv = document.querySelector('#chatDiv');
    let openChatDiv = document.querySelector('#openChatDiv');

    if (chatDiv.style.display == "block") {
        chatDiv.style.display = "none";
        openChatDiv.style.display = "flex";
    } else {
        chatDiv.style.display = "block";
        openChatDiv.style.display = "none";
    }

}

function report() {
    let reports = document.querySelector('#reports');
    let reportDetails = document.querySelector('#reportDetails');

    if (reports.style.display == "block") {
        reports.style.display = "none";
        reportDetails.style.display = "flex";
    } else {
        reports.style.display = "block";
        reportDetails.style.display = "none";
    }

}