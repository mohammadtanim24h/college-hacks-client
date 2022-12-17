import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "../components/blogDetails";
import Main from "../layout/Main";
import AddBlog from "../pages/AddBlog";
import Home from "../pages/Home";
import ManageBlogs from "../pages/ManageBlogs";
import UpdateBlog from "../pages/UpdateBlog";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "add-blog",
                element: <AddBlog />,
            },
            {
                path: "manage-blogs",
                element: <ManageBlogs />,
            },
            {
                path: "update-blog/:id",
                element: <UpdateBlog />,
            },
            {
                path: "blog/:id",
                element: <BlogDetails />,
            },
        ],
    },
]);

export default routes;
