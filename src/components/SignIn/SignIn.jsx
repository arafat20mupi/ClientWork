import { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import PhoneInput from "react-phone-input-2";

const SignIn = () => {
    const [isLoading, setIsLoading] = useState(false);
    const axios = useAxiosPublic();
    const navigate = useNavigate();
    
    const { control, register, handleSubmit, formState: { errors }, setFocus } = useForm();

    const handleLogin = async (data) => {
        setIsLoading(true);
      
        const { phone, password } = data;
        
        try {
            const response = await axios.post("/api/login", { phone, password });
            if (response?.data?.success) {
                
                console.log("Login successful:", response.data);
                localStorage.setItem("token", response.data.token);
                
                toast.success("Login successful.");
                navigate("/");
            }
        } catch (error) {
            console.error("Login failed:", error.response?.data);
            toast.error("Login failed. Please check your credentials.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const firstErrorField = Object.keys(errors)[0];
            setFocus(firstErrorField); // Set focus to the first error field
        }
    }, [errors, setFocus]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-emerald-500">
            <Toaster toastOptions={{ duration: 4000 }} />
            <div className="w-80 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-center text-emerald-500 font-medium text-2xl mb-4">Phone and Password Authentication</h2>
                
                <form onSubmit={handleSubmit(handleLogin)} noValidate>
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
                    {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                    
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 my-4 bg-white text-gray-400 border"
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full p-2 bg-emerald-500 text-white rounded mt-4 ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                        {isLoading ? <CgSpinner size={20} className="animate-spin" /> : "Sign In"}
                    </button>
                </form>
                
                <p className="text-center mt-4">
                    Don't have an account? <Link to={'/signUp'} className="font-bold">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
