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
        Console.log("FIPE Rest API");
        Console.log("DriveON");
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
    private String nome = "Mateus Ribas Marques";
    private String funcao = "Desenvolvedor";
    private String graduacao = "Engenharia de Software - PUC Minas";
    private String tecnico = "Técnico em Informática - Cotemig";
    private String area = "Back-end, APIs e bancos de dados";
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

Olá! Eu sou o Mateus Ribas Marques, desenvolvedor e
estudante de Engenharia de Software.

## Formação:
Engenharia de Software na PUC Minas (cursando) e
Técnico em Informática no Cotemig.

## Área de atuação:
Desenvolvimento de software, com foco em Back-end, APIs
e bancos de dados, usando Java, Spring Boot, React e
PostgreSQL.

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

Hi! I'm Mateus Ribas Marques, a developer and
Software Engineering student.

## Education:
Software Engineering at PUC Minas (in progress) and
a Technical Diploma in Computer Science from Cotemig.

## Field of work:
Software development, focused on back-end, APIs and
databases, using Java, Spring Boot, React and PostgreSQL.

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
                    nome: "Experiencias",
                    tipo: "pasta",
                    filhos: [
                        {
                            nome: "experiencias.md",
                            tipo: "arquivo",
                            icone: "markdown",
                            conteudo: `# Experiencias

## Engenharia de Software - PUC Minas
Estudante - cursando atualmente

- Desenvolvimento de projetos acadêmicos com Java e Spring Boot
- Aplicações web com React
- Estudo de bancos de dados

## Técnico em Informática - Cotemig
Estudante - concluído

- Base em lógica de programação e desenvolvimento de software`,
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
    "linguagens": ["Java", "C#", "JavaScript", "TypeScript", "C", "C++"],
    "frontend": ["React", "HTML", "CSS"],
    "backend": ["Spring Boot"],
    "bancos": ["PostgreSQL", "MySQL"],
    "ferramentas": ["Git", "GitHub"]
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
    private String github = "github.com/MateusRibasMarques";
    private String linkedin = "linkedin.com/in/seuusuario";
    private String email = "seuemail@email.com";
}`,
                        },
                    ],
                },
            ],
        },
    ],
};