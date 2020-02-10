import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';
import AsyncStorage from '@react-native-community/async-storage';
const rest = require('@feathersjs/rest-client');

const URL = 'https://api.crianzaysalud.com.co';

export const client = feathers();

const restClient = rest(URL);

client.configure(restClient.fetch(fetch));
client.configure(
  auth({
    storage: AsyncStorage,
    storageKey: 'accessToken',
  }),
);
