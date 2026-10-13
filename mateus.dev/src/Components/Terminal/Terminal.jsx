import { useEffect, useRef, useState } from "react";
import estilos from "./Terminal.module.css";
import { EMAIL, WHATSAPP, LINKEDIN, GITHUB } from "../../data/contatos";

const abas = ["PROBLEMS", "OUTPUT", "DEBUG CONSOLE", "TERMINAL"];

const alturaMinima = 100;

const USUARIO = "mateus@portfolio";

const comandos = {
    help: ["about", "projects", "skills", "experience", "contact", "clear"],
    about: [
        "Mateus Ribas Marques",
        "Desenvolvedor e estudante de Engenharia de Software na PUC Minas.",
        "Foco em back-end, APIs e bancos de dados.",
        "Hobbies: música e futebol.",
    ],
    projects: [
        "Login PUC       Java",
        "FIPE Rest API   Java, Spring Boot, REST API",
    ],
    skills: [
        "Linguagens:   Java, C#, JavaScript, TypeScript, C, C++",
        "Front-end:    React, HTML, CSS",
        "Back-end:     Spring Boot",
        "Bancos:       PostgreSQL, MySQL",
        "Ferramentas:  Git, GitHub",
    ],
    experience: [
        "Engenharia de Software - PUC Minas (cursando)",
        "Técnico em Informática - Cotemig (concluído)",
    ],
    contact: [
        `E-mail:    ${EMAIL}`,
        `WhatsApp:  wa.me/${WHATSAPP}`,
        `LinkedIn:  ${LINKEDIN.replace("https://", "")}`,
        `GitHub:    ${GITHUB.replace("https://", "")}`,
    ],
};

function Linha({ comando }) {
    return (
        <div>
            <span className={estilos.usuario}>{USUARIO}</span>
            <span className={estilos.simbolo}>:~$</span>
            <span className={estilos.comando}>{comando}</span>
        </div>
    );
}

function ConteudoTerminal({ historico, aoExecutar, aoLimpar }) {
    const [entrada, setEntrada] = useState("");
    const [anteriores, setAnteriores] = useState([]);
    const [posicao, setPosicao] = useState(-1);

    const campo = useRef(null);
    const fim = useRef(null);

    useEffect(() => {
        campo.current?.focus();
    }, []);

    useEffect(() => {
        fim.current?.scrollIntoView({ block: "end" });
    }, [historico]);

    function executar() {
        const comando = entrada.trim().toLowerCase();

        setEntrada("");
        setPosicao(-1);

        if (comando === "") {
            return;
        }

        setAnteriores([...anteriores, comando]);

        if (comando === "clear") {
            aoLimpar();
            return;
        }

        aoExecutar(comando);
    }

    function aoTeclar(evento) {
        if (evento.key === "Enter") {
            executar();
        }

        if (evento.ctrlKey && evento.key.toLowerCase() === "l") {
            evento.preventDefault();
            aoLimpar();
        }

        if (evento.key === "Tab") {
            evento.preventDefault();
            const sugestao = Object.keys(comandos)
                .concat("clear")
                .find((nome) => entrada && nome.startsWith(entrada.toLowerCase()));

            if (sugestao) {
                setEntrada(sugestao);
            }
        }

        if (evento.key === "ArrowUp") {
            evento.preventDefault();
            const proxima = Math.min(posicao + 1, anteriores.length - 1);

            if (proxima >= 0) {
                setPosicao(proxima);
                setEntrada(anteriores[anteriores.length - 1 - proxima]);
            }
        }

        if (evento.key === "ArrowDown") {
            evento.preventDefault();
            const proxima = Math.max(posicao - 1, -1);

            setPosicao(proxima);
            setEntrada(
                proxima === -1 ? "" : anteriores[anteriores.length - 1 - proxima]
            );
        }
    }

    return (
        <div onClick={() => campo.current?.focus()} className={estilos.areaClique}>
            {historico.map((item, indice) => (
                <div key={indice} className={estilos.bloco}>
                    <Linha comando={item.comando} />

                    <div className={estilos.comandos}>
                        {item.saida.map((linha, posicaoLinha) => (
                            <div key={posicaoLinha} className={estilos.saida}>
                                {linha}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className={estilos.linhaEntrada}>
                <span className={estilos.usuario}>{USUARIO}</span>
                <span className={estilos.simbolo}>:~$</span>
                <input
                    ref={campo}
                    className={estilos.entrada}
                    value={entrada}
                    onChange={(evento) => setEntrada(evento.target.value)}
                    onKeyDown={aoTeclar}
                    spellCheck="false"
                    autoComplete="off"
                    autoCapitalize="off"
                    aria-label="Terminal"
                />
            </div>

            <div ref={fim} />
        </div>
    );
}

function Terminal() {
    const [estado, setEstado] = useState("aberto");
    const [aba, setAba] = useState("TERMINAL");
    const [altura, setAltura] = useState(180);
    const [arrastando, setArrastando] = useState(false);
    const [historico, setHistorico] = useState([
        { comando: "help", saida: comandos.help },
    ]);

    const referencia = useRef(null);

    function executarComando(comando) {
        const saida = comandos[comando] ?? [
            `comando não encontrado: ${comando}`,
            "digite help para ver os comandos",
        ];

        setHistorico((atual) => [...atual, { comando, saida }]);
    }

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
                    <span
                        className={estilos.botao}
                        title="Limpar"
                        onClick={() => setHistorico([])}
                    >
                        ＋
                    </span>

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
                    {aba === "TERMINAL" && (
                        <ConteudoTerminal
                            historico={historico}
                            aoExecutar={executarComando}
                            aoLimpar={() => setHistorico([])}
                        />
                    )}

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