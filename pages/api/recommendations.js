// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Edgar Washington de Souza',
    image: "images/sikandar.jpeg",
    designation: 'Especialista em BI | SQL Server | Power BI',
    view: "Excelente profissional, dedicado e empenhado nas suas funções, sempre procurando executar o trabalho da melhor forma possível, e entregar um ótimo resultado. 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/edgarwashington/"
  },
  {
    id: 1,
    name: 'Carlos Pierre',
    image: "images/carlos.jpeg",
    designation: 'Gerente Comercial/ Gerente Regional/ Supervisor de Vendas',
    view: "Profissional comprometido, tem bom relacionamento com seus pares, grande potencial de crescimento na carreira. Tem total domínio da função que exerce e isso o ajuda no dia a dia de trabalho.",
    linkednURL: "https://www.linkedin.com/in/carlos-pierre-66528075/"
  },
  {
    id: 2,
    name: 'Fabio Nonado Da Costa',
    image: "images/fernanda.jpeg",
    designation: 'Engenheira de Dados | Python | Big Data',
    view: "Um profissional íntegro , responsável com foco da empresa, preocupando sempre em cumprir as metas estabelecidas com forte potencial de crescimento.",
    linkednURL: "https://www.linkedin.com/in/fabioncosta/"
  },
  {
    id: 3,
    name: 'Gerci Costa',
    image: "images/joao.jpeg",
    designation: 'Desenvolvedor Full Stack | Analista de Dados',
    view: "Um Profissional íntegro e responsável, comprometido com os horários combinados e sempre exercendo suas funções com forte potencial de crescimento.",
    linkednURL: "https://www.linkedin.com/in/geneci-costa-591348223/"
  },
];

export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}