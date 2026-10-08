import estilos from "./Header.module.css";

function Header({ abertos, ativo, aoSelecionar, aoFechar }) {
    function aoPressionar(evento) {
        if (evento.button === 1) {
            evento.preventDefault();
        }
    }

    function aoClicarAuxiliar(evento, nome) {
        if (evento.button === 1) {
            evento.preventDefault();
            aoFechar(nome);
        }
    }

    return (
        <header className={estilos.cabecalho}>
            <div className={estilos.abas}>
                {abertos.map((nome) => (
                    <div
                        key={nome}
                        className={`${estilos.aba} ${nome === ativo ? estilos.abaAtiva : ""}`}
                        onClick={() => aoSelecionar(nome)}
                        onMouseDown={aoPressionar}
                        onAuxClick={(evento) => aoClicarAuxiliar(evento, nome)}
                    >
                        <span className={estilos.iconeArquivo}>◇</span>

                        <span>{nome}</span>

                        <span
                            className={estilos.fechar}
                            onClick={(evento) => {
                                evento.stopPropagation();
                                aoFechar(nome);
                            }}
                        >
                            ×
                        </span>
                    </div>
                ))}
            </div>

            <div className={estilos.controlesJanela}>
                <span className={estilos.minimizar}></span>
                <span className={estilos.maximizar}></span>
                <span className={estilos.fecharJanela}></span>
            </div>
        </header>
    );
}

export default Header;