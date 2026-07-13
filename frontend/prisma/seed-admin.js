const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding admin account...");

  const adminUsername = "admin";
  const rawPassword = "password123";

  // Check if admin already exists
  const existingAdmin = await prisma.admin.findUnique({
    where: { username: adminUsername }
  });

  if (existingAdmin) {
    console.log(`Admin account '${adminUsername}' already exists.`);
  } else {
    // Hash password
    const hashedPassword = await bcrypt.hash(rawPassword, 10);
    
    await prisma.admin.create({
      data: {
        username: adminUsername,
        password: hashedPassword,
      }
    });
    
    console.log(`Created admin account:`);
    console.log(`Username: ${adminUsername}`);
    console.log(`Password: ${rawPassword}`);
    console.log(`(Please change this password later in a real production environment)`);
  }

  console.log("Finished seeding admin account.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
