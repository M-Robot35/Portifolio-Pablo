const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Anhanguera Educacional',
                degree: 'Postgraduate Degree, Estatística Aplicada a Negócios',
                detail: 'Postgraduate Degree em Estatística Aplicada a Negócios pela Anhanguera Educacional.',
                year: 'jun de 2024 - mai de 2025'
            },
            {
                id: 1,
                title: 'Anhanguera Educacional',
                degree: 'Postgraduate Degree, Inteligência de Mercado',
                detail: 'Postgraduate Degree em Inteligência de Mercado pela Anhanguera Educacional.',
                year: 'jul de 2024 - fev de 2025'
            },
            {
                id: 2,
                title: 'Anhanguera Educacional',
                degree: 'Postgraduate Degree, Gerenciamento e Visualização de Dados para Negócios',
                detail: 'Postgraduate Degree em Gerenciamento e Visualização de Dados para Negócios pela Anhanguera Educacional.',
                year: 'jun de 2024 - fev de 2025',
                note: 'Nota: visualização de dados e estatística aplicada com regras de negócios.'
            },
            {
                id: 3,
                title: 'Anhanguera Educacional',
                degree: 'Postgraduate Degree, Data Science e Analytics',
                detail: 'Postgraduate Degree em Data Science e Analytics pela Anhanguera Educacional.',
                year: 'jun de 2024 - fev de 2025'
            },
            {
                id: 4,
                title: 'Faceminas Pós-graduação EAD',
                degree: 'Postgraduate Degree, Inteligência Artificial',
                detail: 'Postgraduate Degree em Inteligência Artificial pela Faceminas Pós-graduação EAD.',
                year: 'mai de 2024 - fev de 2025'
            },
            {
                id: 5,
                title: 'Faceminas Pós-graduação EAD',
                degree: 'Big Data e Cloud Computing, Ciência de Dados',
                detail: 'Postgraduate Degree em Big Data e Cloud Computing, Ciência de Dados pela Faceminas Pós-graduação EAD.',
                year: 'mai de 2024 - fev de 2025'
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
        // expCards: [
        //     {
        //         id: 1,
        //         title: 'JMM Technologies',
        //         role: 'Analista de Dados',
        //         url: 'https://jmm.ltd/',
        //         desc: 'Como analista de dados, utilizei SQL, Power BI e Python para transformar dados brutos em insights acionáveis, apoiando a tomada de decisões estratégicas.',
        //         year: '02/2023 - Presente',
        //         location: 'São Paulo'
        //     },
        //     {
        //         id: 2,
        //         title: 'HauzaTech',
        //         role: 'Estagiário em Análise de Dados',
        //         url: 'sem site',
        //         desc: 'Como estagiário em análise de dados, aprendi a usar ferramentas como Excel, SQL e Power BI para analisar e visualizar dados, contribuindo para projetos de otimização de processos internos.',
        //         year: '02/2023 - Presente',
        //         location: 'Belo Horizonte'
        //     },
        //     {
        //         id: 3,
        //         title: 'Encoder Bytes',
        //         role: 'Desenvolvedor de Dados',
        //         url: 'https://www.encoderbytes.com/',
        //         desc: "Trabalhei como desenvolvedor de dados, onde implementei operações CRUD em bancos de dados SQL e desenvolvi pipelines de dados utilizando Python para automatizar processos de ETL.",
        //         year: '09/2020 - 02/2021',
        //         location: 'Belo Horizonte'
        //     },
        //     {
        //         id: 4,
        //         title: 'Freelancer',
        //         role: 'Analista de Dados',
        //         url: 'https://www.freelancer.com/',
        //         desc: 'Trabalhei como freelancer em diversos projetos de análise de dados, utilizando SQL, Power BI e Python para transformar dados brutos em insights acionáveis para os clientes.',
        //         year: '06/2021 - Presente',
        //         location: 'Remoto'
        //     },
        //     {
        //         id: 5,
        //         title: 'Projeto Pessoal',
        //         role: 'Desenvolvedor de Painéis de BI',
        //         url: 'https://github.com/seuperfil',
        //         desc: 'Desenvolvi painéis de BI usando Power BI para monitorar tendências de mercado e desempenho de vendas, resultando em decisões estratégicas mais informadas.',
        //         year: '01/2022 - Presente',
        //         location: 'Remoto'
        //     },
        //     {
        //         id: 6,
        //         title: 'Projeto Pessoal',
        //         role: 'Engenheiro de Dados',
        //         url: 'https://github.com/seuperfil',
        //         desc: 'Projetei e implementei pipelines de dados utilizando Python e SQL para automatizar a coleta, limpeza e análise de dados de múltiplas fontes.',
        //         year: '01/2023 - Presente',
        //         location: 'Remoto'
        //     }
        // ]
    }
];


export default function handler(req, res) {
    res.status(200).json(background)
}