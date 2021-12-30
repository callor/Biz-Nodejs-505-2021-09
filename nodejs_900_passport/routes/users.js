import express from "express";
import fs from "fs";
import { member_append } from "../modules/member.js";
import passport from "passport";
const router = express.Router();

/* GET users listing. */
router.post("/login", passport?.authenticate("local"), (req, res) => {
    console.log("login", req.body);
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    res.json(req.user);
});

router.post("/join", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const join_member = { userid: username, password, level: 0 };
    member_append(join_member);
    res.json("OK");
});

export default router;
