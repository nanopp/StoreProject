﻿//
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    //square brakets indicate the use of attribute selector
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click')
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
