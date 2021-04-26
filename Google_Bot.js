let keywords =["вывод произвольных полей wordpress", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress"];
//document.getElementsByName('q')[0].value="10 самых популярных шрифтов от Google";
let btnK = document.getElementsByName('btnK')[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];


if (btnK !== undefined){
	document.getElementsByName('q')[0].value=keyword;
	document.getElementsByName('btnK')[0].click();
}else{
	for (let i=0; i<links.length; i++){
		if(links[i].href.indexOf('napli.ru')!=-1){
			let link = links[i];
			console.log("Нашел фразу"+link);
			link.click();
			break;

		}
	}
}

function getRandom(min,max){
return Math.floor(Math.random()*(max-min)+min);

}
