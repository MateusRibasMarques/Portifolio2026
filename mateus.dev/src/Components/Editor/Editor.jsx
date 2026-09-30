import estilos from "./Editor.module.css";

function Editor() {
    const linhas = Array.from(
        { length: 35 },
        (_, indice) => String(indice + 1).padStart(2, "0")
    );

    return (
        <section className={estilos.editor}>
            <div className={estilos.codigo}>
                <div className={estilos.numeros}>
                    {linhas.map((linha) => (
                        <div key={linha}>
                            {linha}
                        </div>
                    ))}
                </div>

                <div className={estilos.conteudoCodigo}>
                    <div>
                        <span className={estilos.palavraChave}>
                            public
                        </span>{" "}
                        <span className={estilos.palavraChave}>
                            class
                        </span>{" "}
                        <span className={estilos.nomeClasse}>
                            Mateus
                        </span>{" "}
                        {"{"}
                    </div>

                    <div className={estilos.recuo}>
                        <span className={estilos.palavraChave}>
                            public
                        </span>{" "}
                        <span className={estilos.palavraChave}>
                            static
                        </span>{" "}
                        <span className={estilos.palavraChave}>
                            void
                        </span>{" "}
                        <span className={estilos.nomeMetodo}>
                            main
                        </span>
                        <span>
                            ()
                        </span>{" "}
                        {"{"}
                    </div>

                    <div className={estilos.recuoDuplo}>
                        <span className={estilos.console}>
                            Console
                        </span>
                        <span>
                            .
                        </span>
                        <span className={estilos.metodo}>
                            log
                        </span>
                        <span>
                            (
                        </span>
                        <span className={estilos.texto}>
                            "Mateus"
                        </span>
                        <span>
                            );
                        </span>
                    </div>

                    <div className={estilos.recuo}>
                        {"}"}
                    </div>

                    <div>
                        {"}"}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Editor;