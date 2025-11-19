import  {Router} from "express";

import users from "./users.js";
import posts from "./posts.js";

const  router = Router();

router.get("/", (req, res) =>{
  res.json({
    status: "ok",
  })
});

router.use("/users", users);
router.use("/posts", posts);

export default router;
