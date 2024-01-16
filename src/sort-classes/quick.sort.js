import Sorter from './sorter.js';

export default class QuickSort extends Sorter {
  quickSortHelper(arr) {
    this.resetComparisons();
    return this.sort(arr);
  }

  sort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
      this.compare(arr[i], pivot) < 0 ? left.push(arr[i]) : right.push(arr[i]);
    }
    return this.sort(left).concat(pivot, this.sort(right));
  }
}

// Быстрая сортировка (Quick Sort)
// Разделение: Выбирается опорный элемент (pivot), и массив делится на два подмассива:
// элементы меньше опорного и элементы больше или равные опорному.
// Рекурсия и объединение: Рекурсивно применяется быстрая сортировка к каждому из подмассивов.
// Не требуется дополнительная операция слияния, так как все элементы уже находятся в нужном
// порядке после разделения и рекурсивной сортировки.
// Производительность: Средняя и лучшая сложность - O(n log n), но в худшем случае - O(n²).
// Производительность зависит от выбора опорного элемента.
// Память: Является "in-place" алгоритмом и не требует дополнительного места, кроме стека для рекурсивных вызовов.