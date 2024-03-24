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
exports.getUser = exports.createUser = void 0;
const __1 = require("..");
/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
function createUser(username, password, name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const insertQuery = "INSERT INTO users(username,password,name) VALUES ($1, $2, $3)";
            const values = [username, password, name];
            const res = yield __1.client.query(insertQuery, values);
            console.log("user created.");
        }
        catch (error) {
            console.error("Error creating todo:", error);
        }
    });
}
exports.createUser = createUser;
/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
function getUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM users WHERE id=$1";
            const values = [userId];
            const res = yield __1.client.query(query, values);
            console.log("user found:", res.rows[0]);
        }
        catch (error) {
            console.error("Error creating todo:", error);
        }
    });
}
exports.getUser = getUser;
