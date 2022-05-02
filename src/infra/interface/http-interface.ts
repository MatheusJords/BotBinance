import { HttpDTO } from '../dto/http-dto';
export interface HttpInterface {
    get<T>({path,headers}:HttpDTO):Promise<T>
}