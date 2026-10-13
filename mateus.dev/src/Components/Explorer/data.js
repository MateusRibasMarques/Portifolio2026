export const arvore = {
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
    private String formacao = "Cursando Ensino Técnico";
    private String area = "Tecnologia da Informação (TI)";
    private String objetivo = "Seguir carreira como desenvolvedor";
    private String[] hobbies = {"Música", "Futebol"};

    public String apresentar() {
        return "Olá, eu sou " + nome + ", " + funcao + ".";
    }
}`,
                        },
                        {
                            nome: "apresentacao_pt.md",
                            tipo: "arquivo",
                            icone: "markdown",
                            conteudo: `# Sobre Mim

Olá! Eu sou o Mateus, desenvolvedor apaixonado por
tecnologia da informação.

## Formação:
Cursando Ensino Técnico na área de tecnologia, onde
venho construindo a base para atuar como desenvolvedor.

## Área de atuação:
Desenvolvimento de software, com foco em Java e React.

## Interesses:
Criar soluções que resolvem problemas reais; aprender
novas tecnologias todos os dias.

## Objetivos profissionais:
Pretendo seguir carreira como desenvolvedor, crescendo
na área de TI e participando de projetos desafiadores.

## Hobbies:
Música e futebol.`,
                        },
                        {
                            nome: "presentation_en.md",
                            tipo: "arquivo",
                            icone: "markdown",
                            conteudo: `# About Me

Hi! I'm Mateus, a developer passionate about
information technology.

## Education:
Currently enrolled in a technical high school program in
technology, building the foundation to work as a developer.

## Field of work:
Software development, focused on Java and React.

## Interests:
Building solutions that solve real problems; learning
new technologies every day.

## Professional goals:
I intend to pursue a career as a developer, growing in
the IT field and taking part in challenging projects.

## Hobbies:
Music and football.`,
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
    private String descricao = "Projeto desenvolvido durante minha formação técnica";
    private String tecnologias = "React, Java";
}`,
                        },
                        {
                            nome: "ApiMoney.java",
                            tipo: "arquivo",
                            icone: "java",
                            conteudo: `public class ApiMoney {
    private String descricao = "API desenvolvida para praticar back-end";
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

## Ensino Técnico
Estudante - cursando atualmente

- Aprendizado de lógica de programação e desenvolvimento de software
- Desenvolvimento de projetos pessoais e acadêmicos
- Buscando a primeira oportunidade na área de TI`,
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