(function($){
        $(document).ready(function(){
            $("[title]").style_my_tooltips({
                tip_follows_cursor:true,
                tip_delay_time:30,
                tip_fade_speed:300,
                attribute:"title"
            });
            
            function gatherData(images, arr) {
              for (let i = 0; i < images.length; i++) {
                let currentData = {
                  "width": images[i].getAttribute('data-width'),
                  "height": images[i].getAttribute('data-height'),
                  "low_res": images[i].getAttribute('data-lowres'),
                  "high_res": images[i].getAttribute('data-highres')
                };
                arr.push(currentData);
              }
            }
            function getIndex(elem) {
              let i = 0;
              while( (elem = elem.previousElementSibling) != null ) i++;
              return i;
            }
            function lightbox(elem) {
              let currentPhotoset = elem.parentNode;
              let photosetPhotos = currentPhotoset.getElementsByTagName('div');
              let data = [];
              gatherData(photosetPhotos, data);
              Tumblr.Lightbox.init(data, getIndex(elem) + 1);
            }
            
            customAudio({
            	post: ".post",
            	default: false,
            	pauseAll: true,
            	playButton: "<i class='ti ti-player-play-filled'></i>",
            	pauseButton: "<i class='ti ti-player-pause-filled'></i>",
            	errorIcon: "<i class='ti ti-x'></i>",
            	hideInfoIfError: true,
            });
            
            
            function flexFrame() {
               $(".caption-inner").each(function() {
                    $(this).find(".embed_iframe").wrap("<div class='iframe-flex'></div>"); // wrap iframe 
                    flexibleFrames($(".iframe-flex"));
                });
                flexibleFrames($(".video, .iframe-flex"));
            }
            
            $(document).ready(flexFrame);
            
        });
    })(jQuery);
