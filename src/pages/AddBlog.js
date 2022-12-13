import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addBlogData from "../redux/thunk/blogs/addBlogData";

const AddBlog = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        const date = new Date();
        const currentDate = date.toDateString().slice(4);
        const currentTime = date.toLocaleTimeString();
        const dateCreated = currentDate + " " + currentTime;

        const blog = {
            blogTitle: data.blogTitle,
            image: data.image,
            dateCreated,
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
        dispatch(addBlogData(blog));
    };

    return (
        <>
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
                                {...register("topicDetails5")}
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex justify-between items-center w-full">
                        <button
                            className=" px-4 py-3 bg-slate-800 rounded-md text-white text-lg"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddBlog;
