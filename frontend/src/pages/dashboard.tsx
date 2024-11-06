import Header from '@/app/components/Header';
import { useUser, UserButton, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

export default function DashboardPage() {

    const [userDetails, setUserDetails] = useState(useUser());



    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <Header />
            <h1>Dashboard</h1>

            {/* If the user is signed in, display the dashboard */}
            <SignedIn>
                <p>Welcome, {userDetails?.firstName}!</p>
                <p>Email: {userDetails?.primaryEmailAddress?.emailAddress}</p>
            </SignedIn>

            {/* If the user is signed out, redirect to the sign-in page */}
            <SignedOut>
                <RedirectToSignIn redirectUrl={"/sign-in"} />
            </SignedOut>
        </div>
    );

}
