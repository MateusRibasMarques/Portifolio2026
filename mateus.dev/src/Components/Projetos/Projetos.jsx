import { useEffect, useState } from "react";
import estilos from "./Projetos.module.css";
import { buscarProjetos } from "../../services/github";

function formatarData(data) {
    return new Date(data).toLocaleDateString("pt-BR", {
        month: "long",
        year: "numeric",
    });
}

function GrupoEtiquetas({ titulo, itens }) {
    if (itens.length === 0) {
        return null;
    }

    return (
        <div className={estilos.grupo}>
            <span className={estilos.rotulo}>{titulo}</span>
            <ul className={estilos.etiquetas}>
                {itens.map((item) => (
                    <li key={item} className={estilos.etiqueta}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function CartaoProjeto({ projeto }) {
    const [posicao, setPosicao] = useState(0);
    const imagem = projeto.imagens[posicao];

    return (
        <article className={estilos.cartao}>
            <span className={estilos.marcador} />
            <time className={estilos.data}>{formatarData(projeto.criadoEm)}</time>

            <h3 className={estilos.nome}>{projeto.nome}</h3>
            <p className={estilos.descricao}>{projeto.descricao}</p>

            {imagem && (
                <img
                    className={estilos.imagem}
                    src={imagem}
                    alt={`Projeto ${projeto.nome} em funcionamento`}
                    onError={() => setPosicao(posicao + 1)}
                />
            )}

            <GrupoEtiquetas titulo="Linguagens" itens={projeto.linguagens} />
            <GrupoEtiquetas titulo="Tecnologias" itens={projeto.tecnologias} />

            <a
                className={estilos.link}
                href={projeto.link}
                target="_blank"
                rel="noreferrer"
            >
                Ver repositório no GitHub
            </a>
        </article>
    );
}

function Projetos() {
    const [projetos, setProjetos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        buscarProjetos()
            .then(setProjetos)
            .catch((e) => setErro(e.message))
            .finally(() => setCarregando(false));
    }, []);

    if (carregando) {
        return <p className={estilos.aviso}>Carregando projetos...</p>;
    }

    if (erro) {
        return <p className={estilos.aviso}>{erro}</p>;
    }

    if (projetos.length === 0) {
        return <p className={estilos.aviso}>Nenhum projeto encontrado.</p>;
    }

    return (
        <section className={estilos.projetos}>
            <h2 className={estilos.titulo}>Projetos</h2>

            <div className={estilos.linhaDoTempo}>
                {projetos.map((projeto) => (
                    <CartaoProjeto key={projeto.id} projeto={projeto} />
                ))}
            </div>
        </section>
    );
}

export default Projetos;