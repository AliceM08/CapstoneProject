import { AuthGuardService } from './services/auth-guard.service';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'cart/:id', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
