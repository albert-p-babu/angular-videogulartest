import { Component, Input } from '@angular/core';

@Component({
  selector: 'uplife',
  template: `<h1>{{name}}</h1>
      <vg-player>
        <video [vgMedia]="media" #media id="singleVideo" preload="auto" controls>
            <source src="https://firebasestorage.googleapis.com/v0/b/uplife-83c06.appspot.com/o/videoplayback.mp4?alt=media&token=e227d222-78bb-4e53-9051-c29878509238" type="video/mp4">
        </video>
    </vg-player>
`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
