import React, { useState } from "react";
import User from "./tables/User";
import AddUser from "./forms/AddUser";
import EditUser from "./forms/EditUser";

const App = () => {
    const initial = { id: null, name: "", username: "" };

    const userData = [
        { id: 1, name: "Happy", username: "happy" },
        { id: 2, name: "Happy 2", username: "happy2" },
        { id: 3, name: "Happy 3", username: "happy3" }
    ];

    const [users, setUsers] = useState(userData);

    const [editing, setEditing] = useState(false);

    const [currentUser, setCurrentUser] = useState(initial);

    const addUser = user => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };

    const editUser = user => {
        setEditing(true);
        setCurrentUser({
            id: user.id,
            name: user.name,
            username: user.username
        });
    };

    const updateUser = (id, updateUser) => {
        setEditing(false);
        setUsers(users.map(user => (user.id === id ? updateUser : user)));
    };

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="container">
            <h1>CRUD with React Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2>Edit User</h2>
                            <EditUser
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUser addUser={addUser} />
                        </div>
                    )}
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <User
                        users={users}
                        editUser={editUser}
                        deleteUser={deleteUser}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
