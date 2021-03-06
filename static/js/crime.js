iconBase = '/static/icon/';
dangerColors = [ 
"#ffc8c8",
"#ffa0a0",
"#ff7878",
"#ff5050",
"#ff2828",
"#ff0000"
];
searchData = {
  startDate : null,
  endDate : null,
  oldStartDate : moment(),
  oldEndDate : moment(),

  date : null,
  startTime : null,  
  endTime : null,
  crimeType : [],
  police : []
}
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
  "byTypeArray" : function(type, array) {
    var filtered = this.filter(function(crime) {
      for(var i in array) {
        if (crime.get(type) == array[i])
          return true;
      }
    });
    return new crimeCollection(filtered);
  }
});
// initialize
crimeTypeMarkers = [];
crimePoints = [];
latestPosition = null;
crimesType = []
policesType = [];

$(document).ready(function() {
  // backbone.js initialize
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 13,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    center: new google.maps.LatLng(40.418641, -86.892279)
  });

  onDateRangeChange = function(start, end) {
    // initialize Search Data 
    searchData.startDate = moment(start);  
    searchData.endDate = moment(end);
    searchData.date = null;
    searchData.startTime = null; 
    searchData.endTime = null;
    searchData.crimeType = [];
    searchData.police = [];

    getData(function(data) {
      onDataChange(data)
      updateCalendar(start, end);
      updateClock();
    });
  }

  getData = function(callback) {

    var self = this;
    if (searchData.startDate != null && searchData.endDate != null) {
      // Using the Data on the memory
      var search = function() {
        var crimes = crimesData;

        if (searchData.date != null)
          crimes = crimes.byDate(searchData.date);

        if (searchData.startTime != null && searchData.endTime != null)
          crimes = crimes.rangeTime(searchData.startTime, searchData.endTime);

        if (searchData.crimeType.length > 0)
          crimes = crimes.byTypeArray("chrgdesc", searchData.crimeType);

        if (searchData.police.length > 0)
          crimes = crimes.byTypeArray("agency", searchData.police);

        return crimes;
      }

      if (searchData.oldStartDate.diff(searchData.startDate) || searchData.oldEndDate.diff(searchData.endDate)) {
        // Calling the PurdueCrime application for new CrimesData
        startAnimation();
        crimesData.fetch( {
          success : function() {       
            searchData.oldStartDate = moment(searchData.startDate);
            searchData.oldEndDate = moment(searchData.endDate);
            crimesType = []
            policesType = []
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
            stopAnimation();
          }, 
          data : { 
            "startdate" : searchData.startDate.format('YYYY-MM-DD'), 
            "enddate" : searchData.endDate.format('YYYY-MM-DD')
          }, 
          processData : true
        });
      }
      else { 
        return search(); 
      }
    }
  };

