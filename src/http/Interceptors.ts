import axios, {AxiosInstance} from 'axios';

export class Interceptors {

    public instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({timeout: 1000 * 12})
        this.initInterceptors();
    }

    public getInterceptors() {
        return this.instance;
    }

    public initInterceptors(){

    }

}