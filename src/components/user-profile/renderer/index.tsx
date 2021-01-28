
import React from 'react';
import { baseApiUrl, callAPI } from '../../../common/CommonFunctions';

export class Renderer extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            id: '',
            name: '',
            contact_email: '',
            location: '',
            profession: '',
            page: 1,
            pageNum: 0,

        };

    }

    public async componentDidMount() {

        const id = this.getUrlId();
        let url = `${baseApiUrl}/users/${id}/profile`;
        const self = this;

        let api_call = fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        api_call.then((resp) => resp.json())
            .then(function (data) {
                self.setState({
                    name: data.profile.name,
                    id: data.profile.id,
                })
            }).catch((err) => {
                console.log("Api call error !!")
            });

        // await callAPI(url)
        //     .then(function (data) {
        //         self.setState({
        //             name: data.profile.name,
        //             id: data.profile.id
        //         })
        //     })

    }

    public getUrlId() {
        var urlParam = window.location.pathname.split("/").pop();
        return urlParam;
    }

    public render() {
        const url = `/pages/user-profile-worker/${this.state.id}`;

        return (
            <div className="well" >
                <div>
                    <a href={url}> {this.state.name} </a>
                </div>

            </div >
        );
    }
}

interface State {
    id: string;
    name: string;
    contact_email: string;
    location: string;
    profession: string;
    page: number;
    pageNum: number;
}



