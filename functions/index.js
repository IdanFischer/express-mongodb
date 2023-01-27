import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { getAllDoc, postDoc, findDoc, deleteDoc } from "./src/functions.js"

// for Localhost
// const PORT = process.env.PORT

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

// for localhost
// app.listen(PORT, () => console.log(`Listening on http://localhost${PORT}`))

// for GCP
export const api = functions.https.onRequest( app )

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
