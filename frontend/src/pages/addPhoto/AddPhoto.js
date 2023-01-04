import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PhotoForm from "../../components/photo/photoForm/PhotoForm";
import { createPhoto } from "../../redux/features/photo/photoSlice";
import { toast } from "react-toastify";


const initialState = {
    name: "",
    category: "",
    // description: "",
};

const AddPhoto = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(initialState);
    const [photoImage, setPhotoImage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [description, setDescription] = useState("");

    const { name, category } = photo;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPhoto({ ...photo, [name]: value });
    };

    const handleImageChange = (e) => {
        setPhotoImage(e.target.files[0]);
        setImagePreview(URL.createObjectURL(e.target.files[0]));
    };

    const savePhoto = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("category", category);
        formData.append("description",description);
        formData.append("image", photoImage);

        console.log(...formData);

        await dispatch(createPhoto(formData));
        

        navigate("/dashboard");
    };

    return (
        <div>
            <h3 className="--mt">Add New Photo</h3>
            <PhotoForm
                photo={photo}
                photoImage={photoImage}
                imagePreview={imagePreview}
                description={description}
                setDescription={setDescription}
                handleInputChange={handleInputChange}
                handleImageChange={handleImageChange}
                savePhoto={savePhoto}
            />
        </div>
    );
};

export default AddPhoto;
