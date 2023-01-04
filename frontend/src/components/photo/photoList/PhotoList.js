import React, { useEffect, useState } from "react";
import "./PhotoList.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import Search from "../../search/Search";
import { useDispatch, useSelector } from "react-redux";
import {
    FILTER_PHOTOS,
    selectFilteredPhotos,
} from "../../../redux/features/photo/filterSlice";
import ReactPaginate from "react-paginate";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
    deletePhoto,
    getPhotos,
} from "../../../redux/features/photo/photoSlice";
import { Link } from "react-router-dom";

const PhotoList = ({photos}) => {
    const [search, setSearch] = useState("");
    const filteredPhotos = useSelector(selectFilteredPhotos);

    const dispatch = useDispatch();

    const shortenText = (text, n) => {
        if (text.length > n) {
            const shortenedText = text.substring(0, n).concat("...");
            return shortenedText;
        }
        return text;
    };

    const delPhoto = async (id) => {
        console.log(id);
        await dispatch(deletePhoto(id));
        await dispatch(getPhotos());
    };

    const confirmDelete = (id) => {
        confirmAlert({
            title: "Delete Photo",
            message: "Are you sure you want to delete this photo.",
            buttons: [
                {
                    label: "Delete",
                    onClick: () => delPhoto(id),
                },
                {
                    label: "Cancel",
                    // onClick: () => alert('Click No')
                },
            ],
        });
    };

    //   Begin Pagination
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(filteredPhotos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filteredPhotos.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, filteredPhotos]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filteredPhotos.length;
        setItemOffset(newOffset);
    };
    //   End Pagination

    useEffect(() => {
        dispatch(FILTER_PHOTOS({ photos, search }));
    }, [photos, search, dispatch]);

    return (
        <div className="photo-list">
            <hr />
            <div className="table">
                <div className="--flex-between --flex-dir-column">
                  <span>
                     <h3>Your photos</h3>
                  </span>
                  <span>
                      <Search
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                      />
                  </span>
                </div>

                {/* {<SpinnerImg />} */}

                <div className="table">
                    {photos.length === 0 ? (
                        <p>-- No photo found, please add a photo...</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {currentItems.map((photo, index) => {
                                    const { _id, name, category} = photo;
                                    return (
                                        <tr key={_id}>
                                            <td>{index + 1}</td>
                                            <td>{shortenText(name, 16)}</td>
                                            <td>{category}</td>
                                  
                                            <td className="icons">
                                              <span>
                                                <Link to={`/photo-detail/${_id}`}>
                                                  <AiOutlineEye size={25} color={"purple"} />
                                                </Link>
                                              </span>
                                              <span>
                                                <Link to={`/edit-photo/${_id}`}>
                                                  <FaEdit size={20} color={"green"} />
                                                </Link>
                                              </span>
                                              <span>
                                                <FaTrashAlt
                                                  size={20}
                                                  color={"red"}
                                                  onClick={() => confirmDelete(_id)}
                                                />
                                              </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="Prev"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="activePage"
              />
            </div>
        </div>
    );
};

export default PhotoList;
