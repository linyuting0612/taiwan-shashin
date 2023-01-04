import express from 'express';
import { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto, getPhotosByCategory } from '../controllers/photoController.js';
import protect from '../middlewares/authMiddleware.js';
import { upload } from '../../utils/fileUpload.js';

const router = express.Router();

router.post("/", protect, upload.single("image"), createPhoto);
router.patch("/:id", protect, upload.single("image"), updatePhoto);
router.get("/", getPhotos);
// router.get("/:id", protect, getPhoto);
router.get("/:category", getPhotosByCategory);
router.delete("/:id", protect, deletePhoto);

export default router;