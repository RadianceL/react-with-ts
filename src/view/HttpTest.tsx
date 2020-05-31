import React from "react";
import {HttpClient} from "../http/HttpClient";
import store from "../store/ApplicationCenterStore";

export class HttpTest extends React.Component<any, any> {

    public httpClient: HttpClient

    constructor(props: any) {
        super(props)
        this.state = store.getState()
        this.httpClient = new HttpClient();
        console.log(this.state)
    }

    public plusCount = () => {
        this.httpClient.getData("http://localhost:3000/mock.json").then((result) => {
            console.log(result)
        }, (error) => {
            console.error(error)
        })
    }

    public render(): React.ReactNode {
        return <div onClick={this.plusCount}>这里是UI</div>
    }
}