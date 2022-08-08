import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent {
  @ViewChild('photo')
  private photo!: ElementRef;

  @HostListener('mouseenter', ['$event'])
  public photoMouseEnter(event: any) {
    this.setTransition(event);
  }

  @HostListener('mousemove', ['$event'])
  public photoMouseMove(event: {
    currentTarget: any;
    clientX: number;
    clientY: number;
  }) {
    const tiltEffectSettings = {
      max: 10, // max tilt rotation (degrees (deg))
      perspective: 2000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
      scale: 1.0, // transform scale - 2 = 200%, 1.5 = 150%, etc..
      speed: 300, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
      easing: 'cubic-bezier(.03,.98,.52,.99)', // easing (transition-timing-function) of the enter/exit transition
    };

    const photo = event.currentTarget;
    const photoWidth = photo.offsetWidth;
    const photoHeight = photo.offsetHeight;
    const centerX = photo.offsetLeft + photoWidth / 2;
    const centerY = photo.offsetTop + photoHeight / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateXUncapped =
      (tiltEffectSettings.max * mouseY) / (photoHeight / 2);
    const rotateYUncapped =
      (-1 * tiltEffectSettings.max * mouseX) / (photoWidth / 2);
    const rotateX =
      rotateXUncapped < -tiltEffectSettings.max
        ? -tiltEffectSettings.max
        : rotateXUncapped > tiltEffectSettings.max
        ? tiltEffectSettings.max
        : rotateXUncapped;
    const rotateY =
      rotateYUncapped < -tiltEffectSettings.max
        ? -tiltEffectSettings.max
        : rotateYUncapped > tiltEffectSettings.max
        ? tiltEffectSettings.max
        : rotateYUncapped;

    photo.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)
                            scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
  }

  @HostListener('mouseleave', ['$event'])
  public photoMouseLeave(event: { currentTarget: any }) {
    event.currentTarget.style.transform = `perspective(10000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    this.setTransition(event);
  }

  private setTransition(event: { currentTarget: any }) {
    const photo = event.currentTarget;
    clearTimeout(photo.transitionTimeoutId);
    photo.style.transition = `transform 400ms cubic-bezier(.03,.98,.52,.99)`;
    photo.transitionTimeoutId = setTimeout(() => {
      photo.style.transition = '';
    }, 400);
  }

  constructor() {}
}
