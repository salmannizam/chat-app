import { useState } from 'react';

interface AuthFormProps {
    isLogin: boolean;
    onSubmit: (credentials: { email: string; password: string }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ email, password });
    };
    return (
        <>

        </>
    )
};

export default AuthForm;
