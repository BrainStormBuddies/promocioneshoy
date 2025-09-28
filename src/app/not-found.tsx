"use client"; // required for hooks

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

// List all your valid top-level routes here
const VALID_ROUTES = ["/", "/about", "/contact"]; // adjust as needed

const NotFound = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Log only if the user really hit a non-existent route
        if (pathname && !VALID_ROUTES.includes(pathname)) {
            console.error(
                "404 Error: User attempted to access non-existent route:",
                pathname
            );
        }
    }, [pathname]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4 text-red-600">404</h1>
                <p className="text-xl text-gray-700 mb-6">Oops! Page not found.</p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
