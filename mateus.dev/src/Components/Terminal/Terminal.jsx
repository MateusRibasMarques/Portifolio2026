import { useEffect, useRef, useState } from "react";
import estilos from "./Terminal.module.css";

const abas = ["PROBLEMS", "OUTPUT", "DEBUG CONSOLE", "TERMINAL"];

const alturaMinima = 100;

function ConteudoTerminal() {
    return (
        <>
            <div>
                <span className={estilos.usuario}>mateus@portfolio</span>
                <span className={estilos.simbolo}>:~$</span>
                <span className={estilos.comando}>help</span>
            </div>

            <div className={estilos.comandos}>
                <div>about</div>
                <div>projects</div>
                <div>skills</div>
                <div>experience</div>
                <div>contact</div>
            </div>

            <div className={estilos.cursor}>mateus@portfolio:~$ _</div>
        </>
    );
}

function Terminal() {
    const [estado, setEstado] = useState("aberto");
    const [aba, setAba] = useState("TERMINAL");
    const [altura, setAltura] = useState(180);
    const [arrastando, setArrastando] = useState(false);

    const referencia = useRef(null);

    useEffect(() => {
        if (!arrastando) return;

        function mover(evento) {
            const base = referencia.current.getBoundingClientRect().bottom;
            const maxima = window.innerHeight * 0.75;
            const nova = base - evento.clientY;

            setAltura(Math.min(Math.max(nova, alturaMinima), maxima));
        }

        function soltar() {
            setArrastando(false);
        }

        document.body.style.userSelect = "none";
        document.body.style.cursor = "row-resize";

        window.addEventListener("mousemove", mover);
        window.addEventListener("mouseup", soltar);

        return () => {
            document.body.style.userSelect = "";
            document.body.style.cursor = "";

            window.removeEventListener("mousemove", mover);
            window.removeEventListener("mouseup", soltar);
        };
    }, [arrastando]);

    useEffect(() => {
        function atalho(evento) {
            if (evento.ctrlKey && evento.key === "`") {
                evento.preventDefault();
                setEstado((atual) => (atual === "aberto" ? "fechado" : "aberto"));
            }
        }

        window.addEventListener("keydown", atalho);

        return () => window.removeEventListener("keydown", atalho);
    }, []);

    function selecionarAba(nome) {
        setAba(nome);
        setEstado("aberto");
    }

    function alternarRecolhimento() {
        setEstado(estado === "aberto" ? "recolhido" : "aberto");
    }

    if (estado === "fechado") {
        return (
            <div className={estilos.barraFechada} onClick={() => setEstado("aberto")}>
                <span>TERMINAL</span>
                <span>⌃</span>
            </div>
        );
    }

    const recolhido = estado === "recolhido";

    return (
        <section
            ref={referencia}
            className={estilos.terminal}
            style={{ height: recolhido ? 36 : altura }}
        >
            {!recolhido && (
                <div
                    className={`${estilos.alca} ${arrastando ? estilos.alcaAtiva : ""}`}
                    onMouseDown={(evento) => {
                        evento.preventDefault();
                        setArrastando(true);
                    }}
                />
            )}

            <div className={estilos.cabecalhoTerminal}>
                <div className={estilos.abasTerminal}>
                    {abas.map((nome) => (
                        <span
                            key={nome}
                            className={`${estilos.abaTerminal} ${nome === aba ? estilos.abaAtiva : ""}`}
                            onClick={() => selecionarAba(nome)}
                        >
                            {nome}
                        </span>
                    ))}
                </div>

                <div className={estilos.controlesTerminal}>
                    <span className={estilos.botao}>＋</span>

                    <span className={estilos.botao} onClick={alternarRecolhimento}>
                        {recolhido ? "⌃" : "⌄"}
                    </span>

                    <span className={estilos.botao} onClick={() => setEstado("fechado")}>
                        ×
                    </span>
                </div>
            </div>

            {!recolhido && (
                <div className={estilos.conteudoTerminal}>
                    {aba === "TERMINAL" && <ConteudoTerminal />}

                    {aba === "PROBLEMS" && (
                        <div className={estilos.mensagem}>
                            No problems have been detected in the workspace.
                        </div>
                    )}

                    {aba === "OUTPUT" && (
                        <div className={estilos.mensagem}>
                            [info] Portfolio carregado com sucesso.
                        </div>
                    )}

                    {aba === "DEBUG CONSOLE" && (
                        <div className={estilos.mensagem}>
                            Nenhuma sessão de debug em execução.
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}

export default Terminal;