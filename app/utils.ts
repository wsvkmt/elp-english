import {cache} from 'react'
import prisma from './lib/prisma'; // Adjust the import path as necessary based on your project structure

export const getBooks = cache(async () => {
    return prisma.book.findMany(); // This will be automatically converted to JSON by most server frameworks
})


//write getQuestions function based on schema.prisma, Question should be queried by books id.
export const getQuestions = cache(async (bookId: string) => {
    return prisma.question.findMany({
        where: {
            bookId: bookId
        }
    });
})// This will be automatically converted to JSON by most server framework

// //write getAnswers function based on schema.prisma, Answer should be queried by question id.
// export const getAnswers = async (questionId: number) => {
//     return prisma.answer.findMany({
//         where: {
//             questionId: questionId
//         }
//     });
// };
//
// //write getBooksByAuthor function based on schema.prisma, Book should be queried by author name.
// export const getBooksByAuthor = async (author: string) => {
//     return prisma.book.findMany({
//         where: {
