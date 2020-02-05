

$("#enterchoice").on("click", function() {
    var queryURL = "https://api.giphy.com/v1/gifs/random?"

    $.ajax({
        url: queryURL,
        method: "GET"
    })
}