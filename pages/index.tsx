import AboutCard from "@/components/aboutCard";
import GlobalButton from "@/components/button";
import DesignPattern from "@/components/designPattern";
import Head from "next/head";
import { FiGithub, FiInstagram, FiMail, FiArrowUp } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { useState, useEffect } from "react";

export default function Home() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", ChangeMenu);
  }, []);

  function ChangeMenu() {
    if (window.scrollY != 0) {
      setBackToTop(true);
    }
  }
  return (
    <>
      <Head>
        <title>WebDesigner & FrontEnd | Emmanuel Rodrigues</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-screen text-primary-white">
        <nav className="fixed w-screen py-6 px-9 bgNav z-50">
          <ul className="flex w-full justify-around items-center flex-row text-sm">
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#contats">Contatos</a>
            </li>
          </ul>
        </nav>

        <section
          id="home"
          className="flex h-full flex-col w-screen text-primary-white"
        >
          <div className="flex flex-col px-9 gap-3 mt-28">
            <p>Olá! Seja bem vindo! 👋</p>

            <h1 className="text-4xl">
              WebDesign e Desenvolvimento de sites modernos
            </h1>

            <p className="mt-4">
              Clique no botão abaixo e veja alguns sites feitos por mim!
            </p>

            <div className="flex my-4">
              <GlobalButton />
            </div>
          </div>

          <div className="flex flex-col w-screen h-screen bg-hero bg-cover bg-right"></div>
        </section>

        <section id="about" className="flex flex-col w-screen gap-8 pt-24">
          <div className="flex flex-col text-primary-white text-center justify-center px-8 gap-8">
            <p className="text-sm">Sobre</p>

            <p>
              Eu me chamo Emmanuel Rodrigues, sou <span>WebDesigner</span> e{" "}
              <span>Programador</span>. Já fui gerente de T.I de um laboratório
              de análises clínicas e atuo na área da tecnologia a{" "}
              <span>mais de 7 anos</span>
            </p>

            <p className="text-sm">
              Conheça alguns dos meus trabalhos, todos abaixo{" "}
              <span>são reais</span> e feitos para empresas de renome dentre o{" "}
              <span>mercado mundial</span>
            </p>
          </div>

          <div className="flex flex-row justify-center items-center">
            <AboutCard />
          </div>
        </section>

        <section id="services" className="flex flex-col w-screen">
          <div className="flex flex-col text-primary-white justify-center pt-24 px-8 gap-8">
            <p className="text-sm text-center">Serviços</p>

            <h2 className="text-4xl">
              A tecnologia está presente em <span>todas as áreas</span> do
              mercado!
            </h2>

            <p className="text-sm">
              Aqui estão alguns serviços que te ajudam a não ficar para traz
            </p>

            <div className="flex flex-col text-center gap-8 pb-10">
              <div className="flex py-8">
                <DesignPattern />
              </div>

              <div className="flex flex-col gap-8">
                <h2 className="text-4xl">
                  Mas afinal como isso pode me <span>ajudar?</span>
                </h2>

                <p>
                  <span>Mais de 32 mil</span> empresas empregadoras fecharam as
                  portas nos últimos 2 anos e dentre elas{" "}
                  <span>mais de 12 mil não possuíam websites</span> para
                  aumentar sua captação de clientes
                </p>
              </div>

              <ul className="flex flex-col text-left px-8 ServiceList">
                <li className="text-sm">
                  Você pode ter visitas no seu site de outros lugres{" "}
                  <span>DO MUNDO</span>
                </li>
                <li className="text-sm">
                  Seu onteúdo <span>mais acessível</span>
                </li>
                <li className="text-sm">
                  Novas <span>parcerias</span>
                </li>
                <li className="text-sm">
                  <span>Mais Clientes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer id="contats">
          <div className="flex flex-col px-8 py-20 gap-8">
            <p>Contatos:</p>

            <div className="flex flex-row justify-evenly px-8">
              <FiGithub color="#DEDEDE" size={24} />
              <BiWorld color="#DEDEDE" size={24} />
              <FiInstagram color="#DEDEDE" size={24} />
              <FiMail color="#DEDEDE" size={24} />
            </div>
          </div>
        </footer>

        {backToTop && (
          <a
            href="#home"
            className="fixed bottom-4 right-4 rounded-full bg-primary-green py-4 px-4"
          >
            <FiArrowUp size={16} color="#DEDEDE" />
          </a>
        )}
      </main>
    </>
  );
}
