export const Banner = () => {
  return (
    <div className="py-3 text-center bg-gradient-to-r from-[#430072d7] via-[#4c0791cc] to-[#430072d7]">
      <div className="container">
        <p className="font-medium text-white">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface -{" "}
          </span>
          <a 
            href="#" 
            className="underline underline-offset-4 font-bold"
            >
            Explore the Demo 
          </a>
        </p>
      </div>
    </div>
  );
};
