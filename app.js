const express = require('express');
var cors = require('cors')
const { spawn } = require('child_process');

const app = express();

app.use(cors())
app.use(express.json()) 

app.post('/run-python', express.raw(), (req, res) => {
  // **Validation and Sanitization (OMITTED for security reasons)**
  const pythonCode = req.body.code;

  console.log(`Code received: ${pythonCode}`);

  const pythonProcess = spawn('python3', ['-c', pythonCode]);

  pythonProcess.stdout.on('data', (data) => {
    res.send({output: data.toString()});
  });

  pythonProcess.stderr.on('data', (data) => {
    res.send({output: data.toString()});
  });

  pythonProcess.on('close', (code) => {
    console.log(`Python process exited with code ${code}`);
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
