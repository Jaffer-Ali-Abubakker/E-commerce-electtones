import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotContainerComponent } from './chatbot-container.component';

describe('ChatbotContainerComponent', () => {
  let component: ChatbotContainerComponent;
  let fixture: ComponentFixture<ChatbotContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatbotContainerComponent]
    });
    fixture = TestBed.createComponent(ChatbotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
