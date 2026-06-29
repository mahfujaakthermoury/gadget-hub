import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import React from 'react';

const page = () => {
    return (
        <div>
            <LoginForm></LoginForm>
            <RegisterForm></RegisterForm>
        </div>
    );
};

export default page;