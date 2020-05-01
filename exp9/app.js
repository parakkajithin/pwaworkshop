var spreadsheetID = "1G6pPn4LC8OgBBBgJepzL0B6eLVLg_evYJeEldAy-2z8";
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/values?alt=json"; 
$.getJSON(url, function(data) {
  console.log(data);
});