import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Explorer from "../../Components/Explorer/Explorer";
import Editor from "../../Components/Editor/Editor";
import Terminal from "../../Components/Terminal/Terminal";

import estilos from "./Home.module.css";

function Home() {
    return (
        <div className={estilos.home}>
            <Sidebar />

            <main className={estilos.aplicacao}>
                <Header />

                <div className={estilos.corpo}>
                    <Explorer />

                    <div className={estilos.conteudo}>
                        <Editor />
                        <Terminal />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;