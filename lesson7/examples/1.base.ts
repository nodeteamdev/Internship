const isDone: boolean = false;

const decimal: number = 6;

const color: string = 'blue';

const list: number[] = [1, 2, 3];

const x: [string, number] = ['yay', 2]

const u: undefined = undefined;

const n: null = null;

const notSure: any = 4;

enum Color {
    Red = 1,
        Green,
        Blue
}

function error(message: string): never {
    throw new Error(message);
}

(() => {
    let someValue: any = 'this is a string';
    let strLength: number = ( < string > someValue).length;
})();

(() => {
    let someValue: any = 'this is a string';
    let strLength: number = (someValue as string).length;
})();