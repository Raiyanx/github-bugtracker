const backendURL = "http://localhost:8000/"

export async function getUser(data) {
  const response = await fetch(backendURL + "user/?" + new URLSearchParams(data), {
    method: "GET",
    headers: { "Content-type": "application/json" },
    credentials: 'include'
  })
  return response.json()
}

export async function postUser(data) {
  const response = await fetch(backendURL + "user/", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
    credentials: 'include'
  })
  return response.json()
}

export async function getProjects(data) {
  const response = await fetch(backendURL + "user/projects/?" + new URLSearchParams(data), {
    method: "GET",
    headers: { "Content-type": "application/json" },
    credentials: 'include'
  })
  return response.json()
}

export async function postProject(data) {
  const response = await fetch(backendURL + "user/projects/", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
    credentials: 'include'
  })
  return response.json()
}


// ----------Code for mongodb
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const dbname = processs.env.DBNAME
// const uri = process.env.DBPASS

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db(dbname).command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);