//let myContact =  new Contact(42, 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');
//console.log('My hero is called ' + myContact.name); // "My hero is called SkyDog"
import { Component, ViewChild }  from '@angular/core';
import { Contact }    from './contact';

@Component({
	selector: 'contact-form',
	templateUrl: './contact-form.component.html'
})
export class ContactFormComponent 
{
	@ViewChild('heroForm') form;
	model = new Contact(18, '', '', '', '');
	submitted = false;
    email_reg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
	err = 0;
	
	public brdata = 
	[	
		{
			'text': 'contact',
			'url': ''
		}
	];
	
	validEmail()
	{
		if(!this.email_reg.test(this.model.mail))
		{
			this.form.controls['mail'].setErrors({'incorrect': true});
			this.err++;
		}
	}
	
	onSubmit() 
	{ 
		this.err = 0;
		this.validEmail();
		if(this.err == 0){ this.submitted = true; }
		//console.log(JSON.stringify(this.model));
	}
}