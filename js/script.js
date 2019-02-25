/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sea","Dusk Till Dawn","Let You Down","Heartbreak Story"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above

var imageLinks=["https://upload.wikimedia.org/wikipedia/en/6/62/Ly-her.jpg","https://m.media-amazon.com/images/I/81jbeNY9nxL._SS500_.jpg", "https://streamd.hitparade.ch/cdimages/nf-let_you_down_s.jpg", "https://m.media-amazon.com/images/I/81kj+H5gt2L._SS500_.jpg"];
var artists=["BTS","Zayn Malik","NF","The Wanted"];
var songLengths=["5:16","4:27","3:32","2:57"];
var songLinks=["https://www.youtube.com/watch?v=z4gSWMEz4Nc","https://www.youtube.com/watch?v=tt2k8PGm-TI","https://www.youtube.com/watch?v=fbHbTBP_u7U","https://www.youtube.com/watch?v=vWZQZxqaLt8"];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    imageLinks.forEach(function(link){
        $("#images").append('<img src="'+ link + '">');
    })
    songs.forEach(function(song){
        $("#songs").append('<p>'+ song + '</p>')
    })
    artists.forEach(function(artist){
        $("#artists").append('<p>'+ artist + '</p>')
    })
    songLengths.forEach(function(songLength){
        $("#lengths").append('<p>'+ songLength + '</p>')
    })
     songLinks.forEach(function(songLink){
        $("#links").append('<a href="'+ songLink + '">Click here! </a>')
    })
}

function emptySongInfo(){
    $("#songs").empty();
    $("#artists").empty();
    $("#images").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    songs.push($("#song").val());
    artists.push($("#artist").val());
    imageLinks.push($("#image").val());
    songLengths.push($("#length").val());
    songLinks.push($("#link").val());
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
