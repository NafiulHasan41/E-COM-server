const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

// for mongodb connection
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// port selection 
const port = process.env.PORT || 4000;

// middleware
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
  }
  app.use(cors(corsOptions));
  app.use(express.json());

//   mongodb connection uri 

  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dsubcfq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// connecting to the database
async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
    //   await client.connect();
    const userCollection = client.db("productsDB").collection("Products");

      


      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    //   await client.close();
    }
  }
  run().catch(console.dir);

// checking the connection

app.get('/', (req, res) => {
    res.send('E-com working')
})

app.listen(port, () => {

    console.log(`E-COM is working on port ${port}`);
})