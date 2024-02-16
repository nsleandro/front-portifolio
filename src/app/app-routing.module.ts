import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'sobre',
    component: AboutComponent,
  },
  {
    path: 'habilidades',
    component: SkillComponent,
  },
  {
    path: 'trabalhos',
    component: WorkComponent,
  },
  {
    path: 'contatos',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
