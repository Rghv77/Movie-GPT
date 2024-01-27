import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import FavouriteMovies from "./FavouriteMovies";
import MovieDetails from "./MovieDetails";
import GptSearch from "./GptSearch";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/favourite_movies",
      element:<FavouriteMovies/>,
    },
    {
      path:"/movie/:id",
      element:<MovieDetails/>,
    },
    {
      path:"/gpt_search",
      element:<GptSearch/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
