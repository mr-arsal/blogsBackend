const express = require("express");
const app = express();
const port = 3001;
const userRoutes = require("./src/blogs/routes");

app.use(express.json());
app.use(userRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));