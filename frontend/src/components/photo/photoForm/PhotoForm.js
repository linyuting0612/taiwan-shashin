import React, {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";
// import {handleDescChange} from AddPhoto 

import "./PhotoForm.css";
// import AddPhoto from "../../../pages/addPhoto/AddPhoto";


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
                    {/* <input
                        id="decs"
                        type="text"
                        // defaultValue="Hello!"
                        placeholder="Some description for your photo..."
                        name="decs"
                        value={photo?.description}
                        onChange={(e) => handleInputChange(e)}
                    /> */}
                    <ReactQuill
                        theme="snow"
                        // placeholder="Give some description for your photo..."
                        value={description}
                        onChange={setDescription}
                        // modules={PhotoForm.modules}
                        modules={{
                            clipboard: {
                                matchVisual: false
                            }
                        }}
                        // formats={PhotoForm.formats}
                    />

                    <div className="--my">
                        <button type="submit" className="--btn --btn-primary">
                            Save Photo
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

// PhotoForm.modules = {
//     toolbar: [
//         [{ header: "1" }, { header: "2" }, { font: [] }],
//         [{ size: [] }],
//         ["bold", "italic", "underline", "strike", "blockquote"],
//         [{ align: [] }],
//         [{ color: [] }, { background: [] }],
//         [
//             { list: "ordered" },
//             { list: "bullet" },
//             { indent: "-1" },
//             { indent: "+1" },
//         ],
//         ["clean"],
//     ],
//     clipboard: {
//         matchVisual: false
//     },
// };
// PhotoForm.formats = [
//     "header",
//     "font",
//     "size",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "color",
//     "background",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "video",
//     "image",
//     "code-block",
//     "align",
// ];

export default PhotoForm;
