alert("так как вариантов предоставлено не было, был сверстан лендинг по макету из интернета\n.psd файл приложен\nреализовано всё из списка доп. задач кроме редизайна");

addEventListener("resize", function(){
	cond = innerWidth;
	if (cond > 1280)
	{
		list.style.display = "flex";
	}
	if (cond <= 1280)
	{
		list.style.display = "none";
	}
});

var list = document.querySelector("nav ul");

menu.addEventListener("click", function(e)
{
	e.preventDefault();
	if (list.style.display == "flex")
		list.style.display = "none";
	else
		list.style.display = "flex";
});

//////////////////////////////////////////////////////////////////////////////////////////////

for (var i = 0; i < document.querySelectorAll("[href^='#']").length; i++)
{
	document.querySelectorAll("[href^='#']")[i].addEventListener("click", function(e){
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: 'smooth', block: "start"});
	});
}

addEventListener("load", function()
{
	if (pageYOffset >= innerHeight / 2)
		lift.style.display = "inline-block";
});

addEventListener("scroll", function(){
	if (pageYOffset >= innerHeight / 2)
		lift.style.display = "inline-block";
	else
		lift.style.display = "none";
});

//////////////////////////////////////////////////////////////////////////////////////////////

var laneLength;

addEventListener("load", function()
{
	lane.style.left = "-200%";
	laneLength = document.querySelectorAll("#carousel #lane .demo").length * 100;
	lane.style.width = laneLength + "%";
	for (i = 0; i < document.querySelectorAll("#carousel #lane .demo").length; i++)
		document.querySelectorAll("#carousel #lane .demo")[i].style.display = "inline-block";
});

for (i = 0; i < document.getElementsByClassName("arrow").length; i++)
{
	document.getElementsByClassName("arrow")[i].addEventListener("click", function(){
		if (this == larrow)
		{
			if (parseInt(lane.style.left) + 100 > 0)
			{
				lane.style.transition = "left 1s ease";
				lane.style.left = "-" + (laneLength - 100) + "%";
				setTimeout('lane.style.transition = "left 0.5s ease"', 1000);
			}
			else
				lane.style.left = parseInt(lane.style.left) + 100 + "%";
		}
		if (this == rarrow)
		{
			if (parseInt(lane.style.left) - 100 < -(laneLength - 100))
			{
				lane.style.transition = "left 1s ease";
				lane.style.left = "0%";
				setTimeout('lane.style.transition = "left 0.5s ease"', 1000);
			}
			else
				lane.style.left = parseInt(lane.style.left) - 100 + "%";
		}
	});
}

//////////////////////////////////////////////////////////////////////////////////////////////

for (i = 0; i < document.getElementsByClassName("openable").length; i++)
{
	document.getElementsByClassName("openable")[i].addEventListener("click", function(){
		show(this.getAttribute("src"));
	});
}

modal.addEventListener("click", function(e)
{
	if (e.target === this)
	{
		this.innerHTML = '';
		modal.style.zIndex = -100;
	}
});

function show(src)
{
	var img = document.createElement("img");
	img.setAttribute("src", src);
	modal.appendChild(img);
	modal.style.zIndex = 100;
}

//////////////////////////////////////////////////////////////////////////////////////////////

var nameField 		= document.querySelector("#name > input"),
	nameFieldAst	= document.querySelector("#name > p > span");

nameField.addEventListener("input", function()
	{
		if (this.value !== "")
			nameFieldAst.style.display = "none";
		else
			nameFieldAst.style.display = "inline";
	});

var emailField 		= document.querySelector("#email > input"),
	emailFieldAst	= document.querySelector("#email > p > span");

emailField.addEventListener("input", function()
	{
		if (this.value !== "")
			emailFieldAst.style.display = "none";
		else
			emailFieldAst.style.display = "inline";
	});

var messageField 	= document.querySelector("#message > textarea"),
	messageFieldAst	= document.querySelector("#message > p > span");

messageField.addEventListener("input", function()
	{
		if (this.value !== "")
			messageFieldAst.style.display = "none";
		else
			messageFieldAst.style.display = "inline";
	});

//////////////////////////////////////////////////////////////////////////////////////////////

$(document).on('resize focus change keyup keydown paste cut', 'textarea', function(){
		var scroll = window.pageYOffset;
	   	$(this).height(0).height(this.scrollHeight - 16);
	   	window.scrollTo(0, scroll);
	}).find('textarea').change();
