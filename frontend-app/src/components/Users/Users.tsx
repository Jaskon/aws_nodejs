import React, { useEffect, useState } from 'react';
import { getUsers } from '../../api/core';
import { User } from '../../../../model/User';

function Users() {
    const [ users, setUsers ] = useState<Array<User>>([]);

    useEffect(() => {
        getUsers().then(res => setUsers(res.data));
    }, []);

    return <>
        <div>
            Users list (testing async):
        </div>
        <div className={'m-bt-2'}>
            { Object.values(users).map((user) =>
                <div key={user.id}>
                    { user.name } { user.surname }
                </div>
            ) }
        </div>
    </>;
}

export default Users;
