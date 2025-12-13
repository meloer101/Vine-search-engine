import { useState } from "react";
import "./App.css";
import { NavBar } from "./conponents/NavBar";
import { Footer } from "./conponents/Footer";
import { AppRoutes } from "./conponents/AppRoutes";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ResultContextProvider>
      <div className={darkTheme ? "dark" : ""}>
        {/* 科技感背景 */}
        <div className={`min-h-screen flex flex-col bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-gray-200 transition-all duration-500`}>
          {/* 页面主体 */}
          <div className="grow">
            <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <main className="grow">
              <AppRoutes />
            </main>
          </div>
          {/* 页脚 */}
          <Footer />
        </div>
      </div>
    </ResultContextProvider>
  );
};

export default App;
