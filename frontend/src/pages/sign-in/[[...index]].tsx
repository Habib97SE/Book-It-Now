import { SignIn } from "@clerk/nextjs";

function SignInPage() {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen py-2"
        >
            <SignIn
                routing="path"
                signUpUrl="/sign-up"
            />
        </div>
    );
}

export default SignInPage;