import { useEffect, useState } from "react";
import Explorer from "../Explorer/Explorer";
import { arvore } from "../Explorer/data";
import { buscarRepositorios } from "../../services/github";
import estilos from "./Painel.module.css";

const TITULOS = {
    busca: "BUSCAR",
    git: "REPOSITÓRIOS",
    extensoes: "TECNOLOGIAS",
    config: "CONFIGURAÇÕES",
};

const tecnologias = [
    { grupo: "Linguagens", itens: ["Java", "C#", "JavaScript", "TypeScript", "C", "C++"] },
    { grupo: "Front-end", itens: ["React", "HTML", "CSS"] },
    { grupo: "Back-end", itens: ["Spring Boot"] },
    { grupo: "Bancos de dados", itens: ["PostgreSQL", "MySQL"] },
    { grupo: "Ferramentas", itens: ["Git", "GitHub"] },
];

function listarArquivos(item, caminho = []) {
    if (item.tipo === "arquivo") {
        return [{ nome: item.nome, conteudo: item.conteudo, pasta: caminho.join(" > ") }];
    }

    return item.filhos.flatMap((filho) =>
        listarArquivos(filho, [...caminho, item.nome])
    );
}

const arquivos = listarArquivos(arvore);

function limpar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function Busca({ aoAbrir }) {
    const [termo, setTermo] = useState("");
    const busca = limpar(termo.trim());

    const resultados =
        busca.length < 2
            ? []
            : arquivos
                  .map((arquivo) => {
                      const linhas = arquivo.conteudo.split("\n");
                      const linha = linhas.find((l) => limpar(l).includes(busca));
                      const noNome = limpar(arquivo.nome).includes(busca);

                      if (!linha && !noNome) return null;

                      return { arquivo, trecho: linha ? linha.trim() : "" };
                  })
                  .filter(Boolean);

    return (
        <>
            <input
                className={estilos.campoBusca}
                value={termo}
                onChange={(evento) => setTermo(evento.target.value)}
                placeholder="Buscar (ex: Java, React)"
                spellCheck="false"
                autoFocus
            />

            {busca.length < 2 && (
                <p className={estilos.aviso}>Digite pelo menos 2 letras.</p>
            )}

            {busca.length >= 2 && resultados.length === 0 && (
                <p className={estilos.aviso}>Nenhum resultado.</p>
            )}

            {resultados.map(({ arquivo, trecho }) => (
                <div
                    key={arquivo.nome}
                    className={estilos.resultado}
                    onClick={() => aoAbrir(arquivo.nome)}
                >
                    <span className={estilos.nomeResultado}>{arquivo.nome}</span>
                    {trecho && <span className={estilos.trecho}>{trecho}</span>}
                </div>
            ))}
        </>
    );
}

function Repositorios() {
    const [repositorios, setRepositorios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        buscarRepositorios()
            .then(setRepositorios)
            .catch((e) => setErro(e.message))
            .finally(() => setCarregando(false));
    }, []);

    if (carregando) return <p className={estilos.aviso}>Carregando...</p>;
    if (erro) return <p className={estilos.aviso}>{erro}</p>;

    return repositorios.map((repo) => (
        <a
            key={repo.id}
            className={estilos.repositorio}
            href={repo.link}
            target="_blank"
            rel="noreferrer"
        >
            <span className={estilos.nomeResultado}>{repo.nome}</span>
            <span className={estilos.trecho}>
                {repo.linguagem ?? "Sem linguagem"} ·{" "}
                {new Date(repo.atualizadoEm).toLocaleDateString("pt-BR")}
            </span>
        </a>
    ));
}

function Tecnologias() {
    return tecnologias.map(({ grupo, itens }) => (
        <div key={grupo} className={estilos.grupo}>
            <span className={estilos.rotuloGrupo}>{grupo}</span>

            {itens.map((nome) => (
                <div key={nome} className={estilos.extensao}>
                    <span className={estilos.avatar}>{nome[0]}</span>
                    <span className={estilos.nomeExtensao}>{nome}</span>
                    <span className={estilos.selo}>Instalado</span>
                </div>
            ))}
        </div>
    ));
}

function Configuracoes({ aoAbrir, aoFecharTodas }) {
    return (
        <>
            <span className={estilos.rotuloGrupo}>Idioma do Sobre Mim</span>

            <button
                type="button"
                className={estilos.botao}
                onClick={() => aoAbrir("apresentacao_pt.md")}
            >
                Português
            </button>

            <button
                type="button"
                className={estilos.botao}
                onClick={() => aoAbrir("presentation_en.md")}
            >
                English
            </button>

            <span className={estilos.rotuloGrupo}>Abas</span>

            <button type="button" className={estilos.botao} onClick={aoFecharTodas}>
                Fechar todas as abas
            </button>
        </>
    );
}

function Painel({ painel, ativo, aoAbrir, aoFecharTodas }) {
    if (painel === "explorer") {
        return <Explorer ativo={ativo} aoAbrir={aoAbrir} />;
    }

    return (
        <aside className={estilos.painel}>
            <div className={estilos.titulo}>{TITULOS[painel]}</div>

            <div className={estilos.corpo}>
                {painel === "busca" && <Busca aoAbrir={aoAbrir} />}
                {painel === "git" && <Repositorios />}
                {painel === "extensoes" && <Tecnologias />}
                {painel === "config" && (
                    <Configuracoes aoAbrir={aoAbrir} aoFecharTodas={aoFecharTodas} />
                )}
            </div>
        </aside>
    );
}

export default Painel;