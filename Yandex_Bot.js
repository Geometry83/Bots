// ==UserScript==
// @name         Yandex Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://napli.ru/*
// @icon         
// @grant        none
// ==/UserScript==

//let keywords =["гобой", "саксофон", "как звучит флейта"];
let keywords = ["вывод произвольных типов записей и полей в wordpress", "pods wordpress", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress"];


let btn = document.getElementsByClassName('button mini-suggest__button')[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];
let yandexInput = document.getElementsByName('text')[0];
let i = 0;


if (btn !== undefined){
	let timerId = setInterval(()=> {
		yandexInput.value += keyword[i];
		i++;
		if(i == keyword.length) {
			clearInterval(timerId);
			btn.click();
		}
	}, 100);

}else if(location.hostname == "napli.ru" ) {
	console.log("Мы на napli.ru");
	setTimeout(()=>{
		let index = getRandom(0,links.length);

		if(getRandom(0,101)>=70) {
			location.href = "https://yandex.ru/";
		}
		if(links[index].href.indexOf('napli.ru')!=-1)
			links[index].click();
	},getRandom(2000,3500));
}
else{



	let nextYandexPage = true;
	for(let i=0; i<links.length; i++) {
		//if(links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1) {
		if(links[i].href.indexOf('napli.ru')!=-1) {
			let link = links[i];
			nextYandexPage = false;
			console.log("Нашел фразу" + link);
			setTimeout(()=>{
				link.removeAttribute("target");
				link.click();},getRandom(1000,3000));
			break;
		}
	}


	if(document.querySelector('.pager__item_current_yes').textContent == "5") {
		nextYandexPage = false;

		location.href = "https://yandex.ru/";
	}


	if(document.querySelector('.pager__item_current_yes').textContent !== "5") {
		setTimeout(()=>{
			document.getElementsByClassName('pager__item_kind_next')[0].click();}
			,getRandom(4000,6000));
	}
}





function getRandom(min,max){
	return Math.floor(Math.random()*(max-min)+min);

}
