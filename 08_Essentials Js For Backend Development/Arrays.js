// alert("Asslamu Alaikum Brother.")

var arr=[1,2,3,4,5,6]

arr.forEach(function(val){
    console.log(val + " Set")
}) 

var new_arr=arr.map(function(val){
    return val**2
})
console.log(new_arr)

var ans=arr.filter(function(val){
    if(val>4){return true;}
    else return false;
})
console.log(ans)

