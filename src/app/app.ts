import { AfterViewInit, Component, DOCUMENT, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Viewer } from 'molstar/lib/apps/viewer/app';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly title = signal('angular-molstar-repro');
  protected v!: Viewer;
  @ViewChild('molstarViewer', { static: true, read: ElementRef }) protected element!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    void this.initMolstarViewer();
  }

  protected async initMolstarViewer() {
    this.v = await Viewer.create(this.element!.nativeElement);
  }
}
