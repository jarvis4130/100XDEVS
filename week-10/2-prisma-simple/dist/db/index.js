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
const todo_1 = require("./todo");
function setup() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // await createUser("Mark","facebook","Mark Zuckerberg");
            // await getUser(1)
            // await createTodo(1, "go to gym", "go to gym and do 10 pushups");
            // await createTodo(1, "go to grocery shopping", "Buy apple");
            // await createTodo(1, "go to India", "Visit Jamnagar for wedding" );
            // await getTodos(1);
            // await updateTodo(1)
            yield (0, todo_1.getTodosAndUserDetails)(1);
            console.log("Setup complete.");
        }
        catch (error) {
            console.error("Error during setup:", error);
        }
    });
}
setup();
