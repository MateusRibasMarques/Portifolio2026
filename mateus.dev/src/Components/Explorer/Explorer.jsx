import { useState } from "react";
import estilos from "./Explorer.module.css";
import { arvore } from "./data";

const classesIcone = {
    java: estilos.iconeJava,
    texto: estilos.iconeTexto,
    markdown: estilos.iconeMarkdown,
    json: estilos.iconeJson,
};

export function buscarConteudo(nome, item = arvore) {
    if (item.tipo === "arquivo") {
        return item.nome === nome ? item.conteudo : null;
    }

    for (const filho of item.filhos) {
        const encontrado = buscarConteudo(nome, filho);
        if (encontrado !== null) {
            return encontrado;
        }
    }

    return null;
}

function Item({ item, nivel, ativo, aoAbrir }) {
    const [aberta, setAberta] = useState(true);

    if (item.tipo === "arquivo") {
        return (
            <div
                className={`${estilos.arquivo} ${item.nome === ativo ? estilos.selecionado : ""}`}
                style={{ paddingLeft: nivel * 13 + 17 }}
                onClick={() => aoAbrir(item.nome)}
            >
                <span className={classesIcone[item.icone]}>◇</span>
                <span>{item.nome}</span>
            </div>
        );
    }

    return (
        <div>
            <div
                className={estilos.pasta}
                style={{ paddingLeft: nivel * 13 + 6 }}
                onClick={() => setAberta(!aberta)}
            >
                <span className={`${estilos.seta} ${aberta ? "" : estilos.fechada}`}>
                    ⌄
                </span>
                <span>{item.nome}</span>
            </div>

            {aberta &&
                item.filhos.map((filho) => (
                    <Item
                        key={filho.nome}
                        item={filho}
                        nivel={nivel + 1}
                        ativo={ativo}
                        aoAbrir={aoAbrir}
                    />
                ))}
        </div>
    );
}

function Explorer({ ativo, aoAbrir }) {
    return (
        <aside className={estilos.explorador}>
            <div className={estilos.titulo}>EXPLORER</div>

            <div className={estilos.projeto}>
                <Item item={arvore} nivel={0} ativo={ativo} aoAbrir={aoAbrir} />
            </div>
        </aside>
    );
}

export default Explorer;