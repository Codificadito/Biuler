const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT_EXPRESS || 3000;

//Middleware.
app.use(express.json());

//Servir archivos estáticos desde la raíz del proyecto (fuera de la carpeta "backend").
app.use(express.static(path.join(__dirname, '..')));

//Rutas del backend.
app.use('/api', apiRoutes);

//Servir la Single Page Application ('index.html' en la carpeta raíz del proyecto).
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`.bgGreen);
});
