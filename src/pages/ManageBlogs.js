import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteBlogData from "../redux/thunk/blogs/deleteBlog";
import loadBlogData from "../redux/thunk/blogs/fetchBlogs";
import { AiOutlineEdit } from "react-icons/ai";

const ManageBlogs = () => {
    const blogs = useSelector((state) => state.blog.blogs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBlogData());
    }, [dispatch]);
    return (
        <div class="flex flex-col justify-center items-center h-full w-full ">
            <div class="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
                <header class="px-5 py-4 border-b border-gray-100">
                    <div class="font-semibold text-gray-800">Products</div>
                </header>

                <div class="overflow-x-auto p-3">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-slate-800 bg-gray-50">
                            <tr>
                                <th class="p-2">
                                    <div class="font-semibold text-left">
                                        Image
                                    </div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-left">
                                        Title
                                    </div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-left">
                                        Blog Description
                                    </div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-left">
                                        Date Created
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody class="text-sm divide-y divide-gray-100">
                            {blogs.map(
                                ({
                                    blogTitle,
                                    image,
                                    dateCreated,
                                    blogDescription,
                                    _id,
                                }) => (
                                    <tr>
                                        <td class="p-2">
                                            <div className="avatar">
                                                <div className="w-24 rounded">
                                                    <img src={image} alt="" />
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-2">
                                            <div class="font-medium text-gray-800">
                                                <p>
                                                    {blogTitle.length > 40
                                                        ? blogTitle.slice(
                                                              0,
                                                              40
                                                          ) + "..."
                                                        : blogTitle}
                                                </p>
                                            </div>
                                        </td>
                                        <td class="p-2">
                                            <div class="text-left">
                                                <p>
                                                    {blogDescription.length > 50
                                                        ? blogDescription.slice(
                                                              0,
                                                              50
                                                          ) + "..."
                                                        : blogDescription}
                                                </p>
                                            </div>
                                        </td>
                                        <td class="p-2">
                                            <div class="text-left">
                                                <p>{dateCreated}</p>
                                            </div>
                                        </td>

                                        <td class="p-2">
                                            <div class="flex justify-center items-center">
                                                <AiOutlineEdit
                                                    size={22}
                                                    className="mr-4 hover:text-blue-500 cursor-pointer"
                                                    title="Edit Blog"
                                                />
                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            deleteBlogData(_id)
                                                        )
                                                    }
                                                    title="Delete Blog"
                                                >
                                                    <svg
                                                        class="w-8 h-8 text-red-600 rounded-full hover:bg-gray-100 p-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBlogs;
