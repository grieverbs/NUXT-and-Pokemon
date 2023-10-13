export const utils = () => {
    const capitalizedFirstCharacter = (word: string) => {
        /* 
         * Split string approach means I have to address spaces, hyphens, 
         * maybe even underscore if I find it.  Easier to plug it into a regex
         */
        return word.replace(/(?:^|\s|-|_)\S/g, x => x.toUpperCase());
    }    

    return {
        capitalizedFirstCharacter
    };
}