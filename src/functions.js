import { dbConnect } from "./dbConnect.js"


const COLLECTION_NAME = process.env.COLLECTION_NAME

// Get : All
export async function getAllDoc(req, res) {
    const db = dbConnect()
    const collection = await db.collection(COLLECTION_NAME).find({}).limit(10).toArray()

    console.table(collection)
    res.send(collection)
}

// Get : Search
export async function findDoc(req, res) {
    const { searchParam } = req.params

    const db = dbConnect()

    const collection = await db.collection(COLLECTION_NAME)
        .find( {ip_address: searchParam} )
        .toArray()

    console.table(collection)
    res.send(collection)
}

// Post: Doc
export async function postDoc(req, res) {
    const newDoc = req.body
    // id":1,"first_name":"joseph","last_name":"Joestar","email":"jojostar@gmail.com","gender":"Male","ip_address":"162.20.62.203"

    const db = dbConnect()
    const collection = await db.collection(COLLECTION_NAME).insertOne(newDoc)
        .catch(err => {
            res.status(500).send(err)
            return
        })
        console.log(collection)
        res.status(201).send( {message: 'New Doc Status'})
}

// Delete
export async function deleteDoc(req, res) {
    const { docId } = req.params

    const db = dbConnect()
    const collection = await db.collection(COLLECTION_NAME).deleteOne({ docId })

    console.table(collection)
    res.send(collection)
}

