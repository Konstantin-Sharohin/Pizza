$(window).on("load", function() {
    
let buttonGroup = $(".button_group"),
	hideElem = $(".hide"),
	pizzaImg = $("#pizza"),
	bonusImg = $("#bonus"),
	pizzaSelectionForm = $("#pizzaSelectionForm"),
	fillingForm = $("#fillingForm"),
	addressForm = $("#addressForm"),
	showResult = $("#showResult")
	submitButton = $("#button"),
	resetButton = $("#reset"),
	pizzaFillings = $("input:checkbox"),
	pizzaFillingPrice = 0,
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
	
	//Создание обработчика событий для обтекающего элемента и присваивание цен
	pizzaSelectionForm.on("click", function(event) {
		let selectedButton = event.target.id; 
			if (selectedButton == "small") {
				pizzaImg.animate({"width": "50px", "transitionDuration": "0.7s"});
				pizzaSizePrice = pizzaSizePrices.small;
				hideElem.show("fast");
				submitButton.prop("disabled", false);
			}
				if (selectedButton == "medium") {
					pizzaImg.animate({"width": "70px", "transitionDuration": "0.7s"});
					pizzaSizePrice = pizzaSizePrices.medium;
					hideElem.show("fast");
					submitButton.prop("disabled", false);
				}
					if (selectedButton == "big") {
						pizzaImg.animate({"width": "90px", "transitionDuration": "0.7s"});
						pizzaSizePrice = pizzaSizePrices.big;
						hideElem.show("fast");
						submitButton.prop("disabled", false);
					}
		calculateTotal(pizzaSizePrice, pizzaFillingPrice);
	});		
	
	
	fillingForm.on("click", function(event) {
		let pizzaFillingPrice = 0;
		$("input:checkbox:checked").each(function() {
			pizzaFillingPrice += parseInt($(this).val());
			});
			calculateTotal(pizzaSizePrice, pizzaFillingPrice);
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
	}
	
	
	//Открытие вкладки и отправка данных форм на сервер
	addressForm.on("submit", function(event) {
		event.preventDefault();
		console.log($(this).serialize());
	});
		// function sendAjaxForm(showResult, ajax_form, url) {
			// $.ajax({
				// url:	ajax_form.php,
				// type:	"POST",
				// dataType:	"html",
				// data: $("#" + ajax_form).serialize(),
				// success: function(response) {
					// result = $.parseJSON(response);
					// showResult.html("Спасибо, заказ принят!");
				// },
				// error: function(response) {
					// showResult.html("Ошибка. Данные не отправлены.");
				// }
			// })
		// };

});