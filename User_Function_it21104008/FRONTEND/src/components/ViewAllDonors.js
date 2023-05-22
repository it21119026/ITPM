import React, { useState, useEffect } from "react";
import axios from "axios";



export default function ViewAllUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        function getUsers() {
            axios.get("http://localhost:8070/donor").then((res) => {
                console.log(res.data);
                setUsers(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getUsers();

    }, [])
    return (
        <div>
            <br></br>
            <div className="container">
                <center>
                <div style={{ marginRight: "0px", marginLeft: "auto", width: "30%" }}>

                    <form class="d-flex" role="search">
                        <a style={{ marginRight: "0px", marginLeft: "10px" }} href="/users/AddDonor" >
                        <p class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-100 mb-100">Add Donors</p></a>
                        {/* <a style={{ marginRight: "0px", marginLeft: "10px" }} href="/users/search" >Search</a> */}
                    </form>
                </div>
                <br></br>
                <p class="text-4xl font-black text-gray-900 dark:text-white">LIST OF DONORS</p>
                <br></br>
                <table className="table table-borderless">
                    <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <th class="px-6 py-3">User ID</th>
                        <th class="px-6 py-3">User Name</th>
                        <th class="px-6 py-3">Email</th>
                        <th class="px-6 py-3">Contact</th>
                        <th class="px-6 py-3">NIC</th>
                        <th class="px-6 py-3">Address</th>
                    </tr>
                    <tbody>
                        {
                            users.map((user) => (
                                <>

                                    <tr>
                                        <td class="px-6 py-4">{user.user_id}</td>
                                        <td class="px-6 py-4">{user.user_name}</td>
                                        <td class="px-6 py-4">{user.email}</td>
                                        <td class="px-6 py-4">{user.contact}</td>
                                        <td class="px-6 py-4">{user.nic_number}</td>
                                        <td class="px-6 py-4">{user.address}</td>
                                        <td class="px-6 py-4"><button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={() => {
                                            window.location.replace(`http://localhost:3000/donor/get/${user._id}`);
                                        }}>View</button></td>
                                        <td><button class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                                         onClick={() => {
                                            window.location.replace(`http://localhost:3000/donor/update/${user._id}`);
                                        }}>Update</button></td>
                                        <td><button class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                         onClick={() => {
                                            window.location.replace(`http://localhost:3000/donor/delete/${user._id}`);
                                        }}>Delete</button></td>
                                    </tr>
                                </>
                            ))
                        }
                    </tbody>
                </table>
                </center>
            </div>
        </div>
    )



}