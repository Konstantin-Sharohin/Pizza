$(window).on("load", function() {
    
let buttonGroup = $(".button_group"),
	hideElem = $(".hide"),
	pizzaImg = $("#pizza"),
	bonusImg = $("#bonus"),
	pizzaSelection = $("#pizzaSelection"),
	addressForm = $("#addressForm"),
	submitButton = $("#button"),
	resetButton = $("#reset"),
	pizzaFillings = $("input[type=checkbox]"),
	filling = $("#filling"),
	fillingLenght = pizzaFillings.length,
	totalCost = $("#totalPrice"),
	pizzaFillingPrice = 0,
	pizzaSizePrice = 0,
	pizzaPrice = 0,
	pizzaSizePrices = Object.create(null),
	pizzaFillingPrices = Object.create(null);
	pizzaSizePrices["small"] = 40,
	pizzaSizePrices["medium"] = 65,
	pizzaSizePrices["big"] = 80;
	pizzaFillingPrices["mushrooms"] = 10,
	pizzaFillingPrices["pineapple"] = 15,
	pizzaFillingPrices["cheeze"] = 10,
	pizzaFillingPrices["tomato"] = 15,
	pizzaFillingPrices["olives"] = 15,
	pizzaFillingPrices["capers"] = 20,
	pizzaFillingPrices["meat"] = 20;
	
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
		filling.on("click", function(event) {
			let selectedFilling = event.target.className;
			if (selectedFilling == "ingredients") {
				for (let i = 0; i < fillingLenght; i++) {
					if (pizzaFillings[i].checked == true) {
						for (f in pizzaFillingPrices) {
							pizzaFillingPrice += pizzaFillingPrices[f];
						}
					}
				}
			
			console.log("pizzaFillingPrice " + pizzaFillingPrice);
			}
		event.stopPropagation();
		});
	
	//Сброс значений для пиццы
	resetButton.on("click", function(event) {
			let selectedButton = event.target.id;
			if (selectedButton == "reset") {
				pizzaImg.animate({"width": "50px", "transitionDuration": "0.7s"});
				pizzaSizePrice = 0;
				pizzaFillingPrice = 0;
				for (let i = 0; i < fillingLenght; i++) {
					pizzaFillings.prop("checked", false);
				}
				submitButton.prop("disabled", true);
				console.log("pizzaSizePrice " + pizzaSizePrice);
			}
		event.stopPropagation();
		});
	
	//Подсчет итоговой суммы
	function calculateTotal() {
		pizzaPrice = pizzaFillingPrice + pizzaSizePrice;
		totalCost.innerHTML = pizzaPrice;
		if (pizzaPrice > 200) {
			totalCost.innerHTML += 0.99 + " +";
			bonusImg.show("fast");
		};
		if (pizzaPrice < 200) {
			bonusImg.hide("fast");
		}
	}
});