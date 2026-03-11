$(document).ready(function() {
			$('.carousel').carousel({
				"pause": "false",
				"interval": 5000
			});
			$('.carousel').on('slide.bs.carousel', function(event) {					
				var tag = $(event.relatedTarget).attr("tag");
				var progress = $(event.relatedTarget).attr("progress");
				$("#progress").animate({
					width: progress
				}, 500);
				playAnimation(tag);
			});
			$('.carousel').on('slid.bs.carousel', function(event) {
				var carouselData = $(this).data('bs.carousel');
				var currentIndex = carouselData.getActiveIndex();//当前图片的索引，注意：这并不是下一张图的索引号					
				$('#ntxt').html(currentIndex+1);
			});				
			playAnimation("home");
		});

		function switchvision(visionIndex) {
			$('.carousel').carousel(visionIndex);
		}

		function playAnimation(tag) {
			var ani1 = $("#vision_" + tag + " .ani_step_1");
			var ani2 = $("#vision_" + tag + " .ani_step_2");
			var ani3 = $("#vision_" + tag + " .ani_step_3");
			var pre_start = ((tag == "home") ? 0 : 160);

			if (ani1 != null) {
				ani1.css("opacity", 0);
				setTimeout(function() {
					ani1.animate({
						opacity: 1
					}, 1000);
				}, 10 + pre_start);
			}

			if (ani2 != null) {
				ani2.css("opacity", 0);
				setTimeout(function() {
					ani2.animate({
						opacity: 1
					}, 1000);
				}, 1500 + pre_start);
			}

			if (ani3 != null) {
				ani3.css("opacity", 0);
				setTimeout(function() {
					$("#vision_" + tag + " .ani_step_3").animate({
						opacity: 1
					}, 1000);

				}, 3000 + pre_start);
			}
		}
