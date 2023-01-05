import { useState, useEffect } from "react";
import "./PhotoCard.css";
import DOMPurify from "dompurify";


//
import axios from 'axios';
const axs = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:4096/api',
});
//


const PhotoCard = ({currentCategory, closeCard}) => {

    useEffect(() => {
        getPhotoData();
    }, [currentCategory]);
    

    const [imgSrc, setImgSrc] = useState('https://res.cloudinary.com/dstzn1rae/image/upload/v1672889455/Taiwan%20Shashin%20Web/ezdmfn0pfykp82rha1ig.jpg');
    // const [imgSrc, setImgSrc] = useState('');
    const [imgName, setImgName] = useState('');
    const [imgDescription, setImgDescription] = useState('');

    const [photoData, setPhotoData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const getPhotoData = async () => {
        // const {data} = await axs.get("/photos");
        const {data} = await axs.get(`/photos/${currentCategory}`);
        console.log(data);
        setPhotoData(data);
        if(data.length > 0) {
            setImgSrc(data[currentIndex].image.filePath);
            setImgName(data[currentIndex].name);
            setImgDescription(data[currentIndex].description);
        }
    };

    const prevPhoto = async () => {
        if(photoData.length === 0) {
            return;
        }
      setImgSrc(photoData[(currentIndex === 0) ? (photoData.length - 1) : (currentIndex - 1)].image.filePath);
      setImgName(photoData[(currentIndex === 0) ? (photoData.length - 1) : (currentIndex - 1)].name);
      setImgDescription(photoData[(currentIndex === 0) ? (photoData.length - 1) : (currentIndex - 1)].description);
        if(currentIndex === 0) {
            setCurrentIndex(photoData.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };
    
    // santinize the HTML tag
    function stripHTML(input) {
        let output = '';
        if(typeof(input)=='string'){
            output = input.replace(/(<([^>]+)>)/ig,"");
        }
        return output;
    }

    const nextPhoto = async () => {
        if(photoData.length === 0) {
            return;
        }
        setImgSrc(photoData[(currentIndex === photoData.length - 1) ? (0) : (currentIndex + 1)].image.filePath);
        setImgName(photoData[(currentIndex === photoData.length - 1) ? (0) : (currentIndex + 1)].name);
        setImgDescription(photoData[(currentIndex === photoData.length - 1) ? (0) : (currentIndex + 1)].description);
        if(currentIndex === photoData.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="photoCard">
            <div className="closeButtonContainer">
                <button id="closeButton" onClick={closeCard}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
            
            <div className="imgContainer">
                <div className="imgContainer-top">
                    <img className="photo" src={imgSrc} />
                </div>
                <div className="imgContainer-bottom">
                    <div className="nextButtonContainer">
                        <button id="prevButton" onClick={prevPhoto}  style={{display:"inline-block"}}>
                            <span className="material-symbols-outlined">arrow_back_ios</span>
                        </button>
                    </div>
                    <div className="photoDetail">
                        <div className="photoName">{imgName}</div>
                        <div className="photoDescription">{stripHTML(imgDescription)}</div>
                        <div className="category">@{currentCategory}</div>
                    </div>
                    <div className="nextButtonContainer">
                        <button id="nextButton" onClick={nextPhoto} style={{display:"inline-block"}}>
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                        </button>
                    </div>
                </div>
            </div>
            
    
        </div>
    );
};

export default PhotoCard;