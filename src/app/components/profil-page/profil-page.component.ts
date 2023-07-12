import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, Type } from '@angular/core';
import type { ComponentRef, OnInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { ProjetComponent } from './projet/projet.component';
import { FriendComponent } from './friend/friend.component';
import { AchievComponent } from './achiev/achiev.component';

/* @figmaId 1:2 */
@Component({
  selector: 'c-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.css'],
})
export class ProfilPageComponent implements OnInit {

  componentName: string;
  @ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer!: ViewContainerRef;
  currentComponent!: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.componentName = '';

  }
  ngOnInit(): void {
    //this.loadComponent('PostComponent');
  }

  getComponentByName(componentName: string): any | null {
    const s = document.querySelector('.active-frame');
    s?.classList.remove('active-frame');
    if (componentName === 'ProjetComponent'){
      const s = document.querySelector('.frame2');
      s?.classList.add('active-frame');
          return ProjetComponent;
      }else if(componentName ==='PostComponent'){
        const s = document.querySelector('.frame1');
      s?.classList.add('active-frame');
        return PostComponent;
      }
      else if(componentName ==='FriendComponent'){
        const s = document.querySelector('.frame3');
      s?.classList.add('active-frame');
        return FriendComponent;
      }
      else if(componentName ==='AchievComponent'){
        const s = document.querySelector('.frame4');
      s?.classList.add('active-frame');
        return AchievComponent;
      }
    return null;

  }
  loadComponent(name: string) {
    const componentToLoad = this.getComponentByName(name);
    if (!componentToLoad) {
      console.error('Please provide a valid component name');
      return;
    }


    try {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentToLoad);
      this.componentContainer.clear();
      this.currentComponent = this.componentContainer.createComponent(componentFactory);
      console.log(this.currentComponent);
    } catch (error) {
      console.error(`Failed to load component: ${componentToLoad}`);
    }
  }

}
