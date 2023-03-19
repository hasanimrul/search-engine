import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import SearchResult from "../components/SearchResult";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/search-result',
        element: <SearchResult />
    }
])