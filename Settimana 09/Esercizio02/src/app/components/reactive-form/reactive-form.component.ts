import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from 'src/app/interfaces/hero.interface';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

    form!: FormGroup;

    constructor(private fb: FormBuilder) { }

    hero:Hero = {name:"",alterEgo:"",power:"",planet:"",enemy:""};

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.form = this.fb.group({
            name: this.fb.control(null, [Validators.required]),
            alterEgo: this.fb.control(null, [Validators.required]),
            planet: this.fb.control(null, [Validators.required] && [Validators.minLength(5)]),
            enemy: this.fb.control(null, [Validators.required] && [Validators.maxLength(10)]),
            power: this.fb.array([]),
            weakness: this.fb.array([]),
        });

        this.form.valueChanges.subscribe(value => {
            console.log(value);
        });
    }

    getErrors(x: string, error: string) {
        return this.form.get(x)?.errors![error];
    }

    getFormValue(x: string) {
        return this.form.get(x);
    }

    getParam(x:string) {
        return (this.form.get(x) as FormArray).controls;
    }

    addParam(x:string) {
        const control = this.fb.control(null);
        (this.form.get(x) as FormArray).push(control);
    }

    submit() {
        console.log(this.form);
        console.log('Form correttamente inviato');
        this.hero.name = this.form.value.name;
        this.hero.alterEgo = this.form.value.alterEgo;
        this.hero.power = this.form.value.power;
        this.hero.planet = this.form.value.planet;
        this.hero.enemy = this.form.value.enemy;
        this.hero.weakness = this.form.value.weakness;
        this.form.reset();
    }
}


