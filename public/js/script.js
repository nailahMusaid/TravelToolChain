    // $('#twitter-handle')
    var submit_button = $('#twitter-submit');
    var title = $('h1');
    var twitter_bar = $('.twitter-bar');
    var twitter_handle = $('#twitter-handle');
    var result_panel = $('.results');
    var header = $("header");
    var desc = $("header p");
    var slogan = $("slogan");

    twitter_handle.val("@BarackObama"); //default value
    submit_button.click(function() {
        // header.style["font-size"] = "1.5em";
        // title.style["font-family"] = "Oswald";
        // title.style["letter-spacing"] = "0.04em";
        // twitter_bar.style["font-size"] = "0.45em";
        // result_panel.style.display = "initial";
        // header.style["margin-top"] = "5vh";
        slogan.toggleClass("hidden");
        result_panel.toggleClass("hidden");
        twitter_bar.toggleClass("result-page");
        header.toggleClass("result-page");
        // twitter_bar.
    });