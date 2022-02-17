const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Library",
        version: "1.0.0",
        description: "A simple Express Library API"
      },
      components: {
        securitySchemes: {
          jwt: {
            type: "http",
            scheme: "bearer",
            in: "header",
            bearerFormat: "JWT"
          },
        }
      },
      servers: [
        {
          url: "http://localhost:3000"
        },
        {
            url: "http://api-prod.com"
          },
          {
            url: "http://localhost:3000"
          }
      ]
    },
    apis: ["./routes/*.js"],
    security: [{
      apikey: []
    }]
  };

module.exports = {
    options
}