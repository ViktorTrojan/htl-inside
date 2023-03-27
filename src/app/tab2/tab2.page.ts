import { Component, OnInit } from '@angular/core';
import axios, { AxiosRequestConfig } from "axios";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  ngOnInit(){
    this.getAllSchueler().then(data => {
      console.log(data)
    })
  }

  students = [
    {
      name: "Florian Hedrich",
      age: 19,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    },
    {
      name: "Viktor Trojan",
      age: -3,
    }
    ]
  constructor() {}
  
  async getAllSchueler(){
    try{
      const response = await axios.get("http://lueger.cloud:3000/getAllSchueler");
      console.log(response.data)
      return response.data;/
    }catch (error){
      console.error(error)
    }
    
  }
}

