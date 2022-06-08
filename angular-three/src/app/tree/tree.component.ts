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
  private canvasRef!: ElementRef;

  // Tree Properties

  private rotationSpeedY: number = 0.007;
  public tree!: THREE.Group;

  // Scene Properties

  private cameraZ: number = 5;
  private fieldOfView: number = 100;
  private nearClippingPlane: number = 0.1;
  private farClippingPlane: number = 1000;

  // Attribute

  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private geometry = new THREE.BoxGeometry(1, 1, 1);

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private createScene(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      this.canvas.clientWidth / this.canvas.clientHeight,
      this.nearClippingPlane,
      this.farClippingPlane
    );
    this.camera.position.z = this.cameraZ;

    let leaveDarkMaterial = new THREE.MeshLambertMaterial({ color: 0x91e56e });
    let leaveLightMaterial = new THREE.MeshLambertMaterial({ color: 0xa2ff7a });
    let leaveDarkDarkMaterial = new THREE.MeshLambertMaterial({
      color: 0x71b356,
    });
    let stemMaterial = new THREE.MeshLambertMaterial({ color: 0x7d5a4f });

    let light1 = new THREE.DirectionalLight(0xeeffd3, 1);
    light1.position.set(0, 0, 1);
    this.scene.add(light1);

    let light2 = new THREE.DirectionalLight(0xff0000, 0.4);
    light2.position.set(1, 0, 0);
    this.scene.add(light2);

    let light3 = new THREE.DirectionalLight(0xffffff, 0.2);
    light3.position.set(0, 1, 0);
    this.scene.add(light3);

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

    this.tree = new THREE.Group();
    this.tree.add(
      leaveDark,
      leaveLight,
      squareLeave01,
      squareLeave02,
      squareLeave03,
      ground,
      stem
    );

    this.tree.rotation.y = 1;
    this.tree.rotation.x = 0.5;

    this.scene.add(this.tree);
  }

  /**
   * Animation of the tree
   *
   * @private
   * @memberof TreeComponent
   */
  private animateTree(): void {
    this.tree.rotation.y += this.rotationSpeedY;
  }

  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: TreeComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateTree();
      component.renderer.render(component.scene, component.camera);
    })();
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
  }
}
