document.body.onload = function() {
  setTimeout(function() {
    var preloader = document.getElementById('page-preloader');
    if( !preloader.classList.contains('done') )
    {
      preloader.classList.add('done');
    }
  }, 1000);
}

$(document).ready(function() {

$('.owl-carousel').owlCarousel({
    items: 4,
    dots: true,
    autoplay: true,
    autoHeight : true,
    loop: true,
    responsive : {
            1 : { items : 1  },
            767 : { items : 2  }, // from zero to 480 screen width 4 items
            991 : { items : 3  }, // from 480 screen widthto 768 6 items
            1199 : { items : 4   // from 768 screen width to 1024 8 items
            }
        },
});

   $("a").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top+ "px"
      }, {
         duration: 1600, 
         easing: "swing"
      });
      return false;
   });

   $(window).scroll(function() {
        if($(this).scrollTop() != 0) { 
            $('#toTop').fadeIn(); 
        } else {
            $('#toTop').fadeOut();
        }
 
    });
 
    $('#toTop').click(function() {
 
    $('body,html').animate({scrollTop:0},800);
 
    });

      //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Спасибо за обратную связь!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});