const address = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

// Display address information

const displayAddressInfo = addressObject => {
    let addressInfo = `O usuário mora em ${address.cidade} / ${address.uf}, na rua \"${address.rua}\" com nº ${address.numero}`

    return addressInfo
};


const displayEvenInRange = (from, to) => {
    let evenNumbers = [];

    // Verify even numbers
    for (let i = from; i <= to; i++) {
        if (i % 2 === 0 ) {evenNumbers.push(i)}
    };

    // Display values
    for (even of evenNumbers) {
        console.log(even);
    }
};

displayEvenInRange(1,9);