import estilos from "./Sidebar.module.css";

const itens = [
    { id: "explorer", icone: "▱", titulo: "Explorer (Ctrl + B)" },
    { id: "busca", icone: "⌕", titulo: "Buscar" },
    { id: "git", icone: "⑂", titulo: "Repositórios do GitHub" },
    { id: "extensoes", icone: "◇", titulo: "Tecnologias" },
    { id: "config", icone: "⚙", titulo: "Configurações" },
];

function Sidebar({ painel, aoSelecionar }) {
    return (
        <aside className={estilos.barraLateral}>
            {itens.map((item) => (
                <div
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    className={`${estilos.icone} ${item.id === painel ? estilos.ativo : ""}`}
                    title={item.titulo}
                    aria-label={item.titulo}
                    onClick={() => aoSelecionar(item.id)}
                    onKeyDown={(evento) => {
                        if (evento.key === "Enter" || evento.key === " ") {
                            aoSelecionar(item.id);
                        }
                    }}
                >
                    {item.icone}
                </div>
            ))}
        </aside>
    );
}

export default Sidebar;