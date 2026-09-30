import estilos from "./Terminal.module.css";

function Terminal() {
    return (
        <section className={estilos.terminal}>
            <div className={estilos.cabecalhoTerminal}>
                <div className={estilos.abasTerminal}>
                    <span className={estilos.abaTerminal}>
                        PROBLEMS
                    </span>

                    <span className={estilos.abaTerminal}>
                        OUTPUT
                    </span>

                    <span className={estilos.abaTerminal}>
                        DEBUG CONSOLE
                    </span>

                    <span className={`${estilos.abaTerminal} ${estilos.abaAtiva}`}>
                        TERMINAL
                    </span>
                </div>

                <div className={estilos.controlesTerminal}>
                    <span>＋</span>
                    <span>⌄</span>
                    <span>×</span>
                </div>
            </div>

            <div className={estilos.conteudoTerminal}>
                <div>
                    <span className={estilos.usuario}>
                        mateus@portfolio
                    </span>

                    <span className={estilos.simbolo}>
                        :~$
                    </span>

                    <span className={estilos.comando}>
                        help
                    </span>
                </div>

                <div className={estilos.comandos}>
                    <div>about</div>
                    <div>projects</div>
                    <div>skills</div>
                    <div>experience</div>
                    <div>contact</div>
                </div>

                <div className={estilos.cursor}>
                    mateus@portfolio:~$ _
                </div>
            </div>
        </section>
    );
}

export default Terminal;