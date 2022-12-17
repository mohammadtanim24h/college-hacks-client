import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const blog = useSelector((state) => state.blog.blog);
    const dispatch = useDispatch();
    return (
        <div className="p-3">
            <div>
                <img src={blog?.image} alt="" />
            </div>
            <p className="text-center text-3xl text-slate-700">{blog?.blogTitle}</p>
        </div>
    );
};

export default BlogDetails;
