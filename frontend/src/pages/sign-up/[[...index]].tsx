import { SignUp } from "@clerk/nextjs";

function SignUpPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
        </div>
    );
}

export default SignUpPage