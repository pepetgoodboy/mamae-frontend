import Logo from "../../assets/images/logo.png";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-mamae-production.up.railway.app/api/user/login",
        {
          email,
          password,
        }
      );
      if (!response.data.success) {
        setError(response.data.message);
        setEmail("");
        setPassword("");
      } else {
        localStorage.setItem("token", response.data.token);
        setError("");
        navigate("/");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-center bg-no-repeat bg-auth-background bg-cover lg:gap-20 font-nunito">
        <div className="">
          <div className="flex flex-col text-white gap-2">
            <div className="mb-5">
              <img src={Logo} className="w-40 lg:w-32" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold flex justify-center mb-4">
              Hi, Felas!
            </h1>
            <div className="hidden lg:block lg:mt-6">
              <p className="lg:text-lg">
                Jangan panik! Serahkan pada <br />
                <span className="text-2xl font-semibold">Mamae Laundry</span>
              </p>
              <p className="lg:text-lg">
                Pekerjaan rumahmu akan menjadi <br />
                mudah dengan layanan kami.
              </p>
              <div className="flex justify-center items-center gap-5 mt-8 lg:mt-10">
                <FaFacebook className="w-7 h-7 text-white" />
                <FiInstagram className="w-7 h-7 text-white" />
                <FaTwitter className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          <div className="flex flex-col gap-6">
            <h2 className="text-white font-medium text-2xl lg:text-3xl flex justify-center lg:mb-8">
              Masuk
            </h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-8">
              {error && <p className="text-red-500 text-center">{error}</p>}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
                className="w-72 px-4 py-2 rounded-lg font-medium bg-zinc-900 border border-neutral-600 text-[#b2b2b2] text-sm focus:outline-none"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
                className="w-72 px-4 py-2 rounded-lg font-medium bg-zinc-900 border border-neutral-600 text-[#b2b2b2] text-sm focus:outline-none"
              />
              <div className="flex lg:mt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Masuk
                </button>
              </div>
            </form>
            <p className="text-white text-sm flex justify-center lg:mt-4">
              Belum memiliki akun, Daftar
              <Link
                to="/register"
                className="text-orange-400 cursor-pointer hover:text-orange-500"
              >
                &nbsp;Sekarang!
              </Link>
            </p>
            <div className="flex lg:hidden justify-center items-center gap-5 mt-4">
              <FaFacebook className="w-7 h-7 text-white" />
              <FiInstagram className="w-7 h-7 text-white" />
              <FaTwitter className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
