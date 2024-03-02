import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotBaseComponent } from './chatbot-base.component';

describe('ChatbotBaseComponent', () => {
  let component: ChatbotBaseComponent;
  let fixture: ComponentFixture<ChatbotBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatbotBaseComponent]
    });
    fixture = TestBed.createComponent(ChatbotBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
