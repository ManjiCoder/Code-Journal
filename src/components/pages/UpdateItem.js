import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseContext from "../context/UseContext";
import ListBox from "../ListBox";

function UpdateItem({ APIKEY, alertTodo }) {
  const location = useLocation();
  const Navigate = useNavigate();
  const { setProgress, selected, setSelected } = useContext(UseContext);
  const {
    ID,
    Username,
    Link,
    Title,
    Status,
    Level,
    Accuracy,
    Time,
    Code,
    Lang,
    Date,
    Score,
    TotalResults,
  } = location.state;
  const [link, setLink] = useState(Link);
  const [title, setTitle] = useState(Title);
  const [status, setStatus] = useState(Status);
  const [level, setLevel] = useState(Level);
  const [accuracy, setAccuracy] = useState(Accuracy);
  const [time, setTime] = useState(Time);
  const [code, setCode] = useState(Code);
  const [score, setScore] = useState(Score);

  useEffect(() => {
    document.getElementById(Status).checked = true;
    const numberToWord = {
      0: "zero",
      1: "one",
      2: "two",
      4: "four",
      8: "eight",
    };
    document.getElementById(numberToWord[level]).checked = true;
    setSelected(Lang);
    setProgress(100); // eslint-disable-next-line
  }, []);
  const updateRow = async (row) => {
    let res = await fetch(`https://sheetdb.io/api/v1/${APIKEY}/ID/${ID}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [row],
      }),
    });
    console.log(res.ok);
    alertTodo("Added", res.ok);
    if (res.ok) {
      let response = await res.json();
      console.log(response);
      Navigate("/");
    } else {
      throw Error(res.message);
    }
  };
  const handleOnSumbit = async (e) => {
    e.preventDefault();
    let row = {
      ID: ID,
      Username: Username,
      Link: link,
      Title: title,
      Status: status,
      Level: level,
      Accuracy: accuracy,
      Time: time,
      Code: code,
      Lang: selected,
      Date: Date,
      Score: score,
    };
    console.log(score);
    console.log(JSON.stringify(row));

    updateRow(row);
  };
  return (
    <div className="dark:bg-slate-900 py-4">
      <div className="w-full mb-7 max-w-sm p-4 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-900 dark:to-slate-700 border border-gray-300 dark:bg-slate-800 rounded-lg shadow-md sm:p-6 md:p-8 dark:border-slate-100 mx-auto">
        <form className="space-y-6" onSubmit={handleOnSumbit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Add Data To <b>Code-Journal</b>
          </h5>
          {/* Link */}
          <div>
            <label
              htmlFor="link"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Link
            </label>
            <input
              type="text"
              name="entry.314843673"
              id="link"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-0 focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-blue-500 shadow-md block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Paste the link"
              onChange={(e) => {
                setLink(e.target.value);
              }}
              required
              value={link}
            />
          </div>

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              name="entry.1254029356"
              id="title"
              placeholder="Enter the title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-0 focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-blue-500 shadow-md block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
              value={title}
            />
          </div>
          {/* Status */}
          <div className="flex">
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mr-5">
              Status
            </div>
            <div className="flex items-center mb-4">
              <input
                id="Done"
                type="radio"
                name="status"
                value="Done"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                className="cursor-pointer w-4 h-4"
              />
              <label
                htmlFor="Done"
                className="cursor-pointer block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Done
              </label>
            </div>

            <div className="flex items-center pl-5 mb-4">
              <input
                id="Wrong"
                type="radio"
                name="status"
                value="Wrong"
                className="cursor-pointer w-4 h-4"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              />
              <label
                htmlFor="Wrong"
                className="cursor-pointer block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Wrong
              </label>
            </div>

            <div className="flex items-center pl-5 mb-4">
              <input
                id="TLE"
                type="radio"
                name="status"
                value="TLE"
                className="cursor-pointer w-4 h-4"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              />
              <label
                htmlFor="TLE"
                className="cursor-pointer block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                TimeOut
              </label>
            </div>
          </div>
          {/* Level */}
          <div className="flex">
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mr-5">
              Level
            </div>
            <div className="flex items-center mb-4">
              <input
                id="zero"
                type="radio"
                name="entry.813669578"
                value="0"
                className="w-4 h-4"
                onChange={(e) => {
                  setLevel(e.target.value);
                }}
              />
              <label
                htmlFor="zero"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                0
              </label>
            </div>

            <div className="flex items-center pl-5 mb-4">
              <input
                id="one"
                type="radio"
                name="entry.813669578"
                value="1"
                className="w-4 h-4"
                onChange={(e) => {
                  setLevel(e.target.value);
                }}
              />
              <label
                htmlFor="one"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                1
              </label>
            </div>

            <div className="flex items-center pl-5 mb-4">
              <input
                id="two"
                type="radio"
                name="entry.813669578"
                value="2"
                className="w-4 h-4"
                onChange={(e) => {
                  setLevel(e.target.value);
                }}
              />
              <label
                htmlFor="two"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                2
              </label>
            </div>
            <div className="flex items-center pl-5 mb-4">
              <input
                id="four"
                type="radio"
                name="entry.813669578"
                value="4"
                className="w-4 h-4"
                onChange={(e) => {
                  setLevel(e.target.value);
                }}
              />
              <label
                htmlFor="four"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                4
              </label>
            </div>
            <div className="flex items-center pl-5 mb-4">
              <input
                id="eight"
                type="radio"
                name="entry.813669578"
                value="8"
                className="w-4 h-4"
                onChange={(e) => {
                  setLevel(e.target.value);
                }}
              />
              <label
                htmlFor="eight"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                8
              </label>
            </div>
          </div>
          {/* Accuracy */}
          <div>
            <label
              htmlFor="accuracy"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Accuracy
            </label>
            <input
              type="number"
              name="entry.182705387"
              id="accuracy"
              placeholder="Enter the time like : 10m 11s"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-0 focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-blue-500 shadow-md block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={(e) => {
                setAccuracy(e.target.value);
              }}
              required
              min="0"
              max="100"
              value={accuracy}
            />
          </div>
          {/* Time */}
          <div>
            <label
              htmlFor="time"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Time
            </label>
            <input
              type="text"
              name="entry.1772415540"
              id="time"
              placeholder="Enter the time like : 10m 11s"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-0 focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-blue-500 shadow-md block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={(e) => {
                setTime(e.target.value);
              }}
              required
              value={time}
            />
          </div>
          {/* Code */}
          <div>
            <label
              htmlFor="time"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Code
            </label>
            <textarea
              name="entry.1433191799"
              id="code"
              cols="40"
              rows="4"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-0 focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-blue-500 shadow-md block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste the code here!"
              value={code}
            ></textarea>
          </div>
          {/* Lang */}
          <ListBox />
          {/* Score */}
          <div>
            <label
              htmlFor="score"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Score
            </label>
            <input
              type="number"
              name="entry.1173418001"
              id="score"
              placeholder="Enter the score"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-0 focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-blue-500 shadow-md block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={(e) => {
                setScore(e.target.value);
              }}
              required
              value={score}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateItem;
