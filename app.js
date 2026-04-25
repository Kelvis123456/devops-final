const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo DevOps 🚀');
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
}
