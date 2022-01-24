const app = require('../server')

const port = process.env.PORT || 3000

// Middlewares...
// Routes...

app.listen(port, () => console.log("Listening at port: " + port));
