const app = require('../server')

const port = process.env.PORT || 3000

// Middlewares...
// Routes...
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.listen(port, () => console.log("Listening at port: " + port));
