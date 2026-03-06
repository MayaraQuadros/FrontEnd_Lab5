import { Component,OnInit, signal } from '@angular/core'; //import OnInit
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data-service'; //import DataService

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{ //implements OnInit
  students:any[]=[]; //create array to insert data from api
  weather:any[]=[];
  temperature:string="";
  constructor(private dataService:DataService){  //create instance of dataService

}

ngOnInit():void{
  this.dataService.getStudentData().subscribe(  //subscribe to method
    (data)=>{
      this.students = data.students;
      console.log(this.students);
    }
  );

  this.dataService.getWeatherData().subscribe(
  (data)=>{
    this.weather = data.weather;
    this.temperature = (data.main.temp-270).toFixed(2).toString();
    console.log(this.weather);
  }
  );

}
  } 
