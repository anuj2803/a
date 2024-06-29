import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
const router = express.Router();
import { getUserProfile } from '../controllers/user.controller.js';
import { followUnfollowUser } from '../controllers/user.controller.js';
import { getSuggestedUsers } from '../controllers/user.controller.js';
import { updateUser} from '../controllers/user.controller.js';

router.get("/profile/:username",protectRoute,getUserProfile);//GET request to get user profile by username, 
router.get("/suggested",protectRoute,getSuggestedUsers);//GET request to get suggested users to follow
router.post("/follow/:id",protectRoute,followUnfollowUser);//POST request to
router.post("/update",protectRoute, updateUser);//POST request to update user profile 
//all routes are protected cause not authencited then cant see the profile


export default router;
