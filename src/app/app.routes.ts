import { Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';

export const routes: Routes = [
    { path: 'product', component: ProductComponent},
    { path: 'product/add', loadComponent: () => import('./component/addProduct/addProduct.component').then(m => m.addProductComponent) },
    { path: 'product/update/:id', loadComponent: () => import('./component/addProduct/addProduct.component').then(m => m.addProductComponent)}
];
