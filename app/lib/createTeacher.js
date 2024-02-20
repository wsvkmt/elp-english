const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function createTeacher() {
    const newTeacher = await prisma.Teacher.create({
        data: {
            name: 'teacher1',
            email: 'teacher1@example.com',
            password: '1teapw1', // In a real application, ensure this is hashed
            // emailVerified can be left null if not verified yet
            // createdAt and updatedAt are automatically handled due to their default values
        },
    });
    console.log(newTeacher);
}

createTeacher()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
