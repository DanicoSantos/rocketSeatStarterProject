
// axios.get('https://api.github.com/users/danicosantos')
//     .then(response => console.log(response))
//     .catch(function (error) { console.warn(error) });


// #04 module

const ageCheck = age => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => resolve(), 2000);
        } else {
            setTimeout(() => reject(), 2000);
        }
    });
}

ageCheck(20)
    .then(() => console.log("Maior que 18"))
    .catch(() => console.log("Menor que 18"));