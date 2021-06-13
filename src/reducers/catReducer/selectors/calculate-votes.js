/* Takes in raw votes data array and returns a formatted array with votes for images added together */
export const calculateVotes = votes => {
  const reducedVotes = votes?.reduce((result, currentVote) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentVote['image_id']] =
      result[currentVote['image_id']] || []).push(currentVote.value);
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object

  let finalVotes = [];

  if (reducedVotes) {
    // Loops through each image object with a votes array attached
    Object.entries(reducedVotes).forEach(([key, value]) => {
      let calcVotes = 0;

      // Adding up votes to get a final value
      value?.forEach(number => {
        if (number === 0) {
          calcVotes = calcVotes - 1;
        }

        if (number === 1) {
          calcVotes++;
        }
      });

      // Pushes new object with image_id and final votes added together to new array
      finalVotes.push({
        image_id: key,
        value: calcVotes
      });
    });
  }

  return finalVotes;
};
