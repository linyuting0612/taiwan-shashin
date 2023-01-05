import React, {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./PhotoForm.css";


const PhotoForm = ({
    photo,
    photoImage,
    imagePreview,
    description,
    setDescription,
    handleInputChange,
    handleImageChange,
    savePhoto,
}) => {
    
    const selectOptions = [
        { value: 'Choose', label: 'Choose' },
        { value: 'Chiayi City', label: 'Chiayi City' },
        { value: 'Chiayi County', label: 'Chiayi County' },
        { value: 'Changhua County', label: 'Changhua County' },
        { value: 'Hualien County', label: 'Hualien County' },
        { value: 'Hsinchu City', label: 'Hsinchu City' },
        { value: 'Hsinchu County', label: 'Hsinchu County' },
        { value: 'Kaohsiung City', label: 'Kaohsiung City' },
        { value: 'Keelung City', label: 'Keelung City' },
        { value: 'Kinmen County', label: 'Kinmen County' },
        { value: 'Lienchiang County', label: 'Lienchiang County' },
        { value: 'Miaoli County', label: 'Miaoli County' },
        { value: 'Nantou County', label: 'Nantou County' },
        { value: 'New Taipei City', label: 'New Taipei City' },
        { value: 'Penghu County', label: 'Penghu County' },
        { value: 'Pingtung County', label: 'Pingtung County' },
        { value: 'Taichung City', label: 'Taichung City' },
        { value: 'Tainan City', label: 'Tainan City' },
        { value: 'Taipei City', label: 'Taipei City' },
        { value: 'Taitung County', label: 'Taitung County' },
        { value: 'Taoyuan City', label: 'Taoyuan City' },
        { value: 'Yilan County', label: 'Yilan County' },
        { value: 'Yunlin County', label: 'Yunlin County' }
    ]

    const [isShown, setIsShown] = useState(false);
    const handleClick = e => {
        setIsShown(current => !current);
    };

    return (
        <div className="add-product">
            <Card cardClass={"card"}>
                <form onSubmit={savePhoto}>
                    <Card cardClass={"group"}>
                        <label>Photo Itself</label>
                        <code className="--color-dark">
                            Supported Formats: jpg, jpeg, png
                        </code>
                        <input
                            type="file"
                            name="image"
                            onChange={(e) => handleImageChange(e)}
                        />

                        {imagePreview != null ? (
                            <div className="image-preview">
                              <img src={imagePreview} alt="photograph" />
                            </div>
                        ) : (
                            <p>No image.</p>
                        )}
                    </Card>
                    <label>Title:</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Taiwan No.1"
                        name="name"
                        value={photo?.name}
                        onChange={handleInputChange}
                    />

                    <label>Location:</label>
                    <select 
                        id="category"
                        type="text"
                        placeholder="Where is it?"
                        name="category"
                        value={photo?.category}
                        onChange={(choice) => {handleInputChange(choice); console.log(choice.target.value)}}
                        >
                            {selectOptions.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                    </select>

                    <label>Description:</label>
                    <ReactQuill
                        theme="snow"
                        // placeholder="Give some description for your photo..."
                        value={description}
                        onChange={setDescription}
                        modules={PhotoForm.modules}
                        formats={PhotoForm.formats}
                    />

                    <div className="--my">
                        <button type="submit" className="--btn --btn-primary" onClick={handleClick}>
                            Save Photo
                        </button>
                        {isShown && (
                            <p style={{marginTop:"5px", fontSize:"14px", color:"gray"}}>You may need to wait a moment for uploading...</p>
                        )}
                    </div>
                </form>
            </Card>
        </div>
    );
};


export default PhotoForm;