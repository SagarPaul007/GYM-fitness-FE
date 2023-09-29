import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "@/containers/Home";
import Profile from "@/containers/Profile";
import Navbar from "@/components/Navbar";
import About from "@/containers/About";
import Contact from "@/containers/Contact";
import ErrorPage from "@/containers/ErrorPage";
import Dashboard from "@/containers/Dashboard";

const errorPage = {
  errorElement: <ErrorPage />,
};

const routes = [
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    ),
  },
  {
    path: "/profile/:username",
    element: (
      <>
        <Navbar />
        <Profile />
      </>
    ),
  },
].map((x) => ({ ...x, ...errorPage }));

const router = createBrowserRouter(routes);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
