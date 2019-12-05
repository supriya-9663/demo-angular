import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mphasis'
})
export class MphasisPipe implements PipeTransform {

  arr1;
  arr2;
  arr3;
  str="...";

  transform(value: any): any {

    this.arr1 = value;
    this.arr2 = this.arr1.slice(0,12);
    this.arr3 = this.arr2+this.str;
    console.log(this.arr1);
    return this.arr3;
  }

}
