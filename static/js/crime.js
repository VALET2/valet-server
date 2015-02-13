
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



/*
날짜 범위를 선택한다. -> 타입, 경찰서를 모은다.
날짜를 선택한다. -> 타입과 날짜를 고려한 결과를 뽑는다.
날짜 + 시간을 선택한다 -> 모두를 고려한 결과를 뽑는다.
범위 + 시간을 선택한다 -> 타입과 시간을 고려한 결과를 뽑는다.


*/
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
      //console.log(crime);
      //console.log(value)
      return value.format("YYYY-MM-DD") === crime.get("date_occu").split("T")[0];
    });
    return new crimeCollection(filtered);
  },
  "rangeDate" : function(minDate, maxDate) {
    var filtered = this.filter(function(crime) {
      return moment().range(minDate, maxDate).contains( moment(crime.get("date_occu")) );
    });
    return new crimeCollection(filtered);
  },
  "rangeTime" : function(minTime, maxTime) {
    var filtered = this.filter(function(crime) {
      var crimeHour = moment(crime.get("date_occu")).hour();
      return moment(minTime).hour() < crimeHour && crimeHour <= moment(maxTime).hour();
    });
    return new crimeCollection(filtered);
  },
  "byType" : function(type, value) {
    var filtered = this.filter(function(crime) {
      return crime.get(type) == value;
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

searchData = {
  startDate : null,
  endDate : null,
  oldStartDate : moment(),
  oldEndDate : moment(),

  date : null,
  startTime : null,  
  endTime : null,
  crimeType : "",
  police : ""
}

crimesData = new crimeCollection();

onDateRangeChange = function(start, end) {
  searchData.startDate = moment(start);  
  searchData.endDate = moment(end);
  searchData.date = null;
  searchData.startTime = null; 
  searchData.endTime = null;
  searchData.crimeType = "";
  searchData.police = "";


  $('#date-range span').html(start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY'));
  getData(function(data) {
    onDataChange(data)
    updateCalendar(start, end);
    updateClock();
  });
}

var crimeTypeMarkers = [];
var crimePoints = [];
var latestPosition = null;
var crimesType = [];
var policesType = [];

getData = function(callback) {
  var self = this;
  if (searchData.startDate != null && searchData.endDate != null) {

    var search = function() {
      var crimes = crimesData;

      if (searchData.date != null)
        crimes = crimes.byDate(searchData.date)

      if (searchData.startTime != null && searchData.endTime != null)
        crimes = crimes.rangeTime(searchData.startTime, searchData.endTime);

      if (searchData.crimeType != "")
        crimes = crimes.byType("chrgdesc", searchData.crimeType);

      if (searchData.police != "")
        crimes = crimes.byType("agency", searchData.police);

      return crimes;
    }

    if (searchData.oldStartDate.diff(searchData.startDate) || searchData.oldEndDate.diff(searchData.endDate)) {
      crimesData.fetch( {
        success : function() {       
          searchData.oldStartDate = moment(searchData.startDate);
          searchData.oldEndDate = moment(searchData.endDate);
          crimesData.each(function(item) {
            var hasCrimeType = false;
            for(var i in crimesType) {
              if (crimesType[i] == item.get("chrgdesc"))
                hasCrimeType = true;
            }
            if (!hasCrimeType)
              crimesType.push(item.get("chrgdesc"));

            var hasPolice = false;
            for(var i in policesType) {
              if (policesType[i] == item.get("agency"))
                hasPolice = true;
            }
            if (!hasPolice)
              policesType.push(item.get("agency"));
          });
          makeDropdown();



          callback(search());
        }, 
        data : { 
          "startdate" : searchData.startDate.format('YYYY-MM-DD'), 
          "enddate" : searchData.endDate.format('YYYY-MM-DD')
        }, 
        processData : true
      } );
    } else { 
      return search(); 
    }
  }
};

onDataChange = function(crimes) {
  if (crimeTypeMarkers.length != 0) {
    for (var i = 0 ; i < crimeTypeMarkers.length; i++) {
      crimeTypeMarkers[i].setMap(null);
    }
  }

  crimePoints = [];
  crimeTypeMarkers = [];



  if (typeof heatmap != "undefined")
    heatmap.setMap(null);

  crimes.each( function(item) {
    var position = new google.maps.LatLng(item.get("latitude"), item.get("longitude"));
    crimePoints.push(position);

    var crimeTypeMarker = new google.maps.Marker({
      position : position,
      map : map,
      icon : crimeIconDict[ item.get('chrgdesc')  ],
    });

    var infowindow = new google.maps.InfoWindow({
      content : getInfoWindowDecs(item)
    });

    crimeTypeMarkers.push(crimeTypeMarker);
    google.maps.event.addListener(crimeTypeMarker, 'click', function (e) {
      infowindow.open(map, crimeTypeMarker);
      if (e.latLng == latestPosition) {
        infowindow.close();
        latestPosition = null;
      }
      else latestPosition = e.latLng;
    });
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data : new google.maps.MVCArray(crimePoints)
  });

  heatmap.set('radius', heatmap.get('radius') ? null : 50);
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.5);
  heatmap.setMap(heatmap.getMap() ? null : map);
}

updateCalendar = function(start, end) {
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

    if (d - start.weekday() < duration) {
      if (d > 6) {
        searchData.date = day;
        var data = getData();
        console.log(data);
        var color = getDangerColor(data.length, crimesData.length, duration);
        $("#table-calendar-body tr:last td:last").empty().append(data.length).css("background", color).click({"date" : moment(day) }, function(e) {
          searchData.date = e.data.date;
          searchData.startTime = null;
          searchData.endTime = null;
          onDataChange(getData());
          updateClock();
          $("*").removeClass("focus");
          $(this).addClass("focus");
        });
        day.add(1, 'day');
      }
      else if (d >= start.weekday())
      {
        searchData.date = day;
        var data = getData();
        console.log(data);

        var color = getDangerColor(data.length, crimesData.length, duration);
        $("#table-calendar-body tr:last td:last").empty().append(data.length).css("background", color).click({ "date" : moment(day) }, function(e) {
          searchData.date = e.data.date;
          searchData.startTime = null;
          searchData.endTime = null;

          onDataChange(getData());
          updateClock();
                    $("*").removeClass("focus");
          $(this).addClass("focus");

        });
        day.add(1, 'day');
      }
    }
  } 
  searchData.date = null;
}

makeDropdown = function() {
  
  $("#dropdown-police-types").empty();
  for(var i in policesType) {
    $("#dropdown-police-types").append("<li><a>" + policesType[i] + "</a></li>");
    $("#dropdown-police-types li:last").click( { "police" : policesType[i] }, function(e) {
      searchData.police = e.data.police;

      $("#text-police-type").html(e.data.police);
      onDataChange(getData());
    });
  }


  
  $("#dropdown-crime-types").empty();
  for(var i in crimesType) {
    $("#dropdown-crime-types").append("<li><a>" + crimesType[i] + "</a></li>");
    $("#dropdown-crime-types li:last").click( { "crimeType" : crimesType[i] }, function(e) {
      searchData.crimeType = e.data.crimeType;

      $("#text-crime-type").html(e.data.crimeType);
      onDataChange(getData());
    });
  }

}



updateClock = function() {
  var data = [];
  var temp = moment().startOf("day");
  var ctx = $("#clock-chart").get(0).getContext("2d");
  $('#clock-chart').attr('width', $("#clock").width());
  $('#clock-chart').attr('height', $("#clock").height());
  var tempCrimeType = searchData.crimeType;    
  var tempPolice = searchData.police;
  searchData.police = "";
  searchData.crimeType = "";

  var crimes = getData();

  for(var h = 0; h < 24; h++) {
    searchData.startTime = moment(temp);
    searchData.endTime = moment(temp).add(1, "hour");

    var nowCrime = getData();

    data.push({ 
      label : searchData.startTime.format("HH:mm") + " ~ " + searchData.endTime.format("HH:mm") + " " + nowCrime.length + " crimes.", 
      value : 15, 
      startTime : searchData.startTime,
      endTime : searchData.endTime,
      color : getDangerColor(nowCrime.length, crimes.length, 24), highlight: getDangerColor(nowCrime.length, crimes.length, 24) 
    });
    temp.add(1, "hour");
  }
  searchData.police = tempPolice;
  searchData.crimeType = tempCrimeType;

  searchData.startTime = null;
  searchData.endTime = null;

  ClockChart = new Chart(ctx).Doughnut(data, {
    animation : false,
    tooltipTemplate: "<%= label %>",
  });
  
  $("#clock-chart").unbind("click");
  $("#clock-chart").click( { "datas" : data }, function(evt) {
    var clickedData = null;
    var activePoints = ClockChart.getSegmentsAtEvent(evt);
    for(var i in evt.data.datas) {
      if (activePoints[0].label == evt.data.datas[i].label) {
        clickedData = evt.data.datas[i];
        break;
      }
    }
    var tempCrimeType = searchData.crimeType;    
    var tempPolice = searchData.police;
    //searchData.police = "";
    //searchData.crimeType = "";
    searchData.startTime = clickedData.startTime;
    searchData.endTime = clickedData.endTime;
    onDataChange(getData());
    //searchData.police = tempPolice;
    //searchData.crimeType = tempCrimeType;

  });
}

onDateRangeChange(moment().startOf('month'), moment().endOf('month'));

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
}, onDateRangeChange);


dangerColors = [ "#ecff6d", "#fff96d", "#ffdd6d", "#ffbb6d", "#ff946d", "#ff6f6d" ];

getDangerColor = function(count, all, days) {
  var avr = all / days;
  var percent = (count - avr) / avr * 100;
  var processed = Math.round( Math.min( Math.max(-10, percent), 25 ) );
  processed = Math.round( (processed + 10) / 7 );
  return dangerColors[processed];
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


});
