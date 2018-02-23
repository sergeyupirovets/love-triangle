/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let triangles = 0;
    preferences.forEach((item, i, preferences ) => {
        if (item === i + 1) return;

        const second = preferences[item - 1];
        const third = preferences[second - 1];

        if (third === i + 1) {
            triangles++;
        }

    });
    return triangles / 3;
};
