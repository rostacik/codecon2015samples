module demoModule {
	"use strict";
    
    export async function getOnionCountAsync(): Promise<number> {
        var promise = new Promise(function (resolve: (value: number) => void, reject: (reason: any) => void) {
            setTimeout(()=>{
                resolve(Math.floor((Math.random() * 10) + 1));}, 2000);
        });

        return promise;
    }
    
    export async function theOnionCase(): Promise<void> {
        console.log("je cibula v byte?");
            
        let res: number = await getOnionCountAsync();
            
        console.log("cibula count : " + res);
    }
    
    export async function theOnionCaseWhileLoop(): Promise<void> {
        let res: number;
        
        do {
            console.log("je cibula v byte?");
            
            res = await getOnionCountAsync();
            
            console.log("cibula count : " + res);
            
            if (res <= 4) {
                console.log("BOHA!!!!");
            } else {
                console.log("ech, no dobre");
            }
        } while (res <= 4)
    }
    
	/**
    * async version of confirm dialog in the browser
    */
    export function getConfirmAsync(message: string): Promise<boolean> {
        var promise = new Promise(function (resolve: (value: boolean) => void, reject: (reason: any) => void) {
            let res: boolean = confirm(message);

            resolve(res);
        });

        return promise;
    }
    
    /**
     * consume getConfirmAsync
     */
    export async function consumeGetConfirmAsync(): Promise<void> {
        let res = await getConfirmAsync("please pick yes/no");
        
        console.log(res);
    }
    
    /**
     * same as getConfirmAsync but without promise
     */
    export async function getConfirmAsyncNoPromise(message: string): Promise<boolean> {
        return confirm(message);
    }
    
    /**
     * consuming getConfirmAsyncNoPromise with same result as consumeGetConfirmAsync
     */
    export async function consumeGetConfirmAsyncNoPromise(): Promise<void> {
        let res: boolean = await getConfirmAsyncNoPromise("please pick yes/no");
        
        console.log(res);
    }

	/**
    * generic async version of get JSON AJAX call
    */
    export function getJSONAsync(url: string): Promise<any> {
        var promise = new Promise(function (resolve: (value: any) => void, reject: (reason: any) => void) {
            var client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();

            function handler() {
                if (this.readyState === this.DONE) {
                    if (this.status === 200) {
                        if (this.response) { //latest browsers
                            resolve(fixResponse(this.response));
                        } else if (this.responseText) { //IE9
                            resolve(fixResponse(this.responseText));
                        }
                    }
                    else {
                        reject(this);
                    }
                }
            };
        });

        return promise;
    }
    
    /**
     * "internal" function to fix response type for IE
     */
    function fixResponse(response: any): any {
        if (response) {
            let res: any;
            
            if (typeof response === "string") {
                try {
                    res = JSON.parse(response);
                } catch(e) {
                    res = response;
                } finally {
                    return res;
                }
            } else {
                return response;
            }
        }
    }

    /**
     * Promise.all sample function
     */
    export async function promiseAllSample(): Promise<void> {
        let res = await Promise.all<string>([
            getJSONAsync("http://apidev.accuweather.com/currentconditions/v1/297345.json?language=en&apikey=meSocYcloNe"),
            getJSONAsync("http://apidev.accuweather.com/currentconditions/v1/2-298738_1_AL.json?language=en&apikey=meSocYcloNe"),
            getJSONAsync("http://apidev.accuweather.com/currentconditions/v1/2-301459_1_AL.json?language=en&apikey=meSocYcloNe"),
            getJSONAsync("http://apidev.accuweather.com/currentconditions/v1/297124.json?language=en&apikey=meSocYcloNe")
        ]);

        res.forEach((value: any) => {
            let val: any;
            
            if (Array.isArray(value)) {
                val = value;
            } else {
                val = JSON.parse(value);
            }
            
            console.log("Weather conditions : " + val[0].WeatherText + " with "+ val[0].Temperature.Metric.Value + val[0].Temperature.Metric.Unit);
        });
    }
    
    /**
     * sample function with then hooked on first promise object
     */
    export function sameObjectMoreThens(): void {
        var promise: Promise<boolean>;
        
        promise = new Promise((resolve: (value: boolean) => void, reject: (reason: any) => void) => {
            let res: boolean = confirm("abcd");

            resolve(res);
        });

        promise.then((value: boolean) => {
            console.log("from first then");
            console.log(value);
        }, (reason: any) => {
            console.log("from first reject");
            console.log(reason);
        });
        
        promise.then((value: boolean) => {
            console.log("from second then");
            console.log(value);
        }, (reason: any) => {
            console.log("from second reject");
            console.log(reason);
        });
        
        promise.then((value: boolean) => {
            console.log("from third then");
            console.log(value);
        }, (reason: any) => {
            console.log("from third reject");
            console.log(reason);
        });
    }
    
    /**
     * sample function where each then resolves with completely new Promise object
     */
    export function chainedThen(): void {
        var promise: Promise<boolean>;
        
        promise = new Promise((resolve: (value: boolean) => void, reject: (reason: any) => void) => {
            let res: boolean = confirm("abcd");

            resolve(res);
        });

        promise.then((value: boolean) => {
            console.log("from first then");
            console.log(value);
            
            //returning completely new promise
            return Promise.resolve("abcd");
        },
        (reason: any) => {
            console.log("from first reject");
            console.log(reason);
        }).then((value: string) => {
            console.log("from second then");
            console.log(value);
            
            //returning completely new promise
            return Promise.resolve(123);
        },
        (reason: any) => {
            console.log("from second reject");
            console.log(reason);
        }).then((value: number) => {
            console.log("from third then");
            console.log(value);
        },
        (reason: any) => {
            console.log("from third reject");
            console.log(reason);
        });
    }
    
    /**
    * async version of confirm dialog in the browser
    */
    export function getConfirmThrowingAsync(message: string): Promise<boolean> {
        var promise = new Promise(function (resolve: (value: boolean) => void, reject: (reason: any) => void) {
            let res: boolean = confirm(message);

            if (res) {
                resolve(res);
            } else {
                reject("rejected, because user returned no");
            }
        });

        return promise;
    }
    
    export async function tryCatchAsyncFn(): Promise<void> {
        try {
            let res = await getConfirmThrowingAsync("je cibula v byte?");
            
            console.log("cibula vraj v byte JE : " + res);
        } catch (error) {
            console.log("cibula vraj v byte NIEJE : " + error);
        }
    } 
    
    export function simplePromise(): void {
        let promise = new Promise((resolve: (value: boolean) => void, reject: (reason: any) => void) => {
            let res: boolean = confirm("abcd");

            resolve(res);
        }).then((result: boolean) => {
            console.log(result);
        }, (error: any) => {
            console.log(error);
        });
    }
    
    export async function simpleAwait(): Promise<void> {
        let res = await getConfirmAsync("abcd");
        
        console.log(res);
    }
    
    export async function simpleAwaitWithProp(): Promise<void> {
        let gca: Promise<boolean> = getConfirmAsync("abcd");
        
        let res = await gca;
        
        console.log(res);
    }
    
    export async function returnStringAsync(): Promise<string> {
        return "abcd";
    }
    
    export async function consumeStringAsync(): Promise<void> {
        let res: string = await returnStringAsync();
        
        console.log(res);
    }
}