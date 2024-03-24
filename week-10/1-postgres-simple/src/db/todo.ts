import { client } from "..";
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
export async function createTodo(userId: number, title: string, description: string) {
    try{
        const insertQuery = "INSERT INTO todos(user_id,title,description) VALUES ($1, $2, $3)";
        const values = [userId,title,description];
        const res = await client.query(insertQuery, values);
    }catch(error){
        console.log("Error ✨")
    }
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
    try{
        const query=" UPDATE todos SET done=true WHERE id=$1"
        const values=[todoId];
        const res=await client.query(query,values)
        console.log('Updated',res.rows[0])
    }catch(error){
        console.log("Error ✨",error)
    }
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
    try{
        const query=` 
            SELECT users.id, todos.title, todos.description, todos.done, todos.id
            FROM users
            LEFT JOIN todos ON users.id=todos.user_id
            WHERE users.id=$1
         `
        const values=[userId];
        const res=await client.query(query,values)
        // console.log("Done",res.rows[0],res.rows[1])
    }catch(error){
        console.log("Error ✨",error)
    }
}