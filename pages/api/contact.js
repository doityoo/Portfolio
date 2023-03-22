// api/contact
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const mongodbURL = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.xt72lvo.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

    try {
      client = await MongoClient.connect(mongodbURL);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();
    let result;
    try {
      result = await db.collection('message').insertOne(newMessage);
      newMessage._id = result.insertedId;
      console.log(newMessage.id)
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed." });
      return;
    }

    client.close();

    res.status(200).json({ message: "Successfully sotred message!", message: newMessage });
  }
}

export default handler;