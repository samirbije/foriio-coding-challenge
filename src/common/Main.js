import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserList } from '../components/users-list';
import { UserProfile } from '../components/user-profile';
import { UserProfileWorker } from '../components/user-profile-worker';


const Main = () => (
    <main>
        <Switch>
            <Route path='/pages/users' component={UserList} />
            <Route path='/pages/user-profile/:id' component={UserProfile} />
            <Route path='/pages/user-profile-worker/:id' component={UserProfileWorker} />

        </Switch>
    </main>
)

export default Main;