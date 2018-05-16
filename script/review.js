$(window).on("load", function() {  
	let reviewName = $("#name"),
		reviewNumber = $("#number"),
		reviewLocation = $("#location"),
		reviewPizzaSize = $("#size"),
		fillings = $("#size"),
		
	
	reviewName.empty();
	reviewName.append(sessionStorage.getItem("client_name"));
	reviewNumber.empty();
	reviewNumber.append(sessionStorage.getItem("client_number"));
	reviewLocation.empty();
	reviewLocation.append(sessionStorage.getItem("client_location"));
	reviewPizzaSize.empty();
	reviewPizzaSize.append(sessionStorage.getItem("pizza_size"));
	
});