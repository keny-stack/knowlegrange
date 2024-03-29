// JavaScript Document
//Author Name: Saptarang
//Author URI: http://www.saptarang.org
//Themeforest: http://themeforest.net/user/saptarang?ref=saptarang
//Creation Date: 10nd April, 2014

$(document).ready(function() {

      //Preloader
		$(window).load(function() {
			$('#preloader').fadeOut();
			$('.loading').delay(350).fadeOut('slow');
			$('body').delay(350).css({'overflow':'visible'});
		})

	  // Fixed Top bar
	  $(window).bind('scroll', function() {
	  var navHeight = $( window ).height();
		   if ($(window).scrollTop() > navHeight) {
			   $('#home').addClass('fixed');
		   }
		   else {
			   $('#home').removeClass('fixed');
		   }
	  });

	  // WOW - animated content
	  new WOW().init();

	  // Top Arrow
	  $(window).scroll(function() {
			  if ($(window).scrollTop() > 1000) {
				  $('a.top').fadeIn('slow');
			  } else {
				  $('a.top').fadeOut('slow');
			  }
	  });

	  // SLIDER
	  $('#slides').superslides({
		animation: 'fade',
		play:12000, // change value if you want to increase or decrease speed
		animation_speed:1500 // change time interval during slide change
	  });

	  // Datepicker - Preferred contact
	  $('#datetimepicker').datetimepicker({
	  format:'d M Y H:i', //date format
	  inline:false,
	  lang:'en' // language
	  });

	  // Gallery Overlay
	   $('ul.galleryImg li a').append('<div></div>');

	  // smooth page Scroll
	  $('nav a[href^=#], a.top[href^=#], a.read[href^=#]').click(function(event) {
			  event.preventDefault();
			  $('html,body').animate({
			  scrollTop: $(this.hash).offset().top},
			  1000);
	  });

	  // Parallax Images
	  	$('.para1').parallax("50%", 0.3);
		$('.para2').parallax("50%", 0.3);
		$('.para3').parallax("50%", 0.3);

	  // Services Carousel delay
	  $('#serviceList').carousel({
		  interval:false // set value like 5000 for making auto and increase or decrease for delay
		  });

	  // Image Lightbox
	   $("a[rel^='prettyPhoto']").prettyPhoto({overlay_gallery: true});

	  // Subscription Form Validation
		 $("#subscribeForm input").focus(function() {
			$(this).prev("label").hide();
			$(this).prev().prev("label").hide();
		});

		$("#subscribeForm").submit(function() {
			// validate and process form here
			var emailSubscribe = $("#emailSubscribe").val();
			if (emailSubscribe == "") {
				  $('#emailSubscribe').addClass('reqfld');
				  $('<span class="error" style="display:none; color:#cc0000"><i class="fa fa-exclamation-circle"></i></span>').insertBefore('#emailSubscribe').fadeIn(400);
				  $("#emailSubscribe").focus(function() {  $('#emailSubscribe').removeClass('reqfld');  $(this).prev().fadeOut(400);});
				  return false;
			 } else if(emailSubscribe.indexOf('@') == -1 || emailSubscribe.indexOf('.') == -1) {
				  $('#emailSubscribe').addClass('reqfld');
				  $('<span class="error" style="display:none;  color:#cc0000">Invalid!</span>').insertBefore('#emailSubscribe').fadeIn(400);
				  $("#emailSubscribe").focus(function() {  $('#emailSubscribe').removeClass('reqfld');  $(this).prev().fadeOut(400);});
				  return false;
			}

			var sub_security = $("#sub-security").val();

			var dataString = '&emailSubscribe=' + emailSubscribe + '&sub-security=' + sub_security;

			$.ajax({
			  type: "POST",
			  url: "form/subscribe.php",
			  data: dataString,
			  success: function() {
				$("#subscribeForm .form-row").hide();
				$('#subscribeForm').append("<div id='subscribesuccess' class='alert alert-success' style='border:#"+sub_successBox_Border_Color+" 1px "+sub_successBoxBorderStyle+"; background:#"+sub_successBoxColor+";' ></div>");
				$('#subscribesuccess').html("<h5 style='color:#"+sub_textColor+";'><i class='fa fa-check-circle'></i> "+sub_submitMessage+"</h5>")
				.hide().delay(300)
				.fadeIn(1500);

				$('#subscribeForm .form-row').delay(6000).slideUp('fast');

			  }
			});
			return false;
	  });

	  // Contact Form
	  $('.loader').hide();
	  $("input, textarea").focus(function() {
		  $(this).prev("label").hide();
		  $(this).prev().prev("label").hide();
	  });

	  $("#contact_form").submit(function() {
				// validate and process form here
				var name = $("#name").val();
					  if (name == "") {
					  $('#name').addClass('reqfld');
					  $('<span class="error" style="display:none; margin-top:0px;">Required!</span>').insertBefore('#name').fadeIn(400);
					  $("#name").focus(function() {  $('#name').removeClass('reqfld');  $(this).prev().fadeOut(400);});
					  return false;
				}

				var phone = $("#phone").val();
					  if (phone == "") {
					  $('#phone').addClass('reqfld');
					  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#phone').fadeIn(400);
					  $("#phone").focus(function() {  $('#phone').removeClass('reqfld');  $(this).prev().fadeOut(400);});
					  return false;
				}

				var email = $("#email").val();
				if (email == "") {
					  $('#email').addClass('reqfld');
					  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#email').fadeIn(400);
					  $("#email").focus(function() {  $('#email').removeClass('reqfld');  $(this).prev().fadeOut(400);});
					  return false;
				 } else if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
					  $('#email').addClass('reqfld');
					  $('<span class="error" style="display:none;">Invalid Email Address!</span>').insertBefore('#email').fadeIn(400);
					  $("#email").focus(function() {  $('#email').removeClass('reqfld');  $(this).prev().fadeOut(400);});
					  return false;
				}

				var datetimepicker = $("#datetimepicker").val();
					  if (datetimepicker == "") {
					  $('#datetimepicker').addClass('reqfld');
					  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#datetimepicker').fadeIn(400);
					  $("#datetimepicker").focus(function() {  $('#datetimepicker').removeClass('reqfld');  $(this).prev().fadeOut(400);});
					  return false;
				}

				var comment = $("#comment").val();
					  if (comment == "") {
					  $('#comment').addClass('reqfld');
					  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#comment').fadeIn(400);
					  $("#comment").focus(function() {  $('#comment').removeClass('reqfld');  $(this).prev().fadeOut(400);});
					  return false;
				}

				$('#contact_form').animate({opacity:'0.3'}, 500);

		  		var security = $("#security").val();

		  		var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone + '&datetimepicker=' + datetimepicker + '&comment=' + comment + '&security=' + security;

				//alert (dataString);return false;
				$.ajax({
				  type: "POST",
				  url: "form/contact.php",
				  data: dataString,
				  success: function() {
					$("#contact_form").animate({opacity:'1'}, 500);
					$('.loader').hide();
					$("<div id='success' class='alert alert-success' style='border:#"+successBox_Border_Color+" 1px "+successBoxBorderStyle+"; background:#"+successBoxColor+";' ></div>").insertAfter('#contact_form');
					$('#contact_form').slideUp(300);
					$('#success').html("<h5 style='color:#"+textColor+";'>"+submitMessage+"</h5><p style='color:#"+textColor+";'>"+successParagraph+"</p>")
					.hide().delay(300)
					.fadeIn(1500);
				  }
				});
				return false;
	  });

});
