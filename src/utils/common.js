export const stringToBool = (data) => {
    if (data.toLowerCase() === "true")
        return true;
    return false;
} 

export const compareStrings = (firstString = '', secondString = '') => firstString.toLowerCase() === secondString.toLowerCase();