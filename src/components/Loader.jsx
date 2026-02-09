import { FaPaw } from "react-icons/fa6";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 gap-4">
      <FaPaw className="text-6xl text-primary animate-bounce opacity-80" />
      <span className="text-primary/70 font-bold text-lg animate-pulse tracking-widest">CARGANDO...</span>
    </div>
  );
};

export default Loader;
