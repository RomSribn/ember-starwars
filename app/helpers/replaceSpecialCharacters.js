import { helper } from '@ember/component/helper';
/**
 * @description Remove all special characters. The replace method returns a new string with the matches replaced.
 * @param {string} str
 * @returns {string}
 */
export const replaceSpecialCharacters = (str = '') => str.replace(/[^\w ]/g, '');

export default helper(replaceSpecialCharacters);
