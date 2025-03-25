document.getElementById("btn").addEventListener("click", function () {
    const inputValue = Number(document.getElementById("ip").value);
    const outputDiv = document.getElementById("output");

    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.textContent = Result: ${inputValue};
            resolve(inputValue);
        }, 2000);
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num * 2;
                outputDiv.textContent = Result: ${result};
                resolve(result);
            }, 2000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num - 3;
                outputDiv.textContent = Result: ${result};
                resolve(result);
            }, 1000);
        });
    })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num / 2;
                outputDiv.textContent = Result: ${result};
                resolve(result);
            }, 1000);
        });
 })
    .then((num) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = num + 10;
                outputDiv.textContent = Final Result: ${result};
                resolve(result);
            }, 1000);
        });
    });
});