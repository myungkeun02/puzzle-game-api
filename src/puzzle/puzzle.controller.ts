import { Controller, Get, Param } from '@nestjs/common';
import * as path from 'path';
import * as Jimp from 'jimp';
import { PuzzleService } from './puzzle.service';

@Controller('puzzle')
export class PuzzleController {
  constructor(private readonly puzzleService: PuzzleService) {}

  @Get(':filename/:pieces')
  async getPuzzle(@Param('filename') filename: string, @Param('pieces') pieces: string) {
    const imagePath = path.join(__dirname, '../../uploads', filename);
    const image = await Jimp.read(imagePath);

    const puzzlePieces = await this.puzzleService.generatePuzzle(image, parseInt(pieces, 10));
    return { puzzlePieces };
  }
}
