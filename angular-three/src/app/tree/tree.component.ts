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
export class TreeComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  //* Cube Properties

  @Input() public rotationSpeedY: number = 0.007;

  @Input() public size: number = 200;

  @Input() public texture: string = '/assets/texture.jpg';

  //* Stage Properties

  @Input() public cameraZ: number = 400;

  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPlane: number = 1;

  @Input('farClipping') public farClippingPlane: number = 1000;

  //? Helper Properties (Private Properties);

  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private geometry = new THREE.BoxGeometry(1, 1, 1);

  private tree: THREE.Group = new THREE.Group();

  private renderer!: THREE.WebGLRenderer;

  private scene!: THREE.Scene;

  /**
   *Animate the cube
   *
   * @private
   * @memberof CubeComponent
   */
  private animateCube() {
    this.tree.rotation.y += this.rotationSpeedY;
  }

  /**
   * Create the scene
   *
   * @private
   * @memberof TreeComponent
   */
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    let leaveDarkMaterial = new THREE.MeshLambertMaterial({ color: 0x91e56e });

    let leaveLightMaterial = new THREE.MeshLambertMaterial({ color: 0xa2ff7a });

    let leaveDarkDarkMaterial = new THREE.MeshLambertMaterial({
      color: 0x71b356,
    });

    let stemMaterial = new THREE.MeshLambertMaterial({ color: 0x7d5a4f });

    let lightOne = new THREE.DirectionalLight(0xeeffd3, 1);
    lightOne.position.set(0, 0, 1);
    this.scene.add(lightOne);

    let lightSecond = new THREE.DirectionalLight(0xff0000, 0.4);
    lightSecond.position.set(1, 0, 0);
    this.scene.add(lightSecond);

    let lightThird = new THREE.DirectionalLight(0xffffff, 0.2);
    lightThird.position.set(0, 1, 0);
    this.scene.add(lightThird);

    let stem = new THREE.Mesh(this.geometry, stemMaterial);
    stem.position.set(0, 0, 0);
    stem.scale.set(0.3, 1.5, 0.3);

    let squareLeave01 = new THREE.Mesh(this.geometry, leaveDarkMaterial);
    squareLeave01.position.set(0.5, 1.6, 0.5);
    squareLeave01.scale.set(0.8, 0.8, 0.8);

    let squareLeave02 = new THREE.Mesh(this.geometry, leaveDarkMaterial);
    squareLeave02.position.set(-0.4, 1.3, -0.4);
    squareLeave02.scale.set(0.7, 0.7, 0.7);

    let squareLeave03 = new THREE.Mesh(this.geometry, leaveDarkMaterial);
    squareLeave03.position.set(0.4, 1.7, -0.5);
    squareLeave03.scale.set(0.7, 0.7, 0.7);

    let leaveDark = new THREE.Mesh(this.geometry, leaveDarkMaterial);
    leaveDark.position.set(0, 1.2, 0);
    leaveDark.scale.set(1, 2, 1);

    let leaveLight = new THREE.Mesh(this.geometry, leaveLightMaterial);
    leaveLight.position.set(0, 1.2, 0);
    leaveLight.scale.set(1.1, 0.5, 1.1);

    let ground = new THREE.Mesh(this.geometry, leaveDarkDarkMaterial);
    ground.position.set(0, -1, 0);
    ground.scale.set(2.4, 0.8, 2.4);



    this.tree.add(leaveDark);
    this.tree.add(leaveLight);
    this.tree.add(squareLeave01);
    this.tree.add(squareLeave02);
    this.tree.add(squareLeave03);
    this.tree.add(ground);
    this.tree.add(stem);

    this.tree.rotation.y = 1;
    this.tree.rotation.x = 0.5;

    this.scene.add(this.tree);

    //*Camera
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      this.canvas.clientWidth / this.canvas.clientHeight,
      this.nearClippingPlane,
      this.farClippingPlane
    );
    this.camera.position.z = this.cameraZ;
  }

  /**
   * RenderingLoop
   *
   * @private
   * @memberof TreeComponent
   */
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: TreeComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    })();
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
  }
}
