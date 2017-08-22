import React from 'react';
import shuffle from 'lodash/shuffle';
import chunk from 'lodash/chunk';

import './Game.css';

const Card = ({size, words}) => {
  let totalSize = Math.pow(size, 2);
  let wordList = words.slice(0, totalSize);
  wordList = shuffle(wordList);
  if (words.length < totalSize) {
    wordList = [];
    while (wordList.length + 1 <= totalSize) {
      wordList.push(words[getRandomInt(0, words.length)]);
    }
  }
  const chunks = chunk(wordList, size);
  const rows = chunks.map((row, index) => {
    return (
      <div key={index} className="row">
        {createCells(row)}
      </div>
    );
  });
  return (
    <div className="card">
      {rows}    
    </div>
  );
};

function createCells(row) {
  return row.map((cell, index) => {
    return (
      <div key={index} className="cell">
        {cell}
      </div>
    );
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

export default Card;
