declare global {
    // Check if the namespace NodeJS has been declared
    // to avoid issues in environments where it's not available
    var prisma: PrismaClient;
}
import {PrismaClient} from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;