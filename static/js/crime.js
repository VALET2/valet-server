$(function() {
  var crimeModel = Backbone.Model.extend({
   "url" : "",
   "idAttribute" : "id"
  });

  var crimeCollection = Backbone.Collection.extend({
   "url" : "/crimes",
   "model" : crimeModel,
   "initialize" : function() {},
   "rangeToDate" : function(date1, date2) {
      filtered = this.filter(function(crime) {
        return date1 < crime.get("date") && crime.get("date") < date2
      });
      return new crimeCollection(filtered);
    },
    "rangeToPosition" : function(lat, lng, lat2, lng2) {
      filtered = this.filter(function(crime) {
        return true;
      });
      return new crimeCollection(filtered);
    }
  });


  $('#date-range span').html(moment().startOf('month').format('MM/DD/YYYY') + ' - ' +  moment().endOf('month').format('MM/DD/YYYY'));
  var crimes = new crimeCollection();
  crimes.fetch({ startdate : moment().startOf('month').format('YYYY-MM-DD'), enddate : moment().endOf('month').format('YYYY-MM-DD') } );
  
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 13,
    center: new google.maps.LatLng(40.418641, -86.892279)
  };);

  onDataChange = function(crimes) {
    var markers = [];
    crimes.each(function(crime) {
      var position = [new google.maps.LatLng(crime.latitude, crime.longitude)];
      markers.concat(position);
    });

    var pointArray = new google.maps.MVCArray(markers);
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data : pointArray
    });
    heatmap.set('radius', heatmap.get('radius') ? null : 15);
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.5);
    heatmap.setMap(map);

    var calendar_body = $('#table-calendar-body');
    calendar_body.empty();
    // 행
    for(y = 0; y < 4; y++) { 
      calendar_body.append("<tr></tr>");
      for(x = 0; x < 7; x++){
        $("#table-calendar-body tr:last").append("<td></td>");
        $("#table-calendar-body tr:last td:last").append("sd");
      }
    }
  };

  onDateChange = function(start, end) {
    $('#date-range span').html(start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY'));
    var crimes = new crimeCollection();
    crimes.fetch({ startdate : start.format('YYYY-MM-DD'), enddate : end.format('YYYY-MM-DD') } );
    onDataChange(crimes);
  };


  $('#date-range').daterangepicker({
    ranges: {
     'Today': [moment(), moment()],
     'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
     'Last 7 Days': [moment().subtract('days', 6), moment()],
     'Last 30 Days': [moment().subtract('days', 29), moment()],
     'This Month': [moment().startOf('month'), moment().endOf('month')],
     'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
    },
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }, onDateChange
  );


  onDataChange(crimes);


 /*
 f30200
ff7700
ffb200
fff500
34ff00
47ff7e
74fff3
 */
  var data = [
    {label: "23:00-24:00", value: 15, color:"#f30200", highlight: "#FF5A5E"},
    {label: "22:00-23:00", value: 15, color:"#ff7700", highlight: "#FF5A5E"},
    {label: "21:00-22:00", value: 15, color:"#ffb200", highlight: "#FF5A5E"},
    {label: "20:00-21:00", value: 15, color:"#fff500", highlight: "#FF5A5E"},
    {label: "19:00-20:00", value: 15, color:"#34ff00", highlight: "#FF5A5E"},
    {label: "18:00-19:00", value: 15, color:"#47ff7e", highlight: "#FF5A5E"},
    {label: "17:00-18:00", value: 15, color:"#74fff3", highlight: "#FF5A5E"},

    {label: "16:00-17:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "15:00-16:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "14:00-15:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "13:00-14:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "12:00-13:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "11:00-12:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "10:00-11:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "09:00-10:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "08:00-09:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "07:00-08:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "06:00-07:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "05:00-06:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "04:00-05:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "03:00-04:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "02:00-03:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "01:00-02:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
    {label: "00:00-01:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"}
    ];


    var c = $('#clock-chart');
    var ctx = $("#clock-chart").get(0).getContext("2d");
    c.attr('width', $("#clock").width());
    c.attr('height', $("#clock").height());

    ClockChart = new Chart(ctx).Doughnut(data, {
      animation : false,
      tooltipTemplate: "<%= label %>"
    });

   // $(window).resize(resizeClock);

    //resizeClock(); 



});

