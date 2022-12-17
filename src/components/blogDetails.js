import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearBlogData } from "../redux/actions/blogActions";
import { filterByTagName } from "../redux/actions/filterActions";
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
        <div className="mx-5 my-2 p-3 shadow-md">
            <div>
                <img className="max-h-96" src={blog?.image} alt="" />
            </div>
            <div className="mt-5">
                <div>
                    <h1 className="text-3xl font-semibold text-slate-700">
                        {blog?.blogTitle}
                    </h1>
                    <p className="text-lg">{blog?.blogDescription}</p>
                </div>
                <div className="mt-2">
                    {blog?.tags?.length
                        ? blog.tags.map(
                              (tag) =>
                                  tag && (
                                      <button
                                          className={`border border-black mr-2 mb-2 px-3 py-2`}
                                          onClick={() =>
                                              dispatch(filterByTagName(tag))
                                          }
                                      >
                                          {tag}
                                      </button>
                                  )
                          )
                        : ""}
                </div>
                <div className="mt-2">
                    {blog?.topics?.length
                        ? blog?.topics?.map((topic) => (
                              <div className="my-3">
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
