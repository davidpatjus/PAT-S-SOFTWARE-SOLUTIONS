import './gradients.css'

export const Banner = () => {
  return (
    <div className="py-3 text-center bg-rainbow-gradient">
      <div className="container">
        <p className="font-medium text-lg text-black">
          <span className="hidden sm:inline">
            Potencia la eficiencia en tu MARCA / NEGOCIO -{" "}
          </span>
          <a 
            href="#" 
            className="underline underline-offset-4 font-bold"
            >
            AGENDA TU CITA 
          </a>
        </p>
      </div>
    </div>
  );
};
