import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import loadBlogData from "../redux/thunk/blogs/fetchBlogs";

const Home = () => {
    const blogs = useSelector((state) => state.blog.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBlogData());
    }, [dispatch]);

    return (
        <div className="grid gap-4 grid-cols-3">
            {blogs &&
                blogs.length &&
                blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center"
                    >
                        <div className="card card-compact w-96 h-full rounded-lg bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    className="lg:w-96 lg:h-64 object-contain"
                                    src={blog.image}
                                    alt=""
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{blog.blogTitle}</h2>
                                <p>
                                    {blog.blogDescription.length > 250
                                        ? blog.blogDescription.slice(0, 250) +
                                          "..."
                                        : blog.blogDescription}
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Home;
