import { Component, OnInit } from '@angular/core';
import axios, { AxiosRequestConfig } from "axios";

interface Student {
  vname: string;
  nname: string;
  age: number;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  students: Student[] = [];
  
  ngOnInit() {
    this.getAllSchueler().then((data: Student[]) => {
      this.students = data;
    });
  }

  constructor() {}
  
  async getAllSchueler(){
    try{
      const response = await axios.get("http://lueger.cloud:3000/getAllSchueler");
      console.log(response.data)
      return response.data;
    }catch (error){
      console.error(error)
    }
    
  }
}

