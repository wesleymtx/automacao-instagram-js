
let  likes = 0;
let intervalTime = 15000;
function heartClick(){
        intervalTime = 10000;
        intervalTime += Math.random()*20000;
        intervalHeart = Math.random()*3000+2000;
        intervalArrow = Math.random()*4000+5001;

        console.log(intervalTime); 
        const heart = document.querySelector('svg[aria-label="Gosto"]').parentNode; 
        const arrow = document.querySelector('svg[aria-label="Seguinte"]').parentNode; 

        setTimeout(function(){
                heart.click();
                likes++;
                console.log("like num: "+likes+" IntervalHeart: "+intervalHeart)
        }, intervalHeart)
        
        setTimeout(function(){
                arrow.click();
                console.log("Invervalo da arrow: "+intervalArrow)
        }, intervalArrow)
}

setInterval(heartClick, intervalTime);
