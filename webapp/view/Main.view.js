sap.ui.jsview("demoapp.view.Main",{
	
	getControllerName: function(){
		
		return "demoapp.controller.Main";
		
	},
	
	createContent: function(oController){
		
		// here we are creating page obect if we are creating page object then we would have to create app ContainerControl object.
		// Below We have created 
			
			
			sap.ui.core.Control.extend("myMap",{
				
				metadata: {},
				init: function() {},
				renderer: function(oRn , oControl){
					
					oRn.write("<div id='ranjan'");
					oRn.addStyle("width","100%");
					oRn.addStyle("height" , "600px");
					oRn.addStyle("border","2px solid red");
					oRn.writeStyles();
					oRn.write("</div>");
					
				}
				
			});
			
			var oMap = new myMap();
			var oPage = new sap.m.Page("idPage",{
				
				title: "My Home",
				content: [new sap.m.SearchField("idSearch",{
					
					//here we have defined instance of the controller for indicating this pointer
					
					search: [oController.takeMeHome, oController]
					
				}), oMap]
				
			});
			
			// Here we are creating app object
			var oApp = new sap.m.App({
				
				pages: [oPage]
				
			});
			
			return oApp;
		
	}
	
}); 