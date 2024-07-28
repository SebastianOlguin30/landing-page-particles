import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return ( 
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20 p-10">
                <div className="max-w-[450px] mt-36 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5 ">
                        Mis{" "}
                        <span className="font-bold text-secondary">
                            Servicios.
                        </span>
                    </h1>
                    <p className="mb-3 text-l text-gray-300">Ofrezco servicios especializados en el desarrollo y optimización de sistemas, centrados en mejorar la eficiencia y confiabilidad de las operaciones de TI. Utilizando tecnologías y prácticas avanzadas como la automatización, la integración y entrega continua (CI/CD), implemento soluciones que agilizan los procesos de desarrollo y despliegue. Empleo herramientas líderes en la industria como GitHub, Jenkins, Docker, SonarQube, y plataformas en la nube como Azure, AWS y GCP. Mi enfoque está en crear infraestructuras robustas y escalables, asegurando que los sistemas de mis clientes funcionen de manera óptima y soporten su crecimiento y éxito empresarial.</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>
                {/*SLIDER*/}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
     );
}
 
export default ServicesPage;