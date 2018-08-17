var counter =( function(){

	var _value;

	var _checkInteger =function(x){

		if(x%1 == 0){
			return true;
		} else {
			return false;
		}
	} 

	var setValue = function(x){

		if( _checkInteger(x)) {

			_value = x;
		} else {
			console.log('Число не может быть дробным! Введите целое число, пожалуйста!');
		}
	}

	var increaseCounter = function(){

		_value++;
	}

	var decreaseCounter = function(){

		_value--;
	}

	var printCounter = function(){

		console.log( _value );
	};

	return {

		setValue,
		increaseCounter,
		decreaseCounter,
		printCounter,

	}

}());

		counter.setValue(55); 
		counter.decreaseCounter();
		counter.decreaseCounter();
		counter.printCounter();

		counter.increaseCounter();
		counter.increaseCounter();
		counter.increaseCounter();
		counter.printCounter();

