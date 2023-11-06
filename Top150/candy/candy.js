/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1); // Initialize each child with one candy

    // Left to right pass: Assign candies to children with higher ratings compared to their left neighbors
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    let totalCandies = candies[n - 1]; // Initialize the total candies with the last child's assigned candies

    // Right to left pass: Adjust the candies to account for children with higher ratings compared to their right neighbors
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
        totalCandies += candies[i]; // Update the total candies count
    }

    return totalCandies;
};

// Example usage:
const ratings1 = [1, 0, 2];
console.log(candy(ratings1)); // Output: 5

const ratings2 = [1, 2, 2];
console.log(candy(ratings2)); // Output: 4
