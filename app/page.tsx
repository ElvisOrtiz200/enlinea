"use client";

export default function Home() {
    return (
        <div className="font-sans leading-relaxed">
            {/* Encabezado */}
            <header className="bg-blue-600 text-white py-12 text-center">
                <h1 className="text-4xl font-bold">Sistema de Ayuda en Línea</h1>
                <p className="mt-4 text-xl">Asistencia para el Sistema Académico y Administrativo del Colegio Nikola Tesla</p>
            </header>

            {/* Navegación */}
            <nav className="flex justify-center bg-gray-100 py-4 shadow-md">
                <a href="#inicio" className={navLinkStyle}>Inicio</a>
                <a href="#sistemaWeb" className={navLinkStyle}>Sistema Web</a>
                <a href="#sistemaMovil" className={navLinkStyle}>Sistema Móvil</a>
                <a href="#asistencia" className={navLinkStyle}>Asistencia</a>
                <a href="#contacto" className={navLinkStyle}>Contáctanos</a>
            </nav>

            {/* Secciones */}
            <main className="px-6 py-12">
                {/* Inicio */}
                <section id="inicio" className="mb-16 p-8 bg-gray-50 rounded-lg shadow-md">
                    <h2 className="text-3xl text-blue-600 font-semibold mb-4">Bienvenido</h2>
                    <p className="text-lg">
                        Te damos la bienvenida a la página de ayuda en línea del sistema académico y administrativo del
                        *Colegio Nikola Tesla*. Aquí encontrarás la información necesaria para utilizar nuestras
                        herramientas de manera efectiva, tanto para docentes como para personal administrativo.
                    </p>
                </section>

                {/* Sistema Web */}
                <section id="sistemaWeb" className="mb-16 p-8 bg-gray-50 rounded-lg shadow-md">
                    <h2 className="text-3xl text-blue-600 font-semibold mb-4">Sistema Web para Docentes</h2>
                    <p className="text-lg mb-4">
                        El sistema web está diseñado para ayudar a los docentes a gestionar todas las actividades académicas
                        de manera eficiente. Estas son algunas de las funcionalidades más destacadas:
                    </p>
                    <ul className="list-disc pl-6 text-lg">
                        <li>
                            <strong>Registro de Asistencia Automático:</strong> El docente puede registrar la asistencia de
                            los estudiantes utilizando reconocimiento facial. Solo debe hacer clic en Tomar Asistencia y
                            activar la cámara.
                        </li>
                        <li>
                            <strong>Gestión de Notas y Actividades:</strong> Los docentes pueden registrar las notas, realizar
                            seguimientos y asignar tareas a los estudiantes.
                        </li>
                        <li>
                            <strong>Generación de Reportes:</strong> El sistema permite generar reportes de rendimiento
                            académico de los estudiantes, facilitando la toma de decisiones.
                        </li>
                    </ul>
                </section>

                {/* Sistema Móvil */}
                <section id="sistemaMovil" className="mb-16 p-8 bg-gray-50 rounded-lg shadow-md">
                    <h2 className="text-3xl text-blue-600 font-semibold mb-4">Sistema Móvil para Personal Administrativo</h2>
                    <p className="text-lg mb-4">
                        El sistema móvil está destinado para el personal administrativo del colegio, permitiéndoles llevar
                        a cabo diversas tareas de forma eficiente:
                    </p>
                    <ul className="list-disc pl-6 text-lg">
                        <li>
                            <strong>Asistencia por Ubicación:</strong> El sistema verifica la ubicación del personal mediante
                            coordenadas GPS para confirmar su presencia en el colegio y permitir el registro de asistencia.
                        </li>
                        <li>
                            <strong>Gestión de Horarios:</strong> El personal puede consultar y modificar los horarios del
                            colegio, así como gestionar otros aspectos administrativos desde su móvil.
                        </li>
                        <li>
                            <strong>Comunicación con Docentes:</strong> El personal puede comunicarse rápidamente con los
                            docentes para resolver problemas administrativos o coordinaciones urgentes.
                        </li>
                    </ul>
                </section>

                {/* Asistencia */}
                <section id="asistencia" className="mb-16 p-8 bg-gray-50 rounded-lg shadow-md">
                    <h2 className="text-3xl text-blue-600 font-semibold mb-4">Sistema de Asistencia Inteligente</h2>
                    <p className="text-lg mb-4">
                        En nuestro sistema, tanto el personal administrativo como los docentes pueden gestionar la asistencia
                        de manera automatizada:
                    </p>
                    <ul className="list-disc pl-6 text-lg">
                        <li>
                            <strong>Para Docentes:</strong> Solo deben hacer clic en Tomar Asistencia, activar la cámara y
                            los estudiantes pasarán frente a la misma. El sistema los identificará automáticamente.
                        </li>
                        <li>
                            <strong>Para Personal Administrativo:</strong> El registro de asistencia está vinculado a la
                            geolocalización. Si el personal está en el colegio, podrá registrar su presencia fácilmente.
                        </li>
                    </ul>
                </section>

                {/* Contacto */}
                <section id="contacto" className="mb-16 p-8 bg-gray-50 rounded-lg shadow-md">
                    <h2 className="text-3xl text-blue-600 font-semibold mb-4">Contáctanos</h2>
                    <p className="text-lg mb-4">
                        Si necesitas más información o tienes alguna pregunta, no dudes en contactarnos. Estamos aquí para
                        ayudarte.
                    </p>
                    <p className="text-lg">
                        <strong>Email:</strong> soporte@colegionikolatesla.com
                    </p>
                    <p className="text-lg">
                        <strong>Teléfono:</strong> +51 123 456 789
                    </p>
                    <p className="text-lg">
                        <strong>Dirección:</strong> Av. La Merced 234, Laredo, La Libertad, Perú
                    </p>
                </section>
            </main>

            {/* Pie de página */}
            <footer className="bg-blue-600 text-white py-4 text-center mt-16">
                <p>&copy; 2024 Colegio Nikola Tesla. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

const navLinkStyle = "text-blue-600 no-underline mx-6 font-bold text-lg hover:text-blue-800 transition-colors";

