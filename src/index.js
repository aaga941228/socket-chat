const express = require('express')
const SocketIo = require('socket.io')
const path = require('path')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.static(path.resolve(__dirname, '../public')))

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})
