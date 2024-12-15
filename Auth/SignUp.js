import { Input, notification } from "antd";
import { useState } from "react";
import app from '../firebase/FirebaseConfig';
import { getDatabase, set, push, ref } from "firebase/database";
import { signUpUser } from "../firebase/FirebaseFunctions";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

    const [model, setModel] = useState({});
    const db = getDatabase(app);
    const navigate = useNavigate();

    const post = async (e) => {
        e.preventDefault();

        if (!model.name || !model.email || !model.password) {
            return notification.error({
                message: 'Validation error',
                description: 'Please provide a Valid Name, Email, and Password'
            });
        }

        try {
            const reference = push(ref(db, 'signUp'));
            await set(reference, model);

            await signUpUser(model)
                .then(() => {
                    notification.success({
                        message: 'Congrats',
                        description: 'User is successfully created',
                    });
                })
                navigate('/LMS/User',{
                    state: {
                        data: model
                    }
                })
                .catch((err) => {
                    console.log(err);
                    notification.error({
                        message: 'Error',
                        description: 'Account is not created (Please try again!)',
                    });
                });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Already have an account?
                        <Link to={'/Login'} className="text-blue-500 hover:text-blue-700 font-semibold">Login here</Link>
                    </p>
                </div>

                {/* Input fields */}
                <div className="mb-4">
                    <Input
                        placeholder="User Name"
                        onChange={(e) => setModel({ ...model, name: e.target.value })}
                        value={model.name || ''}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        placeholder="Email"
                        onChange={(e) => setModel({ ...model, email: e.target.value })}
                        value={model.email || ''}
                    />
                </div>
                <div className="mb-6">
                    <Input.Password
                        placeholder="Password"
                        onChange={(e) => setModel({ ...model, password: e.target.value })}
                        value={model.password || ''}
                        type="password"
                    />
                </div>

                {/* SignUp Button */}
                <div className="flex justify-center">
                    <button
                        onClick={post}
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}
