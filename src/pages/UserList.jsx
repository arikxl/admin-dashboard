import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons'

import { usersRows } from '../data';
import { Link } from 'react-router-dom';


const UserList = () => {

    const [data, setData] = useState(usersRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="user-list-user flex align-center">
                        <img src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 200,
        },
        {

            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="user-list-edit">Edit</button>
                        </Link>
                        <DeleteOutline className="user-list-delete"
                            onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];



    return (
        // <div className="flex column testt">
            // <div className="user-title-container flex align-center space-between ">
            //     <h1 className="user-title">Edit User</h1>
            //     <Link to="/newUser">
            //         <button className="user-add-btn">Create</button>
            //     </Link>
            // </div>
            <div className="user-list">
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        // </div>
    )
}

export default UserList
