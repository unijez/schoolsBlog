jQuery(document).ready(function($){function e(){a.add(s).click(function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),t.hasClass("menu-active")?(t.removeClass("menu-active"),a.removeClass("button-active"),n.removeClass("stop-scroll"),s.removeClass("menuOpen")):(t.addClass("menu-active"),a.addClass("button-active"),n.addClass("stop-scroll"),s.addClass("menuOpen"))})}var a=$(".nav-button"),t=$(".global-nav"),n=$("html"),s=$(".overlay");e();var o=$(".blog-article");o.readingTime({readingTimeAsNumber:!1,readingTimeTarget:".eta",wordCountTarget:o.find(".word-count"),wordsPerMinute:275,lessThanAMinuteString:"less than a minute",round:!0,lang:"en",success:function(){},error:function(e){o.find(".reading-time").remove()}}),$(".hero-header").slick({dots:!0,pauseOnHover:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2500}),$("ul.comment-tabs li").click(function(){var e=$(this).attr("data-tab");$("ul.comment-tabs li").removeClass("current"),$(".comment-tab__tab-content").removeClass("current"),$(this).addClass("current"),$("#"+e).addClass("current")})});