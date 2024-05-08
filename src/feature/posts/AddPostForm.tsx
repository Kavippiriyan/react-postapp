import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { AddPost } from "./postSlice";
import './Form.css'
import { selectAllUsers } from "../users/UserSlice";

interface User {
    id: string;
    name: string;
  }

const AddPostForm = () => {

    const dispatch = useDispatch()
    const users: User[] = useSelector(selectAllUsers);

    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const ontitlechange = (e: any) => settitle(e.target.value)
    const oncontentchange = (e: any) => setcontent(e.target.value)
    const [userid, setuserid] = useState('')

    const onauthorchange = (e: any) => setuserid(e.target.value)
    const savePost = (e: any) => {
        e.preventDefault();
        if (title && content) {
            dispatch(
                AddPost(title, content, userid)
            );
            settitle('');
            setcontent('');
        }
    }
    const useroptions = users.map((user:any)=>
        <option key={user.id}value={user.id}>{user.name}</option>
    )

    return (
        <div className="form-container">

            <form action="">

                <label >Post Title</label>
                <input type="text" value={title} onChange={ontitlechange} />
                <label>Author</label>
                <select id="" value={userid} onChange={onauthorchange}>
                    <option value=''>
                        {useroptions}
                    </option>
                </select>
                <label >Content</label>
                <input type="text" value={content} onChange={oncontentchange} />
                <button type="submit" onClick={savePost}>Save Post</button>
            </form>

        </div>
    )
}

export default AddPostForm