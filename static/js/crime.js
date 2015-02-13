
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
        icon : iconBase + (crimeDict[item.get('chrgdesc')]-1) + '.png',
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
