import Link from "next/link"
import { SVGProps } from 'react';
export default async function Page() {
    return (
        <>
            <section className="w-full py-6 md:py-12 lg:py-16">
                <div className="container flex flex-col items-center gap-4 text-center px-4 md:px-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Welcome to the Platform</h2>
                        <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400">
                            Where learning comes to life. Choose your role to get started.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full max-w-sm/none">
                        <Link
                            className="flex items-center justify-center p-4 border border-dashed rounded-lg border-gray-200 bg-gray-50 dark:bg-gray-850 shadow-sm hover:shadow transition-shadow"
                            href="#"
                        >
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200">
                                <UserIcon className="w-4 h-4" />
                            </div>
                            Teacher
                        </Link>
                        <Link
                            className="flex items-center justify-center p-4 border border-dashed rounded-lg border-gray-200 bg-gray-50 dark:bg-gray-850 shadow-sm hover:shadow transition-shadow"
                            href="#"
                        >
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200">
                                <UserIcon className="w-4 h-4" />
                            </div>
                            Student
                        </Link>
                    </div>
                </div>
            </section>
            <footer className="w-full border-t">
                <div className="container flex flex-col gap-4 py-4 md:py-6 lg:gap-6 lg:flex-row xl:gap-8 xl:py-8">
                    <nav className="flex flex-wrap items-center gap-4 text-center justify-center sm:justify-start">
                        <Link className="text-xs underline underline-offset-2 last:mr-2" href="#">
                            Terms of Service
                        </Link>
                        <Link className="text-xs underline underline-offset-2 last:mr-2" href="#">
                            Privacy Policy
                        </Link>
                    </nav>
                    <div className="text-center justify-center flex-1 text-xs/none sm:text-right">
                        © 2023 Acme Inc. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}

function UserIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
