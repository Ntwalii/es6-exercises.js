function dotest(seconds){
    let years,days,minutes,hours,remainingSeconds;
    let yearPlaceholder=years===1?"year":"years"
    
        if(seconds===0){
            return `now`
        }
        else if(seconds===3600){
            return "1 hour"
        }
        else if(seconds===86400){
            return "1 day"
        }
        else if(seconds===31536000){
            return "1 year"
        }
        else{
            if(seconds>=31536000){
            years=Math.floor(seconds/31536000);
            remainingSeconds=seconds%31536000;
                if(remainingSeconds>=86400){
                    days=Math.floor(remainingSeconds/86400);
                    remainingSeconds=remainingSeconds%86400;
                    if(remainingSeconds>=3600){
                        hours=Math.floor(remainingSeconds/3600)
                        remainingSeconds=remainingSeconds%3600;
                        if(remainingSeconds>=60){
                            minutes=Math.floor(remainingSeconds/60);
                            remainingSeconds=remainingSeconds%60;
                        }
                    }
                }   
    
                return `${years===0?"":`${years} ${years===1?"year":"years"}`}${hours===0?"and":", "}${days===0?"":`${days} ${days===1?"day":"days"}`}${minutes===0?"and":","} ${hours===0?"":`${hours} ${hours===1?"hour":"hours"}`}${remainingSeconds===0?" and":","} ${minutes===0?"":`${minutes} ${minutes===1?"minute":"minutes"}`} ${remainingSeconds===0?"":`and ${remainingSeconds} ${seconds===1?"second":"seconds"}`}`
            }
            else if(seconds>=86400){
                days=Math.floor(seconds/86400);
                remainingSeconds=seconds%86400;
                if(remainingSeconds>=3600){
                    hours=Math.floor(remainingSeconds/3600)
                    remainingSeconds=remainingSeconds%3600;
                    if(remainingSeconds>=60){
                        minutes=Math.floor(remainingSeconds/60);
                        remainingSeconds=remainingSeconds%60;
                    }
            }       
            return `${days===0?"":`${days} ${days===1?"day":"days"}`}${minutes===0?" and":","} ${hours===0?"":`${hours} ${hours===1?"hour":"hours"}`}${remainingSeconds===0?" and":","} ${minutes===0?"":`${minutes} ${minutes===1?"minute":"minutes"}`}${remainingSeconds===0?"":` and ${remainingSeconds} ${remainingSeconds===1?"second":"seconds"}`}`
               }   
        else if(seconds>=3600){
                hours=Math.floor(seconds/3600)
                remainingSeconds=seconds%3600;
                if(remainingSeconds>=60){
                    minutes=Math.floor(remainingSeconds/60);
                    remainingSeconds=remainingSeconds%60;
                }
              return `${hours===0?"":`${hours} ${hours===1?"hour":"hours"}`}${remainingSeconds===0?" and":","} ${minutes===0?"":`${minutes} ${minutes===1?"minute":"minutes"}`}${remainingSeconds===0?"":` and ${remainingSeconds} ${remainingSeconds===1?"second":"seconds"}`}`
               }
        else if(seconds>=60){
                minutes=Math.floor(seconds/60);
                remainingSeconds=seconds%60;
            
               return `${minutes===0?"":`${minutes} ${minutes===1?"minute":"minutes"}`}${remainingSeconds===0?"":` and ${remainingSeconds} ${remainingSeconds===1?"second":"seconds"}`}`
            }
        else {
            return `${seconds===0?"":`${seconds} ${seconds===1?"second":"seconds"}`}`
        }}
    
    }
    

console.log(dotest(1));
console.log(dotest(62));
console.log(dotest(120));
console.log(dotest(3600));
console.log(dotest(3662));
console.log(dotest(15731080) )
console.log(dotest(132030240) )
console.log(dotest(205851834) )
console.log(dotest(253374061) )
console.log(dotest(242062374) )
console.log(dotest(101956166) )
console.log(dotest(3371470) )