export type HttpDTO = {
    path:string,
    body?:any,
    headers?:{
        [key:string]:string
    }
}