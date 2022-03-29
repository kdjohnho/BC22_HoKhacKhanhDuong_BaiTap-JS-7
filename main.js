function getEle(id) {
	return document.getElementById(id);
}
// TẠO MẢNG
var numberList = [];

getEle("btnAddNum").onclick = function () {
	var num = getEle("inputValue").value * 1;

	getEle("showArray").innerHTML += num + " ";

	numberList.push(num);

	getEle("inputValue").value = "";
};

// CÂU 1: TỔNG CÁC SỐ DƯƠNG TRONG MẢNG
getEle("btnQ1").onclick = function () {
	var total = 0;

	for (var i = 0; i < numberList.length; i++) {
		if (numberList[i] > 0) {
			total += numberList[i];
		}
	}
	getEle("showResult1").innerHTML = total;
};

// CÂU 2: SỐ LƯỢNG CÁC SỐ DƯƠNG TRONG MẢNG
getEle("btnQ2").onclick = function () {
	var positiveCount = 0;

	for (var i = 0; i < numberList.length; i++) {
		if (numberList[i] > 0) {
			positiveCount++;
		}
	}
	getEle("showResult2").innerHTML = positiveCount;
};

// CÂU 3: SỐ NHỎ NHẤT TRONG MẢNG
getEle("btnQ3").onclick = function () {
	var min = numberList[0];

	for (var i = 1; i < numberList.length; i++) {
		if (numberList[i] < min) {
			min = numberList[i];
		}
	}
	getEle("showResult3").innerHTML = min;
};

// CÂU 4: SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
getEle("btnQ4").onclick = function () {
	var min = numberList[0];

	for (var i = 1; i < numberList.length; i++) {
		if (numberList[i] < min && numberList[i] > 0) {
			min = numberList[i];
		}
	}
	getEle("showResult4").innerHTML = min;
};

// CÂU 5: TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG
getEle("btnQ5").onclick = function () {
	var index = -1;

	for (var i = 0; i < numberList.length; i++) {
		if (numberList[i] % 2 === 0 && numberList[i] != 0) {
			index = i;
		}
	}

	if (index === -1) {
		getEle("showResult5").innerHTML = index;
	} else {
		getEle("showResult5").innerHTML = numberList[index];
	}
};

// CÂU 6: ĐỔI CHỖ 2 GIÁ TRỊ TRONG MẢNG
getEle("btnQ6").onclick = function () {
	var arrIndex1 = getEle("arrIndex1").value * 1;
	var arrIndex2 = getEle("arrIndex2").value * 1;
	var swapper = 0;

	swapper = numberList[arrIndex1];
	numberList[arrIndex1] = numberList[arrIndex2];
	numberList[arrIndex2] = swapper;

	getEle("showNewArray").innerHTML = numberList;
};

// CÂU 7: SẮP XẾP MẢNG TĂNG DÀN
getEle("btnQ7").onclick = function () {
	for (var i = 0; i < numberList.length - 1; i++) {
		for (var j = i + 1; j < numberList.length; j++) {
			var swapper;
			if (numberList[i] > numberList[j]) {
				swapper = numberList[i];
				numberList[i] = numberList[j];
				numberList[j] = swapper;
			}
		}
	}
	getEle("showResult7").innerHTML = numberList;
};

// CÂU 8: SỐ NGUYÊN TỐ ĐẦU TIÊN TRONG MẢNG
getEle("btnQ8").onclick = function () {
	var index = -1;

	for (var i = numberList.length - 1; i >= 0; i--) {
		if (!numberList[i] < 2) {
			if (numberList[i] === 2) {
				index = i;
			}
			for (var j = 2; j < numberList[i]; j++) {
				if (numberList[i] % j !== 0) {
					index = i;
				}
			}
		}
	}
	if (index === -1) {
		getEle("showResult8").innerHTML = index;
	} else {
		getEle("showResult8").innerHTML = numberList[index];
	}
};

// CÂU 9: TẠO MẢNG SỐ THỰC, ĐẾM SỐ NGUYÊN
var realNumberList = [];

getEle("btnAddReal").onclick = function () {
	var num = getEle("inputRealValue").value * 1;

	getEle("showRealArray").innerHTML += num + " ";

	realNumberList.push(num);

	getEle("inputRealValue").value = "";
};

// đếm số nguyên
getEle("btnQ9").onclick = function () {
	var count = 0;
	for (var i = 0; i < realNumberList.length; i++) {
		if (realNumberList[i] - parseInt(realNumberList[i]) === 0) {
			count++;
		}
	}
	getEle("showResult9").innerHTML = count;
};

// CÂU 10
getEle("btnQ10").onclick = function () {
	var positiveNum = positiveCount(realNumberList);
	var negativeNum = negativeCount(realNumberList);
	var result = " ";

	if (positiveNum === negativeNum) {
		result += "Bằng nhau";
	}
	if (positiveNum > negativeNum) {
		result += "Số dương";
	}
	if (positiveNum < negativeNum) {
		result += "Số âm";
	}
	getEle("showResult10").innerHTML = result;
};

function positiveCount(array) {
	var count = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] > 0) {
			count++;
		}
	}
	return count;
}

function negativeCount(array) {
	var count = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] < 0) {
			count++;
		}
	}
	return count;
}
