import React, { useEffect, useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="grid gap-4 grid-cols-3">
            {blogs &&
                blogs.length &&
                blogs.map((blog) => (
                    <div className="flex justify-center items-center">
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    className="lg:w-72 lg:h-48 object-contain"
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
