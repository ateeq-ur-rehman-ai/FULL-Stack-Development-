// let a=[1,2,4,5,5];
// for(let i=0;i<a.length;i++){
//     const element = a[i];
//     console.log(a[i]);
// }

let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key]; 
        console.log(key, element)
    }
}