import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { AuthComponent } from './components/auth/auth.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AlertComponent } from './components/alert/alert.component';
import { SettingComponent } from './components/setting/setting.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DeleteAccountComponent } from './components/delete-account/delete-account.component';
import { MyBlogsComponent } from './components/my-blogs/my-blogs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgetPasswordComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      {
        path: 'setting',
        component: SettingComponent,
        children: [
          { path: 'edit-profile', component: EditProfileComponent },
          { path: 'delete-account', component: DeleteAccountComponent },
        ],
      },
      { path: 'my-blogs', component: MyBlogsComponent },
    ],
  },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'add-blog', component: AddBlogComponent },
  { path: 'edit-blog/:id', component: EditBlogComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComps = [
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  DashboardComponent,
  AddBlogComponent,
  AuthComponent,
  NotFoundComponent,
  ForgetPasswordComponent,
  BlogsComponent,
  BlogComponent,
  EditBlogComponent,
  CommentsComponent,
  AlertComponent,
  SettingComponent,
  EditProfileComponent,
  ProfileComponent,
  MyBlogsComponent,
  DeleteAccountComponent,
];
