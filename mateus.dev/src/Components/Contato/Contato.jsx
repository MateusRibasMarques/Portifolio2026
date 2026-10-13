import { useState } from "react";
import emailjs from "@emailjs/browser";
import estilos from "./Contato.module.css";
import { EMAIL, WHATSAPP, LINKEDIN, GITHUB } from "../../data/contatos";

const SERVICO = import.meta.env.VITE_EMAILJS_SERVICO;
const MODELO = import.meta.env.VITE_EMAILJS_MODELO;
const CHAVE = import.meta.env.VITE_EMAILJS_CHAVE;

function semProtocolo(link) {
    return link.replace("https://", "").replace(/\/$/, "");
}

function formatarWhatsapp(numero) {
    return `+${numero.slice(0, 2)} ${numero.slice(2, 4)} ${numero.slice(4, 9)}-${numero.slice(9)}`;
}

const contatos = [
    { nome: "E-mail", texto: EMAIL, link: `mailto:${EMAIL}` },
    {
        nome: "WhatsApp",
        texto: formatarWhatsapp(WHATSAPP),
        link: `https://wa.me/${WHATSAPP}`,
    },
    { nome: "LinkedIn", texto: semProtocolo(LINKEDIN), link: LINKEDIN },
    { nome: "GitHub", texto: semProtocolo(GITHUB), link: GITHUB },
];

const formularioVazio = { nome: "", email: "", mensagem: "" };

function Contato() {
    const [formulario, setFormulario] = useState(formularioVazio);
    const [situacao, setSituacao] = useState("parado");

    function atualizar(evento) {
        setFormulario({
            ...formulario,
            [evento.target.name]: evento.target.value,
        });
    }

    async function enviar(evento) {
        evento.preventDefault();
        setSituacao("enviando");

        try {
            await emailjs.send(SERVICO, MODELO, formulario, {
                publicKey: CHAVE,
            });
            setFormulario(formularioVazio);
            setSituacao("enviado");
        } catch (erro) {
            console.error("Erro EmailJS:", erro);
            setSituacao("erro");
        }
    }

    return (
        <section className={estilos.contato}>
            <h2 className={estilos.titulo}>Contato</h2>

            <ul className={estilos.lista}>
                {contatos.map((contato) => (
                    <li key={contato.nome} className={estilos.item}>
                        <span className={estilos.rotulo}>{contato.nome}</span>
                        <a
                            className={estilos.valor}
                            href={contato.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {contato.texto}
                        </a>
                    </li>
                ))}
            </ul>

            <h3 className={estilos.subtitulo}>Envie uma mensagem</h3>

            <form className={estilos.formulario} onSubmit={enviar}>
                <label className={estilos.campo}>
                    Nome
                    <input
                        type="text"
                        name="nome"
                        value={formulario.nome}
                        onChange={atualizar}
                        required
                    />
                </label>

                <label className={estilos.campo}>
                    E-mail
                    <input
                        type="email"
                        name="email"
                        value={formulario.email}
                        onChange={atualizar}
                        required
                    />
                </label>

                <label className={estilos.campo}>
                    Mensagem
                    <textarea
                        name="mensagem"
                        rows="6"
                        value={formulario.mensagem}
                        onChange={atualizar}
                        required
                    />
                </label>

                <button
                    className={estilos.botao}
                    type="submit"
                    disabled={situacao === "enviando"}
                >
                    {situacao === "enviando" ? "Enviando..." : "Enviar mensagem"}
                </button>

                {situacao === "enviado" && (
                    <p className={estilos.sucesso}>
                        Mensagem enviada. Obrigado pelo contato.
                    </p>
                )}

                {situacao === "erro" && (
                    <p className={estilos.erro}>
                        Não foi possível enviar. Tente de novo ou use um dos
                        contatos acima.
                    </p>
                )}
            </form>
        </section>
    );
}

export default Contato;