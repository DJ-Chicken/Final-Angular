import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-drop',
  templateUrl: './navbar-drop.component.html',
  styleUrls: ['./navbar-drop.component.scss'],
})
export class NavbarDropComponent {
  @Input() title: string = '';
  @Input() menuItems: string[] = [];

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    console.log('toggleMenu');
  }

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onDocumentClick(targetElement: HTMLElement): void {
    const clickedInside = this.el.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }
}
