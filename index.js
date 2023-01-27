import express from "express";
import cors from "cors"
import { getAllDoc, postDoc, findDoc, deleteDoc } from "./src/functions.js"

const PORT = process.env.PORT

const app = express()
app.use( express.json() )
app.use( cors() )

// Get: Root
app.get("/", (req,res) => res.send(`Mongo API: i am root`))
// Get : Get All
app.get("/getall", getAllDoc)
// Get : Search
app.get("/search/:searchParam", findDoc)
// Post : Add
app.post("/post", postDoc)
// Delete : By Id
app.delete("/delete/:docid", deleteDoc)

app.listen(PORT, () => console.log(`Listening on http://localhost${PORT}`))
