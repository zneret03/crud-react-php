import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost/react/api/${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost/react/api/${id}/edit`, inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/");
      });
  };
  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8">
        <h1>Edit user</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              value={inputs.name}
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
              value={inputs.email}
              className="form-control"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Mobile</label>
            <input
              type="text"
              value={inputs.mobile}
              className="form-control"
              name="mobile"
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-around ap-2">
            <Link to="/">
              <button type="button" className="btn btn-warning">
                Back
              </button>
            </Link>
            <button type="submit" name="update" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="col-2"></div>
    </div>
  );
}
