var spreadsheetID = "1G6pPn4LC8OgBBBgJepzL0B6eLVLg_evYJeEldAy-2z8";
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/values?alt=json"; 
$.getJSON(url, function(data) {
  var entry = data.feed.entry;
  //console.log(entry);
  $("#newsHere").html('')
  $(entry).each(function() {
    $("#newsHere").append('\
  <div class="col-12 ">\
  <div class="card my-2">\
    <img src="'+this.gsx$image.$t+'" class="card-img-top" alt="Image">\
    <div class="card-body">\
      <h5 class="card-title">'+this.gsx$title.$t+'</h5>\
      <p class="card-text text-justify">'+this.gsx$description.$t+'</p>\
    </div>\
    <div class="card-footer text-muted">\
      #Source: '+this.gsx$source.$t+'\
    </div>\
  </div>\
 </div>\
  ')
  })  
});
//Registering service worker
if('serviceWorker' in navigator){
  try{
    navigator.serviceWorker.register('sw.js');
    console.log('Service worker registered');
  }
  catch(error){
    console.log('Service worker not registered');
  }
}
//When refresh button on top nav clicked reload the page
$("#rFresh").click(function(){
  location.reload();
})

//install prompt
let deferredPrompt;
const addBtn = document.querySelector('#addButton');
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  $("#installModel").modal('show');
  addBtn.addEventListener('click', (e) => {
  // hide our user interface that shows our A2HS button
  $("#installModel").modal('hide')
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
     deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } 
      else {
            console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});