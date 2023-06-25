import { Loader } from './page-loader.class';
export class ProgressLoader extends Loader {
    constructor(obj) {
        super();
        if (obj)
            Object.assign(this, obj);
    }
}
export class ProgressLoaders {
    constructor() {
        this.loaders = [];
    }
    addLoader(loader) {
        loader = loader || new ProgressLoader();
        loader.timeAdded = Date.now();
        this.loaders.push(loader);
        return loader;
    }
    /**
     * Checks if all the loaders in the loaders array have stopped loaded
     */
    get isLoading() {
        return this.loaders?.some((x) => x.isLoading);
    }
    get latestLoaderLoading() {
        return this.loaders?.find((x) => x.isLoading);
    }
    get currentLoaderText() {
        return this.latestLoaderLoading?.loaderText;
    }
    resetLoaders() {
        this.loaders = [];
    }
    stopAllLoaders() {
        this.loaders?.forEach((x) => x.stopAllPls());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtbG9hZGVyLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaGVybGhheS1oZWxwZXJzL3NyYy9saWIvc2hhcmVkL2NsYXNzZXMvcHJvZ3Jlc3MtbG9hZGVyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxNQUFNLE9BQU8sY0FBZSxTQUFRLE1BQU07SUFHeEMsWUFBWSxHQUFvQjtRQUM5QixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksR0FBRztZQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxlQUFlO0lBRTFCO1FBREEsWUFBTyxHQUFxQixFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVoQixTQUFTLENBQUMsTUFBdUI7UUFDL0IsTUFBTSxHQUFHLE1BQU0sSUFBSSxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLENBQUE7SUFDN0MsQ0FBQztJQUNELFlBQVk7UUFDVixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsY0FBYztRQUNaLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuL3BhZ2UtbG9hZGVyLmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIFByb2dyZXNzTG9hZGVyIGV4dGVuZHMgTG9hZGVyIHtcbiAgcHJvZ3Jlc3M/OiBudW1iZXI7XG4gIHRpbWVBZGRlZD86IG51bWJlcjtcbiAgY29uc3RydWN0b3Iob2JqPzogUHJvZ3Jlc3NMb2FkZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmIChvYmopIE9iamVjdC5hc3NpZ24odGhpcywgb2JqKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NMb2FkZXJzIHtcbiAgbG9hZGVyczogUHJvZ3Jlc3NMb2FkZXJbXSA9IFtdO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkTG9hZGVyKGxvYWRlcj86IFByb2dyZXNzTG9hZGVyKSB7XG4gICAgbG9hZGVyID0gbG9hZGVyIHx8IG5ldyBQcm9ncmVzc0xvYWRlcigpO1xuICAgIGxvYWRlci50aW1lQWRkZWQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMubG9hZGVycy5wdXNoKGxvYWRlcik7XG4gICAgcmV0dXJuIGxvYWRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYWxsIHRoZSBsb2FkZXJzIGluIHRoZSBsb2FkZXJzIGFycmF5IGhhdmUgc3RvcHBlZCBsb2FkZWRcbiAgICovXG4gIGdldCBpc0xvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGVycz8uc29tZSgoeCkgPT4geC5pc0xvYWRpbmcpO1xuICB9XG4gIGdldCBsYXRlc3RMb2FkZXJMb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRlcnM/LmZpbmQoKHgpID0+IHguaXNMb2FkaW5nKTtcbiAgfVxuICBnZXQgY3VycmVudExvYWRlclRleHQoKXtcbiAgICByZXR1cm4gdGhpcy5sYXRlc3RMb2FkZXJMb2FkaW5nPy5sb2FkZXJUZXh0XG4gIH1cbiAgcmVzZXRMb2FkZXJzKCkge1xuICAgIHRoaXMubG9hZGVycyA9IFtdO1xuICB9XG4gIHN0b3BBbGxMb2FkZXJzKCkge1xuICAgIHRoaXMubG9hZGVycz8uZm9yRWFjaCgoeCkgPT4geC5zdG9wQWxsUGxzKCkpO1xuICB9XG59XG4iXX0=