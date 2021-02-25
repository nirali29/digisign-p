import { Component, OnInit } from '@angular/core';
declare var $: any;
import { VoiceRecognitionService } from '../service/voice-recognition.service'

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css'],
  providers: [VoiceRecognitionService]
})
export class SpeechToTextComponent implements OnInit {

  constructor(public service : VoiceRecognitionService) { 
    this.service.init();
  }

  startService(){
    this.service.start()
  }

  stopService(){
    this.service.stop()
  }
  

  ngOnInit(): void {
  }

}
