import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements AfterViewInit {
  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  // Tree Properties

  @Input() public rotationSpeedX: number = 0.5;
  @Input() public size: number = 200;

  // Scene Properties

  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;

  // Attribute

  private camera!: THREE.PerspectiveCamera;
  private get canva(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  private renderer!: THREE.WebGL1Renderer;
  private scene!: THREE.Scene;

  ngAfterViewInit(): void {}
}
