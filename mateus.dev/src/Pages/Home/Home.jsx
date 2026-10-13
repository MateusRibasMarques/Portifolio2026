import { useEffect, useState } from "react";

import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Painel from "../../Components/Painel/Painel";
import Editor from "../../Components/Editor/Editor";
import Terminal from "../../Components/Terminal/Terminal";

import estilos from "./Home.module.css";

function Home() {
    const [abertos, setAbertos] = useState(["home.java", "projects.java"]);
    const [ativo, setAtivo] = useState("home.java");
    const [painel, setPainel] = useState("explorer");

    function abrirArquivo(nome) {
        if (!abertos.includes(nome)) {
            setAbertos([...abertos, nome]);
        }
        setAtivo(nome);
    }

    function fecharArquivo(nome) {
        const indice = abertos.indexOf(nome);
        const restantes = abertos.filter((arquivo) => arquivo !== nome);

        setAbertos(restantes);

        if (ativo === nome) {
            setAtivo(restantes[indice] ?? restantes[indice - 1] ?? null);
        }
    }

    function fecharTodos() {
        setAbertos([]);
        setAtivo(null);
    }

    function alternarPainel(id) {
        setPainel((atual) => (atual === id ? null : id));
    }

    useEffect(() => {
        function atalho(evento) {
            if (evento.ctrlKey && evento.key.toLowerCase() === "b") {
                evento.preventDefault();
                setPainel((atual) => (atual ? null : "explorer"));
            }
        }

        window.addEventListener("keydown", atalho);

        return () => window.removeEventListener("keydown", atalho);
    }, []);

    return (
        <div className={estilos.home}>
            <Sidebar painel={painel} aoSelecionar={alternarPainel} />

            <main className={estilos.aplicacao}>
                <Header
                    abertos={abertos}
                    ativo={ativo}
                    aoSelecionar={setAtivo}
                    aoFechar={fecharArquivo}
                />

                <div className={estilos.corpo}>
                    {painel && (
                        <Painel
                            painel={painel}
                            ativo={ativo}
                            aoAbrir={abrirArquivo}
                            aoFecharTodas={fecharTodos}
                        />
                    )}

                    <div className={estilos.conteudo}>
                        <Editor arquivo={ativo} />
                        <Terminal />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;