(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.CircleBigWin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1CA429").s().p("A7mboQrdrdAAwLQAAwKLdrdQLbrcQLAAQQLAALdLcQLcLdAAQKQAAQLrcLdQrdLcwLAAQwLAArbrcg");
	this.shape.setTransform(250,250);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5B620").s().p("A7mboQrdrdAAwLQAAwKLdrdQLbrcQLAAQQLAALdLcQLcLdAAQKQAAQLrcLdQrdLcwLAAQwLAArbrcg");
	this.shape_1.setTransform(250,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},116).to({state:[{t:this.shape_1}]},1).wait(129));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1CA429").s().p("A7mboQrdrdAAwLQAAwKLdrdQLbrcQLAAQQLAALdLcQLcLdAAQKQAAQLrcLdQrdLcwLAAQwLAArbrcg");
	this.shape.setTransform(250,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(246));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


// stage content:
(lib.LERwinnings = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Big-Win
	this.instance = new lib.CircleBigWin();
	this.instance.parent = this;
	this.instance.setTransform(400,400,0.1,0.1,0,0,0,250.6,250.5);

	this.instance_1 = new lib.Circle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(400,400,0.1,0.1,0,0,0,250.5,250.5);
	this.instance_1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},91).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance}]},90).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:250.3,regY:250.3,scaleX:1.1,scaleY:1.1},8).to({regX:250,regY:250,scaleX:1,scaleY:1},6).wait(91).to({regX:250.3,scaleX:0.38,scaleY:0.9,y:400.1},6,cjs.Ease.get(-0.5)).to({regX:250.2,scaleX:0.03,scaleY:1},6).to({regX:250.1,regY:250.1,scaleX:1.1,scaleY:1.1,x:400.1},6,cjs.Ease.get(0.5)).to({regX:250,regY:250,scaleX:1,scaleY:1,x:400,y:400},12,cjs.Ease.get(1)).wait(90).to({regX:250.1,regY:250.1,scaleX:1.1,scaleY:1.1,x:400.1,y:400.1},6,cjs.Ease.get(0.5)).to({regX:250.5,regY:250.5,scaleX:0.1,scaleY:0.1,x:400,y:400},9,cjs.Ease.get(0.5)).to({_off:true,visible:false},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(775,775,50,50);
// library properties:
lib.properties = {
	width: 800,
	height: 800,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;