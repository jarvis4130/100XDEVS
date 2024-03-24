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
exports.client = void 0;
const pg_1 = require("pg");
const config_1 = require("./config");
const todo_1 = require("./db/todo");
exports.client = new pg_1.Client({
    connectionString: config_1.DB_URL
});
function setup() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.client.connect();
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
            yield (0, todo_1.getTodos)(1);
            console.log("Setup complete.");
        }
        catch (error) {
            console.error("Error during setup:", error);
        }
        finally {
            yield exports.client.end();
        }
    });
}
setup();
