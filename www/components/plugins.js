// This is a JavaScript file
$(document).on('click', '#alerta', function(){
  navigator.notification.alert("ola mundo!", null,"aviso","aceito");
});

$(document).on('click', '#confirm', function(){
  function confirm(buttonIndex){
    if(buttonIndex == 1){
      navigator.notification.alert("escolheu A");
    }
    else{
      navigator.notification.alert("escolheu B");
    }
}
  navigator.notification.confirm("ESCOLHA A OU B", confirm,"ESCOLHA:",['A','B']);
});
$(document).on('click', '#beep', function(){
  navigator.notification.beep(1);
});
$(document).on('click', '#vibrar', function(){
  navigator.vibrate(3000);
});
function showMap(lat, long){
   L.mapquest.key = '	9QvGmwxn3qEEDGtdi0GawbNrQKvyQJkn';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15
        });

        map.addControl(L.mapquest.control());
}
$(document).on('click', '#local', function(){
  var onSuccess = function(position) {
    showMap(position.coords.latitude,position.coords.longitude);
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});
