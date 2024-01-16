import Sorter from './sorter.js';

export default class InsertionSort extends Sorter {
  sort(arr) {
    this.resetComparisons();
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && this.compare(arr[j], key) > 0) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
}

// Сортировка вставками: Этот алгоритм строит отсортированный массив (или список) один элемент за раз,
// выбирая каждый следующий элемент и помещая его в правильное положение среди уже отсортированных элементов.
// Сортировка вставками является примером алгоритма «жадной».