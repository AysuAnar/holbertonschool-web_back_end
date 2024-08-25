const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    }
};

const {
    name,
    age,
    address: { street, city, country, postalCode = '00000' }
} = person;
console.log('Ad:', name);
console.log('Yaş:', age);
console.log('Küçə:', street);
console.log('Şəhər:', city);
console.log('Ölkə:', country);
console.log('Poçt Kodu:', postalCode);