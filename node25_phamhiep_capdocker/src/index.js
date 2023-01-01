const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static("."));
const cors = require('cors');
app.use(cors());
app.listen(3600);
const rootRouter = require('./routers/index');
app.use("/root",rootRouter);
