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
        <div className="flex flex-col lg:flex-row gap-5 mx-5 my-2 p-3 shadow-md">
            <div className="flex justify-center shrink-0">
                <img className="w-96 object-contain" src={blog?.image} alt="" />
            </div>
            <div>
                <div>
                    <h1 className="text-3xl font-semibold text-slate-700">
                        {blog?.blogTitle}
                    </h1>
                    <p className="text-lg">{blog?.blogDescription}</p>
                </div>
                <div className="mt-2">
                    {blog?.tags?.length
                        ? blog.tags.map((tag) => (
                              <button
                                  className={`border border-black mr-2 mb-2 px-3 py-2`}
                              >
                                  {tag}
                              </button>
                          ))
                        : ""}
                </div>
                <div className="mt-2">
                    {blog?.topics?.length
                        ? blog?.topics?.map((topic) => (
                              <div>
                                  <h3 className="text-2xl">{topic.title}</h3>
                                  <p>{topic.details}</p>
                              </div>
                          ))
                        : ""}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
