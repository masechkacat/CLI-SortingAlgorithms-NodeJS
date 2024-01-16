import Sorter from './sorter.js';

export default class SelectionSort extends Sorter {
  sort(arr) {
    this.resetComparisons();
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (this.compare(arr[j], arr[minIdx]) < 0) {
          minIdx = j;
        }
      }
      if (minIdx != i) {
        let temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
      }
    }
    return arr;
  }
}

//Сортировка выбором: Этот алгоритм находит наименьший элемент в списке и помещает его в начало,
//затем находит второй наименьший элемент и помещает его в конец и т. д.
//Повторяется, пока весь список не будет отсортирован.
//Сортировка выбором является примером алгоритма «жадной».
