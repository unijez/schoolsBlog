jQuery(document).ready(function($){function e(){a.click(function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),o.hasClass("menu-active")?(o.removeClass("menu-active"),a.removeClass("button-active"),n.removeClass("stop-scroll"),t.removeClass("menuOpen")):(o.addClass("menu-active"),a.addClass("button-active"),n.addClass("stop-scroll"),t.addClass("menuOpen"))})}var a=$(".nav-button"),o=$(".global-nav"),n=$("html"),t=$(".overlay");e();var s=$(".blog-article");s.readingTime({readingTimeAsNumber:!1,readingTimeTarget:".eta",wordCountTarget:s.find(".word-count"),wordsPerMinute:275,lessThanAMinuteString:"less than a minute",round:!0,lang:"en",success:function(){console.log("It worked!")},error:function(e){console.log(e),s.find(".reading-time").remove()}}),$(".hero-header").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:1750})});