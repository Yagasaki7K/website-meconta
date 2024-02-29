function getDateAndFormatHim(data) {
    // Divide a data em partes: ano, mês e dia
    const separated = data.split('-');
    const year = separated[0];
    const month = separated[1];
    const day = separated[2];

    // Formata a data para o padrão brasileiro
    const formatDate = `${day}/${month}/${year}`;

    return formatDate;
}

export default getDateAndFormatHim