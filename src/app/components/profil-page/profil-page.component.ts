import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, Type } from '@angular/core';
import type { ComponentRef, OnInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { ProjetComponent } from './projet/projet.component';

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
  ngOnInit(): void {}

  getComponentByName(componentName: string): any | null {

    if (componentName === 'ProjetComponent'){
          return ProjetComponent;
      }
    return PostComponent;

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
