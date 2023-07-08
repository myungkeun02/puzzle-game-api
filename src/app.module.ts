import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UploadController } from './upload/upload.controller';
import { PuzzleController } from './puzzle/puzzle.controller';
import { UploadService } from './upload/upload.service';
import { PuzzleService } from './puzzle/puzzle.service';


@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [UploadController, PuzzleController],
  providers: [UploadService, PuzzleService],
})
export class AppModule {}
