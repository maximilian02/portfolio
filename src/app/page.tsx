import HighlightText from "./components/HighlightText"

const HomePage = () => {
  return (
    <>
      <div className="cursor-text flex justify-around mt-8">
        <img
          src="/me.webp"
          className="rounded-full border border-white w-1/3 md:w-1/6 object-scale-down"
          alt="Max Zelarayán Profile Picture"
        />
      </div>
      <h1 className="text-xl font-bold mb-2 pl-4 mt-8">
        <HighlightText>
          Hola, bienvenido/a! Soy Maximiliano Zelarayán, pero ya que estas acá
          me podes decir Max{" "}
          <span className="text-6xl">&#128104;&#127995;&#128077;&#127996;</span>
        </HighlightText>
      </h1>
      <div className="cursor-text pl-4 text-lg">
        <p>
          Cuento con más de 13 años de experiencia en la industria del software.
          Actualmente, me dedico a la asesoría e implementación de
          automatizaciones e integraciones en todo tipo de empresas y negocios
          que busquen optimizar los procesos en sus respectivos ejercicios
          laborales, con un impacto directo en la eficiencia y los resultados
          financieros.
          <br />
          Entre mis soluciones destacadas, ofrezco desarrollos a medida,
          desarrollo de bots para WhatsApp, así como diversas herramientas
          tecnológicas orientadas a mejorar la presencia y el proceso de cambio
          digital. Estaré encantado de coordinar una reunión si considera que
          estas soluciones pueden ser de su interés.
        </p>
        <br />
      </div>
      <div className="flex justify-center">
        <a className="text-center text-xl" href="/contact">
          Contacto
        </a>
      </div>
    </>
  )
}

export default HomePage
