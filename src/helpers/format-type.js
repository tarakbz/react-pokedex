const formatType = (type) => {
    let color;
    switch (type) {
        case 'Feu':
            color = '#F47D56';
            break;
        case 'Eau':
            color = '#67A2B6';
            break;
        case 'Plante':
            color = 'green';
            break;
        case 'Insecte':
            color = '#8BC979';
            break;
        case 'Normal':
            color = 'grey';
            break;
        case 'Vol':
            color = '#669DAF';
            break;
        case 'Poison':
            color = '#89607F';
            break;
        case 'Fée':
            color = 'pink';
            break;
        case 'Psy':
            color = 'purple';
            break;
        case 'Electrik':
            color = '#E1C16F';
            break;
        case 'Combat':
            color = 'orange';
            break;
        default:
            color = 'grey';
            break;
    }
    return color;
}

export default formatType;
