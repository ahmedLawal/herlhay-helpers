export class Loader {
    constructor() {
        this._pageLoaders = [];
    }
    get isLoading() {
        return this._pageLoaders?.length > 0;
    }
    startPl(value = 1) {
        for (let index = 0; index < value; index++) {
            this._pageLoaders.push(1);
        }
        // console.log('length at start',this._pageLoaders.length)
        return this._pageLoaders?.length;
    }
    restartPl() {
        this._pageLoaders = [];
        this.startPl();
    }
    stopPl(value = 1) {
        for (let index = 0; index < value; index++) {
            this._pageLoaders.pop();
        }
        if (!this._pageLoaders?.length && this.onLoaderStopped)
            this.onLoaderStopped();
        // console.log('length at end', this._pageLoaders.length)
        return this._pageLoaders?.length;
    }
    stopAllPls() {
        this._pageLoaders = [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sb2FkZXIuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9oZXJsaGF5LWhlbHBlcnMvc3JjL2xpYi9zaGFyZWQvY2xhc3Nlcy9wYWdlLWxvYWRlci5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sTUFBTTtJQUlqQjtRQUZRLGlCQUFZLEdBQVEsRUFBRSxDQUFDO0lBRWhCLENBQUM7SUFFaEIsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUNmLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0I7UUFDRCwwREFBMEQ7UUFDMUQsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ2QsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlO1lBQ3BELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6Qix5REFBeUQ7UUFDekQsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBTUQsVUFBVTtRQUNSLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMb2FkZXIge1xuICBsb2FkZXJUZXh0OiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhZ2VMb2FkZXJzOiAxW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0IGlzTG9hZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZUxvYWRlcnM/Lmxlbmd0aCA+IDA7XG4gIH1cblxuICBzdGFydFBsKHZhbHVlID0gMSkge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZTsgaW5kZXgrKykge1xuICAgICAgdGhpcy5fcGFnZUxvYWRlcnMucHVzaCgxKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2xlbmd0aCBhdCBzdGFydCcsdGhpcy5fcGFnZUxvYWRlcnMubGVuZ3RoKVxuICAgIHJldHVybiB0aGlzLl9wYWdlTG9hZGVycz8ubGVuZ3RoO1xuICB9XG5cbiAgcmVzdGFydFBsKCkge1xuICAgIHRoaXMuX3BhZ2VMb2FkZXJzID0gW107XG4gICAgdGhpcy5zdGFydFBsKCk7XG4gIH1cblxuICBzdG9wUGwodmFsdWUgPSAxKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLl9wYWdlTG9hZGVycy5wb3AoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9wYWdlTG9hZGVycz8ubGVuZ3RoICYmIHRoaXMub25Mb2FkZXJTdG9wcGVkKVxuICAgICAgdGhpcy5vbkxvYWRlclN0b3BwZWQoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnbGVuZ3RoIGF0IGVuZCcsIHRoaXMuX3BhZ2VMb2FkZXJzLmxlbmd0aClcbiAgICByZXR1cm4gdGhpcy5fcGFnZUxvYWRlcnM/Lmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGxvYWRlciBzdGFjayBpcyBlbXB0eVxuICAgKi9cbiAgb25Mb2FkZXJTdG9wcGVkOiAoLi4uYXJncykgPT4gYW55O1xuICBzdG9wQWxsUGxzKCkge1xuICAgIHRoaXMuX3BhZ2VMb2FkZXJzID0gW107XG4gIH1cbn1cbiJdfQ==