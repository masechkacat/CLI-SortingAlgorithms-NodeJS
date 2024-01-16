import Sorter from './sorter.js';

export class MergeSort extends Sorter {
    sort(arr) {
      this.resetComparisons();
      if (arr.length <= 1) {
        return arr;
      }
      let middle = Math.floor(arr.length / 2);
      let left = arr.slice(0, middle);
      let right = arr.slice(middle);
      return this.merge(this.sort(left), this.sort(right));
    }
    merge(left, right) {
      let result = [];
      while (left.length && right.length) {
        this.compare(left[0], right[0]) < 0 ? result.push(left.shift()) : result.push(right.shift());
      }
      return result.concat(left, right);
    }
  }

  // Сортировка слиянием (Merge Sort)
  // Механизм: Сортировка слиянием равномерно делит массив на две части, сортирует каждую из них,
  // а затем сливает отсортированные половины вместе. Этот процесс также повторяется рекурсивно.
  // Производительность: Всегда работает за время O(n log n), что делает её очень надежной и предсказуемой
  // в отличие от быстрой сортировки.
  // Память: Требует дополнительной памяти для хранения временных массивов при слиянии,
  // что делает ее менее эффективной с точки зрения использования памяти по сравнению с быстрой сортировкой.
  // **Стабиль  ность**: Стабильная, что означает, что одинаковые элементы сохранят свой относительный порядок после сортировки.