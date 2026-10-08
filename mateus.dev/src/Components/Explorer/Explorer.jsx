import { useState } from "react";
import estilos from "./Explorer.module.css";

const arvore = {
    nome: "Mateus.Dev",
    tipo: "pasta",
    filhos: [
        {
            nome: "Src",
            tipo: "pasta",
            filhos: [
                {
                    nome: "Sobre Mim",
                    tipo: "pasta",
                    filhos: [
                        { nome: "sobreMim.java", tipo: "arquivo", icone: "java" },
                        { nome: "objetivos.txt", tipo: "arquivo", icone: "texto" },
                    ],
                },
                {
                    nome: "Projects",
                    tipo: "pasta",
                    filhos: [
                        { nome: "FrameTech.java", tipo: "arquivo", icone: "java" },
                        { nome: "ApiMoney.java", tipo: "arquivo", icone: "java" },
                    ],
                },
                {
                    nome: "Experiencias",
                    tipo: "pasta",
                    filhos: [
                        { nome: "experiencias.md", tipo: "arquivo", icone: "markdown" },
                    ],
                },
                {
                    nome: "Skills",
                    tipo: "pasta",
                    filhos: [
                        { nome: "hardSkills.json", tipo: "arquivo", icone: "json" },
                        { nome: "softSkills.json", tipo: "arquivo", icone: "json" },
                    ],
                },
                {
                    nome: "Contact",
                    tipo: "pasta",
                    filhos: [
                        { nome: "contact.java", tipo: "arquivo", icone: "java" },
                    ],
                },
            ],
        },
    ],
};

const classesIcone = {
    java: estilos.iconeJava,
    texto: estilos.iconeTexto,
    markdown: estilos.iconeMarkdown,
    json: estilos.iconeJson,
};

function Item({ item, nivel }) {
    const [aberta, setAberta] = useState(true);

    if (item.tipo === "arquivo") {
        return (
            <div
                className={estilos.arquivo}
                style={{ paddingLeft: nivel * 12 + 20 }}
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
                style={{ paddingLeft: nivel * 12 + 8 }}
                onClick={() => setAberta(!aberta)}
            >
                <span className={`${estilos.seta} ${aberta ? "" : estilos.fechada}`}>
                    ⌄
                </span>
                <span>{item.nome}</span>
            </div>

            {aberta &&
                item.filhos.map((filho) => (
                    <Item key={filho.nome} item={filho} nivel={nivel + 1} />
                ))}
        </div>
    );
}

function Explorer() {
    return (
        <aside className={estilos.explorador}>
            <div className={estilos.titulo}>EXPLORER</div>

            <div className={estilos.projeto}>
                <Item item={arvore} nivel={0} />
            </div>
        </aside>
    );
}

export default Explorer;