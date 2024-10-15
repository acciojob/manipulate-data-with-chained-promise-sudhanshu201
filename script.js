
function myPromise(arr){
	returm new Promise((resolve,reject)=>{
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
				evenTowTimes.push(item)
			}
		})
			resolve(evenTowTimes)
		},2000)
	})
}

let array = [1,2,3,4]
let op = document.getElementById("output").innerHTML

myPromise(array).then((res)=>{
	return filter(array)
}).then((res)=>{
		op = res
	return even(array)
}).then((res)=>{
	op = res
})





