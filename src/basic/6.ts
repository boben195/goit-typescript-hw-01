type UsesInfo = {
    name: string,
    age: number,
    email: string,
    address?: Address
}
type Address = {
    city: string,
    country: string
}

const mango: UsesInfo = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly: UsesInfo = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};

export {}