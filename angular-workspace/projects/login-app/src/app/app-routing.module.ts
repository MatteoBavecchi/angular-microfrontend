import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'login/home', component: HomeComponent },
            { path: 'login/form', component: LoginComponent }
        ], { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }