window.onload = function(){

  let  aa=  document.getElementById("bouton1")
 let   ab = document.getElementById("oui")
 let ad = document.getElementById("bouton2")
 let date = document.getElementById("date")
 let mega = document.getElementById("mega")
 let i = null
 let e = 1
 let z = 0 
 let CLICK = 0
 let megaprice = 100
 let secprice = 50
 
 
   console.log(aa)
   console.log(ab)
   console.log(mega)
   

   aa.addEventListener("click", () => {
    i += 1
    console.log(z)
    ab.innerHTML = i
    ab.style.paddingTop = "3px"
    if (e > 1){
        i += (CLICK * CLICK) -1
        ab.innerHTML = i 
    }
    if (z == 1){
        i += (CLICK * CLICK) 
        ab.innerHTML = i 
    }
    
}); 


mega.addEventListener("click", () => {
    if (i >= megaprice ){
        i = i - megaprice
        ab.innerHTML = i 
        e++
        z= z+ 1
        CLICK++
        console.log(CLICK)
        megaprice = megaprice * 2
        mega.innerHTML = "MEGA CLICKER (x2 click) cost " + megaprice
    }
   
}); 

    
    ad.addEventListener("click", () => {
        console.log(i)
        // i++
        // ab.innerHTML = i
        // ab.style.paddingTop = "3px"
        if (i > secprice){
            i = i - secprice 
            ab.innerHTML = i 
            const timeID = setInterval(unsec, 1000);
            
            function unsec() {
                i +=1
                ab.innerHTML= i
            }
            secprice = secprice *1.5
            ad.innerHTML = "1 / s (cost " + secprice +")"
        //    console.log("ah oui")
           
        }
    }); 
    const timeID = setInterval(timeAndDate, 1000);

function timeAndDate() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    date.innerHTML = (("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2))
}



    
}
