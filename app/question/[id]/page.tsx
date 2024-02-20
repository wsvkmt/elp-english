import {getQuestions} from '@/app/utils'
export const revalidate = 360

export default async function Page({params: {id}}: {
    params: { id: string }
}) {

    const questions = await getQuestions(id)
    return (
        <main className="flex flex-col gap-6 p-4 md:p-6">
            <div className="flex flex-col gap-4 bg-white shadow rounded-lg p-4 md:p-6">
                {questions.map((question) => (
                    <div key={question.id} className="flex flex-col h-20 w-full rounded-lg shadow bg-white p-3 md:h-36">
                        <h2 className="text-2xl font-bold text-gray-500">
                            {question.introduction}
                        </h2>
                        <input
                            type="text"
                            className="rounded-lg shadow text-black p-3 md:h-36"
                        />
                        <button
                            className="inline-flex items-center justify-center h-9 p-4 my-3 text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800"
                        >
                            제출하기
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}
