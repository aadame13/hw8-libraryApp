import Controller from '@ember/controller';
import {
  match,
  not,
  notEmpty,
  and
} from '@ember/object/computed';

export default Controller.extend({
  responseMessage: '',
  emailAddress: '',
  textMessage: '',

  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isValidText: notEmpty('textMessage'),
  isValid: and('isValidEmail', 'isValidText'),
  isDisabled: not('isValid'),

  actions: {
    send() {
      alert(`Sending text message (${this.get('textMessage')}) from email (${this.get('emailAddress')}) `);
      this.set('responseMessage', `Thank you! We just sent your text (${this.get('textMessage')}) from email (${this.get('emailAddress')})`);
      this.set('emailAddress', '');
    }
  }

});
