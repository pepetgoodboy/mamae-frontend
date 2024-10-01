import Logo from "../../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-spinner-material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://yappy-sadella-curhatin-57043035.koyeb.app//api/user/login",
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
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {pageLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white z-50">
          <Spinner radius={30} color={"#3B68FF"} stroke={3} visible={true} />
        </div>
      )}
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen image-auth bg-center bg-no-repeat bg-cover lg:gap-20 font-plus-jakarta-sans">
        <div className="">
          <div className="flex flex-col text-tertiary gap-2">
            <div className="mb-5 flex items-center">
              <img src={Logo} alt="logo" className="w-16 lg:w-24" />
              <p className="text-black font-bold text-2xl lg:text-3xl">amae</p>
            </div>
            <h1 className="text-2xl lg:text-3xl text-black font-semibold flex justify-center mb-4">
              Hi, Felas!
            </h1>
            <div className="hidden lg:block lg:mt-6 text-tertiary">
              <p className="lg:text-lg">
                Jangan panik! Serahkan pada <br />
                <span className="text-2xl font-semibold">Mamae Laundry</span>
              </p>
              <p className="lg:text-lg">
                Pekerjaan rumahmu akan menjadi <br />
                mudah dengan layanan kami.
              </p>
              <div className="flex justify-center items-center gap-5 mt-8 lg:mt-10">
                <FaFacebook className="w-7 h-7 text-primary" />
                <FiInstagram className="w-7 h-7 text-primary" />
                <BsTwitterX className="w-7 h-7 text-primary" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          <div className="flex flex-col gap-6">
            <h2 className="text-tertiary font-medium text-2xl lg:text-3xl flex justify-center lg:mb-8">
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
                className="w-72 px-4 py-2 rounded-lg font-medium bg-white border border-neutral-200 text-[#b2b2b2] text-sm focus:outline-none"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
                className="w-72 px-4 py-2 rounded-lg font-medium bg-white border border-neutral-200 text-[#b2b2b2] text-sm focus:outline-none"
              />
              <div className="flex lg:mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center py-2 rounded-md bg-primary hover:bg-blue-600 text-white"
                >
                  {loading ? (
                    <Spinner
                      radius={20}
                      color={"#ffffff"}
                      stroke={2}
                      visible={true}
                    />
                  ) : (
                    "Masuk"
                  )}
                </button>
              </div>
            </form>
            <p className="text-tertiary text-sm flex justify-center lg:mt-4">
              Belum memiliki akun, Daftar
              <Link
                to="/register"
                className="text-primary cursor-pointer hover:text-blue-600"
              >
                &nbsp;Sekarang!
              </Link>
            </p>
            <div className="flex lg:hidden justify-center items-center gap-5 mt-4">
              <FaFacebook className="w-7 h-7 text-primary" />
              <FiInstagram className="w-7 h-7 text-primary" />
              <BsTwitterX className="w-7 h-7 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
