import { Component, Renderer } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { DatePipe } from '@angular/common';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    myDate: Date;
    curTime = new Date().getHours;
    sky: any;
    entireSun: any;
    allClouds: any;
    clouds: any;
 
    constructor(public navCtrl: NavController, public renderer: Renderer) {
 
    }
 
    ngOnInit(): void {
                this.utcTime();
            }
        
            utcTime(): void {
                setInterval(() => {         //replaced function() by ()=>
                    this.myDate = new Date();
                    console.log(this.myDate); // just testing if it is working
                  }, 1000);

            }

    ionViewDidLoad(){
 
        this.sky = document.querySelector('linearGradient [offset="1"]');
        this.entireSun = document.querySelector('#Sun');
        this.clouds = document.querySelectorAll('#Clouds path');
 
        console.log(this.curTime);

        this.setTransitions();
 
    }
 
    setTransitions(){
 
        this.renderer.setElementStyle(this.sky, 'transition', '1s linear');
        this.renderer.setElementStyle(this.entireSun, 'transition', '1s linear');
 
        this.clouds.forEach((cloud) => {
            this.renderer.setElementStyle(cloud, 'transition', '1s linear');
        });
 
    }
 
    setNight(){
 
        this.renderer.setElementAttribute(this.sky, 'stop-color', '#141944');
        this.renderer.setElementAttribute(this.entireSun, 'transform', 'translate(1, 2000)');
        this.renderer.setElementAttribute(this.entireSun, 'opacity', '1');
 
        this.clouds.forEach((cloud) => {
            this.renderer.setElementStyle(cloud, 'fill', '#fff');
            this.renderer.setElementStyle(cloud, 'opacity', '0.2');
        });
 
    }
 
    setDay(){
 
        this.renderer.setElementAttribute(this.sky, 'stop-color', '#50a7dd');
        this.renderer.setElementAttribute(this.entireSun, 'opacity', '1');
        this.renderer.setElementAttribute(this.entireSun, 'transform', 'translate(1, 1)');
 
        this.clouds.forEach((cloud) => {
            this.renderer.setElementStyle(cloud, 'fill', '#fff');
            this.renderer.setElementStyle(cloud, 'opacity', '1');
        });
 
    }
 
    setSunset(){
 
        this.renderer.setElementAttribute(this.entireSun, 'transform', 'translate(1, 1000)');
        this.renderer.setElementAttribute(this.entireSun, 'opacity', '1');
        this.renderer.setElementAttribute(this.sky, 'stop-color', '#e2905a');
 
        this.clouds.forEach((cloud) => {
            this.renderer.setElementStyle(cloud, 'fill', '#e2c1d8');
            this.renderer.setElementStyle(cloud, 'opacity', '0.4');
        });
 
    }
 
    setCloudy(){
        this.renderer.setElementAttribute(this.sky, 'stop-color', '#cecece');
        this.renderer.setElementAttribute(this.entireSun, 'transform', 'translate(1, 1)');
        this.renderer.setElementAttribute(this.entireSun, 'opacity', '0.2');
 
        this.clouds.forEach((cloud) => {
            this.renderer.setElementStyle(cloud, 'fill', '#fff');
            this.renderer.setElementStyle(cloud, 'opacity', '1');
        });
    }
 
}