import React, { useState } from "react";

const AddUser = props => {
    const initial = { id: null, name: "", username: "" };

    const [user, setUser] = useState(initial);

    const hanleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initial);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={hanleInputChange}
            />

            <label htmlFor="username">UserName</label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={hanleInputChange}
            />
            <button>Add new user</button>
        </form>
    );
};
export default AddUser;
