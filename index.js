import express from 'express';
import { validationResult } from 'express-validator';
import requestsLogger from './requestsLogger.js';
import { userValidators } from './userValidators.js'

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    requestsLogger(req.method, req.path);
    next();
    }
);

const currentBirds = [];

app.get('/birds', (req, res) => {
    console.log();
    res.json({ message: `Birds gotten successfully`, birds: currentBirds });
})

app.post('/birds', userValidators, (req, res) => {

    console.log(req.body);

    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.status(400);
        res.json({
            errors: result.errors.map(e => e.msg)
        });
        return;
    }

    currentBirds.push(req.body);
    
    res.json({message: "posted successfully", body: req.body});

    }
)

app.listen(3011, () => {
    console.log('App listening to bird watchers')
})