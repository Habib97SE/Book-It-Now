import { SignUp } from '@clerk/nextjs';

const SignupPage: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <SignUp path="/sign-in" routing="path" signInUrl="/sign-in" />
        </div>
    );
};

export default SignupPage;
