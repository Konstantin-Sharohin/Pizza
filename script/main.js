$(window).on("load", function() {
    
let buttonGroup = $(".button_group"),
	hideElem = $(".hide"),
	pizzaImg = $("#pizza"),
	bonusImg = $("#bonus"),
	pizzaSelection = $("#pizzaSelection"),
	addressForm = $("#addressForm"),
	submitButton = $("#button"),
	resetButton = $("#reset"),
	pizzaFillings = $("input:checkbox"),
	filling = $("#filling"),
	fillingLenght = pizzaFillings.length,
	totalCost = $("#totalPrice"),
	pizzaSizePrice = 0,
	pizzaPrice = 0,
	pizzaSizePrices = Object.create(null);
	pizzaSizePrices["small"] = 40,
	pizzaSizePrices["medium"] = 65,
	pizzaSizePrices["big"] = 80;
	
	//
	hideElem.hide();
	bonusImg.hide();
	submitButton.prop("disabled", true);
	
	//Создание обработчика событий для обтекающего элемента
	pizzaSelection.on("click", function(event) {
		let selectedButton = event.target.id;
			if (selectedButton == "small") {
				pizzaImg.animate({"width": "50px", "transitionDuration": "0.7s"});
				pizzaSizePrice = pizzaSizePrices.small;
			}
				if (selectedButton == "medium") {
					pizzaImg.animate({"width": "70px", "transitionDuration": "0.7s"});
					pizzaSizePrice = pizzaSizePrices.medium;
				}
					if (selectedButton == "big") {
						pizzaImg.animate({"width": "90px", "transitionDuration": "0.7s"});
						pizzaSizePrice = pizzaSizePrices.big;
					}
					hideElem.show("fast");
					console.log("pizzaSizePrice " + pizzaSizePrice);
					submitButton.prop("disabled", false);
					event.stopPropagation();
	});
	
	//Присваивание цен добавкам
		pizzaFillings.change(function() {
			$("input:checkbox:checked").each(function() {
				let pizzaFillingPrice = 0;
				pizzaFillingPrice += parseInt($(this).val());
				console.log("pizzaFillingPrice " + pizzaFillingPrice);
			});
		});
	
	//Сброс выбора пиццы
	resetButton.on("click", function(event) {
			let selectedButton = event.target.id;
			if (selectedButton == "reset") {
				pizzaImg.animate({"width": "50px", "transitionDuration": "0.7s"});
				pizzaSizePrice = 0;
				pizzaFillingPrice = 0;
				for (let i = 0; i < fillingLenght; i++) {
					pizzaFillings.prop("checked", false);
				}
				hideElem.hide("slow");
				submitButton.prop("disabled", true);
				console.log("pizzaSizePrice " + pizzaSizePrice);
				console.log(" pizzaFillingPrice" + pizzaFillingPrice);
			}
		event.stopPropagation();
		});
	
	//Подсчет итоговой суммы
	// function calculateTotal() {
		// pizzaPrice = pizzaFillingPrice + pizzaSizePrice;
		// totalCost.innerHTML = pizzaPrice;
		// if (pizzaPrice > 200) {
			// totalCost.innerHTML += 0.99 + " +";
			// bonusImg.show("fast");
		// };
		// if (pizzaPrice < 200) {
			// bonusImg.hide("fast");
		// }
	// }
});