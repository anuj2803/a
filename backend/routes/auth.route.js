import express from "express";
import { getMe, signup, login, logout} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();


router.get("/me",protectRoute, getMe);//checking if the user is logged in
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
// router.get("/logout",logout);

export default router;