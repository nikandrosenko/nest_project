import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/category (GET)', () => {
    return request(app.getHttpServer())
      .get('/category')
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(expect.any(Array));
      });
  });

  it('/category/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/category/1')
      .expect(200)
      .expect('');
  });

  it('/category/1 (POST)', () => {
    return request(app.getHttpServer())
      .post('/category')
      .send({ id: 1, name: 'Новая категория' })
      .expect(201)
      .expect({
        id: 1,
        name: 'Новая категория',
      });
  });

  it('/category/1 (GET)', () => {
    return request(app.getHttpServer()).get('/category/1').expect(200).expect({
      id: 1,
      name: 'Новая категория',
    });
  });

  it('/category/1 (DELETE)', () => {
    return request(app.getHttpServer()).delete('/category/1').expect(200);
  });

  it('/category/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/category/1')
      .expect(200)
      .expect('');
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
