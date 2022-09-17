import cors from 'cors';
import express from 'express';
import http from 'http';
import socket from 'socket.io';

import 'express-async-errors';

const app = express();
const server = http.createServer(app);
const io = new socket.Server(server, {
  cors: { origin: process.env.APP_WEB_URL },
});

async function ignition(): Promise<void> {
  // Basic Configurations
  app.use(cors({ origin: process.env.APP_WEB_URL }));
  app.use(express.json());
}

ignition();

export { server, io };
