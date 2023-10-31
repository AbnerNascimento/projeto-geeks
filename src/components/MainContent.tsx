import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

const membros: {
  nome: string;
  imagem: string;
  cargo: string;
}[] = [
  {
    nome: "Rodrigo Siqueira",
    imagem: "/funcionario.png",
    cargo: "Professor",
  },
  {
    nome: "Valério Gutemberg",
    imagem: "/funcionario.png",
    cargo: "Professor",
  },
  {
    nome: "Jurandy Martins",
    imagem: "/funcionario.png",
    cargo: "Professor",
  },
  {
    nome: "Karina Oliveira",
    imagem: "/funcionaria.png",
    cargo: "Bolsista",
  },
  {
    nome: "Abner Filipe",
    imagem: "/funcionario.png",
    cargo: "Voluntário",
  },
  {
    nome: "Thiago Campos",
    imagem: "/funcionario.png",
    cargo: "Voluntário",
  },
  {
    nome: "Maria Rita",
    imagem: "/funcionaria.png",
    cargo: "Voluntária",
  },
  {
    nome: "Amanda Gabrielle",
    imagem: "/funcionaria.png",
    cargo: "Voluntária",
  },
  {
    nome: "José Augusto",
    imagem: "/funcionario.png",
    cargo: "Voluntário",
  },
  {
    nome: "Marcos Aurélio",
    imagem: "/funcionario.png",
    cargo: "Voluntário",
  },
  {
    nome: "Antenor Mario",
    imagem: "/funcionario.png",
    cargo: "Voluntário",
  },
  {
    nome: "Vitor Daniel",
    imagem: "/funcionario.png",
    cargo: "Voluntário",
  },
  {
    nome: "Bruna Medina",
    imagem: "/funcionaria.png",
    cargo: "Voluntária",
  },
];

const MainContent = () => {
  return (
    <div className="flex flex-col w-screen mx-auto">
      {/* ==========================================================
                               HEADER
       ==========================================================*/}
      <header className="w-full z-50 flex items-center justify-around px-4 
      md:px-16 py-6 shadow-md">
        <Link
          href="/"
          className="logo text-var(--main-color) text-2.4rem flex items-center gap-3 text-3xl font-bold"
        >
          <Image src="/logo.png" alt="" height={60} width={60} />
          <h1 className="hidden lg:flex font-press-start mx-auto">GEEKS</h1>
        </Link>
        <ul className="navbar flex gap-2 md:text-xl">
          <li>
            <Link
              href="#home"
              className="text-var(--main-color) font-medium text-1.1rem px-4 py-2 hover:text-var(--text-color) transition duration-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#sobre"
              className="text-var(--main-color) font-medium text-1.1rem px-4 py-2 hover:text-var(--text-color) transition duration-500"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="#fotos"
              className="text-var(--main-color) font-medium text-1.1rem px-4 py-2 hover:text-var(--text-color) transition duration-500"
            >
              Imagens
            </Link>
          </li>
          <li>
            <Link
              href="#equipe"
              className="text-var(--main-color) font-medium text-1.1rem px-4 py-2 hover:text-var(--text-color) transition duration-500"
            >
              Equipe
            </Link>
          </li>
          <li>
            <Link
              href="#contato"
              className="text-var(--main-color) font-medium text-1.1rem px-4 py-2 hover:text-var(--text-color) transition duration-500"
            >
              Contato
            </Link>
          </li>
        </ul>
      </header>
      <Sidebar />
      {/* ==========================================================
                               HOME
       ==========================================================*/}
      <section className="flex flex-col justify-center items-center w-full 
      gap-3 lg:flex-row mb-20 surgir-de-baixo-tailwind"
        id="home"
      >
        <div className="flex flex-col justify-end items-center ml-10 lg:w-1/2
         mt-10 py-3 hover:scale-125">
          <h1 className="text-7xl text-main-color font-press-start">GEEKS</h1>
          <h2 className="text-3xl font-extrabold text-white py-5">
            Levando a tecnologia além!
          </h2>
          <Link
            href="#sobre"
            className="mt-5 px-4 py-2 bg-black text-white rounded-md 
            hover:scale-110"
          >
            Saber Mais!
          </Link>
        </div>
        <div className="lg:w-1/2 h-70vh mt-7 hover:scale-110">
          <Image
            src="/fundo-home.png"
            alt="imagem home"
            width={550}
            height={550}
          />
        </div>
        
      </section>
      {/* ==========================================================
                               SOBRE
       ==========================================================*/}
      <section
        className="flex flex-col justify-center items-center w-2/3 gap-10 mx-auto 
        my-20"
        id="sobre"
      >
        <h2 className="text-3xl text-main-color font-press-start">
            Sobre Nosso Projeto!
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="w-full">
            <Image
              src="/img-sobre.png"
              alt="imagem sobre"
              width={500}
              height={500}

              className="object-cover"
            />
          </div>
          <p className="text-xl font-bold text-white md:w-1/2 hover:scale-110">
            Temos por objetivo promover a inclusão digital, permitindo que
            crianças e adolescentes possam ter conhecimentos tecnológicos que
            contribuirão para sua formação e mudança de perspectiva de vida.
          </p>
        </div>
      </section>
      {/* ==========================================================
                               FOTOS
       ==========================================================*/}
      <section className="flex flex-col mx-auto justify-center " id="fotos">
        <h2 className="text-3xl text-main-color font-press-start my-14 m-auto">
          Registros
        </h2>
        <div className="flex flex-col justify-center mx-auto w-4/5 gap-5 mb-10 ">
          <div className=" hover:scale-110 pb-10">
            <Image
              src="/1.png"
              className="border border-white rounded-md shadow-2xl"
              alt="crianças brincando com robôs"
              width={700}
              height={700}
            />
          </div>
          <div className=" hover:scale-110 pb-10">
            <Image
              src="/2.jpg"
              className="border border-white rounded-md shadow-2xl"
              alt="crianças brincando com robôs"
              width={700}
              height={700}
              layout="responsive"
            />
          </div>
          <div className=" hover:scale-110 pb-10">
            <Image
              src="/3.jpg"
              className="border border-white rounded-md shadow-2xl"
              alt="crianças brincando com robôs"
              width={700}
              height={700}
              layout="responsive"
            />
          </div>
        </div>
      </section>
      {/* ==========================================================
                                EQUIPE
       ==========================================================*/}
      <section
        className="mx-auto my-20 w-screen flex flex-col justify-center "
        id="equipe"
      >
          <h1 className="text-3xl text-main-color font-press-start my-12 m-auto text-center">
            Equipe do Projeto
          </h1>
        <div className="flex flex-row gap 3 flex-wrap  w-5/6 justify-center items-center mx-auto">
          {membros.map((membro) => (
            <div
              key={membro.nome}
              className="m-5 w-40 h-60 flex flex-col justify-center items-center bg-white"
            >
              <div>
                <Image src={membro.imagem} width={80} height={80} alt="" />
              </div>
              <div className="text-center">
                <h3 className="font-bold p-4">{membro.nome}</h3>
                <h2>{membro.cargo}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ==========================================================
                                RODAPÉ
       ==========================================================*/}
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
    </div>
  );
};

export default MainContent;
