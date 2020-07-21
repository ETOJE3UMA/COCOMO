//2.1.1 ready	

//GLOBAL
let multiply = 1;
let ch = 0;


function TMCalc(c, d, PM) {
	return (c * Math.pow(PM, d)).toFixed(1);
}

function PMCalc(a, b, Size) {
	return (a * Math.pow(Size, b)).toFixed(1);
}

function PM2Calc(a, b, Size) {
	for(let i = 1; i < 16; i = i + 1) {
		let sel = document.getElementById(`sel${i}`);
		let val = sel.options[sel.selectedIndex].value;
		
		multiply *= val;
		
		console.log(`Значение: ${val}; Коэффициент: ${multiply}`);
	}

	return (multiply * a * Math.pow(Size, b)).toFixed(1);
}

function InitStartValue() {
let rng = document.getElementById('r1'); //rng - это Input
rng.value = rng.min;
showR1();
}

function showR1() {
	let rng = document.getElementById('r1'); //rng - это Input
	let p = document.getElementById('one'); // p - абзац
    if (rng.value == 1) {
        p.innerHTML = " Вы не выбрали количество строк";
    } else {
        p.innerHTML = rng.value + " тыс. строк.";
    }
	
}
 
function clear() {
	resPM.textContent = "";
}

function main(choice) {
	clear();
    let Size = document.getElementById('r1').value;
	let PM;
	let TM;
	let arr1 = [
		[2.4, 1.05, 2.5, 0.38], //common
		[3, 1.12, 2.5, 0.35], //semicommon
		[3.6, 1.2, 2.5, 0.32], //integrate
	];

	switch(choice) {
		case 1: 
		a = arr1[0][0]; b = arr1[0][1]; c = arr1[0][2]; d = arr1[0][3]; 
		console.log(PMCalc(a, b, Size)); 
		PM = PMCalc(a, b, Size); 
		console.log(TMCalc(c, d, PM));
        if (Size == 1) {
            resPM.insertAdjacentHTML("afterbegin", "Вы не выбрали количество строк"); 
        } else {
            
            resPM.insertAdjacentHTML("afterbegin", "<p>Распространенный</p>"); 
		    resPM.insertAdjacentHTML("afterbegin", "<br/><br/>"); 
            resPM.insertAdjacentHTML("afterbegin", " (время в мес.)"); 
		    resPM.insertAdjacentHTML("afterbegin", TMCalc(c, d, PM)); 
		    resPM.insertAdjacentHTML("afterbegin", "TM = ");
		    resPM.insertAdjacentHTML("afterbegin", "<br/>"); 
            resPM.insertAdjacentHTML("afterbegin", " (чел.*мес.)"); 
		    resPM.insertAdjacentHTML("afterbegin", PMCalc(a, b, Size));
		    resPM.insertAdjacentHTML("afterbegin", "PM = ");
        }
		
		break; //common ver.

		case 2: a = arr1[1][0]; b = arr1[1][1]; c = arr1[1][2]; d = arr1[1][3]; 
		console.log(PMCalc(a, b, Size)); 
		PM = PMCalc(a, b, Size); 
		console.log(TMCalc(c, d, PM));
        if (Size == 1) {
            resPM.insertAdjacentHTML("afterbegin", "Вы не выбрали количество строк"); 
        } else {
            resPM.insertAdjacentHTML("afterbegin", "<p>Полунезависимый</p>");
            
		    resPM.insertAdjacentHTML("afterbegin", "<br/><br/>");
            resPM.insertAdjacentHTML("afterbegin", " (время в мес.)"); 
		    resPM.insertAdjacentHTML("afterbegin", TMCalc(c, d, PM)); 
		    resPM.insertAdjacentHTML("afterbegin", "TM = ");
		    resPM.insertAdjacentHTML("afterbegin", "<br/>"); 
            resPM.insertAdjacentHTML("afterbegin", " (чел.*мес.)"); 
		    resPM.insertAdjacentHTML("afterbegin", PMCalc(a, b, Size)); 
		    resPM.insertAdjacentHTML("afterbegin", "PM = ");
        }
		break; //semicommon ver.

		case 3: a = arr1[2][0]; b = arr1[2][1]; c = arr1[2][2]; d = arr1[2][3]; 
		console.log(PMCalc(a, b, Size)); 
		PM = PMCalc(a, b, Size); 
		console.log(TMCalc(c, d, PM)); 
        if (Size == 1) {
            resPM.insertAdjacentHTML("afterbegin", "Вы не выбрали количество строк"); 
        } else {
            resPM.insertAdjacentHTML("afterbegin", "<p>Встроенный</p>");
		    resPM.insertAdjacentHTML("afterbegin", "<br/><br/>");
            resPM.insertAdjacentHTML("afterbegin", " (время в мес.)");
		    resPM.insertAdjacentHTML("afterbegin", TMCalc(c, d, PM)); 
		    resPM.insertAdjacentHTML("afterbegin", "TM = ");
		    resPM.insertAdjacentHTML("afterbegin", "<br/>"); 
            resPM.insertAdjacentHTML("afterbegin", " (чел.*мес.)"); 
		    resPM.insertAdjacentHTML("afterbegin", PMCalc(a, b, Size)); 
		    resPM.insertAdjacentHTML("afterbegin", "PM = ");
        }
		
		break; //integrate ver.
	}
}

	function coreCalc(choice) {
		clear();
		let Size = document.getElementById('r1').value;
		let PM;
		let TM;
		let arr2 = [
			[3.2, 1.05, 2.5, 0.38], //common
			[3, 1.12, 2.5, 0.35], //semicommon
			[2.8, 1.2, 2.5, 0.32], //integrate
		];

		switch(choice) {
			case 1: 
			a = arr2[0][0]; b = arr2[0][1]; c = arr2[0][2]; d = arr2[0][3]; 
			PM = PM2Calc(a, b, Size); multiply = 1;
            if (Size == 1) {
                resPM.insertAdjacentHTML("afterbegin", "Вы не выбрали количество строк"); 
            } else {
                resPM.insertAdjacentHTML("afterbegin", "<p>Распространенный</p>");
                
			    resPM.insertAdjacentHTML("afterbegin", "<br/><br/>"); 
                resPM.insertAdjacentHTML("afterbegin", " (время в мес.)"); 
			    resPM.insertAdjacentHTML("afterbegin", TMCalc(c, d, PM)); 
			    resPM.insertAdjacentHTML("afterbegin", "TM = ");
			    resPM.insertAdjacentHTML("afterbegin", "<br/>"); 
                resPM.insertAdjacentHTML("afterbegin", " (чел.*мес.)"); 
			    resPM.insertAdjacentHTML("afterbegin", PM2Calc(a, b, Size)); multiply = 1;
			    resPM.insertAdjacentHTML("afterbegin", "PM = ");
            }
			
			break; //common ver.
	
			case 2: 
			a = arr2[1][0]; b = arr2[1][1]; c = arr2[1][2]; d = arr2[1][3]; 
			PM = PM2Calc(a, b, Size); multiply = 1;
			if (Size == 1) {
                resPM.insertAdjacentHTML("afterbegin", "Вы не выбрали количество строк"); 
            } else {
                resPM.insertAdjacentHTML("afterbegin", "<p>Полунезависимый</p>");
                
			    resPM.insertAdjacentHTML("afterbegin", "<br/><br/>"); 
                resPM.insertAdjacentHTML("afterbegin", " (время в мес.)");
			    resPM.insertAdjacentHTML("afterbegin", TMCalc(c, d, PM)); 
			    resPM.insertAdjacentHTML("afterbegin", "TM = ");
			    resPM.insertAdjacentHTML("afterbegin", "<br/>"); 
                resPM.insertAdjacentHTML("afterbegin", " (чел.*мес.)"); 
			    resPM.insertAdjacentHTML("afterbegin", PM2Calc(a, b, Size)); multiply = 1;
			    resPM.insertAdjacentHTML("afterbegin", "PM = ");
            }
			break; //semicommon ver.
	
			case 3: 
			a = arr2[2][0]; b = arr2[2][1]; c = arr2[2][2]; d = arr2[2][3]; 
			PM = PM2Calc(a, b, Size); multiply = 1;
			if (Size == 1) {
                resPM.insertAdjacentHTML("afterbegin", "Вы не выбрали количество строк"); 
            } else {
                resPM.insertAdjacentHTML("afterbegin", "<p>Встроенный</p>");
                
			    resPM.insertAdjacentHTML("afterbegin", "<br/><br/>"); 
                resPM.insertAdjacentHTML("afterbegin", " (время в мес.)");
			    resPM.insertAdjacentHTML("afterbegin", TMCalc(c, d, PM)); 
			    resPM.insertAdjacentHTML("afterbegin", "TM = ");
			    resPM.insertAdjacentHTML("afterbegin", "<br/>"); 
                resPM.insertAdjacentHTML("afterbegin", " (чел.*мес.)");
			    resPM.insertAdjacentHTML("afterbegin", PM2Calc(a, b, Size)); multiply = 1;
			    resPM.insertAdjacentHTML("afterbegin", "PM = ");
            }
			break; //integrate ver.
		}
	}

	function core2Calc() {
		let A1 = 2.94;
		let A2 = 2.45;
		let B = 0.91;
	}

main();