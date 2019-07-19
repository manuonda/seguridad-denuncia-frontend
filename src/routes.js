
// routes.js

import Home from         './views/Home.vue';
import Denuncia from     './views/Denuncia.vue';
import Dependencia from  './views/Dependencia.vue';
import Comisaria  from './views/Comisaria.vue';
import Seguimiento  from './views/Seguimiento.vue';
import DenunciaGeneral from './views/denuncia/DenunciaGeneral.vue';

export const routes = [
    { path : ''            ,  redirect : 'denuncia'},
    { path : '/denuncia'   ,  component : Home  ,
      children : [
        { path: '' , component : Denuncia},
        { path : 'general', component : DenunciaGeneral }
      ]
    },
    { path : '/comisaria'  , component :   Comisaria},
    { path : '*' , redirect : 'denuncia'}
];

