$(function() {
  crimeModel = Backbone.Model.extend({
   "url" : "",
   "idAttribute" : "id"
  });

 crimeCollection = Backbone.Collection.extend({
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
  crimes.fetch({
    success : function () {
      onDataChange(crimes);
    },
    data : { 
      startdate : moment().startOf('month').format('YYYY-MM-DD'), 
      enddate : moment().endOf('month').format('YYYY-MM-DD')
    }
  });

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 13,
    center: new google.maps.LatLng(40.418641, -86.892279)
  });

  onDataChange = function(crimes) {
    var markers = [];

    var iconBase = '/static/icon/';
    var crimeDict = {
      9 : 'Assault' ,
      149 : 'Assault' ,
      150 : "Assault with Deadly Weapon" ,
      100 : "Breaking & Entering" ,
      16 : "Emergency" ,
      15 : "Fire" ,
      104 : "Homicide" ,
      11 : "Other " ,
      160 : "Alarm" ,
      121 :"Arson" ,

      162 : "Death" ,
      164 : "Family Offense" ,
      165 : "Kidnapping",
      167 : "Missing Person",
      151 : "Other",

      171 : "Weapons Offense",
      14 : "Proactive Policing",
      161 : "Community Policing",
      173 : "Pedestrian Stop",
      172 : "Vehicle Stop",

      10 : "Property Crime ",
      180 : "Property Crime",
      179 : "Property Crime Commercial",
      178 : "Property Crime Residential",
      12 : "Quality of Life",

      163 : "Disorder",
      168 : "Drugs",
      166 : "Liquor",
      98 : "Robbery",
      8 : "Sexual Offense",

      97 : "Other Sexual Offense",
      148 : "Sexual Assault",
      103 : "Theft",
      101 : "Theft from Vehicle",
      99 : "Theft of Vehicle",

      169 : "Traffic",
      170 : "Vehicle Recovery",
    };

    var crimeIconDict = {
      "Assault " : iconBase + 'Assult.png',
      "Assault" : iconBase + 'Assult.png',
      "Assault with Deadly Weapon" : iconBase + 'Assault-with-Deadly-Weapon.png',
      "Breaking & Entering" : iconBase + 'Breaking-&-Entering.png',
      "Emergency" : iconBase + 'Emergency.png',
      "Fire" : iconBase + 'Fire.png',
      "Homicide" : iconBase + 'Homicide.png',
      "Other " : iconBase + 'Other.png',
      "Alarm" : iconBase + 'Alarm.png',
      "Arson" : iconBase + 'Arson.png',
      "Death" : iconBase + 'Death.png',
      "Family Offense" : iconBase + 'Family-Offense.png',
      "Kidnapping" : iconBase + 'Kidnapping.png',
      "Missing Person" : iconBase + 'Missing-Person.png',
      "Other" : iconBase + 'Other.png',
      "Weapons Offense" : iconBase + 'Weapons-Offense.png',
      "Proactive Policing" : iconBase + 'Proactive-Policing.png',
      "Community Policing" : iconBase + 'Community-Policing.png',
      "Pedestrian Stop" : iconBase + 'Other.png',
      "Vehicle Stop" : iconBase + 'Other.png',
      "Property Crime " : iconBase + 'Other.png',
      "Property Crime" : iconBase + 'Other.png',
      "Property Crime Commercial" : iconBase + 'Other.png',
      "Property Crime Residential" : iconBase + 'Other.png',
      "Quality of Life" : iconBase + 'Other.png',
      "Disorder" : iconBase + 'Other.png',
      "Drugs" : iconBase + 'Drugs.png',
      "Liquor" : iconBase + 'Liquor.png',
      "Robbery" : iconBase + 'Other.png',
      "Sexual Offense" : iconBase + 'Sexual-Offense.png',
      "Other Sexual Offense" : iconBase + 'Sexual-Offense.png',
      "Sexual Assault" : iconBase + 'Sexual-Offense.png',
      "Theft" : iconBase + 'Breaking-&-Entering.png',
      "Theft from Vehicle" : iconBase + 'Breaking-&-Entering.png',
      "Theft of Vehicle" : iconBase + 'Traffic.png',
      "Traffic" : iconBase + 'Traffic.png',
      "Vehicle Recovery" : iconBase + 'Traffic.png',
    };

    crimes.each(function(item) {
      
      var position = new google.maps.LatLng(item.get("latitude"), item.get("longitude"));
      markers.push(position);

      new google.maps.Marker({
        position : position ,
        map : map ,
        icon : crimeIconDict[ crimeDict [ item.get('crimetype') ] ],
      });

    });
    var pointArray = new google.maps.MVCArray(markers);

    if (heatmap === undefined)
      heatmap = new google.maps.visualization.HeatmapLayer({
        data : pointArray
      });
    else
      heatmap.setMap(null);

    heatmap.set('radius', heatmap.get('radius') ? null : 50);
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.5);
    heatmap.setMap(heatmap.getMap() ? null : map);

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

    //vadd custom markers by crimetype
    // markers.each( function(marker) {
    //   new google.maps.Marker({
    //     position : marker ,
    //     map : map ,
    //     icon
    //   });
    // });

  };

  onDateChange = function(start, end) {
    $('#date-range span').html(start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY'));
    var crimes = new crimeCollection();
    crimes.fetch({ success : function (){
      onDataChange(crimes);
    }, data : { startdate : start.format('YYYY-MM-DD'), enddate : end.format('YYYY-MM-DD') } } );

    var calendar_body = $('#table-calendar-body');
    calendar_body.empty();
    // 행
    var duration = moment.duration(end.diff(start))
    var dayCount = 0;

    for(y = 0; y < duration / 7; y++) {
      calendar_body.append("<tr></tr>");
      for(x = 0; x < 7; x++){
          dayCount = dayCount + 1;
          $("#table-calendar-body tr:last").append("<td></td>");

        if (y == 0 && x >= start.isoweek()) {
          $("#table-calendar-body tr:last td:last").append(dayCount);
        }
      }
    }

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

