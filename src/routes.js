
// routes.js

import Home from         './views/Home.vue';
import Denuncia from     './views/Denuncia.vue';
import Dependencia from  './views/Dependencia.vue';
import Comisaria  from './views/Comisaria.vue';
import Seguimiento  from './views/Seguimiento.vue';

export const routes = [
    { path : ''            ,  component :  Denuncia},
    { path : '/dependencia' , component :  Dependencia},
    { path : '/comisaria'  , component :   Comisaria},
    { path : '/seguimiento' , component :  Seguimiento }
];

