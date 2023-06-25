import { configForms } from '../classes/form.class';
export class FCInput {
    constructor(label, name, formControl, type, required, placeholder, vms, prefix, suffix) {
        this.name = name || 'fn' + Math.round(Math.random() * 100000);
        this.label = label;
        this.formControl = formControl || configForms.default();
        this.type = type || 'text';
        this.required = required || false;
        this.vms = vms || [];
        this.placeholder = placeholder;
        this.prefix = prefix;
        this.suffix = suffix;
    }
}
export class CInput {
    get isEmpty() {
        return this.value == null || this.value == undefined;
    }
    constructor(label, name, value, type, required, placeholder, vms, prefix, suffix) {
        this.name = name;
        this.id = 'inputID' + Math.round(Math.random() * 10000000);
        this.label = label;
        this.value = value;
        this.type = type || 'text';
        this.required = required || false;
        this.placeholder = placeholder;
    }
}
export class KVP {
    constructor(key, value, cls) {
        this.key = key;
        this.value = value;
        this.cls = cls;
    }
}
export class FKVP extends KVP {
    constructor(key, label, editable, value, inputType, hint, action, formatter, cls, route) {
        super(key, value, cls);
        this.inputType = inputType;
        this.label = label;
        this.hint = hint;
        this.editable = editable;
        this.action = action;
        this.formatter = formatter;
        this.route = route;
    }
}
export class Lbl {
    constructor(key, value, hint, cls) {
        this.key = key;
        this.value = value || '-';
        this.hint = hint;
        this.cls = cls;
    }
}
export class Btn {
    constructor(key, action, type, icon, cls, help, showHelpIcon, loading, disabled) {
        this.key = key;
        this.action = action;
        this.type = type;
        this.icon = icon;
        this.cls = cls;
        this.help = help;
        this.showHelpIcon = showHelpIcon;
        this.loading = loading;
        this.disabled = disabled;
    }
}
export class BtnLg {
    constructor(key, value, action, cls, extra) {
        this.key = key;
        this.value = value || '-';
        this.action = action;
        this.cls = cls;
        this.extra = extra;
    }
}
export var EMenuLocation;
(function (EMenuLocation) {
    EMenuLocation["viewPage1"] = "viewPage";
})(EMenuLocation || (EMenuLocation = {}));
export var Day;
(function (Day) {
    Day["sunday"] = "Sunday";
    Day["monday"] = "Monday";
    Day["tuesday"] = "Tuesday";
    Day["wednesday"] = "Wednesday";
    Day["thursday"] = "Thursday";
    Day["friday"] = "Friday";
    Day["saturday"] = "Saturday";
})(Day || (Day = {}));
export var EPageType;
(function (EPageType) {
    EPageType["clonePage"] = "Clone";
    EPageType["editPage"] = "Edit";
    EPageType["viewPage"] = "View";
    EPageType["createPage"] = "Create";
    EPageType["indexPage"] = "Index";
})(EPageType || (EPageType = {}));
export var ELanguage;
(function (ELanguage) {
    ELanguage["EN"] = "EN";
    ELanguage["FR"] = "FR";
})(ELanguage || (ELanguage = {}));
export var EValidationType;
(function (EValidationType) {
    EValidationType["email"] = "email";
    EValidationType["entityNumber"] = "entityNumber";
    EValidationType["maxlength"] = "maxlength";
    EValidationType["minlength"] = "minlength";
    EValidationType["mobile"] = "mobile";
    EValidationType["name"] = "name";
    EValidationType["normal"] = "normal";
    EValidationType["passwordNotMatch"] = "passwordNotMatch";
    EValidationType["pattern"] = "pattern";
    EValidationType["required"] = "required";
    EValidationType["unique"] = "unique";
    EValidationType["custom"] = "custom";
})(EValidationType || (EValidationType = {}));
export var EMenuType;
(function (EMenuType) {
    EMenuType["horizontal"] = "H";
    EMenuType["vertical"] = "V";
})(EMenuType || (EMenuType = {}));
export class Constant {
}
export var EPeriod;
(function (EPeriod) {
    EPeriod["daily"] = "daily";
    EPeriod["weekly"] = "weekly";
    EPeriod["monthly"] = "monthly";
    EPeriod["annually"] = "annually";
    EPeriod["yearly"] = "yearly";
    EPeriod["today"] = "today";
    EPeriod["week"] = "week";
    EPeriod["month"] = "month";
    EPeriod["year"] = "year";
    EPeriod["annual"] = "annual";
})(EPeriod || (EPeriod = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvbW9kZWxzL2luZGV4Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQWlEcEQsTUFBTSxPQUFPLE9BQU87SUFZbEIsWUFDRSxLQUFhLEVBQ2IsSUFBYSxFQUNiLFdBQTZCLEVBQzdCLElBQWdCLEVBQ2hCLFFBQWtCLEVBQ2xCLFdBQW9CLEVBQ3BCLEdBQTBCLEVBQzFCLE1BQWUsRUFDZixNQUFlO1FBRWYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8sTUFBTTtJQWFqQixJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUks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LGtDQUFlLENBQUE7SUFDZixnREFBNkIsQ0FBQTtJQUM3QiwwQ0FBdUIsQ0FBQTtJQUN2QiwwQ0FBdUIsQ0FBQTtJQUN2QixvQ0FBaUIsQ0FBQTtJQUNqQixnQ0FBYSxDQUFBO0lBQ2Isb0NBQWlCLENBQUE7SUFDakIsd0RBQXFDLENBQUE7SUFDckMsc0NBQW1CLENBQUE7SUFDbkIsd0NBQXFCLENBQUE7SUFDckIsb0NBQWlCLENBQUE7SUFDakIsb0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQWJXLGVBQWUsS0FBZixlQUFlLFFBYTFCO0FBc0dELE1BQU0sQ0FBTixJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDbkIsNkJBQWdCLENBQUE7SUFDaEIsMkJBQWMsQ0FBQTtBQUNoQixDQUFDLEVBSFcsU0FBUyxLQUFULFNBQVMsUUFHcEI7QUFzQkQsTUFBTSxPQUFPLFFBQVE7Q0FFcEI7QUFnQkQsTUFBTSxDQUFOLElBQVksT0FZWDtBQVpELFdBQVksT0FBTztJQUNqQiwwQkFBZSxDQUFBO0lBQ2YsNEJBQWlCLENBQUE7SUFDakIsOEJBQW1CLENBQUE7SUFDbkIsZ0NBQXFCLENBQUE7SUFDckIsNEJBQWlCLENBQUE7SUFFakIsMEJBQWUsQ0FBQTtJQUNmLHdCQUFhLENBQUE7SUFDYiwwQkFBZSxDQUFBO0lBQ2Ysd0JBQWEsQ0FBQTtJQUNiLDRCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFaVyxPQUFPLEtBQVAsT0FBTyxRQVlsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uZmlnRm9ybXMgfSBmcm9tICcuLi9jbGFzc2VzL2Zvcm0uY2xhc3MnO1xuaW1wb3J0IHsgU1ZHSWNvblR5cGUgfSBmcm9tICcuLi9jb21wb25lbnRzL3N2Zy1pY29uL3N2Zy1pY29uLm1vZGVsJztcblxuLy8jcmVnaW9uIGlucHV0c1xuaW50ZXJmYWNlIElJbnB1dEJhc2Uge1xuICBuYW1lPzogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZT86IGFueTtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGNscz86IHN0cmluZztcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICB0eXBlPzogSW5wdXRUeXBlO1xufVxuaW50ZXJmYWNlIElGQ0lucHV0IGV4dGVuZHMgSUlucHV0QmFzZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJlZml4Pzogc3RyaW5nO1xuICBzdWZmaXg/OiBzdHJpbmc7XG4gIGZvcm1Db250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgdm1zPzogSVZhbGlkYXRpb25NZXNzYWdlW107XG59XG5cbmV4cG9ydCB0eXBlIElucHV0VHlwZSA9XG4gIHwgJ2F1dG9jb21wbGV0ZSdcbiAgfCAnYnV0dG9uJ1xuICB8ICdidXR0b25Ub2dnbGUnXG4gIHwgJ2NoZWNrYm94J1xuICB8ICdjaGVja2VkYm94J1xuICB8ICdkYXRlJ1xuICB8ICdkYXRlLXJhbmdlJ1xuICB8ICdkYXRldGltZS1sb2NhbCdcbiAgfCAnZGhtJ1xuICB8ICdlbWFpbCdcbiAgfCAnZmlsZSdcbiAgfCAnZm9ybSdcbiAgfCAnZm9ybWdyb3VwJ1xuICB8ICdmaWxlQnV0dG9uJ1xuICB8ICdudW1iZXInXG4gIHwgJ3Bhc3N3b3JkJ1xuICB8ICdwcm9ncmVzcydcbiAgfCAncGVyY2VudGFnZSdcbiAgfCAncmFkaW8nXG4gIHwgJ3NlbGVjdCdcbiAgfCAndGVsJ1xuICB8ICd0ZXh0J1xuICB8ICd0ZXh0YXJlYSdcbiAgfCAndGltZSdcbiAgfCAndG9nZ2xlJ1xuICB8ICd2aWV3ZXInO1xuZXhwb3J0IGNsYXNzIEZDSW5wdXQgaW1wbGVtZW50cyBJRkNJbnB1dCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGNscz86IHN0cmluZztcbiAgcHJlZml4Pzogc3RyaW5nO1xuICBzdWZmaXg/OiBzdHJpbmc7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgdHlwZT86IElucHV0VHlwZTtcbiAgZm9ybUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcbiAgdm1zPzogSVZhbGlkYXRpb25NZXNzYWdlW107XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgY29uc3RydWN0b3IoXG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBuYW1lPzogc3RyaW5nLFxuICAgIGZvcm1Db250cm9sPzogQWJzdHJhY3RDb250cm9sLFxuICAgIHR5cGU/OiBJbnB1dFR5cGUsXG4gICAgcmVxdWlyZWQ/OiBib29sZWFuLFxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxuICAgIHZtcz86IElWYWxpZGF0aW9uTWVzc2FnZVtdLFxuICAgIHByZWZpeD86IHN0cmluZyxcbiAgICBzdWZmaXg/OiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZSB8fCAnZm4nICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5mb3JtQ29udHJvbCA9IGZvcm1Db250cm9sIHx8IGNvbmZpZ0Zvcm1zLmRlZmF1bHQoKTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlIHx8ICd0ZXh0JztcbiAgICB0aGlzLnJlcXVpcmVkID0gcmVxdWlyZWQgfHwgZmFsc2U7XG4gICAgdGhpcy52bXMgPSB2bXMgfHwgW107XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIHRoaXMucHJlZml4ID0gcHJlZml4O1xuICAgIHRoaXMuc3VmZml4ID0gc3VmZml4O1xuICB9XG59XG5leHBvcnQgY2xhc3MgQ0lucHV0IGltcGxlbWVudHMgSUlucHV0QmFzZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGNscz86IHN0cmluZztcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICB0eXBlPzogSW5wdXRUeXBlO1xuICB2YWx1ZTogc3RyaW5nO1xuICBoaWRlOiBib29sZWFuO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHk6IGJvb2xlYW47XG4gIGlkOiBzdHJpbmc7XG4gIGhhc0Vycm9yOiBib29sZWFuO1xuICBnZXQgaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA9PSBudWxsIHx8IHRoaXMudmFsdWUgPT0gdW5kZWZpbmVkO1xuICB9XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIG5hbWU/OiBzdHJpbmcsXG4gICAgdmFsdWU/OiBhbnksXG4gICAgdHlwZT86IElucHV0VHlwZSxcbiAgICByZXF1aXJlZD86IGJvb2xlYW4sXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXG4gICAgdm1zPzogSVZhbGlkYXRpb25NZXNzYWdlW10sXG4gICAgcHJlZml4Pzogc3RyaW5nLFxuICAgIHN1ZmZpeD86IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaWQgPSAnaW5wdXRJRCcgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMCk7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlIHx8ICd0ZXh0JztcbiAgICB0aGlzLnJlcXVpcmVkID0gcmVxdWlyZWQgfHwgZmFsc2U7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICB9XG59XG4vLyNlbmRyZWdpb25cblxuLy8jcmVnaW9uIGtleSB2YWx1ZSBwYWlyXG5leHBvcnQgaW50ZXJmYWNlIElLVlAge1xuICByZWFkb25seSBrZXk/OiBhbnk7XG4gIHZhbHVlPzogc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcjtcbiAgY2xzPzogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIEtWUCBpbXBsZW1lbnRzIElLVlAge1xuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgdmFsdWU/OiBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyO1xuICBjbHM/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCB2YWx1ZT86IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIsIGNscz86IHN0cmluZykge1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNscyA9IGNscztcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEZLVlAgZXh0ZW5kcyBLVlAge1xuICBsYWJlbDogc3RyaW5nO1xuICBlZGl0YWJsZT86IGJvb2xlYW47XG4gIGVkaXRpbmc/OiBib29sZWFuO1xuICByb3V0ZT86IHN0cmluZztcbiAgcm91dGVGdW5jPzogKGl0ZW0pID0+IFByb21pc2U8c3RyaW5nPiB8IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgaGludD86IHN0cmluZztcbiAgYWN0aW9uPzogYW55O1xuICBpc1Bob25lPzogYm9vbGVhbjtcbiAgaXNFbWFpbD86IGJvb2xlYW47XG4gIGZvcm1hdHRlcj86ICh2YWw6IGFueSkgPT4gc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+IHwgT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIGVkaXRhYmxlPzogYm9vbGVhbixcbiAgICB2YWx1ZT86IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIsXG4gICAgcHVibGljIGlucHV0VHlwZT86IElucHV0VHlwZSxcbiAgICBoaW50Pzogc3RyaW5nLFxuICAgIGFjdGlvbj86IGFueSxcbiAgICBmb3JtYXR0ZXI/OiAodmFsOiBhbnkpID0+IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPixcbiAgICBjbHM/OiBzdHJpbmcsXG4gICAgcm91dGU/OiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIoa2V5LCB2YWx1ZSwgY2xzKTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5oaW50ID0gaGludDtcbiAgICB0aGlzLmVkaXRhYmxlID0gZWRpdGFibGU7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICB9XG59XG4vLyNlbmRyZWdpb25cblxuLy8jcmVnaW9uIGxibFxuZXhwb3J0IGludGVyZmFjZSBJTGJsIGV4dGVuZHMgSUtWUCB7XG4gIGhpbnQ/OiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgTGJsIGltcGxlbWVudHMgSUxibCB7XG4gIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcjtcbiAgaGludD86IHN0cmluZztcbiAgY2xzPzogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBrZXk6IHN0cmluZyxcbiAgICB2YWx1ZT86IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIsXG4gICAgaGludD86IHN0cmluZyxcbiAgICBjbHM/OiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8ICctJztcbiAgICB0aGlzLmhpbnQgPSBoaW50O1xuICAgIHRoaXMuY2xzID0gY2xzO1xuICB9XG59XG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBidG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJ0biBleHRlbmRzIElLVlAge1xuICBhY3Rpb24/OiAoLi4uYXJnKSA9PiB2b2lkO1xuICBncm91cD86IEJ0bkdyb3VwO1xuICBoZWxwPzogc3RyaW5nO1xuICBpY29uPzogU1ZHSWNvblR5cGU7XG4gIGljb25CdG4/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGxvYWRpbmc/OiBib29sZWFuO1xuICBzaG93SGVscEljb24/OiBib29sZWFuO1xuICBsYWJlbD86IHN0cmluZztcbiAgdHlwZT86IEJ0blR5cGU7XG4gIGV4dHJhPzogYW55O1xufVxuZXhwb3J0IGNsYXNzIEJ0biBpbXBsZW1lbnRzIElCdG4ge1xuICBjbHM/OiBzdHJpbmc7XG4gIGdyb3VwPzogQnRuR3JvdXA7XG4gIGhlbHA/OiBzdHJpbmc7XG4gIGljb24/OiBTVkdJY29uVHlwZTtcbiAgaWNvbkJ0bj86IGJvb2xlYW47XG4gIHJlYWRvbmx5IGFjdGlvbj86IChkYXRhPywgLi4uYXJncykgPT4gdm9pZDtcbiAgcmVhZG9ubHkga2V5Pzogc3RyaW5nO1xuICBzaG93SGVscEljb24/OiBib29sZWFuO1xuICBsYWJlbD86IHN0cmluZztcbiAgcm91dGU/OiBzdHJpbmc7XG4gIHR5cGU/OiBCdG5UeXBlO1xuICBleHRyYT86IGFueTtcbiAgbG9hZGluZz86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBhY3Rpb24/OiAoZGF0YT8sIC4uLmFyZ3MpID0+IGFueSxcbiAgICB0eXBlPzogQnRuVHlwZSxcbiAgICBpY29uPzogU1ZHSWNvblR5cGUsXG4gICAgY2xzPzogc3RyaW5nLFxuICAgIGhlbHA/OiBzdHJpbmcsXG4gICAgc2hvd0hlbHBJY29uPzogYm9vbGVhbixcbiAgICBsb2FkaW5nPzogYm9vbGVhbixcbiAgICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgKSB7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmljb24gPSBpY29uO1xuICAgIHRoaXMuY2xzID0gY2xzO1xuICAgIHRoaXMuaGVscCA9IGhlbHA7XG4gICAgdGhpcy5zaG93SGVscEljb24gPSBzaG93SGVscEljb247XG4gICAgdGhpcy5sb2FkaW5nID0gbG9hZGluZztcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBCdG5MZyBpbXBsZW1lbnRzIElCdG4ge1xuICByZWFkb25seSBrZXk6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXI7XG4gIHJlYWRvbmx5IGFjdGlvbj86ICgpID0+IHZvaWQ7XG4gIGNscz86IHN0cmluZztcbiAgZXh0cmE/OiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHZhbHVlPzogc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcixcbiAgICBhY3Rpb24/OiBhbnksXG4gICAgY2xzPzogc3RyaW5nLFxuICAgIGV4dHJhP1xuICApIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgJy0nO1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIHRoaXMuY2xzID0gY2xzO1xuICAgIHRoaXMuZXh0cmEgPSBleHRyYTtcbiAgfVxufVxuZXhwb3J0IHR5cGUgQnRuVHlwZSA9XG4gIHwgJ2NsZWFyJ1xuICB8ICdjbGVhci1wbSdcbiAgfCAnY2xvc2UnXG4gIHwgJ2Rhbmdlci1vdXRsaW5lJ1xuICB8ICdkYW5nZXInXG4gIHwgJ2Rhcmstb3V0bGluZSdcbiAgfCAnZGFyaydcbiAgfCAnbGlnaHQnXG4gIHwgJ291dGxpbmUtbm0nXG4gIHwgJ291dGxpbmUnXG4gIHwgJ291dGxpbmUtbGlnaHQnXG4gIHwgJ3ByaW1hcnknXG4gIHwgJ3NlY29uZGFyeSdcbiAgfCAnc3VjY2Vzcyc7XG5leHBvcnQgdHlwZSBCdG5Hcm91cCA9XG4gIHwgJ2FkZCdcbiAgfCAnY2xvbmUnXG4gIHwgJ2Nsb3NlJ1xuICB8ICdjcmVhdGUnXG4gIHwgJ2RlbGV0ZSdcbiAgfCAnZG93bmxvYWQnXG4gIHwgJ2VkaXQnXG4gIHwgJ2xpbmsnXG4gIHwgJ3NlYXJjaCdcbiAgfCAnc2hvdydcbiAgfCAnc3VibWl0J1xuICB8ICd1cGxvYWQnO1xuZXhwb3J0IHR5cGUgSWNvblR5cGUgPVxuICB8ICdhY2Nlc3MnXG4gIHwgJ2FkZCdcbiAgfCAnYWRqdXN0J1xuICB8ICdjYWxlbmRhcidcbiAgfCAnY2FzaCdcbiAgfCAnY2hlY2tlZCdcbiAgfCAnY2hlY2tsaXN0J1xuICB8ICdjbG9uZSdcbiAgfCAnY2xvc2UnXG4gIHwgJ2NvZ3MnXG4gIHwgJ2RlbGV0ZSdcbiAgfCAnZG93bmxvYWQnXG4gIHwgJ2VkaXQnXG4gIHwgJ2V4cG9ydCdcbiAgfCAnZmlsZSdcbiAgfCAnZmlsdGVyJ1xuICB8ICdnZW5lcmF0ZSdcbiAgfCAnZ3VhcmQnXG4gIHwgJ2hpc3RvcnknXG4gIHwgJ2hvbWUnXG4gIHwgJ2ltcG9ydCdcbiAgfCAnaW5mbydcbiAgfCAnbGluaydcbiAgfCAnbG9jaydcbiAgfCAnbmV4dCdcbiAgfCAncGVuJ1xuICB8ICdwb3N0J1xuICB8ICdwcmV2aW91cydcbiAgfCAncmVuZXcnXG4gIHwgJ3NhdmUnXG4gIHwgJ3NlYXJjaCdcbiAgfCAnc2hvdydcbiAgfCAnc25vb3plJ1xuICB8ICd1bmxvY2snXG4gIHwgJ3VwbG9hZCdcbiAgfCAndmlldydcbiAgfCAndXNlcnMnXG4gIHwgJ3JlY3ljbGUnXG4gIHwgJ3RydWNrJ1xuICB8ICd0YWcnXG4gIHwgJ3JlY2VpcHQnXG4gIHwgJ2JhbmsnXG4gIHwgJ2Fycm93aCc7XG4vLyNlbmRyZWdpb25cblxuZXhwb3J0IGludGVyZmFjZSBJQ29kZVRpdGxlIHtcbiAgY29kZTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb2RlRGVzY3JpcHRpb24ge1xuICBjb2RlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1rdERlc2NyaXB0aW9uIHtcbiAgbWt0RXZlbnRDb2RlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvZGUge1xuICBjb2RlOiBzdHJpbmc7XG59XG5leHBvcnQgZW51bSBFTWVudUxvY2F0aW9uIHtcbiAgdmlld1BhZ2UxID0gJ3ZpZXdQYWdlJyxcbn1cbmV4cG9ydCBlbnVtIERheSB7XG4gIHN1bmRheSA9ICdTdW5kYXknLFxuICBtb25kYXkgPSAnTW9uZGF5JyxcbiAgdHVlc2RheSA9ICdUdWVzZGF5JyxcbiAgd2VkbmVzZGF5ID0gJ1dlZG5lc2RheScsXG4gIHRodXJzZGF5ID0gJ1RodXJzZGF5JyxcbiAgZnJpZGF5ID0gJ0ZyaWRheScsXG4gIHNhdHVyZGF5ID0gJ1NhdHVyZGF5Jyxcbn1cbmV4cG9ydCBlbnVtIEVQYWdlVHlwZSB7XG4gIGNsb25lUGFnZSA9ICdDbG9uZScsXG4gIGVkaXRQYWdlID0gJ0VkaXQnLFxuICB2aWV3UGFnZSA9ICdWaWV3JyxcbiAgY3JlYXRlUGFnZSA9ICdDcmVhdGUnLFxuICBpbmRleFBhZ2UgPSAnSW5kZXgnLFxufVxuZXhwb3J0IGVudW0gRUxhbmd1YWdlIHtcbiAgRU4gPSAnRU4nLFxuICBGUiA9ICdGUicsXG59XG5cbmV4cG9ydCBlbnVtIEVWYWxpZGF0aW9uVHlwZSB7XG4gIGVtYWlsID0gJ2VtYWlsJyxcbiAgZW50aXR5TnVtYmVyID0gJ2VudGl0eU51bWJlcicsXG4gIG1heGxlbmd0aCA9ICdtYXhsZW5ndGgnLFxuICBtaW5sZW5ndGggPSAnbWlubGVuZ3RoJyxcbiAgbW9iaWxlID0gJ21vYmlsZScsXG4gIG5hbWUgPSAnbmFtZScsXG4gIG5vcm1hbCA9ICdub3JtYWwnLFxuICBwYXNzd29yZE5vdE1hdGNoID0gJ3Bhc3N3b3JkTm90TWF0Y2gnLFxuICBwYXR0ZXJuID0gJ3BhdHRlcm4nLFxuICByZXF1aXJlZCA9ICdyZXF1aXJlZCcsXG4gIHVuaXF1ZSA9ICd1bmlxdWUnLFxuICBjdXN0b20gPSAnY3VzdG9tJyxcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkYXRpb25NZXNzYWdlIHtcbiAgdHlwZTogRVZhbGlkYXRpb25UeXBlO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTb3J0VHlwZSA9ICdhc2MnIHwgJ2Rlc2MnO1xuXG5pbnRlcmZhY2UgU29ydCB7XG4gIHNvcnRlZDogYm9vbGVhbjtcbiAgdW5zb3J0ZWQ6IGJvb2xlYW47XG4gIGVtcHR5OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVBhZ2U8VD4ge1xuICBjb250ZW50OiBUW107XG4gIG51bWJlcjogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIHRvdGFsRWxlbWVudHM6IG51bWJlcjtcbiAgdG90YWxQYWdlczogbnVtYmVyO1xuICBsYXN0OiBib29sZWFuO1xuICBmaXJzdDogYm9vbGVhbjtcbiAgc29ydDogU29ydDtcbiAgbnVtYmVyT2ZFbGVtZW50czogbnVtYmVyO1xuICBlbXB0eTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoUXVlcnkge1xuICAvKipcbiAgICogU3RhcnRzIGF0IDFcbiAgICovXG4gIHBhZ2U/OiBudW1iZXI7XG4gIGxpbWl0PzogbnVtYmVyO1xuICBzZWFyY2g/OiBzdHJpbmc7XG4gIFt4OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBJU2VhcmNoUmVzcG9uc2U8VCA9IGFueT4ge1xuICBwYWdlOiBJUGFnZTxUPjtcbiAgbGlzdFNpemU6IG51bWJlcjtcbiAgcGFnZU51bWJlcj86IG51bWJlcjtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIHNlYXJjaENyaXRlcmlhOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaFJlc3BvbnNlPFQgPSBhbnk+IHtcbiAgcGFnZTogSVBhZ2U8VD47XG4gIGxpc3RTaXplOiBudW1iZXI7XG4gIHBhZ2VOdW1iZXI/OiBudW1iZXI7XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xuICBzZWFyY2hDcml0ZXJpYTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTZWFyY2hSZXNwb25zZTI8VCA9IGFueT4ge1xuICBjb250ZW50OiBUW107XG4gIGVtcHR5OiBib29sZWFuO1xuICBmaXJzdDogYm9vbGVhbjtcbiAgbGFzdDogYm9vbGVhbjtcbiAgbnVtYmVyOiBudW1iZXI7XG4gIG51bWJlck9mRWxlbWVudHM6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuICB0b3RhbEVsZW1lbnRzOiBudW1iZXI7XG4gIHRvdGFsUGFnZXM6IG51bWJlcjtcbiAgc29ydDoge1xuICAgIHNvcnRlZDogYm9vbGVhbjtcbiAgICB1bnNvcnRlZDogYm9vbGVhbjtcbiAgICBlbXB0eTogYm9vbGVhbjtcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgSW1hZ2VUeXBlID0gJ3BwJyB8ICdvdGhlcic7XG5leHBvcnQgaW50ZXJmYWNlIElUYWIge1xuICBpZD86IHN0cmluZztcbiAgdGFyZ2V0Pzogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBmb3JtPzogc3RyaW5nO1xuICBwb3N0RnVuY3Rpb24/OiAoXG4gICAgZGF0YTogYW55LFxuICAgIHByb2R1Y3RDb2RlPzogc3RyaW5nXG4gICkgPT4gT2JzZXJ2YWJsZTx7XG4gICAgZGF0YTogYW55O1xuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmc7XG4gIH0+O1xuICBwdXRGdW5jdGlvbj86IChcbiAgICBkYXRhOiBhbnksXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZ1xuICApID0+IE9ic2VydmFibGU8e1xuICAgIGRhdGE6IGFueTtcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICB9PjtcbiAgZGF0YT86IGFueTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tVmFsaWRhdGlvbkVycm9yIHtcbiAgY3VzdG9tPzogc3RyaW5nO1xuICBtYXhsZW5ndGg/OiBib29sZWFuO1xuICBtYXhMZW5ndGg/OiBib29sZWFuO1xuICBtaW5sZW5ndGg/OiBib29sZWFuO1xuICBtaW5MZW5ndGg/OiBib29sZWFuO1xuICBub3RGb3VuZD86IGJvb2xlYW47XG4gIG5vdFVuaXF1ZT86IGJvb2xlYW47XG4gIHBhdHRlcm4/OiBib29sZWFuO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIHVzZWQ/OiBib29sZWFuO1xufVxuZXhwb3J0IGVudW0gRU1lbnVUeXBlIHtcbiAgaG9yaXpvbnRhbCA9ICdIJyxcbiAgdmVydGljYWwgPSAnVicsXG59XG5leHBvcnQgaW50ZXJmYWNlIElWYWx1ZUxhYmVsPFQgPSBzdHJpbmc+IHtcbiAgdmFsdWU6IFQ7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZ0ltYWdlcyB7XG4gIGZhdmljb246IHN0cmluZztcbiAgd2F0ZXJtYXJrOiBzdHJpbmc7XG4gIGxvZ286IHtcbiAgICBkYXJrOiBzdHJpbmc7XG4gICAgbGlnaHQ6IHN0cmluZztcbiAgfTtcbiAgcHA6IHtcbiAgICBzcmM6IHN0cmluZztcbiAgICBtaW46IHN0cmluZztcbiAgfTtcbiAgb3RoZXI6IHtcbiAgICBzcmM6IHN0cmluZztcbiAgICBtaW46IHN0cmluZztcbiAgfTtcbn1cbmV4cG9ydCBjbGFzcyBDb25zdGFudCB7XG4gIC8vICAgY29uc3RydWN0b3IoKSB7fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZU5hbWUge1xuICBzY2hlbWE6IHN0cmluZztcbiAgcHJpbWFyeVRhYmxlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSBleHRlbmRzIElMaXN0VmFsdWU8bnVtYmVyPiB7XG4gIGFsaWFzOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxpc3RWYWx1ZTxUSUQgPSBzdHJpbmcsIFRWYWx1ZSA9IGFueT4ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlPzogVFZhbHVlO1xuICBpZD86IFRJRDtcbn1cblxuZXhwb3J0IGVudW0gRVBlcmlvZCB7XG4gIGRhaWx5ID0gJ2RhaWx5JyxcbiAgd2Vla2x5ID0gJ3dlZWtseScsXG4gIG1vbnRobHkgPSAnbW9udGhseScsXG4gIGFubnVhbGx5ID0gJ2FubnVhbGx5JyxcbiAgeWVhcmx5ID0gJ3llYXJseScsXG5cbiAgdG9kYXkgPSAndG9kYXknLFxuICB3ZWVrID0gJ3dlZWsnLFxuICBtb250aCA9ICdtb250aCcsXG4gIHllYXIgPSAneWVhcicsXG4gIGFubnVhbCA9ICdhbm51YWwnLFxufVxuIl19