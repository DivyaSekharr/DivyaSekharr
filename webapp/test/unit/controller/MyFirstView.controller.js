/*global QUnit*/

sap.ui.define([
	"uiMyFirstProject./training/controller/MyFirstView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MyFirstView Controller");

	QUnit.test("I should test the MyFirstView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
