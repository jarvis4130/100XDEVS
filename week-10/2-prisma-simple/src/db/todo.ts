import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  const res = await prisma.todo.create({
    data: {
      userId,
      title,
      description,
    },
  });
  console.log(res);
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  const res = await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      done: true,
    },
  });
  console.log(res);
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  const res = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
  });
  console.log(res);
}
/*
  *  Write a function that gives you the todo details of a user along with the user details
  *  [
  *    {
  *      user: {
  *        id: 1,
  *        username: 'Mark',
  *        password: 'facebook',
  *        name: 'Mark Zuckerberg'
  *      },
  *      title: 'go to grocery shopping',
  *      description: 'Buy apple'
  *    }
  *  ]
  */
export async function getTodosAndUserDetails(userId: number) {
  const res = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: {
      user: true,
      title: true,
      description: true,
    },
  });
  console.log(res);
}
