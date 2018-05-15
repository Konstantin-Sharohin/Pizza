$(window).on("load", function() {  
	let reviewName = $("#name"),
		reviewNumber = $("#number"),
		reviewLocation = $("#location");
	
	reviewName.empty();
	reviewName.append(sessionStorage.getItem("client_name"));
	
	reviewNumber.empty();
	reviewNumber.append(sessionStorage.getItem("client_number"));
	
	reviewLocation.empty();
	reviewLocation.append(sessionStorage.getItem("client_location"));
});