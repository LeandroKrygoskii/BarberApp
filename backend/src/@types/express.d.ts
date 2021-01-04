declare namespace Express {
    export interface Request {
        userId : number;
        name : string;
        token : string;
    }
}