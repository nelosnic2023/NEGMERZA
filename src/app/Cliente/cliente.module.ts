import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core' 
import { ClienteComponent } from './AdministrarCliente/cliente.component';

@NgModule({
    declarations: [
        ClienteComponent
    ],
    exports: [
        ClienteComponent
    ],
    imports:[
        CommonModule
    ]
})

export class ClienteModule {}