// async function getdata(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve(455)
//         } , 3500);
//     })
// }

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getdata() {
  let res = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
  let data = await res.json(); 
  console.log(data);
  return 455
}


async function main() {
    console.log("Loading Modules.")

    console.log("Loading Data.")

    let data= getdata()

    console.log(data)

    console.log("Process Data.")
    
}

main()

// data.then((v)=>{
// console.log(data)
// console.log("Process Data.")
// })