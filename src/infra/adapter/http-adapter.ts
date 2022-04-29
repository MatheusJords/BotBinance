import { HttpDTO } from '../dto/http-dto';
import { AxiosStatic } from 'axios';
import { env } from '../../main/config/env';


export class HttpAdapter {
    private http:AxiosStatic

    constructor(private baseUrl?:string){
        if(this.baseUrl){
            this.http.create({
                baseURL: this.baseUrl
            })
        }else{
            this.http.create({
                baseURL: env.api.url
            })
        }
    }

    async get<T>({path,headers}:HttpDTO):Promise<T>{
        const { data } = await this.http.get(path,{
            headers
        })
        return data
    }


}