onDataChange = function(crimes) {
  if (crimeTypeMarkers.length > 0) {
    for (var i = 0 ; i < crimeTypeMarkers.length; i++) {
      crimeTypeMarkers[i].setMap(null);
    }
  }
  crimePoints = [];
  crimeTypeMarkers = [];
  $('#input-hide-marker').attr("checked", false);
  $('#input-hide-heatmap').attr("checked", false);
  if (typeof heatmap != "undefined")
    heatmap.setMap(null);

  crimes.each( function(item) {
    var position = new google.maps.LatLng(item.get("latitude"), item.get("longitude"));
    crimePoints.push(position);

      // Puts Markers on the Map
      var crimeTypeMarker = new google.maps.Marker({
        position : position,
        map : map,
        icon : iconBase + (crimeDict[item.get('chrgdesc')]-1) +".png",
      });

      var infowindow = new google.maps.InfoWindow({
        content : getInfoWindowDecs(item)
      });

      crimeTypeMarkers.push(crimeTypeMarker);
      google.maps.event.addListener(crimeTypeMarker, 'click', function (e) {
        infowindow.open(map, crimeTypeMarker);
      // close the InfoWindow at the Second click
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

  // customizeable Color, Radius, Opacity Settings
  heatmap.set('radius', heatmap.get('radius') ? null : 50);
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.5);
  heatmap.setMap(heatmap.getMap() ? null : map);
}
updateCalendar = function(start, end) {
  $('#date-range span').html(start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY'));
  $('#table-calendar-body').empty();
  var duration = moment.duration(end.startOf("day") - start.startOf("day")).asDays() + 1;
  var dayCount = 0;
  var day = moment(start);
  var t = duration + start.weekday() + ((duration + start.weekday()) % 7 > 0 ? 7 - (duration + start.weekday()) % 7 : 0);

  var onCalendarClick = function(e) {
    searchData.date = e.data.date;
    searchData.startTime = null;
    searchData.endTime = null;
    onDataChange(getData());
    updateClock();
    $("*").removeClass("focus");
    $(this).addClass("focus");
  }

  for(var d = 0; d < t; d++) {
    if (d % 7 == 0) {
      $('#table-calendar-body').append("<tr></tr>");
    }

    $("#table-calendar-body tr:last").append("<td>.</td>");

    if (d - start.weekday() < duration) {
      if (d > 6) {
        searchData.date = day;
        var data = getData();
        var color = getDangerColor(data.length, crimesData.length, duration);
        $("#table-calendar-body tr:last td:last").empty().append(data.length).css("background", color).click({"date" : moment(day) }, onCalendarClick);
        day.add(1, 'day');
      }
      else if (d >= start.weekday())
      {
        searchData.date = day;
        var data = getData();
        var color = getDangerColor(data.length, crimesData.length, duration);
        $("#table-calendar-body tr:last td:last").empty().append(data.length).css("background", color).click({"date" : moment(day) }, onCalendarClick);
        day.add(1, 'day');
      }
    }
  }
  searchData.date = null;
};

makeDropdown = function() {
  $("#dropdown-police-types").empty();
  for(var i in policesType) {
    $("#dropdown-police-types").append("<option id='"  + policesType[i] + "'>"  + policesType[i] + "</option>");
  }
  $("#dropdown-crime-types").empty();
  for(var i in crimesType) {
    $("#dropdown-crime-types").append("<option id='"  + crimesType[i] + "'>" +  crimesType[i] + "</option>");
  }
  $("#dropdown-crime-types").on("select2:select", function (e) {
    searchData.crimeType.push(e.params.data.text);
    onDataChange(getData());
  });
  $("#dropdown-crime-types").on("select2:unselect", function (e) {
    searchData.crimeType = _.without(searchData.crimeType, e.params.data.text);
    onDataChange(getData());
  });
  $("#dropdown-police-types").on("select2:select", function (e) {
    searchData.police.push(e.params.data.text);
    onDataChange(getData());
  });
  $("#dropdown-police-types").on("select2:unselect", function (e) {
    searchData.police = _.without(searchData.police, e.params.data.text);
    onDataChange(getData());
  });
}

updateClock = function() {
  var data = [];
  var temp = moment().startOf("day");
  var ctx = $("#clock-chart").get(0).getContext("2d");
  $('#clock-chart').attr('width', $("#clock").width());
  $('#clock-chart').attr('height', $("#clock").height());

  var tempCrimeType = searchData.crimeType.slice(0); // copy
  var tempPolice = searchData.police.slice(0); // copy
  searchData.police = [];
  searchData.crimeType = [];

  var crimes = getData();

  for(var h = 0; h < 24; h++) {
    searchData.startTime = moment(temp);
    searchData.endTime = moment(temp).add(1, "hour");
    var nowCrime = getData();
    data.push({ 
      label : searchData.startTime.format("HH:mm") + " ~ " + searchData.endTime.format("HH:mm") + " " + nowCrime.length + " crimes.", 
      value : 360 / 24,
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
    searchData.startTime = clickedData.startTime;
    searchData.endTime = clickedData.endTime;
    onDataChange(getData());
  });
}

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
  '</div>'
}
$("#dropdown-crime-types").select2();
$("#dropdown-police-types").select2();

$("#btn-time-reset").click(function() {
  searchData.startTime = null;
  searchData.endTime = null;
  onDataChange(getData());
});
$("#btn-date-reset").click(function() {
  searchData.date = null;
  $("*").removeClass("focus");
  updateClock();
  onDataChange(getData());
});

$('#input-hide-marker').change(function() {
  if (crimeTypeMarkers.length > 0) {
    for (var i = 0 ; i < crimeTypeMarkers.length; i++) {
      if ($(this).is(":checked"))
        crimeTypeMarkers[i].setMap(null);
      else
        crimeTypeMarkers[i].setMap(map);
    }
  }
});

$('#input-hide-heatmap').change(function() {
  if (typeof heatmap != "undefined") {
    if ($(this).is(":checked"))
      heatmap.setMap(null);
    else
      heatmap.setMap(map);
  }
});


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

crimesData = new crimeCollection();
onDateRangeChange(moment().startOf('month'), moment().endOf('month'));
});

var cSpeed=9;
var cWidth=100;
var cHeight=107;
var cTotalFrames=29;
var cFrameWidth=100;
var cImageSrc='/static/img/sprites.gif';

var cImageTimeout=false;
var cIndex=0;
var cXpos=0;
var cPreloaderTimeout=false;
var SECONDS_BETWEEN_FRAMES=1;

function startAnimation(){

  document.getElementById('loaderImage').style.backgroundImage='url('+cImageSrc+')';
  document.getElementById('loaderImage').style.width=cWidth+'px';
  document.getElementById('loaderImage').style.height=cHeight+'px';
  $("#loaderImage").show();

//FPS = Math.round(100/(maxSpeed+2-speed));
FPS = Math.round(100/cSpeed);
SECONDS_BETWEEN_FRAMES = 1 / FPS;

cPreloaderTimeout=setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES/1000);

}

function continueAnimation(){

  cXpos += cFrameWidth;
//increase the index so we know which frame of our animation we are currently on
cIndex += 1;

//if our cIndex is higher than our total number of frames, we're at the end and should restart
if (cIndex >= cTotalFrames) {
  cXpos =0;
  cIndex=0;
}

if(document.getElementById('loaderImage'))
  document.getElementById('loaderImage').style.backgroundPosition=(-cXpos)+'px 0';

cPreloaderTimeout=setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES*1000);
}

function stopAnimation(){//stops animation
  clearTimeout(cPreloaderTimeout);
  cPreloaderTimeout=false;
  $("#loaderImage").hide();
}

function imageLoader(s, fun)//Pre-loads the sprites image
{
  clearTimeout(cImageTimeout);
  cImageTimeout=0;
  genImage = new Image();
  genImage.onload=function (){cImageTimeout=setTimeout(fun, 0)};
  genImage.onerror=new Function('alert(\'Could not load the image\')');
  genImage.src=s;
}

//The following code starts the animation
new imageLoader(cImageSrc, 'startAnimation()');

