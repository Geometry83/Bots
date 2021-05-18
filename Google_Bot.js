// ==UserScript==
// @name         Bot for Google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  My first bot
// @author       Me
// @match        https://www.google.com/*
// @match        https://napli.ru/*
// @match        https://psyholog.me/*
// @icon         
// @grant        none
// ==/UserScript==


let sites = {
	"napli.ru":["10 самых популярных шрифтов от Google",
				"Отключение редакций и ревизий в WordPress",
				"Вывод произвольных типов записей и полей в WordPress"],
	"psyholog.me":["центр здоровых отношений",
				   "Услуги центра здоровых отношений",
				   "Чекалина Елена психолог"]
};

let site = Object.keys(sites)[getRandom(0, Object.keys(sites).length)];

let keywords = sites[site];



//document.getElementsByName('q')[0].value="10 самых популярных шрифтов от Google";
let btnK = document.getElementsByName('btnK')[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];
let googleInput = document.getElementsByName('q')[0];
//let pnnext = document.getElementsById('pnnext')[0]
let i=0;


if (btnK !== undefined){
	document.cookie = `site=${site}`;

}else if (location.hostname == "www.google.com"){
	site = getCookie("site");
}else {
	site = location.hostname;
}



if (btnK !== undefined){
	document.cookie = `site=${site}`;

	let timerId = setInterval(function(){
		googleInput.value += keyword[i];
		i++;
		if(i == keyword.length){
			clearInterval(timerId);
			btnK.click();
		}
	}, 200);


	//document.getElementsByName('q')[0].value=keyword;

}else if(location.hostname == site){
	console.log("Мы на napli.ru");
	setTimeout(()=>{

		let index = getRandom(0,links.length);
		if (getRandom(0,101)>=70) {
			location.href = "https://www.google.com/";
		}else{
			location.href = "https://yandex.ru/";
		}

		if (links[index].href.indexOf(site)!=-1)
			links[index].click();
	},getRandom(1500,3500));



}else{
	let nextGooglePage = true;
	for (let i=0; i<links.length; i++){
		if(links[i].href.indexOf(site)!=-1){
			let link = links[i];
			//let nextGooglePage = false;
			nextGooglePage = false;
			console.log("Нашел фразу"+link);

			setTimeout(()=>{
				link.click();
			}, getRandom(1000,4500));
			break;

		}
	}

	if(document.querySelector('.YyVfkd').innerText == "5"){
		nextGooglePage = false;
		location.href = "https://www.google.com/";
	}



	//if(nextGooglePage){
	if(document.querySelector('.YyVfkd').innerText !== "5"){

		setTimeout(()=>{
			pnnext.click();}
				   , getRandom(3000,5000));
	}
}

function getRandom(min,max){
	return Math.floor(Math.random()*(max-min)+min);

}

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
