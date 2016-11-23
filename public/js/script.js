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
submit_button.click(function(e) {
    e.preventDefault();
    setTimeout(function(){
        var result = [];
        var imageCopy = clone(images);
        var imageArray = [];
        for (country in imageCopy) {
            imageArray.push(country);
        }


        //hash method
        var string = twitter_handle.val();
        if (string[0] == '@') {
            string = string.slice(1, string.length-1);
        }
        var sum = 1;
        for (var i = 0; i < string.length; i++) {
            var ascii = string[i].charCodeAt(0);
            if (ascii != 0) {
                sum *= string[i].charCodeAt(0);
            }
        }
        for (var i = 3 - 1; i >= 0; i--) {
            var rand = sum % imageArray.length;
            var randomCountry = imageArray.splice(rand, 1)[0];
            result.push([randomCountry, images[randomCountry]]);
            sum = Math.floor(sum);
        }

        // random method
        // for (var i = 3 - 1; i >= 0; i--) {
        //     var rand = Math.floor(Math.random() * imageArray.length);
        //     var randomCountry = imageArray.splice(rand, 1)[0];
        //     result.push([randomCountry, images[randomCountry]]);
        // }

        changeValues(result);

        slogan.toggleClass("hidden", false);
        result_panel.toggleClass("hidden", false);
        twitter_bar.toggleClass("result-page", true);
        header.toggleClass("result-page", true);
        title.toggleClass("centered", false);
        // twitter_bar.
    }, 600);


});



var blocks = $(".recommendation-block"); //gets 3 recommendation blocks
function changeValues(threeCountries) {
    for (var i = threeCountries.length - 1; i >= 0; i--) {
        var country = threeCountries[i];
        blocks[i].getElementsByClassName('country-name')[0].innerHTML = country[0]; //name
        blocks[i].getElementsByClassName('img-container')[0].style["background-image"] = 'url("' + country[1] + '")'; //url
    }
}

function clone(obj){
    return JSON.parse(JSON.stringify(obj));
}


// <a class="recommendation-block" href="http://etihad.com">
//     <div class="img-container-container">
//         <div class="img-container"></div>
//     </div>
//     <p class="country-name">Sri Lanka</p>
//     <p class="book-flight">Book flight now</p>
// </a>