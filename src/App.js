import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import UseContext from "./components/context/UseContext";
import CardItem from "./components/pages/CardItem";
import AddItem from "./components/pages/AddItem";
import UpdateItem from "./components/pages/UpdateItem";
import Alert from "./components/Alert";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";

function App() {
  // Scroll To Top on Roucter Change
  const { pathname } = useLocation();
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  let title = "Code-Journal";
  let APIKEY = "3dc8oe7h79s7p";

  const [progress, setProgress] = useState(20);
  const [alert, setAlert] = useState(null); //  Alert
  const LangOption = [
    "--select language",
    "javascript",
    "python",
    "java",
    "c++",
  ];
  // To set language
  const [selected, setSelected] = useState(LangOption[0]);
  // Function to set Alert
  const closeAlert = () => {
    setAlert(null);
  };
  const alertTodo = (msg, status) => {
    setAlert({
      msg: msg,
      stauts: status,
    });
    setTimeout(() => {
      closeAlert();
    }, 3100);
  };
  return (
    <UseContext.Provider
      value={{ progress, setProgress, selected, setSelected, LangOption }}
    >
      <Navbar title={title} />
      {/* Top Loading Bar */}
      <LoadingBar
        color="#f11946"
        height={3.4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Alert alert={alert} closeAlert={closeAlert} />
      <Routes>
        {isAuthenticated ? (
          <Route
            path="/"
            element={
              <CardItem
                query={user.nickname}
                APIKEY={APIKEY}
                title={title}
                alertTodo={alertTodo}
              />
            }
          />
        ) : (
          <Route path="*" element={<Home title={title} />} />
        )}
        <Route
          path="/add"
          element={
            <AddItem APIKEY={APIKEY} title={title} alertTodo={alertTodo} />
          }
        />
        <Route
          path="/update"
          element={
            <UpdateItem APIKEY={APIKEY} title={title} alertTodo={alertTodo} />
          }
        />
      </Routes>
      <Footer title={title} />
    </UseContext.Provider>
  );
}

export default App;
