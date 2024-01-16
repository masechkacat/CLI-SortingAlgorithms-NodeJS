export default class Sorter {
    constructor() {
        this.comparisons = 0;
    }

    resetComparisons() {
        this.comparisons = 0;
    }

    compare(a, b) {
        this.comparisons++;
        return a - b;
    }
}