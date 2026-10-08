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
                    nome: "home.java",
                    tipo: "arquivo",
                    icone: "java",
                    conteudo: `public class Mateus {
    public static void main() {
        Console.log("Mateus");
    }
}`,
                },
                {
                    nome: "projects.java",
                    tipo: "arquivo",
                    icone: "java",
                    conteudo: `public class Projects {
    public static void main() {
        Console.log("FrameTech");
        Console.log("ApiMoney");
    }
}`,
                },
                {
                    nome: "Sobre Mim",
                    tipo: "pasta",
                    filhos: [
                        {
                            nome: "sobreMim.java",
                            tipo: "arquivo",
                            icone: "java",
                            conteudo: `public class SobreMim {
    private String nome = "Mateus";
    private String funcao = "Desenvolvedor";

    public String apresentar() {
        return "Olá, eu sou " + nome;
    }
}`,
                        },
                        {
                            nome: "objetivos.txt",
                            tipo: "arquivo",
                            icone: "texto",
                            conteudo: `Objetivos

- Crescer como desenvolvedor
- Construir projetos que resolvem problemas reais
- Aprender novas tecnologias todos os dias`,
                        },
                    ],
                },
                {
                    nome: "Projects",
                    tipo: "pasta",
                    filhos: [
                        {
                            nome: "FrameTech.java",
                            tipo: "arquivo",
                            icone: "java",
                            conteudo: `public class FrameTech {
    private String descricao = "Descreva o projeto aqui";
    private String tecnologias = "React, Java";
}`,
                        },
                        {
                            nome: "ApiMoney.java",
                            tipo: "arquivo",
                            icone: "java",
                            conteudo: `public class ApiMoney {
    private String descricao = "Descreva o projeto aqui";
    private String tecnologias = "Java, Spring";
}`,
                        },
                    ],
                },
                {
                    nome: "Experiencias",
                    tipo: "pasta",
                    filhos: [
                        {
                            nome: "experiencias.md",
                            tipo: "arquivo",
                            icone: "markdown",
                            conteudo: `# Experiencias

## Empresa
Cargo - 2024 até hoje

- O que você fez
- Resultados alcançados`,
                        },
                    ],
                },
                {
                    nome: "Skills",
                    tipo: "pasta",
                    filhos: [
                        {
                            nome: "hardSkills.json",
                            tipo: "arquivo",
                            icone: "json",
                            conteudo: `{
    "linguagens": ["Java", "JavaScript"],
    "frontend": ["React", "CSS"],
    "backend": ["Spring"]
}`,
                        },
                        {
                            nome: "softSkills.json",
                            tipo: "arquivo",
                            icone: "json",
                            conteudo: `{
    "skills": ["Comunicação", "Trabalho em equipe", "Proatividade"]
}`,
                        },
                    ],
                },
                {
                    nome: "Contact",
                    tipo: "pasta",
                    filhos: [
                        {
                            nome: "contact.java",
                            tipo: "arquivo",
                            icone: "java",
                            conteudo: `public class Contact {
    private String email = "seuemail@email.com";
    private String github = "github.com/seuusuario";
    private String linkedin = "linkedin.com/in/seuusuario";
}`,
                        },
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