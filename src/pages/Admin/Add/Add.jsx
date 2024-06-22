/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import uploadImage from "../../../assets/images/upload-image.png";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ValidateAdmin from "../../../composables/ValidateAdmin/ValidateAdmin";
import SidebarAdmin from "../../../components/SidebarAdmin";
import Spinner from "react-spinner-material";

const Add = ({ url }) => {
  ValidateAdmin();
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 1000);
  }, []);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/services/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
        });
        setImage(false);
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } else {
        toast.error(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Failed to add service", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <SidebarAdmin />
      <div className="w-full px-10 md:px-20 py-8 font-nunito bg-[#111111] min-h-screen text-[#b2b2b2]">
        <ToastContainer />
        <div>
          <h2 className="text-white font-medium text-2xl mb-3">Add Service</h2>
          {pageLoading ? (
            <div className="absolute inset-0 flex justify-center min-h-screen items-center">
              <Spinner
                radius={30}
                color={"#FFFFFF"}
                stroke={2}
                visible={true}
              />
            </div>
          ) : (
            <div>
              <form
                onSubmit={onSubmitHandler}
                className="flex flex-col gap-5 text-sm justify-center items-center md:justify-normal md:items-start"
              >
                <div className="flex flex-col gap-4">
                  <p>Upload Image</p>
                  <label htmlFor="image">
                    <img
                      src={image ? URL.createObjectURL(image) : uploadImage}
                      alt="upload image"
                      loading="lazy"
                      className="w-64 md:w-40 cursor-pointer border border-slate-500 rounded-md"
                    />
                  </label>
                  <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                    id="image"
                    hidden
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p>Service Name</p>
                  <input
                    onChange={onChangeHandler}
                    value={data.name}
                    type="text"
                    name="name"
                    placeholder="Type here"
                    className="border border-slate-500 rounded-md px-2 py-1 w-64 md:w-96 bg-[#111111]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p>Service Description</p>
                  <textarea
                    onChange={onChangeHandler}
                    value={data.description}
                    name="description"
                    rows="4"
                    placeholder="Write description here"
                    required
                    className="border border-slate-500 rounded-md px-2 py-1 w-64 md:w-96 bg-[#111111]"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-2">
                  <p>Service Price</p>
                  <input
                    onChange={onChangeHandler}
                    value={data.price}
                    type="number"
                    name="price"
                    placeholder="Rp 10.000"
                    className="border border-slate-500 rounded-md px-2 py-1 w-64 md:w-96 bg-[#111111]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-1 rounded-md max-w-64 md:max-w-sm disabled:bg-purple-300 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Spinner
                      radius={20}
                      color={"#ffffff"}
                      stroke={2}
                      visible={true}
                    />
                  ) : (
                    "Add Service"
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
