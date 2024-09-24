let myPromise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([1,2,3,4])
        },3000)
    })

myPromise1.then((res)=>{
    //console.log(res)
   
    setTimeout(() => {
        let filter1 = []
   let oddNmbr =  res.map((data)=>{
    if(data%2!=0){
        filter1.push(data)
    }
    })
    //console.log(filter1)
    document.getElementById('output').innerHTML= `Odd numbers are >>>  ${filter1}`
    }, 1000);

    setTimeout(() => {
        //console.log("res2>>", res)
       let filter2= []
       let evenNumber = res.map((data)=>{
        if(data%2==0){
            filter2.push(data*2)
        }
       })
       document.getElementById('output').innerHTML = `even numbers after multiply by 2 >>> ${filter2}`
      // console.log(filter2)
    }, 3000);
  
})