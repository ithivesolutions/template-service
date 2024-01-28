import { ApiProperty } from '@nestjs/swagger';

import {
  BaseApiErrorObject,
  BaseApiResponse,
  SwaggerBaseApiResponse,
} from './baseApi-response.dto';

describe('SwaggerBaseApiResponse', () => {
  it('should return an extended class that inherits from BaseApiResponse', () => {
    const ExtendedClass = SwaggerBaseApiResponse<string>('string');

    expect(new ExtendedClass()).toBeInstanceOf(BaseApiResponse);
  });

  it('should have the correct properties decorated with @ApiProperty', () => {
    const ExtendedClass = SwaggerBaseApiResponse<number | string>(123);

    expect(ApiProperty({ type: Number })).toBeDefined();
    expect(ExtendedClass.prototype.data).toBeUndefined(); // Ensure data property is not set here

    expect(ApiProperty({ type: Number })).toBeDefined();
    expect(ExtendedClass.prototype.meta).toBeUndefined(); // Ensure meta property is not set here
  });

  it('should have a unique class name based on the provided type', () => {
    const ExtendedClass1 = SwaggerBaseApiResponse<number>('number');
    const ExtendedClass2 = SwaggerBaseApiResponse<Array<string>>('string[]');

    expect(ExtendedClass1.name).toBe('SwaggerBaseApiResponseFor number ');
    expect(ExtendedClass2.name).toBe('SwaggerBaseApiResponseFor string[] ');
  });
});

describe('BaseApiResponse', () => {
  it('should have the correct properties decorated with @ApiProperty', () => {
    const base = new BaseApiResponse<string>();

    expect(ApiProperty({ type: Object })).toBeDefined();
    expect(base.meta).toBeUndefined();

    expect(ApiProperty({ type: Object })).toBeDefined();
    expect(base.data).toBeUndefined();
  });
});

describe('BaseApiErrorObject', () => {
  it('should have the correct properties decorated with @ApiProperty', () => {
    const error = new BaseApiErrorObject();

    expect(ApiProperty({ type: Number })).toBeDefined();
    expect(error.statusCode).toBeUndefined();

    expect(ApiProperty({ type: String })).toBeDefined();
    expect(error.message).toBeUndefined();

    expect(ApiProperty({ type: String })).toBeDefined();
    expect(error.localizedMessage).toBeUndefined();

    expect(ApiProperty({ type: String })).toBeDefined();
    expect(error.errorName).toBeUndefined();

    expect(ApiProperty({ type: Object })).toBeDefined();
    expect(error.details).toBeUndefined();

    expect(ApiProperty({ type: String })).toBeDefined();
    expect(error.path).toBeUndefined();

    expect(ApiProperty({ type: String })).toBeDefined();
    expect(error.requestId).toBeUndefined();

    expect(ApiProperty({ type: String })).toBeDefined();
    expect(error.timestamp).toBeUndefined();
  });
});
