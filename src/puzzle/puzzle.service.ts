import { Injectable } from '@nestjs/common';
import * as Jimp from 'jimp';

@Injectable()
export class PuzzleService {
  async generatePuzzle(image: Jimp, pieces: number) {
    const puzzlePieces = [];

    const pieceWidth = Math.floor(image.getWidth() / pieces);
    const pieceHeight = Math.floor(image.getHeight() / pieces);

    for (let i = 0; i < pieces; i++) {
      for (let j = 0; j < pieces; j++) {
        const piece = image.clone().crop(
          j * pieceWidth,
          i * pieceHeight,
          pieceWidth,
          pieceHeight,
        );

        puzzlePieces.push({
          id: i * pieces + j,
          image: piece.bitmap.data,
          position: { x: j, y: i },
        });
      }
    }

    return puzzlePieces;
  }
}
