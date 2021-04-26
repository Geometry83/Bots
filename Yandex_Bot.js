// ==UserScript==
// @name         Yandex Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @icon         
// @grant        none
// ==/UserScript==

let keywords =["гобой", "саксофон", "как звучит флейта"];
//document.getElementsByName('q')[0].value="10 самых популярных шрифтов от Google";
let btnK = document.getElementsByClassName('button mini-suggest__button')[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];


if (btnK !== undefined){
	document.getElementsByName('text')[0].value=keyword;
	document.getElementsByClassName('button mini-suggest__button')[0].click();
}else{
	for (let i=0; i<links.length; i++){
		if(links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
			let link = links[i];
			console.log("Нашел фразу"+link);
			link.removeAttribute("target");
			link.click();
			break;

		}
	}
}

function getRandom(min,max){
return Math.floor(Math.random()*(max-min)+min);

}




//Ссылка на сайт xn----7sbab5aqcbiddtdj1e1g.xn--p1ai
// Ключевые слова для массива гобой, саксофон, как звучит флейта
