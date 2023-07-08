import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as Jimp from 'jimp';

@Injectable()
export class UploadService {
  async uploadImage(image: Express.Multer.File) {
    const imagePath = path.join(__dirname, '../../uploads', image.filename);

    // 이미지 저장
    await Jimp.read(image.path)
      .then((jimpImg) => {
        return jimpImg
          .resize(600, 600) // 이미지 크기 조절
          .writeAsync(imagePath); // 파일로 저장
      })
      .catch((error) => {
        throw error;
      });

    // 이미지 경로 반환
    return { imagePath };
  }
}
