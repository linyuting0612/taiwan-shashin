import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "../../components/photo/photoList/PhotoList";
// import ProductSummary from "../../components/photo/productSummary/ProductSummary";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { getPhotos } from "../../redux/features/photo/photoSlice";
import { selectPhoto } from "../../redux/features/photo/photoSlice";
import { getPhotoData } from "../../components/photoCard/PhotoCard";

/**************************************
 * The value is being accessed before 
 * the useSelector hook returns the data 
 * or that the main object is undefined in 
 * your redux store. What you can do is 
 * check if this object does exist 
 * then deconstruct.
 * *************************************/



const Dashboard = () => {
    // const initialState = {
    //     photos: {
    //     isError: false,
    //     message:''
    //     }
    // }
    useRedirectLoggedOutUser("/login");
    
  
    const dispatch = useDispatch(getPhotos());

    const isLoggedIn = useSelector(selectIsLoggedIn);

    // const photos = selectPhoto(
    //     photo
    // );
    // console.log(photos);
    // console.log(getPhotos);
    // const{isError, message} = photos;
    // const [photoData, updatePhotoData] = useState({
    //       isError:'',
    //       photos:[],
    //       message:''
    // });
    // useEffect(() => {
    //   if(photos) {
    //     updatePhotoData(photos);
    //   }
    // },)

    // useEffect(() => {
    //     if (isLoggedIn === true) {
    //         dispatch(getPhotos());
    //         console.log(photos);
    //     }

    //     if (isError) {
    //         console.log(message);
    //     }
    // }, [isLoggedIn, isError, message, dispatch, photos]);

  return (
    <div>
      {/* <ProductSummary products={products} /> */}
      {/* <PhotoList photos={photos}/> */}
      <h2>Dashboard!</h2>
    </div>
  );
};

export default Dashboard;
