"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
// Initialize Express
exports.app = (0, express_1.default)();
// Create GET request
exports.app.get("/", (req, res) => {
    res.send("Express on Vercel");
});
// Initialize server
exports.app.listen(5000, () => {
    console.log("Running on port 5000.");
});
