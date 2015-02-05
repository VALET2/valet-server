$(function(){

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

var crimes = new crimeCollection();
crimes.fetch();

//crimeCollection.rangeToDate("2014-01-01 00:00:00", "2015-02-28 00:00:00");
//crimeCollection.rangeToPosition(0, -180, 90, 180)
// crimeCollection.where({""})





});
$('#date-range').daterangepicker(
    {
      ranges: {
         'Today': [moment(), moment()],
         'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
         'Last 7 Days': [moment().subtract('days', 6), moment()],
         'Last 30 Days': [moment().subtract('days', 29), moment()],
         'This Month': [moment().startOf('month'), moment().endOf('month')],
         'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
      },
      startDate: moment().subtract('days', 29),
      endDate: moment()
    },
    function(start, end) {
        $('#date-range span').html(start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY'));
    }
);
Morris.Donut({
  element: 'clock-chart',
  data: [
    {label: "23:00-24:00", value: 15},
    {label: "22:00-23:00", value: 15},
    {label: "21:00-22:00", value: 15},
    {label: "20:00-21:00", value: 15},
    {label: "19:00-20:00", value: 15},
    {label: "18:00-19:00", value: 15},
    {label: "17:00-18:00", value: 15},
    {label: "16:00-17:00", value: 15},
    {label: "15:00-16:00", value: 15},
    {label: "14:00-15:00", value: 15},
    {label: "13:00-14:00", value: 15},
    {label: "12:00-13:00", value: 15},
    {label: "11:00-12:00", value: 15},
    {label: "10:00-11:00", value: 15},
    {label: "09:00-10:00", value: 15},
    {label: "08:00-09:00", value: 15},
    {label: "07:00-08:00", value: 15},
    {label: "06:00-07:00", value: 15},
    {label: "05:00-06:00", value: 15},
    {label: "04:00-05:00", value: 15},
    {label: "03:00-04:00", value: 15},
    {label: "02:00-03:00", value: 15},
    {label: "01:00-02:00", value: 15},
    {label: "00:00-01:00", value: 15}
  ]
}).select(0);

