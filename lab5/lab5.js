'use strict';

var screenWidth         = window.innerWidth,
    screenHeight        = window.innerHeight,
    snowflakeSizes      = ['s1', 's2', 's3', 's4'],
    snowflakeMaxAmount  = 40,
    snowflakeAppearance = '❆',
    snowflakes          = [],
    i;

function rand(min, max)
{
    return Math.random() * (max - min) + min;
}

function randInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function Snowflake()
{
    var sf = document.createElement('i');
    sf.addEventListener('click', function()
    {
        if (this.classList.contains('s4'))
        {
            this.setAttribute('class', 's2 c');
            this.innerText = '❄️';
            this.style.left = parseFloat(this.style.left) + this.x + 'px';
            this.x = 0;
            this.style.transform = `translate(${this.x}px, ${this.y}px)`;
            this.sinArg = 0;
            
            var sft = document.createElement('i');
            sft.setAttribute('class', 's2 temp');
            sft.innerText = '❄️';
            sft.style.left = this.style.left;
            sft.x = 0;
            sft.y = this.y;
            sft.sinArg = 0;
            sft.style.transform = `translate(${sft.x}px, ${sft.y}px)`;
            snowflakes.push(sft);
            document.body.append(sft);
        }
    });
    sf.setAttribute('class', snowflakeSizes[randInt(0, snowflakeSizes.length)]);
    sf.innerText = snowflakeAppearance;
    sf.style.left = rand(0, screenWidth) + 'px';
    sf.x = 0;
    sf.y = 0;
    sf.sinArg = rand(-Math.PI, Math.PI);

    return sf;
}

function init()
{
    for (i = 0; i < snowflakeMaxAmount; i++)
    {
        var sf = new Snowflake;
        sf.y = rand(0, screenHeight);
        sf.style.transform = `translate(${sf.x}px, ${sf.y}px)`;
        snowflakes.push(sf);
        document.body.append(sf);
    }
    setInterval(snowfallLoop, 50);
}

function snowfallLoop()
{
    for (i = 0; i < snowflakes.length; i++)
    {
        if (snowflakes[i].y >= screenHeight + 20)
        {
            if (snowflakes[i].classList.contains('temp'))
            {
                snowflakes[i].remove();
                snowflakes.splice(i, 1);
                continue;
            }
            if (snowflakes[i].innerText == '❄️')
                snowflakes[i].innerText = snowflakeAppearance;

            snowflakes[i].setAttribute('class', snowflakeSizes[randInt(0, snowflakeSizes.length)]);    
            snowflakes[i].style.left = rand(0, screenWidth) + 'px';
            snowflakes[i].x = 0;
            snowflakes[i].y = 0;
            snowflakes[i].sinArg = rand(-Math.PI, Math.PI);
            continue;
        }
        
        if (snowflakes[i].innerText == '❄️')
        {
            if (snowflakes[i].classList.contains('temp'))
                snowflakes[i].x = Math.sin(snowflakes[i].sinArg -= 0.05) * 40;
            else
                snowflakes[i].x = Math.sin(snowflakes[i].sinArg += 0.05) * 40;
            snowflakes[i].y += 4;
        }
        else
        {
            snowflakes[i].x = Math.sin(snowflakes[i].sinArg += 0.05) * 20;
            snowflakes[i].y += 2; 
        }
        snowflakes[i].style.transform = `translate(${snowflakes[i].x}px, ${snowflakes[i].y}px)`;
    }
}


alert('при клике на большие снежинки они делятся на 2 маленькие');
init();