import { createTodo, getTodos, getTodosAndUserDetails, updateTodo } from "./todo";
import { createUser, getUser } from "./user";


async function setup() {
    try {
        // await createUser("Mark","facebook","Mark Zuckerberg");
        // await getUser(1)
        // await createTodo(1, "go to gym", "go to gym and do 10 pushups");
        // await createTodo(1, "go to grocery shopping", "Buy apple");
        // await createTodo(1, "go to India", "Visit Jamnagar for wedding" );
        // await getTodos(1);
        // await updateTodo(1)
        await getTodosAndUserDetails(1);
        console.log("Setup complete.");
    } catch (error) {
        console.error("Error during setup:", error);
    }
}

setup();