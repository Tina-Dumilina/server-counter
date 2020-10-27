const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'));

const counter = {
  counter: 0
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/api/counter', (req, res) => {
  res.json(counter)
})

app.post('/api/counter', (req, res) => {
  counter.counter += 1
  res.json(counter)
})

app.delete('/api/counter', (req, res) => {
  counter.counter = 0
  res.json(counter)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
