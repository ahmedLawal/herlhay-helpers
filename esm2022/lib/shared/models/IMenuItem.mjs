export class MenuItem {
    get _editAccess() {
        console.log(this.editAccess);
        return this.editAccess;
    }
    set _editAccess(value) {
        this.editAccess = value;
        this.toggleEditAllSubMenus();
    }
    get _viewAccess() {
        return this.viewAccess;
    }
    set _viewAccess(value) {
        this.viewAccess = value;
        this.toggleViewAllSubMenus();
    }
    constructor(menuItem, parent) {
        Object.assign(this, menuItem);
        this.labelLowerCase = menuItem?.label?.toLowerCase();
        this.hasSub = !!menuItem?.subs?.length;
        this.isP = true;
        this.parentID = parent?.id;
        // debugger
        this.subs = menuItem?.subs?.map((m) => new MenuItem(m, this));
    }
    toggle() {
        this.disabled = !this.disabled;
    }
    toggleView() {
        this.viewAccess = !this.viewAccess;
        if (this.editAccess)
            this.viewAccess = true;
    }
    toggleCreate() {
        this.editAccess = !this.editAccess;
        if (this.editAccess)
            this.viewAccess = true;
    }
    allowEditAllSubMenus() {
        this.subs?.forEach((x) => x?.allowEditAllSubMenus());
        //debugger;
        this.viewAccess = true;
        this.editAccess = true;
    }
    disableEditAllSubMenus() {
        this.subs?.forEach((x) => x?.disableEditAllSubMenus());
        this.editAccess = false;
    }
    allowViewAllSubMenus() {
        this.subs?.forEach((x) => x?.allowViewAllSubMenus());
        //debugger;
        this.viewAccess = true;
        this.editAccess = false;
    }
    disableViewAllSubMenus() {
        this.subs?.forEach((x) => x?.disableViewAllSubMenus());
        this.viewAccess = false;
        this.editAccess = false;
    }
    toggleEditAllSubMenus() {
        // if (this.editAccess == undefined) return;
        !this.editAccess
            ? this.allowEditAllSubMenus()
            : this.disableEditAllSubMenus();
        console.log(this.subs);
    }
    toggleViewAllSubMenus() {
        // if (this.viewAccess == undefined) return;
        // debugger
        !this.viewAccess
            ? this.allowViewAllSubMenus()
            : this.disableViewAllSubMenus();
        console.log(this.subs);
    }
    allowAuthorization() {
        this.viewAccess = true;
        this.editAccess = true;
    }
    disableAuthorization() {
        this.viewAccess = false;
        this.viewAccess = false;
    }
    toggleAuthorization() {
        this.viewAccess = !this.viewAccess;
        this.editAccess = !this.editAccess;
    }
}
export class MenuItemDivider extends MenuItem {
    constructor() {
        super(null);
        this.isDivider = true;
    }
}
export var EPageBtnID;
(function (EPageBtnID) {
    EPageBtnID["agentCommissions"] = "PAC8";
    EPageBtnID["agentCreditNotes"] = "PACN10";
    EPageBtnID["agentDocuments"] = "PAD2";
    EPageBtnID["agentEndorsements"] = "PAE3";
    EPageBtnID["agentLoan"] = "PAL1";
    EPageBtnID["agentNotes"] = "PAN6";
    EPageBtnID["agentPendingQuotes"] = "PAPQ11";
    EPageBtnID["agentPolicies"] = "PAP7";
    EPageBtnID["agentProduction"] = "PAP9";
    EPageBtnID["agentWebLogIn"] = "PAWL4";
    EPageBtnID["agentWorkflows"] = "PAW5";
    EPageBtnID["agentCalendar"] = "PAC6";
    EPageBtnID["clientCalendar"] = "PCC11";
    EPageBtnID["clientDocuments"] = "PCD12";
    EPageBtnID["clientEndorsements"] = "PCE13";
    EPageBtnID["clientNotes"] = "PCN14";
    EPageBtnID["clientOtherBusiness"] = "PCOB15";
    EPageBtnID["clientPendingPayments"] = "PCPP16";
    EPageBtnID["clientPendingQuotes"] = "PCPQ17";
    EPageBtnID["clientPolicies"] = "PCP18";
    EPageBtnID["clientRelationships"] = "PCR19";
    EPageBtnID["clientUnderwritingEvents"] = "PCUE20";
    EPageBtnID["clientWebLogIn"] = "PCWL21";
    EPageBtnID["clientWorkflows"] = "PCW22";
})(EPageBtnID || (EPageBtnID = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSU1lbnVJdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL21vZGVscy9JTWVudUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNBLE1BQU0sT0FBTyxRQUFRO0lBeUJuQixJQUFXLFdBQVc7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFjO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFjO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRCxZQUFZLFFBQW1CLEVBQUUsTUFBa0I7UUFDakQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUMzQixXQUFXO1FBQ1gsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLEVBQUUsSUFB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QUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsUUFBUTtJQUMzQztRQUNFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQUVELE1BQU0sQ0FBTixJQUFZLFVBMEJYO0FBMUJELFdBQVksVUFBVTtJQUNwQix1Q0FBeUIsQ0FBQTtJQUN6Qix5Q0FBMkIsQ0FBQTtJQUMzQixxQ0FBdUIsQ0FBQTtJQUN2Qix3Q0FBMEIsQ0FBQTtJQUMxQixnQ0FBa0IsQ0FBQTtJQUNsQixpQ0FBbUIsQ0FBQTtJQUNuQiwyQ0FBNkIsQ0FBQTtJQUM3QixvQ0FBc0IsQ0FBQTtJQUN0QixzQ0FBd0IsQ0FBQTtJQUN4QixxQ0FBdUIsQ0FBQTtJQUN2QixxQ0FBdUIsQ0FBQTtJQUN2QixvQ0FBc0IsQ0FBQTtJQUV0QixzQ0FBd0IsQ0FBQTtJQUN4Qix1Q0FBeUIsQ0FBQTtJQUN6QiwwQ0FBNEIsQ0FBQTtJQUM1QixtQ0FBcUIsQ0FBQTtJQUNyQiw0Q0FBOEIsQ0FBQTtJQUM5Qiw4Q0FBZ0MsQ0FBQTtJQUNoQyw0Q0FBOEIsQ0FBQTtJQUM5QixzQ0FBd0IsQ0FBQTtJQUN4QiwyQ0FBNkIsQ0FBQTtJQUM3QixpREFBbUMsQ0FBQTtJQUNuQyx1Q0FBeUIsQ0FBQTtJQUN6Qix1Q0FBeUIsQ0FBQTtBQUMzQixDQUFDLEVBMUJXLFVBQVUsS0FBVixVQUFVLFFBMEJyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtleVZhbHVlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1lbnVQb3NpdGlvblggfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7IFF1ZXJ5UGFyYW1zSGFuZGxpbmcgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInOyBcbmltcG9ydCB7IFNWR0ljb25UeXBlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdmctaWNvbi9zdmctaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBFTWVudUxvY2F0aW9uIH0gZnJvbSAnLi9pbmRleC5tb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lbnVJdGVtQmFzZSB7XG4gIGJyZWFkY3J1bWJzPzogS2V5VmFsdWU8c3RyaW5nLCBzdHJpbmc+W107XG4gIGJyZWFkY3J1bWJzU3RyPzogc3RyaW5nO1xuICBoYXNTdWI/OiBib29sZWFuO1xuICBpY29uPzogU1ZHSWNvblR5cGU7XG4gIGlkPzogc3RyaW5nO1xuICBpbmRleD86IG51bWJlcjtcbiAgaXNEaXZpZGVyPzogYm9vbGVhbjtcbiAgaXNQPzogYm9vbGVhbjtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGxhYmVsTG93ZXJDYXNlPzogc3RyaW5nO1xuICBsaW5rPzogc3RyaW5nO1xuICBhY3Rpb24/OiAoKSA9PiBhbnk7XG4gIHF1ZXJ5UGFyYW1zPzogeyBbeDogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB9O1xuICBsb2NhdGlvbnM/OiBNYXA8RU1lbnVMb2NhdGlvbiwgYm9vbGVhbj47XG4gIHBhcmVudElEPzogc3RyaW5nO1xuICBzdWJtZW51UG9zaXRpb24/OiBNZW51UG9zaXRpb25YO1xuICBzeXN0ZW1JY29uPzogc3RyaW5nO1xuICBzeXN0ZW1MaW5rPzogc3RyaW5nO1xuICBpc1JlYWR5PzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU1lbnVJdGVtUmF3QmFzZSB7XG4gIFt4OiBzdHJpbmddOiBJTWVudUl0ZW1SYXc7XG59XG5leHBvcnQgaW50ZXJmYWNlIElNZW51SXRlbVJhdyBleHRlbmRzIElNZW51SXRlbUJhc2Uge1xuICBzdWJzPzogeyBbeDogc3RyaW5nXTogSU1lbnVJdGVtUmF3IH07IFxufVxuZXhwb3J0IGludGVyZmFjZSBJTWVudUl0ZW0gZXh0ZW5kcyBJTWVudUl0ZW1CYXNlIHtcbiAgY2FuQWNjZXNzPzogYm9vbGVhbjtcbiAgZXhwYW5kZWQ/OiBib29sZWFuO1xuICBxdWVyeVBhcmFtc0hhbmRsaW5nPzogUXVlcnlQYXJhbXNIYW5kbGluZzsgXG4gIHN1YnM/OiBJTWVudUl0ZW1bXTsgXG59XG5leHBvcnQgY2xhc3MgTWVudUl0ZW0gaW1wbGVtZW50cyBJTWVudUl0ZW0ge1xuICBicmVhZGNydW1icz86IEtleVZhbHVlPHN0cmluZywgc3RyaW5nPltdO1xuICBicmVhZGNydW1ic1N0cj86IHN0cmluZzsgXG4gIGNhbkFjY2Vzcz86IGJvb2xlYW47IFxuICBkYklEOiBudW1iZXI7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBoYXNCdXR0b25zOiBib29sZWFuO1xuICBoYXNTdWI/OiBib29sZWFuO1xuICBpY29uOiBTVkdJY29uVHlwZTtcbiAgaWQ6IHN0cmluZztcbiAgaW5kZXg/OiBudW1iZXI7XG4gIGlzRGl2aWRlcj86IGJvb2xlYW47XG4gIGlzUD86IGJvb2xlYW47XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGxhYmVsTG93ZXJDYXNlPzogc3RyaW5nO1xuICBsZXZlbD86IG51bWJlcjtcbiAgbGluazogc3RyaW5nO1xuICBsb2NhdGlvbnM/OiBNYXA8RU1lbnVMb2NhdGlvbiwgYm9vbGVhbj47XG4gIHBhcmVudElEOiBzdHJpbmc7XG4gIHN1Ym1lbnVQb3NpdGlvbj86IE1lbnVQb3NpdGlvblg7XG4gIHN1YnM6IE1lbnVJdGVtW107XG4gIHN5c3RlbUljb24/OiBzdHJpbmc7XG4gIHN5c3RlbUxpbms/OiBzdHJpbmc7XG4gIHZpZXdBY2Nlc3M6IGJvb2xlYW47XG4gIGVkaXRBY2Nlc3M6IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgX2VkaXRBY2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgY29uc29sZS5sb2codGhpcy5lZGl0QWNjZXNzKTtcbiAgICByZXR1cm4gdGhpcy5lZGl0QWNjZXNzO1xuICB9XG4gIHB1YmxpYyBzZXQgX2VkaXRBY2Nlc3ModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmVkaXRBY2Nlc3MgPSB2YWx1ZTtcbiAgICB0aGlzLnRvZ2dsZUVkaXRBbGxTdWJNZW51cygpO1xuICB9XG4gIHB1YmxpYyBnZXQgX3ZpZXdBY2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlld0FjY2VzcztcbiAgfVxuICBwdWJsaWMgc2V0IF92aWV3QWNjZXNzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy52aWV3QWNjZXNzID0gdmFsdWU7XG4gICAgdGhpcy50b2dnbGVWaWV3QWxsU3ViTWVudXMoKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihtZW51SXRlbTogSU1lbnVJdGVtLCBwYXJlbnQ/OiBJTWVudUl0ZW0pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG1lbnVJdGVtKTtcbiAgICB0aGlzLmxhYmVsTG93ZXJDYXNlID0gbWVudUl0ZW0/LmxhYmVsPy50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMuaGFzU3ViID0gISFtZW51SXRlbT8uc3Vicz8ubGVuZ3RoOyBcbiAgICB0aGlzLmlzUCA9IHRydWU7XG4gICAgdGhpcy5wYXJlbnRJRCA9IHBhcmVudD8uaWQ7XG4gICAgLy8gZGVidWdnZXJcbiAgICB0aGlzLnN1YnMgPSBtZW51SXRlbT8uc3Vicz8ubWFwKChtKSA9PiBuZXcgTWVudUl0ZW0obSwgdGhpcykpO1xuICB9XG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gIXRoaXMuZGlzYWJsZWQ7XG4gIH1cbiAgdG9nZ2xlVmlldygpIHtcbiAgICB0aGlzLnZpZXdBY2Nlc3MgPSAhdGhpcy52aWV3QWNjZXNzO1xuICAgIGlmICh0aGlzLmVkaXRBY2Nlc3MpIHRoaXMudmlld0FjY2VzcyA9IHRydWU7XG4gIH1cbiAgdG9nZ2xlQ3JlYXRlKCkge1xuICAgIHRoaXMuZWRpdEFjY2VzcyA9ICF0aGlzLmVkaXRBY2Nlc3M7XG4gICAgaWYgKHRoaXMuZWRpdEFjY2VzcykgdGhpcy52aWV3QWNjZXNzID0gdHJ1ZTtcbiAgfVxuICBhbGxvd0VkaXRBbGxTdWJNZW51cygpIHtcbiAgICB0aGlzLnN1YnM/LmZvckVhY2goKHgpID0+IHg/LmFsbG93RWRpdEFsbFN1Yk1lbnVzKCkpOyBcbiAgICAvL2RlYnVnZ2VyO1xuICAgIHRoaXMudmlld0FjY2VzcyA9IHRydWU7XG4gICAgdGhpcy5lZGl0QWNjZXNzID0gdHJ1ZTtcbiAgfVxuICBkaXNhYmxlRWRpdEFsbFN1Yk1lbnVzKCkge1xuICAgIHRoaXMuc3Vicz8uZm9yRWFjaCgoeCkgPT4geD8uZGlzYWJsZUVkaXRBbGxTdWJNZW51cygpKTsgXG4gICAgdGhpcy5lZGl0QWNjZXNzID0gZmFsc2U7XG4gIH1cbiAgYWxsb3dWaWV3QWxsU3ViTWVudXMoKSB7XG4gICAgdGhpcy5zdWJzPy5mb3JFYWNoKCh4KSA9PiB4Py5hbGxvd1ZpZXdBbGxTdWJNZW51cygpKTsgXG4gICAgLy9kZWJ1Z2dlcjtcbiAgICB0aGlzLnZpZXdBY2Nlc3MgPSB0cnVlO1xuICAgIHRoaXMuZWRpdEFjY2VzcyA9IGZhbHNlO1xuICB9XG4gIGRpc2FibGVWaWV3QWxsU3ViTWVudXMoKSB7XG4gICAgdGhpcy5zdWJzPy5mb3JFYWNoKCh4KSA9PiB4Py5kaXNhYmxlVmlld0FsbFN1Yk1lbnVzKCkpOyBcbiAgICB0aGlzLnZpZXdBY2Nlc3MgPSBmYWxzZTtcbiAgICB0aGlzLmVkaXRBY2Nlc3MgPSBmYWxzZTtcbiAgfVxuICB0b2dnbGVFZGl0QWxsU3ViTWVudXMoKSB7XG4gICAgLy8gaWYgKHRoaXMuZWRpdEFjY2VzcyA9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAhdGhpcy5lZGl0QWNjZXNzXG4gICAgICA/IHRoaXMuYWxsb3dFZGl0QWxsU3ViTWVudXMoKVxuICAgICAgOiB0aGlzLmRpc2FibGVFZGl0QWxsU3ViTWVudXMoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN1YnMpO1xuICB9XG4gIHRvZ2dsZVZpZXdBbGxTdWJNZW51cygpIHtcbiAgICAvLyBpZiAodGhpcy52aWV3QWNjZXNzID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgIXRoaXMudmlld0FjY2Vzc1xuICAgICAgPyB0aGlzLmFsbG93Vmlld0FsbFN1Yk1lbnVzKClcbiAgICAgIDogdGhpcy5kaXNhYmxlVmlld0FsbFN1Yk1lbnVzKCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdWJzKTtcbiAgfVxuICBhbGxvd0F1dGhvcml6YXRpb24oKSB7XG4gICAgdGhpcy52aWV3QWNjZXNzID0gdHJ1ZTtcbiAgICB0aGlzLmVkaXRBY2Nlc3MgPSB0cnVlO1xuICB9XG4gIGRpc2FibGVBdXRob3JpemF0aW9uKCkge1xuICAgIHRoaXMudmlld0FjY2VzcyA9IGZhbHNlO1xuICAgIHRoaXMudmlld0FjY2VzcyA9IGZhbHNlO1xuICB9XG4gIHRvZ2dsZUF1dGhvcml6YXRpb24oKSB7XG4gICAgdGhpcy52aWV3QWNjZXNzID0gIXRoaXMudmlld0FjY2VzcztcbiAgICB0aGlzLmVkaXRBY2Nlc3MgPSAhdGhpcy5lZGl0QWNjZXNzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNZW51SXRlbURpdmlkZXIgZXh0ZW5kcyBNZW51SXRlbSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKG51bGwpO1xuICAgIHRoaXMuaXNEaXZpZGVyID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZW51bSBFUGFnZUJ0bklEIHtcbiAgYWdlbnRDb21taXNzaW9ucyA9ICdQQUM4JyxcbiAgYWdlbnRDcmVkaXROb3RlcyA9ICdQQUNOMTAnLFxuICBhZ2VudERvY3VtZW50cyA9ICdQQUQyJyxcbiAgYWdlbnRFbmRvcnNlbWVudHMgPSAnUEFFMycsXG4gIGFnZW50TG9hbiA9ICdQQUwxJyxcbiAgYWdlbnROb3RlcyA9ICdQQU42JyxcbiAgYWdlbnRQZW5kaW5nUXVvdGVzID0gJ1BBUFExMScsXG4gIGFnZW50UG9saWNpZXMgPSAnUEFQNycsXG4gIGFnZW50UHJvZHVjdGlvbiA9ICdQQVA5JyxcbiAgYWdlbnRXZWJMb2dJbiA9ICdQQVdMNCcsXG4gIGFnZW50V29ya2Zsb3dzID0gJ1BBVzUnLFxuICBhZ2VudENhbGVuZGFyID0gJ1BBQzYnLFxuXG4gIGNsaWVudENhbGVuZGFyID0gJ1BDQzExJyxcbiAgY2xpZW50RG9jdW1lbnRzID0gJ1BDRDEyJyxcbiAgY2xpZW50RW5kb3JzZW1lbnRzID0gJ1BDRTEzJyxcbiAgY2xpZW50Tm90ZXMgPSAnUENOMTQnLFxuICBjbGllbnRPdGhlckJ1c2luZXNzID0gJ1BDT0IxNScsXG4gIGNsaWVudFBlbmRpbmdQYXltZW50cyA9ICdQQ1BQMTYnLFxuICBjbGllbnRQZW5kaW5nUXVvdGVzID0gJ1BDUFExNycsXG4gIGNsaWVudFBvbGljaWVzID0gJ1BDUDE4JyxcbiAgY2xpZW50UmVsYXRpb25zaGlwcyA9ICdQQ1IxOScsXG4gIGNsaWVudFVuZGVyd3JpdGluZ0V2ZW50cyA9ICdQQ1VFMjAnLFxuICBjbGllbnRXZWJMb2dJbiA9ICdQQ1dMMjEnLFxuICBjbGllbnRXb3JrZmxvd3MgPSAnUENXMjInLFxufVxuIl19