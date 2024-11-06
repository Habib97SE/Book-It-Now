import { SignIn } from '@clerk/nextjs';

const SignInPage: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </div>
    );
};

export default SignInPage;
