import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddBlog from "../pages/AddBlog";
import Home from "../pages/Home";
import ManageBlogs from "../pages/ManageBlogs";

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
        ],
    },
]);

export default routes;
