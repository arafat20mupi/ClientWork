import React from "react";
import { IoIosAlert } from "react-icons/io";

const ServerCopy = () => {
  return (
    <div className="px-5 md:px-20">
      <div className="bg-black dark:bg-white px-5 md:px-10 py-4 rounded-md space-y-3">
        <h1 className="text-white dark:text-black font-bold text-center my-3 text-3xl">
          নিম্নক্ত ফোর্মটি পূরণ করুন।
        </h1>
        <select
          id="paymentMethod"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">আপনার মেথড সিলেক্ট করুন</option>
          <option value="form">Form number</option>
          <option value="nid">NID number</option>
          <option value="voter">Voter number</option>
        </select>
        <div>
          <label htmlFor="" className="text-white dark:text-black">
            {"ID Number"} দিন:
          </label>
          <input
            placeholder={"আইডি নাম্বার"}
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <h1 className="flex items-center space-x-2 text-green-800 md:bg-green-200 ring-green-700 ring md:ring-2 p-1 md:p-2 rounded-md md:text-xl">
          <IoIosAlert className="text-6xl md:text-4xl" />
          <span>
            আপনার NID সহজ ও দ্রুত কালেক্ট করতে নিজের ইনপুটগুলো পূরণ করতে পারেন।
          </span>
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div>
            <label htmlFor="" className="text-white dark:text-black">
              নাম দিন (optional):
            </label>
            <input
              placeholder={"নাম (অপশনাল)"}
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <div>
              <label htmlFor="" className="text-white dark:text-black">
                জন্মদিন দিন (optional):
              </label>
              <input
                placeholder={"দিন (অপশনাল)"}
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="" className="text-white dark:text-black">
                জন্ম মাস দিন (optional):
              </label>
              <input
                placeholder={"মাস (অপশনাল)"}
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="" className="text-white dark:text-black">
                বছর দিন (optional):
              </label>
              <input
                placeholder={"বছর (অপশনাল)"}
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="text-md bg-green-500 hover:bg-green-600 duration-200 text-white px-7 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerCopy;
