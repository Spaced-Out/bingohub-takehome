# BingoHub
BingoHub is a web application that lets users create bingo games and automatically generate cards for each player.

Bingo is a game where each player receives a "card" consisting of a grid where each cell has a unique word. Players then mark words as they are called only winning when they've marked a full diagonal, vertical, or horizontal set of cells.

Note that BingoHub does not run games; it only creates them.


## Design Mock
[https://www.dropbox.com/s/46rlbtkqo80avwf/Bingo2.sketch?dl=0](https://www.dropbox.com/s/46rlbtkqo80avwf/Bingo2.sketch?dl=0)

## Data
A bingo game is generated with:
  - `name` - the title used in the UI
  - `size` - the square width/height of the bingo card
  - `playerCount` - the number of cards to generate
  - `words` - a list of words to put in the cells
  - `image` - an optional image to use on the index page

## Pages
### /
The index page lists out all the bingo games that have been created and links to their individual pages.

### /new
This page shows a form that allows users to create a bingo game.

### /\<bingo game id\>
This page lists out all the generated cards for an individual game.

## Tasks
  - [ ] Fix all TODOs.
  - [ ] There is a bug on the index page. Please fix.
