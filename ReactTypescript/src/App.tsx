import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { getAllPost } from "./services/jobsService";

function App() {
  // const [count, setCount] = useState(0);
  const user = useSelector((state: RootState) => state.user.user);
  console.log(user);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getAllPost();
      console.log(response);
    };
    fetchApi();
  }, []);

  return (
    <>
      <Routes>
        <Route path="" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
