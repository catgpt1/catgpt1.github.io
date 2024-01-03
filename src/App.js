import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2"; // 引入 Frame2 组件
import Frame3 from "./pages/Frame3"; 
import Frame4 from "./pages/Frame4"; 

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home Page Title";
        metaDescription = "Description of the home page";
        break;
      case "/frame2":
        title = "Frame 2 Page Title";
        metaDescription = "Description of the Frame 2 page";
        break;
        case "/frame3":
          title = "Frame 3 Page Title";
          metaDescription = "Description of the Frame 3 page";
          break;
        case "/frame4":
          title = "Frame 4 Page Title";
          metaDescription = "Description of the Frame 4 page";
          break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes> <Route path="/" element={<Frame1 />} /> {/* 根路径指向 Frame1 */} 
     <Route path="/frame2" element={<Frame2 />} /> {/* 为 Frame2 添加路由 */}
     <Route path="/frame3" element={<Frame3 />} /> {/* 为 Frame3 添加路由 */}
     <Route path="/frame4" element={<Frame4 />} /> {/* 为 Frame4 添加路由 */}
    </Routes>
  );
}
export default App;
