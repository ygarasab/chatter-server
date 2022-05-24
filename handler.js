const WebSocket = require('ws')
let count = 0
/**
 * @param {WebSocket.Server} ws
 * @param {WebSocket.WebSocket} socket
 */
const onConnect = (ws, socket) => {

	console.log('Alguém acaba de conectar')
	socket.send('Ta conectado meu querido')

	const id = count++

	socket.on('message', message => {
		message = message.toString()

		if (message === '') {
			const newId = id
			message = `Welcome! You are user ${newId}.`

			ws.clients.forEach(client => {
				if (client === socket) client.send(JSON.stringify({newId, message}))
			})

			return
		}

		ws.clients.forEach(client => {
			if (client !== socket) client.send(message)
		})
	})
}

module.exports = {onConnect}
