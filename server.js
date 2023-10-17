const express = require("express");
const app = express();
const port = 3001;
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const blogPostRoutes = require("./routes/blogRoutes");

app.use(express.json());
app.use(userRoutes);
app.use(authRoutes);
app.use(blogPostRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));