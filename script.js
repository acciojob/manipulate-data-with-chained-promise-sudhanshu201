function manipulateData(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  });
}

manipulateData([1, 2, 3, 4])
  .then((array) => {
    const filteredArray = array.filter((num) => num % 2 === 0);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filteredArray);
      }, 1000);
    });
  })
  .then((filteredArray) => {
    const multipliedArray = filteredArray.map((num) => num * 2);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(multipliedArray);
      }, 2000);
    });
  })
  .then((multipliedArray) => {
    const output = document.getElementById("output");
    output.textContent = multipliedArray.join(", ");
  });
