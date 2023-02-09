import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UseContext from "../context/UseContext";
import { useAuth0 } from "@auth0/auth0-react";
import Heading from "../Heading";
import CardItem from "./CardItem";

function Home({ title }) {
  const { setProgress } = useContext(UseContext);
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    setProgress(100); // eslint-disable-next-line
  }, []);

  return (
    <>
      <Heading title={title} />
      <div className="p-3 flex flex-col items-center gap-4 bg-slate-50">
      <Link
        type="button"
        href="#"
        className="w-10/12 lg:max-w-4xl shadow-sm shadow-gray-900 h-9 inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white  hover:bg-indigo-700"
        onClick={() => loginWithRedirect()}
      >
        LogIn
      </Link>
      </div>
      {/* <CardItem/> */}
    </>
  );
}

export default Home;
