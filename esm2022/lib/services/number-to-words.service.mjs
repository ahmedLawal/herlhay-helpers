import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class NumberToWordsService {
    constructor() {
        this.isInteger = (x) => {
            return x % 1 === 0;
        };
        this.numToWords = (n) => {
            let a = [
                '',
                'one',
                'two',
                'three',
                'four',
                'five',
                'six',
                'seven',
                'eight',
                'nine',
                'ten',
                'eleven',
                'twelve',
                'thirteen',
                'fourteen',
                'fifteen',
                'sixteen',
                'seventeen',
                'eighteen',
                'nineteen',
            ];
            let b = [
                '',
                '',
                'twenty',
                'thirty',
                'forty',
                'fifty',
                'sixty',
                'seventy',
                'eighty',
                'ninety',
            ];
            let g = [
                '',
                'thousand',
                'million',
                'billion',
                'trillion',
                'quadrillion',
                'quintillion',
                'sextillion',
                'septillion',
                'octillion',
                'nonillion',
            ];
            // this part is really nasty still
            // it might edit this again later to show how Monoids could fix this up
            let makeGroup = ([ones, tens, huns]) => {
                return [
                    this.num(huns) === 0 ? '' : a[huns] + ' hundred ',
                    this.num(ones) === 0 ? b[tens] : (b[tens] && b[tens] + '-') || '',
                    a[tens + ones] || a[ones],
                ].join('');
            };
            // "thousands" constructor; no real good names for this, i guess
            let thousand = (group, i) => (group === '' ? group : `${group} ${g[i]}`);
            // execute !
            if (typeof n === 'number')
                return this.numToWords(String(n));
            if (n === '0')
                return 'zero';
            return this.comp(this.chunk(3))(this.reverse)(this.arr(n))
                .map(makeGroup)
                .map(thousand)
                .filter(this.comp(this.not)(this.isEmpty))
                .reverse()
                .join(' ');
        };
        this.arr = (x) => Array.from(x);
        this.num = (x) => Number(x) || 0;
        const str = (x) => String(x);
        this.isEmpty = (xs) => xs.length === 0;
        const take = (n) => (xs) => xs.slice(0, n);
        const drop = (n) => (xs) => xs.slice(n);
        this.reverse = (xs) => xs.slice(0).reverse();
        this.comp = (f) => (g) => (x) => f(g(x));
        this.not = (x) => !x;
        this.chunk = (n) => (xs) => this.isEmpty(xs) ? [] : [take(n)(xs), ...this.chunk(n)(drop(n)(xs))];
    }
    transform(value) {
        if (value && this.isInteger(value))
            return this.numToWords(value);
        return value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NumberToWordsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NumberToWordsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NumberToWordsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLXdvcmRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zZXJ2aWNlcy9udW1iZXItdG8td29yZHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sb0JBQW9CO0lBUS9CO1FBbUJBLGNBQVMsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDO1FBRUYsZUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUc7Z0JBQ04sRUFBRTtnQkFDRixLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsT0FBTztnQkFDUCxNQUFNO2dCQUNOLE1BQU07Z0JBQ04sS0FBSztnQkFDTCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsTUFBTTtnQkFDTixLQUFLO2dCQUNMLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsU0FBUztnQkFDVCxTQUFTO2dCQUNULFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixVQUFVO2FBQ1gsQ0FBQztZQUNGLElBQUksQ0FBQyxHQUFHO2dCQUNOLEVBQUU7Z0JBQ0YsRUFBRTtnQkFDRixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsT0FBTztnQkFDUCxPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsU0FBUztnQkFDVCxRQUFRO2dCQUNSLFFBQVE7YUFDVCxDQUFDO1lBQ0YsSUFBSSxDQUFDLEdBQUc7Z0JBQ04sRUFBRTtnQkFDRixVQUFVO2dCQUNWLFNBQVM7Z0JBQ1QsU0FBUztnQkFDVCxVQUFVO2dCQUNWLGFBQWE7Z0JBQ2IsYUFBYTtnQkFDYixZQUFZO2dCQUNaLFlBQVk7Z0JBQ1os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QUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDRCxTQUFTLENBQUMsS0FBVTtRQUNsQixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OEdBekJVLG9CQUFvQjtrSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07OzJGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJUb1dvcmRzU2VydmljZSB7IFxuICBudW06ICh4OiBhbnkpID0+IG51bWJlcjtcbiAgaXNFbXB0eTogKHhzOiBhbnkpID0+IGJvb2xlYW47XG4gIG5vdDogKHg6IGFueSkgPT4gYm9vbGVhbjtcbiAgY2h1bms6IChuOiBhbnkpID0+ICh4czogYW55KSA9PiBhbnlbXTtcbiAgY29tcDogKGY6IGFueSkgPT4gKGc6IGFueSkgPT4gKHg6IGFueSkgPT4gYW55O1xuICByZXZlcnNlOiAoeHM6IGFueSkgPT4gYW55O1xuICBhcnI6ICh4OiBhbnkpID0+IHVua25vd25bXTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcnIgPSAoeCkgPT4gQXJyYXkuZnJvbSh4KTtcbiAgICB0aGlzLiBudW0gPSAoeCkgPT4gTnVtYmVyKHgpIHx8IDA7XG4gICAgY29uc3Qgc3RyID0gKHgpID0+IFN0cmluZyh4KTtcbiAgICB0aGlzLmlzRW1wdHkgPSAoeHMpID0+IHhzLmxlbmd0aCA9PT0gMDtcbiAgICBjb25zdCB0YWtlID0gKG4pID0+ICh4cykgPT4geHMuc2xpY2UoMCwgbik7XG4gICAgY29uc3QgZHJvcCA9IChuKSA9PiAoeHMpID0+IHhzLnNsaWNlKG4pO1xuICAgIHRoaXMucmV2ZXJzZSA9ICh4cykgPT4geHMuc2xpY2UoMCkucmV2ZXJzZSgpO1xuICAgIHRoaXMuY29tcCA9IChmKSA9PiAoZykgPT4gKHgpID0+IGYoZyh4KSk7XG4gICAgdGhpcy5ub3QgPSAoeCkgPT4gIXg7XG4gICAgdGhpcy5jaHVuayA9IChuKSA9PiAoeHMpID0+XG4gICAgICB0aGlzLmlzRW1wdHkoeHMpID8gW10gOiBbdGFrZShuKSh4cyksIC4uLnRoaXMuY2h1bmsobikoZHJvcChuKSh4cykpXTtcbiAgfVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlICYmIHRoaXMuaXNJbnRlZ2VyKHZhbHVlKSkgcmV0dXJuIHRoaXMuIG51bVRvV29yZHModmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaXNJbnRlZ2VyID0gKHg6IGFueSkgPT4ge1xuICAgIHJldHVybiB4ICUgMSA9PT0gMDtcbiAgfTtcblxuICBudW1Ub1dvcmRzID0gKG4pID0+IHtcbiAgICBsZXQgYSA9IFtcbiAgICAgICcnLFxuICAgICAgJ29uZScsXG4gICAgICAndHdvJyxcbiAgICAgICd0aHJlZScsXG4gICAgICAnZm91cicsXG4gICAgICAnZml2ZScsXG4gICAgICAnc2l4JyxcbiAgICAgICdzZXZlbicsXG4gICAgICAnZWlnaHQnLFxuICAgICAgJ25pbmUnLFxuICAgICAgJ3RlbicsXG4gICAgICAnZWxldmVuJyxcbiAgICAgICd0d2VsdmUnLFxuICAgICAgJ3RoaXJ0ZWVuJyxcbiAgICAgICdmb3VydGVlbicsXG4gICAgICAnZmlmdGVlbicsXG4gICAgICAnc2l4dGVlbicsXG4gICAgICAnc2V2ZW50ZWVuJyxcbiAgICAgICdlaWdodGVlbicsXG4gICAgICAnbmluZXRlZW4nLFxuICAgIF07XG4gICAgbGV0IGIgPSBbXG4gICAgICAnJyxcbiAgICAgICcnLFxuICAgICAgJ3R3ZW50eScsXG4gICAgICAndGhpcnR5JyxcbiAgICAgICdmb3J0eScsXG4gICAgICAnZmlmdHknLFxuICAgICAgJ3NpeHR5JyxcbiAgICAgICdzZXZlbnR5JyxcbiAgICAgICdlaWdodHknLFxuICAgICAgJ25pbmV0eScsXG4gICAgXTtcbiAgICBsZXQgZyA9IFtcbiAgICAgICcnLFxuICAgICAgJ3Rob3VzYW5kJyxcbiAgICAgICdtaWxsaW9uJyxcbiAgICAgICdiaWxsaW9uJyxcbiAgICAgICd0cmlsbGlvbicsXG4gICAgICAncXVhZHJpbGxpb24nLFxuICAgICAgJ3F1aW50aWxsaW9uJyxcbiAgICAgICdzZXh0aWxsaW9uJyxcbiAgICAgICdzZXB0aWxsaW9uJyxcbiAgICAgICdvY3RpbGxpb24nLFxuICAgICAgJ25vbmlsbGlvbicsXG4gICAgXTtcbiAgICAvLyB0aGlzIHBhcnQgaXMgcmVhbGx5IG5hc3R5IHN0aWxsXG4gICAgLy8gaXQgbWlnaHQgZWRpdCB0aGlzIGFnYWluIGxhdGVyIHRvIHNob3cgaG93IE1vbm9pZHMgY291bGQgZml4IHRoaXMgdXBcbiAgICBsZXQgbWFrZUdyb3VwID0gKFtvbmVzLCB0ZW5zLCBodW5zXSkgPT4ge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdGhpcy5udW0oaHVucykgPT09IDAgPyAnJyA6IGFbaHVuc10gKyAnIGh1bmRyZWQgJyxcbiAgICAgICAgdGhpcy5udW0ob25lcykgPT09IDAgPyBiW3RlbnNdIDogKGJbdGVuc10gJiYgYlt0ZW5zXSArICctJykgfHwgJycsXG4gICAgICAgIGFbdGVucyArIG9uZXNdIHx8IGFbb25lc10sXG4gICAgICBdLmpvaW4oJycpO1xuICAgIH07XG4gICAgLy8gXCJ0aG91c2FuZHNcIiBjb25zdHJ1Y3Rvcjsgbm8gcmVhbCBnb29kIG5hbWVzIGZvciB0aGlzLCBpIGd1ZXNzXG4gICAgbGV0IHRob3VzYW5kID0gKGdyb3VwLCBpKSA9PiAoZ3JvdXAgPT09ICcnID8gZ3JvdXAgOiBgJHtncm91cH0gJHtnW2ldfWApO1xuICAgIC8vIGV4ZWN1dGUgIVxuICAgIGlmICh0eXBlb2YgbiA9PT0gJ251bWJlcicpIHJldHVybiB0aGlzLm51bVRvV29yZHMoU3RyaW5nKG4pKTtcbiAgICBpZiAobiA9PT0gJzAnKSByZXR1cm4gJ3plcm8nO1xuICAgIHJldHVybiB0aGlzLmNvbXAodGhpcy5jaHVuaygzKSkodGhpcy5yZXZlcnNlKSh0aGlzLmFycihuKSlcbiAgICAgIC5tYXAobWFrZUdyb3VwKVxuICAgICAgLm1hcCh0aG91c2FuZClcbiAgICAgIC5maWx0ZXIodGhpcy5jb21wKHRoaXMubm90KSh0aGlzLmlzRW1wdHkpKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfTtcbn1cbiJdfQ==