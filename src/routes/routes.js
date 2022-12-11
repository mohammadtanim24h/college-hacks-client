import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddBlog from "../pages/AddBlog";
import Home from "../pages/Home";

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
        ],
    },
]);

export default routes;
