import { run } from 'probot';
import { app } from './app';

run(app).then((server) => {
  server.router('/').get('/', (req, res) => {
    res.send('Hello World! Github app server is working!');
  });
});
