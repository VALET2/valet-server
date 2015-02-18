$(document).ready( function(){

  searchBeforePrediction = {};

  $('#compare-img-map').on('click', function(){

    if ( $('#prediction-map').length != 0) {
      $('#map-canvas').removeClass('col-md-6').addClass('col-md-12');
      $('#prediction-map').parent().remove();
      google.maps.event.trigger(map, 'resize');
      map.setCenter(new google.maps.LatLng(40.418641, -86.892279));
      map.setZoom(13);

      $('.prediction-panel').removeClass('col-md-offset-4');
      $('.prediction-panel').removeClass('col-md-4');
      $('.prediction-panel').addClass('col-md-3');

      // $('.disable-on-prediction').prop('disabled',false);
      $('.hide-on-prediction').show();

      searchData.startDate = searchBeforePrediction.startDate;      
      searchData.endDate = searchBeforePrediction.endDate;


      getData(function(data){ 
        onDataChange(data);
      });
      onDataChange(getData());
      
    }
    else {
      var year = predictionDate.year();
      var month = predictionDate.month()+1;
      var date = predictionDate.date();
      var hour = predictionDate.get('hour');
      var minute = predictionDate.get('minute');

      searchData.police = []
      searchData.crimeType = []
      searchBeforePrediction = $.extend(true, {}, searchData);
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
      var img = $('<div class="col-md-6"><img class="img-responsive" src="' + "/static/prediction/" + dateString + '" id="prediction-map"/></div>');

      mapHtml = $('#map-canvas');
      mapHtml.removeClass("col-md-12").addClass('col-md-6');
      mapHtml.parent().append(img);

      $('.prediction-panel').addClass('col-md-offset-4').addClass('col-md-4').removeClass('col-md-3');

      google.maps.event.trigger(map, "resize");
      map.setCenter(new google.maps.LatLng(40.418641, -86.892279));
      map.setZoom(12);
      $("#prediction-map").css("height", $('#map-canvas').height())

      // $('.disable-on-prediction').prop('disabled',true);
      $('.hide-on-prediction').hide();

    }

  });

  predictionDate = new moment();
  predictionDate.set('minute',00);

  $("#input-prediction-date").click(function(e){
      searchData.startDate = predictionDate;
      searchData.endDate = predictionDate;

      var year = predictionDate.year();
      var month = predictionDate.month()+1;
      var date = predictionDate.date();
      var hour = predictionDate.get('hour');
      var minute = predictionDate.get('minute');

      getData(function(data){
        onDataChange(data);
      });

      if( month < 10 ) month = "0" + month;
      if( date < 10 ) date = "0" + date;
      if( hour < 10 ) hour = "0" + hour;
      if( minute < 10 ) minute = "0" + minute;

      // Predict_MM-DD-YYYY_HHmm-HHmm_Cat1.jpg
      var dateString = 'Predict_' + month + '-' + date + '-' + year + '_' + hour + minute + ".jpg";
      $('#prediction-map').parent().remove();
      var img = $('<div class="col-md-6"><img class="img-responsive" src="' + "/static/prediction/" + dateString + '" id="prediction-map"/></div>');

      $('#map-canvas').parent().append(img);
      $("#prediction-map").css("height", $('#map-canvas').height())


  })

  datePicker = $('.datepicker').datetimepicker({
    defaultDate: predictionDate,
    format: 'MM-DD-YYYY HH:00',
    collapse: false
  }).on('dp.change', function(ev){
      predictionDate = moment(ev.date);
  });



});