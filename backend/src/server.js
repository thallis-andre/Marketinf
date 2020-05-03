const app = require("./app");
app.use(express.json());
app.listen(3333);

// catchAll 
app.use((error, request, response, next) =>{
    request.status(error.status) || 500)
    res.json({error: error.message})
});