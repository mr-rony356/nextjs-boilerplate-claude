'use server';

import { auth } from '@/lib/auth';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const updateProfileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

export async function updateProfile(formData: FormData) {
  const session = await auth();

  if (!session?.user?.id) {
    return { error: 'Unauthorized' };
  }

  try {
    const validatedFields = updateProfileSchema.safeParse({
      name: formData.get('name'),
    });

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.flatten().fieldErrors,
      };
    }

    await db
      .update(users)
      .set({
        name: validatedFields.data.name,
        updatedAt: new Date(),
      })
      .where(eq(users.id, session.user.id));

    revalidatePath('/dashboard/profile');

    return { success: true };
  } catch (error) {
    console.error('Error updating profile:', error);
    return { error: 'Failed to update profile' };
  }
}

export async function getUserById(userId: string) {
  try {
    const [user] = await db.select().from(users).where(eq(users.id, userId));
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}
