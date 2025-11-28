import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

import { hashPassword } from '@cedarjs/auth-dbauth-api'

export default async () => {
  try {

    // seed users
    const users = [
      { name: 'Fed', email: 'fred', password: 'hello1234!' },
    ]

    for (const user of users) {
      const [hashedPassword, salt] = hashPassword(user.password)

      await db.user.upsert({
        where: {
          email: user.email,
        },
        create: {
          name: user.name,
          email: user.email,
          hashedPassword,
          salt,
        },
        update: {
          name: user.name,
          hashedPassword,
          salt,
        },
      })
    }


    await db.task.createMany({
      data: [
        {
          title: 'Follow-up Call',
        },
        {
          title: 'Lunch Break',
        },
      ],
    })

    console.log('Seeding complete!')
  } catch (error) {
    console.error('Error seeding data:', error)
    process.exit(1) // Exit with an error code if seeding fails
  }
}
