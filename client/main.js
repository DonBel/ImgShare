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
		imagesDB.insert({"title":imgTITLE, "path":imgPath, "description":imgDescription, "createdOn":Date()});
	},
	'input #imgPath'(){
		var imgPath = $('#imgPath').val();
		$(".js-addImgPreview").attr('src',imgPath);
	},
	'click .js-cancelAdd'(){
		$("#imgTitle").val('');
		$("#imgPath").val('');
		$('#imgDescription').val('');
		$("#addImgPreview").attr('src','Shichibukai_Infobox.png');
		$("#addImgModal").modal("hide");
	},

});

Template.mainBody.events({
	'click .js-del-image'(){
		var ImgId = this._id;
		$('#'+ImgId).fadeOut('slow', function(){
			imagesDB.remove({_id:ImgId});		
		});
	}
});

Template.mainBody.helpers({
	allImages(){
		return imagesDB.find();
	}
});
