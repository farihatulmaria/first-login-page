import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase";
const useForm = () => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const [confirmPassword, setConfirmPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const [createUserWithEmailAndPassword,] = useCreateUserWithEmailAndPassword(auth);

    // sub functions

    const getUserFirstName = (e) =>{
        setFirstName(e.target.value);
    }
    const getUserLastName = (e) =>{
        setLastName(e.target.value);
    }

    const getUserEmail = (e) =>{
        setEmail(e.target.value);
    }
    const getUserPassword = (e) =>{
        setPassword(e.target.value);
    }
    const getUserConfirmPassword= (e) =>{
        setConfirmPassword(e.target.value);
    }

    // Main submit function

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setErrorMessage("Passwords Didn't Matched");
        }
        createUserWithEmailAndPassword(email,password);
    };

    return {
        firstName,
        getUserFirstName,
        lastName,
        getUserLastName,
        email,
        getUserEmail,
        password,
        getUserPassword,
        confirmPassword,
        getUserConfirmPassword,
        errorMessage,
        handleSubmit,
    };
};

export default useForm;