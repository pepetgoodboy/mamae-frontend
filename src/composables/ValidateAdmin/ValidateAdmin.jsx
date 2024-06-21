import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ValidateAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin");
    }
  }, [navigate]);
};

export default ValidateAdmin;
