import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    if(data){
      toast.success("form submited");
      reset()
    }
  };

  return (
    <footer className="py-10 sm:pt-16 lg:pt-24 text-white bg-black">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img
              className="w-auto h-9"
              src="/favicon.png.webp"
              alt="Logo"
            />
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Indian Space Research Organisation (ISRO) is the space agency of
              India. The organisation is involved in science, engineering and
              technology to harvest the benefits.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              In ISRO
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "About",
                "Activities",
                "Services",
                "Programmes",
                "Resources",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="flex text-base text-zinc-200 transition-all duration-200 hover:text-blue-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className={`block w-full p-4 placeholder-gray-500 transition-all text-black duration-200 border ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  } rounded-md focus:outline-none focus:border-blue-600 caret-blue-600`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2 text-sm font-semibold text-white bg-orange-600 rounded hover:bg-blue-700 transition"
          >
            Back to top
          </button>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />
        <p className="text-sm text-center text-gray-600">
          © {new Date().getFullYear()} Copyright 2023 ISRO. All Rights Reserved
          <br />
          Designed by MANISH KUMAR ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
