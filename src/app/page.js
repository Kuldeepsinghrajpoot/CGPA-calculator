"use client";

import { useState } from "react";

export default function Home() {
  const [sem1, setsem1] = useState("");
  const [sem2, setsem2] = useState("");
  const [sem3, setsem3] = useState("");
  const [sem4, setsem4] = useState("");
  const [sem5, setsem5] = useState("");
  const [sem6, setsem6] = useState("");
  const [sem7, setsem7] = useState("");
  const [sem8, setsem8] = useState("");

  const [credit1, setcredit1] = useState("");
  const [credit2, setcredit2] = useState("");
  const [credit3, setcredit3] = useState("");
  const [credit4, setcredit4] = useState("");
  const [credit5, setcredit5] = useState("");
  const [credit6, setcredit6] = useState("");
  const [credit7, setcredit7] = useState("");
  const [credit8, setcredit8] = useState("");

  const [result, setresult] = useState("");

  const [disabled, setdisabled] = useState("");

  const results = () => {
    // // setresult(parseInt(sem1) + parseInt(sem2));
   

    // setresult(
    //   (sem1 * credit1 +
    //     sem2 * credit2 +
    //     sem3 * credit3 +
    //     sem4 * credit4 +
    //     sem6 * credit6 +
    //     sem7 * credit7 +
    //     sem8 * credit8) /
    //     (credit1 +
    //       credit2 +
    //       credit3 +
    //       credit4 +
    //       credit5 +
    //       credit6 +
    //       credit7 +
    //       credit8)
    // );

    setresult((sem1 * credit1 +
        sem2 * credit2 +
        sem3 * credit3 +
        sem4 * credit4 +
        sem6 * credit6 +
        sem7 * credit7 +
        sem8 * credit8) /
            ((credit1 +
              credit2 +
              credit3 +
              credit4 +
              credit5 +
              credit6 +
              credit7 +
              credit8)));
  };

  // alert(values);
  return (
    <div className="grid   place-items-center space-y-3    mx-auto md:h-screen lg:py-0">
      <div className="md:w-full  content-center w-72 mt-5 mb-5  bg-white rounded-lg shadow dark:border md:mt-5 xl:max-w-4xl sm:w-80  dark:bg-gray-800 dark:border-gray-700">
        <div className=" space-x-6   md:space-y-4 sm:p-9">
          <h1 className="text-xl mt-4 text-center  text- font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Average CGPA Calculation
          </h1>
          <div className="space-y-4 md:space-y-6">
            <div className=" grid grid-cols-1 md:grid-cols-4  2xl:grid-cols-4 sm:grid-cols-1 space-y-4 px-6 ">
              <div className="my-0 absolute hidden"></div>

              <div>
                <label
                  htmlFor="Semester2"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 1
                </label>
                <input
                  type="Semester2"
                  name="Semester2"
                  id="Semester2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={sem1}
                  onChange={(e) => setsem1(+e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="Semester1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 1 Credit
                </label>
                <input
                  value={credit1}
                  onChange={(e) => {
                    setcredit1(+e.target.value);
                  }}
                  type="Semester1"
                  name="Semester1"
                  id="Semester1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div>
                <label
                  htmlFor="Semester2"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 2
                </label>
                <input
                  //  disabled
                  value={sem2}
                  onChange={(e) => setsem2(+e.target.value)}
                  type="Semester2"
                  name="Semester2"
                  id="Semester2"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="Semester1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 2 Credit
                </label>
                <input
                  value={credit2}
                  onChange={(e) => setcredit2(+e.target.value)}
                  type="Semester1"
                  name="Semester1"
                  id="Semester1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div>
                <label
                  htmlFor="Semester2"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 3
                </label>
                <input
                  value={sem3}
                  onChange={(e) => setsem3(+e.target.value)}
                  type="Semester2"
                  name="Semester2"
                  id="Semester2"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="Semester1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 3 Credit
                </label>
                <input
                  value={credit3}
                  onChange={(e) => setcredit3(+e.target.value)}
                  type="Semester1"
                  name="Semester1"
                  id="Semester1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div>
                <label
                  htmlFor="Semester2"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 4
                </label>
                <input
                  value={sem4}
                  onChange={(e) => setsem4(+e.target.value)}
                  type="Semester2"
                  name="Semester2"
                  id="Semester2"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="Semester1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 4 Credit
                </label>
                <input
                  value={credit4}
                  onChange={(e) => setcredit4(+e.target.value)}
                  type="Semester1"
                  name="Semester1"
                  id="Semester1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div>
                <label
                  htmlFor="Semester2"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 5
                </label>
                <input
                  value={sem5}
                  onChange={(e) => setsem5(+e.target.value)}
                  type="Semester2"
                  name="Semester2"
                  id="Semester2"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="Semester1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 5 Credit
                </label>
                <input
                  value={credit5}
                  onChange={(e) => setcredit5(+e.target.value)}
                  type="Semester1"
                  name="Semester1"
                  id="Semester1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div>
                <label
                  htmlFor="Semester2"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 6
                </label>
                <input
                  value={sem6}
                  onChange={(e) => setsem6(+e.target.value)}
                  type="Semester2"
                  name="Semester2"
                  id="Semester2"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="Semester1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 6 Credit
                </label>
                <input
                  value={credit6}
                  onChange={(e) => setcredit6(+e.target.value)}
                  type="Semester1"
                  name="Semester1"
                  id="Semester1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div>
                <label
                  htmlFor="Semester2"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 7
                </label>
                <input
                  value={sem7}
                  onChange={(e) => setsem7(+e.target.value)}
                  type="Semester2"
                  name="Semester2"
                  id="Semester2"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="Semester1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 7 Credit
                </label>
                <input
                  value={credit7}
                  onChange={(e) => setcredit7(+e.target.value)}
                  type="Semester1"
                  name="Semester1"
                  id="Semester1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div>
                <label
                  htmlFor="Semester2"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 8
                </label>
                <input
                  value={sem8}
                  onChange={(e) => setsem8(+e.target.value)}
                  type="Semester2"
                  name="Semester2"
                  id="Semester2"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="Semester2"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sem 8 Credit
                </label>
                <input
                  value={credit8}
                  onChange={(e) => setcredit8(+e.target.value)}
                  type="Semester2"
                  name="Semester2"
                  id="Semester2"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
            </div>
          </div>
          <div>Result:{result||""}</div>
          <button
            type="button"
            onClick={results}
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Get
          </button>
        </div>
      </div>
    </div>
  );
}
