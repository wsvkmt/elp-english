const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createStudent() {
    const newStudent = await prisma.student.create({
        data: {
            name: 'student1',
            email: 'student1@example.com',
            password: 'studentpw1', // In a real application, ensure this is hashed
            // emailVerified can be left null if not verified yet
            // createdAt and updatedAt are automatically handled due to their default values
        },
    });
    console.log(newStudent);
}

createStudent()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
