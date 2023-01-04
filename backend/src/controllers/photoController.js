import asyncHandler from "express-async-handler";
import Photo from "../models/photoModel.js";
import { fileSizeFormatter } from "../../utils/fileUpload.js";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dstzn1rae', 
    api_key: '959915467363159', 
    api_secret: 'nHTG2VPKdKVZ0MAhlFMTzpInycM',
    secure: true
});

const createPhoto = asyncHandler(async (req, res) => {
    const { name, category, description } = req.body;

    // Validation
    if(!name || !category || !description) {
        res.status(400);
        throw new Error("Please fill in all fields");
    }

    // Handle image upload
    let fileData = {};
    if(req.file) {
        // Save image to Cloudinary
        let uploadedFile;
        try {
            uploadedFile = await cloudinary.uploader.upload(req.file.path, {folder: "Taiwan Shashin Web", resource_type: "image"});
        } catch(error) {
            res.status(500);
            throw new Error("Image could not be uploaded");
        };

        fileData = {
            fileName: req.file.originalname,
            filePath: uploadedFile.secure_url,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2),
        };
    }

    // Create Photo
    const photo = await Photo.create({
        user: req.user.id,
        name,
        category,
        description,
        image: fileData,
    });

    res.status(201).json(photo);
});

// Get all Photos
const getPhotos = asyncHandler(async (req, res) => {
    // const Photos = await Photo.find({user: req.user.id}).sort("-createdAt");
    const Photos = await Photo.find({}).sort("-createdAt");
    res.status(200).json(Photos);
});

// Get single Photo
const getPhoto = asyncHandler(async (req, res) => {
    const Photo = await Photo.findById(req.params.id);
    // If Photo doesn't exist
    if(!Photo) {
        res.status(404);
        throw new Error("Photo not found");
    }
    // Match Photo to its user
    if(Photo.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }

    res.status(200).json(Photo);
});

// Delete Photo

const deletePhoto = asyncHandler(async (req, res) => {
    const Photo = await Photo.findById(req.params.id);
    // If Photo doesn't exist
    if(!Photo) {
        res.status(404);
        throw new Error("Photo not found");
    }
    // Match Photo to its user
    if(Photo.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }

    await Photo.remove();

    res.status(200).json({message: "Photo deleted"});
});

// Update Photo
const updatePhoto = asyncHandler(async (req, res) => {
    const { name, category, quantity, price, description } = req.body;
    const {id} = req.params;

    const Photo = await Photo.findById(id);
    // If Photo doesn't exist
    if(!Photo) {
        res.status(404);
        throw new Error("Photo not found");
    }
    // Match Photo to its user
    if(Photo.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }

    // Handle image upload
    let fileData = {};
    if(req.file) {
        // Save image to Cloudinary
        let uploadedFile;
        try {
            uploadedFile = await cloudinary.uploader.upload(req.file.path, {folder: "Pinvent App", resource_type: "image"});
        } catch(error) {
            res.status(500);
            throw new Error("Image could not be uploaded");
        };

        fileData = {
            fileName: req.file.originalname,
            filePath: uploadedFile.secure_url,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2),
        };
    }

    // Update Photo

    const updatedPhoto = await Photo.findByIdAndUpdate(
        {_id: id},
        {
            name,
            category,
            description,
            image: Object.keys(fileData).length === 0 ? Photo?.image : fileData,
        },
        {
            new: true,
            runValidators: true,
        }
    );

    res.status(200).json(updatedPhoto);
});
// Get photos by category
const getPhotosByCategory = asyncHandler(async (req, res) => {
    const photos = await Photo.find({ category: req.params.category });

    res.status(200).json(photos);
});

export { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto, getPhotosByCategory };