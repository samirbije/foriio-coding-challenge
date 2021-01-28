
import React from 'react';
import { baseApiUrl, callAPI } from '../../../common/CommonFunctions';


export class Renderer extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            id: '',
            title: '',
            description: ''

        };

    }

    public async componentDidMount() {

        const id = this.getUrlId();
        let url = `${baseApiUrl}/works//${id}`;
        const self = this;

        callAPI(url)
            .then(function (data) {
                self.setState({
                    title: data.work.title,
                    id: data.work.id,
                    description: data.work.description
                })
            })


        // const id = this.getUrlId();
        // let url = `https://api.foriio.com/api/v1/works/${id}`;
        // const self = this;


        // let api_call = fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // });

        // api_call.then((resp) => resp.json())
        //     .then(function (data) {
        //         self.setState({
        //             title: data.work.title,
        //             id: data.work.id,
        //             description: data.work.description
        //         })
        //     }).catch((err) => {
        //         console.log("Api call error !!")
        //     });
    }

    public getUrlId() {
        var urlParam = window.location.pathname.split("/").pop();
        return urlParam;
    }

    public render() {

        return (
            <div className="well">
                <div>
                    Title :   {this.state.title}
                    description :   {this.state.description}
                </div>

            </div >
        );
    }
}

interface State {
    id: string;
    title: string;
    description: string;
}




