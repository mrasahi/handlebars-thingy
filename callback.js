const adder = (a, b, cb) => {
    const sum = a + b
    cb(sum) 
}


const calc = (a, op, b, cb) => {
    switch (op) {
        case '+':
        case 'add':
            cb(a + b)
            break
        case '-':
            cb(a - b)
            break
        case '*':
            cb(a * b)
            break
        case '/':
            cb(a / b)
            break
    }
}

calc(5, '/', 0, result => {
    console.log(result)
})
