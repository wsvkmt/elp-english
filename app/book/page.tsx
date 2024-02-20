import {getBooks} from '@/app/utils'
import Link from "next/link"
import { redirect } from 'next/navigation'

export default async function Page() {
    const books = await getBooks()
    // write a JSX element rendered by books using tialwindcss
    // const accessDenied = true
    // if (accessDenied) {
    //     redirect('/login')
    // }
    return (
        <main className="flex flex-col gap-6 p-4 md:p-6">
            <div className="flex flex-col gap-4 bg-white shadow rounded-lg p-4 md:p-6">
                {books.map((book) => (
                    <div key={book.id} className="flex flex-col h-20 w-full rounded-lg shadow bg-white p-3 md:h-36">
                        <h2 className="text-2xl font-bold text-gray-500">
                            {book.title}
                        </h2>
                        <p className="text-gray-500 text-2xl">Level: {book.level}</p>
                        <Link
                            className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800"
                            href={`/question/${book.id}`}
                        >
                            문제 풀기
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}