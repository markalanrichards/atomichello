import express from 'express';
import {Request, Response} from "express-serve-static-core";
import {Server} from 'net';

export default (port: number) => new Promise<Server>(resolve => {
        const expressInstance = express();

        let newVar = (req: Request, res: Response) => res.send(`<html><body><div id="app"></div><script type="text/javascript" src="/js/webapp.js"></script></body></html>`);
    expressInstance.use('/js', express.static('webpack'));
    expressInstance.get('/*', newVar)

        const server = expressInstance.listen(port, () => {
                server.address().port
                resolve(server)
        })
    }
);

