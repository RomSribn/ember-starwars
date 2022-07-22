import { helper } from '@ember/component/helper';
import { replaceSpecialCharacters } from 'ember-starwars/helpers/replaceSpecialCharacters';

/**
 * @description Generate random number between 1 and maxLimit.
 * @param {object} firstPlayer
 * @param {object} secondPlayer
 * @returns {[firstPlayer, secondPlayer]} Returns modified array with "winner" property.
 */
export const figuringWinner = (firstPlayer, secondPlayer) => {
  const firstPlayerValue = Number(
    (firstPlayer.mass && replaceSpecialCharacters(firstPlayer.mass)) ||
      (firstPlayer.crew && replaceSpecialCharacters(firstPlayer.crew))
  );
  const secondPlayerValue = Number(
    (secondPlayer.mass && replaceSpecialCharacters(secondPlayer.mass)) ||
      (secondPlayer.crew && replaceSpecialCharacters(secondPlayer.crew))
  );

  if ((firstPlayer.error && secondPlayer.error) || (!secondPlayerValue && !firstPlayerValue)) {
    return [firstPlayer, secondPlayer];
  }
  if (firstPlayerValue > secondPlayerValue || !secondPlayerValue) {
    return [{ ...firstPlayer, winner: true }, secondPlayer];
  }
  if (firstPlayerValue < secondPlayerValue || !firstPlayerValue) {
    return [firstPlayer, { ...secondPlayer, winner: true }];
  }
};

export default helper(figuringWinner);
