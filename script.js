//add this first block of code first ... then wit a seocnd then add the rest
var jsFile = document.createElement("script");
jsFile.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.body.appendChild(jsFile);



var curThumbImg = null;


jQuery('.dropdown-trigger.style-scope.ytd-menu-renderer > .style-scope.yt-icon-button > .style-scope.ytd-menu-renderer').on('click', function() {
    curThumbImg = jQuery(this).closest('ytd-grid-video-renderer');
    console.log(jQuery(this).closest('ytd-grid-video-renderer'))
    jQuery('yt-formatted-string:contains(Save to playlist)').click();
})



const poller = setInterval(function() {
    const btnSaveToPlaylistgExists = jQuery('yt-formatted-string:contains(Save to playlist)').closest('tp-yt-paper-item').length
    if (btnSaveToPlaylistgExists) {


        jQuery('yt-formatted-string:contains(Save to playlist)').closest('tp-yt-paper-item').on('click', function() {
            console.log('aaaa');
            curThumbImg.remove();

            setTimeout(function() {
                jQuery('#playlists *').on('click', function() {
                    document.querySelector('yt-icon[icon="close').click();
                });
            }, 500);

        });;

        clearInterval(poller);
    }
}, 1000);


jQuery(document).ready(function() {
    jQuery(window).on('scroll', function() {
        if (jQuery(window).scrollTop() >= jQuery('.ttw-loadmore__btn').offset().top + jQuery('.ttw-loadmore__btn').outerHeight() - window.innerHeight) {
            if (jQuery('.ttw-loadmore__btn').css('display') != 'none') {
                jQuery('.ttw-loadmore__btn').click();
            }
        }
    });
});




var poller = setInterval(function() {
    if (jQuery('ytd-moving-thumbnail-renderer').is(":visible")) {
        console.log("element is visible");
        console.log(jQuery(this).parent().parent().parent().parent().parent().parent().parent().parent().parent());
    }else{
        console.log("element is NOT visibile");
    }
}, 1000);


<ytd-moving-thumbnail-renderer class="style-scope ytd-thumbnail"><!--css-build:shady--><img id="thumbnail" alt="" class="style-scope ytd-moving-thumbnail-renderer fade-in" src="https://i.ytimg.com/an_webp/urneGmbbxns/mqdefault_6s.webp?du=3000&amp;sqp=CKaO7pEG&amp;rs=AOn4CLCK4FuXwJo0JgCsoe39aVzZT_w9_A">
<yt-icon id="play" default-to-filled="true" icon="play_all" class="style-scope ytd-moving-thumbnail-renderer"><!--css-build:shady--></yt-icon>
</ytd-moving-thumbnail-renderer>