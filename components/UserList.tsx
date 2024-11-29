import { fetchUsers } from "@/utils/actions";
import React from "react";

async function UserList() {
    const users = await fetchUsers();
    return (
        <div
            className="mt4
    "
        >
            {users.length ? (
                <div>
                    {users.map((user) => {
                        return (
                            <h4 key={user.id} className="capitalize text-lg">
                                {`${user.firstName} ${user.lastName}`}
                            </h4>
                        );
                    })}
                </div>
            ) : (
                <p>No users found...</p>
            )}
        </div>
    );
}

export default UserList;
