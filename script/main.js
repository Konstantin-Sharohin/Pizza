$(window).on("load", function() {
    
let buttonGroup = $(".button_group"),
	hideElem = $(".hide"),
	pizzaImg = $("#pizza"),
	bonusImg = $("#bonus"),
	pizzaSelectionForm = $("#pizzaSelectionForm"),
	fillingForm = $("#fillingForm"),
	addressForm = $("#addressForm"),
	clientName = $("input[name=client_name]"),
	clientNumber = $("input[name=client_number]"),
	clientLocation = $("input[name=client_location]"),
	smallButton = $("#small"),
	mediumButton = $("#medium"),
	bigButton = $("#big"),
	pizzaButtonValue = "",
	clientNameValue = "",
	clientNumberValue = "",
	clientLocationValue = "",
	pizzaFillingsValue = [],
	showResult = $("#showResult"),
	submitButton = $("#button"),
	resetButton = $("#reset"),
	pizzaFillings = $("input:checkbox"),
	ingredients = $(".ingredients"),
	doubleFilling = $(".doubleFil"),
	pizzaFillingPrice = 0,
	fillingLenght = pizzaFillings.length,
	totalCost = $("#totalPrice"),
	pizzaSizePrice = 0,
	pizzaPrice = 0,
	pizzaSizePrices = Object.create(null);
	pizzaSizePrices["small"] = 40,
	pizzaSizePrices["medium"] = 65,
	pizzaSizePrices["big"] = 80;
	
	
	//Скрытие элементов
	hideElem.hide();
	bonusImg.hide();
	submitButton.prop("disabled", true);
	
	
	//Создание обработчика событий для обтекающего элемента и присваивание цен
	pizzaSelectionForm.on("click", function(event) {
		let selectedButton = event.target.id;
			if (selectedButton == "small") {
				pizzaImg.animate({"width": "50px", "transitionDuration": "0.7s"});
				pizzaSizePrice = pizzaSizePrices.small;
				hideElem.show("fast");
				submitButton.prop("disabled", false);
				pizzaButtonValue = smallButton.html();
			}
				if (selectedButton == "medium") {
					pizzaImg.animate({"width": "70px", "transitionDuration": "0.7s"});
					pizzaSizePrice = pizzaSizePrices.medium;
					hideElem.show("fast");
					submitButton.prop("disabled", false);
					pizzaButtonValue = mediumButton.html();
				}
					if (selectedButton == "big") {
						pizzaImg.animate({"width": "90px", "transitionDuration": "0.7s"});
						pizzaSizePrice = pizzaSizePrices.big;
						hideElem.show("fast");
						submitButton.prop("disabled", false);
						pizzaButtonValue = bigButton.html();
					}
		doubleFilling.hide();
		calculateTotal(pizzaSizePrice, pizzaFillingPrice);
		event.stopPropagation();
	});		
	
	//Двойная порция добавок и присваивание им цен
	fillingForm.on("click", function(event) {
		let pizzaFillingPrice = 0,
			checkedPizzaFillings = $("input:checkbox:checked");
		
		$(event.target).find(".doubleFil").show();
		
		checkedPizzaFillings.each(function() {
			pizzaFillingPrice += parseInt($(this).val());
		});
		
		calculateTotal(pizzaSizePrice, pizzaFillingPrice);
		event.stopPropagation();
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
		}
		event.stopPropagation();
		});
	
	
	//Подсчет итоговой суммы
	function calculateTotal(pizzaSizePrice, pizzaFillingPrice) {
		pizzaPrice = pizzaSizePrice + pizzaFillingPrice;
		totalCost.empty();
		totalCost.append(pizzaPrice);
		if (pizzaPrice >=+ 120) {
			totalCost.empty();
			totalCost.append(pizzaPrice + 0.99 + " + ");
			bonusImg.show("fast");
		};
		if (pizzaPrice < 120) {
			bonusImg.hide("slow");
		}
	};
	
	
	//Сбор введенных данных и открытие новой вкладки
	addressForm.on("submit", function(event) {
		event.preventDefault();
		
		clientNameValue = clientName.val();
		clientNumberValue = clientNumber.val();
		clientLocationValue = clientLocation.val();
		
		window.sessionStorage.setItem("client_name", clientNameValue);
		window.sessionStorage.setItem("client_number", clientNumberValue);
		window.sessionStorage.setItem("client_location", clientLocationValue);
		window.sessionStorage.setItem("pizza_size", pizzaButtonValue);
		window.sessionStorage.setItem("pizza_fillings", checkedPizzaFillings);
		
		submitButton.prop("disabled", true);
		resetButton.prop("disabled", true);
		
		let newWindow = window.open("review.html", "Проверка заказа", "width = 700, height = 500");
		});
		
});