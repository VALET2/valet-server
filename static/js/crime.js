
iconBase = '/static/icon/';
crimeDict = {
  'ABANDONED PROPERTY' : 1,
  'ABANDONED VEHICLE' : 1,
  'DUMPING' : 1,

  'TRAFFIC ACCIDENTS - OVER $1000' : 2,
  'TRAFFIC ACCIDENTS - UNDER $1000' : 2,
  'TRAFFIC ACCIDENTS - PERSONAL INJURY' : 2,
  'ACCIDENT MISCELLANEOUS-NON TRAFFIC' : 2,
  'TRAFFIC ACCIDENTS - FATAL' : 2,
  'AUTO DAMAGE NOT ACCIDENT.' : 2,
  'LEAVING THE SCENE OF A PD ACCIDENT' : 2,
  'ACCIDENT HIT AND RUN':2,
  'AUTO DAMAGED NOT ACCIDENT':2,
  'CAR / DEER ACCIDENT':2,
  'TRAFFIC ACCIDENTS - HIT AND RUN UNDER $1000':2,
  'TRAFFIC ACCIDENTS - HIT & RUN':2,

  'OPEN BURNING':3,
  'FIRES/NON-ARSON':3,
  'ARSON - OTHER RESIDENTIAL':3,
  'ARSON - COMMUNITY/PUBLIC, CHURCHES, JAILS, SCHOOLS, COLLEGES':3,
  'ARSON - ALL OTHER STRUCTURES':3,
  'ARSON - SINGLE OCCUPANCY DWELLING':3,
  'ARSON - OTHER COMMERCIAL':3,
  'ARSON - MOBILE (AUTO/BUSES/MC, ETC)':3,
  'ARSON - TOTAL OTHER - CROPS, TIMBER, FENCES, SIGNS, ETC':3,
  'ARSON - OTHER MOBILE PROP -TRAILERS/RV`S/AIRPLANES':3,
  'ARSON - STORAGE, BARNS, GARAGES, WAREHOUSES, ETC':3,
  'FIRE ALARM ACTIVATION':3,

  'ALARMS':4,
  'PANIC ALARMS':4,
  'ALARM SYSTEMS':4,
  'AMBULANCE CALL':4,
  'CALL TO ASSIST HAMMOND PD':4,
  'AMBULANCE CALLED':4,

  'ASSIST OTHER AGENCY':5,
  'ASSIST HAMMOND PD':5,

  'OPERATING AN ORV UNDER THE INFLUENCE OF ALCOHOL/DRUGS':6,
  'TRANSPORTATION OR CONSUMPTION OF OPEN ALCOHOLIC BEVERAGE CON':6,

  'MARIJUANA':7,
  'POSS MARIJUANA/HASH OIL/ OR SYNTHETIC CANNABINOID':7,
  'POSS MARIJUANA, HASH OIL. OR SYNTHETIC CANNABINOID ':7,
  'SYNTHETIC CANNABINOIDS':7,
  'SMELL OF MARIJUANA':7,

  'AIR CRAFT INCIDENTS':8,

  'ARGUEMENT':9,
  'DISTURBANCE/ARGUMENTS/FIGHTS':9,
  'DOMESTIC ARGUMENT':9,

  'DRIVING WHILE SUSPENDED/INFRACTION':10,
  'DRIVING WHILE SUSPENDED':10,
  'RECKLESS DRIVING':10,
  'DRIVING WHILE SUSPENDED-PRIOR':10,
  'DRIVING WHILE PERMIT OR LICENSE IS SUSPENDED OR REVOKED':10,
  'DRIVING WHILE SUSPENDED WITH PRIOR WITHIN LAST 10 YEARS':10,
  'RECKLESS DRIVING BY AGGRESSIVE DRIVING BY 2 OR MORE OFFENSES':10,

  'OTHER ASSAULTS':11,
  'AGGR ASSAULT W/HANDS, FISTS AND FEET':11,
  'AGGR ASSAULT W/OTHER DANGEROUS WEAPON':11,
  'AGGR ASSAULT W/KNIFE OR CUTTING INSTRUMENT':11,
  'AGGR ASSAULT W FIREARM':11,
  'BATTERY':11,
  'BATTERY BY BODY WASTE':11,
  'BATTERY WITH A DEADLY WEAPON':11,
  'BATTERY CAUSING INJURY':11,
  'DOMESTIC BATTERY':11,

  'BICYCLE INJURY':12,

  'THREATS/INTIMIDATION':13,
  'SUICIDE/ATTEMPTS/THREATS OF':13,
  'BOMB THREATS':13,
  'THREATS OF SUICIDE':13,

  'BURGLARY - ATTEMPTED':14,
  'BURGLARY - FORCIBLE ENTRY':14,
  'BURGLARY - UNLAWFUL ENTRY - NO FORCE  ':14,
  'MOTOR VEHICLE THEFT - AUTO':14,
  'MOTOR VEHICLE THEFT - TRUCK':14,
  'THEFT -  FROM COIN OPERATED MACHINES':14,
  'THEFT - PICK POCKETING':14,
  'THEFT -  ALL OTHER':14,
  'THEFT - MOTOR VEHICLES PARTS AND ACCESSORIES':14,
  'THEFT - SHOPLIFTING':14,
  'THEFT -  FROM BUILDINGS':14,
  'THEFT - FROM MOTOR VEHICLE EXCEPT PARTS':14,
  'THEFT -  BICYCLE':14,
  'MOTOR VEHICLE THEFT -  OTHER VEHICLES':14,
  'THEFT - PURSE SNATCHING':14,
  'IDENTITY THEFT':14,
  'ATTEMPTED THEFT':14,

  'DOGS/OTHER ANIMALS INCLUDING BITES':15,
  'CRUELTY TO ANIMALS':15,
  'DOGS AND OTHER ANIMALS':15,
  'ANIMAL COMPLAINT':15,
  'ANIMAL CONTROL':15,
  'ANIMAL NOT UNDER RESTRAINT':15,
  'PUBLIC NUISANCE ANIMAL':15,

  'AUTO LAW VIOLATION':16,
  'LIQUOR LAW VIOLATIONS':16,
  'DRUG ABUSE VIOLATIONS':16,
  'CITY NOISE ORDINANCE VIOLATION':16,
  'WEAPON VIOLATION':16,
  'PAROLE/PROBATION VIOLATION':16,
  'PROBATION VIOLATION':16,
  'TRAFFIC DEVICE VIOLATION':16,
  'CURFEW VIOLATION':16,
  'PROTECTIVE ORDER VIOLATION':16,
  'JUNK VEHICLE VIOLATION':16,
  'VIOLATION CIVIL RIGHTS':16,
  'SEAT BELT VIOLATION - DRIVER':16,
  'PROTECTED ORDER VIOLATION':16,
  'WANTED ON A WARRANT/TCCC VIOLATION':16,
  'MISC TRAFFIC VIOLATION':16,
  '24 HR PARKING VIOLATION':16,
  'SEAT BELT VIOLATION':16,
  'PROTECTION ORDER VIOLATION':16,
  'PO VIOLATION':16,
  'CITY/COUNTY ORD & STATE STATUTE VIOLATIONS':16,
  'COURT ORDER VIOLATION':16,

  'DEATHS/OTHER THAN HOMICIDES/SUICIDE':17,
  'DEATH':17,
  'SUICIDE':17,
  'ATTEMPTED SUICIDE':17,
  'SUICIDE ATTEMPT':17,

  'KIDNAPPING/CONFINEMENT':18,
  'CONFINEMENT':18,
  'CONFINEMENT W/ DEADLY WEAPON':18,
  'CRIMINAL CONFINEMENT':18,

  'FUGITIVES/WANTED ON WARRANT OTHER AGENCY':19,
  'WARRANT':19,
  'WARRANT SERVICE':19,
  'LPD PTR WARRANT':19,
  'WANTED ON WARRANT':19,
  'WARRANT (3X)':19,

  'DAMAGED PROPERTY':20,
  'PROPERTY FOUND':20,
  'RECOVERED STOLEN PROPERTY':20,
  'PROPERTY LOST':20,
  'PARKING/PRIVATE PROPERTY':20,
  'STOLEN PROPERTY: RECEIVING/POSSESSION/BUYING':20,
  'DAMAGE PROPERTY':20,
  'FOUND PROPERTY':20,
  'PARKING - PRIVATE AND PUBLIC PROPERTY':20,

  'VANDALISM / MISCHIEF':21,
  'VANDALISM / GRAFFITI':21,

  'SEX OFFENSE':22,
  'RAPE':22,
  'RAPE ATTEMPTED':22,
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
      icon : iconBase + crimeDict[ item.get('chrgdesc')  ] +".png",
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

$(document).ready( function(){

  $('#compare-img-map').on('click', function(){

    if ( $('#prediction-map').length != 0) {
      $('#map-canvas').removeClass('col-md-6');
      $('#prediction-map').remove();
      google.maps.event.trigger(map, 'resize');
      map.setCenter(new google.maps.LatLng(40.418641, -86.892279));
      map.setZoom(13);
    }
    else {

      var time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth()+1;
      var date = time.getDate();

      if( month < 10 ) month = "0" + month;
      if( date < 10 ) date = "0" + date;

      var dateString = year + '-' + month + '-' + date + ".jpg";
      img = $('<div class="col-md-6"><img src="' + "/static/prediction/" + dateString + '" id="prediction-map" style="height:450px"/></div>');

      mapHtml = $('#map-canvas');
      mapHtml.addClass('col-md-6');
      mapHtml.parent().append(img);

      google.maps.event.trigger(map, "resize");
      map.setCenter(new google.maps.LatLng(40.418641, -86.892279));
      map.setZoom(12);

    }

  });

  $('#map-canvas').resize( function() {
    console.log("resizing");
    google.maps.event.trigger(map, "resize");
  });

});