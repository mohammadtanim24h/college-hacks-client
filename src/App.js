import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import store from "./redux/store";
import routes from "./routes/routes";

function App() {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Provider store={store}>
                <RouterProvider router={routes} />
            </Provider>
        </div>
    );
}

export default App;
