var topic = ["overwatch", "kingdom hearts", "zelda", "destiny", "god of war"];
$(document).ready(function(){
    

function renderButtons(){
    $('#buttons-view').empty();

    for (var i = 0; i < topic.length; i++){
    
    var gameButton = $('<button>');
    gameButton.addClass("game-btn");
    gameButton.attr(topic[i]);
    gameButton.text(topic[i]);
    $('#buttons-view').append(gameButton);   
    }
}

renderButtons();

$('#submit').on('click', function(event){
    event.preventDefault();

    gInput = $('#gameInput').val().trim();
    topic.push(gInput);
    $('#buttons-view').empty();
    renderButtons();
    
});


// I think there is a better way to do this but .. here we are
$(document).on("click", ".game-btn", function(){

    $('button').on('click', function(){  
    $('#gameGif').empty();    
    var game = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + game + 
    '&limit=10&api_key=kK4jceB5idHjhlnJX1yqyZLP6uGvN1of';

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var results = response.data;
        console.log(results);

        for(var i = 0; i < results.length; i++){
            if (results[i].rating != 'r' && results[i].rating != "pg-13"){
                var gifDiv = $("<div class='item'>");
                var gameImage = $("<img>");
                gameImage.attr('src', results[i].images.fixed_height.url);
                gifDiv.append(gameImage);
                $("#gameGif").prepend(gifDiv);
            }
            
        }
    
        
    });
   
});
})
});








// });









