import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/collection.js';



Template.myJumbo.events({
	'click .js-addImg'(event){
		$("#addImgModal").modal("show");
	}
});

Template.addImg.events({
	'click .js-save'(event){
		var imgTITLE = $('#imgTITLE').val();
		var imgPath = $('#imgPath').val();
		var imgDescription = $('#imgDescription').val();
		console.log("save",imgTITLE);
		console.log("save",imgPath);
		console.log("save",imgDescription);
		$("#addImgModal").modal("hide");
	}
		'change #imgPath'(events){
			var imgPath = $('imgPath').val();
			$("js-addImgPreview").attr('src,'imgPath);
		}
});

