/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let left = 0;
    let maxFruits = 0;
    const basket = new Map();

    for (let right = 0; right < fruits.length; right++) {
        const fruit = fruits[right];
        basket.set(fruit, (basket.get(fruit) || 0) + 1);

        // If more than 2 types, shrink window
        while (basket.size > 2) {
            const leftFruit = fruits[left];
            basket.set(leftFruit, basket.get(leftFruit) - 1);

            if (basket.get(leftFruit) === 0) {
                basket.delete(leftFruit);
            }
            left++;
        }

        maxFruits = Math.max(maxFruits, right - left + 1);
    }

    return maxFruits;
};
