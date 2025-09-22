import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { About } from './about/about';
import { Experience } from './experience/experience';
import { Education } from './education/education';
import { Skills } from './skills/skills';
import { Interests } from './interests/interests';
import { Awards } from './awards/awards';

export const routes: Routes = [

    {
        path: '',
        component: Layout,
        children: [
            { 
                path: '', 
                component: Home,
                title: 'Inicio'
             },
                 { 
                 path: 'about',
                 component: About,
                 title: 'Acerca de'
             },
             {
                 path: 'experience',
                 component: Experience,
                 title: 'Experiencia'
             },
             {
                 path: 'education',
                 component: Education,
                 title: 'Educación'
             },
             {
                 path: 'skills',
                 component: Skills,
                 title: 'Habilidades'
             },
             {
                 path: 'interests',
                 component: Interests,
                 title: 'Intereses'
             },
             {
                 path: 'awards',
                 component: Awards,
                 title: 'Premios'
             },
             

        ]
    }
];
