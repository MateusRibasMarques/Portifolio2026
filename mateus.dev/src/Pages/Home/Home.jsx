import { useState } from "react";

import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Explorer from "../../Components/Explorer/Explorer";
import Editor from "../../Components/Editor/Editor";
import Terminal from "../../Components/Terminal/Terminal";

import estilos from "./Home.module.css";

function Home() {
    const [abertos, setAbertos] = useState(["home.java", "projects.java"]);
    const [ativo, setAtivo] = useState("home.java");

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

    return (
        <div className={estilos.home}>
            <Sidebar />

            <main className={estilos.aplicacao}>
                <Header
                    abertos={abertos}
                    ativo={ativo}
                    aoSelecionar={setAtivo}
                    aoFechar={fecharArquivo}
                />

                <div className={estilos.corpo}>
                    <Explorer ativo={ativo} aoAbrir={abrirArquivo} />

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