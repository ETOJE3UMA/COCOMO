//GLOBAL
let multiply = 1; 
let multWSCED = 1;
let sum = 0;
let SCED = 1;
let PMWsced = 1;
hideDisplay.style.display = "none";


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


function show() {
    tbl = document.getElementsByClassName('infoTable');
    
    tbl[0].style.display = "none";
    showDisplay.style.display = "none";
    hideDisplay.style.display = "block";
}

function hide() {
    tbl = document.getElementsByClassName('infoTable');
    
    tbl[0].style.display = "block";
    showDisplay.style.display = "block";
    hideDisplay.style.display = "none";
}

function ECalc() {
    sum = 0;
    for(let i = 1; i < 6; i = i + 1) {
		let sel = document.getElementById(`sel${i}`);
		let val = sel.options[sel.selectedIndex].value;
		
		sum += parseFloat(val);
	}

    let B = 0.91;
    Wsum.textContent = `Факторы масштаба: ${sum.toFixed(2)}`;
    return parseFloat(B + 0.01 * sum);
}

function TMCalc() {
    let sel = document.getElementById('sel12');
    let val = sel.options[sel.selectedIndex].value;
    SCED = parseFloat(val);

    let B = 0.91;
    let C = 3.67;
    let D = 0.28;
    return (SCED * C * Math.pow(PMWsced, D + 0.2 * (ECalc() - B))).toFixed(2);
}

function PMCalc(Size, ch) { //A - parametr
    multiply = 1;
    for(let i = 6; i < 23; i = i + 1) {
		let sel = document.getElementById(`sel${i}`);
		let val = sel.options[sel.selectedIndex].value;
		
		multiply *= parseFloat(val);
    }
    multWSCED = 1;
    for(let i = 6; i < 22; i = i + 1) {
		let sel = document.getElementById(`sel${i}`);
		let val = sel.options[sel.selectedIndex].value;
		
		multWSCED *= parseFloat(val);
	}

    let A;
    if(ch == 1) A = 2.94;
    if(ch == 2) A = 2.45;
    console.log(`E: ${ECalc()}`);
    Wmultiply.textContent = `Произведение атрибутов: ${multiply.toFixed(2)}`;
    console.log(`Произведение атрибутов: ${multiply.toFixed(2)}`);
	PMWsced = multWSCED * A * Math.pow(Size, ECalc());
    console.log(multiply * A * Math.pow(Size, ECalc()));
    return (multiply * A * Math.pow(Size, ECalc())).toFixed(2);
}

function clear() {
	resPM.textContent = "";
}

function main(ch) {
    clear();
    let Size = document.getElementById('r1').value;
    if (Size == 1) {
            resPM.insertAdjacentHTML("afterbegin", "Вы не выбрали количество строк"); 
        } else {
    resPM.insertAdjacentHTML("afterbegin", "<br/>"); 
    resPM.insertAdjacentHTML("afterbegin", " (время в мес.)");
	resPM.insertAdjacentHTML("afterbegin", PMCalc(Size, ch)); 
    resPM.insertAdjacentHTML("afterbegin", "PM = ");
    resPM.insertAdjacentHTML("afterbegin", "<br/>"); 
    resPM.insertAdjacentHTML("afterbegin", " (чел.*мес.)");
	resPM.insertAdjacentHTML("afterbegin", TMCalc()); 
	resPM.insertAdjacentHTML("afterbegin", "TM = ");
        }
}