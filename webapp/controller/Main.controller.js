// sap.ui.define(
// 	["sap.ui.core.mvc.Controller"] ,
// 	function(Controller){
		
// 		return Controller.extend("demoapp.controller.Main",{
			
// 		oMap: null,
		
sap.ui.controller("demoapp.controller.Main",
{
	onInit : function()
	{},
	oMap:null,
		
		onAfterRendering: function(){
			
			// i assume at this point that my custom control with id 'ranjan' is loaded.
			// here we have applied safecarding condition because we dont need our google map object should be loaded.
			if (this.oMap === null){
				// var oBtn = new sap.m.Button("id",{prop..})\
				// here we defined lattitude and longitude concept.
			  var oLoc = {lat:20.5937,lng:78.9629};
				this.oMap = new google.maps.Map(document.getElementById("ranjan"),{
					zoom: 6,
					center: oLoc
				}); 
			}
		},
		
		takeMeHome: function(oEvent){
			
			var whtToFind = oEvent.getParameter("query");
			// Here i have given geoCoder Api
			var oGeoCoder = new google.maps.Geocoder();
			//here will create local variable to point to thispointer 
			// here local varaible will be called as a asyncronously 
			// here 'that is a call back function' , because we dont Know how much time it will take for searching
			var that = this;
			oGeoCoder.geocode({
				// what user will search that will be return as a address
				address: whtToFind
				// here we are calling our call back function
			}, function(results){
				// here we have defined result as a array because  we can be  get multiple result for single search
				// e.g : if user searching punjab so google will give multiple result.
				var strLocation = results[0];
				
				var loc = {
				//here we are applied lattitude and langitute because what location user need to see that location must be diplay proper way.	
					lat: strLocation.geometry.location.lat(),
					lng: strLocation.geometry.location.lng(),
				};
				
				// here we are setting our map to the center
				that.oMap.setCenter(loc);
				that.oMap.setZoom(10);
				//here we will give another api for its giving a particular exact area.
				new google.maps.Marker({
					
					map: that.oMap,
					position: loc,
					title: "Wonder of India"
				});
			})	;
			
		}
		
			
		});
		
	