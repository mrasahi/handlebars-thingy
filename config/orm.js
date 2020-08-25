const db = require('./connection')

db.query('SELECT * FROM groceries', (err, groceries) => {
    if (err) {console.log(err)}
    console.log(groceries)
})

const orm = {}

orm.create = (table, data, cb) => {
    db.query(`INSERT INTO ${table} SET ?`, data, (err, fields) => {
        if (err) {console.log(err)}
        cb(fields.inserted)
    })
}

orm.read = (table, cb) => {
    db.query(`SELECT * FROM ${table}`, (err, data) => {
        if (err) {console.log(err)}
        cb(data)
    })
}

orm.update = (table, update, where, cb) => {
    db.query(`UPDATE ${table} SET? WHERE ?`, [update, where], err => {
        if (err) {console.log(err)}
        cb()
    })
}

orm.delete = (table, where, cb) => {
    db.query(`DELETE FROM ${table} WHERE ?`, where, (err, data) => {
        if (err) {console.log(err)}
        cb()
    })
}