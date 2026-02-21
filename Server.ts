import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { users } from "./data/users";
import { records } from "./data/records";

const app = express();
app.use(cors());
app.use(bodyParser.json());
