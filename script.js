function array(arr){
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(arr)
        }, 500);
    })
}

let promise1 = (dataFromPromise1)=>{
   return new Promise((resolve,reject)=>{
        let odd = []
        setTimeout(() => {
            dataFromPromise1.map((res)=>{
                if(res%2!=0){
                    odd.push(res)
                }
            })
            resolve(odd)
        }, 500);
    })
}

let promise2 = (dataFromPromise1)=>{
  return  new Promise((resolve,reject)=>{
        let even = []
        setTimeout(() => {
            dataFromPromise1.map((res)=>{
                if(res%2==0){
                    even.push(res*2)
                }
            })
            resolve(even)
        }, 500);
    })
}

array([1,2,3,4]).then((res)=>{
    document.getElementById("output").innerHTML=`<h1>Given Array is>>> ${res}</h1>`
   // console.log(res)
   return promise1(res)
}).then((res2)=>{
   // console.log(res2)
   document.getElementById("output").innerHTML += `<h3>odd elements from the array are >>> ${res2}</h3>`
   return promise2([1,2,3,4])
}).then((res)=>{
   // console.log(res)
   document.getElementById("output").innerHTML+=`<h3>Even elements after multiply by 2 from the array are >>> ${res}</h3>`
}).catch((err) => {
    console.error("Error:", err);
});