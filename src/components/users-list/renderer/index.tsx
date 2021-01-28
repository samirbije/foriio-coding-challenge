
import React from 'react';
import { baseApiUrl, callAPI } from '../../../common/CommonFunctions';


export class Renderer extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            users: [],
            page: 1,
            pageNum: 0,

        };

    }

    public async componentDidMount() {

        let url = `${baseApiUrl}/promoted/users`;
        const self = this;

        callAPI(url)
            .then(function (data) {
                let userList = data.users;
                self.setState({
                    users: userList

                })
            })

    }

    public render() {
        var newData = this.state.users;

        let per_page = 500;
        const pages = newData && newData.length && Math.ceil(this.state.users.length / per_page);
        const current_page = this.state.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;
        return (
            <div className="well">
                <table id="userTable" className="table table-bordered table-stripped results">
                    <tbody>

                        {newData && newData.length > 0 ? newData.map((item, idx) => {
                            if (idx >= start_offset && start_count < per_page) {
                                start_count++;
                                const url = `/pages/user-profile/${item.screen_name}`;
                                return (
                                    <tr>
                                        <td>
                                            <div>
                                                <a href={url}> {item.name} </a>
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
    users: User[];
    page: number;
    pageNum: number;
}

interface User {
    id: number;
    screen_name: string;
    name: string;
    profession: string;
}
