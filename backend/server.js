import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());

mongoose
  .connect("mongodb+srv://admin:Swatantra25@moviehub.f4qxd.mongodb.net/shopet")
  .then(() => {
    console.log("DB connected");
  });

const FoodSchema = new mongoose.Schema({
    id: Number,
    name: String,
    img: String,
    price: Number,
    rating:Number
  });

const Foods = mongoose.model("foods", FoodSchema);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/food", (req, res) => {
    Foods.find().then((movies) => {
      res.json(movies);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});