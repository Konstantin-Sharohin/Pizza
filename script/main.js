$(window).on("load", function() {
    
	let buttonGroup = $(".button_group"),
	hideElem = $(".hide"),
	pizzaImg = $("#pizza"),
	bonusImg = $("#bonus"),
	pizzaSelection = $("#pizzaSelection"),
	addressForm = $("#addressForm"),
	submitButton = $("#button")
	PizzaFilling = $(".ingredients"),
	filling = $("#filling"),
	totalCost = $("#totalPrice"),
	pizzaFillingPrice = 0,
	pizzaSizePrice = 0,
	pizzaPrice = 0,
	pizzaSizePrices = [40, 65, 80],
	pizzaFillingPrices = [10, 15, 10, 15, 15, 20, 20];
	
	//
	hideElem.hide();
	bonusImg.hide();
	submitButton.prop("disabled", true);
	
	//Создание обработчика событий для обтекающего элемента
	pizzaSelection.on("click", function(event) {
		let selectedButton = event.target.id;
			if (selectedButton == "small") {
				pizzaImg.animate({"width": "50px", "transitionDuration": "0.7s"});
				pizzaSizePrice = pizzaSizePrices[0];
			}
				if (selectedButton == "medium") {
					pizzaImg.animate({"width": "70px", "transitionDuration": "0.7s"});
					pizzaSizePrice = pizzaSizePrices[1];
				}
					if (selectedButton == "big") {
						pizzaImg.animate({"width": "90px", "transitionDuration": "0.7s"});
						pizzaSizePrice = pizzaSizePrices[2];
					}
					hideElem.show("fast");
					calculateTotal();
					submitButton.prop("disabled", false);
					event.stopPropagation();
	});
	
	//Присваивание цен добавкам
		filling.on("click", function(event) {
			let selectedFilling = event.target.className;
			if (selectedFilling = "ingredients") {
				for (var i = 0, fillingLenght = PizzaFilling.length; i < fillingLenght; i++) {
					if (PizzaFilling[i].checked) {
						pizzaFillingPrice += pizzaFillingPrices[i];
					}
				}
			calculateTotal();
			}
		event.stopPropagation();
		});
	
	//Подсчет итоговой суммы
	function calculateTotal() {
		pizzaPrice = pizzaFillingPrice + pizzaSizePrice;
		totalCost.innerHTML = pizzaPrice;
		console.log(totalCost.innerHTML);
		if (pizzaPrice > 200) {
			totalCost.innerHTML += 0.99 + " +";
			bonusImg.show("fast");
		};
		if (pizzaPrice < 200) {
			bonusImg.hide("fast");
		}
	}
});