import { Component, OnInit, OnDestroy } from '@angular/core';
import { AudioRecordingService } from '../service/audio-recording.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
  providers: [AudioRecordingService]
})
export class Test2Component implements OnInit, OnDestroy {

  isRecording = false;
  recordedTime;
  blobUrl;

  constructor(private audioRecordingService: AudioRecordingService,
     private sanitizer: DomSanitizer,
     private router: Router) { 
    
    this.audioRecordingService.recordingFailed().subscribe(() => {
      this.isRecording = false;
    });

    this.audioRecordingService.getRecordedTime().subscribe((time) => {
      this.recordedTime = time;
    });

    this.audioRecordingService.getRecordedBlob().subscribe((data) => {
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
    });
  }


  startRecording() {
    if (!this.isRecording) {
      this.isRecording = true;
      this.audioRecordingService.startRecording();
    }
  }

  abortRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }

  stopRecording() {
    if (this.isRecording) {
      this.audioRecordingService.stopRecording();
      this.isRecording = false;
      console.log(this.audioRecordingService.getRecordedBlob);
    }
  }

  clearRecordedData() {
    this.blobUrl = null;
  }

  newUserClicked() {
    this.router.navigate(['new-user']);
  }

  loginClicked() {
    this.audioRecordingService.getRecordedBlob().subscribe(blob => {
      console.log(blob);
    })
    this.router.navigate(['first-page']);
  }

  ngOnDestroy(): void {
    this.abortRecording();
}

  ngOnInit(): void {
  }

}
