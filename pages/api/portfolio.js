const portfolio = [
    {
        id: 0,
        projectName: "JMM ERP",
        url: "https://jmmerp.com/",
        image: "projects/erp.png",
        projectDetail: "Restructure seu negócio com o ERP da JMM, uma solução completa baseada em nuvem. Utilizei SQL, Power BI e Python para analisar dados de desempenho e fornecer insights estratégicos.",
        technologiesUsed: [
            {
                tech: "SQL"
            },
            {
                tech: "Power BI"
            },
            {
                tech: "Python"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Excel"
            },
        ]
    },
    {
        id: 0,
        projectName: "ABSCO",
        url: "https://absco.sa/",
        image: "projects/absco.png",
        projectDetail: "A ABSCO oferece soluções de consultoria empresarial sob medida. Desenvolvi dashboards interativos com Power BI para monitorar KPIs e apoiar a tomada de decisões.",
        technologiesUsed: [
            {
                tech: "Power BI"
            },
            {
                tech: "Excel"
            },
            {
                tech: "DAX"
            },
            {
                tech: "SQL"
            },
        ]
    },
    {
        id: 0,
        projectName: "JMM Technologies",
        url: "https://jmm.ltd/",
        image: "projects/jmm.png",
        projectDetail: "A JMM Technologies é uma empresa de tecnologia com ampla experiência em soluções digitais. Análise de dados de clientes para identificar oportunidades de otimização.",
        technologiesUsed: [
            {
                tech: "SQL"
            },
            {
                tech: "Python"
            },
            {
                tech: "Pandas"
            },
            {
                tech: "NumPy"
            },
        ]
    },
    {
        id: 0,
        projectName: "ALSN",
        url: "https://alsn.app/",
        image: "projects/alsn.png",
        projectDetail: "A ALSN promove a transformação digital com serviços de tradução de documentos. Realizei análise de dados de mercado para identificar novos nichos e oportunidades.",
        technologiesUsed: [
            {
                tech: "SQL"
            },
            {
                tech: "Python"
            },
            {
                tech: "Seaborn"
            },
            {
                tech: "Matplotlib"
            },
        ]
    },
    {
        id: 0,
        projectName: "FirmSanad",
        url: "/domain-expired",
        image: "projects/firmsanad.png",
        projectDetail: "Invest in Saudi Arabia, simplifique o processo de obtenção de licenças e início de negócios com FirmSanad. Desenvolvi relatórios detalhados para acompanhamento de processos.",
        technologiesUsed: [
            {
                tech: "SQL"
            },
            {
                tech: "Power BI"
            },
            {
                tech: "Azure"
            },
            {
                tech: "Excel"
            },
        ]
    },
    {
        id: 0,
        projectName: "Fateh Al Mustaqbil",
        url: "https://fatehtour.com/",
        image: "projects/fateh.png",
        projectDetail: "Fateh Al Mustaqbil é uma agência de viagens que oferece serviços personalizados. Utilizei análise de dados para entender o comportamento dos clientes e otimizar ofertas.",
        technologiesUsed: [
            {
                tech: "SQL"
            },
            {
                tech: "Google Analytics"
            },
            {
                tech: "Python"
            },
            {
                tech: "Excel"
            },
        ]
    },
    {
        id: 0,
        projectName: "Tojjar",
        url: "/domain-expired",
        image: "projects/tojjar.png",
        projectDetail: "Tojjar é um site de comércio eletrônico onde você pode abrir sua própria loja e vender produtos de diferentes marcas. Desenvolvi dashboards para monitorar vendas e estoque.",
        technologiesUsed: [
            {
                tech: "SQL"
            },
            {
                tech: "Power BI"
            },
            {
                tech: "Tableau"
            },
            {
                tech: "Excel"
            },
        ]
    },
    {
        id: 0,
        projectName: "Otawix",
        url: "https://b2c.otawix.com/",
        image: "projects/otawix.png",
        projectDetail: "Otawix oferece serviços B2C para diferentes setores. Realizei análise de dados para identificar tendências e oportunidades de crescimento.",
        technologiesUsed: [
            {
                tech: "SQL"
            },
            {
                tech: "Python"
            },
            {
                tech: "Power BI"
            },
            {
                tech: "Google BigQuery"
            },
        ]
    },
    {
        id: 0,
        projectName: "Spatay",
        url: "https://spatay.com/",
        image: "projects/spatay.png",
        projectDetail: "Spatay oferece soluções inovadoras para seus clientes. Criei relatórios e dashboards para análise de desempenho e suporte à tomada de decisões.",
        technologiesUsed: [
            {
                tech: "SQL"
            },
            {
                tech: "Power BI"
            },
            {
                tech: "Python"
            },
            {
                tech: "AWS"
            },
        ]
    }
];

export default function handler(req, res) {
    res.status(200).json(portfolio)
}