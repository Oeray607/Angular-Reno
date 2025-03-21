import { Routes } from '@angular/router';
import { LayoutsComponent } from './Components/layouts/layouts.component';
import { ContentComponent } from './Components/content/content.component';
import { AustralComponent } from './Components/austral/austral.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DusterComponent } from './Components/duster/duster.component';
import { CapturComponent } from './Components/captur/captur.component';
import { AustralInceleComponent } from './Components/austral-incele/austral-incele.component';
import { ClioInceleComponent } from './Components/clio-incele/clio-incele.component';
import { TaliantInceleComponent } from './Components/taliant-incele/taliant-incele.component';
import { MeganeInceleComponent } from './Components/megane-incele/megane-incele.component';
import { DusterInceleComponent } from './Components/duster-incele/duster-incele.component';
import { CapturInceleComponent } from './Components/captur-incele/captur-incele.component';
import { TalismanInceleComponent } from './Components/talisman-incele/talisman-incele.component';
import { RafaleInceleComponent } from './Components/rafale-incele/rafale-incele.component';
import { KoleosInceleComponent } from './Components/koleos-incele/koleos-incele.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        component: ContentComponent,
      },
      {
        path: 'Austral',  
        component: AustralComponent,
      },
      {
        path: 'footer',
        component: FooterComponent 
      },
      {
        path: 'Duster',
        component: DusterComponent 
      },
      {
        path: 'Captur',
        component: CapturComponent,
      },
      {
        path: 'AustralIncele',
        component: AustralInceleComponent,
      },
      {
        path: 'ClioIncele',
        component: ClioInceleComponent,
      },
      {
        path: 'TaliantIncele',
        component: TaliantInceleComponent,
      },
      {
        path: 'MeganeIncele',
        component: MeganeInceleComponent,
      },
      {
        path: 'DusterIncele',
        component: DusterInceleComponent,
      },
      {
        path: 'CapturIncele',
        component: CapturInceleComponent,
      },
      {
        path: 'TalismanIncele',
        component: TalismanInceleComponent,
      },
      {
        path: 'RafaleIncele',
        component: RafaleInceleComponent,
      },
      {
        path: 'KoleosIncele',
        component: KoleosInceleComponent,
      },
    ],
  },
];

