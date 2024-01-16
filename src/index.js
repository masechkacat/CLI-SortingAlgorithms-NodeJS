import readline from 'readline';
import chalk from 'chalk';
import BubbleSort from './sort-classes/bubble.sort.js';
import InsertionSort from './sort-classes/insertion.sort.js';
import SelectionSort from './sort-classes/selection.sort.js';
import QuickSort from './sort-classes/quick.sort.js';
import { MergeSort } from './sort-classes/merge.sort.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askForNumbers = () => {
    return new Promise((resolve) => {
        rl.question(chalk.cyan('Bonjour! Veuillez entrer une série de nombres séparés par des espaces: '), (input) => {
            const numbers = input.split(' ').map(Number);
            resolve(numbers);
        });
    });
};

const askForSortingMethod = () => {
    return new Promise((resolve) => {
        const sortingMethods = `
        ${chalk.magenta.bold('1')} pour ${chalk.bold('Bubble')},
        ${chalk.magenta.bold('2')} pour ${chalk.bold('Insertion')},
        ${chalk.magenta.bold('3')} pour ${chalk.bold('Selection')},
        ${chalk.magenta.bold('4')} pour ${chalk.bold('Quick')},
        ${chalk.magenta.bold('5')} pour ${chalk.bold('Merge')}
        >>`;
        rl.question(chalk.green(`Veuillez choisir une méthode de tri: ${sortingMethods}: `), (method) => {
            resolve(method.trim());
        });
    });
};

const sortNumbers = (numbers, method) => {
    let sorter;
    switch (method) {
        case '1':
            sorter = new BubbleSort();
            break;
        case '2':
            sorter = new InsertionSort();
            break;
        case '3':
            sorter = new SelectionSort();
            break;
        case '4':
            sorter = new QuickSort();
            break;
        case '5':
            sorter = new MergeSort();
            break;
        default:
            console.log(chalk.bgRed('Méthode non reconnue, tri rapide utilisé par défaut.'));
            sorter = new QuickSort();
    }
    const sortedArray = sorter.sort(numbers);
    return { sortedArray, comparisons: sorter.comparisons };
};

const main = async () => {
    const numbers = await askForNumbers();
    const method = await askForSortingMethod();
    const { sortedArray, comparisons } = sortNumbers(numbers, method);
    console.log(chalk.italic('Les nombres triés sont:'), sortedArray);
    console.log(chalk.yellow(`Nombre de comparaisons: ${comparisons}`));
    rl.close();
};

main();
