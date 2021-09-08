const http = require('http');
const students = require('./3-read_file_async');
const pathCSV = process.argv.slice(2)[0];
const port = 1245;

const app = http.createServer(async (req, res) => {
    const { url } = req;
    if (url === '/') {
      res.write('Hello Holberton School!');
      res.end();
    }
    if (url === '/students') {
      const arrStudents = await students(pathCSV);
      res.write('This is the list of our students\n');
      res.end(`${arrStudents}`);
    }
  });

app.listen(port);

module.exports = app;
