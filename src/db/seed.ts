import { db } from './index';
import { users } from './schema';

async function seed() {
  console.log('🌱 Seeding database...');

  try {
    // Insert sample users
    await db.insert(users).values([
      {
        email: 'admin@example.com',
        name: 'Admin User',
        emailVerified: new Date(),
      },
      {
        email: 'user@example.com',
        name: 'Regular User',
        emailVerified: new Date(),
      },
    ]);

    console.log('✅ Database seeded successfully');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seed();
