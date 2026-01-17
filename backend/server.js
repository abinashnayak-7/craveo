import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';

//app configuration
const app = express();
const port = process.env.PORT || 9000;


//middlewares
app.use(cors());
app.use(express.json());

//db connection
connectDB();


//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));



app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(port, ()=>{
    console.log(`Server is running on port: http://localhost:${port}`);
})