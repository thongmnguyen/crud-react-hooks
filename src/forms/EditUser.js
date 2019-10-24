import React, { useState, useEffect } from "react";

const EditUser = props => {
    const [user, setUser] = useState(props.currentUser);

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.updateUser(user.id, user);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
            />
            <label htmlFor="username">UserName</label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
            />
            <button>Update user</button>
            <button
                className="button muted-button"
                onClick={() => props.setEditing(false)}
            >
                Cancel
            </button>
        </form>
    );
};

export default EditUser;
