require('dotenv').config()
const PORT = process.env.PORT
const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./db/connect')
const authRoutes = require('./routes/authRoutes')

app.use(cors())

app.use(express.json())

app.use('/auth', authRoutes)
app.get('/', (req, res) => {
  res.json('hello')
})

app.post('/register', (req, res) => {
  console.log(req.body)
  res.json({ msg: 'registrando', user: req.body })
})

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log('Database OK')
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}
start()
