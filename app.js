const express = require('express');
// nosemgrep: javascript.express.security.audit.express-check-csurf-middleware-usage.express-check-csurf-middleware-usage -- only a static GET, no cookies, sessions or state-changing routes
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo DevOps 🚀');
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
}
