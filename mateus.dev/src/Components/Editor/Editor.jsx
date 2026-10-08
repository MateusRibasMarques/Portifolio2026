import { buscarConteudo } from "../Explorer/Explorer";
import estilos from "./Editor.module.css";

const expressao = /("[^"]*"|\b(?:public|class|static|void|private|return|new)\b|\b[A-Z][A-Za-z0-9]*\b|[{}()])/g;

const palavras = ["public", "class", "static", "void", "private", "return", "new"];

function classeDoTrecho(trecho) {
    if (trecho.startsWith('"')) return estilos.texto;
    if (palavras.includes(trecho)) return estilos.palavra;
    if (/^[A-Z]/.test(trecho)) return estilos.classe;
    return estilos.simbolo;
}

function colorir(linha) {
    return linha.split(expressao).map((parte, indice) => {
        if (indice % 2 === 0) {
            return parte;
        }

        return (
            <span key={indice} className={classeDoTrecho(parte)}>
                {parte}
            </span>
        );
    });
}

function Editor({ arquivo }) {
    if (!arquivo) {
        return (
            <section className={estilos.editor}>
                <div className={estilos.vazio}>Mateus.Dev</div>
            </section>
        );
    }

    const linhas = (buscarConteudo(arquivo) ?? "").split("\n");
    const java = arquivo.endsWith(".java");

    return (
        <section className={estilos.editor}>
            <div className={estilos.codigo}>
                {linhas.map((linha, indice) => (
                    <div key={indice} className={estilos.linha}>
                        <span className={estilos.numero}>
                            {String(indice + 1).padStart(2, "0")}
                        </span>
                        <span className={estilos.conteudo}>
                            {java ? colorir(linha) : linha}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Editor;