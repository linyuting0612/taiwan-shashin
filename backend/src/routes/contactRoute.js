import express from 'express';
import contactUs from '../controllers/contactController.js';
const router = express.Router();
import protect from '../middlewares/authMiddleware.js';

router.post("/", protect, contactUs);

export default router;
