import {AxiosInstance} from 'axios';
import {Interceptors} from "./Interceptors";

export class HttpClient {

    public axios: AxiosInstance

    constructor() {
        this.axios = new Interceptors().getInterceptors();
    }

    public getData(url: string) {
        return new Promise((resolve, reject) => {
            this.axios.get(url, null).then((res) => {
                this.resultHandle(res, resolve);
            }).catch((err) => {
                reject(err.message)
            })
        });
    }

    public resultHandle(res: any, resolve) {
        resolve(res.data);
    }

}
