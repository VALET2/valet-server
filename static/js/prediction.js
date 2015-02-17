$(document).ready( function(){

  searchBeforePrediction = {};

  $('#compare-img-map').on('click', function(){

    if ( $('#prediction-map').length != 0) {

      $('#map-canvas').removeClass('col-md-6');
      $('#prediction-map').remove();
      google.maps.event.trigger(map, 'resize');
      map.setCenter(new google.maps.LatLng(40.418641, -86.892279));
      map.setZoom(13);

      $('.disable-on-prediction').prop('disabled',false);

      searchData = searchBeforePrediction;

      getData(function(data){
        onDataChange(data);
      });

    }
    else {
      
      var year = predictionDate.year();
      var month = predictionDate.month()+1;
      var date = predictionDate.date();
      var hour = predictionDate.get('hour');
      var minute = predictionDate.get('minute');

      searchBeforePrediction = searchData;
      searchData.startDate = predictionDate;
      searchData.endDate = predictionDate;
      getData(function(data){
        onDataChange(data);
      });

      if( month < 10 ) month = "0" + month;
      if( date < 10 ) date = "0" + date;
      if( hour < 10 ) hour = "0" + hour;
      if( minute < 10 ) minute = "0" + minute;

      // Predict_MM-DD-YYYY_HHmm-HHmm_Cat1.jpg
      var dateString = 'Predict_' + month + '-' + date + '-' + year + '_' + hour + minute + ".jpg";
      img = $('<div class="col-md-6" style="overflow: scroll;"><img src="' + "/static/prediction/" + dateString + '" id="prediction-map" style="height: 450px;"/></div>');

      mapHtml = $('#map-canvas');
      mapHtml.addClass('col-md-6');
      mapHtml.parent().append(img);

      google.maps.event.trigger(map, "resize");
      map.setCenter(new google.maps.LatLng(40.418641, -86.892279));
      map.setZoom(12);

      $('.disable-on-prediction').prop('disabled',true);

    }

  });

  predictionDate = new moment();

  datePicker = $('.datepicker').datetimepicker({
    defaultDate: predictionDate,
    format: 'MM-DD-YYYY HH:00',
    sideBySide: true
  }).on('dp.change', function(ev){
    console.dir(ev);
    predictionDate = ev.date;
  });



});