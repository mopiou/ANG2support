"use strict";
// Import du model de donnée utilisé dans la collection
var student_item_1 = require("../models/student.item");
// Création d'une collection de données'
exports.STUDENTS = [
    new student_item_1.StudentItem({ id: 0, firstName: 'Pierre', lastName: 'Stone', state: 2 }),
    new student_item_1.StudentItem({ id: 1, firstName: 'Sophie', lastName: 'Bourdon', state: 3 }),
    new student_item_1.StudentItem({ id: 2, firstName: 'Jacques', lastName: 'Rakchy', state: 2 }),
    new student_item_1.StudentItem({ id: 3, firstName: 'Julie', lastName: 'Bicoule', state: 1 }),
    new student_item_1.StudentItem({ id: 4, firstName: 'Charles', lastName: 'Violon', state: 1 }),
    new student_item_1.StudentItem({ id: 5, firstName: 'Claire', lastName: 'Obscure', state: 1 }),
];
//# sourceMappingURL=students.data.js.map