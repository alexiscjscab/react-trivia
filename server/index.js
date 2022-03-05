const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/index');
const routerScore = require('./routes/scores');
app.name = 'APP';

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', router);
app.use('/scores', routerScore);

app.listen(4000, () => {
    console.log('Server is running 4000');
})