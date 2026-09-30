import estilos from "./Sidebar.module.css";

function Sidebar() {
    return (
        <aside className={estilos.barraLateral}>
            <div className={`${estilos.icone} ${estilos.ativo}`}>
                ▱
            </div>

            <div className={estilos.icone}>
                ⌕
            </div>

            <div className={estilos.icone}>
                ⑂
            </div>

            <div className={estilos.icone}>
                ◇
            </div>

            <div className={estilos.icone}>
                ⚙
            </div>
        </aside>
    );
}

export default Sidebar;