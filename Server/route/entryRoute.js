import express from 'express';
import bodyParser from 'body-parser';
import entry from '../controller/entrycontroller.js';
const router = express.Router();


router.get("/entries", entry.viewAll);

router.get("/entries/:entryId", entry.view);

router.post("/entries", entry.create)

router.put("/entries/:entryId", entry.update)

router.delete("/entries/:entryId", entry.remove)

export default router;