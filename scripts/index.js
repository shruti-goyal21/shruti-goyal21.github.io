$(document).ready(function () {

    $(".progress-bar").progressbar({
        max: 1000,
        value: 833,
        create: function(event, ui) {$(this).find('.ui-widget-header').css({'background-color':"#F15E33"})},
        change: function (event, ui) {
            var progressSoFar = $(".progress-bar").progressbar("value");
            progressSoFar=1000-progressSoFar;
            if (progressSoFar > 0) {
                $(".msg-text").html("$ " + progressSoFar);
                $(".normal-text").html("still needed for this project");
            }
            else
                $(".msg-text").html("Thank you for your contribution");
        }
    });

    $(".green").click(function () {
    var progressSoFar = $(".progress-bar").progressbar("value");
    progressSoFar = progressSoFar + 50;
    $(".progress-bar").progressbar("value", progressSoFar);
});

    $(".save-share-content .save-text").click(function () {

        $(".dialog").html("SAVED!!!").dialog({
            buttons: [
        {
            text: "Ok",
            icons: {
                primary: "ui-icon-heart"
            },
            click: function () {
                $(this).dialog("close");
            }
        }
            ]
        });
    });

    $(".save-share-content .share-text").click(function () {
        $.ajaxSetup({ cache: true });
        $.getScript('//connect.facebook.net/en_US/sdk.js', function () {
            FB.init({
                appId: '158692261228529',
                version: 'v2.7' // or v2.1, v2.2, v2.3, ...
            });
            FB.ui({
                method: 'share',
                action_properties: JSON.stringify({
                    object: 'https://developers.facebook.com/docs/',
                })
            }, function (response) {
                // Debug response (optional)
                console.log(response);
            });
            $('#loginbutton,#feedbutton').removeAttr('disabled');
            FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    console.log('Logged in.');
                }
                else {
                    FB.login();
                }
            });
        });
    });
      


});
