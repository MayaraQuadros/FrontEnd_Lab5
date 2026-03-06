import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //import httpClient
import { Observable } from 'rxjs'; // import observable
//
@Injectable({
  providedIn: 'root',
})
export class DataService {

    constructor(private httpClient:HttpClient){} //create instance httpClient

    getStudentData():Observable<any>{ //observable of any type of data
      return this.httpClient.get('https://api.jsonblob.com/019cc30f-879f-7815-b8ab-6b1d3dee6884') //pass the address to api
    }

    getWeatherData():Observable<any>{
      return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
    }

  }

