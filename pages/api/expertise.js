const expertise = [
    {
        id: 0,
        title: 'Análise de Dados',
        desc: 'Sou um analista de dados experiente com vasta experiência em SQL Server, Power BI e Python. Tenho habilidades em modelagem de dados, visualização de dados e análise estatística. Minha capacidade de transformar dados brutos em insights acionáveis ajuda empresas a tomar decisões estratégicas informadas.',
    },
    {
        id: 1,
        title: 'Metodologias Ágeis e Ferramentas de Gestão de Projetos',
        desc: 'Como analista de dados, sou proficiente em metodologias ágeis como Scrum e ferramentas de gestão de projetos como Jira. Utilizo essas metodologias para melhorar a eficiência do trabalho em equipe e garantir a entrega de projetos de alta qualidade dentro dos prazos estipulados.',
    },
    {
        id: 2,
        title: 'Design de Visualizações de Dados (UI/UX)',
        desc: 'Tenho proficiência em software de design como Figma e Adobe XD, aplicando esses conhecimentos na criação de visualizações de dados intuitivas e impactantes no Power BI. Minhas habilidades em design UI/UX garantem que os dashboards e relatórios sejam visualmente atraentes e fáceis de interpretar.',
    },
    {
        id: 3,
        title: 'Versionamento de Código com GitHub',
        desc: 'O GitHub é essencial para o controle de versão e colaboração em projetos de dados. Utilizo recursos como pull requests e issue tracking para gerenciar o desenvolvimento de scripts e pipelines de dados, garantindo que o código esteja sempre atualizado e revisado por pares.',
    },
    {
        id: 4,
        title: 'Contribuição em Projetos Open Source',
        desc: 'Acredito no poder do open source e dedico parte do meu tempo livre para contribuir com projetos de código aberto. Essa prática me permite aprender com as melhores práticas de desenvolvedores experientes e também retribuir à comunidade, ajudando a melhorar ferramentas e bibliotecas utilizadas na análise de dados.',
    },
    {
        id: 5,
        title: 'Inteligência Artificial e Machine Learning',
        desc: 'Tenho conhecimento básico em inteligência artificial e machine learning, utilizando bibliotecas como Numpy, Pandas, Seaborn e Matplotlib para análise de dados e visualização. Estou continuamente aprimorando minhas habilidades para aplicar técnicas de IA em projetos de dados.',
    },
];

export default function handler(req, res) {
    res.status(200).json(expertise)
}
