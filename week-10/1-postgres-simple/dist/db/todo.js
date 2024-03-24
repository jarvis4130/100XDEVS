"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = exports.updateTodo = exports.createTodo = void 0;
const __1 = require("..");
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
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const insertQuery = "INSERT INTO todos(user_id,title,description) VALUES ($1, $2, $3)";
            const values = [userId, title, description];
            const res = yield __1.client.query(insertQuery, values);
        }
        catch (error) {
            console.log("Error ✨");
        }
    });
}
exports.createTodo = createTodo;
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
function updateTodo(todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = " UPDATE todos SET done=true WHERE id=$1";
            const values = [todoId];
            const res = yield __1.client.query(query, values);
            console.log('Updated', res.rows[0]);
        }
        catch (error) {
            console.log("Error ✨", error);
        }
    });
}
exports.updateTodo = updateTodo;
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
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = ` 
            SELECT users.id, todos.title, todos.description, todos.done, todos.id
            FROM users
            LEFT JOIN todos ON users.id=todos.user_id
            WHERE users.id=$1
         `;
            const values = [userId];
            const res = yield __1.client.query(query, values);
            console.log("Done", res.rows[0], res.rows[1]);
        }
        catch (error) {
            console.log("Error ✨", error);
        }
    });
}
exports.getTodos = getTodos;
