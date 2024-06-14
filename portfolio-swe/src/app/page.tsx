"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

function Landing() {
    const router = useRouter();

    React.useEffect(() => {
        router.push('/home');
    }, [router]);

    return (
        <div>
            <h1>Portfolio</h1>
            <p>Software Engineer</p>
        </div>
    );
}

export default Landing;
