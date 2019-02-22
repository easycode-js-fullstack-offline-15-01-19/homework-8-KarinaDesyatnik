// -------------------------- Home work --------------------------
// -------------------------- Десятник Карина --------------------------
// 1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
    width: '2m',
    height: '3m',
    getSquare:  function () {
        return parseFloat(this.width) * parseFloat(this.height)
    }
}
rectangle.getSquare(); // 6

// 2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price
    },
    getPriceWithDiscount: function () {
        return  this.price * (100 - parseFloat(this.discount)) / 100 
    }
 };

price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5

// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

const object = {
    height: 10,
    increment: function () {
        return this.height += 1
    }
}

// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:


const numerator = {
    value: 1,
    double: function () {
       this.value *= 2;
       return this;
    },
    plusOne: function () {
        this.value += 1
        return this;

    },
    minusOne: function () {
        this.value -= 1;
        return this;
    },
};
numerator.double().plusOne().plusOne().minusOne();

//5. Создать объект с розничной ценой и количеством продуктов. Этот
//объект должен содержать метод для получения общей стоимости
//всех товаров (цена * количество продуктов)

const priceList = {
    price: 100,
    number: 20,
    totalCost: function () {
        return this.price * this.number
    }
};
priceList.totalCost();

// 6.Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

const details = {
   price: 5,
   number: 10,
}
const totalCostDetails = priceList.totalCost.bind(details);
console.log(totalCostDetails);

//Даны объект и функция:

let sizes = {
    width: 5,
    height: 10
},
getSquare = function () {
    return this.width * this.height
};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes
let res = getSquare.call(sizes);

//4.  // Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.

let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight(); // 25

//Замыкания задачи
//1.Создайте функцию которая бы умела делать:
//minus(10)(6); // 4
//minus(5)(6); // -1
//minus(10)(); // 10
//minus()(6); // -6
//minus()(); // 0

const minus = function (val1) {
    return function secondNumber(val2) {
        return val1 - val2;
    }
};
minus(10)(6);

//2.еализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

function multiplyMaker(val1) {
	return 	function (val2) {
		val1 *= val2;
		return val1;
	}
}
const multiply = multiplyMaker(2);

// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

// // 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const stringModul = {
    str: '',
    setStr: function(newStr = '') {
        if (typeof newStr === 'number') {
            return str = newStr + ''
        } else {
            return str = newStr;
        }
   },
    getStr: function() { 
        return str;
    },
    getStrLength: function() {
        return str.length;
    },
    getReverseStr: function() {
        return str.split("").reverse().join("");
    }
};

// 4. Создайте модуль “калькулятор”, который умеет складывать,
//  умножать, вычитать, делить и возводить в степень. Конечное 
//  значение округлить до двух знаков после точки
// (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calculator = {
	val: 0,
	setVal: function (val1) {
		if (!val1) {
			val = 0;
		} else {
			val = val1;
		}
		return calculator;
	},
	plus: function (plus) { 
        val += plus;        
    	return calculator; 
	},
	minus: function (minus) { 
        val -= minus; 
        
		return calculator; 
	},
	multiply: function (mult) { 
        val *= mult; 
        
		return calculator; 
	},
	split: function (split) { 
        val /= split; 
        
		return calculator; 
	},
	pow: function (deg) { 
        val = Math.pow(val, deg); 
        
		return calculator; 
	},
	getVal: function () { 
		val = parseFloat(val.toFixed(2)); 
        console.log(val);       
		return calculator; 
	}
};
calculator.setVal(10).plus(5).minus(2).multiply(4).split(2).pow(2).getVal(); //676
