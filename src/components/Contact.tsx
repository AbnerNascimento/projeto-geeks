import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section
        id="contato"
        className="w-screen flex flex-col justify-center border-t border-primary"
      >
        <div className="flex flex-row justify-around p-5">
          <div className="flex justify-around min-w-full mx-auto lg:px-20">
            <div className="w-auto mx-2">
              <h4 className="text-lg font-semibold text-primary mb-6 relative">
                Menu Links
                <div className="" />
              </h4>
              <ul>
                <Link
                  href="#home"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-home-alt-2 mr-2" /> Home
                </Link>
                <Link
                  href="#sobre"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-paste mr-2" /> Sobre
                </Link>
                <Link
                  href="#colecao"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-image mr-2" /> Coleção
                </Link>
                <Link
                  href="#equipe"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-group mr-2" /> Equipe
                </Link>
                <Link
                  href="#contato"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-contact mr-2" /> Contatos
                </Link>
              </ul>
            </div>
            <div className="w-auto mx-2">
              <h4 className="text-lg font-semibold text-primary mb-6 relative">
                Processos Seletivos
                <div className="" />
              </h4>
              <ul>
                <Link
                  href="https://portal.ifrn.edu.br/processos-seletivos/buscar/?tipo=grupo%3AEstude+no+IFRN"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-book mr-2" /> Estude no IFRN
                </Link>
                <Link
                  href="https://portal.ifrn.edu.br/processos-seletivos/buscar/?tipo=grupo%3ABolsas+para+estudantes"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bx-money mr-2" /> Bolsas para estudantes
                </Link>
                <Link
                  href="https://portal.ifrn.edu.br/processos-seletivos/buscar/?tipo=grupo%3AServidores"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-briefcase mr-2" /> Servidores
                </Link>
              </ul>
            </div>
            <div className="w-auto mx-2">
              <h4 className="text-lg font-semibold text-primary mb-6 relative">
                Cursos
                <div className="" />
              </h4>
              <ul>
                <Link
                  href="https://portal.ifrn.edu.br/cursos/buscar/?categoria_modalidade=categoria%3ACursos+T%C3%A9cnicos"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-chip mr-2" /> Técnicos
                </Link>
                <Link
                  href="https://portal.ifrn.edu.br/cursos/buscar/?categoria_modalidade=categoria%3ACursos+Superiores"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bx-desktop mr-2" /> Superiores
                </Link>
                <Link
                  href="https://portal.ifrn.edu.br/cursos/buscar/?categoria_modalidade=categoria%3AOutros+Cursos"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bxs-mouse-alt mr-2" /> Outros
                </Link>
              </ul>
            </div>
            <div className="w-auto mx-2">
              <h4 className="text-lg font-semibold text-primary mb-6 relative">
                Contatos
                <div className="" />
              </h4>
              <ul>
                <Link
                  href="https://portal.ifrn.edu.br/campus/parnamirim/"
                  className="flex items-center hover:text-primary"
                >
                  <i className="bx bx-world mr-2" /> Campus Parnamirim
                </Link>
                <Link href="#" className="flex items-center hover:text-primary">
                  <i className="bx bxl-instagram-alt mr-2" /> geeks_ifrn
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center pt-10 mt-8 border-t border-primary text-lg mb-10">
          <span>Copyright © IFRN CAMPUS PARANAMIRIM - 2023</span>
        </div>
      </section>
  );
};

export default Contact;
