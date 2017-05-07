import { FaqRoutesHandler } from './routesLogic/faqRoutesLogic';
import { SupportIssueLink, SupportIssue } from './../models';

import * as express from 'express'

import * as bodyParser from 'body-parser'
import * as path from 'path'
import * as csrf from 'csurf'


import { faqRouter } from "./routes/faqRoutes";




let app = express();
let csrfObj = csrf({ cookie: true });

console.log('hello');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// this.app.use(this.csrfObj)
// this.app.use((req, res, next) => {
//     var csrfToken = req.csrfToken();
//     res.locals._csrf = csrfToken;
//     res.cookie('XSRF-TOKEN', csrfToken);
//     console.log('XSRF-TOKEN ' + csrfToken);
//     next();
// });
// this.registerStatic();
let port: number = process.env.port || 3000;


app.use('/api/faq', faqRouter);
app.all('/*', (req, res) => {

    res.sendFile(path.resolve(__dirname + '/../index.html'));

    // res.render(path.join(__dirname + '/../index.html'));
});
// this.app.get('/', (req: core.Request, res: core.Response) => {
//     res.send('welcome')
// })

app.listen(port, () => {
    console.log(path.join(__dirname + '/../index.html'));
    console.log(`listening on port ${port}`);
})
class foo {
  

}

new FaqRoutesHandler();














