import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const { image, blogTitle, blogDescription, _id } = blog;
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center">
            <div
                onClick={() => navigate(`/blog/${_id}`)}
                className="card card-compact w-96 h-full rounded-lg bg-base-100 shadow-xl cursor-pointer"
            >
                <figure>
                    <img
                        className="lg:w-96 lg:h-64 object-contain"
                        src={image}
                        alt=""
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{blogTitle}</h2>
                    <p>
                        {blogDescription?.length > 250
                            ? blogDescription?.slice(0, 250) + "..."
                            : blogDescription}
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
