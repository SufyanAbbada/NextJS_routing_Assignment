// import { PrismaClient } from "@prisma/client";

// if (process.env.NODE_ENV === "production") {
//   let prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   let prisma = global.prisma;
// }

// export default prisma;

import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient({ log: ["info"] });
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
