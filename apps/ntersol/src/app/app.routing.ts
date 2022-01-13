import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export interface NtsRouteData {
  header: {
    title: string;
    description: string;
    backgroundImage: string;
  };
}

export interface NtsRoutes extends Routes {
  data?: NtsRouteData;
}

export const ROUTES: NtsRoutes = [
  {
    path: 'services',
    loadChildren: () =>
      import('./services/services.module').then((m) => m.ServicesPageModule),
    data: {
      header: {
        title: 'Services',
        description:
          "We'll help you match the right set of services to your business needs",
        backgroundImage: 'assets/images/scott-graham.jpg',
      },
    },
  },
  {
    path: 'expertise',
    loadChildren: () =>
      import('./expertise/expertise.module').then((m) => m.ExpertisePageModule),
    data: {
      header: {
        title: 'Industries',
        description:
          "Leverage NTERSOL's years of experience across multiple industries with solutions to your biggest challenges.",
        backgroundImage: 'assets/images/you-x-ventures.jpg',
      },
    },
  },
  {
    path: 'success-stories',
    loadChildren: () =>
      import('./success-stories/success-stories.module').then(
        (m) => m.SuccessStoriesPageModule
      ),
    data: {
      header: {
        title: 'Success Stories',
        description:
          "A few our valued clients' success stories across various industries.",
        backgroundImage: 'assets/images/razvan-chisu.jpg',
      },
    },
  },
  {
    path: 'careers',
    loadChildren: () =>
      import('./careers/careers.module').then((m) => m.CareersPageModule),
    data: {
      header: {
        title: 'Work with us',
        description:
          'We are always on the lookout for talented individuals to make a difference',
        backgroundImage: 'assets/images/razvan-chisu.jpg',
      },
    },
  },
  {
    path: 'company',
    loadChildren: () =>
      import('./company/company.module').then((m) => m.CompanyPageModule),
    data: {
      header: {
        title: 'Company',
        description: "We're passionate about delivering value.",
        backgroundImage: 'assets/images/sean-pollock.jpg',
      },
    },
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactPageModule),
    data: {
      header: {
        title: 'Contact Us',
        description: 'Ways you can reach us',
        backgroundImage: 'assets/images/sean-pollock.jpg',
      },
    },
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./post/post.module').then((m) => m.PostPageModule),
    data: {
      header: {
        title: 'Blog',
        description: 'Insights from the NTERSOL team',
        backgroundImage: 'assets/images/expanding-horizon.jpg',
      },
    },
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsPageModule),
    data: {
      header: {
        title: 'Blog',
        description: 'Insights from the NTERSOL team',
        backgroundImage: 'assets/images/expanding-horizon.jpg',
      },
    },
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomePage,
    data: {
      header: {
        title: '',
        description: '',
        backgroundImage: '',
      },
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class RoutingModule {}
