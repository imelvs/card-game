// Import configured Express application
const app = require('./app');

// Setting port number for the server
const PORT = 3001;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message when the server successfully starts
  console.log(`[SERVER] Started - Port ${PORT}`);
});
