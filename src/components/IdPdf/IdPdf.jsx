import { IoIosAlert } from "react-icons/io";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAuth from "../../Hook/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const IdPdf = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      birthday: '',
    },
  });
  const axios = useAxiosPublic();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
console.log(user && user);
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    axios
      .post("/api/IdPdf", { ...data, userId: user && user.user._id })
      .then((response) => {
        console.log(response.data);
        toast.success("Form submitted successfully");
        reset();
      })
      .catch((error) => {
        console.error("Error:", error.response?.data || error.message);
        toast.error(
          error.response?.data?.error || "An error occurred while submitting the form"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="px-5 md:px-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-black dark:bg-white px-5 md:px-10 py-4 rounded-md space-y-3">
          <h1 className="text-purple-600 font-bold text-center my-3 text-2xl">
            আইডি পিডিএফ
          </h1>
          <h1 className="text-white dark:text-black font-bold text-center my-3 text-3xl">
            নিম্নক্ত ফোর্মটি পূরণ করুন।
          </h1>

          {/* Select Method Field with validation */}
          <select
            id="paymentMethod"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("method", {
              required: "এই ফিল্ডটি অবশ্যই পূরণ করতে হবে",
            })}
          >
            <option value="">আপনার মেথড সিলেক্ট করুন</option>
            <option value="Form">Form number</option>
            <option value="Nid">NID number</option>
            <option value="Voter">Voter number</option>
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
          <h1 className="flex items-center space-x-2 text-purple-800 md:bg-purple-200 ring-purple-700 ring md:ring-2 p-1 md:p-2 rounded-md md:text-xl">
            <IoIosAlert className="text-6xl md:text-4xl" />
            <span>
              ভুল না হওয়ার জন্য চাইলে নাম বা অন্য কোনো তথ্য জানা থাকলে দিতে
              পারেন.
            </span>
          </h1>

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
            <div className="flex-grow">
              <label htmlFor="birthday" className="text-white dark:text-black">
                জন্মদিন দিন (optional):
              </label>
              <input
                placeholder="দিন (অপশনাল)"
                type="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("birthday")}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="text-md bg-green-500 hover:bg-green-600 duration-200 text-white px-7 py-2 rounded"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default IdPdf;
