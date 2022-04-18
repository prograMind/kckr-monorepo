import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log(`Start seeding ...`)
    const user1 = await prisma.user.create({
      data: {
        email: "Petr",
        userName: "Peer",
        proposals: {
          createMany: {
            data: [
              {
                title: "Gain muscle",
                description: "Plus 0.25 kg on the scale every day",
                 duration: 28,
              },
              {
                title: "Build a cottage",
                description: "Build for 1 hour every day",
                duration: 21,
              }
            ]
          }
        }
      }
    })
      console.log(`Created user with id: ${user1.id}`)

      const user2 = await prisma.user.create({
        data: {
          email: "Honza",
          userName: "Lord",
          proposals: {
            createMany: {
              data: [
                {
                  title: "Build KCKR app",
                  description: "Cross 7 items of the to-do list",
                   duration: 7,
                },
                {
                  title: "Write a thesis",
                  description: "Write 1 page per day",
                  duration: 28,
                }
              ]
            }
          }
        }
      })
    console.log(`Created user with id: ${user2.id}`)
  }
