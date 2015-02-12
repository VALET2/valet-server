
iconBase = '/static/icon/';
crimeDict = {
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

crimeIconDict = {
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
$(function() {

  crimeModel = Backbone.Model.extend({
   "url" : "",
   "idAttribute" : "id"
 });

  crimeCollection = Backbone.Collection.extend({
   "url" : "/crimes",
   "model" : crimeModel,
   "byDate" : function(value) {
    var filtered = this.filter(function(crime) {
      return value.format("YYYY-MM-DD") === crime.get("date_occu").split("T")[0];
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

  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 13,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    center: new google.maps.LatLng(40.418641, -86.892279)
  });

  crimeTypeMarkers = [];
  latestPosition = null;

  onDataChange = function(crimes, start, end) {
    var markers = [];

    if (crimeTypeMarkers.length != 0) {
      for (var i = 0 ; i <crimeTypeMarkers.length; i++) {
        crimeTypeMarkers[i].setMap(null);
      }
    }

    crimes.each(function(item) {
      var position = new google.maps.LatLng(item.get("latitude"), item.get("longitude"));
      markers.push(position);

      var infowindow = new google.maps.InfoWindow({
        content : getInfoWindowDecs(item)
      });

      var crimeTypeMarker = new google.maps.Marker({
        position : position,
        map : map,
        icon : crimeIconDict[ item.get('chrgdesc')  ],
      });

      google.maps.event.addListener(crimeTypeMarker, 'click', function(e) {

        infowindow.open(map, crimeTypeMarker);
        if (e.latLng == latestPosition) {
          infowindow.close();
          latestPosition = null;
        }
        else latestPosition = e.latLng;
      });

      crimeTypeMarkers.push(crimeTypeMarker);

    });
    var pointArray = new google.maps.MVCArray(markers);

    if (typeof heatmap != "undefined")
      heatmap.setMap(null);

    heatmap = new google.maps.visualization.HeatmapLayer({
      data : pointArray
    });

    heatmap.set('radius', heatmap.get('radius') ? null : 50);
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.5);
    heatmap.setMap(heatmap.getMap() ? null : map);


};


// 선택한 달력이 바뀌었을때 호출됨.
onDateChange = function(start, end) {
  $('#date-range span').html(start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY'));
  var crimes = new crimeCollection();
  crimes.fetch({ success : function () {
    onDataChange(crimes, moment(start), moment(end));
    updateCalendar(crimes, moment(start), moment(end));
  }, data : { "startdate" : start.format('YYYY-MM-DD'), "enddate" : end.format('YYYY-MM-DD') }, 
  processData: true } );
};

updateCalendar = function(crimes, start, end) {
 $('#table-calendar-body').empty();
 var duration = moment.duration(end.startOf("day") - start.startOf("day")).asDays() + 1;
 var dayCount = 0;
 var day = moment(start);
 var t = duration + start.weekday() + ((duration + start.weekday()) % 7 > 0 ? 7 - (duration + start.weekday()) % 7 : 0);

 for(var d = 0; d < t; d++) {
   if (d % 7 == 0) {
    $('#table-calendar-body').append("<tr></tr>");
  }

  $("#table-calendar-body tr:last").append("<td>.</td>");

  if (d - start.weekday() < duration){
    if (d > 6) {
      var todayCrimes = crimes.byDate(day);
      var color = getDangerColor(todayCrimes.length, crimes.models.length, duration);
      $("#table-calendar-body tr:last td:last").empty().append(todayCrimes.models.length).css("background", color).click({ "todayCrimes" : todayCrimes, "date" : day.format("YYYY-MM-DD HH:mm:ss") }, function(e) {
        onDataChange(e.data.todayCrimes, moment( e.data.date ), moment( e.data.date ).add(1, "days"));
        $("*").removeClass('focus');
        $(this).addClass('focus');
      });
      day.add(1, 'day');

    } 
    else if (d >= start.weekday())
    {
      var todayCrimes = crimes.byDate(day);
      var color = getDangerColor(todayCrimes.length, crimes.models.length, duration);

      $("#table-calendar-body tr:last td:last").empty().append(todayCrimes.models.length).css("background", color).click({ "todayCrimes" : todayCrimes, "date" : day.format("YYYY-MM-DD HH:mm:ss") }, function(e) {
        onDataChange(e.data.todayCrimes, moment( e.data.date ), moment( e.data.date ).add(1, "days"));
        $("*").removeClass('focus');
        $(this).addClass('focus');
      });
      day.add(1, 'day');
    }
  }
}
}


onDateChange(moment().startOf('month'), moment().endOf('month'));

$('#date-range').daterangepicker( {
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
}, onDateChange);


getDangerColor = function(count, all, days) {



  var percent = (count - (all / days)) / (all / days) * 100;
  if (percent < -14)
    return "#74fff3";
  else if (percent < 0)
    return "#47ff7e";
  else if (percent < 14)
    return "#34ff00"
  else if (percent < 28)
    return "#fff500"
  else if (percent < 42)
    return "#ffb200"
  else if (percent < 56)
    return "#ff7700"
  else if (percent < 200)
    return "#F7464A"
  else if (percent < 400)
    return "#ff0000"

}


  getInfoWindowDecs = function(item){
    return '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h2 id="firstHeading" class="firstHeading">' + item.get('chrgdesc') + '</h2>'+
        '<div id="bodyContent">'+
        '<p>Police Department : '+item.get("agency")+
        '<br>Address : ' + item.get("street") + " " + item.get("city") + " " + item.get("state")+
        '<br>Latitude : '+item.get("latitude")+
        '<br>Longitude : '+item.get("longitude")+
        '</p>'+
        '</div>'+
        '</div>';
  }

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
{label: "23:00-24:00", value: 15, color:"#F7464A", highlight: "#FF5A5E"},
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
