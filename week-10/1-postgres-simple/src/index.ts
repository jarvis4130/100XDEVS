import { Client } from 'pg'
import { DB_URL } from './config';
import { createTables, dropTables } from './db/setup';
import { createTodo, getTodos, updateTodo } from './db/todo';
import { createUser, getUser } from './db/user';

export const client = new Client({
    connectionString: DB_URL
});

async function setup() {
    try {
        await client.connect();
        // await dropTables();
        // await createTables();
        // await createUser('mark','password','Mark Zuckerberg')
        // await createUser('jarvis','password','Tony Stark')
        // await createUser('thor','password','Chris Hemsworth')
        // await createUser('heisenberg','password','Walter White')
        // await getUser(1);
        // await createTodo(1, "Mark", "Go to GYM");
        // await createTodo(1, "Mark", "Go Grocery Shopping");
        // await createTodo(2, "Tony", "Fix AI bug in jarvis");

        // await updateTodo(1)
        await getTodos(1);
        console.log("Setup complete.");
    } catch (error) {
        console.error("Error during setup:", error);
    } finally {
        await client.end();
    }
}

setup();