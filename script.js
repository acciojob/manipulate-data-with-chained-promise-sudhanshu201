
function myPromise(arr){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(arr)
		},3000)
	})
}

function filter(arr){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let filteredNmbr = []
			arr.map((item)=>{
			if(item%2!=0){
				filteredNmbr.push(item)
			}
		})
			resolve(filteredNmbr)
		},1000)
	})
}

function even(arr){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let evenTowTimes = []
		arr.map((item)=>{
			if(item%2==0){
				evenTowTimes.push(item*2)
			}
		})
			resolve(evenTowTimes)
		},2000)
	})
}

let array = [1,2,3,4]
let output = document.getElementById("output")

myPromise(array).then((res)=>{
    console.log(res)
    output.innerHTML = `<p> Original Array is : ${res}`
	return filter(array)
    
}).then((res)=>{
    console.log(res)
		output.innerHTML += `<p>Odd numbers Are: ${res}`
	return even(array)
}).then((res)=>{
    console.log(res)
	output.innerHTML += `<p>Even Numbers are : ${res}`
})





