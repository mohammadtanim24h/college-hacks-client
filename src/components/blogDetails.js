import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearBlogData } from "../redux/actions/blogActions";
import GET_BLOG_DETAILS from "../redux/thunk/blogs/getBlogDetails";

const BlogDetails = () => {
    const { id } = useParams();
    const blog = useSelector((state) => state.blog.blog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GET_BLOG_DETAILS(id));
        return () => dispatch(clearBlogData("view"));
    }, [id]);

    return (
        <div className="p-3">
            <div>
                <img src={blog?.image} alt="" />
            </div>
            <p className="text-center text-3xl text-slate-700">
                {blog?.blogTitle}
            </p>
        </div>
    );
};

export default BlogDetails;
