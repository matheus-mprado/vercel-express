import express, { Request, Response } from "express";

// Initialize Express
export const app = express();

// Create GET request
app.get("/", (req: Request, res: Response) => {
  res.send("Express on Vercel");
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
