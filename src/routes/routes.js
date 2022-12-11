import { createBrowserRouter } from "react-router-dom";
import AddBlog from "../pages/AddBlog";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "add-blog",
                element: <AddBlog />,
            },
        ],
    },
]);
