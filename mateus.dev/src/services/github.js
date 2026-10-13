const USUARIO = "MateusRibasMarques";
const BASE = "https://api.github.com";

const PROJETOS = [
    {
        nome: "Login PUC",
        descricao:
            "Sistema de login desenvolvido em Java como projeto acadêmico na PUC Minas.",
        tecnologias: ["Java"],
        imagem: "/projetos/loginpuc.png",
    },
   
];

function normalizar(texto) {
    return texto.toLowerCase().replace(/[^a-z0-9]/g, "");
}

async function buscarLinguagens(url) {
    const resposta = await fetch(url);

    if (!resposta.ok) {
        return [];
    }

    const linguagens = await resposta.json();
    return Object.keys(linguagens);
}

export async function buscarProjetos() {
    const resposta = await fetch(`${BASE}/users/${USUARIO}/repos?per_page=100`);

    if (!resposta.ok) {
        throw new Error("Não foi possível buscar os repositórios");
    }

    const repositorios = await resposta.json();

    const encontrados = PROJETOS.map((projeto) => {
        const repositorio = repositorios.find(
            (repo) => normalizar(repo.name) === normalizar(projeto.nome)
        );
        return repositorio ? { projeto, repositorio } : null;
    }).filter(Boolean);

    encontrados.sort(
        (a, b) =>
            new Date(a.repositorio.created_at) - new Date(b.repositorio.created_at)
    );

    return Promise.all(
        encontrados.map(async ({ projeto, repositorio }) => {
            const linguagens = await buscarLinguagens(repositorio.languages_url);

            return {
                id: repositorio.id,
                nome: projeto.nome,
                descricao: projeto.descricao,
                linguagens,
                tecnologias: projeto.tecnologias,
                link: repositorio.html_url,
                criadoEm: repositorio.created_at,
                imagens: [
                    projeto.imagem,
                    `https://raw.githubusercontent.com/${USUARIO}/${repositorio.name}/${repositorio.default_branch}/preview.gif`,
                    `https://opengraph.githubassets.com/1/${USUARIO}/${repositorio.name}`,
                ],
            };
        })
    );
}
export async function buscarRepositorios() {
    const resposta = await fetch(
        `${BASE}/users/${USUARIO}/repos?per_page=100&sort=updated`
    );

    if (!resposta.ok) {
        throw new Error("Não foi possível buscar os repositórios");
    }

    const repositorios = await resposta.json();

    return repositorios.map((repo) => ({
        id: repo.id,
        nome: repo.name,
        linguagem: repo.language,
        link: repo.html_url,
        atualizadoEm: repo.updated_at,
    }));
}