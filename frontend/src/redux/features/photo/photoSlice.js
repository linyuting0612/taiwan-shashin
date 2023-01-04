import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoService from "./photoService";
import { toast } from "react-toastify";



const initialState = {
    photo: null,
    photos: [],
    isError: false,
    isSuccess: false,
    // isLoading: false,
    message: "",
    // totalStoreValue: 0,
    // outOfStock: 0,
    category: [],
};

// Create New Photo
export const createPhoto = createAsyncThunk(
  
    "photos/create",
    async (formData, thunkAPI) => {
        try {
            return await photoService.createPhoto(formData);
        } catch (error) {
            const message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            toast.error(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get all Photos
export const getPhotos = createAsyncThunk(
    "photos/getAll",
    async (_, thunkAPI) => {
        try {
            return await photoService.getPhotos();
        } catch (error) {
            const message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

/******************* */
// Get all Photos
// export const getPhotosByCategory = createAsyncThunk(
//     "photos/getbycategory",
//     async (_, thunkAPI) => {
//         try {
//             return await photoService.getPhotosByCategory();
//         } catch (error) {
//             const message =
//                 (error.response &&
//                   error.response.data &&
//                   error.response.data.message) ||
//                 error.message ||
//                 error.toString();
//             console.log(message);
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// );

// Delete a Photo
export const deletePhoto = createAsyncThunk(
    "photos/delete",
    async (id, thunkAPI) => {
        try {
            return await photoService.deletePhoto(id);
        } catch (error) {
            const message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get a photo
export const getPhoto = createAsyncThunk(
    "photos/getPhoto",
    async (id, thunkAPI) => {
      try {
        return await photoService.getPhoto(id);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message);
      }
    }
);
// Update product
export const updatePhoto = createAsyncThunk(
    "photos/updatePhoto",
    async ({ id, formData }, thunkAPI) => {
        try {
            return await photoService.updatePhoto(id, formData);
        } catch (error) {
            const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const photoSlice = createSlice({
    name: "photo",
    initialState,
    reducers: {
        CALC_CATEGORY(state, action) {
            const photos = action.payload;
            const array = [];
            photos.map((item) => {
                const { category } = item;

                return array.push(category);
            });
            const uniqueCategory = [...new Set(array)];
            state.category = uniqueCategory;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //     //   .addCase(createPhoto.pending, (state) => {
    //     //       state.isLoading = true;
    //     //   })
    //       .addCase(createPhoto.fulfilled, (state, action) => {
    //         //   state.isLoading = false;
    //           state.isSuccess = true;
    //           state.isError = false;
    //           console.log(action.payload);
    //           state.photos.push(action.payload);
    //           toast.success("Photo added successfully");
    //       })
    //       .addCase(createPhoto.rejected, (state, action) => {
    //         //   state.isLoading = false;
    //           state.isError = true;
    //           state.message = action.payload;
    //           toast.error(action.payload);
    //       })
    //     //   .addCase(getPhotos.pending, (state) => {
    //     //       state.isLoading = true;
    //     //   })
    //       .addCase(getPhotos.fulfilled, (state, action) => {
    //         //   state.isLoading = false;
    //           state.isSuccess = true;
    //           state.isError = false;
    //           console.log(action.payload);
    //           state.photos = action.payload;
    //       })
    //       .addCase(getPhotos.rejected, (state, action) => {
    //         //   state.isLoading = false;
    //           state.isError = true;
    //           state.message = action.payload;
    //           toast.error(action.payload);
    //       })
    //     //   .addCase(deletePhoto.pending, (state) => {
    //     //     //   state.isLoading = true;
    //     //   })
    //       .addCase(deletePhoto.fulfilled, (state, action) => {
    //         //   state.isLoading = false;
    //           state.isSuccess = true;
    //           state.isError = false;
    //           toast.success("Photo deleted successfully");
    //       })
    //       .addCase(deletePhoto.rejected, (state, action) => {
    //         //   state.isLoading = false;
    //           state.isError = true;
    //           state.message = action.payload;
    //           toast.error(action.payload);
    //       })
    //     //   .addCase(getPhoto.pending, (state) => {
    //     //       state.isLoading = true;
    //     //   })
    //       // .addCase(getPhoto.fulfilled, (state, action) => {
    //       //   //   state.isLoading = false;
    //       //     state.isSuccess = true;
    //       //     state.isError = false;
    //       //     state.photo = action.payload;
    //       // })
    //       // .addCase(getPhoto.rejected, (state, action) => {
    //       //   //   state.isLoading = false;
    //       //     state.isError = true;
    //       //     state.message = action.payload;
    //       //     toast.error(action.payload);
    //       // })
    //     //   .addCase(updatePhoto.pending, (state) => {
    //     //       state.isLoading = true;
    //     //   })
    //       .addCase(updatePhoto.fulfilled, (state, action) => {
    //         //   state.isLoading = false;
    //           state.isSuccess = true;
    //           state.isError = false;
    //           toast.success("Photo updated successfully");
    //       })
    //       .addCase(updatePhoto.rejected, (state, action) => {
    //         //   state.isLoading = false;
    //           state.isError = true;
    //           state.message = action.payload;
    //           toast.error(action.payload);
    //       });
    // },
});

export const { CALC_CATEGORY } = photoSlice.actions;

// export const selectIsLoading = (state) => state.photo.isLoading;
export const selectPhoto = (state) => state.photo.photo;
// export const selectTotalStoreValue = (state) => state.product.totalStoreValue;
// export const selectOutOfStock = (state) => state.product.outOfStock;
export const selectCategory = (state) => state.photo.category;

export default photoSlice.reducer;
