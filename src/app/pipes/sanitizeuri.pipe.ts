import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'sanitizeuri' })
export class Sanitizeuri implements PipeTransform{
    transform(value){
        return value.replace(/\s/g, '').toLowerCase();
    }
}