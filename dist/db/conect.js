"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const conexion = mysql_1.default.createConnection({
    host: '192.168.1.85',
    database: 'BD_ListQR',
    user: 'root',
    password: ''
});
exports.default = conexion;
/**
 * host:'bwqn1owznctuodmrvh8z-mysql.services.clever-cloud.com',
    database:'bwqn1owznctuodmrvh8z',
    user:'u0xb7qtybkcl1wnq',
    password:'uBqMYLa4KJibQC5USpHO',
 */
/**
 * host:'db4free.net',
    database:'applista',
    user:'rootaapplist',
    password:'1f451a27',
 */
/*
host:'localhost',
database:'applista_v2',
user:'root',
password:'',

*/
//# sourceMappingURL=conect.js.map