import React from 'react';
import { useSelector } from 'react-redux';

const ReadingHistory = () => {
    const blogs = useSelector((state) => state.blog.readingHistory)
    return (
        <div className='m-10 p-4 shadow-lg rounded-lg'>
            <div className='text-2xl text-slate-800 font-semibold ml-4'>Reading History</div>
            <div class="overflow-x-auto p-3">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-slate-800">
                            <tr>
                                <th class="p-2">
                                    <div class="font-semibold text-left text-base">
                                        Image
                                    </div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-left text-base">
                                        Title
                                    </div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-left text-base">
                                        Blog Description
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody class="text-sm divide-y divide-gray-100">
                            {blogs.map(
                                ({
                                    blogTitle,
                                    image,
                                    blogDescription,
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
                                                <p className='text-sm'>
                                                    {blogTitle}
                                                </p>
                                            </div>
                                        </td>
                                        <td class="p-2">
                                            <div class="text-left">
                                                <p className='text-sm'>
                                                    {blogDescription.length > 120
                                                        ? blogDescription.slice(
                                                              0,
                                                              120
                                                          ) + "..."
                                                        : blogDescription}
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default ReadingHistory;