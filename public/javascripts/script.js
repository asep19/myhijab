// some scripts

// jquery ready start
$(document).ready(function() {
	// jQuery code



    
    /* ///////////////////////////////////////

    THESE FOLLOWING SCRIPTS ONLY FOR BASIC USAGE, 
    For sliders, interactions and other

    */ ///////////////////////////////////////
    

	//////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });

	
	//////////////////////// Bootstrap tooltip
	if($('[data-toggle="tooltip"]').length>0) {  // check if element exists
		$('[data-toggle="tooltip"]').tooltip()
	} // end if

    /////////////////////// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a.page-scroll').click(function() {
        $('.navbar-toggler:visible').click();
    });


    ////////////////////////  Highlight the top nav as scrolling occurs. /bootstrap/
    $('body').scrollspy({ 
        target: '#navbar_aside',
        offset: 300
    });

        //////////////////////// Menu scroll to section for landing
    $('a.page-scroll').click(function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 50  }, 1000);
        event.preventDefault();
    });





    
}); 
// jquery end

// link image thumbnail
$(document).ready(function () {
    $("#img_produk").ezPlus({
        gallery: 'img_thumbs',
        cursor: 'pointer',
        galleryActiveClass: "active",
        imageCrossfade: true,
        loadingIcon: "images/spinner.gif"
    });

    $("#img_produk").bind("click", function (e) {
        var ez = $('#img_produk').data('ezPlus');
        ez.closeAll(); //NEW: This function force hides the lens, tint and window
        $.fancybox(ez.getGalleryList());
        return false;
    });

});

// buat halaman admin
jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});


   
   
});