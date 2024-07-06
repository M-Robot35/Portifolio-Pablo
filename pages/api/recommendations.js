// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Thiago Teles',
    image: "images/sikandar.jpeg",
    designation: 'Especialista em BI | SQL Server | Power BI',
    view: "Gostaria de recomendar Pablo Ramires para qualquer oportunidade na área de análise de dados. Tive o prazer de trabalhar com ele em vários projetos, onde ele demonstrou um forte entendimento de SQL Server e Power BI, entregando soluções de alta qualidade. Ele mostrou uma vontade constante de aprender e crescer, e seu entusiasmo para enfrentar novos desafios era contagiante. Pablo Ramires é um membro de equipe confiável e dedicado, que seria um grande trunfo para qualquer equipe de análise de dados. Altamente recomendado! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/thiago-teles-a454ab238/"
  },
  {
    id: 1,
    name: 'Carlos Pierre',
    image: "images/carlos.jpeg",
    designation: 'Cientista de Dados | Engenheiro de Machine Learning | Desenvolvedor Python',
    view: "Tive o privilégio de trabalhar ao lado de Pablo Ramires em diversos projetos universitários, e devo dizer, seu talento e ética de trabalho realmente se destacaram. Recentemente, ambos fizemos parte da equipe dinâmica da JMM Technologies, onde o profissionalismo e a atenção aos detalhes de Pablo brilharam intensamente. Recomendo de coração Pablo Ramires para qualquer oportunidade que exija um indivíduo altamente qualificado e dedicado.",
    linkednURL: "https://www.linkedin.com/in/carlos-pierre-66528075/"
  },
  {
    id: 2,
    name: 'Fabio Nonado Da Costa',
    image: "images/fernanda.jpeg",
    designation: 'Engenheira de Dados | Python | Big Data',
    view: "Recomendo de todo o coração Pablo Ramires como um talentoso analista de dados com uma incrível aptidão para visualização de dados. Sua proficiência em Python e SQL Server melhora ainda mais suas capacidades, permitindo-lhe construir aplicações robustas e escaláveis. A atenção aos detalhes, habilidades de resolução de problemas e dedicação para entregar resultados excepcionais fazem de Pablo Ramires uma adição valiosa a qualquer equipe de desenvolvimento de dados.",
    linkednURL: "https://www.linkedin.com/in/fabioncosta/"
  },
  {
    id: 3,
    name: 'Gerci Costa',
    image: "images/joao.jpeg",
    designation: 'Desenvolvedor Full Stack | Analista de Dados',
    view: "Recomendo altamente Pablo Ramires para posições de analista de dados sênior. Sua expertise em SQL Server e Power BI, combinada com seu profissionalismo e dedicação, fazem dele um recurso inestimável para qualquer equipe.",
    linkednURL: "https://www.linkedin.com/in/geneci-costa-591348223/"
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
