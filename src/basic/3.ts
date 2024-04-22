// Створіть змінну, яка може містити або рядок, або число(union type) ? Також, оголосіть змінну,
//     яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable'(literal type).

let mixType: string | number;
mixType = 'Kill’am all';
mixType = 55;


type onlyOne = 'enable' | 'disable'