import Link from "next/link";
import React from "react";

export default function About() {
    return (
        <div>
            <h1 className="text-7xl">Page About</h1>
            <Link
                className="text-xl text-blue-500 inline-block mt-8"
                href={"/info"}
            >
                info page
            </Link>
        </div>
    );
}
