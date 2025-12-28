import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  title = "contact-app"
   constructor(private contact:ContactService) {}
   
  //initial value
  display:boolean = false;
  //variable to hold values 
  name:string = ""
  numbervariable!:bigint
  
  change(){
    this.display = true;
  }

  pullcontactsfromhashmap(){
    //code to retrive data from that backend contacts hashmap object
     this.contact.pullcontactfromhashmap()


     
  }


  add(){
    const userdata = {
      name:this.name,
      phone:this.numbervariable
    }

    //from here make call to service file.
    this.contact.addContact(userdata).subscribe((graspedval =>{
      console.log("the grasped value is ",graspedval);
    }));
    
  }
}