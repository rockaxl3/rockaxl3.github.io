"use strict";
window.onload = function()
{
    /////////////////////////////////////////////////////////////////////////////////////
    function initTextareaAutoExpand()
    {
        var ta = document.querySelectorAll("textarea");
    
        function update()
        {
            var initialHeight = ta[i].clientHeight - (parseFloat(getComputedStyle(ta[i]).paddingTop) + parseFloat(getComputedStyle(ta[i]).paddingBottom));
            return function()
            {
                this.style.height = initialHeight + "px";
                this.style.height = this.scrollHeight - (parseFloat(getComputedStyle(this).paddingTop) + parseFloat(getComputedStyle(this).paddingBottom)) + "px";
            }
        }
    
        for (var i = 0; i < ta.length; i++)
        {
            if (ta[i].clientHeight - (parseFloat(getComputedStyle(ta[i]).paddingTop) + parseFloat(getComputedStyle(ta[i]).paddingBottom)) < parseFloat(getComputedStyle(ta[i]).fontSize))
                ta[i].style.height = parseFloat(getComputedStyle(ta[i]).fontSize);
            ta[i].addEventListener("input", update());
            ta[i].addEventListener("cut", update());
            ta[i].addEventListener("paste", update());
            ta[i].dispatchEvent(new Event("input"));
        }
    }
    
    initTextareaAutoExpand();

    document.getElementById("textwork").addEventListener("submit", function(e)
    {
        e.preventDefault();
        var ta1 = document.getElementById("input"),
            ta2 = document.getElementById("output"),
            mode = +this.querySelector("input:checked").value;
        switch (mode)
        {
            case 1:
                ta2.value = ta1.value.replace(/\b[а-яa-z0-9]{5,}?\b/giu, "");
                window.open('', '_blank', 'width=720, height=480').document.write(ta2.value);
                break;
            case 2:
                var frequencyMatrix = [
                    [],
                    []
                ],
                    char = 228;
                for (var i = 0; i < ta1.value.length; i++)
                    !~frequencyMatrix[0].indexOf(ta1.value[i]) ? frequencyMatrix[0].push(ta1.value[i]) : void 0;
                for (i = 0; i < frequencyMatrix[0].length; i++)
                {
                    frequencyMatrix[1][i] = 0;
                    for (var j = 0; j < ta1.value.length; j++)
                        ta1.value[j] == frequencyMatrix[0][i] ? frequencyMatrix[1][i]++ : void 0;
                }
                char = frequencyMatrix[0][frequencyMatrix[1].indexOf(Math.max(...frequencyMatrix[1]))];
                ta2.value = ta1.value.replace(new RegExp(char, "giu"), "");
                window.open('', '_blank', 'width=720, height=480').document.write(ta2.value);
                break;
            case 3:
                ta2.value = ta1.value.replace(/\d/giu, "");
                window.open('', '_blank', 'width=720, height=480').document.write(ta2.value);
                break;
        }
    });

    ///////////////////////////////////////////////////////////////////////////// 

    for (var i = 0; i < document.querySelectorAll("#color input").length; i++)
    {
        document.querySelectorAll("#color input")[i].addEventListener("click", function()
        {
            document.body.style.backgroundImage = window.getComputedStyle(this).backgroundImage;
        });
    }

    /////////////////////////////////////////////////////////////////////////////    

    var title = document.getElementsByTagName("title")[0],
        kill = setInterval(function()
        {
            var date = new Date;
            title.textContent = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        }, 500);

    /////////////////////////////////////////////////////////////////////////////

    setInterval(function()
    {
        document.getElementById("autoscroll").scrollBy(0, 20);
    }, 1000);

    /////////////////////////////////////////////////////////////////////////////

    document.querySelector("#date input").addEventListener("click", function()
    {
        window.open('', '_blank', 'width=720, height=480').document.write(new Date);
    });

    /////////////////////////////////////////////////////////////////////////////

    document.getElementById("calc").addEventListener("submit", function(e)
    {
        e.preventDefault();
        var ta1 = document.getElementById("calcInput"),
            ta2 = document.getElementById("calcOutput");
        ta2.value = eval(ta1.value);
    });
};