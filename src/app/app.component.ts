import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '../../node_modules/@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '../../node_modules/angularfire2/firestore';
import { Observable } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  msgCollection: AngularFirestoreCollection<String>
  msgs : Observable<String>
  msgSent: boolean = false;
  constructor(private fb: FormBuilder, private afs: AngularFirestore){
  this.createForm();
  this.msgCollection = this.afs.collection('anons');
  }
  messageForm = new FormGroup({
    anonMsg: new FormControl()
  })
  sendMessage(){
    console.log(111111);
    
    this.msgCollection.add(this.messageForm.value);
    this.msgSent = true;
    setTimeout(() => {
      this.msgSent = false;
    }, 3000);
  }
  
  createForm(){
    this.messageForm = this.fb.group({
      anonMsg:['', Validators.required]
    });
  }
}
