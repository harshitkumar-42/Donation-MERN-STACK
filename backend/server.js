import app from "./index.js"

app.listen(process.env.PORT, () => {
    console.log("Server running at port number ", process.env.PORT);
})