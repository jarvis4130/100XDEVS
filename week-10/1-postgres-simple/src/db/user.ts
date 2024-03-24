import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    try{
        const insertQuery = "INSERT INTO users(username,password,name) VALUES ($1, $2, $3)";
        const values = [username,password,name];
        const res = await client.query(insertQuery, values);
        console.log("user created.")
    }catch (error) {
        console.error("Error creating todo:", error);
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try{
        const query = "SELECT * FROM users WHERE id=$1";
        const values = [userId];
        const res = await client.query(query, values);
        console.log("user found:", res.rows[0]);
    }catch (error) {
        console.error("Error creating todo:", error);
    }
}
