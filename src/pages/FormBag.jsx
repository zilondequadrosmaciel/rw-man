import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const FormBag = () => {
  const [bag, setBag] = useState(null);
  const [description, setDescription] = useState("");
  const [detail, setDetail] = useState("");
  const [color, setColor] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [imageDefault] = useState("./default/default.png");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("files", bag);
    formData.append("description", description);
    formData.append("detail", detail);
    formData.append("color", color);
    formData.append("model", model);
    formData.append("brand", brand);
    formData.append("price", price);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type",
      },
    };
    const url = "https://rw-api-production.up.railway.app/user/create/";
    axios
      .post(url, formData, config)
      .then((response) => console.log(response))
      .catch((err) => {
        console.log("err", err);
      });
    toast.success("Registro adicionado com sucesso!");

    setDescription((e.target.value = ""));
    setDetail((e.target.value = ""));
    setColor((e.target.value = ""));
    setModel((e.target.value = ""));
    setBrand((e.target.value = ""));
    setPrice((e.target.value = ""));
  };

  const handleClick = () => {
    navigate("/queroremover");
  };

  const handleChange = (e) => {
    setBag(e.target.files[0]);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleDetail = (e) => {
    setDetail(e.target.value);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleModel = (e) => {
    setModel(e.target.value);
  };

  const handleBrand = (e) => {
    setBrand(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="container-sm p-3">
      <form onSubmit={handleSubmit}>
        {bag ? (
          <img
            className="m-2"
            src={URL.createObjectURL(bag)}
            alt="image"
            width={250}
            height={250}
          />
        ) : (
          <img
            src={imageDefault}
            className="m-2"
            alt="image"
            width={250}
            height={250}
          />
        )}
        <h3>Product Registration</h3>
        <div className="d-flex justify-content-between">
          <div className="card-body shadow">
            <div className="input-group">
              <input
                type="file"
                name="image"
                className="form-control m-2"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                className="form-control m-2"
                type="text"
                name="description"
                value={description}
                placeholder="write the description"
                onChange={handleDescription}
                autoFocus
                required
              />
              <input
                className="form-control m-2"
                type="text"
                name="detail"
                value={detail}
                placeholder="write the detail"
                onChange={handleDetail}
              />
            </div>
            <div className="input-group">
              <input
                className="form-control m-2"
                type="text"
                name="color"
                value={color}
                placeholder="write the color"
                onChange={handleColor}
              />
              <input
                className="form-control m-2"
                type="text"
                name="model"
                value={model}
                placeholder="write the model"
                onChange={handleModel}
              />
            </div>
            <div className="input-group">
              <input
                className="form-control m-2"
                type="text"
                name="brand"
                value={brand}
                placeholder="write the brand"
                onChange={handleBrand}
              />
              <input
                className="form-control m-2"
                type="text"
                name="price"
                value={price}
                placeholder="write the price"
                onChange={handlePrice}
                required
              />
            </div>
          </div>
        </div>
        <button className="btn btn-success m-2" type="submit">
          Save
        </button>
        <button onClick={handleClick} className="btn btn-danger m-2">
          Remove
        </button>
      </form>
    </div>
  );
};
