const portfolio = [
    {
        id: 0,
        projectName: "JMM ERP",
        url: "#",
        image: "dash/dash1.png",
        projectDetail: "Restructure seu negócio com o ERP da JMM, uma solução completa baseada em nuvem. Utilizei SQL, Power BI e Python para analisar dados de desempenho e fornecer insights estratégicos.",
        technologiesUsed: [
            {
                tech: "Estátistica"
            },
            {
                tech: "Data Viz"
            },
            {
                tech: "Rest Api"
            },
            {
                tech: "Power BI"
            },
        ]
    },
    {
        id: 0,
        projectName: "Analise de Receita e Margem",
        url: "#",
        image: "dash/dash2.png",
        projectDetail: "A ABSCO oferece soluções de consultoria empresarial sob medida. Desenvolvi dashboards interativos com Power BI para monitorar KPIs e apoiar a tomada de decisões.",
        technologiesUsed: [
            {
                tech: "Estátistica"
            },
            {
                tech: "Data Viz"
            },
            {
                tech: "SQL"
            },
            {
                tech: "Excel"
            },
        ]
    },
    {
        id: 0,
        projectName: "Analise de Vendas",
        url: "#",
        image: "dash/dash3.png",
        projectDetail: "A é uma empresa de tecnologia com ampla experiência em soluções digitais. Análise de dados de clientes para identificar oportunidades de otimização.",
        technologiesUsed: [
            {
                tech: "Estátistica"
            },
            {
                tech: "Data Viz"
            },
            {
                tech: "SQL"
            },
            {
                tech: "Excel"
            },
        ]
    },
    {
        id: 0,
        projectName: "Relatório Comercial IA",
        url: "#",
        image: "dash/dash4.jpeg",
        projectDetail: "A ALSN promove a transformação digital com serviços de tradução de documentos. Realizei análise de dados de mercado para identificar novos nichos e oportunidades.",
        technologiesUsed: [
            {
                tech: "Estátistica"
            },
            {
                tech: "Data Viz"
            },
            {
                tech: "SQL"
            },
            {
                tech: "Excel"
            },
        ]
    },
    {
        id: 0,
        projectName: "Dash de Vendas Eletronicas",
        url: "#",
        image: "dash/dash5.jpg",
        projectDetail: "Invest in Saudi Arabia, simplifique o processo de obtenção de licenças e início de negócios com FirmSanad. Desenvolvi relatórios detalhados para acompanhamento de processos.",
        technologiesUsed: [
            {
                tech: "Estátistica"
            },
            {
                tech: "Data Viz"
            },
            {
                tech: "SQL"
            },
            {
                tech: "Excel"
            },
        ]
    },
    {
        id: 0,
        projectName: "Controle de Fluxo",
        url: "#",
        image: "dash/dash6.png",
        projectDetail: "Fateh Al Mustaqbil é uma agência de viagens que oferece serviços personalizados. Utilizei análise de dados para entender o comportamento dos clientes e otimizar ofertas.",
        technologiesUsed: [
            {
                tech: "Estátistica"
            },
            {
                tech: "Data Viz"
            },
            {
                tech: "SQL"
            },
            {
                tech: "Excel"
            },
        ]
    }
];

export default function handler(req, res) {
    res.status(200).json(portfolio)
}