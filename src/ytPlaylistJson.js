// ==UserScript==
// @name         Playlist list maker
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @require      http://code.jquery.com/jquery-latest.js
// @author       Dries Meerman
// @match        https://www.youtube.com/playlist?*
// @grant        none
// @run-at       document-end
// ==/UserScript==
var listItem = $('#pl-video-table > tbody > tr');
var songs = [];

listItem.each(function(i, tr){
    var title = tr.getAttribute ('data-title');
    var videoId = tr.getAttribute ('data-video-id');
    var url = "https://youtube.com/watch?v="+videoId;
    console.log(title);
    songs.push(new Song(title, url, videoId));
});

console.log(songs);

function Song(title, url, id, artist, songtitle, uploader){
    this.title = title;
    this.url = url;
    this.id = id;
    this.artist = artist;
    this.songtitle = songtitle;
    this.uploader = uploader;
}

function getJsonList(){
    var json = {"songs":[]};
    var i = 0;
    songs.forEach(function (song){
        json.songs.push(song);//["song"+i] = song;
        i++;
    });
    console.log(json);
    console.log("----");
    json = JSON.stringify(json);
    return json;
}

function mkbutton(){
 $('#pl-video-table tr:last').after('<tr><button onClick="showJson();"></button></tr>'); 
}

function showJson(json){
    $('#body').html(json);// = json;   
    console.log(json);
}
showJson(getJsonList());
