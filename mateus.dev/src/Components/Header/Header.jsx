import estilos from "./Header.module.css";

function Header() {
    return (
        <header className={estilos.cabecalho}>
            <div className={estilos.abas}>
                <div className={`${estilos.aba} ${estilos.abaAtiva}`}>
                    <span className={estilos.iconeArquivo}>
                        ◇
                    </span>

                    <span>
                        home.java
                    </span>

                    <span className={estilos.fechar}>
                        ×
                    </span>
                </div>

                <div className={estilos.aba}>
                    <span className={estilos.iconeArquivo}>
                        ◇
                    </span>

                    <span>
                        projects.java
                    </span>

                    <span className={estilos.fechar}>
                        ×
                    </span>
                </div>
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