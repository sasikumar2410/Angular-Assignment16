import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipes'
})
export class MyPipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
