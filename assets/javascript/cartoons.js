var search = [];

function populateButtons(search,classAdd,areaAdd) {
    $(areaAdd).empty();
    for(var i=0; i<search.length; i++) {
        var a = $("<button>");
        a.addClass(classAdd);
        a.attr("data-type", search[i]);
        a.text(search[i]);
        $(areaAdd).append(a);
    }
}

$(document).on("click", "#submit", function(){
    var type = $(this).data("type");
    var queryURL = "http://api.giphy.com/v1/gifs/cartoons/search?q=" + type + "&api_key=ndEbFzNM0hIvSPuLEzt0D1JVZ5ImKq8B&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response) {
                for(var i=0; i<response.data.length; i++) {
                    var searchDiv = $('<div class="search-item">');
                    var rating = response.data[i].rating;
                    var p = $('<p>').text('Rating: '+ rating);
                    var animated = response.data[i].images.fixed_height.url;
                    var still = response.data[i].images.fixed_heigh_still.url;
                    var image = $('<img>');
                    image.attr('src', still);
                    image.attr('data-still', still);
                    image.attr('data-animated', animated);
                    image.attr('data-state', 'still');
                    image.addClass('searchImage');
                    searchDiv.append(p);
                    searchDiv.append(image);
                    $('#searches').append(searchDiv);
                }
        })
})

$(document).on("click", ".searchImage", function(){
    var state = $(this).attr("data-state");
    if(state == "still"){
        $(this).attr("src", $(this).data("animated"));
        $(this).attr("data-state", "animated");
    } else {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    }
}

)

$("#choices").on("click", function() {
    var newSearch = $("input").eq(0).val();
    search.push(newSearch);
    populateButtons(search, "#submit", "#userchoices");
    return false;
}
)



