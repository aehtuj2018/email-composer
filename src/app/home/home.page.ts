import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private emailComposer: EmailComposer) { }

  composeEmail() {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
      }
     });

   const email = {
    to: 'testto@test.ca',
    subject: 'Test Email',
    body: 'Hi This is Test Email Body',
   
  };
  
  // Send a text message using default options
this.emailComposer.open(email);

}
