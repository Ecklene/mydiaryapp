import express from 'express';
import bodyParser from 'body-parser';
import EntryController from '../controllers/entrycontroller';
const router = express.Router();


router.get("/entries", EntryController.viewAll);

router.get("/entries/:entryId", EntryController.view);

router.post("/entries", EntryController.create)

router.put("/entries/:entryId", EntryController.update)

router.delete("/entries/:entryId", EntryController.remove)

export default router;