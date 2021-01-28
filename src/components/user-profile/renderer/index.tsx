
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
            works: [],
            page: 1,
            pageNum: 0,
        };

    }

    public async componentDidMount() {

        const id = this.getUrlId();
        let url = `${baseApiUrl}/users/${id}/profile`;
        const self = this;

        callAPI(url)
            .then(function (data) {
                self.setState({
                    name: data.profile.name,
                    id: data.profile.id,
                    contact_email: data.profile.contact_email,
                    profession: data.profile.profession,
                    location: data.profile.location,
                })
            })
        this.callUsersWorks(id);

    }

    public callUsersWorks = (id: any) => {
        let url = `${baseApiUrl}/users/${id}/works`;
        const self = this;

        callAPI(url)
            .then(function (data) {
                self.setState({
                    works: data.works
                })
            })
    }

    public getUrlId = () => {
        var urlParam = window.location.pathname.split("/").pop();
        return urlParam;
    }

    public render() {
        var newData = this.state.works;

        let per_page = 500;
        const pages = newData && newData.length && Math.ceil(this.state.works.length / per_page);
        const current_page = this.state.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;

        return (
            <div className="well" >
                <div>
                    Name : {this.state.name}
                </div>
                <div>
                    Email : {this.state.contact_email}
                </div>
                <div>
                    Location : {this.state.location}
                </div>
                <div>
                    Profession : {this.state.profession}
                </div>
                <br />
                <div>
                    {this.state.name} Work
                </div>
                <br />
                <table id="userTable" className="table table-bordered table-stripped results">
                    <tbody>

                        {newData && newData.length > 0 ? newData.map((item, idx) => {
                            if (idx >= start_offset && start_count < per_page) {
                                start_count++;
                                const url = `/pages/user-profile-worker/${item.id}`;
                                return (
                                    <tr>
                                        <td>
                                            <div>
                                                {item.title}
                                                <a href={url}> <img src={item.thumbnail} /></a>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        })
                            : null}
                    </tbody>
                </table>

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
    works: Worrk[];
    page: number;
    pageNum: number;
}

interface Worrk {
    id: number;
    title: string;
    published_at: string;
    thumbnail: string;
    category_list: string;
    user_roles: string;

}


