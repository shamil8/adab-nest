import { Test, TestingModule } from '@nestjs/testing';
import { SelectPoemsController } from './select-poems.controller';

describe('SelectPoemsController', () => {
  let controller: SelectPoemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SelectPoemsController],
    }).compile();

    controller = module.get<SelectPoemsController>(SelectPoemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
