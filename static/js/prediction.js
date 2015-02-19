$(document).ready( function(){

  searchBeforePrediction = {};

  $('#compare-img-map').on('click', function(){
    loadDataForPrediction();
    renderView();
  });

  predictionDate = new moment();
  predictionDate.set('minute',00);

  $("#input-prediction-date").click(function(e){
    
    changeSearchData({
        police : [],
        crimeType : crimeRiskDict[$('input:checked').val()],
        date : predictionDate
        // startDate : predictionDate,
        // endDate : predictionDate
    });
    console.log("Searching Data...");
    console.dir(searchData);

    onDataChange(getData());
    // getData(function(data){
    //     onDataChange(data);
    // });

    if ( $('#prediction-map').length == 0 )
      renderView();

  });

  loadDataForPrediction = function() {

    if ( $('#prediction-map').length != 0) {
      searchData = $.extend(true, {}, searchBeforePrediction);
      //console.dir(searchBeforePrediction);
      onDataChange(getData());
    }
    else {
      searchBeforePrediction = $.extend(true, {}, searchData);

      changeSearchData({

        police : [],
        crimeType : crimeRiskDict[$('input:checked').val()],
        date : predictionDate

      });
      console.dir(searchData);

    }

    onDataChange(getData());
  }

  renderView = function() {
    var predictionImg = $('#prediction-map');
    var mapHtml = $('#map-canvas');

    if ( predictionImg.length != 0) {
      // Going back to normal
      mapHtml.removeClass('col-md-6').addClass('col-md-12');
      predictionImg.parent().remove();
      
      google.maps.event.trigger(map, 'resize');
      map.setCenter(new google.maps.LatLng(40.418641, -86.892279));
      map.setZoom(13);

      $('.prediction-panel').removeClass('col-md-offset-4').removeClass('col-md-4').addClass('col-md-3');
      $('.hide-on-prediction').show();
    }
    else {
      // Changing to prediction mode
      mapHtml.addClass('col-md-6').removeClass('col-md-12');

      var img = $('<div class="col-md-6">' + 
                  '<img class="img-responsive" src="' + 
                  "/static/prediction/" + 
                  
                  getDateInFormat($('input:checked').val()) +

                  '" id="prediction-map" style="height:450px;"/></div>'); 
      
      img.css('height', mapHtml.height());

      mapHtml.parent().append(img);
      $("#prediction-map").css('width', "100%");      
      $("#prediction-map").css('height', mapHtml.height());   

      $("#prediction-map").error(function() {
        $(this).attr("src", "/static/img/error_predict.jpg");
      })

      google.maps.event.trigger(map, "resize");
      map.setCenter(new google.maps.LatLng(40.418641, -86.892279));
      map.setZoom(12);

      $('.prediction-panel').addClass('col-md-offset-4').addClass('col-md-4').removeClass('col-md-3');
      $('.hide-on-prediction').hide();
    }
  }

  // make src string in format Predict_YYYY-MM-DD_HH00_Cat1.jpg
  getDateInFormat = function(risk) {
    var year = predictionDate.year(); // YYYY
    var month = predictionDate.month()+1; // MM 0~11
    var date = predictionDate.date(); // DD
    var hour = predictionDate.get('hour'); // HH
    var minute = predictionDate.get('minute'); // mm

    if( month < 10 ) month = "0" + month;
    if( date < 10 ) date = "0" + date;
    if( hour < 10 ) hour = "0" + hour;
    if( minute < 10 ) minute = "0" + minute;

    // Predict_MM-DD-YYYY_HHmm-HHmm_Cat1.jpg
    return 'Predict_' + month + '-' + date + '-' + year + '_' + hour + minute + "_" + risk + ".jpg";
  }

  changeSearchData = function(searchDict) {
    for( var i in searchDict) {
      searchData[i] = searchDict[i];
    }
  };

  datePicker = $('.datepicker').datetimepicker({
    defaultDate: predictionDate,
    showTodayButton: true,
    format: 'MM-DD-YYYY',
    keepOpen: false,
    collapse: false
  }).on('dp.change', function(ev){
      predictionDate = moment(ev.date);
  });

});