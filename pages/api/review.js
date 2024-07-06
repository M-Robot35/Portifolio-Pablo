const review = [
    {
        id: 0,
        clientName: 'João Santos',
        clientLocation: 'Brasil',
        clientSource: 'Upwork',
        clientReview: 'Sempre é um prazer trabalhar com Pablo Ramires. O trabalho é concluído rapidamente e ele faz mais do que é solicitado. Também é claro que ele tem muito conhecimento sobre a análise de dados que realiza. Estou ansioso para nossa próxima colaboração.'
    },
    {
        id: 1,
        clientName: 'Maria Garcia',
        clientLocation: 'Espanha',
        clientSource: 'Upwork',
        clientReview: 'Pablo é excelente na comunicação e um analista de dados experiente. Foi uma ótima experiência trabalhar com ele.'
    },
    {
        id: 2,
        clientName: 'Hans Müller',
        clientLocation: 'Alemanha',
        clientSource: 'Upwork',
        clientReview: 'Pablo é extremamente conhecedor e prestativo. Ele entende tudo sobre análise de dados e visualização. Sua compreensão das diferentes tecnologias e ferramentas de análise de dados também é muito impressionante. Espero ter a chance de trabalhar com ele novamente.'
    },
    {
        id: 3,
        clientName: 'Claire Dupont',
        clientLocation: 'França',
        clientSource: 'Upwork',
        clientReview: 'Trabalhei com Pablo Ramires e ele é muito profissional e excelente analista de dados. Admiro sua rapidez na análise e a qualidade do trabalho quando recebe uma tarefa.'
    },
];
export default function handler(req, res) {
    res.status(200).json(review)
}
