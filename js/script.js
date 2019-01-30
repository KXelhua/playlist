/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sea","Dusk Till Dawn","Let You Down","Heartbreak Story"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above

var imageLinks=["https://upload.wikimedia.org/wikipedia/en/6/62/Ly-her.jpg","https://m.media-amazon.com/images/I/81jbeNY9nxL._SS500_.jpg", "https://streamd.hitparade.ch/cdimages/nf-let_you_down_s.jpg", "https://m.media-amazon.com/images/I/81kj+H5gt2L._SS500_.jpg"];
var artists=["BTS","Zayn Malik","NF","The Wanted"];
var songLengths=["5:16","4:27","3:32","2:57"];
var songLinks=["","","",""];


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
        $("#links").append('<p>'+ songLink + '</p>')
    })
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
