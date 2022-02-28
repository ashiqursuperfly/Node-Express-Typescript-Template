import express, {Application, Request, Response, NextFunction} from 'express';
import {generateRandomPassword} from './utils';


const PORT = process.env.PORT? process.env.PORT: 5000;

// console.log(process.env);

const app: Application = express();

function responseModel() {
    return {
        'data': {},
        'message': 'success'
    }
}

app.get('/', (request: Request, response: Response, next: NextFunction) => {
    var model = responseModel();
    model.data = 'Express is Working';
    response.status(200).send(model)
})

app.get('/password', (request: Request, response: Response, next: NextFunction) => {
    var model = responseModel();
    const len = request.query.length ? parseInt(request.query.length.toString(), 10): 7;
    model.data = generateRandomPassword(len);
    response.status(200).send(model)
})


app.listen(PORT, () => {
    console.log(`Server Running at Port ${PORT}`)
})