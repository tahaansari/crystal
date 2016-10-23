// $(document).ready(function(){

// 	alert("doc is now ready");

// 	$('.beginning-hover-img').mouseenter(function(){

// 		alert('mouse enter')
// 		// $('.beginning-hover').css("display","block");
// 	})

// 	$('.beginning-hover-img').mouseleave(function(){

// 		alert('mouse out')
// 		// $('.beginning-hover').css("display","none");

// 	})
// })


// $('#view_all').click(function(){

// 	// $(".more-products-list").slideToggle();
// 	$(".more-products-list").slideToggle( "slow", function() {});
// 	$('#view_all').val("View Less");

// })


$('.more-products').click(function(){

	$("#more-products").slideDown( "slow", function() {});

})
   /**
     * EFECTO PARA FLECHAS EN ACORDEON
     */
    
$(document).on('show','.accordion', function (e) {
     //$('.accordion-heading i').toggleClass(' ');
     $(e.target).prev('.accordion-heading').addClass('accordion-opened');
});

$(document).on('hide','.accordion', function (e) {
    $(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
    //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
});


// $('#close-more-product').click(function(){

// 	$("#more-product").slideUp( "slow", function() {});

// })

// $(".thumbnails").hover(function(){

//     alert("hello");
// })

function hovered(id,cat_id){

    $("#"+cat_id).attr('src','img/p1.png');
    // $("#"+cat_id).css('width','95%');



}

















































