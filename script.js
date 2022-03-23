//add this first block of code first ... then wit a seocnd then add the rest
var jsFile = document.createElement("script");
jsFile.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.body.appendChild(jsFile);



var curThumbImg = null;


jQuery('.dropdown-trigger.style-scope.ytd-menu-renderer > .style-scope.yt-icon-button > .style-scope.ytd-menu-renderer').on('click', function() {
    curThumbImg = jQuery(this).closest('ytd-grid-video-renderer');
})



const poller = setInterval(function() {
    const btnSaveToPlaylistgExists = jQuery('yt-formatted-string:contains(Save to playlist)').closest('tp-yt-paper-item').length
    if (btnSaveToPlaylistgExists) {


        jQuery('yt-formatted-string:contains(Save to playlist)').closest('tp-yt-paper-item').on('click', function() {
            console.log('aaaa');
            curThumbImg.remove();
        });;

        clearInterval(poller);
    }
}, 1000);
