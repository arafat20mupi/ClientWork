
import { IoIosAlert } from "react-icons/io";
import { useForm } from "react-hook-form";

const ServerCopy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="px-5 md:px-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-black dark:bg-white px-5 md:px-10 py-4 rounded-md space-y-3">
          <h1 className="text-green-600 font-bold text-center my-3 text-2xl">
            সার্ভার কপি
          </h1>
          <h1 className="text-white dark:text-black font-bold text-center my-3 text-3xl">
            নিম্নক্ত ফোর্মটি পূরণ করুন।
          </h1>

          {/* Select Method Field with validation */}
          <select
            id="paymentMethod"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("SelectMethod", {
              required: "এই ফিল্ডটি অবশ্যই পূরণ করতে হবে",
            })}
          >
            <option value="">আপনার মেথড সিলেক্ট করুন</option>
            <option value="Form number">Form number</option>
            <option value="Nid number">NID number</option>
            <option value="Voter number">Voter number</option>
          </select>
          {errors.SelectMethod && (
            <p className="text-red-500">{errors.SelectMethod.message}</p>
          )}

          {/* ID Number Field with min and max length validation */}
          <div>
            <label htmlFor="idNumber" className="text-white dark:text-black">
              {"ID Number"} দিন:
            </label>
            <input
              id="idNumber"
              placeholder="আইডি নাম্বার"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("idNumber", {
                required: "আইডি নাম্বার ফিল্ডটি আবশ্যক",
                minLength: {
                  value: 10,
                  message: "আইডি নাম্বার কমপক্ষে 10 অক্ষর হতে হবে",
                },
                maxLength: {
                  value: 15,
                  message: "আইডি নাম্বার সর্বাধিক 15 অক্ষর হতে হবে",
                },
              })}
            />
            {errors.idNumber && (
              <p className="text-red-500">{errors.idNumber.message}</p>
            )}
          </div>

          {/* Info Message */}
          <h1 className="flex items-center space-x-2 text-green-800 md:bg-green-200 ring-green-700 ring md:ring-2 p-1 md:p-2 rounded-md md:text-xl">
            <IoIosAlert className="text-6xl md:text-4xl" />
            <span>
              ভুল না হওয়ার জন্য চাইলে নাম বা অন্য কোনো তথ্য জানা থাকলে
              দিতে পারেন.
            </span>
          </h1>

          {/* Optional Fields */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div>
              <label htmlFor="name" className="text-white dark:text-black">
                নাম দিন (optional):
              </label>
              <input
                id="name"
                placeholder="নাম (অপশনাল)"
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("name")}
              />
            </div>
            <div className="flex items-center gap-2">
              <div>
                <label htmlFor="day" className="text-white dark:text-black">
                  জন্মদিন দিন (optional):
                </label>
                <input
                  id="day"
                  placeholder="দিন (অপশনাল)"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("day")}
                />
              </div>
              <div>
                <label htmlFor="month" className="text-white dark:text-black">
                  জন্ম মাস দিন (optional):
                </label>
                <input
                  id="month"
                  placeholder="মাস (অপশনাল)"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("month")}
                />
              </div>
              <div>
                <label htmlFor="year" className="text-white dark:text-black">
                  বছর (optional):
                </label>
                <input
                  id="year"
                  placeholder="বছর (অপশনাল)"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("year")}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="text-md bg-green-500 hover:bg-green-600 duration-200 text-white px-7 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ServerCopy;
