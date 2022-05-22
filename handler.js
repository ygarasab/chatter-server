const WebSocket = require('ws');
let count = 0
/**
 * @param {WebSocket.Server} ws
 * @param {WebSocket.WebSocket} socket
 */
const onConnect = (ws, socket) => {

	console.log('Alguém acaba de conectar')
	socket.send('Ta conectado meu querido')

	id = count++
	socket.on('message', message => {
		message = message.toString()
		ws.clients.forEach(client => client.send(JSON.stringify({id, message})))
	})
}


module.exports = {onConnect}
