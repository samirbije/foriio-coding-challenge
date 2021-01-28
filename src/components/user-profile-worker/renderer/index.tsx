
import React from 'react';
import { baseApiUrl, callAPI } from '../../../common/CommonFunctions';


export class Renderer extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            id: '',
            title: '',
            description: '',
            thumbnail: '',
            published_at: ''

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
                    description: data.work.description,
                    published_at: data.work.published_at,
                    thumbnail: data.work.thumbnail
                })
            })

    }

    public getUrlId = () => {
        var urlParam = window.location.pathname.split("/").pop();
        return urlParam;
    }

    public render() {

        return (
            <div className="well">
                <div>
                    Title :   {this.state.title}
                </div>
                <div>
                    Description :   {this.state.description}
                </div>
                <div>
                    Published :   {this.state.published_at}
                </div>
                <div>
                    <img src={this.state.thumbnail} />
                </div>

            </div >
        );
    }
}

interface State {
    id: string;
    title: string;
    description: string;
    published_at: string;
    thumbnail: string
}




