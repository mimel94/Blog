var $buttonShowMenu=document.getElementById("js-openMenu"),$buttonHideMenu=document.getElementById("js-closeMenu"),$menu=document.getElementById("js-menu"),$buttonShowSearch=document.getElementById("js-openSearch"),$buttonHideSearch=document.getElementById("js-closeSearch"),$search=document.getElementById("js-search"),showMenu=function(){$menu.classList.add("menu-active","bounceInRight")},hideMenu=function(){$menu.classList.remove("menu-active")},showSearch=function(){$search.classList.add("search-active"),$search.classList.add("search-active","zoomIn")},hideSearch=function(){$search.classList.remove("search-active")};$buttonShowMenu.addEventListener("click",showMenu),$buttonHideMenu.addEventListener("click",hideMenu),$buttonShowSearch.addEventListener("click",showSearch),$buttonHideSearch.addEventListener("click",hideSearch),$(document).ready(function(){var e=function(){return $(document).height()-$(window).height()},t=function(){return $(window).scrollTop()};if("max"in document.createElement("progress")){var n=$("progress");n.attr({max:e()}),$(document).on("scroll",function(){n.attr({value:t()})}),$(window).resize(function(){n.attr({max:e(),value:t()})})}else{var c,o,n=$(".progress-bar"),s=e(),i=function(){return c=t(),o=c/s*100,o+="%"},a=function(){n.css({width:i()})};$(document).on("scroll",a),$(window).on("resize",function(){s=e(),a()})}}),$("#search-field").ghostHunter({results:"#results",onKeyUp:!0}),disqus=function(e,t,n){if($("#disqus_thread").length)if("undefined"==typeof DISQUS){var c="filisantillan";!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//"+c+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}()}else DISQUS.reset({reload:!0,config:function(){this.page.identifier=e,this.page.url=t,this.page.title=n}})},disqus(window.location.href,window.location.href,$(".post-title").text());