var spreadsheetID = "1G6pPn4LC8OgBBBgJepzL0B6eLVLg_evYJeEldAy-2z8";
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/values?alt=json"; 
$.getJSON(url, function(data) {
  var entry = data.feed.entry;
  
  $("#newsHere").html('\
  <div class="col">\
  <div class="card my-2">\
    <img src="'+entry[0].gsx$image.$t+'" class="card-img-top" alt="Image">\
    <div class="card-body">\
      <h5 class="card-title">'+entry[0].gsx$title.$t+'</h5>\
      <p class="card-text text-justify">'+entry[0].gsx$description.$t+'</p>\
    </div>\
    <div class="card-footer text-muted">\
      #Source: '+entry[0].gsx$source.$t+'\
    </div>\
  </div>\
 </div>\
  ')
});