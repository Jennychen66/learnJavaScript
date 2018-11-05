# Ng6

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
____________________________

# learning about Angular2 
1. The online cource link : https://app.pluralsight.com/player?course=angular-2-first-look&author=john-papa&name=angular-2-first-look-m4&clip=1&mode=live
2. Johnpapa blog : https://johnpapa.net/
3. Johnpapa's online hand book practice :http://angular2-first-look.azurewebsites.net/
____________________________
# Knowledge Point 
<img width="670" alt="capture" src="https://user-images.githubusercontent.com/39254430/47899511-c0819f00-deb4-11e8-8f7f-013f70e5c550.PNG">
<img width="656" alt="capture" src="https://user-images.githubusercontent.com/39254430/47899688-40a80480-deb5-11e8-8f85-4b7e4eeb4957.PNG">
<img width="718" alt="capture" src="https://user-images.githubusercontent.com/39254430/47899953-2ae70f00-deb6-11e8-8fc0-d4f8c660d558.PNG">
<img width="489" alt="capture" src="https://user-images.githubusercontent.com/39254430/47900193-050e3a00-deb7-11e8-8500-4e0ebfa755e8.PNG">
<img width="666" alt="capture" src="https://user-images.githubusercontent.com/39254430/47900273-47d01200-deb7-11e8-9fc2-93d91b5e4fc6.PNG">
<img width="676" alt="capture" src="https://user-images.githubusercontent.com/39254430/47900365-a09faa80-deb7-11e8-9000-1e03cc56471e.PNG">
<img width="663" alt="capture" src="https://user-images.githubusercontent.com/39254430/47900992-a4343100-deb9-11e8-8386-ebf15408985c.PNG">
<img width="644" alt="capture" src="https://user-images.githubusercontent.com/39254430/47901098-f83f1580-deb9-11e8-9559-968c6896af6a.PNG">

```<div class="row">
        <a href="{{character.link}}" target="_blank">
          <img [style.background]="color"
          (mouseenter)="color = '#EE0'"
          (mouseleave)="color = '#0EE'"
          [src]="character.imageUrl" style="width:50px">
          
        </a>
        
    <input type="text" id="nametext" class="mdl-textfield__input"
        [value]="character.name"
        (input)="character.name = $event.target.value"
        >
 ```
 ```
 <pre>{{vehicles | json}}</pre>
 <ul [ngClass]="{selected : isSelected}">
  <li *ngFor = "let vehicle of vehicles,let i = index">
    {{i}}.{{vehicle.name}}
  </li>
</ul>
 ```
 
![image](https://user-images.githubusercontent.com/39254430/47909088-d64d8f00-dec9-11e8-874c-96eee7223277.png)       
![image](https://user-images.githubusercontent.com/39254430/47909263-52e06d80-deca-11e8-8c0a-f722bbb6fbd9.png)     
![image](https://user-images.githubusercontent.com/39254430/47974414-78e15a00-e0e4-11e8-9fc0-839bc474384f.png)
![image](https://user-images.githubusercontent.com/39254430/47974494-daa1c400-e0e4-11e8-8008-281f76b98151.png)
Rxjs (Reactive Js ) implements the asynchronous (yibu) observable pattern and is widely used in Angular2.
![image](https://user-images.githubusercontent.com/39254430/47975937-09bb3400-e0eb-11e8-910d-c6c0b70b4f7d.png)
![image](https://user-images.githubusercontent.com/39254430/47976603-22791900-e0ee-11e8-811f-cc141148a4c3.png)
![image](https://user-images.githubusercontent.com/39254430/47976782-34a78700-e0ef-11e8-8c27-b95d85afb744.png)
<img width="1149" alt="capture" src="https://user-images.githubusercontent.com/39254430/47979351-bc948d80-e0fd-11e8-8132-873bf7ce7ed8.PNG">
![image](https://user-images.githubusercontent.com/39254430/47979466-46445b00-e0fe-11e8-8892-b2aa47230e60.png)
![image](https://user-images.githubusercontent.com/39254430/47979511-7d1a7100-e0fe-11e8-8fdf-7ad003737bad.png)
![image](https://user-images.githubusercontent.com/39254430/47979550-a89d5b80-e0fe-11e8-8f39-e0156fdfbac2.png)
![image](https://user-images.githubusercontent.com/39254430/47980133-295d5700-e101-11e8-8541-cc7f5bbeb435.png)
![image](https://user-images.githubusercontent.com/39254430/47980204-77725a80-e101-11e8-9d17-a7636dd6c0c5.png)
![image](https://user-images.githubusercontent.com/39254430/47980742-fd8fa080-e103-11e8-9226-521711c32355.png)

Eager Loading : 
Loading a feature module at startup, with the root module begin by creating a feature module with routing.
![image](https://user-images.githubusercontent.com/39254430/47980893-a0481f00-e104-11e8-998f-d59cd449b802.png)
![image](https://user-images.githubusercontent.com/39254430/47981156-b0143300-e105-11e8-86de-ab59a95674d6.png)
![image](https://user-images.githubusercontent.com/39254430/47981488-0afa5a00-e107-11e8-84a2-9933c80cbccd.png)

Customer based preload strategy:
![image](https://user-images.githubusercontent.com/39254430/47981592-662c4c80-e107-11e8-9580-368233ac9b23.png)
![image](https://user-images.githubusercontent.com/39254430/47981976-e7381380-e108-11e8-8624-4482d4e7f02f.png)
![image](https://user-images.githubusercontent.com/39254430/47981948-ce2f6280-e108-11e8-9a1b-6586d37ca134.png)
![image](https://user-images.githubusercontent.com/39254430/47981918-aa6c1c80-e108-11e8-9b3e-3d162ffaa7b0.png)

![image](https://user-images.githubusercontent.com/39254430/47982195-ce7c2d80-e109-11e8-8506-feff64dd5c28.png)




____________________________


## https://johnpapa.net/
## nvm install
### https://github.com/creationix/nvm/blob/master/README.md 
https://github.com/coreybutler/nvm-windows   - > this is the steps for installing nvm for windows
    npm install 6.12.1 nodejs
    
### Error Issue : Failed at the node-sass@3.13.1 postinstall script
https://github.com/codecombat/codecombat/issues/4430
use this command line to fix the above issue
    `npm install --save-dev gulp-sass@latest`
https://github.com/sass/node-sass/issues/2196
### nodejs pervious version release : https://nodejs.org/en/download/releases/
### a javascript lib tutorials: https://flaviocopes.com/tags/node/
    javascript ES6 :https://medium.freecodecamp.org/write-less-do-more-with-javascript-es6-5fd4a8e50ee2
