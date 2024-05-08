"use strict";

const book = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    pageCount: 223
};

function printBookInfo(book) {
    console.log("Title: " + book.title);
    console.log("Author: " + book.author);
    console.log("Page Count: " + book.pageCount);
}

printBookInfo(book);