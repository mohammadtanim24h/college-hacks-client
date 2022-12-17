import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearBlogData } from "../redux/actions/blogActions";
import GET_SINGLE_BLOG from "../redux/thunk/blogs/getBlogData";
import UPDATE_CONTENT from "../redux/thunk/blogs/updateBlogData";

const UpdateBlog = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const blog = useSelector((state) => state.blog.selectedBlog);
    const { topics } = blog;

    const submit = (data) => {
        const updatedBlog = {
            blogTitle: data.blogTitle,
            image: data.image,
            tags: [
                data.topicName1,
                data.topicName2,
                data.topicName3,
                data.topicName4,
                data.topicName5,
            ],
            blogDescription: data.blogDescription,
            topics: [
                { title: data.topicName1, details: data.topicDetails1 },
                { title: data.topicName2, details: data.topicDetails2 },
                { title: data.topicName3, details: data.topicDetails3 },
                { title: data.topicName4, details: data.topicDetails4 },
                { title: data.topicName5, details: data.topicDetails5 },
            ],
        };
        dispatch(UPDATE_CONTENT(updatedBlog, blog._id));
    };

    useEffect(() => {
        dispatch(GET_SINGLE_BLOG(id, reset));
        return () => dispatch(clearBlogData());
    }, [id]);

    return (
        <>
            <div className="text-center">
                <h1 className="text-3xl text-slate-700 font-bold">
                    Update Blog
                </h1>
            </div>
            <div className="flex justify-center items-center h-full ">
                <form
                    className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 h-full justify-between bg-white"
                    onSubmit={handleSubmit(submit)}
                >
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-2" htmlFor="blogTitle">
                            Title
                        </label>
                        <input
                            className="input input-bordered"
                            type="text"
                            id="blogTitle"
                            defaultValue={
                                Object.keys(blog).length > 0
                                    ? blog?.blogTitle
                                    : ""
                            }
                            {...register("blogTitle", { required: true })}
                        />
                        {errors.blogTitle && (
                            <span className="text-red-500">
                                Title is required
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-2" htmlFor="image">
                            Image
                        </label>
                        <input
                            className="input input-bordered"
                            type="text"
                            name="image"
                            id="image"
                            defaultValue={
                                Object.keys(blog).length > 0 ? blog?.image : ""
                            }
                            {...register("image", { required: true })}
                        />
                        {errors.image && (
                            <span className="text-red-500">
                                Image is required
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col w-full max-w-xs">
                        <label className="mb-2" htmlFor="blogDescription">
                            Blog Description
                        </label>
                        <textarea
                            className="textarea textarea-bordered"
                            name="blogDescription"
                            id="blogDescription"
                            defaultValue={
                                Object.keys(blog).length > 0
                                    ? blog?.blogDescription
                                    : ""
                            }
                            {...register("blogDescription", { required: true })}
                        ></textarea>
                        {errors.blogDescription && (
                            <span className="text-red-500">
                                Blog description is required
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col w-full max-w-xs"></div>

                    <div className="border p-5">
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="my-2" htmlFor="topicName1">
                                Topic Name 1
                            </label>
                            <input
                                type="text"
                                name="topicName1"
                                id="topicName1"
                                className="input input-bordered"
                                defaultValue={
                                    Object.keys(blog).length > 0
                                        ? topics[0] && blog?.topics[0].title
                                        : ""
                                }
                                {...register("topicName1")}
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="my-2" htmlFor="topicDetails1">
                                Topic Details 1
                            </label>
                            <textarea
                                className="textarea textarea-bordered"
                                name="topicDetails1"
                                id="topicDetails1"
                                defaultValue={
                                    Object.keys(blog).length > 0
                                        ? topics[0] && blog?.topics[0].details
                                        : ""
                                }
                                {...register("topicDetails1")}
                            ></textarea>
                        </div>
                    </div>

                    <div className="border p-5">
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="my-2" htmlFor="topicName2">
                                Topic Name 2
                            </label>
                            <input
                                type="text"
                                name="topicName2"
                                id="topicName2"
                                className="input input-bordered"
                                defaultValue={
                                    Object.keys(blog).length > 0
                                        ? topics[1] && blog?.topics[1].title
                                        : ""
                                }
                                {...register("topicName2")}
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="my-2" htmlFor="topicDetails2">
                                Topic Details 2
                            </label>
                            <textarea
                                className="textarea textarea-bordered"
                                name="topicDetails2"
                                id="topicDetails2"
                                defaultValue={
                                    Object.keys(blog).length > 0
                                        ? topics[1] && blog?.topics[1].details
                                        : ""
                                }
                                {...register("topicDetails2")}
                            ></textarea>
                        </div>
                    </div>

                    <div className="border p-5">
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="my-2" htmlFor="topicName3">
                                Topic Name 3
                            </label>
                            <input
                                type="text"
                                name="topicName3"
                                id="topicName3"
                                className="input input-bordered"
                                defaultValue={
                                    Object.keys(blog).length > 0
                                        ? topics[2] && blog?.topics[2].title
                                        : ""
                                }
                                {...register("topicName3")}
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="my-2" htmlFor="topicDetails3">
                                Topic Details 3
                            </label>
                            <textarea
                                className="textarea textarea-bordered"
                                name="topicDetails3"
                                id="topicDetails3"
                                defaultValue={
                                    Object.keys(blog).length > 0
                                        ? topics[2] && blog?.topics[2].details
                                        : ""
                                }
                                {...register("topicDetails3")}
                            ></textarea>
                        </div>
                    </div>

                    <div className="border p-5">
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="my-2" htmlFor="topicName4">
                                Topic Name 4
                            </label>
                            <input
                                type="text"
                                name="topicName4"
                                id="topicName4"
                                className="input input-bordered"
                                defaultValue={
                                    Object.keys(blog).length > 0
                                        ? topics[3] && blog?.topics[3].title
                                        : ""
                                }
                                {...register("topicName4")}
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="my-2" htmlFor="topicDetails4">
                                Topic Details 4
                            </label>
                            <textarea
                                className="textarea textarea-bordered"
                                name="topicDetails4"
                                id="topicDetails4"
                                defaultValue={
                                    Object.keys(blog).length > 0
                                        ? topics[3] && blog?.topics[3].details
                                        : ""
                                }
                                {...register("topicDetails4")}
                            ></textarea>
                        </div>
                    </div>

                    <div className="border p-5">
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="my-2" htmlFor="topicName5">
                                Topic Name 5
                            </label>
                            <input
                                type="text"
                                name="topicName5"
                                id="topicName5"
                                className="input input-bordered"
                                defaultValue={
                                    Object.keys(blog).length > 0
                                        ? topics[4] && blog?.topics[4].title
                                        : ""
                                }
                                {...register("topicName5")}
                            />
                        </div>
                        <div className="flex flex-col w-full max-w-xs">
                            <label className="my-2" htmlFor="topicDetails5">
                                Topic Details 5
                            </label>
                            <textarea
                                className="textarea textarea-bordered"
                                name="topicDetails5"
                                id="topicDetails5"
                                defaultValue={
                                    Object.keys(blog).length > 0
                                        ? topics[4] && blog?.topics[4].details
                                        : ""
                                }
                                {...register("topicDetails5")}
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex justify-between items-center w-full">
                        <button
                            className=" px-4 py-3 bg-slate-800 rounded-md text-white text-lg"
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateBlog;
