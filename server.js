const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.get('/test', (req, res) => {
  res.render('test')
})

const movies = [
    {
        title: 'Shrek',
        plot: 'the first'
    },
    {
        title: 'Shrek 2',
        plot: '222'
    },
    {
        title: 'Shrek III',
        plot: 'The third'
    }
]

app.get('/games', (req, res) => {
    res.render('games')
})

app.get('/movies', (req, res) => {
    res.render('movies', movies)
})

app.get('/songs', (req, res) => {
    res.render('songs')
})

app.listen(3000)