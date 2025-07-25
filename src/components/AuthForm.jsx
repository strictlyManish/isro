import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(isLogin ? "Logging in..." : "Registering...", data);
    reset();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br to-orange-100 px-4">
      <motion.div
        key={isLogin ? "login" : "register"}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-orange-500 mb-6">
          {isLogin ? "Login to your account" : "Create a new account"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <AnimatePresence>
            {!isLogin && (
              <motion.input
                key="name"
                type="text"
                {...register("name")}
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>

          <motion.input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
            whileTap={{ scale: 0.95 }}
          >
            {isLogin ? "Login" : "Register"}
          </motion.button>
        </form>

        <p className="mt-4 text-center text-gray-600 text-sm sm:text-base">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-500 font-medium hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthForm;
