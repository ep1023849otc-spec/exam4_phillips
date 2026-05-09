const express = require("express");

const app = express();



app.use(express.json());

app.use(express.static("public"));

app.get("/api/course", (req, res) => {
    res.json({ message: "CIS 131 - Exam 4" });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})


app.get("/api/pets", (req, res) => {
    const pets = [
        { id: 1, type: "dog", name: "Diesel" },
        { id: 2, type: "cat", name: "Milo" },
        { id: 3, type: "bird", name: "Sky" },
    ];
});

app.get("/api/pets/search", (req, res) => {
    const searchName = req.query.name;
    const searchType = req.query.type;

    const pets = [
        { id: 1, type: "dog", name: "Diesel" },
        { id: 2, type: "cat", name: "Milo" },
        { id: 3, type: "bird", name: "Sky" }
    ];

    const results = pets.filter (i => i.name.toLowerCase().includes(searchName.toLowerCase(), searchType.toLowerCase())
);
 res.json(results);

});

//adjusting something to try and make git work