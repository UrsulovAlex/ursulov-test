import { TestBed } from '@angular/core/testing';

import { TemplatePageTitleStrateguService } from './template-page-title-strategu.service';

describe('TemplatePageTitleStrateguService', () => {
  let service: TemplatePageTitleStrateguService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplatePageTitleStrateguService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
