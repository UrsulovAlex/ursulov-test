import { ApplicationConfig } from '@angular/core';
import { TitleStrategy, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TemplatePageTitleStrateguService } from './services/template-page-title-strategu.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  {provide: TitleStrategy, useClass: TemplatePageTitleStrateguService},
  ]
};
