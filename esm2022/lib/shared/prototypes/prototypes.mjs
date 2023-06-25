import { FormArray } from '@angular/forms';
import { cloneDeep } from 'lodash-es';
// declare interface String {
//   stripSlash(): string;
//   lastStripSlash(): string;
//   unStrip(): string;
// }
//#region  string */
String.prototype.stripChar = function (character = '/') {
    return (this + '').replace(character, '');
};
String.prototype.lastStripChar = function (character = '/') {
    return this[this?.length - 1] == character
        ? this.slice(0, this.length - 1)
        : this;
};
String.prototype.unChar = function (character = '/', replacement = '') {
    let te = '';
    for (let i = 0; i < this.length; i++) {
        const e = this[i];
        te += e != character ? e : '';
    }
    return te.split(character).join(replacement);
};
String.prototype.toSentenceCase = function () {
    return this.replace(/([A-Z])/g, ' $1');
};
String.prototype.replaceAllSubStr = function (character = '/', replacement = '') {
    return this.split(character).join(replacement);
};
String.prototype.addPrecedingChar = function (character, expectedLength) {
    if (this.length >= expectedLength)
        return this;
    return character.repeat(expectedLength - this.length) + this;
};
String.prototype.toCamelCase = function () {
    return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0)
            return ''; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
};
String.prototype.toTitleCase = function () {
    const result = this.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
};
//#endregion
//#region  array */
Array.prototype.merge = function () {
    let r = '';
    for (const i of this) {
        r += i;
    }
    return r;
};
Array.prototype.reverseIndex = function (index = 0) {
    return this[this?.length - (1 + index)];
};
Array.prototype.lastItem = function () {
    return this.reverseIndex();
};
Array.prototype.sort2 = function (field, isString = true, reverse = false) {
    if (reverse) {
        return isString
            ? this.filter((x) => x).sort((b, a) => sortAlphaNum(a[field], b[field]))
            : this.filter((x) => x).sort((b, a) => (+a[field] || 0) - (+b[field] || 0));
    }
    else {
        return isString
            ? this.filter((x) => x).sort((a, b) => sortAlphaNum(a[field], b[field]))
            : this.filter((x) => x).sort((a, b) => (+a[field] || 0) - (+b[field] || 0));
    }
};
var reA = /[^a-zA-Z]/g;
var reN = /[^0-9]/g;
function sortAlphaNum(a, b) {
    var aA = a?.toLowerCase()?.replace(reA, '');
    var bA = b?.toLowerCase()?.replace(reA, '');
    if (aA === bA) {
        var aN = parseInt(a?.replace(reN, ''), 10);
        var bN = parseInt(b?.replace(reN, ''), 10);
        return aN === bN ? 0 : aN > bN ? 1 : -1;
    }
    else {
        return aA > bA ? 1 : -1;
    }
}
Array.prototype.removeEmptyItems = function (expectedFields, config) {
    // debugger;
    const ignoreBooleanFields = config?.ignoreBooleanFields == true;
    const fieldsType = config?.fieldsType || 'included';
    if (!this.length)
        return this;
    let fieldList;
    if (fieldsType == 'included')
        fieldList = expectedFields?.length
            ? expectedFields
            : Object.keys(this[0]);
    else if (fieldsType == 'excluded')
        fieldList = expectedFields?.length
            ? Object.keys(this[0]).filter((x) => !expectedFields.includes(x))
            : Object.keys(this[0]);
    const removedItems = [];
    if (fieldList) {
        for (let i = 0; i < this.length; i++) {
            if (ignoreBooleanFields && i == 0) {
                fieldList = fieldList.filter((f) => typeof this[0][f] != 'boolean');
            }
            const item = this[i];
            if (fieldList.some((f) => item[f] != null))
                continue;
            removedItems.push(...this.splice(i, 1));
            i = i--;
        }
    }
    return removedItems;
};
//#endregion
//#region Function
Function.prototype.clone = function () {
    var that = this;
    var temp = function temporary() {
        return that.apply(this, arguments);
    };
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            temp[key] = this[key];
        }
    }
    return temp;
};
//#endregion
//#region FORMARRAY
FormArray.prototype.cAddItem = function (index, val) {
    const form = cloneDeep(this.cFormStructure);
    if (val) {
        form.patchValue(val);
    }
    this.insert(index, form);
    return this;
};
FormArray.prototype.cRemoveItem = function (index, deleteService, addRowFunc, emitEvent = true) {
    return new Promise((sub) => {
        const id = this.controls[index]?.value?.id;
        // debugger;
        if (id && deleteService) {
            const req = deleteService(id);
            let ps = null;
            if (req['toPromise']) {
                ps = req['toPromise']();
            }
            ps?.then((r) => {
                sub(this);
            });
        }
        if (this.controls.length == 1 && id) {
            this.removeAt(index, { emitEvent });
            if (addRowFunc)
                addRowFunc();
            else
                this.cAddItem();
        }
        else if (this.controls.length > 1)
            this.removeAt(index, { emitEvent });
        else if (this.controls.length == 1) {
            this.controls[0].reset();
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdG90eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2hlcmxoYXktaGVscGVycy9zcmMvbGliL3NoYXJlZC9wcm90b3R5cGVzL3Byb3RvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFtQixTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBdUd0Qyw2QkFBNkI7QUFDN0IsMEJBQTBCO0FBQzFCLDhCQUE4QjtBQUM5Qix1QkFBdUI7QUFDdkIsSUFBSTtBQUNKLG9CQUFvQjtBQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUF3QixTQUFTLEdBQUcsR0FBRztJQUNsRSxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsVUFBd0IsU0FBUyxHQUFHLEdBQUc7SUFDdEUsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTO1FBQ3hDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsVUFFeEIsU0FBUyxHQUFHLEdBQUcsRUFDZixXQUFXLEdBQUcsRUFBRTtJQUVoQixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsRUFBRSxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQy9CO0lBQ0QsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFDRixNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRztJQUNoQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsVUFFbEMsU0FBUyxHQUFHLEdBQUcsRUFDZixXQUFXLEdBQUcsRUFBRTtJQUVoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsVUFFbEMsU0FBaUIsRUFDakIsY0FBc0I7SUFFdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLGNBQWM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMvQyxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDL0QsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUc7SUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFLFVBQVUsS0FBSyxFQUFFLEtBQUs7UUFDbkUsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyw2Q0FBNkM7UUFDMUUsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHO0lBQzdCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQztBQUNGLFlBQVk7QUFFWixtQkFBbUI7QUFDbkIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUc7SUFDdEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1gsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDcEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNSO0lBQ0QsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUM7QUFDRixLQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxVQUE2QixLQUFLLEdBQUcsQ0FBQztJQUNuRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDO0FBQ0YsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUc7SUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBQ0YsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFFdEIsS0FBYyxFQUNkLFdBQW9CLElBQUksRUFDeEIsVUFBbUIsS0FBSztJQUV4QixJQUFJLE9BQU8sRUFBRTtRQUNYLE9BQU8sUUFBUTtZQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FDbEMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQVcsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFXLENBQUMsQ0FDckQ7WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDOUMsQ0FBQztLQUNQO1NBQU07UUFDTCxPQUFPLFFBQVE7WUFDYixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ2xDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFXLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBVyxDQUFDLENBQ3JEO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQzlDLENBQUM7S0FDUDtBQUNILENBQUMsQ0FBQztBQUNGLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQztBQUN2QixJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7QUFFcEIsU0FBUyxZQUFZLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDeEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ2IsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6QztTQUFNO1FBQ0wsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pCO0FBQ0gsQ0FBQztBQUVELEtBQUssQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsVUFFakMsY0FBNEIsRUFDNUIsTUFHQztJQUVELFlBQVk7SUFDWixNQUFNLG1CQUFtQixHQUFHLE1BQU0sRUFBRSxtQkFBbUIsSUFBSSxJQUFJLENBQUM7SUFDaEUsTUFBTSxVQUFVLEdBQUcsTUFBTSxFQUFFLFVBQVUsSUFBSSxVQUFVLENBQUM7SUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDOUIsSUFBSSxTQUFtQixDQUFDO0lBQ3hCLElBQUksVUFBVSxJQUFJLFVBQVU7UUFDMUIsU0FBUyxHQUFHLGNBQWMsRUFBRSxNQUFNO1lBQ2hDLENBQUMsQ0FBRSxjQUEyQjtZQUM5QixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QixJQUFJLFVBQVUsSUFBSSxVQUFVO1FBQy9CLFNBQVMsR0FBRyxjQUFjLEVBQUUsTUFBTTtZQUNoQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFRLENBQUMsQ0FBQztZQUN4RSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixNQUFNLFlBQVksR0FBUSxFQUFFLENBQUM7SUFDN0IsSUFBSSxTQUFTLEVBQUU7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQzthQUNyRTtZQUNELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7Z0JBQUUsU0FBUztZQUNyRCxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7U0FDVDtLQUNGO0lBQ0QsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsWUFBWTtBQUVaLGtCQUFrQjtBQUNsQixRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRztJQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7SUFDaEIsSUFBSSxJQUFJLEdBQUcsU0FBUyxTQUFTO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDO0lBQ0YsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDcEIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkI7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBQ0YsWUFBWTtBQUVaLG1CQUFtQjtBQUNuQixTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUk3QixLQUFjLEVBQ2QsR0FBc0M7SUFFdEMsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxJQUFJLEdBQUcsRUFBRTtRQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEI7SUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNGLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFVBSWhDLEtBQWEsRUFDYixhQUEyRCxFQUMzRCxVQUE2QixFQUM3QixTQUFTLEdBQUcsSUFBSTtJQUVoQixPQUFPLElBQUksT0FBTyxDQUFzQixDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUMzQyxZQUFZO1FBQ1osSUFBSSxFQUFFLElBQUksYUFBYSxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixJQUFJLEVBQUUsR0FBaUIsSUFBSSxDQUFDO1lBQzVCLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNwQixFQUFFLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7YUFDekI7WUFDRCxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDcEMsSUFBSSxVQUFVO2dCQUFFLFVBQVUsRUFBRSxDQUFDOztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2FBQ3BFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgU3RyaW5nIHtcbiAgICBzdHJpcENoYXIoY2hhcmFjdGVyPzogc3RyaW5nKTogc3RyaW5nO1xuICAgIGxhc3RTdHJpcENoYXIoY2hhcmFjdGVyPzogc3RyaW5nKTogc3RyaW5nO1xuICAgIHVuQ2hhcihjaGFyYWN0ZXI/OiBzdHJpbmcsIHJlcGxhY2VtZW50Pzogc3RyaW5nKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFBhc2NhbCBjYXNlIHRvIFNlbnRlbmNlIGNhc2VcbiAgICAgKiBAZXhhbXBsZSAnc21hbGxCb29rJy50b1NlbnRlbmNlQ2FzZSgpID0gJ1NtYWxsIEJvb2snXG4gICAgICovXG4gICAgdG9TZW50ZW5jZUNhc2UoKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGFsbCBvY2N1cnJlbmNlcyBvZiBhIHN1YnN0cmluZ1xuICAgICAqIEByZXR1cm5zIFRoZSBzdHJpbmcgYWZ0ZXIgcmVwbGFjZW1lbnRcbiAgICAgKi9cbiAgICByZXBsYWNlQWxsU3ViU3RyKGNoYXJhY3Rlcj86IHN0cmluZywgcmVwbGFjZW1lbnQ/OiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2hhcmFjdGVyIENoYXJhY3RlciB0byBhZGQgYmVmb3JlIHN0cmluZ1xuICAgICAqIEBwYXJhbSBleHBlY3RlZExlbmd0aCBFeHBlY3RlZCBsZW5ndGggb2YgdGhlIHN0cmluZyBhZnRlciBhZGRpdGlvbiBvZiB0aGUgY2hhcmFjdGVyXG4gICAgICovXG4gICAgYWRkUHJlY2VkaW5nQ2hhcihjaGFyYWN0ZXI6IHN0cmluZywgZXhwZWN0ZWRMZW5ndGg6IG51bWJlcik6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgdGV4dCBpbnRvIGNhbWVsIGNhc2VcbiAgICAgKiBAcGFyYW0gdGV4dFxuICAgICAqL1xuICAgIHRvQ2FtZWxDYXNlKCk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUbyB0aXRsZSBjYXNlXG4gICAgICogQHBhcmFtIHRleHRcbiAgICAgKi9cbiAgICB0b1RpdGxlQ2FzZSgpOiBzdHJpbmc7XG4gIH1cblxuICBpbnRlcmZhY2UgQXJyYXk8VD4ge1xuICAgIG1lcmdlKCk6IFQ7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCB0byBzZWxlY3QgZnJvbSB0aGUgZW5kLlxuICAgICAqIEBkZWZhdWx0VmFsdWUgMFxuICAgICAqIEBleGFtcGxlIFsnYScsJ2InLCdjJ10ucmV2ZXJzZUluZGV4KDEpIHJldHVybnMgJ2InXG4gICAgICogQGV4YW1wbGUgWydhJywnYicsJ2MnLCdkJywnZSddLnJldmVyc2VJbmRleCgyKSByZXR1cm5zICdjJ1xuICAgICAqL1xuICAgIHJldmVyc2VJbmRleChpbmRleD86IG51bWJlcik6IFQ7XG4gICAgbGFzdEl0ZW0oKTogVDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGZpZWxkIEZpZWxkIG5hbWUgdG8gY29tcGFyZSB3aXRoXG4gICAgICogQHBhcmFtIGlzU3RyaW5nIElzIHRoZSBkYXRhIHR5cGUgb2YgdGhlIGZpZWxkIGEgc3RyaW5nIChEZWZhdWx0IGlzIHRydWUpXG4gICAgICogQHBhcmFtIHJldmVyc2UgU2hvdWxkIGl0IGJlIGluIGEgZGVzY2VuZGluZyBvcmRlclxuICAgICAqL1xuICAgIHNvcnQyKGZpZWxkOiBrZXlvZiBULCBpc1N0cmluZz86IGJvb2xlYW4sIHJldmVyc2U/OiBib29sZWFuKTogVFtdO1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSBpdGVtcyBmcm9tIGFuIGFycmF5IHRoYXQgZG9uJ3QgaGF2ZSB2YWx1ZXMgaW4gYW55IG9mIGl0cyBmaWVsZHNcbiAgICAgKiBAcGFyYW0gZXhwZWN0ZWRGaWVsZHMgRmllbGRzIHRvIGNoZWNrIGZvciBlbXB0aW5lc3MsIHRoZSBmdW5jdGlvbiB3aWxsIHJlbW92ZSB0aGUgaXRlbXMgdGhhdCBkb24ndCBoYXZlIGFueSB2YWx1ZSBpbiBhbGwgdGhlIGZpZWxkcyBzcGVjaWZpZWRcbiAgICAgKi9cbiAgICByZW1vdmVFbXB0eUl0ZW1zKFxuICAgICAgZXhwZWN0ZWRGaWVsZHM/OiAoa2V5b2YgVClbXSxcbiAgICAgIGNvbmZpZz86IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNwZWNpZnkgd2hldGhlciB0byBjaGVjayB0aGUgdmFsdWUgaW4gYm9vbGVhbiBmaWVsZHMuXG4gICAgICAgICAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuICAgICAgICAgKi9cbiAgICAgICAgaWdub3JlQm9vbGVhbkZpZWxkcz86IGJvb2xlYW47XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTcGVjaWZ5IHdoZXRoZXIgdG8gY2hlY2sgZm9yIGVtcHRpbmVzcyBpbiB0aGUgJ2V4cGVjdGVkRmllbGRzJyBvciBjaGVjayBmb3IgZW1wdGluZXNzIGluIHRoZSBvdGhlciBmaWVsZHMgZXhjbHVkaW5nIHRoZSBmaWVsZHMgc3BlY2lmaWVkXG4gICAgICAgICAqIEBkZWZhdWx0VmFsdWUgYGluY2x1ZGVkYFxuICAgICAgICAgKi9cbiAgICAgICAgZmllbGRzVHlwZT86ICdpbmNsdWRlZCcgfCAnZXhjbHVkZWQnO1xuICAgICAgfVxuICAgICk6IFRbXTtcbiAgfVxuICBpbnRlcmZhY2UgRnVuY3Rpb24ge1xuICAgIGNsb25lOiBhbnk7XG4gIH1cbn1cbmRlY2xhcmUgbW9kdWxlICdAYW5ndWxhci9mb3Jtcycge1xuICBpbnRlcmZhY2UgRm9ybUFycmF5PFRDb250cm9sIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sPGFueT4gPSBhbnk+XG4gICAgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2w8XG4gICAgICDJtVR5cGVkT3JVbnR5cGVkPFRDb250cm9sLCDJtUZvcm1BcnJheVZhbHVlPFRDb250cm9sPiwgYW55PixcbiAgICAgIMm1VHlwZWRPclVudHlwZWQ8VENvbnRyb2wsIMm1Rm9ybUFycmF5UmF3VmFsdWU8VENvbnRyb2w+LCBhbnk+XG4gICAgPiB7XG4gICAgY0Zvcm1TdHJ1Y3R1cmU6IFRDb250cm9sO1xuICAgIGNBZGRJdGVtKGluZGV4PzogbnVtYmVyLCBkYXRhPzogVENvbnRyb2wpOiBGb3JtQXJyYXk8VENvbnRyb2w+O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGRlbGV0aW9uIG9mIHJvd3MgZnJvbSBhIEZvcm1BcnJheVxuICAgICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiB0aGUgcm93IHRvIGRlbGV0ZVxuICAgICAqIEBwYXJhbSBmYSBUaGUgRm9ybUFycmF5IHRoYXQgaG9sZHMgdGhlIHJvd3NcbiAgICAgKiBAcGFyYW0gZGVsZXRlU2VydmljZSBUaGUgZGVsZXRpb24gc2VydmljZSB0byBiZSBjYWxsZWQgKEl0IHNob3VsZCBiZSBhbiBhbm9ueW1vdXMgZnVuY3Rpb24pXG4gICAgICogQHBhcmFtIGFkZFJvd0Z1bmMgVGhlIGZ1bmN0aW9uIChhbm9ueW1vdXMpIHRoYXQgYWRkcyBhIG5ldyByb3cgdG8gdGhlIEZvcm1BcnJheVxuICAgICAqIEBwYXJhbSBlbWl0RXZlbnQgU3BlY2lmeSB3aGV0aGVyIHRvIGVtaXQgYW4gZXZlbnQgd2hlbiBtYW5pcHVsYXRpbmcgdGhlIEZvcm1BcnJheVxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgY1JlbW92ZUl0ZW0oXG4gICAgICBpbmRleDogbnVtYmVyLFxuICAgICAgZGVsZXRlU2VydmljZT86ICguLi5hcmdzOiBhbnlbXSkgPT4gUHJvbWlzZTxhbnk+IHwgT2JzZXJ2YWJsZTxhbnk+LFxuICAgICAgYWRkUm93RnVuYz86ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55LFxuICAgICAgZW1pdEV2ZW50PzogYm9vbGVhblxuICAgICk6IFByb21pc2U8Rm9ybUFycmF5PFRDb250cm9sPj47XG4gIH1cbn1cbi8vIGRlY2xhcmUgaW50ZXJmYWNlIFN0cmluZyB7XG4vLyAgIHN0cmlwU2xhc2goKTogc3RyaW5nO1xuLy8gICBsYXN0U3RyaXBTbGFzaCgpOiBzdHJpbmc7XG4vLyAgIHVuU3RyaXAoKTogc3RyaW5nO1xuLy8gfVxuLy8jcmVnaW9uICBzdHJpbmcgKi9cblN0cmluZy5wcm90b3R5cGUuc3RyaXBDaGFyID0gZnVuY3Rpb24gKHRoaXM6IHN0cmluZywgY2hhcmFjdGVyID0gJy8nKSB7XG4gIHJldHVybiAodGhpcyArICcnKS5yZXBsYWNlKGNoYXJhY3RlciwgJycpO1xufTtcblN0cmluZy5wcm90b3R5cGUubGFzdFN0cmlwQ2hhciA9IGZ1bmN0aW9uICh0aGlzOiBzdHJpbmcsIGNoYXJhY3RlciA9ICcvJykge1xuICByZXR1cm4gdGhpc1t0aGlzPy5sZW5ndGggLSAxXSA9PSBjaGFyYWN0ZXJcbiAgICA/IHRoaXMuc2xpY2UoMCwgdGhpcy5sZW5ndGggLSAxKVxuICAgIDogdGhpcztcbn07XG5TdHJpbmcucHJvdG90eXBlLnVuQ2hhciA9IGZ1bmN0aW9uIChcbiAgdGhpczogc3RyaW5nLFxuICBjaGFyYWN0ZXIgPSAnLycsXG4gIHJlcGxhY2VtZW50ID0gJydcbikge1xuICBsZXQgdGUgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZSA9IHRoaXNbaV07XG4gICAgdGUgKz0gZSAhPSBjaGFyYWN0ZXIgPyBlIDogJyc7XG4gIH1cbiAgcmV0dXJuIHRlLnNwbGl0KGNoYXJhY3Rlcikuam9pbihyZXBsYWNlbWVudCk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS50b1NlbnRlbmNlQ2FzZSA9IGZ1bmN0aW9uICh0aGlzOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHRoaXMucmVwbGFjZSgvKFtBLVpdKS9nLCAnICQxJyk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlQWxsU3ViU3RyID0gZnVuY3Rpb24gKFxuICB0aGlzOiBzdHJpbmcsXG4gIGNoYXJhY3RlciA9ICcvJyxcbiAgcmVwbGFjZW1lbnQgPSAnJ1xuKSB7XG4gIHJldHVybiB0aGlzLnNwbGl0KGNoYXJhY3Rlcikuam9pbihyZXBsYWNlbWVudCk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5hZGRQcmVjZWRpbmdDaGFyID0gZnVuY3Rpb24gKFxuICB0aGlzOiBzdHJpbmcsXG4gIGNoYXJhY3Rlcjogc3RyaW5nLFxuICBleHBlY3RlZExlbmd0aDogbnVtYmVyXG4pIHtcbiAgaWYgKHRoaXMubGVuZ3RoID49IGV4cGVjdGVkTGVuZ3RoKSByZXR1cm4gdGhpcztcbiAgcmV0dXJuIGNoYXJhY3Rlci5yZXBlYXQoZXhwZWN0ZWRMZW5ndGggLSB0aGlzLmxlbmd0aCkgKyB0aGlzO1xufTtcblN0cmluZy5wcm90b3R5cGUudG9DYW1lbENhc2UgPSBmdW5jdGlvbiAodGhpczogc3RyaW5nKSB7XG4gIHJldHVybiB0aGlzLnJlcGxhY2UoLyg/Ol5cXHd8W0EtWl18XFxiXFx3fFxccyspL2csIGZ1bmN0aW9uIChtYXRjaCwgaW5kZXgpIHtcbiAgICBpZiAoK21hdGNoID09PSAwKSByZXR1cm4gJyc7IC8vIG9yIGlmICgvXFxzKy8udGVzdChtYXRjaCkpIGZvciB3aGl0ZSBzcGFjZXNcbiAgICByZXR1cm4gaW5kZXggPT09IDAgPyBtYXRjaC50b0xvd2VyQ2FzZSgpIDogbWF0Y2gudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS50b1RpdGxlQ2FzZSA9IGZ1bmN0aW9uICh0aGlzOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZXBsYWNlKC8oW0EtWl0pL2csICcgJDEnKTtcbiAgcmV0dXJuIHJlc3VsdC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlc3VsdC5zbGljZSgxKTtcbn07XG4vLyNlbmRyZWdpb25cblxuLy8jcmVnaW9uICBhcnJheSAqL1xuQXJyYXkucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gPFQ+KHRoaXM6IEFycmF5PFQ+KSB7XG4gIGxldCByID0gJyc7XG4gIGZvciAoY29uc3QgaSBvZiB0aGlzKSB7XG4gICAgciArPSBpO1xuICB9XG4gIHJldHVybiByO1xufTtcbkFycmF5LnByb3RvdHlwZS5yZXZlcnNlSW5kZXggPSBmdW5jdGlvbiA8VD4odGhpczogQXJyYXk8VD4sIGluZGV4ID0gMCkge1xuICByZXR1cm4gdGhpc1t0aGlzPy5sZW5ndGggLSAoMSArIGluZGV4KV07XG59O1xuQXJyYXkucHJvdG90eXBlLmxhc3RJdGVtID0gZnVuY3Rpb24gPFQ+KHRoaXM6IEFycmF5PFQ+KSB7XG4gIHJldHVybiB0aGlzLnJldmVyc2VJbmRleCgpO1xufTtcbkFycmF5LnByb3RvdHlwZS5zb3J0MiA9IGZ1bmN0aW9uIDxUPihcbiAgdGhpczogQXJyYXk8VD4sXG4gIGZpZWxkOiBrZXlvZiBULFxuICBpc1N0cmluZzogYm9vbGVhbiA9IHRydWUsXG4gIHJldmVyc2U6IGJvb2xlYW4gPSBmYWxzZVxuKSB7XG4gIGlmIChyZXZlcnNlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nXG4gICAgICA/IHRoaXMuZmlsdGVyKCh4KSA9PiB4KS5zb3J0KChiLCBhKSA9PlxuICAgICAgICAgIHNvcnRBbHBoYU51bShhW2ZpZWxkXSBhcyBzdHJpbmcsIGJbZmllbGRdIGFzIHN0cmluZylcbiAgICAgICAgKVxuICAgICAgOiB0aGlzLmZpbHRlcigoeCkgPT4geCkuc29ydChcbiAgICAgICAgICAoYiwgYSkgPT4gKCthW2ZpZWxkXSB8fCAwKSAtICgrYltmaWVsZF0gfHwgMClcbiAgICAgICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaXNTdHJpbmdcbiAgICAgID8gdGhpcy5maWx0ZXIoKHgpID0+IHgpLnNvcnQoKGEsIGIpID0+XG4gICAgICAgICAgc29ydEFscGhhTnVtKGFbZmllbGRdIGFzIHN0cmluZywgYltmaWVsZF0gYXMgc3RyaW5nKVxuICAgICAgICApXG4gICAgICA6IHRoaXMuZmlsdGVyKCh4KSA9PiB4KS5zb3J0KFxuICAgICAgICAgIChhLCBiKSA9PiAoK2FbZmllbGRdIHx8IDApIC0gKCtiW2ZpZWxkXSB8fCAwKVxuICAgICAgICApO1xuICB9XG59O1xudmFyIHJlQSA9IC9bXmEtekEtWl0vZztcbnZhciByZU4gPSAvW14wLTldL2c7XG5cbmZ1bmN0aW9uIHNvcnRBbHBoYU51bShhOiBzdHJpbmcsIGI6IHN0cmluZykge1xuICB2YXIgYUEgPSBhPy50b0xvd2VyQ2FzZSgpPy5yZXBsYWNlKHJlQSwgJycpO1xuICB2YXIgYkEgPSBiPy50b0xvd2VyQ2FzZSgpPy5yZXBsYWNlKHJlQSwgJycpO1xuICBpZiAoYUEgPT09IGJBKSB7XG4gICAgdmFyIGFOID0gcGFyc2VJbnQoYT8ucmVwbGFjZShyZU4sICcnKSwgMTApO1xuICAgIHZhciBiTiA9IHBhcnNlSW50KGI/LnJlcGxhY2UocmVOLCAnJyksIDEwKTtcbiAgICByZXR1cm4gYU4gPT09IGJOID8gMCA6IGFOID4gYk4gPyAxIDogLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFBID4gYkEgPyAxIDogLTE7XG4gIH1cbn1cblxuQXJyYXkucHJvdG90eXBlLnJlbW92ZUVtcHR5SXRlbXMgPSBmdW5jdGlvbiA8VD4oXG4gIHRoaXM6IEFycmF5PFQ+LFxuICBleHBlY3RlZEZpZWxkcz86IChrZXlvZiBUKVtdLFxuICBjb25maWc/OiB7XG4gICAgaWdub3JlQm9vbGVhbkZpZWxkcz86IGJvb2xlYW47XG4gICAgZmllbGRzVHlwZT86ICdpbmNsdWRlZCcgfCAnZXhjbHVkZWQnO1xuICB9XG4pIHtcbiAgLy8gZGVidWdnZXI7XG4gIGNvbnN0IGlnbm9yZUJvb2xlYW5GaWVsZHMgPSBjb25maWc/Lmlnbm9yZUJvb2xlYW5GaWVsZHMgPT0gdHJ1ZTtcbiAgY29uc3QgZmllbGRzVHlwZSA9IGNvbmZpZz8uZmllbGRzVHlwZSB8fCAnaW5jbHVkZWQnO1xuICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpcztcbiAgbGV0IGZpZWxkTGlzdDogc3RyaW5nW107XG4gIGlmIChmaWVsZHNUeXBlID09ICdpbmNsdWRlZCcpXG4gICAgZmllbGRMaXN0ID0gZXhwZWN0ZWRGaWVsZHM/Lmxlbmd0aFxuICAgICAgPyAoZXhwZWN0ZWRGaWVsZHMgYXMgc3RyaW5nW10pXG4gICAgICA6IE9iamVjdC5rZXlzKHRoaXNbMF0pO1xuICBlbHNlIGlmIChmaWVsZHNUeXBlID09ICdleGNsdWRlZCcpXG4gICAgZmllbGRMaXN0ID0gZXhwZWN0ZWRGaWVsZHM/Lmxlbmd0aFxuICAgICAgPyBPYmplY3Qua2V5cyh0aGlzWzBdKS5maWx0ZXIoKHgpID0+ICFleHBlY3RlZEZpZWxkcy5pbmNsdWRlcyh4IGFzIGFueSkpXG4gICAgICA6IE9iamVjdC5rZXlzKHRoaXNbMF0pO1xuICBjb25zdCByZW1vdmVkSXRlbXM6IFRbXSA9IFtdO1xuICBpZiAoZmllbGRMaXN0KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaWdub3JlQm9vbGVhbkZpZWxkcyAmJiBpID09IDApIHtcbiAgICAgICAgZmllbGRMaXN0ID0gZmllbGRMaXN0LmZpbHRlcigoZikgPT4gdHlwZW9mIHRoaXNbMF1bZl0gIT0gJ2Jvb2xlYW4nKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzW2ldO1xuICAgICAgaWYgKGZpZWxkTGlzdC5zb21lKChmKSA9PiBpdGVtW2ZdICE9IG51bGwpKSBjb250aW51ZTtcbiAgICAgIHJlbW92ZWRJdGVtcy5wdXNoKC4uLnRoaXMuc3BsaWNlKGksIDEpKTtcbiAgICAgIGkgPSBpLS07XG4gICAgfVxuICB9XG4gIHJldHVybiByZW1vdmVkSXRlbXM7XG59O1xuXG4vLyNlbmRyZWdpb25cblxuLy8jcmVnaW9uIEZ1bmN0aW9uXG5GdW5jdGlvbi5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIHRlbXAgPSBmdW5jdGlvbiB0ZW1wb3JhcnkoKSB7XG4gICAgcmV0dXJuIHRoYXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgZm9yICh2YXIga2V5IGluIHRoaXMpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB0ZW1wW2tleV0gPSB0aGlzW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0ZW1wO1xufTtcbi8vI2VuZHJlZ2lvblxuXG4vLyNyZWdpb24gRk9STUFSUkFZXG5Gb3JtQXJyYXkucHJvdG90eXBlLmNBZGRJdGVtID0gZnVuY3Rpb24gPFxuICBUQ29udHJvbCBleHRlbmRzIEFic3RyYWN0Q29udHJvbDxhbnk+ID0gYW55XG4+KFxuICB0aGlzOiBGb3JtQXJyYXk8VENvbnRyb2w+LFxuICBpbmRleD86IG51bWJlcixcbiAgdmFsPzogdHlwZW9mIHRoaXMuY0Zvcm1TdHJ1Y3R1cmUudmFsdWVcbikge1xuICBjb25zdCBmb3JtID0gY2xvbmVEZWVwKHRoaXMuY0Zvcm1TdHJ1Y3R1cmUpO1xuICBpZiAodmFsKSB7XG4gICAgZm9ybS5wYXRjaFZhbHVlKHZhbCk7XG4gIH1cbiAgdGhpcy5pbnNlcnQoaW5kZXgsIGZvcm0pO1xuICByZXR1cm4gdGhpcztcbn07XG5Gb3JtQXJyYXkucHJvdG90eXBlLmNSZW1vdmVJdGVtID0gZnVuY3Rpb24gPFxuICBUQ29udHJvbCBleHRlbmRzIEFic3RyYWN0Q29udHJvbDxhbnk+ID0gYW55XG4+KFxuICB0aGlzOiBGb3JtQXJyYXk8VENvbnRyb2w+LFxuICBpbmRleDogbnVtYmVyLFxuICBkZWxldGVTZXJ2aWNlPzogKC4uLmFyZ3MpID0+IFByb21pc2U8YW55PiB8IE9ic2VydmFibGU8YW55PixcbiAgYWRkUm93RnVuYz86ICguLi5hcmdzKSA9PiBhbnksXG4gIGVtaXRFdmVudCA9IHRydWVcbikge1xuICByZXR1cm4gbmV3IFByb21pc2U8Rm9ybUFycmF5PFRDb250cm9sPj4oKHN1YikgPT4ge1xuICAgIGNvbnN0IGlkID0gdGhpcy5jb250cm9sc1tpbmRleF0/LnZhbHVlPy5pZDtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICBpZiAoaWQgJiYgZGVsZXRlU2VydmljZSkge1xuICAgICAgY29uc3QgcmVxID0gZGVsZXRlU2VydmljZShpZCk7XG4gICAgICBsZXQgcHM6IFByb21pc2U8YW55PiA9IG51bGw7XG4gICAgICBpZiAocmVxWyd0b1Byb21pc2UnXSkge1xuICAgICAgICBwcyA9IHJlcVsndG9Qcm9taXNlJ10oKTtcbiAgICAgIH1cbiAgICAgIHBzPy50aGVuKChyKSA9PiB7XG4gICAgICAgIHN1Yih0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRyb2xzLmxlbmd0aCA9PSAxICYmIGlkKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0KGluZGV4LCB7IGVtaXRFdmVudCB9KTtcbiAgICAgIGlmIChhZGRSb3dGdW5jKSBhZGRSb3dGdW5jKCk7XG4gICAgICBlbHNlIHRoaXMuY0FkZEl0ZW0oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbHMubGVuZ3RoID4gMSkgdGhpcy5yZW1vdmVBdChpbmRleCwgeyBlbWl0RXZlbnQgfSk7XG4gICAgZWxzZSBpZiAodGhpcy5jb250cm9scy5sZW5ndGggPT0gMSkge1xuICAgICAgdGhpcy5jb250cm9sc1swXS5yZXNldCgpO1xuICAgIH1cbiAgfSk7XG59O1xuLy8jZW5kcmVnaW9uXG5leHBvcnQge307XG4iXX0=