var creatAblum = function(url,name){
    $("#results").append("<div class='container'><div style='background-image:url(" + url + ")' class='cover'></div><span>" + name +"</span></div>");
}

var showAblum = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'album'
        },
        success: function (response) {
            $("#results").empty();
            var ablums = response.albums.items;
            for(var i = 0; i < ablums.length; i++){
                var url = ablums[i].images[0].url;
                var name = ablums[i].artists[0].name;
                creatAblum(url,name);
            }
        }
    });
};

$(document).ready(function(){
  $("#search-form").submit(function(e){
    e.preventDefault();
    showAblum($("#info").val());
    $("#info").val("");
  })
});