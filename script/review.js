$(window).on("load", function() {  
	let reviewName = $("#name"),
		reviewNumber = $("#number"),
		reviewLocation = $("#location"),
		reviewPizzaSize = $("#size"),
		reviewPizzaFillings = $("#fillings"),
		reviewPizzaCost = $("#pizzaCost"),
		time = $("#time"),
		timeBlock = $("#timeBlock");
	
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
	
	timeBlock.on("click", function(event) {
		let selectedButton = event.target.id;
			if (selectedButton == "acceptButton") {
				alert("Ваш заказ принят");
				window.close();
			}
				if (selectedButton == "declineButton") {
					alert("Вернитесь на страницу заказа");
					window.close();
				}
					
		event.stopPropagation();
	});		
	
	//Выбор времени доставки
	$(function() {
		time.timeDropper({
			format: "H:mm"
		});
	});

});