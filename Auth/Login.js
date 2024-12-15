import { Input, notification } from "antd";
import { useState } from "react";
import { loginUser } from "../firebase/FirebaseFunctions";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [model, setModel] = useState({});
    const navigate = useNavigate();

    const post = async (e) => {
        e.preventDefault();

        if (!model.email || !model.password) {
            return notification.error({
                message: 'Validation error',
                description: 'Please provide a Valid Name, Email, and Password'
            });
        }

        try {
            await loginUser(model)
                .then(() => {
                    notification.success({
                        message: 'Congrats',
                        description: 'User is successfully Logged In',
                    });
                })
                navigate('/LMS/User')
                .catch((err) => {
                    console.log(err);
                    notification.error({
                        message: 'Error',
                        description: 'Please provide a existing email or password',
                    });
                });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>


                <div className="mb-4">
                </div>
                <div className="mb-4">
                    <Input
                        placeholder="Email"
                        onChange={(e) => setModel({ ...model, email: e.target.value })}
                    />
                </div>
                <div className="mb-6">
                    <Input.Password
                        placeholder="Password"
                        onChange={(e) => setModel({ ...model, password: e.target.value })}
                        type="password"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={post}
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
