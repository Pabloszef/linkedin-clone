import React, {useState} from 'react'
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {axiosInstance} from "../../lib/axios.js";
import toast from "react-hot-toast";
import {Loader} from "lucide-react";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const queryClient = useQueryClient()

    const {mutate: loginMutation, isPending} = useMutation({
        mutationFn: async (userData) => axiosInstance.post("/auth/login", userData),
        onSuccess: () => {
            toast.success("Login successful")
            queryClient.invalidateQueries({queryKey: ["authUser"]})
        },
        onError: (error) => {
            toast.error(error.response.data.message || "Something went wrong")
        },
    })

    const handleLogIn = (e) => {
        e.preventDefault();
        loginMutation({ username, password })
    }
    return (
        <form onSubmit={handleLogIn} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered w-full"
                required
            />
            <input
                type="password"
                placeholder="Password (6+ characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
                required
            />

            <button type="submit" disabled={isPending} className="btn btn-primary w-full text-white">
                {isPending ? <Loader className="size-5 animate-spin"/> : "Login"}
            </button>
        </form>
    )
}
export default LoginForm
