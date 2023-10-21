let countel= document.getElementById("count-el")
let saveel= document.getElementById("save-el")
let totalel=document.getElementById("total-el")
let count=0
let total=0
function increment(){
    
    
    count = count +1
    countel.innerText=count
    console.log(count)
}




function save(){
    
   
    let savevar= count + " - "
    saveel.innerText= saveel.innerText+" "+savevar
    
    console.log(count)
    let temp = count 
     countel.innerText=0
    count = 0 
    
        total+= parseInt(temp) + parseInt(count)
    
    totalel.innerText = "Total Entries: " + total
    // console.log(totalel.innerText, total)
    
}
