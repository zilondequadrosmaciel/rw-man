import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const RemoveBag = () => {
  const [id, setId] = useState("");

  const navigate = useNavigate();

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleHome = () => {
    navigate("/");
  };

  const url = `https://rw-api-production.up.railway.app/user/remove/${id}`;

  const handleRemove = async (e) => {
    e.preventDefault();
    await axios.delete(url);
    toast.success("Registro removido com sucesso!");
    setId((e.target.value = ""));
  };

  return (
    <div className="container-sm w-50 mt-5">
      <div className="card-body shadow">
        <form onSubmit={handleRemove}>
          <div className="input-group pb-2">
            <input
              className="form-control mb-2"
              type="text"
              name="id"
              value={id}
              placeholder="digite o código a ser excluído"
              onChange={handleId}
              autoFocus
              required
            />
          </div>
          <button className="btn btn-danger m-2" type="submit">
            Remove
          </button>
          <button onClick={handleHome} className="btn btn-success m-2">
            Home
          </button>
        </form>
      </div>
    </div>
  );
};
