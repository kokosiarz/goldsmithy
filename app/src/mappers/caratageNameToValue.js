export const caratageNameToValue = (caratageName) => {
    const caratageNameToValueMap = {
        '.999': 1,
        '.960': 0.960,
        '.750': 0.750,
        '.585': 0.585,
        '.500': 0.500,
        '.375': 0.375,
        '.333': 0.333,
    };
    return caratageNameToValueMap[caratageName];
}

export default caratageNameToValue