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




////////////////////////////////////* toggle password *//////////////////////////////////////////////
function togglePassword() {
    var x = document.getElementById("pass1");
    var eyeSlash = document.getElementById("eye-slash");
    var eye = document.getElementById("eye");
    if (x.type === "password") {
      x.type = "text";
      eyeSlash.style.display="none";
      eye.style.display="block";

    } else {
      x.type = "password";
      eyeSlash.style.display="block";
      eye.style.display="none";
    }
  }

  function togglePassword2() {
    var x2 = document.getElementById("pass2");
    var eyeSlash2 = document.getElementById("eye-slash-2");
    var eye2 = document.getElementById("eye-2");
    if (x2.type === "password") {
      x2.type = "text";
      eyeSlash2.style.display="none";
      eye2.style.display="block";

    } else {
      x2.type = "password";
      eyeSlash2.style.display="block";
      eye2.style.display="none";
    }
  }

  function togglePassword3() {
    var x3 = document.getElementById("pass3");
    var eyeSlash3 = document.getElementById("eye-slash-3");
    var eye3 = document.getElementById("eye-3");
    if (x3.type === "password") {
      x3.type = "text";
      eyeSlash3.style.display="none";
      eye3.style.display="block";

    } else {
      x3.type = "password";
      eyeSlash3.style.display="block";
      eye3.style.display="none";
    }
  }

  /////////////////////////////////////////////* custom select  *////////////////////////////////////////////////////////
  var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "select-wrapper":*/
x = document.getElementsByClassName("select-wrapper");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);



  /////////////////////////////////////////* some validations for input fields  *///////////////////////////////////////
  $(function(){
    $("#user").keypress(function(event){
        var ew = event.which;
        if(ew == 32)
            return true;
        if(48 <= ew && ew <= 57)
            return true;
        if(65 <= ew && ew <= 90)
            return true;
        if(97 <= ew && ew <= 122)
            return true;
        return false;
    });
});
  

function setInputFilter(textbox, inputFilter, errMsg) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function(event) {
        var el = document.querySelector('.inputs');
        if(el){
            el.addEventListener(event, function(e) {
                if (inputFilter(this.value)) {
                  // Accepted value
                  if (["keydown","mousedown","focusout"].indexOf(e.type) >= 0){
                    this.classList.remove("input-error");
                    this.setCustomValidity("");
                  }
                  this.oldValue = this.value;
                  this.oldSelectionStart = this.selectionStart;
                  this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                  // Rejected value - restore the previous one
                  this.classList.add("input-error");
                  this.setCustomValidity(errMsg);
                  this.reportValidity();
                  this.value = this.oldValue;
                  this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                } else {
                  // Rejected value - nothing to restore
                  this.value = "";
                }
              });
        }
    
    });
  }
  
  
  // Install input filters.
  setInputFilter(document.getElementById("intTextBox"), function(value) {
    return /^-?\d*$/.test(value); }, "Must be an integer");

   

  setInputFilter(document.getElementById("currencyTextBox"), function(value) {
    return /^-?\d*[.,]?\d{0,2}$/.test(value); }, "Must be a currency value");


   ///////////////////// advanced-search ///////////////////////
   function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.querySelector('.body').style.overflow="hidden";
   
  
   
    
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  let overlayAdvanced = document.querySelector('.overlay-advanced-search');
  window.onclick = e => {
    if (e.target === overlayAdvanced) {
      overlayAdvanced.style.width = '0';
    }
  }

  


  