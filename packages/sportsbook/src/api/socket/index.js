import { io } from 'socket.io-client';
import { initialDataListener, updateListener } from './socket.listeners';

export function openSocket() {
  try {
    const socket = io(process.env.REACT_APP_SOCKET_URL, {
      transports: ['websocket'],
    });

    socket.on('initial-data', initialDataListener);

    socket.on('update-data', updateListener);

    return socket;
  } catch (error) {
    console.log('socket connection error: ', error);
  }
}
