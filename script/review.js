$(window).on("load", function() {  
	let reviewName = $("#name"),
		reviewNumber = $("#number"),
		reviewLocation = $("#location"),
		reviewPizzaSize = $("#size"),
		reviewPizzaFillings = $("#fillings"),
		reviewPizzaCost = $("#pizzaCost");
	
	reviewName.empty();
	reviewName.append(sessionStorage.getItem("client_name"));
	reviewNumber.empty();
	reviewNumber.append(sessionStorage.getItem("client_number"));
	reviewLocation.empty();
	reviewLocation.append(sessionStorage.getItem("client_location"));
	reviewPizzaSize.empty();
	reviewPizzaSize.append(sessionStorage.getItem("pizza_size"));
	reviewPizzaFillings.empty();
	reviewPizzaFillings.append(sessionStorage.getItem("pizza_fillings"));
	reviewPizzaCost.empty();
	reviewPizzaCost.append(sessionStorage.getItem("pizza_cost") + " " + "грн");
	
	//Выбор времени доставки
	$("#timepicker").timepicker({
   
		timeSeparator: ":",           
		showLeadingZero: true,        
                                    
		showMinutesLeadingZero: true, 
                                    
		showPeriod: false,            
		showPeriodLabels: true,       
		periodSeparator: " ",         
		altField: "#alternate_input", 
		defaultTime: "12:34",         

    
		showOn: "focus",              
		button: null,                


		hourText: "Hour",             
		minuteText: "Minute",         
		amPmText: ["AM", "PM"],       

		myPosition: "left top",       
		atPosition: "left bottom",    

		beforeShow: beforeShowCallback, 
		onSelect: onSelectCallback,   
		onClose: onCloseCallback,     
		onHourShow: onHourShow,       
		onMinuteShow: onMinuteShow,  

		hours: {
			starts: 0,               
			ends: 23                 
		},
		minutes: {
			starts: 0,               
			ends: 55,                
			interval: 5,             
			manual: []               
		},
		rows: 4,                      
		showHours: true,             
		showMinutes: true,           

		minTime: {                  
			hour: minHour,           
			minute: minMinute
		},
		maxTime: {                  
			hour: maxHour,         
			minute: maxMinute
		},

		showCloseButton: false,      
		closeButtonText: "Done",     
		showNowButton: false,        
		nowButtonText: "Now",        
		showDeselectButton: false,    
		deselectButtonText: "Deselect"

	});
});