import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'sort',
    pure: false // pure is false becouse we want to reload pipe again by default pipe loads only ones's to maintain the performance of the app
})
export class SortPipe implements PipeTransform {
    transform(value: any, propeName: string) {
        return value.sort((a, b) => {
            if (a[propeName] > b[propeName]) {
                return 1;
            } else {
                return -1;
            }
        });
    }
}