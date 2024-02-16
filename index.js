import express from "express";
import dbContext from "./database/mariadb.js";

const PORT = 3000;
const app = express();

app.get("/", async (req, res) => {

    try {
        await dbContext.query(
            "INSERT INTO product (name) VALUES (?)", 'test2'
        );

        console.log("Data inserted successfully!");
        res.status(200).json("ok");

    } catch (err) {
        console.error("Error inserting data:", err);
        res.status(500).json("fail");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
