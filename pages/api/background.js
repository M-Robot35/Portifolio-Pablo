const background = [
    {
        eduCards: [
            
            {
                id: 0,
                title: 'Faceminas Pós-graduação',
                degree: 'Big Data e Cloud Computing, Ciência de Dados',
                detail: 'Postgraduate Degree em Big Data e Cloud Computing, Ciência de Dados pela Faceminas Pós-graduação EAD.',
                year: 'mai de 2024 - fev de 2025'
            },
            {
                id: 1,
                title: 'Faceminas Pós-graduação',
                degree: 'Postgraduate Degree, Inteligência Artificial',
                detail: 'Postgraduate Degree em Inteligência Artificial pela Faceminas Pós-graduação EAD.',
                year: 'mai de 2024 - fev de 2025'
            },
            {
                id: 2,
                title: 'Anhanguera Educacional',
                degree: 'Postgraduate Degree, Estatística Aplicada a Negócios',
                detail: 'Postgraduate Degree em Estatística Aplicada a Negócios pela Anhanguera Educacional.',
                year: 'jun de 2024 - mai de 2025'
            },
            {
                id: 3,
                title: 'Anhanguera Educacional',
                degree: 'Postgraduate Degree, Inteligência de Mercado',
                detail: 'Postgraduate Degree em Inteligência de Mercado pela Anhanguera Educacional.',
                year: 'jul de 2024 - fev de 2025'
            },
            {
                id: 4,
                title: 'Anhanguera Educacional',
                degree: 'Postgraduate Degree, Gerenciamento e Visualização de Dados para Negócios',
                detail: 'Postgraduate Degree em Gerenciamento e Visualização de Dados para Negócios pela Anhanguera Educacional.',
                year: 'jun de 2024 - fev de 2025',
                note: 'Nota: visualização de dados e estatística aplicada com regras de negócios.'
            },
            {
                id: 5,
                title: 'Anhanguera Educacional',
                degree: 'Postgraduate Degree, Data Science e Analytics',
                detail: 'Postgraduate Degree em Data Science e Analytics pela Anhanguera Educacional.',
                year: 'jun de 2024 - fev de 2025'
            },
            {
                id: 6,
                title: 'Faculdade Pitágoras',
                degree: 'Curso Superior de Tecnologia (CST), Análise e Desenvolvimento de Sistemas',
                detail: 'Curso Superior de Tecnologia (CST) em Análise e Desenvolvimento de Sistemas pela Faculdade Pitágoras.',
                year: 'jan de 2022 - jun de 2024'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Faculdade Pitágoras - Curso Superior de Tecnologia (CST) em Análise e Desenvolvimento de Sistemas',
                role: 'Projeto Pessoal - Desenvolvedor de Painéis de BI',
                url: '#',
                desc: 'Durante este curso, você aprendeu a projetar, desenvolver e gerenciar sistemas de informação. A formação incluiu linguagens de programação, estruturas de dados, banco de dados e engenharia de software. Você também adquiriu habilidades em análise de requisitos, desenvolvimento de aplicativos e gestão de projetos de TI',
                year: 'Jan de 2022 - Jun de 2024',
                location: 'Belo Horizonte'
            },
            {
                id: 2,
                title: 'Anhanguera Educacional - Postgraduate Degree em Data Science e Analytics',
                role: 'Desenvolvimento de um Sistema de Recomendação',
                url: '#',
                desc: 'Neste curso de pós-graduação, você aprendeu técnicas avançadas de análise de dados, ciência de dados, machine learning e big data. A formação incluiu o uso de ferramentas e linguagens como Python, R, SQL e plataformas de visualização de dados. Você também estudou métodos estatísticos e algoritmos de machine learning para transformar dados em insights.',
                year: 'Feb de 2023 - Presente',
                location: 'Belo Horizonte'
            },
            {
                id: 3,
                title: 'Anhanguera Educacional - Postgraduate Degree em Gerenciamento e Visualização de Dados para Negócios',
                role: ' Previsão de Demanda com Machine Learning',
                url: '#',
                desc: "Este curso focou em técnicas de gerenciamento de dados e visualização para negócios. Eu aprendi a utilizar ferramentas de BI (Business Intelligence) como Power BI e Tableau, além de técnicas de storytelling com dados e design de dashboards. A formação também incluiu fundamentos de estatística aplicada e regras de negócios para visualizações eficazes.",
                year: 'Jun de 2024 - Fev de 2025',
                location: 'Belo Horizonte'
            },
        ]
    }
];


export default function handler(req, res) {
    res.status(200).json(background)
}