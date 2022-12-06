import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from 'src/app/interfaces/hero.interface';

@Component({
    selector: 'app-td-form',
    templateUrl: './td-form.component.html',
    styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

    @ViewChild('tdform', { static: true }) form!: NgForm;

    defaultValue:string = "";
    hero:Hero = {name:"",alterEgo:"",power:"",planet:"",enemy:""};

    generateHeroName() {
        let x = Math.floor(Math.random()*5);
        let randomNames = ["Supertizio", "Ultra Man", "Ultimate", "Wonder Boy", "High-Powered"];
        this.form.form.patchValue({
            heroInfo: {
                name: randomNames[x]
            }
        });
    }

    ngOnInit(): void {
        this.form.statusChanges?.subscribe(status => {
            console.log('Stato del form: ', status);
        });
    }

    submit() {
        this.hero.name = this.form.value.heroInfo.name;
        this.hero.alterEgo = this.form.value.heroInfo.alterEgo;
        this.hero.power = this.form.value.heroInfo.power;
        this.hero.planet = this.form.value.heroInfo.planet;
        this.hero.enemy = this.form.value.heroInfo.enemy;
        this.hero.weakness = this.form.value.heroInfo.weakness;
        console.log('Form inviato: ', this.form);
        this.form.reset();
    }

}
