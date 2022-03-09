//https://stackblitz.com/edit/full-angular-reactive-forms-demo?file=src%2Fapp%2Fapp.component.spec.ts
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  submitted = false;

  City: any = ['Florida', 'South Dakot', 'Tennessee', 'Michigan'] 

  constructor(
    public formBuilder: FormBuilder,
    private changeDetecterRef: ChangeDetectorRef 
  ) { }

  registrationForm = this.formBuilder.group({
    file: [null],
    fullName: this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
      lastName: ['', [Validators.required]]
    }),
    email: ['', [Validators.required], [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    phoneNumber: ['', [Validators.required], [Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
    address: this.formBuilder.group({
      street:['', [Validators.required]],
      city: ['', [Validators.required]],
      cityName: ['', [Validators.required]]
    }),
    gender:['male'],
    PassworldValidation: this.formBuilder.group({
      password:['', Validators.required],
      confirmPassword:['', Validators.required]
    },{
      //validator: ValidatePassword.MatchPassword
    }),
    addDynamicElement: this.formBuilder.array([])
  })

  ngOnInit(): void {
    console.log("onSubmit", this.myForm['fullName'])
  }

  get myForm(){
    return this.registrationForm.controls;
  }

  changeCity = (e: any) => {
    this.registrationForm.get('address.cityName')?.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get addDynamicElement(){
    return this.registrationForm.get('addDynamicElement') as FormArray
  }

  onSubmit(){

  }


}
