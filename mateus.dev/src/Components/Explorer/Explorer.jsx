import estilos from "./Explorer.module.css";

function Explorer() {
    return (
        <aside className={estilos.explorador}>
            <div className={estilos.titulo}>
                EXPLORER
            </div>

            <div className={estilos.projeto}>
                <div className={estilos.pasta}>
                    <span className={estilos.seta}>⌄</span>
                    <span>Mateus.Dev</span>
                </div>

                <div className={estilos.conteudo}>
                    <div className={estilos.pasta}>
                        <span className={estilos.seta}>⌄</span>
                        <span>Src</span>
                    </div>

                    <div className={estilos.conteudo}>
                        <div className={estilos.pasta}>
                            <span className={estilos.seta}>⌄</span>
                            <span>Sobre Mim</span>
                        </div>

                        <div className={estilos.arquivo}>
                            <span className={estilos.iconeJava}>◇</span>
                            <span>sobreMim.java</span>
                        </div>

                        <div className={estilos.arquivo}>
                            <span className={estilos.iconeTexto}>◇</span>
                            <span>objetivos.txt</span>
                        </div>

                        <div className={estilos.pasta}>
                            <span className={estilos.seta}>⌄</span>
                            <span>Projects</span>
                        </div>

                        <div className={estilos.arquivo}>
                            <span className={estilos.iconeJava}>◇</span>
                            <span>FrameTech.java</span>
                        </div>

                        <div className={estilos.arquivo}>
                            <span className={estilos.iconeJava}>◇</span>
                            <span>ApiMoney.java</span>
                        </div>

                        <div className={estilos.pasta}>
                            <span className={estilos.seta}>⌄</span>
                            <span>Experiencias</span>
                        </div>

                        <div className={estilos.arquivo}>
                            <span className={estilos.iconeMarkdown}>◇</span>
                            <span>experiencias.md</span>
                        </div>

                        <div className={estilos.pasta}>
                            <span className={estilos.seta}>⌄</span>
                            <span>Skills</span>
                        </div>

                        <div className={estilos.arquivo}>
                            <span className={estilos.iconeJson}>◇</span>
                            <span>hardSkills.json</span>
                        </div>

                        <div className={estilos.arquivo}>
                            <span className={estilos.iconeJson}>◇</span>
                            <span>softSkills.json</span>
                        </div>

                        <div className={estilos.pasta}>
                            <span className={estilos.seta}>⌄</span>
                            <span>Contact</span>
                        </div>

                        <div className={estilos.arquivo}>
                            <span className={estilos.iconeJava}>◇</span>
                            <span>contact.java</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Explorer;