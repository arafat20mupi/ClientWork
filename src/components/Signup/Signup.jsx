import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const axios = useAxiosPublic();
  const { register, handleSubmit, formState: { errors }, control } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Handle registration form submission
  const handleRegister = async (data) => {
    const { name, phone, password } = data;

    setIsLoading(true);
    try {
      const response = await axios.post("/api/register", { name, phone, password });

      if (response.data.success) {
        toast.success("Registration successful!");
      } else {
        toast.error(response.data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("Registration unsuccessful. Please try again.");
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-emerald-500">
      <Toaster toastOptions={{ duration: 4000 }} />
      <div className="w-80 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-emerald-500 font-medium text-2xl mb-4">Phone and Password Authentication</h2>
        <form onSubmit={handleSubmit(handleRegister)} noValidate>
          {/* Name Field */}
          <input
            type="text"
            placeholder="Type Your Name"
            className="w-full p-2 mb-4 bg-white text-gray-400 border"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          {/* Phone Field with PhoneInput */}
          <Controller
            name="phone"
            control={control}
            rules={{ required: "Phone number is required" }}
            render={({ field }) => (
              <PhoneInput
                country={"bd"}
                {...field}
                placeholder="Type Your phone number"
                inputClass="w-full p-2 mb-4 border"
              />
            )}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

          {/* Password Field */}
          <div className="relative w-full">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Your Password"
              className="w-full p-2 my-4 bg-white text-gray-400 border"
              {...register("password", { required: "Password is required" })}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full p-2 bg-emerald-500 text-white rounded mt-4 ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {isLoading ? <CgSpinner size={20} className="animate-spin" /> : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <Link to='/signIn' className="font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
