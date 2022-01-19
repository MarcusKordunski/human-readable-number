module.exports = function toReadable(number) {
	let numberTranslate = {
		0: "zero",
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen",
		20: "twenty",
		30: "thirty",
		40: "forty",
		50: "fifty",
		60: "sixty",
		70: "seventy",
		80: "eighty",
		90: "ninety",
	}
	for (let key in numberTranslate) {
		if (String(number).length <= 2) {
			if ((number % 10 === 0) || ((number >= 0) && (number <= 19))) {
				if (number === Number(key)) {
					return numberTranslate[key]
				}
			}
		}
	}
	let res = ""
	let flagRes = false
	for (let key in numberTranslate) {
		if (String(number).length <= 2) {
			if ((number - (number % 10)) === Number(key)) {
				res = `${res}${numberTranslate[key]}`
			}
		}
	}
	for (let key in numberTranslate) {
		if (String(number).length <= 2) {
			if (number % 10 === Number(key)) {
				res = `${res} ${numberTranslate[key]}`
				flagRes = true
			}
		}
	}
	if (flagRes === true) {
		return res}
		else{res = ''}
	for (let key in numberTranslate) {
		if (String(number).length === 3) {
			if (Math.floor(number/100) === Number(key)) {
				res = `${res}${numberTranslate[key]} hundred`
			}
		}
	}
	let numberAA = number % 100
	if (number % 100 === 0) {
		return res}

	for (let key in numberTranslate) {
		if (String(numberAA).length === 1) {
			if (numberAA === Number(key)) {
				res = `${res} ${numberTranslate[key]}`
				flagRes = true
			}
		}
	}
	if (flagRes === true) {
		return res}

	for (let key in numberTranslate) {
		if (String(numberAA).length === 2) {
			if (numberAA === Number(key)){
				res = `${res} ${numberTranslate[key]}`
				flagRes = true
			}
		}
	}
	if (flagRes === true) {
		return res
	}
	for (let key in numberTranslate) {
		if (String(numberAA).length === 2) {
			if ((numberAA - (numberAA % 10) === Number(key))){
				res = `${res} ${numberTranslate[key]}`
			}
		}
	}
	for (let key in numberTranslate) {
		if (String(numberAA).length === 2) {
			if (numberAA % 10 > 0) {
				if ((numberAA > 20) && ((numberAA % 10) != 0))
					if (numberAA % 10 === Number(key)) {
						res = `${res} ${numberTranslate[key]}`
						flagRes = true
					}
			}	
		}
	}
	if (flagRes === true) {
		return res
	}
}

