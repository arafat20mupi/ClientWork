import { useState, useEffect } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useAuth = () => {
    const axios = useAxiosPublic();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const authenticateUser = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const response = await axios.get("/api/user", {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setUser(response.data);
                    localStorage.setItem("user", JSON.stringify(response.data));
                } catch (error) {
                    console.error("Authentication failed:", error);
                    localStorage.removeItem("token");
                    setUser(null);
                }
            }
        };
        authenticateUser();
    }, [axios]);



    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    };

    return { user, logout };
};

export default useAuth;
