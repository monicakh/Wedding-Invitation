function el_track(e,a){document.getElementById(e).addEventListener("click",(function(e){e.preventDefault();var c=$(this).attr("href");console.log(c),fbq("track","ViewContent",{value:0,currency:"USD",content_ids:a}),openInNewTab(c)}))}function openInNewTab(e){window.open(e,"_blank").focus()}function iframe_scale(){dvc_s=$("img#fake-ph").width(),frame_scale=dvc_s/375,$("div.device .device_wrapper iframe").css({"-webkit-transform":"scale("+frame_scale+")","-ms-transform":"scale("+frame_scale+")",transform:"scale("+frame_scale+")"})}$(document).ready((function(e){el_track("example-btn-en","view-english-example"),el_track("example-btn-ar","view-arabic-example"),el_track("wp-cta","contact-whatsapp-desk"),el_track("wp-cta-2","contact-whatsapp-mob"),el_track("email-cta","contact-email")})),$(window).on("load",(function(){iframe_scale()})),$(window).on("resize",(function(){iframe_scale()}));