import Sorter from './sorter.js'

export default class BubbleSort extends Sorter {
  sort(arr) {
    this.resetComparisons();
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (this.compare(arr[j], arr[j + 1]) > 0) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
}

// Сортировка пузырьком: Это простой алгоритм, который повторно проходит по списку,
// сравнивая соседние элементы и меняя их местами, если они находятся в неправильном порядке.
// Процесс повторяется до тех пор, пока не будет выполнена итерация без каких-либо замен.
// Сортировка пузырьком является примером алгоритма «жадной».