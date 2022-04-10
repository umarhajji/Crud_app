import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  // @Output() onAddClient: EventEmitter<Client> = new EventEmitter;
  // id!: number;
  // fName!: string; 
  // lName!: string;
  // doB!: string;
  // address!: string
  // showAddClient!: boolean;
  // subscription!: Subscription;

  // clients: Client[] = []
 // @Output() onAddClient: EventEmitter<Client> = new EventEmitter;
  // id!: number;
  // fName!: string; 
  // lName!: string;
  // doB!: string;
  // address!: string
  // showAddClient!: boolean;
  // subscription!: Subscription;
  // clients: Client[] = []
  form!: FormGroup;


  constructor(private clientService: ClientService, private router: Router, private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fName:   ['',Validators.required],
      lName:  ['',Validators.required],
      doB:   ['',Validators.required],
      address:   ['',Validators.required]
    })
    
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.clientService.addClient(this.form.value).subscribe({
      next:(res)=>{
        alert("Client Added Successfully")
        this.form.reset();
      },
      error:()=>{
        alert("Error while Adding Client!")
      }
    })
  }

  // onSubmit(){
  //   if (!this.fName || !this.address){
  //     alert('Please add a client info!');
  //     return;
  //   }

  //   const newClient = {
  //     id: this.id,
  //     fName: this.fName,
  //     lName: this.lName,
  //     doB: this.doB,
  //     address: this.address
  //   }

  //   this.onAddClient.emit(newClient);
  //   this.id = ;
  //   this.fName = '';
  //   this.lName = '';
  //   this.doB = '';
  //   this.address =''

  //   console.log(newClient)
  // }
  
  // addClient(client: Client) {
  //   this.clientService.addClient(client).subscribe((client) => this.clients.push(client));
  //     alert("Submitted")
  // }

 
}
