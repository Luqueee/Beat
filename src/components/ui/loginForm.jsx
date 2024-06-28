export const LoginForm = () => {
  return (
    <form
      method="POST"
      action="/api/auth/signin"
      className="flex flex-col items-center w-full h-full absolute inset-0"
    >
      <div className=" w-[20%] flex flex-col gap-4 h-full items-center justify-center  ">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className="p-2 w-full text-black bg-white"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="p-2 w-full text-black bg-white"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 rounded-md text-white border-none w-full"
        >
          Login
        </button>
      </div>
    </form>
  );
};
