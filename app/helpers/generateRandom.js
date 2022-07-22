import { helper } from '@ember/component/helper';
/**
 * @description Generate random number between 1 and maxLimit.
 * @param {number} maxLimit
 * @returns {number}
 */
export const generateRandom = (maxLimit = 0) => Math.floor(Math.random() * (maxLimit - 1)) + 1;

export default helper(generateRandom);
