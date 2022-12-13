import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogCard from "../components/blogCard";
import { filterByUploadDate } from "../redux/actions/filterActions";
import loadBlogData from "../redux/thunk/blogs/fetchBlogs";

const Home = () => {
    const blogs = useSelector((state) => state.blog.blogs);
    const filterType = useSelector((state) => state.filter.blogsFilterType);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBlogData());
    }, [dispatch]);

    const activeFilter = "bg-black text-white";

    let content;

    if (blogs.length) {
        content = blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
        ));
    }

    if (blogs.length && filterType) {
        if (filterType === "Sort by last upload") {
            content = blogs
                .slice()
                .sort(function (a, b) {
                    const c = new Date(b.dateCreated);
                    const d = new Date(a.dateCreated);
                    return c - d;
                })
                .map((blog, index) => <BlogCard key={index} blog={blog} />);
        } else if (filterType === "Sort by the first upload") {
            content = blogs
                .slice()
                .sort(function (a, b) {
                    const c = new Date(a.dateCreated);
                    const d = new Date(b.dateCreated);
                    return c - d;
                })
                .map((blog, index) => <BlogCard key={index} blog={blog} />);
        }
    }

    return (
        <div>
            <div className="flex justify-end gap-4 mb-5 mr-5">
                <button
                    onClick={() =>
                        dispatch(filterByUploadDate("Sort by last upload"))
                    }
                    className={`border border-black px-3 py-2 rounded-full ${
                        filterType === "Sort by last upload" && activeFilter
                    }`}
                >
                    Sort by last upload
                </button>
                <button
                    onClick={() =>
                        dispatch(filterByUploadDate("Sort by the first upload"))
                    }
                    className={`border border-black px-3 py-2 rounded-full ${
                        filterType === "Sort by the first upload" &&
                        activeFilter
                    }`}
                >
                    Sort by the first upload
                </button>
            </div>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                {content}
            </div>
        </div>
    );
};

export default Home;
