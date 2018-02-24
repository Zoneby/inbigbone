(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 750,
	height: 1220,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/cv/cm_line.png", id:"cm_line"},
		{src:"images/cv/s1711s.png", id:"s1711s"},
		{src:"images/cv/s1712s.png", id:"s1712s"},
		{src:"images/cv/s1722s.png", id:"s1722s"},
		{src:"images/cv/s1724s.png", id:"s1724s"},
		{src:"images/cv/s1725s.png", id:"s1725s"},
		{src:"images/cv/s1726s.png", id:"s1726s"},
		{src:"images/cv/s1727s.png", id:"s1727s"},
		{src:"images/cv/s1728s.png", id:"s1728s"},
		{src:"images/cv/s1731s.png", id:"s1731s"},
		{src:"images/cv/s1732s.png", id:"s1732s"},
		{src:"images/cv/s1733s.png", id:"s1733s"},
		{src:"images/cv/s1734s.png", id:"s1734s"},
		{src:"images/cv/s17logo.png", id:"s17logo"},
		{src:"images/cv/s17_dbtext.png", id:"s17_dbtext"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.cm_line = function() {
	this.initialize(img.cm_line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1862);


(lib.s1711s = function() {
	this.initialize(img.s1711s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,72);


(lib.s1712s = function() {
	this.initialize(img.s1712s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,210);


(lib.s1722s = function() {
	this.initialize(img.s1722s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,676,311);


(lib.s1724s = function() {
	this.initialize(img.s1724s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,326,326);


(lib.s1725s = function() {
	this.initialize(img.s1725s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,210);


(lib.s1726s = function() {
	this.initialize(img.s1726s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,210);


(lib.s1727s = function() {
	this.initialize(img.s1727s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,571,629);


(lib.s1728s = function() {
	this.initialize(img.s1728s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,571,629);


(lib.s1731s = function() {
	this.initialize(img.s1731s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,372);


(lib.s1732s = function() {
	this.initialize(img.s1732s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,772,174);


(lib.s1733s = function() {
	this.initialize(img.s1733s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2215,2170);


(lib.s1734s = function() {
	this.initialize(img.s1734s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,210);


(lib.s17logo = function() {
	this.initialize(img.s17logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,407,221);


(lib.s17_dbtext = function() {
	this.initialize(img.s17_dbtext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,574,208);


(lib.s17322 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.s17321 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.s17320 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.s17318 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1731s();
	this.instance.setTransform(0,49.1,0.793,0.793,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.4,781.7,353.5);


(lib.s17317 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("AhiEEQgDgEAEgCQA6geAkhBQAYgwAVhQIAjiHQANg2AAgZQABgtgdgaQgEgDAEgDQADgEAEADQAqAmgPBPQgHAjgNAzIgWBTQgWBWgbAyQgkBGg9AfIgCABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBg");
	this.shape.setTransform(20.3,56.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("AgMAvQgFgBABgFQAJgqAOgqQACgEAFABQAFACgCAEQgPAlgJAvQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgCAAg");
	this.shape_1.setTransform(28,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#041404").s().p("AgWAYQgDgDADgEQAFgEADgJIAEgNQAGgNAJgDQAZgFgGAxQgBAFgFAAQgFAAABgFQACgQgCgJQgCgLgGADQgDABgDAFQgCAEgEAMQgDALgGAGIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_2.setTransform(34.4,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#041404").s().p("AAPAbQAEgzgNAEQgEACgCAHIgGAKQgFAHgEANQgBAFgFgBQgFgCABgEQAHgTALgPIAHgKQAEgFAGABQAOACACAYQABAHgCAZQAAAFgFAAQgFAAAAgFg");
	this.shape_3.setTransform(28.8,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#041404").s().p("AAJAfQgFgCABgEQAJgbgFgMQgDgIgGAEQgCADgEAHQgFAJABAOQAAAFgFAAQgFAAAAgFQgBgPAIgPQAJgUANAGQAVAJgPAvQgBAEgEAAIgBAAg");
	this.shape_4.setTransform(23.9,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#041404").s().p("AAMAPQgDgFAAgHIAAgFQgBgDgDgBQgIgDgIATQgBAEgFgBQgFgBACgFQAIgXAPAAQAJAAAFAHQACADAAAGQAAAHACADQACAEgEACIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_5.setTransform(19.2,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#041404").s().p("AAOAZQgTgSgQgZQgCgEAEgDQAFgCACAEQAMAWAVATQAEADgEAEQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_6.setTransform(17.2,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#041404").s().p("ABXAiIiEgcQgZgFgJgCQgQgKADgSQABgFAFABQAFABgBAFQgDAQAoAKQAWAEAdAEIBUARQAEABgBAFQgBAEgEAAIgBAAg");
	this.shape_7.setTransform(15.4,13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#041404").s().p("AB1AbQh1geh1gOQgFAAAAgFQAAgFAFAAQB3APB2AeQAEABgBAFQgBAEgDAAIgCgBg");
	this.shape_8.setTransform(26.7,7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#041404").s().p("AB3AmQhWgMh2gNQgNAAgIgBQgOgCgCgJQgDgIANgNQAKgKAMgHQAEgCADAEQACAFgEACQglAUAXAKQAEACAKABIAPAAIA+AHIB/AQQAFABAAAFQAAAEgEAAIgBAAg");
	this.shape_9.setTransform(23.1,8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#041404").s().p("AAJA1QhhgNhbgTIgDgCIAAgEQAKgZAJgNQAOgVAUgGQAQgFAiAFIBNAPIBOAOQAwAIAgAIQAQAFAIAKQAJAOgOAMQgDADgEgEQgDgDADgDQAPgNgegLQgNgEgYgDIiHgaIgwgLQgdgFgTACQgWACgPAUQgJALgKAWQBjAUBRAKQAFABAAAFQAAAEgEAAIgBAAg");
	this.shape_10.setTransform(25,8.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#041404").s().p("AgtAvQgFAAAAgFQAAgFAFAAQArADAigUQATgLAOgMIAHgIQAFgFAAgDQgQgVgKANIgGAFQgQAPgdgEQghgFgLACQgXACgQASQgDAEgDgEQgEgEADgCQATgWAZgEQALgBARADQATAEAGAAQANAAAKgFIAUgPQAHgFAGgBQARgDAIALQAQAUg0AlQgnAdgtAAIgNgBg");
	this.shape_11.setTransform(33.4,15.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#041404").s().p("AgKAmQgHgHADgJQABgFAFABIACABQAHgZAGgcQABgFAEABQAFABgBAFQgIAkgKAgQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAIgCAAIgDgBg");
	this.shape_12.setTransform(17.1,22.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#041404").s().p("AA+AhQgFgCACgEQAEgJgDgJQgoAHgjgNQgSgEgIgFQgGgEgEgFIgKASQgCAEgEgDQgFgCACgDIAOgdQACgDAEABQADABABAEQABAQAvALQAdAEAfgEQAFAAABACQAFANgEAOQgBAEgDAAIgDAAg");
	this.shape_13.setTransform(20.6,27.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#041404").s().p("AgCAZQgmgKgdggQgDgEADgEQADgDAEADQAbAfAhAJQAmAKAcgcQACgDAEADQADADgCACQgXAZgeAAQgLAAgJgCg");
	this.shape_14.setTransform(20.5,29.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#041404").s().p("AgvEYQgEgPgBgUIgCgkQgCgwACgZQADgrAShcQAah8A1icQACgFAEACQAFABgBAEQg0CQgYB6IgOBGQgIApgCAgQgCAgACAkIABAnQABAWAEAQQABAFgEABIgCABQgEAAAAgEg");
	this.shape_15.setTransform(5.6,58.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F4D865").s().p("ABKAkIi1gUQgXgCgDgMQgDgHANgPQAOgOAKABIgHgBQgCgCAEAAQANgCAYAFIC6AmQAPAEAAAIQAAAEgFAFQgJAJgQACIgIABIgWgCg");
	this.shape_16.setTransform(25.5,8.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9898A4").s().p("AgHA9IgKgDQg1gBhCgUIgYgHQgPgGgCgIQgBgEAEgKIAHgMQALgaAqgYQAnAGA5AMQA2AMAfAFQBAAKAeAIQAHACAGAHQAGAKgDAFQgBACgHAAIgKABIgkAMQgVAHgQABIgngCQgYAAgNAJIgFAHQgDAGgCABIgBAAIgGAAg");
	this.shape_17.setTransform(24.8,9.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#041404").s().p("AgPASQgEgDAEgDQADgDAJgOQAFgLAJgDQAFgBABAFQACAFgFABQgGACgHAKIgJAQIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_18.setTransform(12.1,28.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEF570").s().p("AglAyQAYhXAUhDQAHgXALgHQAIgFAJADQAKADABAIIACACQgaAagTAqQgLAbgRAxIgkB2QABghAQg4g");
	this.shape_19.setTransform(9.4,41.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#412E73").s().p("AhpEqQgOgigEgSQgJgjAHhCQAMhwAYhsQAXhqAhhFQATgnAUgNQARAfAmAJQAlAKAfgSQgLAcgnAfQgzAogLANQgRAUgKAfQgHATgLAmIgSBHQgJApgDAhQgCAcAGAQQAKAZAUAFQAUAGAbgTQAhgXAZgkQADAkgcAkQgRAVgoAeQggAVgJARQgFAJAAALQAAALAFAJQgOAFgQAAQgQAAgRgFg");
	this.shape_20.setTransform(13.7,58.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEF570").s().p("AAiAbQgmgNgUgFIgYgEQACAAACgCQADgDAAgFQADgNAJgJQAGgHAFADQAEACABAHQACARgGAOIAQAGQABgWASgRQAIgIAGADQADACACAGQACAIAAAIIAAARQADAMAJABQAKABAIgQQAHgPAGgDIAFgBQAFABACAIQABARgCAOQgIACgKAAQgSAAgXgGgAg6AEQgXgDgMgBIgBgCQABgLAJgHQAHgFAFABQAGACADAKQAEAMACABQACADAEABIgHgBg");
	this.shape_21.setTransform(27,4.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E9CAB2").s().p("AgUBSIg6gGQgkgCgMgQIACgBIAOgyQAEgJgBgIQgCgHgNgOQgMgMADgLIBVASQAJgWAbgGQARgDAdAFIASAEQAKABAIgCQAIgDAOgNQAHgGAOAAQAHAAAFAFQAGADAAAGQABAHgIAKQgWAZgfANQggAMgggBIgEABQgDAAgBAFQgDAngNAhQgBAEgCABg");
	this.shape_22.setTransform(28.9,20.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4D865").s().p("AAFAfQgUgCgagNQgUgMgCgKIgBAAQABgMAHgKQABAAAAgBQABgBAAAAQABAAAAgBQABAAAAAAQACAAABALQATAKAbAEQAMABAiAAQATABADAGQACAFgEAGQgDAFgGAEQgRAKgXAAIgJgBg");
	this.shape_23.setTransform(20.9,28.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5663B4").s().p("Ah4E+Qgjh7AKg+QANhQAQhRQAShcAJgZQAUg8APgmQAbhHARgHIAMASQARASAVAEQAYAFAZgEQAWgEAHgHQAGgGAJATQAHARAGAbQAFAXgMA/QgLA8gVBFIghBmIgCAFQgCAHACALQAEASACAXIgCA2QhWB5hTAAQgOAAgNgEg");
	this.shape_24.setTransform(14.9,59.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.4,91.8);


(lib.s17316 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("ABMDBQhIichYjiQgCgFAFgBQAFgBACAEQBcDrBCCRQADAEgFADIgDABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBg");
	this.shape.setTransform(15.7,61.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("AAVDEQgpjCgKjEQAAgFAFAAQAFAAAAAFQAKDCAoDBQABAFgEABIgCABQgDAAgBgEg");
	this.shape_1.setTransform(24,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#041404").s().p("AgtBzQgEgDACgEIA2hoQAUgjAGgSQAKgggJgcQgCgEAFgCQAFgBABAFQAPAqgeA5IhCB9QAAABgBABQAAAAgBAAQAAABAAAAQgBAAAAAAIgEgBg");
	this.shape_2.setTransform(17.6,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#041404").s().p("AA7CrQgohFgghhQgPgpgniCQgCgFAFgBQAFgCABAFQApCGAOAkQAfBhAnBEQADAEgEADIgDABQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_3.setTransform(6.9,34.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#041404").s().p("AAuAvQgig8g/gZQgEgCABgFQABgFAFACQBDAbAjA/QADAEgFACIgDABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_4.setTransform(28.9,31.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEF570").s().p("AAVAtIgIgCIgFgGQgRgkgkgOIgHgEIgCgFQgGgTACgSQAWAJAjAYIASAPQALAJAGAIQAGAJACALIAIAJQAKALgBAOQgQgOgWgBg");
	this.shape_5.setTransform(29.6,32.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#412E73").s().p("AAhDUQgTgXgXgzQgdg7gMgfQgVgxgGgrQgHg4gHgaQgEgRgJgWQAjAKAcgKQAEAGAHAEQANAHARgIQAOgIANgQQAagfAUgpQgCApggBKQgiBMgDAmQgCAiAMArQAIAbAUAyQAVAuAIARQASAjASAYQgpgEgfglg");
	this.shape_6.setTransform(12.9,36.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5663B4").s().p("AgfDpIhgkBQgRgtgQg6QBfAXBliMIABAUIARCIIAWAHQAaAKARASQAaAcAMAZIADABQADBOgJA2QgOBMglAUQgdAQgmAAQgfAAgkgMg");
	this.shape_7.setTransform(18.2,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.6,80.9);


(lib.s17315 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACdExQjNg6jWgOQAqhbAAhnQAAhmgphbQgphchNhFQhNhEhggeIBegzQBWAEBPAkQBPAkA7A/QA6A+AfBSQAfBSgBBVQgBAVAFAKQAGAPASAIQAJAFAXAFQCpAnCOBuQCNBvBNCbQi8hljQg7g");
	this.shape.setTransform(416.1,404);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDD2DC").s().p("A2zejQgylDgOmZQgIj1ACnrIAI8yQAAh8AEg9QAHhnAUhQQAKgnA3iXQAqh1AIhNIAPAeQCqAwB9CIQB9CIAiCsQAiCtg/CtQhACuiLBsQBagJBPBAQBMA9AYBcQAXBVgXBgQgVBYg3BRQgtBFhKBIQgsArhfBPQDQBEC3B0QA6AmAmAhQAwAqAdAuQAiA1AHA7QAIA/gZAzQAtgbAxAnQAwAmgBA4QAAAvgdA1QgRAeguA7QgpA1gSAnQgZA2AHAwQBHgiBJA4QBIA3gOBNQA8gaBEgCQBEgCA+AXQA5AVARAkQAVAqgjBQQgmBZAHAnQCtg4DHArQC4AnCmByQBoBIA6BWQBFBogQBmQC0hEDFAIQDFAICuBTQrcC5r6ALIhiABQrGAAqwiZg");
	this.shape_1.setTransform(482.8,281.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C0C0C").s().p("EAE2Ah9QhtgKjBgfQjRgjhbgKQh/gOjDgCIlCgEQjTgHh9ACQi5ADiVAXQgGABgFgEQgFgDAAgGIAQuFQAWylADngQAHupgZrfQAAgMAMAAQANAAAAAMQANGJAEH7QAEKzgPPTIgdZ5QCfgWDGgCQB5gBD8AIQBsAEDYABQDAAECDASQBnAODKAiQC4AdB9AFQCFAGCsgQQBBgHDvgeQFIgqDSAPQkViAkvgkQgIgBgDgFQgDgGADgHQA2htgrgsQgRgSg0gCQg7gDgTgJQgqgVgtg8Qg8hRgOgOQg0gzhZgUQgwgLhwgIIlkgYQhIgFgggMQg2gTgWgwQgJgVgIgnQgKg1gDgLQgThIg8gOQgUgEhhACQhIABgngfQgegZgCgkQgBgiAXggQAKgOASgTIAfgeQAeggACgZQABgYgcglQgTgagKgWQgKgYgFgfQgLhIgKgWQgXg4gzAOQgJACgFgIQgEgIAGgHQBKhbgJh/QgIh7hOhbQhHhSiggUIiCgSQhJgOgygcQgFgDgBgGQAAgGAEgFQBDhNAshbQAthcARhkQAJg3ABgoQAAgzgNgqQgRg1gfgdQgmgmgwANQgHACgFgFQgEgFABgHQANhLAvheIBaiiQA3hhAVhEQAdhcgOhUQgPhghHhYQg8hKhdg+Qi0h4jgglQgMgCADgNQAEgMALACQDdAlCvBtQDTCDAwC8QAYBbgaBjQgTBJg3BmIhfCsQgtBYgQBHQBMgJAuBUQAqBNgFBeQgHB9gyB2QgtBthNBbQA7AdBlAKQCHAOArAPQAzAPAsAjQAqAhAfAvQBBBigBB2QgBBrg3BRQAiADAbAiQAVAbAHAuQALBJABAFQAGAVAgApQAdAlADAaQADAjggAnQgJAKgeAdQgYAYgLARQgaApAbAhQAXAdAwAIQAmAGBUgFQBIACAiAtQAQAWAIAkIANBAQAPBRAuAZQAiASA8AEQAgADBBABIDHAOICbAKQBaAJA9AZQA2AWAvAyQAbAeAzBDQAeAlAcAQQAhAUAqAAQAkAAAOADQAbAFAQATQAtA2gyBvQFOAqEvCYQAKAFgFAKQgFAJgKgBQiYgVjCAOQhnAHjzAgQi7AYhyAIQhPAFhJAAQhPAAhIgGg");
	this.shape_2.setTransform(501.9,264.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgAWAhCQlNg3izADQhsACihgFIkOgJQlEgHjUAhQAa1sAJrcQAQ0Qgcs6IBTD3QDZAjC4B4QBqBFBCBWQBLBjAIBrQAGBPggBZQgXA+g2BfQhHB+gQAgQgsBbgLBLQBEgXAyBLQAuBEgBBVQgECCgwB6QgxB7hXBgQA8AkBxAMQCMAPArAOQBLAXA4BAQA1A9AYBSQAWBSgMBPQgOBVg0A9QAggNAfAcQAdAaAJAmQAFAYAFAxQAHAsAPAYIAcAhQARAUAFAQQAHAbgQAcQgMASgfAfQhCBCACAoQAEAoAsAWQAmASAxgBIBZgDQAyAEAcAYQAhAcAPBWQAQBYAdAcQAWAUAjAJQAXAGArADIGNAbQBiAHA0ANQBQATAyAtQAWAUAcAlIAvA+QA5BHA7AFIAqAAQAagBAPAGQAsASgBA9QgCAygdA4QFWAmEzCdQjOgeliAsQi+AZheALQijAShzABIgKAAQivAAlFg1g");
	this.shape_3.setTransform(501.9,264.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C0C0C").s().p("EAZ+AlEQhCgLgfgEIjCgaQjzgfiXgQQjZgWizgHQlQgNnGAYIshA3QniAglBABQgLAAgBgLQgBgKAKgEIGSiYQA8gXB6gyQBugrBNgSQAjgIAoABQAVABA2AFQATACARgQQASgWALgJQAbgYAZgLQA0gXA0AYIAtAUQAZAJAXgDQAxgHAagsQhsg4htg9QgGgDAAgHQgBgGAEgEQAKgJAKgGQg1gSgsgoQhDg8gghbQgihiAYhtQAVhjBBhcQA/hZBihQQAxgnAjgRQAygZAvAFQBIAHBeBPIgIgbQgPg6AMg7QANg+AmguQAsg2BEgfQBBgeBJgDQAjgCA3AIIBdAOQBjAMA/geQg7gvgpg6Qg1hJgQhOQgNhDARg2QAMgoAagZQh9AChDgJQiFgRhbg8QhPg1gmhNQgohRALhdQAJhQAmhJQAmhIA8g4QB1huCigkQB9gcB3AWQgogogMg/QgVhnBAhSQBOhkCLgPQBdgKBoAdQhvhqhMh/QheiggaisQgUiIAfiMQAeiKBKhzQBNh3BvhJQB2hOCOgOQCHgPB+AsQCEAuBWBiQBbBoArClQAKAnAKA1IABAAQALgGAGAKQAnA5gEBpIgGBYQgEA1ACAfQAGBPAYCEQAdCaAHA4QAMBlgCB8QgCBVgKCNQgVErgHCVQgmM6BELtQAmGcBHGLQARBdgBARQgDA9hAAFIgYABQggAAgpgGgEAKmAi6QCrAKDXAYQBxANEPAkIDDAZQBXALARgCQA/gGgKg9QgJg+gXiCQgWh9gKhDQg1lsgal3QgxrUAwsZQAVkFAGiEQAKjjgailIgfirQgThngFhEQgFg5AEhQIgFABQgMAAgCgMQgWjWgghtQg1iyhyhhQhghSiFgcQiBgbh+AdQiCAfhrBbQhlBXg+B9QiBEEBZEnQBSERDmDHQAHAGgFAJQgGAJgIgDQh0gohhADQh3AFhPBHQhMBGAFBoQAFBuBjAnQALAFgDALQgDAMgLgEQi1g5i7A/QjCBBheChQg/BsAJBxQAKB3BcBNQBZBLCMAVQBTANCngEQAJgBADAKQADAKgIAEQg3AXgOBBQgMA3ASA+QAUBDAuA+QArA5A8AtQAGAEAAAHQAAAHgGADQgyAehCADQgsABhPgLQhZgOg4AEQhOAEg/AjQhCAlgkA8QgmBAAIBHQAIBBAnAyQBEA0AjANQAMAEgDALQgDAMgMgDQhOgRgrg6IgKgIQhVhHgpgVQhYgshoBDQhDArhWBkQhIBWghBcQgmBqAVBiQAUBhBBBFQBDBHBaALIAGABIAEAAQAKACgBAMQgCAMgLgBIgRgCQgUgBgQALQBhA3B0A7QAJAFgFAMQgSAogmAVQgnAVgqgGQgNgCg3gZQgpgSgfAJQgeAKgfAcQgTASgeAkQgCADgEAAQgEABgCgBQg4gVhEAIQgyAHhIAZQgoAOizBFImRCYQE9gEHaggQK/gxCegHQDdgLDHAAQC5AACkAJgAZO59QADg1gDgdQgEglgPgdQAKBBAJBTg");
	this.shape_4.setTransform(182.6,237.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BDD2DC").s().p("EAa4Ak8Inng+QkigljFgNQngghseA4IqBAsQluAXkTAAIKOj4QBZgiA2gJQBSgOA8AaQApgzAkgZQAxghAuAMQANAEAWALQAZANALAEQApAPArgUQArgTAPgpQhxg5hzhCQAOgPAVgGQAKgDAKgBQhtgQhJhpQhOhvANiCQAMh1BNhxQBDhhBthWQBHg4A1gHQBOgKBnBUIBGA6QgRgWgOgdQgthfAkhaQAjhWBagyQBWgwBiAEQA5ACB3AUQBpAJA8gnQg6gpgrg5Qgsg5gYhCQgahHANhDQAQhMA7gWQhwADg7gDQhdgGhJgWQhWgahBg2QhGg7gZhMQgchYAdhqQAdhoBMhSQBJhPBogvQBkgvBwgIQBzgJBnAiQhBgYgghHQgfhHAWhHQAVhCA7gxQA4guBJgRQB9gcCeA6QiXiDhcipQhhizgLi8QgLjFBZizQBbi5CkhfQCqhiDMAeQDQAeB6CTQBTBkAoCfQAaBkAUC/IgIjGQAdAmADBBQAAAOgHBkQgHBqAcCgQAsD7ABAOQAOB4gFCbQgDBEgODPQhvX7DzUAQAEAUAAAKQAAARgGALQgPAagwAAQgMAAgOgBg");
	this.shape_5.setTransform(182.7,237.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,664.3,492.6);


(lib.s17314 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("AgBBGQABgTgEgzQgFgtAIgaQABgFAEACQAEABgBAFQgHAaAEAqQAFAzgCATQgBAFgFAAQgDAAABgFg");
	this.shape.setTransform(5.2,44.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("AASBaQgEgKgTgiQgQgagEgTQgEgSAGgaQAEgRALgcQACgFAEACQADABgBAEQgKAfgEAQQgGAbAHATQAEAPANAYQASAcAFALQACAEgEADIgDABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBgBAAAAg");
	this.shape_1.setTransform(5.3,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#041404").s().p("AgXAkQgdgEgLgTQgKgOACgfQAAgFAFAAQAFAAAAAFQgBAWACAKQAHAYAmADQAVADAWgFQAdgGAGgSQABgDAFACQAFAAgCAEQgHAXgiAIQgQADgPAAQgLAAgMgCg");
	this.shape_2.setTransform(11.5,22.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#041404").s().p("AhCDgQgFgBACgFQABgFAFABQAgAGAPgHQARgJARg4QADgMAMgcQALgZAEgQQAdh1gnioQgBgFAEgBQAFgCABAFQAuC9gsCDIgKAYIgLAXQgKAhgMAVQgGAMgFAFQgGAFgMACQgJACgKAAQgMAAgMgCg");
	this.shape_3.setTransform(13.5,39.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#041404").s().p("AgEAgQgFgCACgEQAHgaAAgaQAAgFAEAAQAFAAAAAFQAAAagJAcQAAAEgCAAIgCAAg");
	this.shape_4.setTransform(8.4,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#041404").s().p("AgbAqQgWgHgMgQQgJgNAAgNQABgQAKgMQADgEAEAEQADADgDAEQgWAaAbAUQAXATAcgCQAcgCAQgQQALgMACgPQADgUgTgFQgFgBABgFQACgFAEABQAPAEAGAOQAFANgEAOQgEARgRANQgPALgUADIgOACQgNAAgNgEg");
	this.shape_5.setTransform(11.3,19.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#041404").s().p("AgGBaQgFgCACgEIANgnQAIgWgEgSIgHgsQgDgagOgPQgEgEAEgDQAEgEADAEQAOARAFAaIAIAuQAEAUgIAXIgOApQgBAEgDAAIgCAAg");
	this.shape_6.setTransform(16.8,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#041404").s().p("AgcAJQgCgFAFgCIAwgNQAFgBABAFQABAFgEABIgxANIgBAAQgDAAgBgDg");
	this.shape_7.setTransform(8.3,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#041404").s().p("AggAIQgBgFAEgCQAbgJAegDQAFAAAAAFQAAAFgFAAQgbABgbALIgCABQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBgBg");
	this.shape_8.setTransform(7.6,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#041404").s().p("AgYAJQgDgDADgDQAVgQAZADQAFABAAAFQAAAEgFAAQgWgCgRAMIgDABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBg");
	this.shape_9.setTransform(7.7,6.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#041404").s().p("AgBA1QgUgEgCgdQgDgmAUgYQAGgHAFgDQAIgDAHAGQAEADgEAEQgEAEgDgEQgIgHgIAXQgIARgCAKQgCAQADAJQACALAKAGQANAGABgPQABgFAFACQAFABgBAFQgBAJgIAFQgGADgGAAIgEgBg");
	this.shape_10.setTransform(3.2,8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#041404").s().p("AgaBVQgKgDgHgRQgSgvAFgkQAEgoAjgOQAOgGA4gHQAFgBAAAFQAAAFgFABIg8AJQghALgGAgQgEAYAJAkQAHAdAEAEQAFAFALABIAPAAQAFAAAAAFQAAAFgFAAIgJAAQgOAAgEgBg");
	this.shape_11.setTransform(10,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEF570").s().p("Ag+AVQgDgBgBgCIABgEQAFgHAIgCQAIgDAHACQADACACgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAQANgLAIgFQAQgKAgACQAPABAGAFQAEAEABAFQAAAGgEACIABgEQgwABgpAQIgSAGIgKACIgJgCg");
	this.shape_12.setTransform(9.4,2.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#412E73").s().p("AgTBjQgEgVABgOQABgPgGgbIgKgqIAIgKIAEgGIgDgGIgLgiQgFgNATgqQACgFAGACIANAGQAEABAHAIQAHAHAGABIAHAAQAEAAACACQAEADABAIQAGAugLAhQgFAOgMASIgQAhQgJASgDAZIgDAuQAAgMgEgYg");
	this.shape_13.setTransform(7.1,37.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E9CAB2").s().p("AgIBuQgGgDgBgDQgCgEAFgJQAJgRAAgQIgBgGQgBgDgEgBIgHgBQgNgDgHgOQgFgJgCgQIgCgEQgJAJgRgHQgGgDgDgBQgBgDgBgHQgDgoAXghQAIgMAHAEQAFAEACgBIACgCQAFgGAQgFQAWgHAXgDQAUgDAIAGQAIAGADANIAEAYIAHAQQANAjgPAgQgJASAAAGQAAAFACAHQACAHAAAEQACASgTAQQgOAMgRADIgMABQgLAAgIgEg");
	this.shape_14.setTransform(9.9,12.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4D865").s().p("AgVAyQgjgGgKgUQgFgKABgVQABgRADgJQAFgOAMgEIgCAFQgQAWAFAMQABADAPAQQAJAKAOAFQAOAFAMgDQARgDATgLQARgKACgWQABgLgHgRQATARABAaQAAAYgSAQQgUATghAAQgKAAgMgCg");
	this.shape_15.setTransform(11.4,20.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5663B4").s().p("AgVC+IgmggIgoh+IAshVIgBgDIAGAEQAFgJgNgcQgIgUACghQACgfAHgJQAEgEAMAJQAQAMAMgDQALgCApgDQAmgEAJgNIAJBMQAHBSgJAcIgTBCIgLAoQgWA0gFAGQgNANgIAGQgQAMgOAAIgIgBg");
	this.shape_16.setTransform(10.1,42.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#412E73").s().p("AgNAMQgGgIgBgGQgBgJAEgIQADgGAMgJIACACQADgDAGACQAFACADAFQAFAIgBAOQgDAUgIATQgQgNgHgKg");
	this.shape_17.setTransform(6.9,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.6,62.4);


(lib.s17313 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("AB6BLQgPgFgrgZIhAglIhUgwIgYgOQgPgIgKgEQgFgBACgFQABgFAFABQALAEAmAWIBVAyIBFAnQAoAYANACQAMADAAAGQgBADgEAAQgEAAgHgCg");
	this.shape.setTransform(18.8,38.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("ACGB0Qg4ghgZgUQgKgJgNgTQgQgXgGgHQhIhPhKggQgEgCACgFQADgEAEACQA8AaBNBNQAJAJASAYQAQAXAMAKQAOAMAZAQIApAZQAEADgCAEQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgDgBg");
	this.shape_1.setTransform(17.5,11.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEF570").s().p("ABBBKQgMgKgPgTIgXgfQgbgjgogaQgngagugNIACgDQgCgFAFgFQAEgFAGgBQAIgBAPAHQAqAUAmAeQApAiAWAfIAFAJQAhA1A4AcQgtgIgcgYg");
	this.shape_2.setTransform(15.7,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#412E73").s().p("AAUAnQhKgrgqgQIABAEIgKgIIAJAEQgPguglghQBTAOBQA+QA1AlBRBWQgwgOhRgvg");
	this.shape_3.setTransform(14.9,33);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5663B4").s().p("ABHC7Ih9hXIg2gXIgjgxQgPgSgJgMIgGgLQACglAJgsQARhXAhggIA+AtQAvAjANAUIAaAjQAJAMALAJQAOALA0AjIA0APIgeBIIgZB+IAOAMQgVgGgpgVg");
	this.shape_4.setTransform(17.5,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,45.9);


(lib.s17312 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1732s();
	this.instance.setTransform(0,48.5,0.793,0.793,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.6,620.9,185.4);


(lib.s17311 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1712s();
	this.instance.setTransform(0,0,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.4,53.3);


(lib.s1738 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDD2DC").s().p("EAOWAoHQh9gLl/gQQiSgFgRg/QgQg+jKBNQjIBMlvgIQlugIiDAIQiCAHiugnQhOgSg0gFQDRiFDrg5QgKhfBThNQBLhFBsgVQA0gLCVgHQB+gHBHgXQhLhBgFhvQgFhtA/hSQA8hOBbgdQBbgdBpAuQBmAtDqB4QBuh1AHhhQAHhgg3hGQgLgOgwgwQgmglgOgdQgUgoAPgsQAQgvApgBQhLhAgvg0Qg8hEgihEQgmhPAAhUQgBhZArhEQA+hhCNgiQBlgZCgAGIj+klQhYhlgpg4QhDhcgjhUQgohkAChlQADhuA2hRQA6hXBsgaQBugbBQA8Qg7hKgLhjQgLhjAohWQAphWBUg1QBUg2BfgCQh0iLgui1Qgti1AkiyQAlixBxiVQBxiUChhSIgMgDQAegfAyAGQAvAFAiAhQAcAcATAvQANAdAOA5QCGIQBBKlQAoGfAiMnQATHFgDDkQgFF6g2EqQgcCbg0DAQgfBwhGDmIhkFJQgIAbgGANQgKAWgOANQgZAXgMAXQgJAQg9AAQgcAAgngDg");
	this.shape.setTransform(211.4,257.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.4,0,294.2,514.2);


(lib.s1737 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1733s();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2215,2170);


(lib.s1733 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("AAAAEIgDgCQgEgCAEgDQADgEABAEIAEACQADACgDADQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape.setTransform(455.3,238.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("ACgCGIhRirIgOgfQgIgRgKgKQgOgOgZgIQgUgIgXAAQgTABgRATIgZAlQgmA9gYA1QgCAEgFgCQgEgCACgFQAfhDAvhHQAMgRAHgGQALgMAPgCQAggFAmASQAdANAUAjQALAVARArIBBCKQACAEgEACIgDABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_1.setTransform(51.1,198.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#041404").s().p("AhfCBQgIgTAEgmQAFgyACgYQAEhKgGhRQgBgFAFAAQAFAAABAFQAFBEgCBDQgBARgFAqQgEAnAAAWQABAaANAQQAQASAZgFQAKgCANgFIAVgJIArgSQAagIAUAEQAFABgCAFQgBAFgFgBQgRgEggAMQgkAPgRAHQgWAIgRAAQgiAAgOgig");
	this.shape_2.setTransform(31.1,133.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#041404").s().p("AAiCiQgXhWgdhQQgfhXAIhEQAAgFAFAAQAFAAAAAFQgFAnAIArQAHAhAQAsQAcBRAVBOQABAFgFABIgCAAQgDAAgBgDg");
	this.shape_3.setTransform(24.3,119.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#041404").s().p("AiPDhQgFgCACgFQA3h/BMhyQAjg4Apg2QAGgIAkgiQAagZAJgWQACgEAEABQAFABgCAFQgIAUgTAUIgkAiQgWAXgYAiIgnA+QhOByg6CHQgBABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgCgBg");
	this.shape_4.setTransform(14.8,171.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#041404").s().p("ABVEAQgFgCACgEQADgJgDgNIgFgVIgPg1QgGgVgHgfIgMg0QgliehciLQgDgEAFgDQAEgDADAEQBdCTAmCiQAUBTAJAdIANApQAHAbgGAQQgBAEgDAAIgCAAg");
	this.shape_5.setTransform(82.3,189.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#041404").s().p("ACNDmQg0hRhVgxQhTgxhggEQgFAAAAgFQAAgFAFAAQBjAEBVAyQBUAwA0BPQAWgpADg4QADgogIhGQgQiGgfhnQgCgFAFgBQAFgBABAEQAgBqARCQQAHBBgDAqQgFA7gZArQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgDg");
	this.shape_6.setTransform(58.4,141.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#041404").s().p("AAiAeQgmgagjgYQgDgDACgEQADgFADADQAiAaAoAYQAEADgDAEQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgDgBg");
	this.shape_7.setTransform(65.8,86.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#041404").s().p("AgSBnQg2gXgfhCQgNgbgahcQgBgFAFgBQAEgCACAFQAZBZAJATQAaA8AsAbQAqAaAygSQAygSAUgvQACgEAEACQAEADgCAEQgTAugwAUQgaALgYAAQgXAAgUgJg");
	this.shape_8.setTransform(53.7,85.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#041404").s().p("AAmAMIhOgNQgEgBABgFQABgEAFAAIBOANQAFABgCAFQgBAEgDAAIgCAAg");
	this.shape_9.setTransform(42,74.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#041404").s().p("ACQCKQgBgFAFgBIA4gTIgOgOQgDgDADgEIAqg1QgJgEgSgEQgVgEgIgLQgHgIAAgIIAAgFIgtAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAEg2IhYAVQgDABgCgCQgCgCAAgDIAHgdQglADggAYQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBQgVghgKgoQgeAbgZAkQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBIgMgLQgHAWAAAVQAAADgDACQgDABgCgCQgRgVgMgWIgFBaQAAADgDABQgDACgDgDIgagUQANAkAWAgQACAEgEADQgEACgDgEQgbglgNguQgBgEADgBQAEgCADACIAeAWIAGhkQAAgDAEgCQAEgBACADQALAaAQAWQACgUAHgTQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQADgBACACIANAMQAZgkAigfQADgBACAAQABAAAAABQABAAAAAAQABABAAAAQAAABABABQAJApATAiQAjgZAqgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQAAABAAAAQABABgBAAQAAABAAAAIgGAbIBXgUQAAAAABgBQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAIgEAbQgCAWADAEQAEAFATgBIAagCQAEAAABADQABAEgCACQgOAKATAKQAKAGARADQAQADALAIQAEADgDAFIgdAkQgKAMABAGQAAAFAMALQABABAAAAQAAABAAAAQABABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIhBAWIgCABQgDAAgBgEg");
	this.shape_10.setTransform(58.5,34.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#041404").s().p("AAIBnQgdgLgSgbQgDgEAEgCQAFgDACAEQANATATAKQgGgWACgXQABgFACAAIAIACQAEABACAEQAAABAAgBQAAAAAAAAQABAAAAgBQABgBAAgBQACgDgBgIIgCgMIgDgaQAAgDADgBQAAAAABgBQAAAAABAAQABAAAAAAQABABABAAIAJAHQgIgugPgvQgCgEAFgCQAFgBABAFQASAzAJA6QAAAEgEACQgDACgCgEQgEgIgFgFIADASQACATgCAJIgBAGQgBACgEABQgDACgEgCIgGgDQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIAAAHQgCAKAKAZQACADgCADQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape_11.setTransform(69.6,62.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#041404").s().p("ACtA7QAIg7g5gdQgtgZhAABQhDABgpALQgiAIgUARQgGAHgOAXQgHAOgCAHQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAIABABQAEABAAADQAAAFgEADQgDACgDgDQgMgJAMgeQAKgVAXgQQAZgSApgHQAVgEAygDQAqgCAfAEQAqAGAcATQAZAQAMAXQAOAbgEAcQAAAFgFAAQgFAAAAgFg");
	this.shape_12.setTransform(55.7,41.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#041404").s().p("AgSAmQgFgDADgEQAUgeAMgjQABgFAFABQAFACgCAEQgLAkgVAgQgBABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_13.setTransform(72,49.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#041404").s().p("ACZA4IgMgwQgIgZgTgOQgRgNgbgDQgOgBgiACIheAFQgbACgQAFQgXAGgQAOQgDADgEgDQgEgEAEgDQAagYAxgFQAqgEBVgDQA6gDAcAaQAQAOAHAaIANAvQACAEgFACIgCAAQgDAAgCgDg");
	this.shape_14.setTransform(54.3,46.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#041404").s().p("AAPArQgwgWgPgzQgBgEAFgCQAFgBABAFQAMAmAfAUQgEgKgBgLQAAgDAAgCQACAAADAAIARAFQgQgQgJgXQgCgFAFgCQACgDACAFQAOAgAdAWQADADgDAEQgDADgDgCQgRgHgOgFQAEANAIAMQACAEgDACIgEABIgCAAg");
	this.shape_15.setTransform(64.3,46.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#041404").s().p("AgOA3QgEgCAAgDQgBgzAEgwQABgFAFAAQAFAAgBAFQgDAlAAAmIASgsQACgEAEACQAFADgCAEIgcBBQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgBAAg");
	this.shape_16.setTransform(64.6,54.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#041404").s().p("AAJA0QgCgEABgGIACgKIAKgjQgIgCgMgJQgRgMgOgUQgDgEAEgDQAEgCADAEQAKAOANALIAPAKIAIAEIACgCQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAIABABQADACgBAEIAAACQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgJAhQAAAGgFAFIABAAQAEABgBAFQAAAEgFACIgBABQgCAAgDgDg");
	this.shape_17.setTransform(48.3,79.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#041404").s().p("AghCRQgFgBABgFIAliIQAMgtAGgYQALgrgCgeQAAgFAFAAQAFAAAAAFQACAdgKAoQgFAXgOAtIglCQQgBADgDAAIgCAAg");
	this.shape_18.setTransform(64.3,73.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#041404").s().p("AgMAmQgCgFAEgCQAWgPAEgaIABgMQAAgFgEgBQgDgBgHACQgHACgPALQgEADgCgEQgDgFAEgDQAPgMAOgDQAVgFABATQACAUgKAQQgJARgPALIgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_19.setTransform(68.2,56);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#041404").s().p("AAOAiQglgNgYggQgCgEAEgDQAEgCADAEQAQAWAXAMQgHgQAAgSQAAgDADgBQAAgBABAAQAAAAABAAQABAAAAAAQAAAAAAABQANAIAOADQgHgIgDgKQAAgFAEgBQAFgCABAFQAEAQAQAHQADACgBAEQgBACgEAAQgWAAgTgIQACASAOAPQADACgCAEQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAIgBgBg");
	this.shape_20.setTransform(48.7,45.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#041404").s().p("AgVAyIgFghIgDAIQgCAEgEAAQgEAAAAgFQgCglATghQACgEAEACQAFADgDAEQgKASgEAVQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAEgBAAAEIAEAbQAPgqAggiQADgEAEAEQADADgDAEQgmAngMA2QgBADgEAAQgEAAgBgDg");
	this.shape_21.setTransform(39.7,49.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#041404").s().p("AAXCAQgXgjgIgSQgRgfgEgcQgEgaACgrQADgwABgXQAAgFAFAAQAFAAAAAFIgEBEQgCAoADAZQAEAdAQAfQAIATAYAjQADAEgEACIgEABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_22.setTransform(42.4,61.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#041404").s().p("AgcACQgCgDAFgBQAZgGAaAGQAEABgBACQgBAFgFgBQgXgEgWAFIgCAAQgDAAgBgEg");
	this.shape_23.setTransform(42.7,48.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#041404").s().p("AgTAKQgDgFAEgDQASgJAPgEQAFgCABAFQABAFgEABQgRADgOAKIgCABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_24.setTransform(43,52.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#041404").s().p("AgfAPQgDgEAEgDQAcgQAdgIQAFgCABAFQABAFgFABQgdAHgZARIgDABQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_25.setTransform(54.5,48.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#041404").s().p("AglAIQgDgDADgDQAEgCADABQAJAHAMgFIARgIQAOgIAMgBQAFAAAAAFQAAAFgFAAQgHABgbANQgKAFgJAAQgKAAgIgHg");
	this.shape_26.setTransform(54.2,46.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#041404").s().p("AgBAFQgEgBABgEQgBgDAEgBQAGgCAAAGQAAAGgFAAIgBgBg");
	this.shape_27.setTransform(48.3,53.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#041404").s().p("AgKAjQgJgYgBgZQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAcADgCgRQAAgFAFAAQAFAAAAAFQACAPgNAGQgKAEgKAAQACAUAHAUQABAFgEABIgBABQgEAAgBgEg");
	this.shape_28.setTransform(47.1,52);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#041404").s().p("AgkAQQgFgCACgFQAQgfA7AHQAFAAAAAFQAAAFgFAAQgZgDgMADQgVAEgIAPQgBABAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_29.setTransform(53.7,67.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#041404").s().p("AgWAWQgOgIAFgNQAGgIADgHQgLACgHAJQgJAJABAPQABAFgFAAQgFAAgBgFQgCgTANgMQALgOAUgBQAFAAAAAFQgBAFgCAGIgGAIQAIAVAMgGQAKgCARgHIAagKQAEgCACAFQABACgEACQgZANgOAFQgPAGgJAAQgJAAgGgEg");
	this.shape_30.setTransform(52.2,70.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#041404").s().p("AhCANQAAgFAFAAQA/AAA4gYIABAAQAEgCACADQADADgDADIgFAFQgDADgDgCQg2AVg9AAQgFAAAAgFg");
	this.shape_31.setTransform(50.3,58.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#041404").s().p("AgrBVQgYgXgFgwIgChOQgBgFAFAAIADABIAEgCQAggEAagJQAFgCAPgHQAPgHAIgCQAKgCAHAFQAEAEAFAMQALAgAAA1IgBAkQgCAVgJANQgQAYgjAFIgLAAQgaAAgSgRgAAWhTIggAMQgWAGgfAFIgBAAIAAA8QADAoAOAXQAVAkApgJQAsgKAFgtQADgWgCgiQgBgTgBgLQgDgUgGgIQgGgHgLAAQgGAAgJADg");
	this.shape_32.setTransform(51.1,65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CAC168").s().p("ABuimIAAADQhwCQhDCrQgDAJgDACQgFAEgMgBQgNgCgEADQBUi2CHiXg");
	this.shape_33.setTransform(15.9,169.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEF570").s().p("AgegBIgCgCQgEgFAAgFQgBgGAGgCQAEgCAIAFQApAZAPAQQglgHgegRg");
	this.shape_34.setTransform(64.6,86.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEF570").s().p("AgmAGIAEgEQgJAAgDgGQgCgDACgEQACgEAEAAQACgBAFACQAIAEANADIAUAFQAcAHAMAMQgpgIgtgDg");
	this.shape_35.setTransform(44.8,76.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFDD6").s().p("Ag4goIARgBQAGAAACACQACACABAFQAEAOAJABQAFABAIgBQAEAAAGAGIAIALQAKAQAQAEIANACQAJADAIAMIAMAVgAhTgoIAAgDQAAgHADgHIAYARIgSACIgEABQgEAAgBgDgAg4gog");
	this.shape_36.setTransform(67.8,35.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D08C4D").s().p("Ai4AIQAHAPANANQAMALAKAFQACgOACgfQACgdACgOQANATAXASQgEgVAKgcQAFAHAGABQAJACADADQAEgUAMgNQAHgIAXgRQgEAJACAEIAJAOQAHANAUAWQgGABgDAIQgCAGACAHQAFAKAQADQAFABAXAAQAmAAAlATQAkASAWAgQgdgagngMQgmgMgqABQg/ABhZAiQgXAJgBANQgBAEgBABIgBAAIgBAHQgjglgFgxg");
	this.shape_37.setTransform(53.2,32.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#412E73").s().p("AhTAuQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgKAJgRQARgcAQgKQAKgGAPgDIAZgFIAbgGQAQgDALADQAHABACgBIAPADQgRAIgPANQgIAHgBAGQgBAGANAJQgJAAgTAEQgkAGgTAFQggAHgTAOIgEABIgBAAg");
	this.shape_38.setTransform(47.2,40.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D9A991").s().p("AgdBxQgEgBgEgGQgNgXgGghQgEgUgCglQAOAKAWgEQAOgFAPgQQAognAUg0IgZBuQgIAhgFAQQgJAcgNATQgLASgNADIgEAAIgEgBg");
	this.shape_39.setTransform(58.1,79.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#041404").s().p("AA/CoQgYgOgKgmIgFgfIgFgfQgKg2gngpQgpgqg3gMIACALQgUg3gygeQAwgLAyARQAvAPApAjQAhAcAhAtQAUAcAkA2IBRCAQgUgGgvAIQgRACgOAAQgVAAgNgGg");
	this.shape_40.setTransform(61.1,193.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#041404").s().p("Ak2CjQAlhVBEhbQAog4BZhqIAagdQAQgPARgHQAWgLAsADQBQAFBEAfQBJAiApA8IgKgBQhzglh3AWQgoAHgYAMQgbAPgeAfQg/A+gcBSQgVA7AOAlQAHAVAZAeQhjgehbgrg");
	this.shape_41.setTransform(35.6,169.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#412E73").s().p("AAAgDIADADIgFAEg");
	this.shape_42.setTransform(30.8,0.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#412E73").s().p("ABgEaQhbgThmAWQgdAGgNABQgYABgPgKQgdgTAAgrQAAgPAEgUIAHgjQAGgogEg6QgCgrgIhSIgGhGIgGgvIgHgpQgCgNABgLQgcg7gOg7IAsBlQgCAIAAAJQAaA2AmA2QA9BYBoBmQhZgdg8hGQgRA3AAAmQACA3AfAjQAQASAaAOQASAJAgAMQgkgGgTAGQgOAEgKAKQgLALgCANQBFgLAhgEQA3gFAtAGQA2AIArAZQAwAcAYArQAMAWAMAqQhDhFhogWg");
	this.shape_43.setTransform(42,121.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFCEF").s().p("AgjAYQgOgGgBgIIgBACQgEgPAKgNQAKgNASABIADABQABABgBAFQgFANAAAIIABAEQAAAAABABQAAAAAAAAQABABAAAAQABAAAAABQAJAFAKgCQAHgBAOgGIAZgJIABgBQADABgCAEQgMAUgbAJQgLACgIAAQgPAAgOgFg");
	this.shape_44.setTransform(52,71.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFCEF").s().p("Ag6ATIgCgCQgCgKAEgHIAEACQAagCAXgIQATgJAIgBQAGgBANABQAMAAAGADIACABQADAEgHAEQgRAHgmAIIgbAHQgUAEgJAAg");
	this.shape_45.setTransform(50.5,58.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BA4C45").s().p("Ag3BEQgVgtAKhGIgCAAIACgBIAAABQAVAAAlgMQAmgOAUAAIAGABQADADABADQAGAQACAUIACAkIAAAHIgBAAIgBgBQgTgHgVAEQgVAEgNAOIgEAEIgFACQgLAEgHAJQgIAKgCALQgBAGgDABIgCAAQgDAAgDgGg");
	this.shape_46.setTransform(51.3,64.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F4D865").s().p("AgWBHQgKgGgBgFQgCgEACgJQAJgpAFgsIABgDIACgBQAMgGAIgVQAHgOAAgIQAVAoADAuQgFgHgJgCQAEAdgEAcIgRgIQgHAaAJAfIgcgVg");
	this.shape_47.setTransform(69.6,63.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E9CAB2").s().p("AgREQQgtgPgegtQgNgTgLgcQgGgQgLgjIgThAIBHAMQgrgvgQhLQgLg3AFhTIgDAGQAKgfAYgTQADgEAEAAQACAAAEADIA3AnQgQgWABgcQAXAJAWAFQgPgTgFgLQAOgHAXgBQAUgBATADQAMACACACQACACgEAHQgFAIABADQAEAKALAOQAMAQAEAHQAGAOABASQABAMgCAWIgEAhQAHgHAGgNIAMgUQAHgMAJgGQALgHALADQAGABADAFQACAEgDAIIgFATQgEAMgEAHIgIAFQgFAEgBACQgCAGgBAQQgDAmgWBGQgWBIgCAlQgBAGACADQACADAGACQAaAKAZATQAFAEABADQAAADgDAEQgeA0geASQgVAMgZACIgKAAQgTAAgRgHg");
	this.shape_48.setTransform(54.8,69.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F4D865").s().p("AgQAHQgLgOgMgdIgDABQAGgGALAAQAGAAAMADIAKADIADABIACAEQAKAeAZAUQgPgCgQgHQgCARAJAOQgUgMgPgXg");
	this.shape_49.setTransform(63.5,45.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F4D865").s().p("AhGATQgIAFgGAJQADghAPgcQAIgEAKgIQACgBAEgFQADgFACAAQAwgLAyAEIAFABIAEAEIAOAaQgVgBgTgIQAAAYAMATQgcgLgTgTQgHgHgDACIgEACQgnAigNA0QgKgVgDgUg");
	this.shape_50.setTransform(44.3,48.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#577FEF").s().p("ACGAoQgGgagLgNQgWgZg2gBQgWAAgpAEIhZAIIgZAEQgNAEgXARIgBABQgFgKAHgOQARgiArgSQAcgMAzgEQAugFAfAEQAwAFApAXQAXAOAIAOQADAGAFAUIADASQABASgIARQgIASgPAKQgEgIgIgjg");
	this.shape_51.setTransform(55.8,44);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F4D865").s().p("ACJBEQgSgcgfgPQgvgXhRAGQhxAHgsAzIACAGQgegngKgtIAmAWQgKg2ATg1QAXAeAMAiQAAgKADgPIAGgaQAEAGAOAMQATglAngaQAMAoATAlQAgggAqABQgEASACATQAsgYA0gFIgHBCQAKgCAQAAQARABAKgCQgBAEABAEQABADgBACIAAAHQAAADAGAEQAKAHAPADIAcAFIgQAkQgLAWgJAKIAPAPQgiAFgeAMQAFgfgTgfg");
	this.shape_52.setTransform(58.4,34.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F4D865").s().p("AgegJIABAFQAAghAHgoIABgCQABAAAAAAQABAAAAAAQABAAABAAQAAAAABABQANAFAEAHQAFAGAFAMIAMAdIAHATQACALgCALIgiAIIgDACIgDACQgOAXgGAXg");
	this.shape_53.setTransform(66.8,50.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#28295D").s().p("ADhFIQgCgBgKABQgIAAgCgDQgTgdgRgpQgJgXgRg0IgNglQgIgTgMgOQgRgUgXgOQgagOgYgBQgJAAgJAEIgQAKQgSALgSAjQgIAQgSAdQgSAcgJARQgHAQgJAFQgSANgkgUIjviFQgJgFgFgHQgEgEAAgFQAohUBFheQAvg/BZhmQAYgeASgKQAUgLApgEQAugGAeAGQBEAPAVAKQAjASAfAZQAYASAjAjQAyAxAWAfQALAPAKAVIASAlIASAeQAMAUAEAJQAXA7AVBQIAkCNQADAIgCAFQgDAJgSAEQhUARhUACQgNAAgFgDg");
	this.shape_54.setTransform(46.7,178.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#5663B4").s().p("AC8F0QhthYhwgKQhtAZggASQgSAHgRgLQgigVAEhUQAFhVAAhDIgCgyQgQg3gCgeQgBgSAGgdQgagtgEgSQgCgzgShQQAUBQAUhnQAThoBBgIQBBgIApAaIAHAFIAZBLQAbBMAIALQAPAWAqAUQA4AaAogUQAmgTAWgZQALgNADgJIALgBQALgBAGAGIAHAFQghAggSBXQgIAsgDAlIAHAKQAJAOAPATIAjAvIgDgBIgNgEIAaBnIAWCDQAOCSgkBIQgggqg2gsg");
	this.shape_55.setTransform(45.8,118.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,455.9,238.8);


(lib.s1732 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F0F0F").s().p("ApiE/QgCgFAFgBQCVg3CNg9QD3hqDjh9QBvg8B1hIQBJgtAngbQA9gqAsgoQAEgDAEAEQADADgDADQgxAshDAuQgpAchTAyQnPEZoAC6IgCABQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape.setTransform(564.7,59.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F0F0F").s().p("AkDBjQiggBhwgdQgFgBACgFQABgEAFABQBtAbCgACQBZABAsgBQBKgBA4gHQA+gHBJgWQAzgPBQgeQBPgbCyhOQAFgCACAFQADAEgFACQioBJhbAhQhNAdgzAPQhHAVg8AIQg6AIhNABIg4ABIhSgBg");
	this.shape_1.setTransform(451.4,100.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCDDE7").s().p("AvdHjQjNgGhAgjQAigVCtgIIDVgKQBbgNA0gNQAagHAkgRIA6gfQAVgLAkgeQAjgdAVgLQAEgDgEgLQgEgMADgEQAIgKAIgaQALgYAYgQQAZgPAaACQgggogCg1QgCg1AegnQAfgpA3gGQA4gHAkAiQAOg6AtgsQArgsA5gPQgpgKgsAMQgrAMgfAeQgOgYADgfQACgdAQgZQAYgnA9glQBHgtA1gDQAkgCAfAPIAGADIgagbIBeA/QAVgwAwgcQAugcA0AFQA0AFAqAkQApAkALAzQATgcAigMQAigMAgAJQANADAbALQAYAIAQgEQALgCALgJIAVgPQAngdAygHQAygHAuAQQALAEAZALQAXALANAEQBBAUBPgeQA2gUBQg1QhvBiiaBoQhfA/i+ByQhzBGiTA9QgoARheAuQhUArgyATQjMBQiuBMQhFAeiFAwQhjAkg1AQQhWAbhIAJQhMAKhyAAIhXgBg");
	this.shape_2.setTransform(522.7,62.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C0C0C").s().p("A1/GsQgEgCACgFQABgFAFAAQEmAhDagaQEMgfDHh4QgvgJgagoQghgwAag2QAKgXAzgiQAqgdACgjQABgNAAhKQgBg3AHgiQAMg8AmgnQAogpA7gFQASgBAAgBIgCgZQgBgZADgXQAIgxAegVQAYgQAnABQARABAvAJQBHANBFAdQAuATAnAWIASANQANAJAGAAQANABADgDIAKgJIAxgiQAcgSAbgHQA7gQA8ATQA7ASAqAuQAGAGALARQAKAOAJABQADAAARgLQASgNADgBQAdgLAiAEQAUADAqAJQAjAFAogZQAvgeAVgEQAagEAuANQA1APAUABQBWADBmgpQA/gaBtg/QAFgEADAGQADAFgFADQjkCukeCjQnpETnPC9QkSBvjpAxQi8AmivABQgBAEgEAAQgmADglAAQjOAAjBhSgAxJHuQgBgCAAgDQAAgGAGAAQEfAdE7hNQDqg5ERh2QCwhLE4icQEEiADJh2QDDhzCkh3QhAAigtARQhyArhggOQgvgMgXgEQgngIgeAQQgHAEgVAPQgRAMgMAFQgSAHgTgBQgLAAgbgGQgxgLgeAFQgnAGggAfQgCADgDgBQgDAAgCgDQg3hohzgKQhygLhKBcQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAABIgEgBQhyhMh9gfQhEgQgZAAQg6gBgVAmQgNAXgBAkQgBAXAGAnQABADgDADQgCACgEgBQg7gRgwAtQgrAogMA+QgHAhACA9QACBCgEAaQgDAbgPAOQgJAJgeAPQghAQgOAfQgOAdAHAfQAGAfAXAVQAaAWAlADQAEAAACAEQABAFgEACQjNCCkYAhQjMAXkNgaQCBAxCHAMIAAAAg");
	this.shape_3.setTransform(517.4,58.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AyWHqQh4gUhugwQEoAhDegaQEYghDHiBQgiABgdgWQgdgXgIghQgIgiAQghQAPghAfgPIAZgLQAOgHAIgIQAMgPABgiIAAhpQABg+AOgqQASg1AugfQAygiAvASQgTiBA/gdQAYgMAtAGQCsAWCQBkQAigsA0gYQA1gXA3AFQA3AGAwAgQAvAhAYAyQAXgaAigLQAigLAhAGIAoAKQAYAHAQgCQAWgDApgcQAngaAZAAQAKAAANAEIAWAHQBmAhCAgpQBWgcCFhNQjjCtkoCnQjgB/lMCeQmfDJkUBTQlPBkkjgLIA5AEQgoADgoAAQhQAAhQgNg");
	this.shape_4.setTransform(517.5,58.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkRFvQgChYAhhPQAihPBAg9QBBg8BPgZQgkiPBIiOQBKiOCLgzQAIgEAJAGIgKF6QgwAHgpAdQgpAdgWArQgXApAAAxQgBAzAWArQhHgEhCAbQhEAbgxA0QgwA0gWBFQgWBHALBFQglhMgDhZgAENn0QAJAHgJADgAEMn0IgCgBIABgfIACAggAEKn1IAAAAg");
	this.shape_5.setTransform(736.2,247.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AEVKTQjVijj9gjQBdheAgiGQAgiHgph7Qgph9hrhZQhphZiDgUQBGg8AehbQAehcgVhZQgVhZhDhFQhDhFhZgXIAPh+QDcAnC3CdQCuCYBcDXQBWDLAIDwQAGDdg+DlQBmAKBdBGQBUBBA5BkQAwBUAgB0QATBHAcCNQhnjsjViig");
	this.shape_6.setTransform(75.2,728.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ADCGUQAJhggkhWQglhVhLg7QhKg8hbgQQBFgUAfhLQAchMgghAQgjhAhPgQQhQgQg5AuIgMjeIAmglQBcgeBiAZQBgAaBCBGQBDBGATBkQAUBjgjBaQgLAaACAPQACAJAIALIAQARQA1A2ARBVQAQBOgSBTQgPBIgnBPQgaAzgtBHQAqhGAIhVg");
	this.shape_7.setTransform(42.8,441.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCDDE7").s().p("EgF2BObQiWhYhriXQhciBhCi1QguiAg0jSQkIwrgLuLQgFlXAurZQAsq+gJlyQgFi1gem0QgcmNgBjfQgCkrAtodQAwpJAEj/QAEjlgNlDQgSlwgHi3QgbqgBAmqIA9AbICHMGQAgC1gCBoQgDCfhGBpQCNAlBsBrQBsBrAoCMQAnCMgkCUQglCThlBpQB6A2BLB5QBLB4gGCFQgGCGhVBxQhWBxh/ArQA2gNAxAjQAyAiAJA3QAJA2ghAyQghAxg1AOIB1BhQBDg9BfgJQBZgJBaAlQBZAlA5BFQA7BLAEBZQAZhYBtgLQBtgLA6BLQA4BHgLBmQgKBgg9BNQg0BChYA3Qg7AlhsAyQBjBGgQCSQgOCGhbBlQgzA3iRBuQiDBjg4BKQBqgsB2AmQB2AmA5BhQA8BigVB7QgUB6hXBJQBhAMARB6QAPBzhABcQgVAhgrAyIhGBRQhPBhgKBUQC9gxBigPQCigYCBAWQCZAaBzBhQB7BpARCMQANBggnBkQgeBPhHBjIiDCtQhPBpgmBLQBKgXBJA1QBGAyAWBRQAUBGgOBYQgJA+gfBfQCNgXB2CKQBaBqBBC3QBSDmAeB7QAxDHgJCkQgBAjgWCtQgQB/AIBRIARB0QALBGgFAuQgPCCiABpQhbBJiqBLIm0C+QhxAyg+AUQhkAihSAEIgfABQiYAAiUhWg");
	this.shape_8.setTransform(116.4,538.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AowRqQARh4A8hnQA7hmBhhLQBhhKBzgfQhKiJgkiSQgliYAHiVQAIiYA5iOQA7iSBmhtQA9hFBghEQA3gnB5hMQgyhOgKhgQgLhgAghYQAhhXBGhCQBGhDBZgbIAAAIQAeAFAIAnQAGAhgLAmIg5CuQgiBogNBHQgSBhAMBWQAOBhAzBFQilBIiACGQiACHg/CpQg+CnAIC5QAIC5BLCjQkLBjiYCcQhaBdgyBwQg1B4AEB4QgdhzARh5g");
	this.shape_9.setTransform(712.1,542.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C0C0C").s().p("EASJBhFIjlgIQjJgFkXgKQvJglvIhTQgKgBAAgJIgPlBQg70Rge0SQgbzlAA1CQAAyOAV2aQARxPAg3bIALqAQAIl/AIkCQACg1AJggQANgtAhgZQAjgbBCgKQAlgFBHgFIJ+hKQAJAAAAAKQAAAKgJAAIoRA9IiEALQhQAIgyAQQhFAWgSBOQgFAYgDB1IgiZVQgaTDgOPOUgAlAmpAAcAdrQARRYAmQ/QATIhAYIeIAQFaIgBAmQAAAdAFAHQANAUAnADQAWACAoAAQD6AVEhAUQJVAqHmAWQJBAaH9ADQBSAAAugLQBHgSAgg0QAbgrAEhKIgBh8QACkFgKkeQgToag6oQQg8ojhloTQgeihgIhDQgOh/AOhoQAOhdAFgvQALhRgDg7QgEhighh5QgVhMgziOQg0iSgUhIQgbhhgJhxQgHhWABh+QACiYgRhUQgbiAhQhNQhGhDh0gpQhFgYiOgcQgFgBgCgFQgBgEACgFQAvhnAEh8QAEhqgbiAQgqjOhIivQhWjTjOg3QiYgpjMAnQApgJAggXQChgTCEAmQDHA5BVCyQBcDBAwEQQAqDxhMC0QB0AXA/AUQBnAhBHA0QCJBkAaDCQAKBKgDCJQgDCSAHBBQAKBnAoCCQAJAeBEDDQAnBuATBJQAbBmAGBXQAFBOgUCNQgWCXACBEQACBhAaCMIAvDrQApDoAiDrQCGOpAJOuQABCAgBB/IgCBPQgDAtgMAgQgqB2iyAHQgvACg6AAQg5AAhDgCgAiXlwQgDgJAJgCIAGATIgDAAQgHAAgCgIgAgGnoQAphZgbhcQgtikj4hrQgFgCAAgFQAAgFADgEQAngpgZhCQgCgGg2hjQgZgugKgcQgRgrACglQABggAjhDQAshPASgoQAghFgDgrQgEg3g7gZQgIgEAEgIQAEgIAIACQBXAPBYgjQBUgiA8hFQA+hHAUhVQAVhbgjhVQg7iPifg1Qihg0iCBSQgFADgFgDQgGgDABgFQAOhuh+gsQhQgciFACQhmABg5gOQhVgVgtg/QgDgDADgGQACgFAEgBQCOgaBMiNQBLiMg2iIIgZguQgKgVAKgaQAbhMgEhUQgFhWgnhNQgmhOhBg4QgDgCAAgDQgBgEACgDIDHk2QALgSArg5QAjg1gJgaQgEgMgbgWIgmgeIhFg/QgFgFADgGQACgGAHAAQBVgBBPgvQBLgtAyhLQAyhLAKhVQALhagnhPQgjhIhEgwQhAguhSgQQhRgRhNARQhOARg6AwIgGAFQgHAGgHgHQgHgHAHgGIAHgGQBKhBgOhsQgQhwhhgpQgFgDABgJQALhMAzgxIAagYQAIgLgEgWQgKgug4g+QgFgFADgGQACgGAHAAQCngFBRgOQCLgYBYhEQBdhGAehxQAgh6hHhYQgGgIAHgHQAHgHAGAIQBDBTgRByQgPBphNBSQhXBeihAiQhZATitAGQAxA9ASBMQABAIgGAEQghATgYAbQgcAggFAhQgDAUAKAKQAHAGAWAOQAtAlAUA/QAVBBgQA/QgHAcgNAYQAqgWAxgLQBUgSBXATQBYASBEAzQBIA2AjBQQAkBUgNBdQgNBYg1BNQg1BNhOAuQhGAphNAGICLB/QAFAGgEAHIizEYIgvBFQgcAqgPAdQgNAYAAAEQgBAGANASQAFAHAMANIASATQBBBTAUBrQAUBrgfBkQgJAbAHAWQAFAOAPAgQAPAkAEAmQANBcgmBdQghBTg/A4Qg8A1hLASQA7BFB/AFQAPABBlgBQBGgBAoAIQBVARA2AsQA6AxAABCQA/gkBMgFQBTgGBQAcQBRAdA5A5QA/A8AaBOQAeBagaBdQgYBXhDBGQg/BGhXAgQhGAbhGgEQAQARAJAXQAPAmgIAyQgIAxguBKQgyBQgLAoQgQA/AnBQQAWAtAxBWQASAqgBAgQgCAegTAaQBxAyBJBBQBgBXARBrQAOBggvBTQgYAtglAaQgmAFgoAHQBYgSArhZgAg7mJIAAAAg");
	this.shape_10.setTransform(166.1,624);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EAU5Bg8Q2GgW2Ah6Qhk/ugY//QgS5PAa/eUAAQgTKAA0glkIANqNQACgyAFgbQAJgqAYgZQAWgXAngLQAZgIAvgFILRhTIB0CGQBNBYgjCFQgiB/hpBHQhaA8iGAXQhVAPigAEQA9A/ASBWQgqAWgcApQgbApgFAvQAxATAfAtQAeArAHA3QAIA2gRAxQgPAqgeAcQA6gtBOgQQBUgRBXAWQBYAVBCA1QBHA5AdBPQAeBQgQBYQgPBUg0BKQgzBJhLArQhOAthVgCICcCPIknHNQBpBVAiCNQAhCNg3B7QAxBBAGBXQAGBSghBQQggBRg9A2QhBA6hRANQAtBFBsAQQAuAHCVgCQBqgCBTAyQBeA5gQBWQBGguBagFQBUgEBTAjQBSAiA3A/QA9BCAQBTQAQBSgfBVQgdBPg+A/Qg/A/hQAcQhVAehSgRQA3ASAHBHQAHBAghA8QgtBIgUAlQgiBAAEAzQADAqAcA4QARAhAkA+QAdA2ADAhQAFAtghAeQDsBiA6CkQAkBjgvBlQgoBbhQAVQCegdCHAXQCsAeBfBvQArAyAgBLQAVAvAdBZQBKDpARCKQAYDShICYQCgAfBVAjQCDA1BCBZQBOBpAGC9QACApgCB6QgCBnAFA7QAJBnAnCCQAQA0A+CvQAxCNAVBXQAdB+gEBsQgCAzgRBoQgPBmgCA1QgDBGANBZQAGAvAVBvQEOV4gPWSQAAA8gGAiQgKAzgaAgQgkAthGAQQgrAJhFAAIgTAAg");
	this.shape_11.setTransform(166.2,623.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCDDE7").s().p("EABIBJwQilgWiWh1QhbhGidivQidiwhahGQiWh1iogWQg+gJgegIQgzgNgigYQhDgvgYheQgVhXAXhaQAUhMAzhTQAggzBHhbQghiPAfiYQAeiSBTh/QBSiAB2hSQB7hWCKgUQheh3gciUQgeieA6iCQA+iJCTg1QCWg3ByBTQg8g6gQhaQgRhbAjhNQAkhOBMgrQBNgrBPAMQhbhXgthHQhAhiADhfQACgzAggvQAegsAtgZQAugaAqAFQAMABALAEQg0gqgggcQhKhBgshCQg1hOgRhYQgShhAghQQAihWBXgnQBZgmBHAqQgbhuAUh1QATh1A/hgQAnBIBHAqQBHAqBOgBQhfhvgrhDQhDhpgQhkQgSh2A/hnQBChtBpAAQhAg9gehcQgdhWAHhgQAIhgAphRQAshVBIgyQh1hChDh2QhIh9ASiBQATiHB3hSQB5hTByA1QhNgngohXQgnhZAVhXQAWhYBKg5QBLg6BVAGQgogxgJhEQgIhAAVhBQAVhBAsguQAugxA8gNQhDhmAwiFQAwiEBzgeQg3iQAfihQAeigBohvIiWnFQAmg5BNABQBLACA0AzQAuAtAbBKQATA1AQBYQBQHFgpJyQgNDOgjFRQgsGjgKB8QgyJFgFL8QgCDvALRVQAJM6gUIJQgbLfhZJaQglD5grCtQg4DihSCxQgaA6gZAjQghAwgnAZQgXAOhgBkIjBDNQkIEUg2AAIgDgBg");
	this.shape_12.setTransform(657.9,472.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C0C0C").s().p("EgGuBeeQhvgahXhHQhThEg2hoQgrhQgfhpQgYhPgYh0QhElOgcjPQgpkxAOj8QAHh6AVioIAnkgQAnkqgMj6QgOkehPj+QhOj5iLjpQguhMgOgbQggg8gMgzQgMgzAFg7QADgvAPg/QA9j0B/juQALgUB8jEQBTiDAchgQAXhQAHh7QAEiJAGhEQAIhaAUg8QAZhRAzgyQAYgYBAgeQA9gdAXgYQAkgqgYhBQgmhIgNggQgZg+AZgxQAZg0BEgEQApgCAkATQAhARAaAhQAZAfAUAyQAIATAKAcQAKAPAfgRQBFglAmhEQAQgegOgQQgXgTgPgOQhCg+gYhhQgBgEACgEQACgEAEgBICjghQgyhUAKhmQAKhuBJhMQAXgXAGgQQAGgQgBghQgDg8gLgqQgYhchFg7QhAg2h3gjQgugOgNgIQgagPgJgjQgNgyAtgyQAcgfA9gnICDhDQBSgqAkgqQACgDAFAAQAFABACACQASAUAEASQAEATgLAWQgMAXACAEQADAFAgAAQAgAAAggOQAfgOAYgZQAfgfADggQADglgogOQgkgNgggcQhBg9gDheQAAgJAKgBQBSgIA+gcQBXgoAFhCQAGhDhPgmQgZgLgtgPQgygQgOgGQhSgjgohXQgmhTAQhcQARhgBKg4QBIg4BgAOQBiAOBFBGQBCBDAHBWQBGgvgGh0QgCgdgMhPQgJhDABggQAEhKAdgxQAUgjAegQQiCgZhehzQhwiIAUijQAViqCZhsQCJhgCbALQgbgfgMgqQgPg0ANg5QANg4AkgpQAegjAogQQhLgvAKhyQAIhZAzhiQhOgHgthNQguhNARhbQAUhuB5hMQBJgtCKgtQhMhngoh4Qgph3gDh/QikAth2gBQisgBhnhfQhThOgThsQgRhfAshIIglABQgJAAAAgJQAAgKAJAAIAygCIALgMQAGgHAHAHQAGAFgDAGISQgkQAEAAADADQADADAAAEMgAEC9EQAAAEgEAEQgFADgEgCQj6hmleASQh8AGi1AZQjLAchkANQi6AXhWAEIg+ABQh2AAhdgWgApTkvQgLAzAiBDQAqBTgCAvQgDA+hMAnQhAAhgXAQQgrAfgaAqQgqBFgOB8QgFAugGCPQgFB1gNBGQgRBag1BjQgXAshSCBQiBDKhPDYQg8CjgNBXQgWCPA0BvQAcA5BRCPQBIB+AhBOQBWDLAsDZQAtDZAADcQAAC9grFAQgyFwgICMQgNDmAjEYQAXC8A+E8QA1EPAzB5QBcDXCqBNQBfAqCEAHQBVAECUgMQBjgICLgTIDvghQEXgkC1AEQDzAGDBBMMAAEi7tIgBgnQgEgRgVgFQgPgDgbACIgqAEInfAPIpJARQg5BPAeBuQAfBwBfBBQBlBFCZgFQBsgDCbgsQAEgCAEADQAEADAAAFQABCEAqB7QAqB7BQBpQADAEgDAFQgCAEgEABQiAAphAAkQhpA5goBUQgnBUAmBeQApBjBfgBQAGAAADAFQACAFgDAFQg2BlgKBVQgNB4BZAoQAGADgBAHQgBAHgGACQgyANgjAoQggAlgLAzQgMAzAOAwQAOAzAoAhQAFAEgDAHQgDAHgGgBQiegViLBcQiPBegeCbQggCeBrCLQBrCLChAKQAKAAAAAKQAAAJgKABQhgAGgNB4QgGA0ARCLQAKBUgNA3QgRBLg+AfQgFADgFgDQgFgCAAgGQgBhDgqg6Qgog3g/gfQhAgfhBAFQhHAFgxAwQgtArgRBEQgPA/AOBAQAdCACAAvIBZAeQAzAVAZAeQAaAgABAnQAAAngZAhQgxA/h6AbIgYACQgTACgCAEQgKAKAKAfQAFATAMAWQAWAnAlAZQAkAYAtAHQAFABACAGQAQA5ghAyQgeAwg6AWQgfAMgnACQg4ACAAgfQAAgKAMgRQAMgRABgKQACgfgOAHIgdAWQggAWg2AcIhXAvQhAAkgXARQgzAmgNAnQgUA7BBAeQAkASBMAUQBgApA5BIQA5BKALBmIAHA6QADAngIAQQgEAIgNAKIgVAQQgaAcgRAgQgnBHADBRQADBRAsBDQADAEgCAFQgCAFgFABIhuAWQgdAEgJAEQgPAHADAVQAHAsArAvQAjAmAtAcQAIAEgDAHQgXBDgvAwQgwAvhDAWQgEACgEgDQgDgCgBgEQgehagcgpQguhGhGgDIgIAAQhJAAgNA7g");
	this.shape_13.setTransform(636.3,619.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgF6BefQhngQhNgrQiOhQhTi8Qg3h+gujoQg/lBgXihQgmkOAEjZQAEiyAyluQAxlmACi7QACkrhPkkQhPkkiZkBQg+hogMgYQglhLgIhAQgFgtAIg2QAFgoAQg7QBUk6CskRIBhiZQA1haAVhKQAWhMAIh+QAFiNAGhDQALhzAehGQAmhYBPgsQAYgNA0gYQAqgYAOgeQAOgfgLgnQgHgZgZgwQgZgxgHgXQgNgpAMggQASgxA9gJQA7gJAtAhQAnAdAcA2QARAiAWBFQA/gTAwgwQAxgwASg+Qg3gfgmg1Qgmg0gNg+ICxgkQhBhcAVh7QAUh6BdhCQAKi/hVhkQhRhejEgtQhdhhCyhwQAYgPB9hEQBTgtATgZQAlAkggArQgMARACAFQADAJAiADQBKAIA+g5QA/g7gZhEQhHgIgzg6Qgxg7AChHQBogJBKgvQBYg5gZhOQgRg0hKgeQhagcgpgTQg4gcgjg7Qghg4gEhFQgEhFAag7QAchAA2giQA1giBFADQBBADA8AiQA8AiAkA1QAmA6gBBBQBEgeALhgQAIhBgUhsQgRheAbhPQAghcBMAAQihgGhviOQhviOAcihQAcifCThlQCRhkCiAZQgqgggPg3QgPgyANg3QAMg4AignQAlgrA0gLQhXgiAGh4QAGhjA8hrQhjAGguhuQgshsA0hbQAthPBkg3QBDglB8gnQhRhogqh+Qgrh/AAiDQiPAqhrAFQiLAGhngzQh1g6gqiFQgoh/BDhWISmgkMgAEC9EQikhFjIgPQihgMjaAWQg3AGlLAsQjqAgiWAEIgrABQhUAAhAgKgEACZheSIgNAOIg3ACgEACMheEg");
	this.shape_14.setTransform(636.3,619.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,791.5,1245.5);


(lib.s1731 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCDDE7").s().p("AuBWAQAoghBOhEQBXhBBqgXIAfgHQASgFALgIQAPgJANgRIAVggQBpisCbh8QhYhvgXiSQgYiSAxiFQAMgkAUgNQARgMAhACQBRAGBKBJQAyAyA7BlQgig/gChJQgDhJAdhAQAchBA5gvQA4gvBFgQQgjAAgSgjQgSgkAPgiQAMgeAggYQAYgRAogRQgLgmgfgtIg6hLQhKhiAKhKQAGgwAqgfQAsgfApAUQAKg8AtgvQAtguA8gNQgnhbgQgtQgbhOgIhAQgKhNAOhFQAQhNAsg3QA2hDBagYQBIgSBCARIAHgWQALgnAQgMQAegVA+AkQBBAoAeAZQAyAoAXAtQAaAzACBMIgGCGQgFBXAKCDIARDbQAOEJg1FBQgkDahbFnQgZBkgZA3QgnBRg8AnIgKhAQglCgiVBkQiVBjiigcQg7gKgqgfQgwgjgCgyQlUDLi0BZQkkCSj9BBQA5gQBCg1g");
	this.shape.setTransform(722.8,471.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCDDE7").s().p("AGrSlQhQgFgyg2QAOAWgYAVQgZAVgbgHQgUgFgbgUQgjgZgKgGQglgTg4AEQgLAAhUAOQg4AIgsgJQg1gNgWgmQgLgSgKgwQgJgsgQgTQgLgMgUgMIgkgSQgrgYgmguQgdgjgfg4QhrjFg2kTQghipgflLQgPiqgChUQgDiPAVhvQAVh3A1huQA1hvBOhcQARgUANgCQAcgFAYAvQD5HlFVGpQCECjASAZQBSBrArBdQAQAhAhBVQAdBLAVApQAOAaA4BZQAtBGATAwQA4CLgyCZQgzCYh/BPIAyAHQg0AphFAAIgRgBg");
	this.shape_1.setTransform(122.2,435.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F0F0F").s().p("AGfCyQhMgMgwgNQhEgTgygdQgwgbgignIgggrQgTgcgTgKQgRgKgUAFIgmANQgYAHgbACQg6AFg+gWQgygSg1gkQgogbgzguQgEgDAEgEQADgDAEADQA5AzAtAdQA7AnA6AOQBHARA9gRIAtgOQAXgFATALQARAJAQAWIAZAjQAiAuA5AiQAyAeBEASQAwAOBNAMQAFABgCAEQgBAFgDAAIgCgBg");
	this.shape_2.setTransform(253.1,68.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0F0F0F").s().p("ADhByQgkgIhTgYQhMgWgpgJQg6gLhKgCQgpgBhbACQj0AFj8g3QhvgZiFgoQhZgaiYgxQgFgBACgFQABgFAEACQCyA4BbAbQCWArB6AZQCKAaB3AIQA1AEBHAAIB9gBQCTgBBeAZIB1AhQBHATAvAKQD0AwD8gNQD6gODvhIQAFgCABAFQABAFgEABQkLBRkUAIIg6ABQjdAAjSgwg");
	this.shape_3.setTransform(264.1,204.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0F0F0F").s().p("AFBBzQndgmm7i/QgFgCADgEQADgFAEACQCDA5B/ApQHECSHigHQAFAAAAAFQAAAFgFAAIg1AAQhzAAhtgJg");
	this.shape_4.setTransform(176.6,233.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0F0F0F").s().p("AIKF6IodiGIhDgRQgmgLgcgMQhBgbgkgrIgng3QgYghgWgPQgbgRgsgGQgygEgZgDIgVgBQgMgEgGgHQgFgIABgQIAFgZQANhOAXhMQATgyAHgcQANgwgSgeQgCgEAEgCQAEgDADAEQAQAbgGAlQgDARgQAvQgbBPgQBYIgHAaQgEATACAHQAFANAMAFQAFACATACIBBAGQBCAGAjAlQAPAOAYAkQAYAjAQAQQAsApBPAZQA9ATBZAWICZAkIFJBSQAFABgBAFQgBADgEAAIgBAAg");
	this.shape_5.setTransform(189.1,209.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0F0F0F").s().p("AhTByQgEgDAEgEIAygwQAdgdAPgXQATgWASgjIAXgxQgDgEADgEIAHgGQADgEADADQADADgBAEIgeA/QgSAjgTAWQgSAXgbAdIgyAxQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_6.setTransform(721.2,190.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0F0F0F").s().p("AjVBcQgBgFAEgBQDkgsC8iIQAEgDADAFQACAEgEADQi9CJjlAsIgBAAQgEAAgBgEg");
	this.shape_7.setTransform(692.5,210.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0F0F0F").s().p("AixBPQgCgFAFgBQC1g2CkhkQAEgCADAEQACAFgEACQijBji5A4IgCAAQgDAAAAgEg");
	this.shape_8.setTransform(648.1,206.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCDDE7").s().p("AGRSkQg3gvhgg2QhzhAgogdQhSg6gmhEQgig4gThaQgRhogLg0QgujSiDilQhph2gzg7QhbhogdhbQgNgogQhqQgNhdgWgyIgjhDQgWgogGgdQgPhJAzhUQAZgrBUhfQCLieBRi/IAmg2QBFgjBfAPQBCAJBjAoQBsArBBAfQBcAuBDA1QBOA9AzBLQA4BTANBZQAUB/g+CFQg4B2hrBmQAwgFAzAVQAtAUApAlQAmAjAYAsQAaAuAFAxQAEAzgVAuQgWAxgqAaQgRAKgEAFQgLAJgBALQAAAOAPAKQAHAFAWAKQA0AWAbA5QAbA2gGA9QgFA1gdA5QgWAugpA1IhJBcQgrA2gXAqQBfAOBGBKQBHBJAKBfQAKBgg1BXQg2BXhZAhQgbhMhLhBg");
	this.shape_9.setTransform(134.3,375.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCDDE7").s().p("AFdFvQjWhAitAdQg+AKgIAAQgoAEgdgLQgOgGgTgMIgfgWQhDgqhlgBQhBgBhzATQAfgVAOglQAOglgJgkQgJgkgegaQgegaglgEQAsgPAbgvQAXgpAHg4QANhtglhqQgghcg+hGQgBgMgLgHIgIgDQAzgcBQA5IBCAwQAoAZAgAGQA9AKAvAaQA2AeAcAtQAgAxgJA8QgIA/gvAdQBjgFBeAmQBdAmBEBGIjKgDQDjBHDSB4QDSB4CwCjQjrhxiIgpgArAnCQgXgKALgdQAKgdAYAHIAUAWQABAJgHANQgKAUgPAAQgFAAgGgDg");
	this.shape_10.setTransform(235.9,528);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C0C0C").s().p("AjjbxQkAgrjuhUQhsgmh0g0QhLgig2gOQhFgShDAFQiUAWhHAFQh7AIhZgyQgogXgdgGQgjgIgoAKIgrAKQgZADgUgCQgmgFgtgbIhKgzQgugegzgOQgugNg8gCIhXgBQgzgBgkgIQhNgRgkg3QgLgSgLgeQgOgogEgKQgNgbgYgXQgSgRgggUQhUg2gxhRQgshHgYhrQgYhpgZidQgbivgPhYQgdiygMhSQgUiSgEh2QgLj5BIkRIAih/QAThKAKg3QAIgsAGhDIALhvQALhkAZg8QAjhTBFgmQAJgFAFAJQAFAIgIAFQhTAugeBzQgSBFgOCHQgNCOgQBAQgTBWgsCoQgjCVgHBtQgODjAuEzQAbCzBCFgQAdCqAOAyQAkB8BJBDQAQAPA8AmQAwAgAVAcQALAPAhBQQAYA6ApAVQA4AfB0gBQCAgBAxAQQAkAMAvAgIBOA1QBAAlBAgOIAtgLQAagGATACQAkAEA5AfQA9AiAeAGQA0ALBGgHQAUgCBmgQQA/gKAngCQA5gDAtAKQAzAKBFAeIB0A0QG2C3IEAjQHdAiIIheQEPgxFjiCQJEjVIHj3Qk9BvlwBgQngB+l8A8QnXBKmVgJQjFgFihgdQiBgXhigmQhxgshdhIQhFg1gigXQg6gng1gXQhLghgMgGQgwgbgZghQgmgyARhDQAOg0AngOIlYjAQgFgCAAgGQAAgHAFgCQBTgqAdgzQAVgkgOghQgLgZgkgeQgnghgIgNQgSgYAIgZQg0gQhWARQhqAVgsgJQhEgOgOhCQgMg4AchCQAkhPBBhQQAZgfAugqQA9g5AOgOQAvgyAMgxQAQg/g7ggQglgTg3AEQgmADg4APQgGACgEgGQgFgFAEgGQBximgdh+QgPhHg3guQg6gwhGAJQgGABgDgGQgDgGADgEQBFhaAehwQAdhugMhzQgVjOiRigQiLiZjMg+QjQhAjlAxQjUAui+CEQgIAGgFgJQgFgIAIgGQDsilEFgfQDXgZDIBMQDPBQCACnQCBCoAFDYQAFDRhzCgQA6AAAzAlQA4ApAZBEQAwCHhxCyQA/gPAvAEQBSAFAdA6QAjBDg+BPQgVAagmAjQgpAkgPAOQhVBTg4BoQgjBAgBA2QgBBHBEARQAuALBqgVQBigUA3AWQAEACACAEQACAEgCAFQgOAZAjAiQATATAkAcQAhAigBAlQgBBOh3BCIFiDEQAHAEgDAHQgCAIgHAAQggAAgTAbQgQAXgCAhQgCBBA+AsQAiAYBEAeQBKAgAdASQAlAXBAAyQBDA0AgAVQBlBCCoAmQCmAlDBAKQClAIDGgKQF4gUHAhVQMZiVKykGIADgBQAIgEAEAJQADAJgHAEQg3Abg/AeQlpCrk0CAQloCWlGBtQlUBxmhArQjYAXjPAAQkqAAkWgvg");
	this.shape_11.setTransform(346.8,421);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACOcQQpGghnkjZQhHgggVgIQg1gVgrgGQg0gHhHAIIh8ATQiaAYhTgmIhCgkQgmgVgfgBQgVgBgjAKQgoAKgRABQg2AEhJgxQhkhDgXgJQgsgRhEgEIh2gCQiNgFguhHQgMgTgPgrQgOgqgNgTQgSgbgogbQgvgcgVgRQhLg5gqhuQgbhJgXiHIhHmoQgvkWgMiTQgUjvAgi9QANhIAzjCQAtinAKhlQATjDAKgnQAfiABXgtIgBgkQCZhtCugzQC2g3CxASQC5ASCfBgQCkBkBZCbQBcCggJC/QgJDChvCNQBJgNBAA5QA+A3AMBOQATCDhrCbQBOgWA7AGQBNAHAXA4QAXA0grA+QgaAnhEA7QhwBjhDCDQg3BrApA8QAZAkAuAGQAhAEA9gLQBTgOAUgCQA5gFAmASQgVAeArAnIAoAiQAYAVAKAQQAeAwguA5QglAwhDAgIFyDOQg4gDgSBBQgSBBAlAuQAeAlA9AdQAiARBHAeQA4AcBYBEQBgBLAtAaQA8AiBRAYQA4ARBaASQIoBuO8i1QMciXKrkFQleCuoBDSQpiD6kWA8QnMBjmyAAQhqAAhogGg");
	this.shape_12.setTransform(346.8,421);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCDDE7").s().p("AJdF8QgggIg5gWQg8gWgcgIQhMgWiegJQifgJhKgWQhIgVhBgoQhAgogyg4IgVgXQgNgMgMgFQgUgKgfAFIg0ALQhGAOhHgVQhIgVgygxQgygygVhIQgVhHAPhGIA9gpQACgWAQgSQAQgRAWgJQAigOA4AFQBPAIBJAjQA5AbAYAkQAQAZAGAkQAEAWABArQAkgxAvgPQAagIAbADQAcAEAVAPQAXASALAeQAKAcgDAfQgEAzgoA4QBZBKBxAMQhAANhDgEQA1ApBIAbQA7AVBTAOICPAYQBUAPA5AUQgWAHgOARQCeBGCsAJQgqAYg4AAQgnAAgsgLg");
	this.shape_13.setTransform(287.9,57.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C0C0C").s().p("AHGFhQiOgFhugiIhsgmQg/gVgvgDQhJgEgfgDQg4gGgugNQhTgYh4g8QhCghgNgIQgrgZgYggQgSgYgKgHQgRgMgaACQgJAAgPAFIgYAIQgnAIgqgCQhYgDhLgqQhIgrgrhLQgqhJgFhWIAAgBIgFACQgGACgBgGQgCgGAGgDQBugmCcAEQBbADC0APQBmAFCZgWQA2gIAkAAQAyABAnAQQBKAeAXBRQAPA2AnANIAOADQAKABAEACQAOAGAKALQAGAIAJARQARAhAWASQAXATAkAKQAZAHBWARQB6AWCYAVQCxAYFnAfQAFABABAFQABAGgGABQgwALhPgLQhjgNgcAAQgxABhbAMQhfANgsACQh+AEibghQhYgSipgyQBeCWDGBMQCDAyD/AjQAFABgBAGQgBAFgFABQh/AHhQAAIgxgBgAo6AXQAkAvBDAmQAaAPBgAsQCXBDCFAEQA8ACA6AOQAuALBFAZQB0AqCWAHQBNAECFgGQjUghh1gtQjShRheijQgCgEACgDQADgDAEABQCyA1BdAUQCZAhB+gFQAsgBBbgNQBSgLAtgCQi5gSh5gSQiSgVhugXIhYgPQgzgOgcgZQgLgKgQgfQgOgbgRgKQgJgFgbgJQgWgHgLgKQgKgKgHgSIgJgfQgVhDg0gbQg0gchLAEIiDASQhcANiEgIIj7gRQiFgBhjAfQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAJCRBvBcQBwBbCPgWQAfgEAugJIAFAAQAgAAAZAeg");
	this.shape_14.setTransform(315.1,62.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AG9FaQiTgGhvgmIhPgdQgvgRgigGQgYgEglgBIg/gCQhZgGhngoQhAgZh2g8QgigRgQgKQgagSgPgUQgNgVgHgJQgNgRgOgCQgLgEgPADIgaAFQhJAXhNgMQhNgMg/gqQg+gsglhFQglhFgDhMIgNgGQB+gvDeARICzAOQBnAFBLgJQAggEBAgLQA5gIAoACQA0AEAqAYQAuAbAPAsQAGAPAJAiQAJAcASAKQAIAGAXAEQAXAEAKAGQAMAIAJAUIAQAiQAQAZAiAQQAXALAqAJQDDAqD6AeQCRAREyAbQgmALg4gHQg/gKgggEQg+gHhfAMIieASQiDAKiighQhigUi9g5QAuBTBUBBQBLA6BiAmQBSAgBtAVQBAANCEATQh7AGhRAAIg9gBg");
	this.shape_15.setTransform(315.1,62.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCDDE7").s().p("AvvEpQjLgNk7hWQBJASBggJQAbgCCUgYQBngQBJAEQBhAHBEAqQARgeAigSQAggRAmgCQAggBAoAIQAXAFAuAOQAQAEAIABQAOACAKgEQAJgDAJgJIAOgRQA0hABTgaQBUgaBOAXQhAg2hZgFQhagIhIApQAHhDAqg7QApg7A+gfQA+gfBIADQBJADA7AkIgPgGQAkAUAcBAQAYA3AEAxQAVgOAWgCQAcgDAIASQAMAaAagbQAggfALAGQAZAMArgBQL3gVIvkPQhPBghxA8QhGAkiuA8QoHCwmwBHQjJAhitAXQiqAXhDAEQjdANhOADQg3ABgxAAQhIAAg7gDg");
	this.shape_16.setTransform(551.7,361);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0C0C0C").s().p("AvkFyQl6gYlkhmQgGgCABgGQACgGAGACQGaB1GiARQKAAYMGjQQJcihHAkeQi6BkjaBDQj2BNk1AqQiHATiKAOIiYANQgqADgLAAQgegBgVgLQgFgCgNgLQgMgKgHgCQgCgBgcABIgcACIgTAGQgLADgJgBQgXgDgVgZQgNgPgUgmQgTgmgPgRQgpguhCgVQiGgsh9BXQhsBLg9CIQgCADgEAAQgDAAgCgDQgcgtgxAgQgfAVgeArIgVAeQgMAPgNAKQgkAahDAGIhuADQkZAMkfgkQgGgBAAgGQAAgGAGAAQEMAjEFgJICMgEQBXgIAlgpQAQgSAbgqQAagjAegLQAhgMAZAKIAMAIQAGAEADgBQAGgDAMgbIARgkQAWggAXgcQA1g9BBgjQBHgmBKAAQBCAAA6AaQA/AcAkA0QAIAMAOAcQAOAcAJAMQAQAWAXADQATADAdgKQAKgEAEgBQAVgDAWAMIAYARQAOAKAMAEQAOAFATAAIAigCQHQgdFbhUQG0hsE6jSQAFgEADAGQADAFgFAEQkoDblrCXQo4Dwr1BjQkAAhj5AAQh5AAh3gIg");
	this.shape_17.setTransform(559.9,353.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("A7BDsIAzghQFXAsFYgcQA2gEAagPQAYgNAYgjQAhgxAHgIQAZgbAlgEQAogFAOAeQAnhZA9hCQBEhIBUgdQBagfBeAeQBgAfAqBQQAdA3AHAHQAXAgAfgCQAKgBAWgKQASgJAMABQAPABARANIAeAVQARAJAYABQAPABAcgCQHrgnFGhNQG3hrE1jRQlvESnsCuQmkCXoPBUQkuAwj3ALQhIADhIAAQnqAAnWiJg");
	this.shape_18.setTransform(560,353.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCDDE7").s().p("AlnOwQBDgwAwgIQgPgvAWgxQAXgxAugUQAVhVATg5QAZhNAfg7QiSC5jGCHQjGCHjhBGQC6hsCJihQAxg5AggWQAzglAvANQABg+AHgrQAJg5AVgrQAYgxArggQAtgiAzAAQgNgXgcgYIgygnQhAg0ACg0QACggAfgSQAggTAXAVQgNgoAigmQAcghAwgUQBRgiBXgFQhLgrgShnQgRheAkheQAjhhBBguQAmgaAtgGQAwgGAmAUQgMhYABgzQAAhNAYg5QAchDBAglQBDgmA+AYIgagQQBFAMAkAKQA5AQApAYQA8AkAqA/QAnA7ARBJQAdB8gkCiQgjCbhQCNQhPCMh0BsQhAA5gfAdQg2AzgdAtQgSAbgfBBQgdA+gVAdIgeAmQgVAZgJANQgmA1gaA3QhOCniiBqQiTBfiwAZQAhgtA9gsg");
	this.shape_19.setTransform(719.1,115.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0C0C0C").s().p("Aw7Q6QgDgFAFgCIACgBIAAgBIE/iqICAhEQBIgnAygkQCThoAmhzIAMhfQAHgwAYgWQgPgHAAgXQAAgfAWgQQAUgNAlAFQAyAGAJgCQApgGAUgoQASgogRgmQgMgdhEgYQg8gVgGgrQgDgWAKgWQAJgTAQgPQAQgQAbgMIAXgGQASgFACgDQAIgIgEgTIgGgeQgBgZAJgSQANgZAfgMQARgGAagBIAqgBIAZAAQAOgBAKgDQAggIAEgeQAEgZgRgdQgig8gPgtQgSg5ACg6QACg2ARgwQATgzAignQBGhRBvgOQBngNBQA1QgOhNAuhNQA/hoB6gjQA7gRA3gBQBCgCAxATQAxATAbAvQARAeAUBCQAzC2AOBrQAWCjgkCCQgRA9giBEQgaAzgsBEIhPB4QgvBGgmAvQgjArg0AUQgmAOhFAHQgyAFgYAGQgqAKgbAVQgkAdgBAwQgCA0AvAPQADABABADQACADgCACIikD2IghAzQgTAegRASQgSASgaAQQgPAJgjARQjtB3kHBLQgEABgCgFQgDgFAFgDQBXguBKg3QBAgvARgOQAsgmAWglQANgWAEgSQAFgRgDgTIgggWQgHAAgSALIgZAPIgoAVQhcAuhTAlQlfChl5BnIgCAAQgDAAgCgEgAkVFAQgRAZAbAWQAFAAACAEQABAFgEACQgcAPgHAtQgDAZgEAxQgLA1gdAvQgxBShtBNQg1AlhKApIiEBGIkFCLQHwiOHGj0QAEgCACACQAoAegOA0QgLAqgkAnQg1A5hRA4QgrAdg6AiQDAg7CphPQBbgpAOgJQA6ggAegqQAagkAkg1IA7hcIA6hXIAQgUQALgQgBgFIgNgNQgLgKAMARIgUgaQgLgPgBgSQgHg1AqglQAiggA5gLQAWgFA4gFQAxgFAcgIQAugNAmgpQASgUAqg9IBoiWQA6hYAihHQBTixgijlQgMhTgfh1IgVhXQgPg0gUgfQguhKh4ABQhlAAhXAsQhaAtglBbQgoBgAwBXQADAFgGADQgFAEgDgGQgOgZgHgaQhHgzhaADQhbADhHA3QhHA3gYBfQgYBZAbBbQALAnAaArIAVAiQALAUAAASQABAkggARQgSAJgcABIgtABQgsABgRAGQgmAPgEAnQgDAbAOAsQACAGgHACQgqALgXALQgjARgPAaQgYAyAjAbQAHAGBHAeQA0AWAEA3QACAbgKAZQgKAbgVAQQgVARgiAAIgXgCIgXgDIgMgBQgaAAgWARg");
	this.shape_20.setTransform(695.1,120.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AqVNZQCahSBOhJQBxhpAKh6QADguAEgOQAJghAYgKQgbAEACgiQACgiAagIQATgHAiAFQAoAFAPgCQA5gHANhEQANhDgygcQgKgGgrgNQghgKgOgPQgSgVAEggQAEgeAVgUQAegfBJgSQgMgjgBgYQgBghARgUQAYgcBbgBQApAAASgGQAcgJAHgaQAGgTgLgZQgFgLgTgeQg4hYAEhsQAEhvBChNQBEhPBvgOQBvgPBQA/QgKgpAJgxQAOhNA2g2QAzgyBLgZQBFgXBPACQBmACAuAwQARATANAeQAIASALAmQA2DBAPBpQAXCogkCCQgVBOgyBYQgeA1hEBkIhXB+QgUAdgMAPQgUAYgUANQgeAVguAJQgUAEhAAGQgyAFghAMQgsAPgYAdQgcAhAJAvQAJAvAoAJIjJEtQgZAmgTARQgRAPgmATQj6CBkRBNQCRhOB8huQAqgnAQgwQARg4gngYQnfECoRCQg");
	this.shape_21.setTransform(695.1,120.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ADnCkQgzgYg6gIQhkgOh7AjQAugfANg7QANg7gagvQgZgxg3gZQg1gYg3AJIhPhMQA5gaBAAEQBAAEA1AgQA1AgAfA3QAgA3AEA7IACAgQADATAIAKQAMARAcAFIAyAEQA8AEAzAmQA0AmAUA5Qglgpg2gag");
	this.shape_22.setTransform(211.1,168.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D4E3E9").s().p("AKfQgQgggHhtgoQhZghg2gDQgpgChCADQhZAFgSAAQhkABh0gRQhXgMiBgdQj9g4johHQAthBgIhVQgJhWg5g3Qg5g3hWgGQhVgGhAAwQAVg0gfg5Qgeg2g4gXQgxgVg/ACQgxABhDAPQgEkbg5kUQg6kXhtkFQgXg4gfgfQgmgogqAHIOrixQBtA7BHBrQBHBqANB7QAOB8gvB3QgvB3heBRQBggaBjAlQBjAlA4BTQA4BTgDBnQgDBqg8BQQBnADA1AGQBXAKBBAYQBMAdA4A1QA9A5ATBJIAQA6QANAgAXAJQAOAGAVgCIAlgIQCUgkCPBRQCQBRAtCRIAKAdQAGAQAKAJQAPAOAmAHQE0A7CcATQEEAfDPgUQkiA/j6AKQgzACgzAAQjnAAjQgtg");
	this.shape_23.setTransform(214.4,110.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0C0C0C").s().p("AGMQ7QhFgIhdghQhqgmg1gSQiRgvjjgNQj/gIh+gNQlJghl8h6QkPhXmZitIhXgjQgzgVgggTQgwgdgNgkQgGgUACgUQACgWAMgPIANgOQACgEgLgNQgeghgLgOQgpg6gShGQgShDAFhHQAGhEAAgiQAAg1gKgwQgLg3gCgRQgFgqAIggQAHgZAcgzQAagvAFgeQAEgVgGgxQgGguAHgYQANgvAtggQApgeA0gHQBBgIBSAiQANAFAbAOQAaAOANAGQARAGAIAAQAHgBARgJQAxgZA0AjQAdAUAiAsQAGhNA/hEQAwg0Big7QB2hHBEgcQBvgsBeAKQBWAIBSAzQBMAuA6BIQBlB/APCeQAPCghTB6QBWgLBRAtQBXAwAkBaQASAtACAzQACAxgNAuQgOA0gdAsIgNAQQgEAHAEAIQACAFAfAGIAmAIQAEABAAADIAGAoQAHAOAJgVQAIgFAPgSQApgnAigaQBMg6BJgTQCfgnB3CLQBsB7AtCdQAHAbAKBEQALA9AaAZQATASAwAKQA0AMAUAOQAeAXARAgQAFAKAGATQAGAPANAGQANAGAjgEIAxgHIBWgFQBkgFAJABQBGAFAVAqQAMAYgCAlQAEAcA1ARQAQAGAeABIAvABQBiAHBZACQDHAEDCgSQGOglGDh+QAFgCACAGQABAGgFACQoHCqocAIQiLABiFgIQhegFgkgFQgWgDgKgDQgSgFgJgNQgLgNAAgaQgBgggDgKQgLgeglgLQgYgIgpABQg6AAhTAGIiNAJQgFAAgBgFQgIg2gkgiQgjgig2gLQgjgGgTgMQgXgPgMgcQgLgZgHgqQgJg4gEgMQgXhZgthQQiEjsikAJQhYAFhZA9Qg2AlhaBaQgDADgDgBQgEgBAAgDQgFgfgCgFQgGgRgSgJQgKgFgUgFIgggHQgEAAgBgEQgBgEADgCQA7hGAPhXQAQhcgnhQQgmhOhQgoQhQgphVAPQgDABgDgDQgDgDACgEQByibg0jPQgyjGijhsQh7hRh9AMQg7AGhDAaQgwAThFAmQiFBLg0AtQhhBWgBBkQAAAFgEABQgFABgCgEQgpg4gogYQg6gigqAyQgEAEgDgDQhug+hIgOQhwgWhDBJQgfAiACA2IADBeQgDAagQAhIgdA3QgZAyAEA9IASBxQAGAlgCAwIgGBVQgHBdAhBUQAiBWBHA+QACACAAADQgBAEgDABQguAUANAxQANArAmAYQAVAOAgAOIA3AWQCgBFBoAqQEfBzDaBFQHLCRHrATQCWAFBQAIQB/ANBiAdQBKAVCTA2QCCAqBigIQAtgEBLgOQBXgRAggEQBcgMCcgEQCogDBMgDQCIgFBsgMQHkg3HJi6QAFgCACAGQACAGgGACQmQCjmnA+QjCAdjEAHIjcAEQiDAChYAKIi1AfQhKAMg5AAQgdAAgYgDg");
	this.shape_24.setTransform(264.1,113.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AHAQ4QhWgBh3goQiFgyhDgUQh+gli9gLQjYgIhrgHQl0gam3iPQkghenqjSQglgQgTgMQgegSgPgYQgRgcAHghQAIgjAdgJQhAg2gkhOQgjhPAAhRQAAgWAHg/QAFg1gCggQgBgKgThiQgNhBALgqQAGgYAgg7QAdg0ACghQABgRgFghQgFgiAAgQQAEg7A3gpQA0gmBAAAQA3ABA/AaQAoAQBGAoQAQgYAhgFQAfgEAcAOQAYANAWAYQAOAQAXAgQgDhUBJhNQA0g3Bmg8QByhEBEgaQBpgpBaAJQBWAJBaA6QCqBsA0DOQA2DVh1CZQBXgSBUAtQBUAsAmBSQAlBQgQBdQgQBag8BDIBZAXIAIA8QA5g6AhgcQA0gtAxgaQA6gfA8gHQBCgHA3AXQA1AYA6BCQBCBMArBcQArBcARBjQAHAsAGASQALAhAXAPQAOAJAYAFIAoAIQAtALAgAmQAgAlAFAuIENgPQBxgFASA6QADAJABAhQABAZAKANQAIAKAQAFQAKADATACQFwAlFygpQFygpFghzIAOANQklB3k2BCQk3BCk8AKQimAChTACQiRAFhmARIh2AWQhDALgwAAIgEAAg");
	this.shape_25.setTransform(264.1,113.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ANGMCQCagDDHgKQhyAShzAAQg+AAg+gFgAIWL/QltgTkOhnQgegLgPgEQgZgGgVAEQgVADgfATQglAXgOAFQgxAShVgcQhmgigkABQglAAhLAbQhIAagngCQhRgDhXhYQiJiKg7jCQg7jBAli9IA+p7QB7gmCEAiQCDAjBYBfQBYBeAaCGQAaCFgvB5QAqgRAtARQAtARAVAoQASAjAAA3IgHBlQgEA7AIAeQAMAqAmAQQBmghBtAfQBsAfBCBTQASAXAmA8QAhA2AZAbQAxA2BoAyQDJBhDgAhQAtAHAtAEIh5ABQhoAAhPgEgANGMCIAAAAg");
	this.shape_26.setTransform(148,634.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AinQ0Qh9gthLh2QhMh5AZh+QAShEAFgiQAIg7gZgjQgOgUgggUQgugbgHgGQg1gpgOhNQgLhEAUhLQAKglAmhhQAhhRAJg0QAKg2gDhlQgChsAGgvQALhUAwg+QA2hFBJgCQhNheAciGQAdiFBtg2QBtg3B6A6QB7A5AdB2IGJWTQghCGg/BtQhEB4hhBQQhpBViCAdQg4AMgzAAQhMAAhHgZg");
	this.shape_27.setTransform(58.3,396.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXAAQAAgYAXAAQAYAAAAAYQAAAZgYAAQgXAAAAgZg");
	this.shape_28.setTransform(127.2,385);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AGlG9QlDg9kwh2IhMgcQgrgPgigGQg3gJhbAHQiMAKiJAfQgtALgUADQglAEgdgHQhAgPgohHQggg5gMhTQgejEA3iIQAghSBAg5QBDg9BRgNIJ2EDQBbADAzBeQAvBcgcBbQgKAhgCAIQgEAYAJARQAKAWAmAGQAVAEAtACQArAIAvAvIBOBOQAgAbAtAWQAhAQA2ASQE2BpFFAhIgGAAQlEAAlCg8g");
	this.shape_29.setTransform(138.4,195.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0C0C0C").s().p("AzxMeIgBAAIAAAAIgBgBQgFAAAAgGQABgGAFAAQDGgIDbgsQC6glDehCQBzgjDlhMQCDgsAkgOQBeglA/gtQBSg7BkiAQB+ijAogmQBZhZBegiQAegLA+gTQAxgWARgsQAKgaAFgtQAGg8ADgNQAbiGBQhzQBQhxB1hKQAFgDADAGQADAFgFADQihBlhUCrQgmBOgRBWQgEAZgFA0QgGAvgOAcQgXAvhKAaIg+ATQglAMgVALQg1Aeg1AyQgoAkgxA9QiUC4gYAZQhnBuhxAzQhBAdhZAfIigAzQjcBIiQAoQlXBfkjAWQCDALCTgRQCYgSDBg0QB8ghCcgvIEWhXQCegzB8gqQBRgbAzgdQBDglAtg0IBIhfQAsg6AlgeQApggApgNQAUgHAnAAQAogBATgFQAfgJAlgfIA7g1QAtgrAugyQBfhpBPh5QADgFAGADQAFADgDAFQhYCIhqBwQgwA0hAA3QgeAcgRANQgdAWgZAFQgMADgTgCIgfgCQgpACgpAVQgwAZgxA5IhOBkQguA8gqAfQgtAihEAbQgeAMhcAfQitA5iDApQi/A+hiAeQipA0h+AdQjkA0jCAAQhdAAhVgMg");
	this.shape_30.setTransform(667.7,213.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AzyMXQEWgLFShWQDMg0GMiEQBhghAwgUQBQghA4gpQBBgvBIhVQAqgxBOhnQBIhbA3gvQBMhCBSgaIBFgVQAmgOAUgWQAUgWAIgnQADgOAGg3QASiUBTiBQBSiCB/hOIATHRQiPDfjJCkQgiAdgZAEQgKACgQgBIgagCQg0gCg2AgQgsAbgqAxIhFBbQgpA3giAdQgrAkhAAdQgoAShOAaQk6Bok9BfQkTBSikAcQiOAYh+AAQhdAAhVgNg");
	this.shape_31.setTransform(667.7,213.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0C0C0C").s().p("A/Za2QgIgFACgKQADgJAJAAQDXASBrAFQC0AKCPgFQE0gJEHhWQB2gnCchBQBaglCzhPQAogRBbgjQBOgiAlgpQAZgbAeg5QAihAARgXQAbgjAlgRQAhgQAwgEQBNgHA0gcQA1gcAjg1Qg2gaghgxQgjg0gDhAQgCg/Afg3QAcgyA0geQg4gxgcg+QgjhPAWhKQAUhCA5gmQAzgjA7AFQAHg2AUgiQAfg0A3AKQAZAFAWAeQAbAmAMAIQAkAYAsgFQAmgFAbgZQgdglgLgXQgWgrAMgmQALggAZgQQATgMAVAAQgGg9AUg6QAVg6AtgrQhNgsgohUQgsheAahfQAbhfBWg6QBQg1BcAEQgCgkgShQQgShRARgwQAOgqAegWQAWgRAagCQhMiKAnicQAqioCXhTQBDglBHgHQBMgJBEAaQA+AYAnAsQAlAqAJA2QAGgGAIAEQCGBJAtDDQAbB4gEDWQgFEQhjHoQg4EQgSBnQglDUgKCoQgDA9gEB5QgGBqgRBJQglCZhzCWQhwCRh2AJQhBAFg0gpQgrgkgQg1QhNAxg1ASQhUAdhLgZQhCgWgZgEQgwgJguAMQgrAMgzAaIhYAyQkACQlRBWQj6A+l8AwQmYAyk1AdIibARQhdAJhDAAQi4AAh1hFgA8fbZQBLAKBugHQAzgDBHgGQiogDj9gUQA0AVA+AIgAGvDGQg1AvgEBEQgEA9AiA6QAdA0A0ApQAFAEgBAHQgBAGgFADQg4AbgeAzQgcAwABA5QABA4AeAvQAhAxA6AYQAFADADAFQACAFgDAFQgdAygtAiQguAjg3AMQgFAChKAHQgxAFgbASQgYAQgWAeQgMARgVAmQgfA6gRAXQgeAqgjAYQgyAhhTAiQheAlgtATIkKBxQiZA/h4AkIg9AQQDbgYBOgKQF1gzEShPQCmgwCNg+QA2gYBVguQBng5AigRQBEgiA7gHQBBgIBCAYQAwASAjADQArAFArgOQAjgLAogXQAbgPAsgdQAFgDAGADQAGACABAGQALA3ApAiQApAkA4gCQBRgDBYhWQA/g/AxhUQAxhSAZhXQAVhGAIhfIAHinQAHiTAYipQATiFAmi+QAtjYAUhsQAli9ARiNQAWizgBiaQgBi9gbhoQgrioh2hAQgCAGgJAAQgNAAgBgMQgGhBg1guQgvgphEgPQg+gMhCAPQg9AOg4AkQiABUggCXQgfCVBRCDQAFAIgGAGQgFAGgIgBQg5gMgYA+QgTAyAKA4QAFAbANA0QAJAugCAjQgBAFgDADQgEAFgFgBQhagIhPAzQhQA1gYBXQgXBXAoBVQApBVBRAoQAGACAAAHQABAHgEADQgyAqgXA8QgWA7ALBAQABAIgFAEQgEAFgIgBQgngJgRAjQgPAfAKAiQAHARAOAWIAdAlQAIAJgIAIQgfAhgsAJQgrAKgqgRQgVgJgQgPQgNgMgPgWQgMgQgEgDQgGgEgWgCQgXgCgIAEQgLADgLARQgNARgFAaQgEAPgDAgQgBAOgPgCQgMgCgMAAQg0AAgsAog");
	this.shape_32.setTransform(627.4,472.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("A8MbqQh2gMhRgyQFmAeC3AAQEtAADpg4QB6geCSg3QBZgjCqhJIEih8QApgSAUgKQAggSAUgUQAagaA6hnQAuhTA0gWQAXgKAlgDIA/gHQA5gJAwgiQAwgiAcgyQg5gWgmg0Qglg0gCg9QgCg9Aig3QAig2A4gZQg5gsgfg9QgihCAJhBQAJhGA6gvQA7gwBCAOQADgjAEgQQAGgdAOgSQAPgXAagIQAbgKAVAOQALAHALAPIARAaQAiAtA+ACQA/ABAkgrQgcgigLgUQgTgegBgdQgBgiAbgaQAbgaAeALQgNhBAYhBQAYhCA0gpQhVgngqhbQgrhbAZhaQAZhaBUg4QBTg5BdALQAEglgOg+QgShKgCgZQgDg1AhgsQAkguAtANQg0hQgIhkQgIhkAohXQAnhYBQg8QBPg8BfgPQBkgPBZAzQBdA3AGBcIASgFQBYAtAxBvQAmBYAMB+QAUDLgaDyQgTCwg0EKIhXG4QgtD+gJDAIgHCmQgHBfgRBEQgkCRhwCSQg7BNhCAnQhRAwhJgXQgqgMgegjQgdgjgHgrQhNAygxAUQhKAeg+gNQgUgEgjgNQglgPgSgEQhFgPhVAhQgrARhmA7QkeCjmSBZQj5A2noA4QjpAbh3ANQjDAUidAMQhNAGg7AAQgsAAgjgDg");
	this.shape_33.setTransform(627.4,472.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,829.1,711.8);


(lib.s17220 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1726s();
	this.instance.setTransform(0,0,0.281,0.281);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,59.1);


(lib.s17219 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cm_line();
	this.instance.setTransform(1212.1,0,0.651,0.651,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1212.1,781.2);


(lib.s17218 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("AgGCCQABgMADgSIADgdQADgWgDgVQgBgQgIgXQgRg0ABhBQABgKAKAAQAKAAgBAKQgBAiAHAmQAEAUAPAvQAHAZgGAiQgJAzgBAJQAAAJgKAAQgIAAAAgJg");
	this.shape.setTransform(2.5,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("AgYDXQgHgHAHgHQAYgagIguQgQg0AAgZQgBgUAKgZQAMgZADgPQAJgYgFgSQgBgHgNgfIgHgPQgDgHgBgJQgGglAdgiQAHgHAHAHQAHAHgGAHQgbAeAOAlIAPAgQAJATABAPQABASgKAYIgSAlQgHAaANBQQAMBCgeAhQgEADgDAAQgEAAgDgEg");
	this.shape_1.setTransform(14,27.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#041404").s().p("AAHDGQgIgCABgKQAKhGgQhCIgMgnQgHgWgCgRQgEgmANguQAIgcAUg1QAEgIAJAFQAIAFgDAJQgQAkgGATQgJAfgDAbQgDAZAGAdQACANAKAmQAWBKgNBSQgBAHgGAAIgEgBg");
	this.shape_2.setTransform(91.9,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#041404").s().p("AgPDmQgJgXABgYQAAgVAJgbQAOgtABgZQAFgkgHgjQgPhCgBgtQgCg6ASg2QABgJAKADQAKACgEAKQgVBFAGBDQACATAJAkQAJAjACASQAEAdgVBKQgQBAAMAlQAEAIgIADIgDABQgHAAgDgHg");
	this.shape_3.setTransform(79.7,29.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B4ECFD").s().p("AAtDcQgSgDgPgQQgLgKgLgWQgXgmgJgaQgNglAEgfIALgpQAHgbgDgRQgCgJgGgLIgJgTQgPgfABgkQACgkAQgdQAOARAjAMIA8ASQgJASgFATQgHAYACAOQACALAHAQIAMAaQANAlgQAjIgJASIgIARQgIAZAOAvQAQAygFAXQgCAJgFADIgEABIgDgBg");
	this.shape_4.setTransform(8.4,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B4ECFD").s().p("AhJDsQgEgfANg6QAOg+AAgbQgBgTgFgeIgKguQgOhYAahVIAIAAQBFgEAygwQgTA8gHAhQgKA0AGAqQABAMANAzQAHAeAJBBIACAQIgHAOQgFAOgaAUQgeAZgGAHIgdAuQgSAagQAMQgJgIgCgTg");
	this.shape_5.setTransform(85.9,27.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#041404").s().p("AAgDpQhEgqgihJQgDgFADgFQADgFAFAAQAXACgNgzIgUg7QgHgaAEgVIAIgUQAGgOABgHQAFgSgDgSQgCgKgJgYQgLgegDgfQgBgGAFgDQAGgCAFACQArAUApAKIAZAFQAQACAJAFQAFACAAAGIAAAEQAAAFgCACQAVAsgIAsQgEAXgRAnQgLAiAMAdQAUAugHAxQgFAkgYA6QgCADgEABIgCABIgGgCgAguikQAOAlgEAXQgBAJgGANIgIAVQgFAUADAUQACANAJAXQANAiABAfQABAigTAIQAdA2AyAiQAQglAFgWQAKgpgIggQgDgJgMgaQgLgVgBgPQAAgJAEgMIAJgXQASgoACgbQADghgSgiQgBgDAAgDQAFAAAAgCQgBAKAKAAQAGAAADgDIgFgJQgEgJgJAFQgFAEAAAEQgTgBhXgfQAEARAKAcg");
	this.shape_6.setTransform(9.4,24.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B4ECFD").s().p("Ag+ByQAEABAFgBQAFgBADgEQAFgHABgLQADgegKgeIgOggQgHgTAAgPQABgPALgaQALgcAAgOQgBgNgGgQIgMgcQgJgZgBgYQA+AeBCAIQAEABACADQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAIgFADQAQAcACAgQABAhgNAdIgPAeQgJARABAMQAAAMAIAQIANAbQAPAjgJAxQgHAegWAzQhDgngghIg");
	this.shape_7.setTransform(9.4,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#041404").s().p("Ag0D+QgagrgFguQgGgwAQgtQAghVAEgzQAFhEgjgwIAAAAQgJAEgDgKQgBgFACgDIgCgBQgGgHAHgHQAHgHAHAHIAFAGQAUgHAkgJQAtgOANgUQAEgFAGABQAHAAABAHQAWBVgOBYQgEAdgVBSQgMBNAbAeQADAEAAAEQgBAFgEADIg5AsQgdAagRAbQgDAFgGAAQgFAAgDgFgAAHjKQghAIgVAHQAoA9gNBiQgDAagMAeIgVA4QgYBKAlBIQARgVAZgWIAygpQgOgWgBgkQAAgXAIgzQAShrACgVQAFg9gKg0QgSAPggAKg");
	this.shape_8.setTransform(86.5,27);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B4ECFD").s().p("AhKCgQgFgxATgsIAPggQAOgiADgvQAEgwgJgkQgJglgVgZQAggOAfgHQAZgGALgFQAUgJAHgPQASBDgGBCQgCATgSBgQgNBGAGAtQADAZAMAIIglAcQgaAVgLAMQgVAUgMAUQgagogEgxgAhIjKIAJAKIgHADgAg/jAIAAAAg");
	this.shape_9.setTransform(86.5,27);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#041404").s().p("AggDtQgVgyAGgyQAIguACgWQADglgPgeIgWgnQgNgYgEgTQgFgYACgfQABgRAFgdQgBgDABgEQABgEACgCQADgFAHACQADABACACQBDAKAvg1QAGgGAGAEQAGAEgBAHQgCAPgKASQgNAXgCAIQgMAfANAbIAZAzQAHAXgEBOQgDBAAbAhQADAEAAAFQAAAFgFACQg7AfgtAxQgDADgGAAQgFgBgCgEgAhGhxQABAmAQAfIASAgQALASAFAOQAJAhgLBGQgJA3ALAkQAngoAwgbQgWgjADg5QADhQgJgZQgCgHgVgnQgPgbADgWQADgQAPgcIAEgHQgPAKgQAGQgfAKgigEQgFAlABAYg");
	this.shape_10.setTransform(85.7,26.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B4ECFD").s().p("AgnCZQAAgKAKgwQAHgkgEgXQgDgUgSgeQgWgmgFgOQgJgaACgjQABgUAGgnIgBgBIACgBIgBACQAjAJAkgNQAjgLAWgeQAAASgTAgQgTAfABASQABAOALATIASAfQALAWABAhQAAANgDAqQgCAjAFAXQAGAfASATQg+AfgsAyQgTgkADgqg");
	this.shape_11.setTransform(85.7,26.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#041404").s().p("AAjDiQgngggXgWQggghgTgiQgDgGAEgFQAEgGAHACQAZAIgGghQgCgNgKgcQgJgYgDgNQgJgjAAgiQABhHAmhGQADgGAIABQAkAJAsANQAHADAAAHQACAEgDAFQgUAqATBBQAZBWABATQAAAZgfBFQgYA2AZApQAFAIgHAFQgEACgDAAQgDAAgEgDgAASC7QgFgUADgTQADgTAXgpQAUgkgBgbQgBgSgZhcQgRg9ASgrIgYgKQgVgIgJACQgQAEgJAYIgKAnQgRBLAeBSQAOAlgCAbQgCAbgUACQAQAYAXAXIAdAcIAAAAg");
	this.shape_12.setTransform(9.5,26.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B4ECFD").s().p("AgTClQgigggQgiQAJAHAMgHQALgGADgMQACgJgDgNIgIgWQgPgkgGgZQgKgxAIgzQAIgzAagrQApAIAmANIABAFQgQAaADAnQACAbAOAqQAPAtADAVQAGAngNAcQgEAIgKAQIgOAYQgLAXADAaQACAbAPAUQgrghgTgVg");
	this.shape_13.setTransform(9.5,26.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#041404").s().p("AAgDpQhEgqgihJQgDgFADgFQADgFAFAAQAXACgNgzIgUg7QgHgaAEgVIAIgUQAGgOABgHQAFgSgDgSQgCgKgJgYQgLgegDgfQgBgGAFgDQAGgCAFACQArAUApAKIAZAFQAQACAJAFQAFACAAAGIAAAEQAAAFgCACIgFgJQgEgJgJAFQgFAEAAAEQAFAAAAgCQgBAKAKAAQAGAAADgDQAVAsgIAsQgEAXgRAnQgLAiAMAdQAUAugHAxQgFAkgYA6QgCADgEABIgCABIgGgCgAguikQAOAlgEAXQgBAJgGANIgIAVQgFAUADAUQACANAJAXQANAiABAfQABAigTAIQAdA2AyAiQAQglAFgWQAKgpgIggQgDgJgMgaQgLgVgBgPQAAgJAEgMIAJgXQASgoACgbQADghgSgiQgBgDAAgDQgTgBhXgfQAEARAKAcg");
	this.shape_14.setTransform(9.4,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_14}]},2).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.9,54);


(lib.s17217 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("AgtBBQgSgbgBgmQABglASgbQAUgbAZAAQAaAAATAbQATAbAAAlQAAAmgTAbQgTAbgaAAQgZAAgUgbg");
	this.shape.setTransform(252.5,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("AgsBBQgUgbABgmQgBglAUgbQASgbAaAAQAaAAATAbQATAbAAAlQAAAmgTAbQgTAbgaAAQgaAAgSgbg");
	this.shape_1.setTransform(6.5,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259,18.5);


(lib.s17216 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1725s();
	this.instance.setTransform(0,0,0.871,0.871);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.4,182.9);


(lib.s17215 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1728s();
	this.instance.setTransform(26.1,0,0.216,0.216,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.1,157);


(lib.s17214 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1727s();
	this.instance.setTransform(35.2,0,0.291,0.291,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.4,211.7);


(lib.s17212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1724s();
	this.instance.setTransform(0,0,0.523,0.523);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.5,170.5);


(lib.s17211 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#041404").ss(3).p("EA00AqGMhpnAAAMAAAhULMBpnAAAg");
	this.shape.setTransform(338,269.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,679,541.9);


(lib.s1729 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("AgeAwQgYgKgFgZQgEgWARgSQANgQAVgEQAYgHATAGQAXAIAFAaQAFAUgOATQgNARgXAHQgLADgJAAQgNAAgLgEgAAAgeIgBABQgQACgKAJQgNAKABANQAAASARAGQAPAFAQgFQAPgEAIgLQAKgMgDgMQgDgVgYAAIgMABg");
	this.shape.setTransform(97.6,31.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("Ao+AgQAAgKAKgBQB9gJCmgKIEhgOQDCgKBhgGQArgDBXgIQBNgFA1AJQAKABgDAKQgDAKgJgCQg6gJhZAGQhjALgwACQiKAHiDAGQmMAVinANIgCABQgIAAAAgKg");
	this.shape_1.setTransform(58.1,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#041404").s().p("AAeD9QgDh0gKhrQgFgzgHg2QgCgvgFgcQgLg0gdgIQgGgBgBgGQgBgFADgFIAPgbQADgKAKADQAJADgDAJQgEANgHAMQAcAPALAxQAIAgAEA/QATCbAECjQAAAKgKAAQgKAAAAgKg");
	this.shape_2.setTransform(118.9,28.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#041404").s().p("AmXAjQgJAAAAgKQAAgKAJAAQDUAEDDgIQBfgEBugHIBngDQA+gGAhgYQAHgGAFAJQAFAIgHAGQgcATgwAHIhSAGQhtAIhtAFQiaAHiZAAIiJgBg");
	this.shape_3.setTransform(83.4,54.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#041404").s().p("AAVD+QAPiAgFh+QgFhzgEgVQgQhUg0gYQgJgEAFgJQAGgIAIAEQAvAVASA5QAJAbAIBPQAPCigUCpQgBAKgKAAQgKAAABgKg");
	this.shape_4.setTransform(122.4,27.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#041404").s().p("ApCAcQAAgLAJAAIRyg1QAKgBAAALQAAAJgKABIxyA1IgBAAQgIAAAAgJg");
	this.shape_5.setTransform(61.1,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9898A4").s().p("Ah1EHQgWgCgRgFQgbgIgggXIg1gpQh7hdjaghQAZgJA4gmQAxgfAhgGQAYgEAeAFQAUAEAhAKQAaAHAMAEQAVAHANALQAIAHANAOIAVAVQAjAeA6AEQAnACBBgKQiIhvhHg1Qg3gpgkgKQgogLhcAMQhXALgqgSQgWgJgHgOQgFgIADgKQACgKAIgFIACgIQA9AFBegKICbgPQAvgDDDAEQCTADBbgSIA+gOQAmgJAZgDQAggEArABIBLAEQAZACAOADQAVAFAOALQAgAYAJBFIATB/QAIBHgDA3QgBALACANQADANAEAJIAMAXQADALgBANQgDAYgsADQjZAPhtAGQi1AKiPADIgXAAIgRAAg");
	this.shape_6.setTransform(62.1,31.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7E7F1").s().p("AIYieQgJgjgQgIQgMgGgbAFQggAGgrABIhMABQjTgCkFAOQifAJk6AZQABgQAKgOQAKgOAPgGIgQgJQC9AFEegQQB1gHA9gMQA9gNARgCQAcgDAlADIBBAFQBdAGBfgNQAkgGAQAAQAdAAAUALQAiATATA+QAYBTACBpQABBDgJB/QgCAsgZADQgIjTgujQg");
	this.shape_7.setTransform(64.5,26.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127.8,58.4);


(lib.s1728 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("AgBAgQgDgdgMgfQgDgKAKgCQAJgDACAJQALAgAEAiQABAKgKAAQgIAAgBgKg");
	this.shape.setTransform(51.6,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("AgBARQgDgOgJgJQgGgIAGgHQACgCAFgBQAFAAABADQANASAEAPQACAJgKADIgEABQgFAAgBgIg");
	this.shape_1.setTransform(37.3,34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#041404").s().p("AAEASQgMgJgJgMQgFgJAIgFQAJgFAFAIQAEALALAEQAIAFgFAJQgEAFgEAAQgDAAgDgCg");
	this.shape_2.setTransform(31.1,38.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#041404").s().p("AAAAbQAAgagRgWQgFgIAIgFQAJgFAFAIQARAaADAgQABAKgKAAQgKAAgBgKg");
	this.shape_3.setTransform(21.8,41.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#041404").s().p("AAQAgQgggSgOgiQgDgJAJgCQAKgDADAJQALAaAaANQAJAFgFAIQgEAGgFAAIgFgBg");
	this.shape_4.setTransform(15.2,46.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#041404").s().p("AADAjQgOghgJgdQgDgKAKgCQAKgDACAKQAHAfAOAaQAEAJgJAFQgDACgCAAQgEAAgDgGg");
	this.shape_5.setTransform(22.7,26.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#041404").s().p("ADZIoIhBhtQgnhBgegpQgOgTgbgaQgfgfgLgNQgvg8gagcQhChIg7hwIgVgnQgLgYgDgSQgDgQAFgXIAIgnQAFgbAGgQQAHgUANgUIAdgrQASgbAQgLQARgMADgEQAEgFAGgTQANgmAVgRIAOgHQAJgDAEgDQAQgOAAgFIABgRIAKgcQAHgOAKgJQAbgUAfAIQAdAHAUAbQAFAIgIAFQgJAFgFgIQgXgggiALQggAKgIAhIgBAMIgBALQgEAOgFAFQgGAHgSAGQgRAGgHAHQgMANgHAXQgEAMgFAcQgCAGgIABQgbACgjAzQgeAsgJAiQgLAogBAbQgDAmANAbQBCCKBSBYQAOAPAaAgQAXAgAOAOIAiAiQAVAUALAPQAiArApBFIBFB0QAFAIgJAFQgDACgDAAQgEAAgDgFg");
	this.shape_6.setTransform(23.6,69.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#041404").s().p("AgRB0QgHgOglguQgbgjgGgdQgFgeALgbQALgcAZgPQAwgeA1AqQAVARAKAYQAGAOAKAjQADAHgKADQgJADgDgHIgJggQgFgTgHgKQgUgggkgFQgmgFgWAdQghAsAgAzQASAdArA4QACAJgGAFQgEACgCAAQgFAAgCgGg");
	this.shape_7.setTransform(40.7,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#041404").s().p("AgrEwQgKgCAEgJIA1ijIAUg5QAMghAOgVQAWggACgGQAIgTgFgZQgFgVgMgWIgYgoQgfg6gTgeQgmgzgpABQgKAAAAgKQAAgKAKAAQAlgBAZAWQAQAOAXAoQAPAZAoA3QAhAyAGAjQAGAhgaAqQgmBCgDAGQgaBHgtCQQgCAHgHAAIgEgBg");
	this.shape_8.setTransform(59.7,41.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#041404").s().p("AANCfQATijhDiVQgEgIAIgFQAJgFAEAIQBHCbgUCnQgBAKgKAAQgKAAABgKg");
	this.shape_9.setTransform(80.1,106.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#041404").s().p("AhTEWQgCgKAJgCQBngaAfjXQAXiWg5iTQgDgJAKgDQAJgCAEAJQBACqglCrQgRBTgaAyQglBJg9APIgEABQgHAAgCgIg");
	this.shape_10.setTransform(155.9,205.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#041404").s().p("ADkMOQh0gQgLgBQgvAAgMgCQghgEgVgPQgSgNgSgYIgcgrIl4phQgFgIAJgGQAIgFAFAIIFzJZQAfAzAUASQAdAcAvADIAzACQAeABAUACQB4AQAZgCQBTgFAbhGQAUg0gDhXQgHhjgCgsQgEhygGgmQgNhTgqg5IhLhiQgtg5gZgrQgzhYg3iFQhBifgihPQg6iIg9hcQgFgIAIgFQAJgFAFAIQBHBsBLC4QBtEFAUApQBBCFBjB2QAtA3AWA4QAXA5AEBFIAJChQAEBdgEBDQgEA3gVAnQgZAtgwAPQgcAJgmAAQgbAAghgEg");
	this.shape_11.setTransform(107.9,160.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#041404").s().p("AAACwQg2gEgUglQgLgWAAgpQACguAAgTIAAhNQADgdAAgRQAAgdgNgOQgGgHAHgHQAHgHAHAHQAKAMADANQADAKAAATQABAZgBAsIgBBDQAABEAFASQAMAvAtAHQAOADAdgDQAggCAOABQAJABAAAKQAAAKgJgBIgvABQgaAAgPgBg");
	this.shape_12.setTransform(55.6,151);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#041404").s().p("AiaFZQgKAAAAgKQAAgKAKAAQAYAAARgWQASgcAKgMQAJgLAUgQIAegbQA9g/A4hoQAfg5ANgxQAKglgJgZQgJgXgcgbIieiWQgHgGAHgIQAHgHAHAHIBtBoQAOAOAiAbQAdAaAMAUQAVAjgSA9QgKAigeA4QhECGhWBMQgPANgSAYIgfAmQgLANgMAFQgLAFgPAAIgDAAg");
	this.shape_13.setTransform(63,103.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#041404").s().p("AAjBcQg9hQgYheQgDgKAKgCQAKgDACAJQAYBcA4BJQAGAIgHAHQgEAEgDAAQgDAAgDgEg");
	this.shape_14.setTransform(64.1,166.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#041404").s().p("AhJEfQgUgHgLgQQgKgPgCgjQgCgjgJgPQgFgIAJgFQAIgFAFAIQAHAMADAOIAEAbQAFAiAFAKQALAVAcAAQAYAAAggXQAigYAUgtQAPghAJg0QAXh4gEhHQgHhog/hJQgGgHAHgHQAHgHAHAHQApAwAUA6QAUA7gDA+QgGCFghBeQgRAugeAhQgkAngqAGIgMABQgOAAgMgFg");
	this.shape_15.setTransform(50.9,97.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#041404").s().p("ADICTIgPhQQgJgwgLgdQgehWhJgaQg8gWhLAUQg0AOhOAoQgIAEgFgJQgFgIAIgFQBXgsA6gNQBTgUBDAdQBIAfAeBYQALAdAJAxIAPBRQACAJgKADIgDAAQgHAAgBgHg");
	this.shape_16.setTransform(78.6,78.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDF46C").s().p("AjcDoQgDgrANgoQAMgoAcgiQAbghAkgVQgJgdAWgdQAWgcAgAAQgFgWAJgXQAJgXASgNQARgOAYgCQAYgBAVALQgUgiAIgqQAJgqAggYQAggXAjAGQARADAOANQAOAMAEARIgMAHQgXgRgeAMQgeALgHAcQgEAUALAjQANAoAAAPQgegCgQABQgaABgTAIQgWAJgOAUQgNAVADAVQgiAGgZAeQgZAfADAlQgcAGgdAkQghArgRA1QgRA1ADA2QgSgmgDgrg");
	this.shape_17.setTransform(24.8,31.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#412E73").s().p("ADPLIQhbgXglADIgZACQgPABgKgCQgdgHgYgtIgzhQQgbgqgTgpQgYg0g0hTQg8hagYgoQgGgJgvhiQgghCgkgeIgsgiQgYgWgKgXQgIgRgDgaIgDgsQgGg6gfgUQgQgKgCAaQgCAPABAjQgPgyAEgbQACgHgJgvQgGgkAPABQAFAAANACQALADAHgBQAIAAAQgRIAWgXQBOhFAyhMQAzhPAchhIABggQA0BXAZChQAiDTAQAzQARA5AgBAQAXAwAnBBQBCB2BCBmQALglAEgsQAJhbgPhmQgNhXgghpQgQg1guiFQgnh2gThGQCNE0BTFDQAUBRANAjQAXA/AiAoQAhAmAhgCQASAAAPgNQAOgMAIgRQALgdgEgrQgJhog7hUQAxAyAfBCQAeBBAIBHIAGA3QAFAfAOATQARAXAfACQAgADALgYQAbBGgNBOQgNBNgvA6QgVAZgSAJQgHADgKADIgSAFQgQAFghASQggARgSAFQgSAFgXAAQgkAAgygMg");
	this.shape_18.setTransform(105.6,166.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D7964E").s().p("AgvDbQgGhAghg3QAZgpALgWQAQglACgeQABgdgOgzQgVhKgfgiQAdANAuAiIBFA1QAlAcADAZQAMBRgCAIQgKArgQAZQgWAlgOAiQgKAagdARQgYANgRAAIgCAAg");
	this.shape_19.setTransform(67.5,95.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D9A991").s().p("ABVHnQAJgdgMglQgIgZgWgnQhaigiJjIQgYgkgJgSQgRgggEgcQgCgOACgLIACgFIgWAbQAXhGAvg6QAug7A/glQAUgLAjgRQAmgTAPgIQASgKAZgvQAUgkAbAEQAKABAEAEQAEAFABAJQASCfgWCgQgFAkAEAOQADAMAIAOIARAYQASAbAPAiQAKAYAQAsQAMAkAEASQAHAfgEAZQgBAGACAdQABAYgFAKQgHAPgGArQgHAogKAQQgQAbgaA5QgXAhgrAAQgLAAgLgCg");
	this.shape_20.setTransform(37,75.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E9CAB2").s().p("AApH7QgMgVglg8Iglg4QhdhsgagTQgZgRhDhqQhKh0gKg4QgKg2AzhTIA2hJIAZgKQALgpAogqIAngiQgCgUAWgcQAYggAcgGQAZgGARANQAHAFADAFQgFgKgGgPQgNgkACggQACggAbgQQAfgKAFgDQAGgDATACIAhAFQALAAATAuQATAuAMABIBiBZQAzA0AaA2QAaA3gfA5QgPAcgVASIhTDqIAQAYQARAfAMAeQAUA0gBBBQgBBcgtBdQgrBXgqAsQgVAVgMAEQgvhJgTgjg");
	this.shape_21.setTransform(34.8,63.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F4D865").s().p("AhtEtQgFgBgFgHQgjgsgKg4QAfAGASAAQAcAAARgNQANgKAPgbQAkhAASgwQAag+AIg4QAJhBgNhBQgJgvgTgrQA9AvA5A0QATASAHANQAJATgDAcQgFBDglBLIhKCGQgIAQgcAcQgbAegJAMQghAygrAMIgGACIgDgBg");
	this.shape_22.setTransform(60,105.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5663B4").s().p("ACKNfQhcgYhLhxQgggvgqhRQg1hpgQgaQhZiaiDh0QgWgTgRgEQgGgBgMABIgSAAQglgCgZgmQgUgggHguQgMhIAKhLQAEgcAIgQQAHgMAagcQATgUATgdIAgg1ICWj+QAMgVAFgMQAIgTAAgQQAAgigegdQgWgUgpgWQgqgWgWgUQgfgcgCghIgTAZQAPgwA5gYQAxgTA+AEQBWAFA2AlQAfAVATAgQAUAigBAkIgCAXQAAANADAJQACAJAIAKIAOAQQAhAlAmBNQBQCdAiBxQAHAYAWAsQAZA0AHAQQAhBUBNBiICECsQAJAOAJADQAFACAGgBIAMgBQAQgBAPAHQAOAHAKAMQAJAMAIAbQAYBUgCBaQgDBZgcBUQgiBig+AoQgVAOgfAJQgTAGgmAIQg9ANgiAEIgdABQgkAAgdgIg");
	this.shape_23.setTransform(106.1,150.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164.5,239);


(lib.s1727 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("AiEBdQgCgJAJgEQCOg5Bjh3QAGgHAHAHQAHAHgGAHQhkB6iWA7IgEABQgGAAgCgHg");
	this.shape.setTransform(39.5,120.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("AlyD5QhQgPgZhRQgZhQAShUQAShSA1hDQAGgIAHAIQAHAHgGAHQg5BIgOBdQgRBqAzBFQAcAlA8ADQAhACBDgNQBNgOBTgiQCRg9Cah6QBehMCmikQAHgHAHAHQAIAHgHAHQjLDHh3BWQjACQi+AqQhEAPgwAAQgVAAgRgDg");
	this.shape_1.setTransform(49.1,107.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#041404").s().p("AilEEQgXhWAKg7QAMhFA7g1ICKh8QBShKAzg6QAHgHAHAHQAHAHgHAHQhpB2h2BiQgsAigQAQQggAfgOAhQgQAmAEAxQADAgAPA2QACAKgJACIgEABQgHAAgCgHg");
	this.shape_2.setTransform(23.5,66.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#041404").s().p("AhxCAQgJgFAEgJQAJgTAVgKQAegQANgJQAVgOARgRQA/g+AthaQAFgJAJAFQAIAGgEAIQgoBPg0A3QgkAqgXARIgmATQgYAMgHANQgCAGgFAAQgCAAgDgCg");
	this.shape_3.setTransform(28.6,64.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#041404").s().p("AhTCrQgJgCACgKIAbhfQARg5AQgjQAQgkAdgmQATgYAogpQAHgHAHAHQAHAHgHAHQgpArgWAcQgdApgQApQgMAfgOAyIgYBUQgCAHgHAAIgEgBg");
	this.shape_4.setTransform(44.3,50.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#041404").s().p("AhrDEQgJgFAEgJQAPgjAQhLQAThWALghQAsiJBwgNQAKgBAAAKQAAAKgKABQhoAMgoCJQgJAdgSBXQgPBIgOAhQgDAFgEAAQgCAAgDgCg");
	this.shape_5.setTransform(59.6,33);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#041404").s().p("AgYBeIgPgGIgwgRQgJgDADgKQACgJAKADIAgAOQAXAJAKAAQAJgBAJgPIAQgbQAqg/APg6QACgKAKADQAKACgDAKQgJAngWApQgQAdgcAqIgMASQgHALgHABIgEABQgFAAgIgEg");
	this.shape_6.setTransform(104.2,51.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#041404").s().p("Ag6CdQgHgHAGgHQAmgkASgUQAegkAKgeQAMgjgNgwQgHgegYg0QgEgIAJgGQAJgFAEAJQAXA1AIAcQANAwgHAkQgIAmgjAqQgSAXgsArQgDADgDAAQgEAAgDgDg");
	this.shape_7.setTransform(102.4,69);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#041404").s().p("AB+DfQgIgLgYgIQgbgIgKgFQghgPgagWQgrgighgyQhMhyALitQABgJAKAAQAKAAgBAJQgFBYARBKQAVBSAxA8QAsA5A6AbQAOAHAeAJQAaAKAMAQQAGAHgJAFQgDACgEAAQgEAAgDgEg");
	this.shape_8.setTransform(83.5,36.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#041404").s().p("AhcBPQgKgDACgJQAOg+A8gsQA8gwA8ALQAKABgDAKQgDAKgJgCQgzgKg2AtQg1ApgMA1QgCAHgGAAIgDAAg");
	this.shape_9.setTransform(80.4,8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#041404").s().p("AAADZQgygXgpguQgmgsgWg3QgWg2gCg6QgBg7ASgtQAYg5AygIQAJgBADAJQACAKgJABQguAIgTA5QgOArAEA2QAGBOArBEQAwBMBGAdQAoAPAhgEQAngFAVgiQASgdgKggQgEgQgQgZQgEACgFgBQgKgDADgJIAEgMQACgGAGgBQAGAAAEAFQAmA0gCAxQgDA5g8AWQgVAIgWAAQghAAglgQg");
	this.shape_10.setTransform(96.7,24.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#412E73").s().p("AmYGtQgugJghggQgjgigEgrQA8AXAhAHQA1AMAqgKQBQgRBGhhQBYh5AaiTQAKg4AGimQAEhmAOhGQgHArAGA0QAFAyAZBdQAOA8AKAgQARAzAUAmQAcgfAdgtQARgZAhg4QAvhOARgxQAVg8gHg0QBPBFBeA3QAfASAUABQAPABAMgHQANgHAFgMQAoBfgdA4QgIAPgaAbIkPETQg3A4ggAaQg0ArgyARQgRAGgaAHIgtALQgiAJgyAVIhTAjQhIAbg5AAQgYAAgVgFg");
	this.shape_11.setTransform(53.9,88.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4D865").s().p("AAcEWQhfglgzg6QgngtgXhHQgPgwgNhRQgFglAAgWQAAghALgYQAKgYAZgWQAPgOAggWQAfgUASgGQAggJAWAQIgFABQgjAOgYAcQgZAdgDAjQgFA8AaBKQAWA/AnA7QAXAiAWAQQAVAOAgAGQATAEAmADQBJAEANglQgIAkgFAQQgJAdgMAUQgOAZgVAQQgXARgZADIgJABQgZAAgjgNg");
	this.shape_12.setTransform(91.5,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.4,133);


(lib.s1725 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("AASALIgjgDQgKAAAAgIQAAgKAKAAIAjADQAKABAAAIQAAAJgIAAIgCAAg");
	this.shape.setTransform(26.7,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("AAPAKQgPgCgOACQgDAAgEgDQgDgEAAgDQABgHAJgBQAOgCAPACQAJABABAHQAAADgEAEQgDADgDAAIAAAAg");
	this.shape_1.setTransform(23.4,62.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#041404").s().p("AgZADQgIgDAFgIQAFgJAIAFQAQAIAVABQAJAAAAAIQAAAKgJAAQgZgBgWgLg");
	this.shape_2.setTransform(22.1,68);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#041404").s().p("AgeAEQgDgHAJgDQAYgHAWACQAKABAAAKQAAAIgKgBQgVgCgTAGIgEABQgGAAgCgIg");
	this.shape_3.setTransform(23.1,38.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#041404").s().p("Ah6CAQgFgJAIgFIBKgpQAtgYAXgZQA+g6AUhbQACgKAKADQAKACgDAKQgSBWg6A+QgcAeguAbIhTAuQgDADgDAAQgEAAgDgGg");
	this.shape_4.setTransform(33.2,85.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#041404").s().p("AiECGQAAgKAJAAQBrgCA3g3QAlgkAVg4QATg4gEg1QAAgJAKAAQAKAAAAAJQAFA4gWA9QgWA7goAnQghAggwAQQgrAOg0ABQgJAAAAgKg");
	this.shape_5.setTransform(20,87.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#041404").s().p("AifEfQgHgHAHgHQA7hCAjhdQATgyAgh+QAKglAQgfIAMgUQAHgMADgJQAEgIABgNQACgPACgHQAIgaAkgTQArgTASgKQAIgEAFAIQAFAJgIAFIgxAYQgdAPgKATQgGAKgGAWQgHAWgFAKIgXApQgMAXgGAUQgFAagKAzQgkCihjBwQgDAEgEAAQgDAAgEgEg");
	this.shape_6.setTransform(16.4,54.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#041404").s().p("Ah0CsQhQgJAVhAQAOgqA3g5QAcghARgPQAegZAbAHQAUAFAZAVIAoAjQAuAiA+gGQAhgDAOgDQAUgFALgIQhIgag7gkIhJgvQgsgbgggLQgjgLgbAHQgaAIgZAbQgjAlgYAiQgyBAgoBSQgEAIgJgFQgIgFAEgJQAvheA8hKQAngyAMgLQAiggAjgEQAlgDArAUQAbAMAvAeQByBJBUAgQAFACACAEQACACgDAFQgRAbg0AJQgrAHgogGQgfgFgggWQgkgfgUgPQgjgagdAUQgSAMgWAYQgNANgWAcQhVBlBWAKQAKABAAAKQAAAJgJAAIgBAAg");
	this.shape_7.setTransform(60.6,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#041404").s().p("AClB1QgcgIgfgVIg1gmQgSgNgfgIQghgIgRgFQgcgIgVABQgVACgaAKIhLAgQgtAUgfAIQgKADgCgKQgDgKAJgCQAggJAxgVQA9gbARgFQAWgIAKgCQASgFAOABQAMABASAIIAdAJIAiAIQAWAFAOAIQALAGASAPQATARAJAGQAoAbAxAIQAkAGAmgFIhthVQhOg6g2glQgkgagogCQgagBg5AMQgcAGglACIhCgBQgJAAAAgKQAAgKAJAAQApACAygHIBagOQAxgJAtAZQAeAQAoAfIBCA0ICVBvQAFAEAAAGQAAAHgHABQghAIgfAAQgkAAgjgLg");
	this.shape_8.setTransform(73.1,43.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#041404").s().p("ADfB1QgHgDgJgJIgVgYIg0g1QgfgdgYgRQgagSgzgMQg5gLgZgGIiagkQgKgCADgKQACgKAKACICRAgQBXATA3ATQATAGASAOQAJAHAXAWIA1AxQAvA0ACAAQAEgBADACQAEACABAEIABAEQADAJgKADIgEAAQgGAAgCgFg");
	this.shape_9.setTransform(61,71.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#041404").s().p("ACiA7QgYgNg/g3QgegbgwgJQgcgEg8AAIhWADIgogCQggAAgEAJQgEAIgIgFQgJgFAEgJQAIgTAmgBQAUAAAjADIBUgCQAwAAAkAFQAcAFAWAJQAXALAVATQAzAwAXAMQAvAZArggQAIgGAFAJQAFAIgIAGQgcAVgeAAQgXAAgYgMg");
	this.shape_10.setTransform(58.4,78.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#041404").s().p("AD5CTIhbhVIg1gyQgggagbgOQgfgPgugPIhRgYIiTgwQgJgDADgJQACgKAJADICvA4IBGAWQAnANAaANQAZAMAeAaIAyAsIBnBgQAHAHgIAHQgDAEgEAAQgDAAgEgEg");
	this.shape_11.setTransform(67.6,64.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D9A991").s().p("AjSBYQAAgLAGgOQAchGBOhCQAegZAYgHQAqgLAzAfQAOAIAbAUQAbATAPAJQAnAWAoAGIhiABQgOAAgHgBQgJgCgJgFQgVgLgOgLIgUgPQgMgJgIgEQgdgKggAVQgSAMgbAhIhOBeQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABAAIgIARQgNgFAAgQg");
	this.shape_12.setTransform(61.7,17.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D9A991").s().p("ACiA1IgbgUIgbgUQgigWgrgLQgngLgsADQhSAFhOAvIgeATQgSAKgPADIADgJQgJgKAAgPQAAgPAJgIQAGgHALgFIAUgJIAfgSQAlgUA8gMQAwgJAiADQAlADAtAVQAcANAxAfICUBZIgWABQg2AAgsgbg");
	this.shape_13.setTransform(69.7,45.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D9A991").s().p("ACMBOQgLgHgogjQgegbgXgJQgWgKgugJIhogXQgngJgQgKIgRgMQgLgGgIgCIgFAGQgHgVAHgLQAJgNAfAGQAyAMBhAgIBoAkQA2ASAWAQQAMAJAVAZIBFBTQg2gHgrggg");
	this.shape_14.setTransform(61.8,68);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D9A991").s().p("Ai0BmIARATQBegYBDhNQBAhNAIhgQABgMAFgFQAEgCAIAAIBcgIQADA0gjA1QgbAog1ArQhDA6gQAUQgtAvgNAwQhBgZgqg2g");
	this.shape_15.setTransform(25.5,90.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E9CAB2").s().p("AlpIVQgbgJgVgVQgogngagzQgmhLAMhMQAXgaAeg0QA9hpAniGQAjh7ATglIAUgZQAGgJAmgSIAkgPICWjNQAPgUAYgPQAugdAyAaQBPAqByBAIBdAlIgNAVQgWAVgwgCQgzgCgigJQgWgHgZgOQgQgJgagYIgXgXIg7ACIhZByIgSAfQgRAhAIAKQALAPAlAJQAnALAogHQA6gLBSgIIAsAXQAxAcAaAUQArAgCaB6QgnAEgvgGQgdgEg/gfIg6geIh3gjIhwAFIh0AyIBPApIC6A7IArAaQAtAeASAQIB2BuIgNATQgSASgWgEQgXgDgSgFIgNgEIAZATQAUATgagBIgwAAIgRAAQhjg0gVgZQgOgQgngKIglgHIg2gEQg3gDgDADIgOAnQgOApgPAYQgaAohMA/IgQAFIgxAiIhAB3QgJAAgOgFg");
	this.shape_16.setTransform(51.3,54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.9,108.6);


(lib.s1724 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("ApXFLQgvhFAUh4QAMhJAUgwIALgWQAGgOgCgLQgBgIgGgPIgKgWQgKgrAJgrQAKgsAbgiQANgQA9g3QAugqAQgmQAEgJAJAFQAJAFgEAJQgPAigiAhQgTAUgrAlQgyAvgKA9QgLA+AiA6QAEAFgEAFQgZAqgQBFQgRBKAEA/QAMClCQgaQAigGA6gWQA/gWAdgHQAwgKA0gdQAjgUA3gnQCUhrDMiyQDijLBzhiQAHgHAHAIQAHAHgHAGQhEA6imCTQiUCEhXBGQhsBchhBJQhAAwgjAVQg6Aig1ANQgXAFhBAXQg8AUgiAHQgWAEgVAAQhNAAgqg+g");
	this.shape.setTransform(63.4,167.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("AmJIEQgIgFAEgIQCPkjDjjaIA9g5QAkgjASgdQALgSAPgsQAOgpAPgUQArg4BJhOQBThWAogrQAGgHAHAHQAHAHgGAHIiBCOQgTAVgrAqQglAngSAdQgKASgPAsQgOAogPAVQgRAXgeAdIgxAvQjpDciTEpQgCAFgFAAQgCAAgEgCg");
	this.shape_1.setTransform(60.9,78.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5663B4").s().p("AosPoQgsgLgegXQgZgTgGhiQgFhUAHghQAEgRAbg4IAag0QgRhPgCgoQgBgZAWgsIAWgnICBiKIBqihQBpigABgHQABgKEKkQQAUhGArg7IAngsQAugzAxg5QBjhyAPgeQAPgfBxh9ICCg4QASBAAdC0QAcC0gPEiQgRE4g+EFIjMCPQgUAijVC9QhrBfhlBYQhTBAiSA0QgxASh8AjQgUAGgXAAQgWAAgYgGg");
	this.shape_2.setTransform(67,105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4.4,133.5,202.3);


(lib.s1723 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("ADgGBQg/gBg4gMQg2gMgngkQgYgZgmg7Ij3l7IgphEQgZgqgUgWQgZgbgrgFQg4gFgSgIQgjgQgZglQgGgIAJgFQAIgFAGAIQAZAjAjALQASAFA4AEQAfACARAPQAQAOASAeIAdAwIEXGsIAgAzQARAeASARQAmAkBGAKQAkAGBVAAQBOAAA1gQQAbgJAXgTQALgJAdgfQBShYALiMQAHhUgXiaIgBABQgJAEgFgIQgFgJAJgEIAOgHQAEgCAFACQAFABABAFQAZCfgFBWQgICLhIBaQgnAwggAWQgnAbg2AJQg0AJg4AAIgMAAg");
	this.shape.setTransform(69.3,196.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("AB+JuQhfpwiwplQgCgKAJgCQAKgDACAJQCuJgBiJ1QABAKgJACIgEABQgGAAgCgHg");
	this.shape_1.setTransform(76.1,147.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#041404").s().p("AJZN0Ikqk2QgHgHAIgHQAHgHAGAHIEhEtQBDhriBidIhVhnQgwg7ghgvQgyhJgegyQgqhFgYg9QgQgmgNhbQgNhTgVgrQgbg2g2hBIhehsIjPj0QhEhPgbgcQg4g7g0gkQhBgtg/gIQg/gJgigLQgJgDADgKQACgKAJADQAVAHBSAQQA+ANAlAWQAvAcAwArQAkAiAvA0QBKBTBlB3ICrDNQAqAyAUAdQAgAtAQAqQAOAlAMBSQAMBQASApQAvBqBRB0QA+BYBhBxQBGBSAYBEQAhBeg2BJQgCAEgFABIgCAAQgEAAgCgDg");
	this.shape_2.setTransform(66,88.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5663B4").s().p("AF5SIQhDgBhJgFIimgWIifjrIkPmfQgigIhIgOQgtgIgKgdIgKkAIhzrrIBApDIBIAVQAbAIAdAPQBeAvBQBcQCBCUDxEdIAtA8QAvA/AHANQAGANAPBFIAVBkQAIAhAjBOQAhBKAUAhQAOAWB5CfICDCuQAbAnARBHQAWBggnArIAFCDIgCA2QgFBBgLA3QghCyhNASIgEAKQgGAMgKAKQggAeg/AAIgGAAg");
	this.shape_3.setTransform(64.6,117.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131,234.9);


(lib.s1721 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnxR3QBxipCyhPQg0g9gMhZQgKhSAahVQAXhHAyhOQAig2BBhRQBUhqBJgzQBlhHBhAMQh0ingcjcQgbjRA6jSQA1jCB5i6QBtimCdiYIgBhPIAGBKIgFAFIAROvQhvAohOBpQhIBkgUB9QghDUBzEEQjFBPhaDXQhaDWBSDEQiVAVhNARQh9AchdAsQhuA1hNBSQhUBbgYBrQAGjCBxipg");
	this.shape.setTransform(614.9,291.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AQyMyQhbh0h8g+QiAhBiQACQiVACh2BKQA9hbgMh4QgKh1hIhZQhEhUhtgwQhmgshzgEQjCgGjuBtQgThohBhPQhDhWheggQhigihnAkQhpAlguBaQg/jqgEj9QgEj+ASjrIgNgSQCthIDCAQQDCAPCgBjQCgBjBlCmQBlCnANC7QDTAVB5ApQCxA9BPB+QA0BSALB1QAIBbgQB+QCCgHB/BEQB2BABXBwQBMBjA1CIQArBtAiCXQgriKhYhvg");
	this.shape_1.setTransform(121.3,375.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CDE7F1").s().p("EAG/AqOQ92gDuqABIvDgBQgYAAADhKQADhKAIiSQAJiTANiTQANiUgRrVQgSrVgExWIAA6fQARjyAAhcQABhdBDAVQDPAIAfAEQAfAECHAEQD6gSDnCNQD5CYBfD/QBgEAhZEVQhZEWjiCYQB3gFBkBRQBlBSASB2QATB1hGBtQg+BfhgAlQA4gLA2A0QBBBAgHBSQgHBHgyBJQgiAwhJBKQBwhDCHgSQCCgSCEAfQCEAfBtBJQByBKBGBtQBGBuAWCHQAVCBgbCFQgbCEhGBwQhIBzhsBKQC1hqCOATQBYAMBBA8QBFBAACBTQA8iMB/hlQB4hgCbgqQCagpCYAWQCgAXB5BbQCiiNDNhNQDNhNDXAAQAjiGCKhEQCLhDB/A3IArhfIhRhGQCCAsBBAdQBoAvBFA+QBRBIAhBkIADAIQANhDAehCQBJieCNhYQhoABg8hoQg8hmAphgQAoheBpgtQBmgrBpAZQBhAXBVBJQBMBCA3BfQgXgtAMg3QAMg3ApghQApggA4AAIATACQhMgohIhFQhShQhaiFQhRh4guhhQg7h7gThzQgViCAgh4QAhiDBYhTQBchaCGgKQCKgLBbBTQg6g4gUhUQgThPAThTQAShUAzhAQA1hDBMgaQiPhQhNibQhOiaAWiiQAHg4AVgkQAUgkAZABIBOACQA0ACI3ALIAoAAMAAABTTQAAAVgDAMIgBAIIgWABIg6ACQgrABh1gFQh0gFlOAJQkEAIzCAAIr/gBg");
	this.shape_2.setTransform(338.7,270.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AHGa4QgcgTgRgeQgSgigEhEQgDhMgKgcQgZhKhNguQhMguhWAFQhcAFg5A+QgJAIgIgIQgJgJAIgJQA0g5gPhRQgMhHg2g9QgmgqhAgxIhuhSIh7hdIgsgdQgfgVgGgNQgEgHABgOIACgVQgBgpgIgrQgNhFghhFIhbAoQgJAEgGgGQgHgGAFgJQA7hshShxQhMhph4gWQh9gXiVBIQhUAoicBwQgIAGgGgHQgGgIADgIQAjhOgfhaQgbhOhEhBQgFgEABgHQABgHAFgCQA3gWAbg3QAcg5gUg5QgVg9hBgZQhAgZg7AbQgHADgHgEQgIgFADgIQBkj4A6j3QAnimAGhcQAJiSgyhtQhKihjEhzQhzhEjZhNQh+gMhNgCQhOgChdABQheACgpgBQgpgBg8ACQg8ABhegEQhfgEgpADQgOABgKAGIAAgSIAkgDQBLgHBdAFQBeAEAVAAICaABQCFABB8gFQB7gFBKAFQBKAGgEAMQgDAMgLgEIgEgBQC6BFBqA/QDIB2BNClQAwBngDCGQgCBhggCQQg7EHhmEGQA1gPA5ATQBJAZAdBCQAeBCgeBHQgaA8g3AdQBBBDAaBPQAYBLgRBGQCVhpBegoQCthLCJA0QBzAtA8BpQA4BigjBcIBIgfQANgFAEAJQAoBOAOBLQAFAYACAzQAFAsAWAUQAaAZAtAgIBLA2ICHBmQBAAyAiAkQAyA1AUA4QARA2gIA1QgDATgEASQAdgSAngIQBGgPBIATQBJAUA1AwQA3AzAQBHQAFAUACAfIADA0QADAfAFATQAHAbAPASQAUAXAZAIQAdAIAWgUQAPgNAMgeIASgvQATgkAeghQA+hFBagdQBTgbBUAOQAdiEBchhQAtgvA0ggQAdgTAjgPQAIgDATgGQARgGAGgJQAFgGAEgTQAFgVADgFQAMgdAUgZQAigrAwgcQAygeA4gHQAkgFAjAFQgcgigSgrQgchBgBhDQgEidB6hDQAwgaA8AAQA6AAA0AYQBOAkAdA/QAQguArgkQA3gvBAABQhEg/gjhZQgthxAZhzQAahyBdhVQBNhGBhgZQgxgcgjgwQgtg+gMhQQgMhQAXhLQAYhOA5g0QBCg8BagNQBTgLBWAfQBTAeBBA+QA2A0AcBAICPkmIAPgeQACgMgNgPIgYgTQhRhAg1gzQhFhDgthEQgyhLgVhMQgZhbAVhLQAThDA3gnQAigXAigNIAAAYIALAAQhJAagjA9QgpBFASBeQAbCFByB+QBGBMCcB4QAHAGgFAJIi1F0QgEAIgIgCQgJgBgCgIQgZhJg9g7Qg8g5hNgdQhRgdhMAKQhTAKg+A4QgzAugXBJQgVBEAKBKQAKBKAoA5QArA9BDAZQAIADABAKQABAKgKABQhtARhVBKQhWBLgcBqQgdBrApBuQAoBtBcBDQAIAGgDAKQgEAJgLgDQhOgVhBA5Qg8AzADBJIABAMQAAANgMgBQgMAAgBgMIgBgMQgKhhhqgsQhtguhZA3QhpBBAICMQAICDBZBTQAHAGgFAJQgFAJgJgDQhpgihjA+QhiA+gSBtQgBAGgHACQh8AkhYBhQhXBggZB/QAAAFgFADQgFACgFgBQhrgWhnAyQhnAzguBjIgdBAQgVAighAFIgNABQgaAAgZgQg");
	this.shape_3.setTransform(307.3,173.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgIMAqGQi9gckSAQQkSAQiKADQiKAEkjgGQkigGhRAAIkxgCQjhgChqAEQh6AIhCADQh3AFhCgQQgKgDhTAKQhIAIgLgRQgIgLADghQAFglAAgLQAToygDpAQgBksgPsEQgOrLAJoWQAJoVgEmBQgDmBADiAQADh/gBg5QgBhEABgXQAFhrAMgOQAMgNClAAQCkABCWADIDvAFQBYACCEgDQD6BZCKBbQDQCJAyC+QAXBTgHBnQgFBMgYBwQg+EjhxEVQA7geBFAYQBFAZAbA9QAaA8gcBEQgcBDg+AYQBIBCAdBXQAfBggmBNQCRhoBXgrQCJhDB5AHQBDAEA/AlQA9AjAqA3QAqA5AJA9QAJBCghA4IBngtQAhA/AQBFQAPBHgEBGIElDeQBAAuAeAcQAwAuAaAvQAdA4gCA9QgDA9gjAnQAuguBEgNQBEgOBHAVQBHAVAwAxQA1A0ALBEQADAPAEBBQADAyALAdQAOAnAmAVQAoAWAggVQAQgLAMgXIASgqQAshrBvg5QBug6BxAaQAXiABchlQBchlB9giQAPhuBrhDQBrhCBqAlQhchQgIiDQgIiGBZhNQArgmA/gHQA7gGA5AWQA6AVAkArQAfAkAGAsQAAhFA/g2QBKg/BQAaQhdhBgrhxQgqhxAbhvQAbhvBZhQQBahRBxgPQhKgaguhEQgqhAgIhTQgIhTAchJQAfhPBAgsQBBgtBSgFQBOgFBOAfQBNAeA5A5QA7A7AYBLIC1lzQich5hKhSQhxh+gbiEQgVhqArhHQAohDBfgcQBCgTBvgDIJRAAQBpAMgHAFQgIAGALAAQAMAAAMArQAIAdACA0QAiP/gCUGQgBHlgSdTQgBBEADDiQACC2gEBsQj7AFnxgJQnygJiXgBQiYgBm9AGQm+AGkFgFQm6gKkaAZQiEAMhwAAQiAAAhlgQg");
	this.shape_4.setTransform(339.9,271.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C6F0FD").s().p("Eg0zAqGMAAAhULMBpmAAAMAAABULg");
	this.shape_5.setTransform(339.4,270.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,679.3,542.2);


(lib.s17114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANQgHgFAAgIQAAgHAHgGQAFgFAHAAQAIAAAGAFQAFAGABAHQgBAIgFAFQgGAGgIAAQgGAAgGgGg");
	this.shape.setTransform(131.1,36.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAUQgJgJAAgLQAAgKAJgIQAIgJAKAAQALAAAJAJQAIAIAAAKQAAALgIAJQgJAIgLAAQgKAAgIgIg");
	this.shape_1.setTransform(116.4,74.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSATQgJgIAAgLQAAgKAJgJQAIgIAKAAQALAAAJAIQAIAJAAAKQAAALgIAIQgJAJgLAAQgKAAgIgJg");
	this.shape_2.setTransform(22.7,34.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAIAJQAKAJgBALQABAMgKAJQgIAIgMABQgLgBgJgIg");
	this.shape_3.setTransform(20.8,86.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAhQgOgOAAgTQAAgSAOgOQAOgOASAAQATAAAOAOQAOAOAAASQAAATgOAOQgOAOgTAAQgSAAgOgOg");
	this.shape_4.setTransform(4.8,59.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSATQgJgIABgLQgBgKAJgJQAIgIAKAAQALAAAIAIQAJAJgBAKQABALgJAIQgIAIgLAAQgKAAgIgIg");
	this.shape_5.setTransform(118.2,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.shape_5},{t:this.shape}]},2).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.shape_2},{t:this.shape_5},{t:this.shape_1},{t:this.shape}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.8,31.3,115.3,57.9);


(lib.s17112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("AAdA4QgMgNgHgCQgVgEgLAPIg1gXQAUgFAYgRIAngdQAKgHAWgSQAXgTAJgHQAKAcgTAzQgDAJgFAZQgGAZgDAJQgEgDgNgPg");
	this.shape.setTransform(43.3,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("AhjABQgKgegCgcQAOgCAWAJQASAHAPALIAQALQAIAEATADIA8AIQAjAEAQAHQgWAKgIAXQgfgKghABQgcAAgGARQgGgGgJgBQgJgCgIACQgOAEgOAPQgNgYgKghg");
	this.shape_1.setTransform(17.2,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#041404").ss(2).p("AisgQQANAPAwAMQAzAPAqAAQBWAAAzgUQACgBA5gf");
	this.shape_2.setTransform(27,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#041404").p("AgXALQAHgLAPgEQAMgGANAF");
	this.shape_3.setTransform(2.4,8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#041404").p("AgiADQAGgFASgEQAPgEAHACQAMADAMAR");
	this.shape_4.setTransform(51.8,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#041404").ss(2).p("AhPAXQAOgSAUgJQAVgLAWgCQAVgCAWAHQAWAHARAO");
	this.shape_5.setTransform(33,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#041404").ss(2).p("Ag+ADQAcgXAlAFQAjAFAVAaQACACABAD");
	this.shape_6.setTransform(20.9,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#041404").ss(2).p("Ai7gSQAHgSAHgFQAGgFAIAAQAHgBAFAGQAEAEAAAIQAAAFgBAJQgCAaAVAYQATAXAdAIQAZAHAggCQAUgBAkgIQAmgHASgKQAegRAFgcQABgJgEgWQgFgWABgKQARgNAXAIQAWAIAGAU");
	this.shape_7.setTransform(29.1,26.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#041404").p("AjfhlQAHAAAkAOQA6APB1AAQB+ABA9glQAegSALgSQAIA3gmBgQgkBcgdARQg0Aeg/AHQhFAIgzgaQgxgYgnhuQgMghgJglQgIggABAAg");
	this.shape_8.setTransform(28.3,21.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhzgFQgRgHgFgJIgGgBQCPAFCQgFQgMANgeAJQgqARgVADQgPADgRAAQg1AAhFgcg");
	this.shape_9.setTransform(26.6,16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag9BYQgNgCgVgMQgtgZgSgTQgOgOgHgQQgHgSACgTIABAFIACgKQADgMAJgHQAGgDAFgBQAHAAAEAEQAEAEAAAPQABAbARAVQASAXAaALQAyAUA3gaQAFgCAQgBQAQAAAFgDQAGgDAQgNQAMgKALgCQAIAAABAAQAEgDABgHQAHgfgEgfQgBgKAEgEIAFgCQAPgDAPAHQAPAIADAOQADAKgFANQgDAHgIAOQgYAigPAQQgYAbgcAJQgJAEgUADIhFALQgRAEgNAAIgNgCg");
	this.shape_10.setTransform(29,29.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BB5867").s().p("AgcBKQgSgCgjgGQgQgDgGgEQgMgHgIgZQgHgZgEgYQAIgKAOgEQAOgFAPACIAeADQAQACAKAHQAIgTAQgNQAOgMAUgDQAVgCAcAKQAbAKAPAOQACACABALQAAAMABACIAGAOQADAFAAAHQAAAEgHAFIgKAJQgCADgIAFQgwAdgkAGQgPADgPAAIgWgBg");
	this.shape_11.setTransform(28.4,25.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,57.5,39.5);


(lib.s17111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("AgVCYQgggngNguQgOgvAHguQAJg/AegeQAQgQAbgJQARgEAjgHQALgCAEAMQADAMgMACQgoAKgMAFQgaALgQAUQgQAVgGAyQgEAnALAnQAMAmAbAgQAFAJgHAJQgEAEgEAAQgEAAgEgEg");
	this.shape.setTransform(7.7,35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#041404").ss(2).p("AgGgjQAAAHAGANQAIAMgBAGQgBAFgHALQgHALACAG");
	this.shape_1.setTransform(179.7,34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#041404").ss(2).p("AAAgdQAGABADAHQADAFgBAHQgBAFgKAOQgHANgEAH");
	this.shape_2.setTransform(178.9,22.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#041404").ss(2).p("AiwhNQAGAfAFAQQAJAZAQANQAIAIAWAMQAgASARAIQAcAMAYADQANACAdgBICagH");
	this.shape_3.setTransform(146.9,48.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#041404").ss(2).p("Ai7hQQgRAFgEAkQgEAhAIAMQAKARAuASQARAGA/ATQA4ARAdgDQANgBATgFQALgDAVgFQAvgMBcgD");
	this.shape_4.setTransform(145,37.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#041404").ss(2).p("AADgfQAFAegNAY");
	this.shape_5.setTransform(133.5,27.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#041404").ss(2).p("AiwgJQAfAMBUAFQBGAEAXgEQAWgDArACQAqgBAmgQ");
	this.shape_6.setTransform(147.4,31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#041404").ss(2).p("AAlgdQgdgEgbAAQgRAAgEAbQgFAYAKAEQApAPAugE");
	this.shape_7.setTransform(128.8,26.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#041404").ss(2).p("AizArQARgrApgbQApgbAvgBQBCgBBRA4QAnAdAbAf");
	this.shape_8.setTransform(158.2,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#041404").ss(2).p("ADmhsQgMAhgVBEQgVA2gfAPQgiARg0AOQg7ARgfgCQgrgChNgxQhOgxAAgaQAAgaAIgLIAJgF");
	this.shape_9.setTransform(157.1,57.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#041404").ss(2).p("AgRgiQAHAnAhAV");
	this.shape_10.setTransform(42.6,21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#041404").ss(2).p("AAbgLQgPABgMAIQgLAHgGAN");
	this.shape_11.setTransform(64.5,33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#041404").ss(2).p("Ag3gUIBvAp");
	this.shape_12.setTransform(38.2,22.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#041404").ss(2).p("AjMA4QATASAjANQAeAKAQAAQAXABA6gKQA4gJAWAAQAeAAAOgCQAYgEAPgMQAGgEAOgRQALgNAKgFQAPgIAEgDQAJgIgDgGIAAgRQgCgMgLgJQgJgJgNgDQgSgGggAEIirAQQgWACgKgCQgMgCgZgRIg6go");
	this.shape_13.setTransform(49.2,36.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#041404").ss(2).p("AjWA6QAmgJBaAGQAuADArAFQASABAigMIBkgjQAugQAGgXQAFgLACgHQADgKgFgU");
	this.shape_14.setTransform(52.5,47.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#041404").ss(2).p("AjIBWQAYgEBKABQBCAAAXACQAmAEAtgVQAegNAwgiQAVgOAFgJQAQgRAGgQQANgdgZgU");
	this.shape_15.setTransform(49.6,57.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#041404").ss(2).p("AkLiBQA0BnBNBUQAdAgAVAKQAOAGAjAHQA+AJAfACQA2AEApgKQAugKAfggQAfggALgt");
	this.shape_16.setTransform(33.1,63.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#041404").ss(2).p("Aj9A8QAlgeArgZQBbgyBZgLQAjgEAmAVQAwAaArAGQAjAEAbAQQAOAIAHAI");
	this.shape_17.setTransform(39.5,15.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D9A991").s().p("AgoAVQgKgVgBgNQgBgLAFgSQAJgnAYgbQAXgfAigHQAFgBACABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgCAHIgCgIQglBBgIBMQgGBMAUBIg");
	this.shape_18.setTransform(7.5,37.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D9A991").s().p("AgwDBQgBgDACgFIATglQALgWAFgPQAIgagBghQAAgUgEgmQgIhFgMggQgUg4gpgZIgCgFQADgHAMAGQBTAvA1BQQAeAuADAlQACAXgIAcQgEATgMAdQgIAVgHALQgJARgMAKQgUAQgvAHIgGABQgHAAgCgFg");
	this.shape_19.setTransform(183.9,27.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D9A991").s().p("ABSA6QgRgGgIgOQgDgGgDgLIgGgRQgOgYgfgFQgTgDgmAFIggAEQgUADAAAMIgDgGQAtgZAzgRQARgHAMAAQATAAASANQAQAMALATIARAjQALAYAIAMQgIAEgJAAQgHAAgHgCg");
	this.shape_20.setTransform(158.7,11.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D9A991").s().p("ABWD5QgMgEgUgKQg4gdg2giQgWgOgLgMQgUgZAHgfQAEgNgBgFQgBgCgQgGQgQgFgBgCQgKgOABgXQABgbgDgLQgaABgTgWQgTgWADgaQABgHAJgZQAHgTgCgNIgDgQQgBgYAggRQAigSAvgIQAjgFAxAAIBWAAQAxgCAjgKIgCAGQgSAIgLASQgLASABAUQABAUANAQQANARATAGQgMANgFASQgGASAEARQADASALAPQALAPARAIQgTAUACAfQABAfAVAUQgEAIgMAHIgTANQgTAQgBAcQgBAcASARQgOAOgIAFQgNAKgNADIgMABQgKAAgMgDg");
	this.shape_21.setTransform(145,43.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D9A991").s().p("AhHA+QglgZgdggIAIAGQAngIAYggQAMgUAHgKQAPgRAOgBQgEAJADAFQADAJARAAQBFgCBEALQgxgCgkALQgtAOgWAhQgMAQgBAQQgBAVAOALQgHADgIAAQgSAAgYgQg");
	this.shape_22.setTransform(44.3,24.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D9A991").s().p("AjEBSIASgHQgOgQgBgZQgBgXAJgUQAIgTALgIQAQgMAgAAQBJgBA/AIIAcADQAQABAMgCQAMgCAcgNIA1gZQAKgFAHAAQAMABABAJQgHAlgNARQgEAFgOAMIgzAoQgcAXgTAJQgVAJgpADQgyAEg1AAQgtAAgvgDg");
	this.shape_23.setTransform(49.5,57.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D9A991").s().p("AgQA7IgtgFQgugEhbAGIAKgCQgUgSADgaQABgMAIgGQADgDAJgCQAPgDAWAEIAmAGQA0AGAvgSIAegLQAIgCAoABQAdABAOgLQAKgKAGgDQAFgCARAEQAbAFAYgOQAJAKgEAQQgDAOgLAMQgTATggAOQgUAKgoAMQgfAKgVADIgTABIgZgCg");
	this.shape_24.setTransform(51.7,47.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D9A991").s().p("AhnA3QgrgHgngTQgIgFgBgCQgFgGADgQQAGgbAOgIQAKgHAXACQAZACA5AKQA0AIAbACQBiAHA6grIgHABQANgEAGABQAFABADADQAEAEAAAFQgBAEgFAFIgaAgQgRASgLAEIgTALQgNAIgGAAQg6AEg6AKQgYAFgYAAQgTAAgUgDg");
	this.shape_25.setTransform(49.3,40.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D9A991").s().p("AA+CeQgrgUgTgWQgMgNgSggQhfikgmhTQBIBoAdAnQAyBEAmAjQA3AwA6ALIgPgWIAaAYIgLgCIAWAhQACADAAADQABAIgOABIgJAAQgiAAgtgTg");
	this.shape_26.setTransform(19.1,56.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D9A991").s().p("Ah5AtIgCgDQgOgRgDgNQgFgSANgNQALgKAaACQAXACAuAIQAnAGAcgFQAhgGAugcQAGgEAHgBQAHAAACAFIABAGQgCAVgPAUQgNAQgVAMQgSAKgZAGQgRAEgcAEQgmAGgYABQgkAAgbgLg");
	this.shape_27.setTransform(44.3,70.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E9CAB2").s().p("Ah8FAQgNgHgZgSIglgZQgLgGgIgSIgPgdQgJgNACgRQACgRANgHQgagGgRgXQgSgXABgbQAAgNgCgFQgDgGgMAAQgNABgFgDQgPgLgGggQgGgcAHgTQADgHAPgDQAIgCAHABQgJgDgJgHQgPgLAAgKQABgKAOgMIAXgRQAigcA+ABQATAAAgAEIAyAFQBFADA+gZQAUgHAGgLQADgIgDgUQgLgzgbgFQgFgBgOACIiqAcQANgvAqggQApgfAygEQAugDAvAXQAtAXAeAoQAOgFAQADQAQADALAKIACgIQAXAZA6AxQAyAuAMAnQAOAwgfBJQgfBLgtAaQgGAEgLgBQgHAAgGAHIgMARQgFAHgBAMQgHAxghApQgiAngvASQg0ATgyACIgKAAQg2AAglgVg");
	this.shape_28.setTransform(158.6,34.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E9CAB2").s().p("AgCFEQhXgKg+gnQgqgbgeghQgbgdgdgvQgcgvgPgdQgVgsgJgkQgKguAGgqQAIgvAaggQATgYATACQALABAHAMQAEAHgCAGQARgcAbgTQAfgWAjgFIgZgKQAcgRAngMIBIgSQAvgMAXgCQAogCAcARQAJAGAeALIAnAOQAKAFAvAHQAgAFAJAWQgbAAgvAGQg0AJgXACQgmAFgaAXQgQANgIAgQgIAgAMAOIBogKQA+gGAqAFIAbADQAQACAIAHQAUARgLAcQgMAcgaAEQAKAGANACQANADALgCQALgDAOAGQAOAFACAJQABAEgOAWIgRAaQgLAUgEAjQgCAXgbATQgcAVgqA6QgoA2gcARQgtAbhDAAQgSAAgTgCg");
	this.shape_29.setTransform(37.8,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.9,193.2,81.7);


(lib.s1719 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("AiwERQhygwhShRQhXhWgahkQgchxA0hqQgCgNAHgDQAHgDAYAcQAZAcASAiQASAiANAnIAYBGQAOAuAZAiQA3BSBaAsQBcAtBegNQBigNBQhCQBQhCAghcQAKgbAGgsQAFgyAFgYQAPhYA0glQAGgFAJAHQBQBCgkCDQgTBHhJCAQiHDsjWABIgFAAQhoAAhvgugAl5BlQA/BHBdAyQBaAwBdARQBeARBUgaQBYgaBAhGQBchlBCiyQAZg/gFguQgCgVgIgYQgLghgPgDQgagGgQBCQgJAigFAwQgIBCgSAzQgVA4gmAvQhSBkh7AfQh8Afh0g3Qg3gagugrQgugrgdg2Qgdg0gNg3QgNg3gTggQgUgggWgdQhRCwCUCkg");
	this.shape.setTransform(341.7,238.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4D865").s().p("AAZEyQhIgDhRgaQhbgehHgwQhPg1gwhHQg0hLgKhaQgKhfAohOIAAgJIAxA+QASAYAGAOQAFANASBfQASBdBpBYQBpBZB+AAQCAgBBohZQBphZAUh9QAIhPAIgmQAPhBApgZQAcAUAOAjQAMAhgCAlQgCAggNAmQgIAYgTAqQg3B5gxBEQhGBhhZAmQg9AahMAAIgPAAg");
	this.shape_1.setTransform(341.9,238.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#041404").ss(2).p("AhEkBIAeBoQAWBNAkB/QAdBrATBl");
	this.shape_2.setTransform(664.9,487.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#211816").s().p("AAhAxQgGACgwgBQgygBgGABQBDgNATguQAHgQADgUIABgKQAAAUAKAiQASA0AeAFg");
	this.shape_3.setTransform(657.6,456.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#041404").ss(2).p("AAzgcQgSgGgSACQgRADgPALQgPALgJAPQgJARAAAS");
	this.shape_4.setTransform(665.5,201.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#041404").ss(2).p("Agn0ZQAcAUALApQAIAdADAxQAgIRgKLHQgFGLgcNP");
	this.shape_5.setTransform(660.1,329.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#041404").ss(2).p("AjrAJQA2gDBqgGQDWgJBhAB");
	this.shape_6.setTransform(644.6,462.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#041404").ss(2).p("AAoBpQgghrgwhk");
	this.shape_7.setTransform(80.1,446.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#041404").ss(2).p("AAwBEQg5hAgjhN");
	this.shape_8.setTransform(79.1,454.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#041404").ss(2).p("AjWg8QB9gCBzAtQAZAJAnAQIB5A1");
	this.shape_9.setTransform(173.9,499.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#041404").ss(2).p("AgFgIIALAR");
	this.shape_10.setTransform(36.9,354.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#041404").ss(2).p("Ag4AAIBxAA");
	this.shape_11.setTransform(91.5,457.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#041404").ss(2).p("AAAgvIAABf");
	this.shape_12.setTransform(42.6,345.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#041404").ss(2).p("AAdqPQghAYgMA0QgJAkACA8IAYR9");
	this.shape_13.setTransform(44,271.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#041404").ss(2).p("Ai8O3QA8g8A/hXQAmg2BChrIFbogIAJgXQAcjfgCiPQgEjSg/ieQgPglgpgzQgwg9g8gvQiih+igAnQhpAahNArQhaAxgQA3");
	this.shape_14.setTransform(45.7,450.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#041404").ss(2).p("AjDgHQAQADC9AFQBfAEBcAD");
	this.shape_15.setTransform(636.4,198.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#041404").ss(2).p("AnZgJICkATIMQgD");
	this.shape_16.setTransform(439,193.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#041404").ss(2).p("AzTMiIAFzXQAAg+ADgeQAGgzAQglQAXg2A1gvQApgkBCglMAjcAAA");
	this.shape_17.setTransform(160,272.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAUQgIgIAAgMQAAgKAIgJQAJgIALAAQAMAAAJAIQAIAIAAALQAAAMgIAIQgJAIgMAAQgLAAgJgIgAgOAAQAAAPAOAAQAPAAAAgPQAAgOgPAAQgOAAAAAOg");
	this.shape_18.setTransform(533.1,249);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABDCAIgIABIgFAAIABgMIAAgEIhzAAIAAAFIAAAHIAAAFIgFgBIgGgBIgFABIgGABIABgYIAAhhIgRAFIgIACQgDgOgNgIQA/gGAogTQgWgTgNgUIgHAIIgSAXIgEAEQgIgHgRgFQAugfAQgzQANAKATAAIgFADQgHAFgJAMIgFAGIBhAAQAMAAAMgCQgRAkgxAeQAiALBKAAQgNAMgCAOQhKgIgigSQggAPgmAJIB/AAIAXgBIgBAbIAABPIABATgAAGBfIAyAAIAAgcIgyAAgAg8BfIAxAAIAAgcIgxAAgAAGAyIAyAAIAAgaIgyAAgAg8AyIAxAAIAAgaIgxAAgAAAgoQAYgOASgVIhPAAQAPAWAWANg");
	this.shape_19.setTransform(540.6,222);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag3BuQAIgIAAgNIAAgUQgaASgdAMIgHADQgFgMgJgKQA4gLAngmIhEAAIgJABIgHAAIAAgKIAAgOIAHABIALACIBeAAQgEgLgFgKIAJACIAMgDQACALAFALIBLAAIAOgBIAKgBIAAANIAAALIgIgBIgPgBIhhAAIgaAZIAAArIAIgGIANgJIAIgJQABAMAEALQgcAOgVARQgEgLgIgIgAAnBeQgWgQgUghQALgCALgHQAEAQAJALIAEAEQAUgNAOgRQAKAKAMAGQgTAIgRAKIgKAFQAdAVAxAAQgMAMgHAOQgsgNgWgQgAghgFIgLACIABgHIAAgJIAAgUQghAOgdAPQgFgNgIgKQAngHAkgRIAAg2IgBgNIAYACQgDALABAHIAABRIAAAUgABbgSIhHAAIgUABIAAgLIAAgMIAGABIAHAAIAdAAIAAgdIghAAIgJAAIgGAAIABgLIgBgMIAQACIAgAAIAAgaIgBgHIAAgHQAOADALABQgEAJAAAGIAAAVIAoAAIAKgCIAIAAIgBALIABAMIgKAAIgJAAIgnAAIAAAdIAdAAIALAAIAKgBIgBALIABAMgAhqhdQAJgGAFgKIAoAfQgKAHgHAJQgQgTgVgMg");
	this.shape_20.setTransform(540.5,195);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ABNBiIiAAPIgkAHQgCgQgIgPQASgDAKgIQALgIAXgbQAsg1AXhAQAMANASAFQgKAFgJAQIgKAPIgVAgQgXAngsApIB4gLQgTgYgRgRQAOgFALgJQAiAxAhAjQgQAEgKANgAhhAfQgKgIgNgDQAegUAcgqQAcgqANgqQAPAJAOAGQgIAGgIAPQguBYgoAkg");
	this.shape_21.setTransform(540.6,168);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhBB/IgLABIAAgKIABgMIAAiPQgIAQgOAVIgKAOQgHgNgLgIQA0g2AOhCQAPAHASAFQgLAIgIAQIgIAOIAAC6IAAAJIABAKgAAuB+IgLABIABgIIAAgLIAAiCIgyAAIgUABIABgKIgBgNIAKABIAJAAIAzAAIAAg+IAAgKIgBgKQAOAEANgBQgEAJAAAJIAAA9IAwAAIAKAAIAKAAIgBALIABALIgJgBIgLAAIgwAAIAACEIAAAIIABAJg");
	this.shape_22.setTransform(540.5,141);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAmCAIgLABIAAgJIABgKIAAgeIgpAAIgQAAIgNABIABgMIgBgLIAOABIARAAIAnAAIAAgaIgYAAIgQAAIgMAAIABgwIgBgvIALAAIANAAIATAAIAAgrIgBgNIAAgKQAOACAMAAQgEAIgBANIArAAIAWgBIALAAIAAAKIAAAKIgQAAIgRgBIgrAAIAAAZIAcAAIAUAAIAOAAIAAAuIAAAxIgbAAIgaAAIAAAaIAsAAIAQAAIANgBIAAALIAAAMIgcgBIgtAAIAAAdIAAALIABAJgAgDANIBRAAIAAgSIhRAAgAgDgUIBRAAIAAgWIhRAAgAh1BiIAIABIAOACQAHAAACgDQACgDAAgJIAAg/IgJAGIgPAIIgIAFQAAgPgEgOQARgCATgIIAAgxIgMAAIgOAAIgJAAIABgLIgBgLIAKAAIAOAAIALAAIAAghQAAgMgCgOIAdADQgGALAAATIAAAaIALAAIAKAAIAKAAIAAALIAAALIgMAAIgHAAIgMAAIAAAsQAOgFAPgMIgBAJIAAAFIAAAFIABAFIgVAIIgIAEIAABLQAAAUgIAHQgHAFgbACQAAgPgMgNg");
	this.shape_23.setTransform(540.6,114);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgvB9IgKAAIABgXIAAhQQgOAOgVARIgLAJQgGgLgNgJQA2gaAZgjIgpAAIgRAAIgNABIAAgKIAAgMIAfABIAyAAIAHgSIgfAAIgQABIgNAAIABgLIAAgKIAUABIArAAIADgSQglgBgjAEQgDgOgIgNQApAEAVAAQBUAAAsgKQAFAPAKAOQgQgCgQAAIhGABIgCAUIA5AAIAPAAIAOgBIAAAMIAAAJIgLAAIgUgBIg7AAIgHASIBkAAIARAAIAQgBIgBALIABALIgQgBIgSAAIhrAAIgMASIBZAAIAcgBIgBAXIAABNIACAaIgMAAIgNAAIABgGIAAgJIAAgHIhkAAIAAAJIAAAHIABAHgAglBXIBkAAIAAgOIhkAAgAglA5IBkAAIAAgPIhkAAgAglAcIBkAAIAAgPIhkAAg");
	this.shape_24.setTransform(540.3,87);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgvB9IgKAAIABgXIAAhQQgOAOgVARIgLAJQgGgLgNgJQA2gaAZgjIgpAAIgRAAIgNABIAAgKIAAgMIAfABIAyAAIAHgSIgfAAIgQABIgNAAIABgLIAAgJIAUAAIArAAIADgTQglAAgjAEQgDgOgIgNQApAEAVAAQBUAAAsgKQAFAPAKAOQgQgCgQAAIhGABIgCAUIA5AAIAPAAIAOAAIAAALIAAAJIgLAAIgUgBIg7AAIgHASIBkAAIARAAIAQgBIgBALIABALIgQgBIgSAAIhrAAIgMASIBZAAIAcgBIgBAXIAABNIACAaIgMAAIgNAAIABgGIAAgJIAAgHIhkAAIAAAJIAAAHIABAHgAglBXIBkAAIAAgOIhkAAgAglA5IBkAAIAAgPIhkAAgAglAcIBkAAIAAgPIhkAAg");
	this.shape_25.setTransform(540.3,60);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMAVQAMgFAAgRIgJAAIAAggIAWAAIAAAbQAAAggZAIg");
	this.shape_26.setTransform(567.5,195);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgnBcIgDgEQAKACAIAAQAJAAADgDQACgDAAgJIAAh3IBHguIhvAAIgjAAIgWACIABgNIgBgOQAVACAnAAIBmAAIA1gCIgBAPIABAPQgWAEgrAcIgeASIAAB8QAAAQgIAFQgFAFgdACQgBgNgJgMg");
	this.shape_27.setTransform(577.9,168);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ah4BoQAxgEAPgOQAPgNAFgvIgyAAIgTACIACgOIgCgNIAVABIC2AAIATgBIgCAOIACANQgMgCgLAAIg3AAIAAA4IAAAIQAAAHADACQADABAKAAIAOAAQANAAAEgFQAEgFAEgWQAMAMAPADQgIAYgHAHQgGAIgOAAIgsAAQgRAAgFgEQgEgEAAgOIAAhKIgeAAQgEAvgMARQgLARglAOIgVAHQgHgOgOgKgABBgSIgLAAIhjAAIgKAAIgJABIACgOIgBgMIAHABIAKABIBlAAIAKgBIAJgBIgBAOIABAMgABogkIgOABIABgIIAAgJIAAgUIiqAAIAAAUIABAIIAAAIIgOgBIgMABQACgJAAgIIAAgcIgCgQIAXACIBRAAQgCgOgIgOQANgBAPgDQADAQAGAQIBGAAIALAAIAKgBIgBAIIAAAJIAAAcIABAQg");
	this.shape_28.setTransform(577.7,141);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAhCAQAAgRgJgLQAGACALAAQAPAAAAgHIAAgKIAAiiIgpAAIgcABIABgMIgCgPIAgACIBFAAIATgBIAQgBIgCAOIACANIgOgBIgOAAIgQAAIAACpQAAAXgGAFQgHAFgdADgAhsBlIAGABIANABQALAAAAgMIAAg9IgUAJQgLAEgGAEQAAgQgFgJQALgBAIgDIAXgIIAAg7IgTAAIgXABIAAgLIAAgKIAKABIAMAAIAUAAIAAguIgBgNIAHAAIAPACIAEAAQgEAFAAAJIAAArIATAAIATgBIgBAKIABALIgJgBIgKAAIgTAAIAAAzIAUgFIAWgLQgCAJAAAEQAAAEADAHQgJAAgGADIgcAKIAABRQAAAMgIAEQgIAFgZADQgBgPgJgMg");
	this.shape_29.setTransform(578,114);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgjB1QAAgSgLgMIAKACIASABQAMAAAAgNIAAhPIhZAAQgKAAgMACIABgOIgCgOIAWACIBaAAIAAhEIg7AAQgMAAgMACIACgOIgBgNQAMACAMAAICNAAIALgBIAIgBIgBANIABANIgUgBIg9AAIAABEIBSAAIAWgCIgBAPIAAANQgJgCgLAAIhTAAIAABYQAAAQgLAIQgJAHgeADIAAgDg");
	this.shape_30.setTransform(577.6,87);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMBRQAKgJAEgNIAUAMQAoAYAeANQgLAIgJANQgfgcg1gUgAh6BLQAngCA4gPIgCAPIABAJQgxAHgkAPQgDgOgGgPgAALAqQAKgIADgLQAgARAjAPQgJAIgEAOQgigYghgLgAh9AWQANgDAHgHQAGgHAagiQgbADgQAGQgCgMgHgLQAegSAVhAQAOAHAOAGQgLAKgJANIgQAWIgSAYIAkgDQANgUAHgVQANAMANAGQgKAHgMATQgUAcgfAjQAggFAbgIIgCAFQAigGAfgVQgMgTgKgSIgVAoQgJgJgNgEQAigjAUhEQAPAIAQAFQgMAIgJASIA7AAIAKAAIAJgBIgMAXQgOAagXAZQAbARAoAFQgNAMgFAPQgogSgYgSQgaAVghAPIgDACQgEgNgMgKQgCAKAAAKQgnADgoAMQgDgNgHgMgAArgdQAPgQANgYIgwAAQAHAVANATg");
	this.shape_31.setTransform(577.7,60);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#041404").ss(3).p("AKgooQgOiFgOhLQgWhxgnhWQguhkhLhHQhShNhhgXQg/gPhPAHQg0AEhZASQhwAXg/AWQhfAhg+A1QhUBHgvB9QgjBfgTCQQgoEmAOEqQAFBqAAAXQABBKgLA4QgOBEgjA2QgmA7g4AbQBOAWA0BSQAsBFASBiQAKA5AOB1QARBmAjA/QAsBQBWA3QBOAyBjAUQBTASBogBQBBAAB9gKQB1gIBBgUQBhgdAyg/QAcgjARg0QAMgkALg9QA+lRgCmRQgBk8gtmpg");
	this.shape_32.setTransform(545.8,145.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#211816").s().p("AgsAQIAIABQgBgIAFgJQAIgPAVgDQAUgCARAMQAIAGAEAEQgMAGgRAFQgTAGgSAAQgNAAgLgDg");
	this.shape_33.setTransform(365.3,176.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#211816").s().p("AAAAVQgqgDABgKQAEgIAIgGQARgQASACQAVACAIAPQAGAHABASIgOAAIgcgBg");
	this.shape_34.setTransform(310.7,176.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#041404").ss(2).p("AgwBHQAQgmAVgiQALgWAOgRQAVgZAOAB");
	this.shape_35.setTransform(398.6,157.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#041404").ss(2).p("Ai8COQAxhzBrhLQBphMB9gK");
	this.shape_36.setTransform(524.3,349.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#041404").ss(2).p("AmQBaQAwgRBLgvQBUgzAkgQQBhgsCDgEQBTgCCdAQIgUAC");
	this.shape_37.setTransform(543.7,411.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#041404").ss(2).p("Ap0Q6QCBAeCDgWQAogGAygOQBsgdD9gSQESgSBeAZQAzAOBDAFQAoADBRABQgug3gihvQgriOgRgkQgRgigggxQguhEgIgMQg1hYgchgQgIgYABgQQAAgMAEgPQABgEAIgXQAVg9AQhRQAJgsAPhiICdw1QleCPlADGQgcARgQAHQgaAKgVgEQgLgBgUgIQgUgIgLgBQgYgCgrAWQgtAYgWgBQgdAAgdgYQgQgNgeglQhhh3iKhG");
	this.shape_38.setTransform(560.6,375.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#041404").ss(2).p("AC9izQiNA3hZBVQhtBiggCB");
	this.shape_39.setTransform(159.1,433.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#041404").ss(2).p("ACwB5QgBgCgBgCACwB5QADgBAGASQAGAPgPgggAjAiOQDuBnB7CcQAEAFADgB");
	this.shape_40.setTransform(167.4,339.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#041404").ss(2).p("AIZsXQANAEgBAOQgCANgOAAQh8gChSAEQhyAGhAATQgkALgUgDQgOgDgagOIoolAIgQByQgLCKAbB2QAoCzA5MKQAGBTgZDjQgNB1gSCOQgDArgsBZQgVAtgWAkIA4ALQBKAKBagIQAmgDCKAFQCoAIBVgBQFWAABYhb");
	this.shape_41.setTransform(142.1,371.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#041404").s().p("AABDFQgKgEgEgIIAkAJQAIACgKACIgHABQgHAAgGgCgAjoCDQAygxC8htQCthmA2hFQggBGhiB5QhkB5gJAYQgPAfAIAQQi5gvgigHg");
	this.shape_42.setTransform(389.6,514.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#041404").s().p("ABRB5QgrgBgYgFQgigGgXgSQgPgMgOgUIgXglQgzhRhJg+QAcAKAcAaQALAJAkApQASAVAMAJQAGAEArAKQArANAFACQAaAMBPARQBOARAaANQgCAAgMAQQgOARAAADQgBADgHAAg");
	this.shape_43.setTransform(324.1,518.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#041404").s().p("ABwDnQhagBg5gMQhPgPg7grQhCgwgWhDIGBkTQgfBchIBDIBXggQAzgUAdgZIhHBNQgoAtgSAkQA2grA7geQgjAngOAZQgWAoAIAkQAFAWAVAdQAzBDBLAkIiVAAg");
	this.shape_44.setTransform(371.1,511.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#041404").s().p("ABJA4QgngkhNg2IiLhiQCBAgBtBBQgzhQhJg6ID0CyQALAqgFAsQgEAsgTAnQgag9g8g5g");
	this.shape_45.setTransform(319.7,508.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#041404").s().p("AC4EhQhwgNhAgQQgqgKhUAAQhSAAgtAKQACgHAig0QAZgmgPgNIBGAGQgGgpgXglQAaAHAWAOQg8hghWhKQhVhMhngvQAGgYAWgcQAXgeAXgHQARgGAbAKQAhAMAMAAQB7AIBOAZQAfALANABIAiADQASgBAGgMQAUgiBkgRQA3gKBvgLQAKARAkAWQAtAdAFAFQAPANADgCQARgJAGgCQjPDghQBpQgHAKAPAVQAPAYgCAKQgGAYAKAaQAIAYATATQAPAOA6APIBNAUQhagGhWgKg");
	this.shape_46.setTransform(345.4,505.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#041404").p("Am2AQQCkgyBbgTQCPgeBzALQBWAIA9AgQAqAXAyAtQAWAVANAHQATAMAYAAQAXAAAUgL");
	this.shape_47.setTransform(394.7,519);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#041404").ss(2).p("ABTiSQhNAvgrBUQgsBSAEBa");
	this.shape_48.setTransform(421.4,504.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#041404").ss(2).p("ADbj4QguAShNA+QhMA9hGBNQixC7AKBc");
	this.shape_49.setTransform(406.2,509.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#041404").ss(2).p("AASiwQgvCNAQCSQACALAFAYQAGAdAAgF");
	this.shape_50.setTransform(430.1,526.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#041404").ss(2).p("ABLjFIhIA9QgnAigJAcQgFARAEAmQAEAagQBQQgPBRADAc");
	this.shape_51.setTransform(444.3,521.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#041404").ss(2).p("AA9iTIhyD9QgHAPABAGQABAGADAEQAEAFAFAA");
	this.shape_52.setTransform(451,529.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#041404").ss(2).p("Ag4ieQBECbAsCj");
	this.shape_53.setTransform(521.3,527.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#041404").ss(2).p("Aici4QBHgIBJA2QAZAVAdAgQASATAgAoQAWAaAJANQAQAXAIAVQAKAZAAAZQABAbgMAVIABgT");
	this.shape_54.setTransform(506,503.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#041404").ss(2).p("AiCg0QBGAIBEAcQBOAdAtAr");
	this.shape_55.setTransform(482.9,479);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#041404").ss(2).p("AhrBZQBmheByhR");
	this.shape_56.setTransform(392.5,503.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#041404").ss(2).p("AiCB8QBxiQCWhj");
	this.shape_57.setTransform(385.9,503.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#041404").ss(2).p("AiKCbQgBgXAQgYQALgQAXgWQAOgNBihkQBIhJAsgm");
	this.shape_58.setTransform(373.8,505);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#041404").ss(2).p("AilCyQAyhuBWhXQBThZBsg4QAFgDgBgDQAAgCgCABQgDAAABAC");
	this.shape_59.setTransform(369.7,503.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#041404").ss(2).p("Aivh0QCzB6CsBv");
	this.shape_60.setTransform(319.2,508);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#041404").ss(2).p("Ah+hjQBbA1BJBKQAgAhAHAGQAXAWAVAL");
	this.shape_61.setTransform(305.2,509);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#041404").ss(2).p("Ah2hiQAmARApAgQAZAUAsAqIBdBZ");
	this.shape_62.setTransform(298.3,510.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#041404").p("AkfAzQAEgbAUgWQATgSAbgMQAkgOBJgDQBXgDBuAVQCkAdAjAE");
	this.shape_63.setTransform(312.6,518.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#041404").ss(2).p("AqCAnQBTgiAxgPQBLgZA+gLQBDgLBSABQA7AABbAHQA2AFBfAKQBqAMAtAEQAQACCoAAQCAAAAeAPQARAHASAVQASAWAQAJ");
	this.shape_64.setTransform(356.6,536.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#041404").ss(2).p("AAJBzQAAACAAABQAAACgCgCQAAgBACgCgAgJiAIAJCjQABA1AIAb");
	this.shape_65.setTransform(281.9,528.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#041404").ss(2).p("ABPDJQgah5g2hpQgRgggOgLQgEgRgIgXQgPgwgVgk");
	this.shape_66.setTransform(273.6,520.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#041404").ss(2).p("AhAhIQA4BBBHBMQAAAEACAH");
	this.shape_67.setTransform(265.5,533.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#041404").ss(2).p("Ah7ifQAvAlA7BOQAxBEApBCIgLgM");
	this.shape_68.setTransform(272.1,532.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#041404").ss(2).p("AjMjLQByAkB3CCQBwB1A5CC");
	this.shape_69.setTransform(325,507.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#041404").ss(2).p("AB8gKQh6gMh0AaQAAAFAEADQADADAEgB");
	this.shape_70.setTransform(359.1,473.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#041404").ss(2).p("AlfgNQC7ApC6AIQARABAJgFQAGgDAIgJQAJgKAEgDQAJgHAWgEQAegHBZgIQBZgJAegH");
	this.shape_71.setTransform(341.8,478.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#041404").ss(2).p("Ah4EsQgGgyAJgwQAKg1ATgJQgIAEgIgHQgIgHAAgKQgBgLAOgXQAqhCAVhHQAOg4AJgcQANgwAVgdQAggqBMgl");
	this.shape_72.setTransform(198.5,514.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#041404").ss(2).p("AjJgBQgHgNAEgPQBpgmBvAYQByAYBQBL");
	this.shape_73.setTransform(469.5,396);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#041404").ss(2).p("AifkVQBXFKDsDc");
	this.shape_74.setTransform(268.6,390.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#041404").ss(2).p("AhoETQBOhiAziQQAkhiAoiqQAGgcgKgL");
	this.shape_75.setTransform(462.7,323.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#041404").ss(2).p("AhvFaQAlhLA+hhQBGhvAjg4QAKgOAEgJQAGgPgBgMQAAgMgHgNQgDgEgLgTQhRh4gGiQ");
	this.shape_76.setTransform(502.2,406.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#041404").ss(2).p("AgCD1IA+gpIAch6QAGgdACgMQAEgYgCgRQgBgWgPgbQgTgfgJgQQgUgjhfhCQgjgXgGgJQgHgMAfgBQA5gDBDBKQAjAlAXAm");
	this.shape_77.setTransform(481.1,429.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#041404").ss(2).p("AkaC/QASArA4ARQAmAKA8gDQA0gCAjgIQAtgJAigVQAUgMAigcQAjgeATgMQAOgHAGgIQADgDAGgQIA6i0QATg6AGgfQALgygFgp");
	this.shape_78.setTransform(456.2,458);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#041404").ss(2).p("Ai0A1IApg1QANgQAIgFQALgHAWgEQAvgJAVgDQAlgFAeABQBPABAxAp");
	this.shape_79.setTransform(444.9,403);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#041404").ss(2).p("AjABRQABgcADgPQAEgXAMgPQAMgOAWgKQAOgHAdgIIBKgUQAagIAUgDQAQgBAXACQANABAaADQAxAFAygE");
	this.shape_80.setTransform(429.5,414.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#041404").ss(2).p("AjJjkIBSguQAZgMALgCQAPgDASAFQALAEAUAIQAzAYAZAPQApAZAZAeQAjAsAUBUQAXBngEBsQg8BChKArQgZAPgRAEQgRAEghgBIhdgC");
	this.shape_81.setTransform(430.9,446.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#041404").s().p("AgvDsIgLgFQgMgJAFgcQAFgcANgHQAIgFAUAFQATAFAFgHQALgIAMgXQAWgqASgpQASgrgBgaQgBgYgOgZQgKgTgUgZQgkgrgoglQgegcgXABQgQACgIAAQgNABgGgHQAXgLAcAFQAaAGAWARQA7AyAVAgQA+BiARBBQARBFgUBSQgCAKhDAaQg1AUgdAAQgLAAgIgDg");
	this.shape_82.setTransform(427.3,448.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#041404").ss(2).p("AhhjCQAKgIAQgBQAOAAAPAFQAWAIAUAZQA8BMATAqQAcA7gNBFQgBAJgcAkQgbAhgJAJQgIAHgTAGQgGADgRAIQgSAJgIAD");
	this.shape_83.setTransform(425.8,446.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#041404").ss(2).p("AjEAkQANgNAkgKQAcgIAagDQAHgBBWgBQBQgBAdgEQAfgFAPgEQAagHAPgO");
	this.shape_84.setTransform(388.8,438.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#041404").ss(2).p("AB2oqQAMB2gWCQQgQBjgqCgQhMEihgEo");
	this.shape_85.setTransform(408,361.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#041404").ss(2).p("ABnkyQhaEqhqEsQgDAHgDAAQgDABAAgEQgBgDADAB");
	this.shape_86.setTransform(400,326.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#041404").ss(2).p("AjWqWQAdBoAXC6QAbDTARBRQAYBrAwCDQAdBQA/CaQAUAxAMAYQAUAoAVAdQAOASAeAjQAaAfAKAaQAGAMAGAAQAFgBgCgFQgCgGgDAE");
	this.shape_87.setTransform(294.8,366.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#041404").ss(2).p("Ahgo9QAhGCAdDBQAuFBBWD0");
	this.shape_88.setTransform(270,320.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#041404").ss(2).p("Ajwh0IBFBAQAkAgAVAMQASAIAZAHQALAEAiAHQCKAhCDBA");
	this.shape_89.setTransform(243.9,420);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#041404").s().p("AhCCSQgXg9AEg+QACgZAMg0QACgHgCgcQgCgVAKgLQAJgcAQgeQAhg9AkgHIgPAfQgaAcgQAuQgPAtAIAaQAGAWATApQAQAqAkBGQAkBFAHAEQgMAKgSAhQgVAcgiAAQgrgngZg/g");
	this.shape_90.setTransform(249.4,463.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#041404").ss(2).p("ACakfQgsgRhGACQhVACgfAnQgXAegVBIQgRA8gGAyQgJBJgBAnQgBBAAOAwQAIAdAOARQAJALAPAMQAhAaAaANQAiARAeADQAhADAjgiQAhgfAJgk");
	this.shape_91.setTransform(246.1,462.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#041404").ss(2).p("AklAiQACgCEoggQCVgQCVgR");
	this.shape_92.setTransform(335.9,456.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#041404").ss(2).p("ApLBTQgDgHAEgIQADgIAHgGQAKgHAVgDQAXgEG9gwQHCgzDigX");
	this.shape_93.setTransform(346.4,441.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#041404").ss(2).p("ApdB7QgPg4AdglQAUgbAagDQCmgTGDgkQF9gkC1gXIAVAWQAVAbgBAe");
	this.shape_94.setTransform(345.4,438.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#041404").ss(2).p("AgmAwQAmgqAGgGQAfgjgBgJ");
	this.shape_95.setTransform(304.5,481.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#041404").ss(2).p("AjfiTQBIBqBaBVQA2A0AnAUQAUAJAcAHQAQAEAhAGQANADAGgCQAGgBAOgLQAqgjAOgL");
	this.shape_96.setTransform(223.6,484.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#041404").ss(2).p("AkminQA7gnBFgFQAigDAUAJQANAGAbAZQAmAkBeCAQBcBvA9ANQBDAOAMAsQAGAWgIAT");
	this.shape_97.setTransform(236.8,410.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#041404").ss(2).p("AhwBEQA3hDBIg0QASgNANABQAJABAKAIQAeAWASAg");
	this.shape_98.setTransform(209.2,389);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#041404").ss(2).p("AgiklIhgC0QgQAfgBARQgBASAJAUQAGANAOAUICIDSQAOAVAvAbQAxAdAWgF");
	this.shape_99.setTransform(196.6,451.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#041404").ss(2).p("AjJjOQAbA6A2A6QAhAlBHA9QAZAYBdBCQBUBBAQAs");
	this.shape_100.setTransform(231.7,384.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#041404").ss(2).p("AARqpQAKGTAnGdQABAKAIAWQAFATgJAJQgOAOggB/QghCGgRB0QgCAMgZAXQgXAWAAAKIAiAV");
	this.shape_101.setTransform(444.9,330.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#041404").ss(2).p("Apjv5QCRAkBFAbQA4AVBCAiQAqAVBMArQDCBuBhA6QAiAVASAMQAbATATAVQAYAbAUAqQAMAYAUA1QAfBUAXBtQAJAlAcCZQAsDvBCCGQAGALAJDlQASD2AwBbQAUAngIAzQgEAagIAR");
	this.shape_102.setTransform(451.2,294);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#041404").ss(2).p("AgPkXQgFAoAQBDQAQBNABAeQABAegHAjQgEAVgKAqQgMArAVBCQAXBCgMAq");
	this.shape_103.setTransform(252.8,391.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#041404").ss(2).p("AiDnQQBEDwCfEeQAQAcAGANQALAYACAVQAEAegMAuQgfB6hIBpQgEAHgFgBQgCgBACgEQACgDABAD");
	this.shape_104.setTransform(242.4,328.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#041404").ss(2).p("Ag5lPQAwDfAoEBQATBxAIBG");
	this.shape_105.setTransform(249.8,310.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#041404").ss(2).p("AABjaQACAZgTAmQgYAsgDATQgDASAEAVQADAOAIAYIBMDx");
	this.shape_106.setTransform(181.7,414);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#041404").ss(2).p("AHirhQjRA2izBaQjHBliICGQghAggNAYQgIAPgGAUQgCAHgHAdQgbBxguCGQgeBZg8CaIAuCTQA9CzBLCf");
	this.shape_107.setTransform(242.5,272.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#041404").ss(2).p("ABhn9QhGgTggEFQgcDVAMCLQABAVglAwQgkAuAFAWQAGAfAcBEIBRDE");
	this.shape_108.setTransform(188.1,358.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#041404").s().p("AilBDIAUgdQAQgWARgNQALgGALgEIAWgIQAZgKAUgFQAcgJA+gNIBbgSIARgEIgGAQQgOAmgfAcQgdAdgnANQAigUAZgeQAUgWALgbIhMARIhZATIgtALIgVAFQgJACgLAHQgQAKgTAUIgYAaQgGAFgEACQACgBAHgHg");
	this.shape_109.setTransform(365.4,171.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#041404").s().p("AClBEIgIgJIgQgRQgSgTgQgLQgMgHgJgCIgVgFIgtgLQgxgLgpgIIhMgRQAMAbAUAWQAZAeAiAUQgngNgdgdQgggdgNglIgGgQIARAEIBbASQA9AMAdAKQAUAFAZAKIAWAIQANAFAIAFQAPALATAYIAUAdIAIAIQgCgBgHgGg");
	this.shape_110.setTransform(308.9,171.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#041404").p("ABogzQg7AGg0AcQg2AagmAt");
	this.shape_111.setTransform(360.5,168.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#041404").p("AhXAqQACgPACgGQAHgSAVgPQAogjAzAPQAsANAIAU");
	this.shape_112.setTransform(364.8,174.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#041404").p("ABQgFQgzAJgcACQgnACglgK");
	this.shape_113.setTransform(360.9,178.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#041404").p("AhngzQA7AGA0AcQA1AaAnAt");
	this.shape_114.setTransform(314.6,169.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#041404").p("ABYAqQgCgPgDgGQgHgSgUgPQgpgjgyAPQgtANgHAU");
	this.shape_115.setTransform(311.3,174.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#041404").p("AhPgFQA0AJAbACQAnACAlgK");
	this.shape_116.setTransform(315.1,178.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#041404").p("AhFgTIAlAdQATAPAMACQAOADARgMQAJgHAOgRIAQgTIADgB");
	this.shape_117.setTransform(337.5,200.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#041404").ss(2).p("AiHAKID/BaQg0h0hcha");
	this.shape_118.setTransform(383.5,118.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#041404").ss(2).p("AhfhUQBtA0BKBgQgEhNgjhI");
	this.shape_119.setTransform(369.4,129.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#041404").ss(2).p("AgriMQAYALASAlQAgBGAFBKQAKhigihf");
	this.shape_120.setTransform(361,137.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#041404").ss(2).p("AAyhxQg7BagmBhQAAhiAkhe");
	this.shape_121.setTransform(309.4,138.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#041404").ss(2).p("AgChPQgwBHgmBSQAxgeAzguQAhgeA8g8");
	this.shape_122.setTransform(295.8,134.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#041404").ss(2).p("AgEhUQgSATguBDQglA4ghAXQBNgHBUgvQA2gbBdhE");
	this.shape_123.setTransform(283.4,129.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#041404").ss(2).p("AhigQQA4gLAwghQAyggAigvQAEBMgNBNQgIAwgbBo");
	this.shape_124.setTransform(394.4,69.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#041404").ss(2).p("AiXBEQBwhgA7iGQAfCXgLCXIBog0QgLAygTAv");
	this.shape_125.setTransform(377.3,47.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#041404").ss(2).p("AgyAmQAogtAZg0QAHAFABASQAEA0AWAx");
	this.shape_126.setTransform(360.6,44.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#041404").ss(2).p("AiSBtQBRhwBWhkQAIAMAtBXQAvBWAaAd");
	this.shape_127.setTransform(341.7,35.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#041404").ss(2).p("AiyCUQAmhygKh3QAlApA1ArQAgAYBAAuQAphTAehhQAGAdAYAuQAeA1ALAd");
	this.shape_128.setTransform(310.6,39.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#041404").ss(2).p("ABUhXQgGAEgGAFQgPALgdAYIhdBNQgrAkgNAaIAnAagABuhnQgCACgDABQgKAGgLAH");
	this.shape_129.setTransform(359.7,156.8,1,1,0,0,0,-0.7,1.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#041404").ss(2).p("ACVBhQAHAEAFgBQAGgBAEgKQAFgNACgCQh9hwikgpQBdAwBYBCQAtAjAiAbg");
	this.shape_130.setTransform(309.6,157.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#041404").ss(2).p("AAmhwQAAAIAIAMQAJANAAAIQAAAXgDALQgGAVgiA3QgnBDgbAI");
	this.shape_131.setTransform(397.8,163.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#041404").ss(2).p("AhdCnQAGgGARgFQARgEAGgGQAFgFAEgNQAEgPACgFQABgDArgxQAtgzAIgOQAVgtAGgiQAHgrgPgg");
	this.shape_132.setTransform(400.1,170.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#041404").ss(2).p("Ag/g8QAYApAdAbQAlAqAlAG");
	this.shape_133.setTransform(278.2,174);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#041404").ss(2).p("Ah/iyQgHAhgEAnQgCAMADAHQACAFAFAHQA8BMAzA8QASAVAJAHQAKAGAaAKQAXAIALAJQAHAGAUAZQAPAVAOAFQAEABABgC");
	this.shape_134.setTransform(274.5,175.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#041404").ss(2).p("ApJmRIB4FtQARAxAHASQAPAnAPAbQAxBaCkB7QBWA/BvBIQALAKAIAAQAGAAALgEQBwgtCgiXQCTiKA1heQAPgYAOheQACgLANhsQAZinAJhJ");
	this.shape_135.setTransform(336.6,199.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#041404").ss(2).p("AijgVQA6AlBQAmQByA5A/AAQhdhngEgEQgug3gbhA");
	this.shape_136.setTransform(398.2,142.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#041404").ss(2).p("AAhAyQgogygXg3");
	this.shape_137.setTransform(393.8,151.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#041404").ss(2).p("AhQg7QBCBCBUAtQgNAHgagCQgigDhGgK");
	this.shape_138.setTransform(407.2,132.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#041404").ss(2).p("AhGgdQBGApBPAR");
	this.shape_139.setTransform(387.9,152);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#041404").ss(2).p("AhWgtQBCAvBOAcQgfgegmgg");
	this.shape_140.setTransform(377.7,149);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#041404").ss(2).p("Ahyg3QAMAFAbgBQBFgDAegJQA5gQAagnQgPBUguBKQgyBYhAAa");
	this.shape_141.setTransform(411.9,84.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#041404").ss(2).p("AiMARQBtAnBvALQgrgSgkgrQgZgdgfg2");
	this.shape_142.setTransform(405.4,99.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#041404").ss(2).p("AhvEYQgggMgcggQgTgVgZgrQBbATBZgeQhDgoghhHQAzA8BOARQgogwgOhLQgJgqgDhbQgCguACgZQADgnAMgdQAmA2BBAxQAoAeBXAyIgXhOQAIAWAaAOQARAKAhAK");
	this.shape_143.setTransform(271.7,65.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#041404").ss(2).p("ABOhpQhRB4h8BQQBhgNAygUQBsgpAigw");
	this.shape_144.setTransform(254.7,114.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#041404").ss(2).p("ACXhZQgxAohaAiQhGAbhQASQAgAZBDAQQA3APAzAB");
	this.shape_145.setTransform(252.3,98.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#041404").ss(2).p("ABMhBQgaAkgsAhQgYAVg3AlQBaACBOgw");
	this.shape_146.setTransform(257.1,128.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#041404").ss(2).p("AgzhkQgUAigJAwQgGAbgFA7QAYg9A5gyQAmgkBKgu");
	this.shape_147.setTransform(281.4,160.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#041404").ss(2).p("AAgh8QgiAzgTA9QgTA6ABA/QAngvArgu");
	this.shape_148.setTransform(268.8,154.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#041404").ss(2).p("AAzh7QggAqgZA7QgcA8gHAyQAJgPASgMQAXgRAHgG");
	this.shape_149.setTransform(265.8,148.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#041404").ss(2).p("AhEgqQAcAeASAMQAZAXAbAJQgdgZgLgMQgUgagEgZ");
	this.shape_150.setTransform(352.3,154.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#041404").ss(2).p("AiohrQAiBHAFAKQAaApAgAVQgNgMgGgaQgJgogDgGQAqAuArAeQAtAkA5AZQgcgPgegrQgTgcgbg2QAvAjA6AUQghhCAQhKABVBZQAEACAFAC");
	this.shape_151.setTransform(338.5,163.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#041404").ss(2).p("AhFhAQA3BUBaAo");
	this.shape_152.setTransform(272.9,127.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#041404").ss(2).p("AAxgoIhhBS");
	this.shape_153.setTransform(393.4,112.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#041404").ss(2).p("ABNg0QhGBDhZAj");
	this.shape_154.setTransform(392.3,125.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#041404").ss(2).p("AhCgjQBCAoBJAd");
	this.shape_155.setTransform(272.3,119.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#041404").ss(2).p("AjeAXQDsAHDPg1");
	this.shape_156.setTransform(335.6,125.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#041404").ss(2).p("AgwAiQAhgSAhgWQAagRAFgR");
	this.shape_157.setTransform(390.3,108.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#041404").ss(2).p("AqjhnIAOB+QACASAEAIQAFAMAPAQQBIBKBpAsQBhAnBxAKQBgAIB2gMQBQgJCEgYQBfgRA4gQQBSgWA+ghQBRgsBfhbQAPgQADgKQADgIgDgIQgDgIgIgDQANgEAEgWQAHgngHgnQgHgogVgh");
	this.shape_158.setTransform(333.8,127.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#041404").ss(3).p("EA0bAqnMho1AAAMAAAhVNMBo1AAAg");
	this.shape_159.setTransform(335.5,272.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,678.6,553.1);


(lib.s1718 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#412E73").s().p("AAJCRIgZgCQgUgCgHgCQgPgEgeAAQgiAAgMgCQiKgfg8gJQgDgBAFgLQAGgNgBgDQgDgFABgIQAEgYAYgrIAuhUIgOgFIC8gYQAvgGAYgBQALAABQADQA3ACAkgHQAfgIANACQAOABAIAPIAQAdQApAyAQAeQAdAygLAnQgrANhDAGQhUAGgbAFIgiAHQgHACgbASQgWARgKAAIgBAAg");
	this.shape.setTransform(166.8,443.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9898A4").s().p("AoXCBIgGgaIABgNQgCADgNABQgOABAFgYQAEgYgMAEQgNADgBgCQgBgBADgHQAIgQgTgGIgCgHQgDgIADgHQADgIAHgHQALgJAVgFQAggHAsgBIBNAAQBRABBigJQBBgFBygOQBLgJAmgIIAzgNIAygLQA+gLBZgJICYgPQASgBAuAFQAoAFAWgFQgCAMgXAFQhOAOgoAGQgqAGglADQgEAIAaANQArAWAGAPQACAGAsAdQApAbgHAEQgrgBjGANQjLAOgmAHQhBAPgwgCQhCgBiyAaQi/Aeg1AGQATgIABgEg");
	this.shape_1.setTransform(170.1,423.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3652B3").s().p("Ai+AFIAIgMQAkAJAvABQAdABA4gDQBDgCAjgEQA6gHAtgQQhXAuhlAJQgVACgWAAQhNAAhJgYg");
	this.shape_2.setTransform(159.4,107.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFDD6").s().p("ABEBYQgkgyghgUQgIgDgFAAQgRAAgDAgQgCgHgKgBQgJAAgGAHQgHAJACAXQgHgCgHgGIgNgMQgQgPgOAEIgMBZQgUhIgwg5IAMgHIAzApQAHAFADgDIACgFIAEgiIAWAPQAFAEAEAAQAEgBACgEQACgFgBgFQgDgNAEgDQAYAMAdAIQgEgVACgYIBVA/QAMgYgDgrQgDhBgRhDQAYARAaAZIAtAwIAlApIAFgjQAcAngBAxQgqg9hAgpQAaB/AFCCQgHgHg2hLg");
	this.shape_3.setTransform(181.4,56);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFDD6").s().p("AB8BIQgCgHgDgBQgDgCgEAAIgHABQgHgBgEgEQgFgEAAgGIhJA4QgQgjgEgqQhoAYhQBGQAahaAUgsQAihHAwgoIARgIQgOAIgGAVQgHATABAbQABAcAOAHQAOAHAbgUQALgIAJgCQAMgDAIAIQAEAFACAOIAEAjQABAJAFAEQAKAIAPgSIA3hDIASA1QAbgWAVgkQgdBZgRBjg");
	this.shape_4.setTransform(121.2,58.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D08C4D").s().p("AkADgQAFhBANgpIgLAKQgIAIgDACQgrAbg0AqIhZBMIA2h2QhtA7h5AiQBMhKAqhgQgtgegcgMQgrgTglAGQgRACgiANQhLAahLAJQAxgUAmglQAngjAWgwQgpAEgogNQgogNgfgbQA9gNAyglQANgPARgJIgWASIgIAGIgIALQgOAXAAAbQBUgGBHgtQghAmgTAvQBHABBHgSQgaAggLAiQA9gbBBgIQgCAvAMAtIC8iqQgHAyALAyQAKAwAaArIA6g9QAMgMAKABQAHAAAGAGQAEACAGAKQAUAeAfAUQALAGAGgBQAGgCAHgLQAPgXAYgNQAagNAbABQAcAAAZAOQAZAOAPAXQgDgkAHgTQAEgMALgKQAMgKANAAQAOAAASALIBXArQgIgoAKgqQAmAWAjAYQgDgZAagPQAZgPAVAOQgKgNAMgPQAMgQAOAGQgbh6g0hxQBQBKBUA+QgIgvgXgpQA1AbA8AFQgDgXgRgRQgMgMgOgGIAsAOQgIgWAKgUQAfAGAfgFQgEACgDAFQgDAJAEAHQAFAMAWAFQA0ALAzgPQgoBihYA8QA/AwBEAgIi1guQgQgEgJACQgFACgMAJIhhBOQBFBCAYBfQhOg7h7gNIAwCdQgYgogxgoQgqgjgygaIAOBZQAJA3AAAiQgIg8gEgOQgKgggcgdIgMgQQgIgKgGgBIgRgGQgJgDgHADQhrAyiIgMQhAgGgQABQgrAAggARQgqAWgVA4QgNAhgTBJIAHhtg");
	this.shape_5.setTransform(154.7,89.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3F418E").s().p("AihCJQADgLALgWQAohMAShUQAFgaAFgJQAHgNAQgNQAigeAsgSQAVgIAKAHQADACAIALQANATATAOQAUANAWAEQALACAEADQADADAAAEQABAEgDACIAMAdQgagKgaAGQgTAEgaAQQiKBPheCDQgFgOAHgTg");
	this.shape_6.setTransform(33.3,477.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#412E73").s().p("ADeG0QgTgGgfgRQgugYgXgPQgkgYgXgaIgaggQgQgTgMgKQgPgJgkgJQgjgKgPgLQgMgJgUgbQgtg/hYiOQgTgfAAgRQgBgWAagkQAaglAAgWQgBgQgOgdQgyhkgVhxIBcCMQAIAMAGAEQATAKAXgZQgRAXgFAhQgFAlAMAlQASA1BABEQAgAhAZAQQAhAZAgAIQAXAHARgFQARgDAUgRQAXgRBAhNQAyg+ArgUIANgIIgaArQgUAegGAUQgJAXgHAyIgTCfQgFAuABAaQABAoAPAcQAfA7BiAbQgYAsghAKQgKAEgMAAQgOAAgQgFg");
	this.shape_7.setTransform(34.7,428.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#412E73").s().p("ABbBlQg/gsgegZQgVgRgigcIg4gwQgHgGgjgpQgdghgPgGIgFgbIgFgHQBTBgA6AqQBpBOBIgrQAagRARgsQAQgogCgjQAEASAPAgQAPAiAEAQQAFARAAAWIAAAnQgBAkgLAoQgEAQgTA4Qgdgpg2gog");
	this.shape_8.setTransform(56.2,358.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#412E73").s().p("ABXDPIgrhCQgWgjgUgvQgKgbgWg4IhajrIAEgSQAsBdAZAxQAoBNAjA6IAfAyQARAdALAXQAmBUgEBcQgJgggZgng");
	this.shape_9.setTransform(65.6,286.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#412E73").s().p("AgnAZQg0gLgzAIQgZADgJgFQgIgFgCgKIAAgEIAAgBQABgEAGgCIgEAFQAMgOATgKQATgJAfgIQBUgVA/ABQBTABA7AiQhFgbhMAJQhLAIg9ApQBWAGA/A2QgsgcgygLg");
	this.shape_10.setTransform(281.1,372.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#412E73").s().p("AlnGzQgdgMgSgWQgVgZAEgbQAFAOARAGQAPAFAQgEQANgEAOgLIAYgUIAwgnQAcgYAQgUQAVgaAJgcQALgggIgcQgCgKgHgGQgHgGgHADIABgTQBCAhAvgMQA2gNAuhIQAvhLAWhWQAShHgMguQgJgegTgVQgWgYgagFQAwgNA9AjQATALAdAVQAiAaAOAIQAQAKAJAAQAKgBAQgLQAjgbARgOQAcgYATgYQAWgbAKgfQAMghgEggQATAkAGAUQALAggEAaQgDAagTAgQgWAmhfBzQhLBdgYBDIgMgSIgOBGQgDANgFAFQgEAFgHACIgOAEQgWAHgQAfQgHANgPAqQgIAVgLAWIgXAqQgVAqgsAgQgkAZg3AWQhSAghBAAQgsAAgkgOg");
	this.shape_11.setTransform(294.3,415.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#412E73").s().p("AhlDbQgJgdAAgPQABgYAQgbQAJgNAagfQA+hLArhXQAeg8AShAIgFAHIAVhEQgHAfgJAeIAIgLIhED+QgUBJgRAlQgMAWgdAnQgfAogMAUg");
	this.shape_12.setTransform(286.5,298.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#412E73").s().p("AiKDEQBZj8BpjSQArhVBgilIBHh5IADgLIATgcIgWAnQjtJ5h7KdQggAHhAgBQhBAAggAGQBVkpBAi4g");
	this.shape_13.setTransform(206.9,340.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#412E73").s().p("AgDAAQAAgEADAAQAEAAAAAEQAAAEgEABQgDgBAAgEg");
	this.shape_14.setTransform(225.9,293.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D9A991").s().p("AgqBGIAShXQAEgVAHgKIAJgLIAIgLIALgRQAHgJAIgDIACAFQALAQACAWQABAUgHAUQgIAXgfAsIglAxQgKgHAFgXg");
	this.shape_15.setTransform(221.8,139.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D9A991").s().p("AArBaQgqgggkgtQgNgNgEgLQgGgTALgMIAAAVQALgrAggcIA2CVQAIAUgEAKQgCAGgEAAQgDgBgCgCg");
	this.shape_16.setTransform(101.7,145.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D9A991").s().p("AAoB1QgDg0gDgcQgGgqgMgiQgPgtgdgnQgbgigkgZIAXAPQAcATARgGIAIgDQADAAAIACIBDAXQARAHAFAGQAEAFACAOQAEAkgLA8QgQBegYBdg");
	this.shape_17.setTransform(209.5,142.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D9A991").s().p("AALCRIAPAqQgKgRgFgZgAhBhSQgCgFABgCIAEgFQA4g0BFglQglBFgNBuQgJBJAFA1IACAXgABAi6IADAAIgEADIABgDg");
	this.shape_18.setTransform(108.7,143.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D9A991").s().p("AgZDZQgngJgsgmQg/gzhOhmQhqiIgYgaIgCgKQBIBHAqAdQARANAlAWIA2AgQANAJAkAcQAeAYATAMQAQAKAMABQALAAATgKQBggzBqhXQBBg2B2hyQABAPgGASQgEAMgLASQhEB5hRBvQg3BMgtAhQggAWgjAJQgVAGgUAAQgPAAgPgEg");
	this.shape_19.setTransform(165,210);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D9A991").s().p("AggAZQgqgTgEgdIAHgGQAiAWAogBQArgBAhgXQgLAZgNAOQgQAUgWAFQgHABgGAAQgPAAgVgIg");
	this.shape_20.setTransform(163,211.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D9A991").s().p("AgQAnQgMgIgPgUQgQgVgMgbIAAgBQAiAdAaAJQAKAFAFgBQAFAAAIgEQAggPAXgeQgIAXgYAoQgKASgKAFQgIAFgIAAQgIAAgMgHg");
	this.shape_21.setTransform(161.3,177.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D9A991").s().p("AgpAsQAAgrACgpQADhGAWgiQADgEACAAQACgBAFADQAWAPASASQABAAABABQAAAAABABQAAAAAAABQAAAAAAABIAAAEIgeBPQgKAKgGATQgcBGADBNQgKgqgBhAgAALgaIABgBIgCADgAALgaIAAAAg");
	this.shape_22.setTransform(172,156.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D9A991").s().p("AiDCMQgCgBABgFQANgxAYgtIAAAEQBKhZAcgrIAVgdQANgPANgIQgBBIAmA9QATAcAXAKIg5AQIgRAFIgVADQgGABgJADIgOAGIgkALQgVAHgnAVQgbAQgIAOQgBAEgDACIgDABIgCgBg");
	this.shape_23.setTransform(185.5,139.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D9A991").s().p("ABdBRQgYgagWgJQgKgEgVgFIifglQAPgDAMgPQAHgJAIgVQARgvABgkICdB1QAXAPAMAHQAQAKAOAGQAMA3gQA1QgSgbgYgYg");
	this.shape_24.setTransform(136.3,141.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#926756").s().p("AhZAmIADAAQgFgXASgSQAMgOAZgMQATgJAPgCQAWgDAaANQAOAGAeAVQABAFgLAHIgTALQgZAVg1AAQgkAAgkgDg");
	this.shape_25.setTransform(188.6,150.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#926756").s().p("AgGAnQgygHgigdIADgDQACgOAXgLQAigQAjACQAPABAGACQAMAFAKAJQAYAUAPAZQADAGgCADQgBACgFABQgiAGgcAAQgQAAgMgCg");
	this.shape_26.setTransform(134.5,151);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhrA+QgMgBgFgDQgGgDgHgNIgNgVIADABQAUgIAlgSQAagLAwgKQA2gLAUgHQAbgJAJgBIAZgCIAQgFQAKgDAGAAQABAKgLANQgpA0gbAXQgDACgJAAQgKAAgDACQgEABgGAIQgFAGgFABQguAJgwAAQgVAAgUgCg");
	this.shape_27.setTransform(190.3,148);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E7E7F1").s().p("ApUArQAUggAigNQAcgLApgDIBIAAQBJABChgQIBvgMQAmgEASgFIAcgJIAegIQAfgGA0ABIBVABQAigBAmgFIBHgNQAlgHBHgCQBLgCAhgFIAZAwQgMAIgUAAIgjgBQgcAAgsAJQi9AhjAAQIjfASQiDANhdASQglAHguABIhUABQgRABgVAKQgUAJgOAMIgJAOQgLggAUgig");
	this.shape_28.setTransform(168.8,414.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F4D865").s().p("Ah+ENQALgJAKgYQAHgQAUgDIBKgIQAvgIANgTQANgUAEgOQAEgOgBgYIgChEQgEgmgOgXIgXgyQgMgZgUgRQgEgGgfghQgYgagRgHQhBgcgzgUQAmgkAhgPQArgSApAOQAsAQAuAfQAxAhAYAlQAcApATBVQARBKABA7QABAtgYAdQgOASgtAqQgJAJgKAGIgVALQg0AggwAIQgQADgNAAQgqAAgZgYg");
	this.shape_29.setTransform(255.2,423);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4D865").s().p("AgUEgQgjgOgcgdQgtgvgNhCQgHglAEhGQAEhJAIg2QALhFAVg5QAIgWAPgNQANgMAXgLQAZgLAeAAQAZAAAugCQAlABAYARQABAEgCAFQgDAIgHADQgDACgJAKQgHAJgGABQglACgeAUQgcATgRAiQgoBHgCBAQgCA0ASA+QALAkAZBMIACAPQAAALAEACQADACAAAKQAAAIADAAQAeAAAhgQQAWgKAjgZQAEAlgbAfQgbAegnAGQgKACgKAAQgaAAgZgMg");
	this.shape_30.setTransform(69.4,438.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5663B4").s().p("Ai1WTQgmgFgSgGQgWgJgXgTQgRgOAHgLQADgEAEgCQALgFAZABQAYABALgFQAJgDAIgJIAOgQQAUgVAagQQAbgPAEgDQAigbAHhBQAEgsgGg4QgSiXhNhGIgNgJQgmgagVgLQgigSgegFQgbgEgvASIhHAgQgMAGgHgIIgNgWQgKgOAOgWQAagsBLglQBhgvAWgSQBBg1Afh0QAbiKAThBQAEgOAqhyQAchMAEgzQAFg1gPhHIgeh6Qgti8AHi/QAFhRAAgoQAAhGgPgxQgNgpgcgtQgTgfglgwQhIhchfhvQg8hHhxh/IAmAHQAmAIAsAUQAbAMAzAcIH4EYQASAKASAeQAYAqAFAGQAbAgAUBQQAQA+AdBsQAWBdADBQQACAxAVBDIAkBzQAMAtAUAmQATAmAMAtQAQA7AJC+QAHCxAcBHQAUA1AEBBIAFBTQABAHANAeQAIASgJASQhuDZiJDPIAAAKIgMArIgXgBIhIBmIAAACQAAA2gsAxQgbAfg+ApQgnAYgSAHQgmAQg2ABIgEAAQgjAAg6gIg");
	this.shape_31.setTransform(281,315.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#412E73").s().p("AnBOAQgqh5gLgEQgJgEAnhQQAnhVgCgHQgJgXBYgnIA1gXQAUgLgPgDQgGgBg2gsQg3guADgHQACgIgGgOQgGgOABgHQACgQgKggIgOgwQgDgOADgQQADgSgCgNQgDgYAFgnQAGgyABgOQABghgNhGQgMhEADglQACgbALgpQAOg0ADgPQAIgsgCg3QgBgkgIhAIgSidQgMhngJg2QgPhXgWhDIgHhCQAyD/BGEBQARA/APAkQAWA1AfAjQgLlXgPksQAlHaCkFgQADAJAGAAIACgBIgCgHQADgCAAAFQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAtCWAnBkQA2CQBCBkQAzBOAuAjQAaATAyAEQBIAGAKACQBeAXBJgBQgnADgsACQg2AChjgBQgWAAAABzQABBzgXAAQgVAAgiBiQghBggWgGQgSgGhWAUQhTAUgSgGQgfgKh/ACQiFABgWAPIgBABQgLAAgmhug");
	this.shape_32.setTransform(119.9,354.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#412E73").s().p("AkZQFQgegGhLirQgkhSgMgWQgWgpgGATQgPgCBbhEQBSg7gDAAQCyhXBckJQAbhPAmigQApijAZhJQAchVAPhuQAPhvgGhYQA+CuAZC4QAHAzAAAiQABAugJAmQBzjCAlkSQAOhpAEiBIgFgKIAGj7QACCfgDBZIAAANQAUAuAFAwIAEBuQABAkAVCdQARB+gIBCQgFAugkBVQglBUgGAtIgDAvQgCAdgDARQgKA5gmAVIAQAuQgWgFgWAOQgSAMgQAWIgcAnQgSAUgTAHQgIADgMACIgTACQgiAGBZC8QBjDQgBAWQgHgGAAAKIAAAjQABBDgdAtQhCBnjQAAQh2AAijggg");
	this.shape_33.setTransform(229.9,346.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5663B4").s().p("AvvXiQgagQg2g6Qgzg2gggQQgGgDgwgTQghgNgSgOQgUgSgaguIhvjHQgSggABgSQAAgMAHgSQAJgXABgIQADgNAKgQQAHgMAAgSQgCgog0hnQgxhgAGgsQADgUAWgxQAUgrgBgaQAAgOgNgyQgMgsACgTQACgPAeggQAgggACgPQAJhAAFhbIAHiXQALi0AwhpQAGgLAKADQAJACABgNQABgMgDgTIgEgfQgCgaAPgrQATgvAFgVQAJgiAehNQAehOAJggIAWiJQALhIAmgzQAzhGBshNQEYjHFNhTIgNAOQAfANARArQAFAMASBCQAHAdAQAnIAbBDQAUA3BBBNQBNBaAUAkQAJAGALALIATATQAyAyBHARQBMASA6ggQAlgUBHACQBAACAZgXQAXgUASgiQAKgUARgrIBUjeQAMgeACgTQAEgdgLgTIgJgNQgFgIgBgGQgBgJAHgSIA1h/QAGgPAIgEQAJgEAPAFQCIApCdBVQBgA0CyByQA4AjAcAUQAtAhAeAhQA7A+AgBZQAeBSAFBeQAEBRgOBhQgKBIgZBnQgaBrgaBPQggBigpBPQgVAqguBPQgoBKgQA2QgQA3gXB2QgcBig6AoIAXAfQgkAEgnAsQg0A6gQAKQgRALgiAMQgmANgPAHQgbAPgNAZQgPAcAMAYQg3gshMAIQhNAHgtA2IgWAbQgNAQgMAHQgNAJgTADQgLADgXACIoMAqQg4AJgdADQgyAEgcgSIADgLQgogEglgSQgdgOgpgOQgngNghgIQghgHglAPIhEAiQAAAXgfAKQgbAJgdgFQgQgDgfgNQgegNgRgDQgqgHgqAZQgnAXgYApQgUAjgKAxQgIAhgFA5IgIBZQgEAxADApQADAzAuA1QApAtAxAWQgTArg+AIIgXABQgsAAgkgWg");
	this.shape_34.setTransform(151.1,321.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E9CAB2").s().p("AhUCjQgDgGACgNIAPhgQAMhLAOgkQAKgbAcguQAGgLADgGQARgSAZACQAaAEAMAVIACgGQAFAtgMAuQgLAtgbAjIgqA2QgbAggJAZIgGAQQgEAKgGAFQgGAGgJABQgKAAgFgHg");
	this.shape_35.setTransform(223.7,145.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E9CAB2").s().p("AAIC0QgQgegDguIABhQQABhkgHhkQAAgFAFAAQAFAAAAAFQAGBbAABZQAAAbgCA9QABA0ARAfQADAEgEACIgEABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_36.setTransform(156.8,158.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E9CAB2").s().p("AB6C9QgFgCgGgKQgZglgpgRQgWgIgFgDQgIgFgKgNIhuh8QgNgPgEgIQgKgTAEggIAGg2IgIAGQAOgdAegJQgNA2ALA1QAdgoAlgiQgHBNACAmQAZg1AhgvIBtE/QACAFgBADQgBAEgFABIgDABQgDAAgCgCg");
	this.shape_37.setTransform(98.7,149.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("ABuA5QgCgDAAgHQAAgJgBgCQgFgJgNgLIgTgRQgVgWgYABQgOAAgUALIgkASQgRAKADALQgFgFgJgEIgQgHQgHgEgFgGQgegcgVgjICLAWQBBAMAdAMQA0ATAUAqIgDAAQgFAAgFAGIgLAIQgDACgEAAQgGAAgGgFg");
	this.shape_38.setTransform(132.4,148.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F4D865").s().p("AhFBSQgKgFACgJQABgEAGgIIApgvQAZgaAMgMIApgdQASgNALgNQgMAggjAnQgvA2gKAPIgLAQQgHAIgHADQgEACgEAAQgFAAgFgDg");
	this.shape_39.setTransform(180.7,134.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F4D865").s().p("ABWBQQgEgBgKgIIi2iTIACgDQBHAZAhAPQA3AZAlAfQAVATACAQQABALgHAJQgHAIgIAAIgEAAg");
	this.shape_40.setTransform(139.6,136);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F4D865").s().p("AhjgBQAGAcACAdQgfgVgUgqQgKgWgOg3QAMgGAPgDQANgDAbgCIDCgSQAJAVAcAbQAlAkAHAIIg3gXQgigPgQgPQgJA3AMAxQgsgQgmgbQAeBFAtBAQhignhEhPgAinhXIABADIgJAFgAimhUIAAAAg");
	this.shape_41.setTransform(162.6,136.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F4D865").s().p("ACqCAIgvgTQgpgRhYgVQAPAtApAYQhNgKhIglQAGANALAFQgwgLgbgMQgngRgVgcIALgNQBKgSBCgnQBBgqAvg7QAHgJAGAEQABAAAGgDIAGgDQAQAaAzAnQAyAlAPAcIh2gSQgEgBgCABQgFACABAHQABAFAEAFQA+BPBLBFQgVgBgbgLg");
	this.shape_42.setTransform(215.4,116);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F4D865").s().p("AgsBtQABgjAKgdQgMAOgeAbQgfAagMAOQADgXAOgrQAOgrADgUQgaANghAeQAJg0AZg2QAZgzAlgsIgBgHQAgAoA3AiQAiAVBGAgQhDAwgqAtQgsAygkBDIACg8g");
	this.shape_43.setTransform(99.8,128.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F4D865").s().p("AhcBAQAMgJAhgPQAhgPAMgJQAOgOAXgcQAXgfARgOIAPAFQAEAvgCAsQAAAHgDAFQgCADgJADQg1AUgeAFQgUAEgRAAQgbAAgXgIg");
	this.shape_44.setTransform(81.9,102.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EACE5F").s().p("AjpGYQgRgGgXAPQgVANgKASQgTAigrAgQgYATg1AiQAgg+AWgjQAhg2AlgmQg1AVhqBPQglAbgpAOQgwAQglgJIAxgkQAggXAOgaQAFgKAXgaQAQgRgBgWQglgGgjgVIhAguQhPA0guAUQhKAhg/gHQBhhPBNhfQhlABhYgzQA8giAmgTQA7gdAugHQgdgTgbgeQgZgcgRgdQAfAAA/AHQA2ADAegYQgsgSgdggQgggjAAgpQATAVAqAbQAqAbAUAWQg6jLAJjVIBDBNQAfAUA1AnQA8AtAfATIgEghQgCgYgCgKQAGAEASAPIAYASQAfkOgDAiQAgAdA3A5QAyAwAsAcQAnhQAghcQA1BBAbBNICKjCQAkAtApBKIA9BxQASgQARgXQASgZAHgVQAFAPAJAsQAKAsAEAQQAlghAogzIBDhcQAGAwADBiQADBiAFAvQAngaAxgRQgBAUACAUQgBAQgJAYQA0gQAagSQAigWATgoQADBNgLCRQA1ADA9gRQBEgTAegiQgNBDg2BTQgiA1hDBSIAxAlQgYAMgggBQgdgBgdgLQgFgCgHABIgMABQgPADgGADQgJADgGAKQgPAYgRALIguAYQAZAdAaAsIAsBNQgcgLhJgZQhGgYgfgNQAoBNgEBVQgWgdg8gvQhEgygXgTQAVA0AIAkQAKAvgDAtIghhXQgTgqgfgjQhUAShaALIitASQghAIgQABQgcAEgMgQQgVAkgWBDQgUBAgWAhQAXiGAKhJg");
	this.shape_45.setTransform(154.6,61.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3652B3").s().p("AjNDuQhqgBhmgeQhmgfhZg4QgmgZgQgXQgLgPgDgSQgEgTAGgQIAAgRQBXBTCPAhQA6AOBHAGQA1AEBOACQCBACBUgIQB1gLBdgeQBrgjBShAQBZhHAqheIALgXQAHgMAJgGQAjgVARAMQAQAOAMAzQAKApgMArQgMAqgfAeQgSAPgoAbIhFA2QgnAdgiAUQhGAnhLAHQgyAGhqARQhpARgyAFQhwANg6AAIgEAAg");
	this.shape_46.setTransform(158.9,103.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#577FEF").s().p("ADKCvIh/gFQiIgDhjg4QgmgVg/gyQgcgWgKgOQgPgTgKgmQgRg8gHg9ICJAyIgIACQBRAiCKALQCGAMCDgFQANAAAFADQAFACAHAIQAfAmAOAuQAOAwgGAxQgBALgFAFIgGAPQgEAMgFABQguAHg/AAIgQAAg");
	this.shape_47.setTransform(124.7,110);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#577FEF").s().p("Ak3DnQgTgHgQgaQgVgigIgxQgHglAFgaQAJgkAcgOQAOgFAjgCQCegHBwgzQAVgKAggRIA2gdQAigSAzgYICMhDQANgHAJABQARACALAaQAUAxgBAyIgCgNQAAAfgCARQgDAbgMASQgHAMgVASQgwAvgeAXQgtAkgrARQgXAJgoAJQgxALgPAEIgrAQIgtARQgmAMhEANQg2AJg4AHIgWACQgPAAgKgEg");
	this.shape_48.setTransform(187.4,102.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E9CAB2").s().p("AASHzQgNgCAAABIihhrQgSgLgagZQgdgcgNgJQgWgRg6gxQgnghgRgVQgSgWgSgkQgVgpgTg3QgLgfgVhBIhakvIgGgHQAtgcAhgmIAWgVQANgMAMgCQAOgDAeAJQBJAWBQABIBIAAQAoADAbAOQAzAbAXBJQAVgQAagGQAZgGAZAHQAPAEAHAAQAMABAGgIQADgFABgJQABgIgGgjQgFgkABgHQAFABASAWQASAZADABQgEgVgEgbQgBgIADgDQACgDAGgBICagpQATgFAJACQAJACAKAGIAQAMQAsAlA5AQQALAEAHgCIALgEQAFgCAMAFQAMAEAeAHQAfAHAMAFQAHAZgJAtQgPBFgBAJQgBAUgLAsQgKAtgCATQgFA1gDAQQgHAmgQA4QgSA/gSAdQgSAcgoAhIhBA3QgVAVgpA2QglAygaAXQggAdgxAYQgeAOg8AWQgEABgCAGQgCAFgEgBQgCgBgCAFQgBABAAABQgBABAAAAQgBAAAAAAQgBAAAAAAIgCABIgMgCg");
	this.shape_49.setTransform(160.7,170.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#28295D").s().p("AAAgEQgBABABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIABAEIAAAJg");
	this.shape_50.setTransform(337.7,474.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#28295D").s().p("AZwFjQhEgEgMADMgn2AAAQjggMiYAJQiYAJhegIQhegIgIgTQgFgLADgYQAejSBbi+QAzhtBFgQQAggUAugJQAdgGA3gFQJXg2EqgPQHxgZGPAcQCRAKAdABQBjAEBLgIQAXgDBLACQA8ABAkgKQBQgVCLAqQCLAqADAxQBMAMAtApQAjAfAbA9IgCgOIADAKQAjAoAaAyQAMATABAOQACAQgIATQgEAMgNAUQgBADgDACQAEAUANAgQAQAlAEAQIAZBJQATA7AHAJQAEAHgeAAIgkgCg");
	this.shape_51.setTransform(180.6,485.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,351.8,521);


(lib.s1715 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABkCYQg0gNg5gbQg7gdgwgPQgxgPglAAQhxAAhwBxIAAjfQA1g4A/gbQA/gbBJADQAtgDA0APQA1APA5AgQA1AaAvAOQAvANAoAAQA4gCA1gbQA0gbAwgzIAADfQgrAzg5AZQg6AahIAAQguAAg0gOg");
	this.shape.setTransform(207.7,95.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAIqIgkibIBeAFIBXAAQBVAGgFhmIAAq8IkVAAIAAjRIKhAAIAADRIirAAIAAMHQAFBog3A2Qg3A1hzADIhbAAIiBAFgApsHvIAAwzIIIAAIAAQuIjHAAIAAhxIh1AAIAAB2gAmgCzIB1AAIAAowIh1AAg");
	this.shape_1.setTransform(72.7,97.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,330,194.7);


(lib.s1714 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgDB0IAAjnQAAgFADAAQAEAAABAFIAADnQgBAFgEAAQgDAAAAgFg");
	this.shape.setTransform(52.5,115);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgDBCIAAiDQAAgFADAAQAFAAgBAFIAACDQABAFgFAAQgDAAAAgFg");
	this.shape_1.setTransform(45.2,121.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgEBoIAAjQQAAgEAEAAQAEAAAAAEIAADQQAAAGgEAAQgEAAAAgGg");
	this.shape_2.setTransform(38.2,126.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgEBzIAAjkQABgFADAAQAEAAABAFIAADkQgBAEgEAAQgDAAgBgEg");
	this.shape_3.setTransform(30.8,118.2);

	this.instance = new lib.s1734s();
	this.instance.setTransform(0,0,0.49,0.49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.8,137.9);


(lib.s17_path05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.s1711s, null, new cjs.Matrix2D(1.005,0,0,1,1496.8,1160.5)).s().p("Eg0qAqnMAAkhVNMBowAAAMAAABVNg");
	this.shape.setTransform(337.1,272.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,674.2,545.5);


(lib.s17qlcZ3R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AFFBFE","#7599D8","#48569E"],[0.039,0.408,0.831],0,51.9,0,-99.2).s().p("EglAgMUUBJ1gBHAALAAKQAIAHmvMdQjYGMjYGMMgrOABog");
	this.shape.setTransform(236.9,85.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,473.8,170.4);


(lib.s17_path04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1FDF8").s().p("ADaCAIkWgJQhPgCgrgIQhCgMgtggQgTgOgUgXIgkgoIhahxIADgDIBIA9QAuAlAXAQQAoAZAjAMQAgAKAqADQAQABA8ABQCbAECWAhIAcAFQAQACANgCQAMgCAOgGIAYgMQBBgfBGgCQgrAogbASQgpAdgnAJQgUAEgZABIgMABIghgBg");
	this.shape.setTransform(45.9,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.8,25.8);


(lib.s17_path03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1FDF8").s().p("AgLBoQgSgDgWgJIgmgRQi+hWjUgNIADgBQBdgTBfAHQBgAHBZAfIA4AUQAgAKAZgBQAZAAAggNQAMgFAsgTQBAgeAbgKQAigMA+gLQAZgFBOgXQBGgQAVAYQhDAYh+A/Qh/A9hCAYQgnANgUAFQgXAFgTAAIgQgBg");
	this.shape.setTransform(49.3,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,98.6,21.1);


(lib.s17_path02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1FDF8").s().p("AgPA8QgagTgJghQgJggANgdIAGgKQAxAIApAbQAEACABADQAAADgDAEIg0BJQgCAGgEAAIgBABQgEAAgEgEg");
	this.shape.setTransform(5.5,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11,12.8);


(lib.s17_path01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAFEF8").s().p("AgRgwIATgKQAVAhAIAqQABALgCAFQgDAGgNAFIglAPQgRg4AXgzg");
	this.shape.setTransform(3.1,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.4,11.9);


(lib.s17logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s17logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,407,221);


(lib.s17_dbtext_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s17_dbtext();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,574,208);


(lib.s17319 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40754D").s().p("AhQDjQgFgCgFgEIgJgIQgRgNglgHQgrgHgPgIQgOgIgCgKQgCgGAEgSQAGgagQg2QgPg0AIgZQACgIAHgNIAKgWQADgGAPhCQALgrAWgRIARggQgMAZgFAPQgIAaADAVQAFAZAUAQQAXARAVgJQgXAOgPAUQgQAVgGAZQgFAYAKAYQAJAaAVAOQAVAPAcgDQAbgDARgTQAGAVAaAIQAVAIAYgIQAwgOAZgqQgCAGACAHQACAJAIAGQALAKAXABQAvAEAsgSQgCANgMALQgKAKgPAFQgMAEgQABIgdAAQgQAAgHADQgIAEgJAMQgtA1g4AoQgFgQgMgKQgHAEgJAIIgQANQgPAKgNAAQgGAAgFgCg");
	this.shape.setTransform(28,-278.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#40754D").s().p("AnNFCQgPhGgGhaIgHhlQgGgrgWgzQgFgMgFgEQgGgGgRgBIi0gVQgNgDgFAGQgCADAAAJQAABoAPBoIhSjPQgLgcgBgQQAAgXAQgYQAKgQAYgXQARAXAZAOQAaAPAcACQASABAIgHQAHgFAFgXQAFgTAKgDQAYAbAjAOQAiAQAkgBQgEgWAKgWQALgWAUgLQANAbAaARQAZASAeACQAeACAcgOQAcgNARgZQAkAgAxAMQAwAMAvgLQASgFAHgGQAKgKABgPQAAgOgHgMQgGgMgLgKIgWgRQBdAOBLAzIAqAbQAZANAVAAQAcAAAVgVQAWgWAAgcQBEA0A6gMQAjgIAVgfQAVghgNgeQAfASASAHQAdALAYgDQAggDAZgbQAYgZAHghQAKgwgXg3QAOAFANAMQASARALAZQAGAPAJAgQAJAfAHAQQAFALAGAEQAHAEAMgDQAHgDAMgHQAUgNASgDQAXgEAPAKQAOAJAFASQAEARgEARQgEAQgLAQIgVAcQgOARgIAIQgNANgNAIQgQAIgRABQgSAAgNgJIgNgLQgHgGgHAAQgGAAgHAFIgLAJQgSAPggADQgNABgrgBQhLgFgYAmQgJAOgDAbQgKA+AACuQABCXgXBUQgojOgGgZQgeiEgphZQgJgSgZgNQgWgLgZgDQgMgBgYAIQgYAIgNgBQgIgBgLgEIgSgHQgVgGgXACQgXABgRALQApCfgVCmQgciKhAh6Qghg9gngHQgOgBgUAEIgjAJQgfAHgvgHQg0gKgagDQgRgCgJAFQgJAIgCAXQgTDzAhD4QgkgtgVhlgAJEm9IAFgWQAHANAFAMQgIgCgJgBg");
	this.shape_1.setTransform(226.8,126.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#041404").s().p("AF7JfQgPidgOhQQgYiEgphiIgNgfQgIgTgIgKQgMgPgKgDQgHgBgXACIgrAEQgYAAgUgEIgkgMQgTgFgSAGQgOAFgIACQBAC2ghDCQgCALgMgBQgMgBgDgJIg5imQgkhhghhAQgQgdgSgMQgUgNghACQgLAAgZAFQgXAFgNAAQg7ADg+gUIAIIaQABAJgKAFQgKAEgGgIQg1hEgbhwQgRhJgMh9QgFg6AAg2IACgcQACgWgEgGQgLgTgOADQgRAIgKACQgOAEgQgEQgIgCgUgIQg0gTg0gHQAFCfAgCeQACAMgMAGQgMAGgGgMQgshYgXhXQgDgJgGglQgFgegGgPQgIgTgUgPQgWgPgGgMQgegzAxgyQAsguA3AAIABgDQABgGAHgKQACgCAHgCQAGgDACgCQAFgIgCgIIgEgPQgKggACgUQABgZASgZQAxhGAlAMQAYAIAHAlQAGAdAEAOQAPgEANAAQAYAAAMAQIADAHIADAHQABAIgBALIAngBQAHgFAKgRQALgUAGgGQAmglA1gEQAvgDAmAZQAVgNAPgFQAagLAVADQALABAdAYQAQAMAJAFQAJg6BAgNQAwgJBAASQADgKAGgIQAEgHAGgGQgLgNgCgRQgDgWANgSQgfg7Aig8QAmhBBKABQBRAAAtBDQAlA4gGBHQBBAPAlAeQAvAlgIA0IASABQgFglAMgcQASgsA1AOQAqALAaA9QAMAaATAyQAQAjASAYQAcgYAagJQAsgQAdAfQAdAegWAtQgNAaglApQgWAbgNAOQgYAXgVAEQgOADgWgNQgVgKgOAFQgEABgJAFQgIAGgGACQgJACgOgCIgYgEQhDgHhJAQQgFElgjEpQgCAOgNAAQgNAAgCgOgAnoAVQAFANAAAtQgCCFAYCEQAPBQANApQAMAnARAfIgJn7QAAgHAGgEQAGgFAHACQA7AWA5ABQATAAAfgFQAkgHAOgBQA0gEAjAyQAWAeATAxIAfBUQAaBFAZBCQAOikg8igQgEgKAJgGQAJgFAGAEQAQAHAJgKQAMgMAGgBQAIgBAPADQAJACASAJQARAIAJACQAkAIAygMQAqgKAZAiQAIALAaBAQArBkAYCHQAHApAIA+QAVjoAEjmQABgKALgDQBPgTBGAHQAcACAJgBQAOgCATgLIAMgHQAGgCAHAAQAGAAAHADIAMAHQAMAQATgOQATADAKgOQAGgFAIgKIANgPIAWgYQASgVACgHQACgKgKgZQgKgZgHgDQgHgCgXALQgKAFgZAZQgFAEgGAAQgHAAgEgEQghgmgahCIgPgpQgJgYgLgPQgUgZgWgEQgegGgGAxQgBAHADAMIAFASQACAHgFAHQgEAGgIgBIg2gDQgIAAgEgGQgFgFACgIQAPgzgxghQgggVg+gNQgGgCgDgFQgDgGABgGQAJg6gagwQgcg0g4gLQhAgNgoAyQgoAzAjA5QAGAJgIAJIAEAuQAHAFAAAIQAAAHgHAGIgZAoQgBAFgGAEQgGADgFgCQg8gTgnADQg+AFgBA5QAAALgLADQgNAEgJgDQgIgCgLgIQgRgSgIgHQgNgLgcAEQgLABgQAJIgZAPQgIAGgKgJQgfgYgrAEQgpAEgdAdQgGAGgWAhQgQAagTAHQgNAFgNgBQgOgCgKgJQgFgEgDgGIgEgMIgCgUQgCgMgLgDQgFgCgXAKQgEACgGgDQgEgCgDgEQgKgPgEgSQAAgXgDgKQgFgRgXAFQgIACgPASQgKAMgHAKQgNAWABARQABAOAOAZIALASQAEAKgEALQgDAIglAVQADAOgOAEIgGABQgDAFgJAAQgxgBggAnQgjAqAoAkIAZAXQAKALAGAUIAgB1QgLhfgChcQAAgGAEgFQAFgFAGABQA8AHArAOIAVAHQAOAGAIABQAUADAOgGIAbgKQAIgBAHAAQAZAAAHAVg");
	this.shape_2.setTransform(224,112.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#78BE5A").s().p("AFiFDQggicg/htQgIgOgHgDQgJgEgVAHQgiALglgDQglgDgfgRQgPgJgJADQgEABgEAEIgIAIQgIAHgLAAQgLAAgGgGQAjBcALBkQAKBlgSBiQg0iVg+iWQgPgngRgVQgXgegegDQgKgBgOACIgYAFQhiAUhbglIAJIvQgpgxgZhkQg0jIAJjNQAAgLgMgFQgMgFgMAEIgVAKQgNAGgIABQgIAAgLgDIgRgGQhAgYhDgGQADCpAjCnQg9h3gWiBQgEgTgDgJQgGgQgKgHQgEgDgKgFQgKgEgEgEQgTgPAEghQAGgmAigbQAhgaAoADIAOgFQgGgGAGgIQAFgHAIgDIARgFQAJgDACgHQADgHgHgKIgMgPQgMgOgBgVQAAgTAIgTQAMgYAmgjQAMgLAJgBQANgCAKANQAJAMABAQIADAdQACARAJAIQAUgJASABQAWAAAEARQABAFgCAMQgCALABAFQAEAOAQADQAQADANgIQAKgHAKgPIAPgZQAegsA4gLQA5gKAmAiQBJgwAkAeQAJAHARATQAPAOAMgHQgCgcAWgXQAVgWAegFQAZgEAdAGQAUAEAkAMQACgPAIgNQAJgOANgHQgTgJgDgYQgCgYARgNQgZgiAJguQAKguAkgYQAjgXAuAEQAtAFAgAdQAgAcANArQAMAqgIArQAlAIASAGQAeAKAUAPQAXASALAbQALAcgLAZIA3ADQgThBAcgYQAOgLAUABQATACAPALQAXASASArIAeBMQATArAYAYQAjghAWgIQASgGARAEQAUAEAJANQAbAmg5A9Ig2A8QgcAdgVgFQgHgCgQgPQgOgMgKACQgGACgHAIQgJAKgEACQgLAFgagCQhXgOhVAVQgFErgjEvQgTi9gUhfg");
	this.shape_3.setTransform(224.2,112.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#041404").s().p("EAD1AhdIg4r2QiWA1hOAPQiSAahihGQgIgGACgLQACgMAMACQB9ARB1gwQBzgwBPhjQAEgFAHABQAGAAAFAEIAyAzQAjlHgJmfQgChpgZo+QgRmhAGkKQAGjogEhnQgJi6gpiRQgMgvgjhtQgghjgPg5QgniVgOiiQgBgPAPAAQAPAAABAPQASDEA5C8IA2CsQAfBmAOBKQAaCFABC3QAABqgHDUQgED+AUGzQAWH0ACC4QAEGCgiEsQgBAKgJAEQgJAEgHgHIg9g9QhPBehzAvQhZAlheABQBJAZBggTQBOgQCbg4QAIgCAFAGQAGADAAAIIA6MKQABAOgPAAQgPAAgBgOg");
	this.shape_4.setTransform(87,238.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#041404").s().p("ADwSLQipjdi/jCQgsgogTgWQghglgEgpQgGgxgChJQgChSgCgoQgOkmgHjSQgUozAInDQAAgOAPAAQAPAAAAAOQgKIRAgLbIANE0IAICeQACAjAEAPQAGAXASAUQAQARAiAgQDKDKCvDoQAJALgNAIQgFACgFAAQgGAAgFgGg");
	this.shape_5.setTransform(165.9,226.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#041404").s().p("AvYAAQgPgCAEgOQAEgPAPACQF6A0JXgYQCkgHFHgRQEdgMDNAFQAPAAAAAPQAAAPgPAAQjOgFkeAKInrAXQjEAJisAAQlnAAkAgjg");
	this.shape_6.setTransform(237.1,111.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#041404").s().p("AtLIHQgZh9gCiLQgCh1ANiTQAFgvgFgdQgHgqgcgXQgLgLgUgHQgXgKgMAJQgHAFgEAdIgFAmIg4EjQgCANgNgCQgNgDgBgMQgdj9Aaj1QACgwAFgcQAJg0AcgKQAVgIARAQIADADQAvglBGgMQAzgIBpAEQDbAJDagYQEDgeC/AEIGuAOIARgFQBCgPA1AWQAwAUA3AzQAOANBKBOQBIBNALANQAuA6AIAyQAGAogRAhQgNAZgWANQAeAkAJArQAMA3gWA2QgDAHgGADQgGADgHgEQgcgSgfgGQAABngWBkQgCAJgLABQgKACgFgJQghg8g3gkQg5gmhDgEQgOAAgpACQgiACgVgEQgHgBgmgTQgfgQgOAGQgFACgKALQgLANgEADQgOAKgRAIQglARg1ABQgcABgrgEIhGgIQhCgEhJAZQgfAMgTAEQgbAGgXgDQgVgCgkgNQgpgOgRgDQgwgKhWgBQhfgCgngFQhrgPhgg2QhTguhAhFQg7DugGD4QAAANgOACIgDAAQgKAAgCgLgAuVjFQAsASAVAeQAiAygHBeQgEAzgOBiQgEBvALBxQAQi+Awi2QACgIAJgDQAJgDAFAHQCnDCEhAHQBIACAuAFQA+AHA2ARQAnANAjgFQAbgDAwgRQA4gTA4ACQArABBhAMQBVADAugoQAIgHAPgRQANgNAPgBQAPgBAVAQQAZATAIACQAYAJArgDQA2gDAOABQAqAFAkAPQBNAgAwBEQAQhXgChZQAAgGAFgFQAEgFAGABQApAEAhARQALgmgIglQgJgtgkgjQgGgGADgJQACgIAIgCQBcgjhQh5Qgmg5hghfQg3g3gLgKQgpgkgjgPQgpgRgyAIQgCAJgMAAIgSgBQghALgzAXQgNAGgIgNQgHgNANgGIAXgKIlIgLQjwgDi1AVQjrAci4gEQh6gJg9AEQhtAHg3A7QgIAIgLgGQgKgGAEgLQgYAHABAXIgHA1IgHBNQgGBAgBBQQgBBcAGBfIAiiwIAGguQAEggAIgMQANgUAYAAQAPAAAUAIg");
	this.shape_7.setTransform(246.9,322.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#579D4C").s().p("AtQAhQAHg2AAgWQABgsgMgfQgPgmglgTQgmgVghASIhHFwQghkfAokfQAFgmASgJQAMgHANAMQAMAKgIAKQArgyBVgNQAzgIBmAEQDFAKDKgVIB0gNQBHgIAtgEQBPgGBlABQBBAAB0AEIFFAKIANgDQA6gPAuAOQAZAIAaATQATAMAbAZQBeBWBQBfQAaAeANAVQATAfAEAcQAFAigPAeQgQAggeAIQAnAjALA0QALA2gWAvQgkgagtgDQADBtgZBrQgihChCgoQhCgohKAAQgxAEgXgBQgpgBgYgSIgRgPQgLgIgKABQgIABgIAHIgOAPQg1A8h8gKQg/gIgggCQg4gFgnAKQgIACg5AVQgnAOgZgBQgTAAgbgJIgtgPQg3gRhZgDQh/gDgVgDQhsgMhig1Qhig1hGhSQhDD8gEEIQgxjvAdj0g");
	this.shape_8.setTransform(246.8,322.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#041404").s().p("Ap4JLQgMgDABgLIAtmUIAGhEQABgmgKgeQgchOgMh2QgFgwAEgfQAFgsAVgdQAHgKASgPQAMgMAFgHQAGgKAFgPIAIgYQAEgKALgKQA3gxB+gjQB8giBAgHQBPgJAcAsQEphhE4AnQAPACAAANQAAAOgPABQh1AMh5AeQAnAdEcADQANAAABANQACAMgMAFQgyAVhPAKQhYAJgsAIQgxAIhMAeQhbAkggAJQg6AQhOAOIiMAUQg6AJgpgDQgqgDgjgQQhlG4i7GfQgDAHgIAAIgGgBgAinoNIhiAWQg6ANgfAIQgxAOgmAQQglARgQALQgeATgJAYQgBAFAAANQABALgFAHQgHALgVAOQgVAOgHALQgUAdAAA4QAAByAYBOIAPAkQAJAWADAPQADAVgBAbIgFAvIglFJQCil7BamTQADgOAOAEQAJADACAGQAzAYBHgFQAUgBBugSIB4gVQBEgNAygTIBugpQA/gWAzgHIB3gPIATgCQhRgEhMgKQg2gHgLgDQgngNADghQABgLAKgDQA+gRBBgMQj0gHjoBPQgFABgFgCQgFgCgCgEQgPgigyAAIgSABg");
	this.shape_9.setTransform(-154.5,-218.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#579D4C").s().p("ApDCDQADgcAAgQQAAgZgGgTIgIgWIgKgVQgJgYgGgxIgKhMQgHg9AGgnQAJg3AkgZIAXgPQAMgJAAgMQABgEgCgHIgCgMQABgNATgQQAzgnBMgaQAvgQBegVIBCgOQAqgJAgAFQAoAHAKAfQCSgzCegQQCdgPCbAUQiDAMiAAkQgFAMAOALQAMAJARACQCYAXCaAAQg1AYhgAKQh3ANgjAJQglAKg+AZQhFAdgdAJQgkALhXAOIiDAWQhFAMgpgBQg9AAgqgZIAAgEQhjHBjAGmg");
	this.shape_10.setTransform(-154.5,-218.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#041404").s().p("AgiLWIgEoGQgBkXAFjYQgIgBgHgIQgHgIgDgKIgUALQgMAFgGgIQgGgIgCgEQgXAEgKAEQgYAJgHAbQgFATgDAdIgGAwIhTJUQgCANgOgCQgOgCABgNQAJlVghlMIhNgFQgHgBgFgFQgFgGADgHQAPgmAngoIBEhEQASgUAQghQAXgzAEgGQATgiAqgbQBTg5COgpQBTgXAkgHQA4gLAsABIAGgBQBEABA2AoQAHAGgBAJQAAAKgKADQgpAMgRAHQggANgUATQgRAQgHAaIgMAuQgEANgOAQIgWAaQgLASgRAnQgRAkgIAOQgRAbgVANQgQAKgNAAQgeBmgOCLQgIBXgLCxIglIcQgBAOgPAAQgOAAAAgOgAgLlAQAIAFAAAIQgGDfABEkIABCWIAMjAIATkBQAPiVAihqQADgLALAAQALAAAEALQArg1ADgGQAIgPAOggQAHgPAagrQAVgiAIgaQARg2AtggQAZgSAsgPQgbgOgegEIgHAAQgwgFhFAOQgnAIhMAVQh7AkhTAzQgfATgTAZQgPAUgQAmQgPAigTAXQgJALg8A7QghAfgRAdIBEAFQAOABABAOQAXDlADDmIAkkAIAMhyQAHhFAPgqQAKgfARgMQANgKAVAAQAZABAKgDQAHgCAGAFQAEAEABAGIAYgMQAIgEAHAEQAHAEABAJIAHAQQADgDAEAAQAEAAAEADg");
	this.shape_11.setTransform(-92.7,-375.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#579D4C").s().p("AgVIrQgGoyAIktQgDAGgIAAQgJgBgEgGQgGgIAAgUIgmAUQgKgHACgMQgHAFgNgBIgWgDQgWABgOAZQgKATgEAeIheKiQAKlcgilUIhbgGQAOgpA7g2QBAg8ARghQAEgJAJgXQAIgVAHgLQAOgaAdgWQAVgQAjgSQBug4B2gbIBggTQAzgKAfADIgHgBQA/gDAyAqQhAATgdASQgyAggIAwIgBAQIgEARQgDAJgJAKIgPARQgOARgiBIQgaA5giARQgGAEgIgDQgHgCACgFQgaBOgOBlQgIA+gJB4IgyLCg");
	this.shape_12.setTransform(-92.7,-375.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#041404").s().p("AhaFOQgDgBgCgFIgDgGQgVgQgRgDQgUAAgQgDQgXgEgXgSQglASgwgCQg/gDgFgtQgFg0Apg6QAhgtAkgJQgFgOACgQQADgVAPgPIgBgEQgCgJAFgOIAFgLQADgFABgHQABgFgCgHQgDgHAAgEQgBgVAGgLQADgHAIgGIAOgLQAOgMAIgQIAOghQAHgSAMgIQAHgGAUgLQAKgGACgCQACgDADgMIAEgSQAFgPAQgXQARgXAQgJQASgKAZACQAMABAbAFQAZAFAPAAIAZgCQAOAAALACQAyAJAWAdQAhgFASAdQARAaABArQAAAGgDAEIAcAhQAbAhADAbQABAJgCANIgEAVQgCATAKAUQAHAJAQAXQAVAjAGAOQANAfgIAXQgHATgSASQgSARgTAGQgMAEgUgCQgZgCgHABQgQABgRAKQgXAOgJADIgeAIQgRAFgKAJQgHAGgNAQQgNAQgIAHQgeAagnAIQgUAEgKgHQgKAIgJAGQgRALgQAAQgKAAgJgEgAjOD6QASAQAjADQAoAEAPAHQAEACAGAGIAJAHQAFAGACAHQAfgHAQgcQAIgKALAEQAJAFgCANQgBALAigVIAkgXQAJgJAUgcQAMgOAFgEQAIgFAPgDIAYgFQANgCAKgFIAQgLQAKgHAHgCQALgEAMAAIAXACQAfAAAPgHQASgJAGgZQAFgSgGgRQgDgHgPgaIgXgfQgPgRgEgNQgEgMADgMQAFgOABgKQAGgfgYgiIgtg2QgIgMAKgKQAEgEADgBQgBgSgEgKQgKgagaAHQgEABgFgCQgFgCgCgEQgQgcgggCQgnACgSgBQgrgIgUgCQgigEgZAUQgRANgHAkQgIAigSALIgUAJQgNAEgFAIQgEAGgEANIgHAVQgHARgPARQgGAIgGABQgEAAgBABQgCABgEApIABAGQABAEgBADQgBAHgQAfQAHAEABAJQAAAIgIAFQggAYAaAcQAGAHgDAKQgEAKgKgBQgjgEgcApQgUAcgMArQgMApAwAEQAqADAhgSQAEgCAEAAQAFAAAFAEg");
	this.shape_13.setTransform(28.2,-285.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#78BE5A").s().p("AhQFCQgCgBgCgEIgCgGQgEgJgJgHQgNgIgVgBIglgCQgcgFgTgTQgWAOghABQgVABgngFQgOgCgFgGIgEgJQgEgTAHgWQAFgPAMgZQAXgsAQgQQAMgMAOgFQAQgHAOAFQgSgOADgbQADgaAWgJQgIgCgBgKQgBgHAGgHIAKgOQAGgJgCgHIgGgNQgGgKADgMQACgMAIgIIAMgIIAMgIQANgKANgnQAMgkATgHIAUgEQAMgDAEgIQABgDAAgPQAAgQAKgSQAGgLAPgTQAMgPAKgGQAPgHAfAGIBFAMQATgLAoALQAVAGAMAGQAQAKAGAOQAMgGAPAGQAOAGAIAOQAHALACAQQABAKABAUIgOABIAwA9QAOASAFANQAIAYgNAgQgEANABAFQAAAHAIAJQAhApAWAwQAJARAAAMQAAAWgcAZQgSARgPACQgLACgSgEQgUgFgJABQgOABgaASQgZARgQABIgPgBQgJAAgGACQgGADgKAPQggAzg1AZQgSAJgKgDQgHgDgEgHQgEgHADgFQgUAfgjAKIgGABQgEAAgCgCg");
	this.shape_14.setTransform(28.2,-285.7);

	this.instance = new lib.s17320();
	this.instance.setTransform(-18.8,-90.5,1,1,0,0,0,33.4,4.5);
	this.instance.alpha = 0.699;

	this.instance_1 = new lib.s17321();
	this.instance_1.setTransform(156.7,-125.3,1,1,0,0,0,41.2,4.8);
	this.instance_1.alpha = 0.699;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#041404").s().p("Ap0BGQAAgKAJgBQAkgCAygGIBVgKIKChJQBHgICOgTQB+gQBWgEQAKAAAAAKQAAAKgKAAQgiACgzAGIhWAKIqCBIIjUAbQh+APhXAGIgBABQgIAAAAgKg");
	this.shape_15.setTransform(-105.8,-272.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#041404").s().p("EgDjBGuIABggQAChDAPlMMAF1h3dQAXnJAJjdIAIiVQAEhXAAg+QAAgJAKAAQAKAAAAAJIgBAhQgCBFgPFKIgkL0MgFRBrpIggKmIgICVQgEBXAAA9QAAAKgKAAQgKAAAAgKg");
	this.shape_16.setTransform(-57.5,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#041404").s().p("EgAsAutIgBglQAAjXAEpTIAM2WQAJuBAIrQQAKs4AIolIAElkQAEjQALiTQABgJAKAAQAKAAgBAJIgCAlQgJCqgEDrIgGGVQgKI8gKNaQgGLOgJODIgLVdIgCFkQgCDQACCTQAAAKgKAAQgKAAAAgKg");
	this.shape_17.setTransform(13.5,150);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#041404").s().p("EAALAtOIAFlKIAGlJQADi/gCiKQgDi5gQiPQgLhzgBgxIgBjJMgAKgkcQgFskgFmTQgDkHgDiCIAAhXQgBg2gGgeQgCgKAKgCQAJgDACAKIADATQAEAuACBDIABBwIAGG1QAEGiADNDQAEKaACKXIAEOTQABCzAMBqQAQCQADCzQACBsgDDYIgKKnQgBAKgKAAQgKAAABgKg");
	this.shape_18.setTransform(27.5,160.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#041404").s().p("AgCARQgJgCACgKIACgPQABgDAEgCQACgDADABQAJACgCALIgDAOQAAAEgEACIgDACIgCgBg");
	this.shape_19.setTransform(24.3,-129.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#041404").s().p("AgfJdIgFibQgDhdAAg+QAAg3AMhZQANhqADglQAIh7AHi2IAQkzQABgKAKAAQAKAAgBAKIgQEzQgJC2gIB7QgDAlgLBqQgMBaAAA2QAAA+ADBdIAFCbQABAKgKAAQgKAAgBgKg");
	this.shape_20.setTransform(26.6,-192);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#041404").s().p("AgJVrMAAAgrVQAAgJAJAAQAJAAABAJMAAAArVQgBAJgJAAQgJAAAAgJg");
	this.shape_21.setTransform(17.1,-283.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#041404").s().p("AAFAMIgOgGQgKgDADgHQADgKAJADIAPAGQAJADgDAHQgCAIgFAAIgFgBg");
	this.shape_22.setTransform(53.5,-329.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#041404").s().p("AgSAIQgJgDACgHQADgKAKADQAMAEAOgEQAJgDACAKQADAHgJADQgKADgJAAQgIAAgKgDg");
	this.shape_23.setTransform(55.5,-313.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#041404").s().p("AAZARIg2gQQgKgBADgJQADgJAJACIA2AQQAKAAgDAKQgCAHgHAAIgDAAg");
	this.shape_24.setTransform(57.7,-300.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#041404").s().p("AAoLlQg/rSgur3QAAgOAPAAQAPAAAAAOQAsL3BBLSQABAOgPAAQgPAAgBgOg");
	this.shape_25.setTransform(50.1,-354.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#041404").s().p("AFaAtIq0g7QgOgCAAgPQAAgPAOACIK0A7QAPACAAAPQAAANgMAAIgDAAg");
	this.shape_26.setTransform(89.6,-276);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#041404").s().p("AqsgGQgOgBAAgPQAAgPAOABQKqAvKvgFQAOAAAAAPQAAAPgOAAIh1ABQp0AApwgrg");
	this.shape_27.setTransform(97.7,-249.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#041404").s().p("AqFBEQAAgPAOgBITviFQAOgBAAAPQAAAPgOABIzvCFIgCAAQgMAAAAgOg");
	this.shape_28.setTransform(172.3,19.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#041404").s().p("ApbPIQgNgIAHgNQIXvgKSuWQAIgLANAHQANAIgJALQqQOWoYPgQgEAJgHAAQgEAAgFgDg");
	this.shape_29.setTransform(-321.5,121.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#041404").s().p("AlpWQQgOgEACgOQA4kpBRlEQA5jqBVk5ICUoeIDestQAYhSARhBQAhiAgPgCQgOgCAAgPQAAgPAOACQAtAGgHA7IgXBXIhZFGIlCSdQheFZg7DxQhOFAg0ERQgBALgKAAIgGgBg");
	this.shape_30.setTransform(-225.9,-112.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#041404").s().p("AknLrQgHgNAMgGIDAhhQAegPAOgJQAXgPAMgTQANgSAHgeIAMgzQAvi5AwjVQBbmPBGmlQADgOAOAEQAPAEgDAOQhMHGhiGnIgzDaIgXBmQgPA9gPAnQgNAggZAXQgVATglATIjHBkQgEACgEAAQgHAAgFgJg");
	this.shape_31.setTransform(-160.7,-328.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#041404").s().p("AnxEKQgHgNAMgIQHckfHtjlQANgGAIANQAHANgNAGQnyDnnXEdQgEADgEAAQgHAAgFgIg");
	this.shape_32.setTransform(-84.2,-426.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#041404").s().p("AD6ChIoBknQgNgHAIgNQAHgNANAHIHkEXQAJgIAJAKIAOARQAIAJgHALQgFAGgGAAQgEAAgEgDg");
	this.shape_33.setTransform(-11.8,-438.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#041404").s().p("AGxHbQgOgCAEgOQAEgPAOACQgNgCgTgVIgcgfItKtJQgKgKAKgKQALgLAKAKIM1M0IAkAhQAWAVAMAPIALAOQAGAIgBAJQAAAOgLAHQgHAFgKAAIgGgBg");
	this.shape_34.setTransform(277.5,54.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#041404").s().p("AFAUdQgnh0gkikIg6kcQgqjGhek4Qh4mRgchoQhelmidqgQgDgOAOgEQAPgEADAOQBZF9AyDOQCMI7CJHBQBWEUAuDiQAnDBANA7QAgCNAkBrQAEAOgOAEIgGABQgKAAgDgLg");
	this.shape_35.setTransform(201.8,-116.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#041404").s().p("AB6I+IkQxzQgEgOAPgEQAOgEADAOIERRzQADAOgOAEIgGABQgJAAgDgLg");
	this.shape_36.setTransform(105.6,-331.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#041404").s().p("AEFCdIgUgEQgOgCADgNQjuiUkHh3QgNgGAHgNQAIgNANAGQEPB8ECChQALAHgFALQgEAKgJAAIgFgBg");
	this.shape_37.setTransform(142.3,-262);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#041404").s().p("ADNDjImumwQgKgLAKgKQALgLAKAKIGuGxQALAKgLALQgFAGgGAAQgFAAgFgGg");
	this.shape_38.setTransform(70,-408.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#041404").s().p("Ai0AcQgEgOAOgDQCmgcCngWQAPgCAEAOQADAPgOACQinAUimAeIgEABQgLAAgDgNg");
	this.shape_39.setTransform(32,-428.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8C827E").s().p("ABDA1QgPgDgIgFQgJgGgIgQIgIgPICaBDgAishLICPAyQAeALAMAOIAGAIg");
	this.shape_40.setTransform(-20.9,-378.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#342C2C").s().p("ACtAsQghgHl1geIhxAWIAAhuIBFA1IHCAnICuAhIAAAmg");
	this.shape_41.setTransform(-18.4,-95.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#342C2C").s().p("AAjBKIgsg4Iixg7IAFhNIDYB2IALA0ICMBDg");
	this.shape_42.setTransform(-19.8,-382.9);

	this.instance_2 = new lib.s17322();
	this.instance_2.setTransform(-31.7,1.3,1,1,0,0,0,50.4,453.8);
	this.instance_2.alpha = 0.699;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7A726E").s().p("AkLL0IhN3GIARg6IGoHNID4RMg");
	this.shape_43.setTransform(81.2,-354.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#342C2C").s().p("ACYgjQjlBngegBQgeAAjug7IDgAAIEviTIDgCTIAACEg");
	this.shape_44.setTransform(89,377.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#524B4B").s().p("AgKV7IjRnQIqpi9IlyoAIgt6bIedAAMAKqAn8IuWDmIijB5g");
	this.shape_45.setTransform(271.8,257.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#524B4B").s().p("EgZHBC6MALWgoIIQW6yMALygrdIEcimIEfznIB2hUIg0CWIj1S5IlFC3MgMnAz4IAAm5IudZNIguB7Ij1UdIAAGpIhakCIjJOtg");
	this.shape_46.setTransform(-279.2,20.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#524B4B").s().p("AEArMIiyQhIlNF4g");
	this.shape_47.setTransform(-183.3,197.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#524B4B").s().p("Ag5D9IBH1zIAtCuMgBSAg/g");
	this.shape_48.setTransform(-69.4,-105.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#342C2C").s().p("AHoJZQghAAhbjOIhVjPIizgdIjHnFIqnikIgtiOILxDRIDPHNID3AzIG4Hgg");
	this.shape_49.setTransform(256.9,391.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#272222").s().p("EgCIA2uMACthtyIAeCOMABFBr7g");
	this.shape_50.setTransform(16.3,98.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#342C2C").s().p("AkoATIK0hzIAYBgIkpAkImBAWIidAng");
	this.shape_51.setTransform(156.8,-131.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#342C2C","#181616"],[0.475,0.98],108.5,18.9,5.6,1).s().p("EgYKBDYMADDghXIECoXILSy/IAGGGMAMkgz4IFFi2IEq0xIGHjwIABgQIBegpIhfA5IhsZEMgJ0A0qIr6aGIiueCg");
	this.shape_52.setTransform(-224.6,0.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#342C2C").s().p("AhSi3ICliSIg/KTg");
	this.shape_53.setTransform(-144.4,246.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B0A59E").s().p("Aq2B0IAAhLIAPg4IDkiPIJ0ARIIGEsg");
	this.shape_54.setTransform(99.6,-262.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#342C2C").s().p("EgIHAh5MAAAgzPIjSwDIWzgfIzhBmICRF0IF7APIlvBsICGFxIAtaSIHqLFICzPUg");
	this.shape_55.setTransform(163.5,232.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#342C2C").s().p("AgJ/BIB8luMgDlBJeg");
	this.shape_56.setTransform(-68.4,213.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#473E3E").s().p("AnnAjITYiKIhzBHI1uCIg");
	this.shape_57.setTransform(-105.3,-270.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#342C2C").s().p("EgeWA56MAKkgnnIRC8bMALZgqeIGJieIPli1MgB2AvXIqPOTIiRTWIpoMgIicWTg");
	this.shape_58.setTransform(-240.6,78.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#342C2C").s().p("ACBNDIrbAtIEY1IIOdo5IhBb1Ii/AsIgvBaIhbA4IAABwg");
	this.shape_59.setTransform(-97.3,-350.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7A726E").s().p("AtdHbIkGuIITsgwIPbO7g");
	this.shape_60.setTransform(222.8,63);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#272222").s().p("Ai/zYID/g1ICAX0IjyCSIhGOVg");
	this.shape_61.setTransform(35.1,-302);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#524B4B").s().p("EgMkAhbICo2kIHbqIICEAhICS2BIJXs6IBZAAMgC+BDXg");
	this.shape_62.setTransform(-141.4,235.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#504847").s().p("EhEWBGnMAKkgnnIRC8dMALbgqcIEdirIDzzdIO7olIHlEfIFuhBIGqHNIEIRHIIFEuMAKjAo6IPaO9MAKtAn2IFtNAg");
	this.shape_63.setTransform(2.6,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.instance_2},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1},{t:this.instance},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-440.1,-455,880.4,909.1);


(lib.s1736 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1738();
	this.instance.setTransform(179.2,260.3,1,1,0,0,0,179.2,258.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C0C0C").s().p("EADMAojQnZhXhZgNQkRgojcABQBVAiBBBGQAFAFgCAHQgCAHgHACQkKBTkZgDQkYgDkIhZQgFgBgDgFQgDgFACgEQAYhCA3ghIg1gUQg0gUgXgKIhAgdQgmgVgMgZQgHgNACgRIAFgfIAXiLQAWiKAZimQAtk1AWjpQAcklgBj8IgBkbQAAihAGh5QAFhuAKihIAQkRQAMjDAEl2QAEmCAJi3QAboAAChHQAKk1gVjvQgQAJgPALQgKAHgGgLQgHgKAKgHQAUgPAVgLIgBgIQgBgNANABQALAAACAJQBbgnBvAVQCSAbBdBuQBoB8gGC1QgFCbhQCIQAdACAbARQAjAXAUAoQAUApgFApQgFAkgWAaIBIAmQAEADABAFQACAFgDAEIglBKQBTAoAUBlQAJArgHAlICni4QAlgoBJhTQBBhHAzguQBbhRBYgbQBugiBcA4QBQAxA0BkQAtBXANBpQAaDDhYC1QhHCVh8BZQAZADAbAMQBEAgAMBFQAOBMhBA1QguAlg1ADIBsBgQAGAEgDAHQgCAHgGACQhUAfg4BFQgxA+gQBNQAygLBeggQBlgaA5AuQArAjAJAyQAEAUgEARQAXgGAaACQA5AFAhAuQAiAwgTA8QgLAkgXAVQA/AFAxA1QAjAlALArQAfhDBAg0QBYhHB5gcQDbgyC8BpQDIBtAbDbQAeDrilDlQhlCMjnDEQBiAVA/ApQBdA9AHBkQAFBWhMAyQgaARguAUIhMAgQg8AdgeA3QgjBBA/AlQAhAUAzgCQAogCAugOIBFgZQAugQAegHQBbgUA1AuQA+A2ggBYQgUA3g1A9IBsAeQAEABADADQADAEAAAEQgGA9ggAyQgSAcgZAWQAdgDAUACQA6AGAeAlQAXAcABAhQABAXgLATQBOANBVAiQBIAdBjA1QBTAtEcCdQAIAEgCAJQgDAJgJABQlIAllCAAQoNAApJhtgEgEzAmtQArAGIGBeQFTA8DjAUQIlAwIrg7Ik/iuQhmg4hJgeQhignhZgNQgHgBgBgIQgCgHAFgFQAXgYgKgiQgJgggdgRQgcgQgpABQgYAAgwAHQgKACgEgKQgFgJAKgGQBKgpAahMQAJgYgGgLQgFgKgYgHIhSgWQgHgCgCgHQgBgHAEgFQA+hCAVg9QAehYhMgkQgrgUhAAOQggAHhIAcQhOAehCgBQhbgCgehAQgphYBihBQA2gkBxgsQBDgjAPhAQAPhAgsg+QgjgyhGgdQgxgVhQgNQgHgCgCgHQgCgIAFgEQCEhuA+g8QBohjBAhfQA/hcAehsQAghvgJhnQgUjwjThkQhVgqhsgIQhugJhlAbQhsAehHA+QhJBDgVBhIgDAMQgCAMgMgEQgMgDACgMIACgKQAMhGg1g6Qg5g+hOANQgJABgFgKQgDgKAIgEQAogRAQgqQASgrgUgnQgVgsgygIQgrgHghAVQgGAGgJAFQgJAGgHgJQgHgJAIgHIADgCIALgJQAhgdgdgxQgfg1gwgKQgwgLhPAaQhsAjgSADQgHABgFgFQgEgEABgIQAOheA8hKQA2hCBNghIh4hpQgHgGAFgIQAFgIAJABQA+AKA0gqQA2gtgLg/QgKg4g4gaQg0gYguAYIgGADQgLAGgGgKQgGgLAKgGIAIgFQBXgxBDhOQBEhQAnhkQAhhWAJhbQAJhegShYQgXhug5hSQhEhjhggTQhpgVhyBSQg/AuhsB2IljGHQgJAJgIgJQgJgJAIgJQAMgLAKgMQAog3gOhNQgRhhhTggQgGgCgCgFQgCgFACgGIAnhLIhNgoQgFgCAAgHQgBgGAEgEQAagXAFglQAEgigPgiQgPghgcgTQgegVgjAFQgIABgFgGQgGgGAFgHQBXiKAGidQAIishjh2QhXhpiJgZQhsgVhYAoQAYEFgNFhQgIDUgZGpQgFB0gBCoIgBEcQgBDSgVFPQgYGFgFCJQgEBsABCkIABEPQgCDvgaEXQgWDcgqEnQgZCngPBdIgVCDQgCAPgLArQgIAoAIAQQAMAZAyAXQAbANAwARIA7AWQAjANAXAKQAGACAAAIQAAAIgGADQg8AbgZA6QD/BUEOADQEKACD+hLQhThRh0gZQgLgCACgLQACgLAKAAQAtgCAvAAQDrAAEnAug");
	this.shape.setTransform(482.1,270.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDD2DC").s().p("EAGzAo/Qh6gTjbgqQjtguhlgQQmQhDkcAMQA+AMA5AgQA5AgAqAwQkHBTkYgDQkYgDkFhZQAKgjAagcQAZgbAigOQhfgig9gbQhygyAGgkQBXoSAjknQA4negJlfQgIkmAhoNQAioggFkVQgEi0AMjyIAXmmQAboBgek6QBlgzCBAfQCeAmBRCBQBOB6gLCgQgKCYhUCBQAngIAiAXQAgAVARAnQASAmgEAmQgFApgfAYIBXAuIgsBWQBZAfAUBrQAPBQgkA2IFYl8QBkhuBSgyQByhGBmAcQA8AQAzAyQAsAsAhBAQBtDVhOD6QhKDvjFByQAvgVA3AdQBDAjAEBCQAEBBg6AuQg5AuhAgPICHB2QhWAdg8BKQg8BKgLBaQAfgEBegfQBMgYAxAEQBBAGAiBFQAZA3gbAdQAfgRAqAFQA2AHAbAqQAbArgRA2QgRA0gvATQBRgRBBBFQA3A7gHBCQAWhYBRhFQBThFBzgeQCjgpCfAzQCoA0BSCGQBJB3gLCeQgLCRhMCGQhBBxhzBzQhGBGiVB9QBEAMAvARQA8AWAnAlQAtAqAOA7QAOA/geAwQgYAmg4AbIhkAoQg3AXgiAmQgoAsAKAwQAOBCBWALQBJAJBOghQDPhXA+BeQAhAygeBHQgXA1g4A8ICAAjQgEA4ggAxQggAxgyAZQAygIAcABQArAAAeAQQAjATAKAqQALArgdAXQBhAMBvAxQBFAdB/BGIE5CtQlEAllDAAQm6AAm4hFgEgaygpyIACAPQgZAMgXARgEgawgpjIAAAAg");
	this.shape_1.setTransform(482,270.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C0C0C").s().p("EAPTAo8IjEgYQmggvmYgTQl3gSm/AIQj0AEiKgLQjSgQijg2QgHgCgCgHQgCgHAFgFQBKhEBegTQAtgIA2AEQAsADAbgHQAggJAdgaIBHhDQApgkApgRQBMgeBWAKQgKhTAIg7QANhdA4grQBAgxBpAmIBVAgQAyAQAkgDQAdgDAdgMQAmgRgCgYQgBgOgbgOQgegNgJgGQhRgvgxgwQg4g4gUhAQgWhHAbhEQAdhIBEhMQA3g+BLg6QBJg4BHgTQBVgXBIAjQA/AeA4BUIArBIQAbAqAVAaQAxA5A5AWQBGAbA1gsQAlgeALg0QALgxgRgvQgfhZh0hEIg+glQgigYgPgdQgag1AZg6QAQgnAfgWQhRgYg6hBQhPhXAmhfQAehJBPgaQBLgXAyArQA3ibAAieQABjFg8hlQgfgzhDgeQhOgcgpgSQhWgkgphRQgphUAFhvQAEhdAlhmQAlhmA8hMQBFhWBYgnQBegpBiAMQBKAJA6AlQgSgxABg4QABhPAmhKQAlhJBAgwQA3goA+gNQh/hngpiwQgri4BDivQBHi4CwiKQCZh4DThGQALgDADAMQAEAMgMADQjHBCiSBwQioCAhJCrQhHCqAlC1QAnDACRBnQAIAGgDAIQgCAJgJABQhKAHg+AuQg6AsgiBEQgiBEgBBJQgBBOAmA/QAFAJgIAHQgJAGgIgHQhghaiMASQiEARhbBhQhKBMgqBtQgpBqgDBtQgCB5AzBNQAdAsA3AbQAVAKBSAeQBdAhAvBQQAnBBAPBuQAhDuhYDlQgCAHgHACQgHACgFgFQgvg3hNAfQhIAdgQBFQgTBSBHBFQA+A8BXAQQAJACAAAKQgBAKgIADQgnAPgTAnQgUAmAKApQAIAiAjAaQAGAFA7AjQCGBPAdBrQAZBfg+BKQhBBMhgggQg3gSgsgwQgdgfgnhCQgthJgWgbQgpg0gxgXQhFgghSAaQhCAVhFA4Qh8BkhABvQhKB/BkB2QBGBSCXBJQAGAEAAAHQgCAkgXAYQgVAWgkAKQgsANgygLQgcgGg+gZQhMgeg2AJQhDALgbBHQgRAtgCA7QgBAsAIA9QABAGgGAEQgFADgGgBQg4gKg3ALQg5AMgvAfQgWAPgpArQgmApgaAPQggAUgwAAQg3gEgdABQhnAFhRBDQCoA0DaANQB3AHEogFQG8gGGkAYQF4AVGHAuIBcANQA4AIAlACQA0ACAeglQAPgTAahBQBDieA3i0QBgk4A7l9QAvkoAimbIAblhIAZlhQATjhAIhxQAOjDACiRQADi6gPiaQgSi0gribQgyiyhLiBQgzhYhIgpQhZgzhPA3QgKAHgGgLQgGgLAKgHQA9gqBMARQBGAPA2A4QA1A4AsBbQAeA9AkBpQA8CtAYDPQAVCvgDDXQgCCZgQDWQgJB6gUDzIgbF8QgRDigOCbQgmGsg5E8QhIGOh1FGQghBfgnBZIgYA5QgQAggWAPQgYAQglABIgDAAQgSAAgsgGg");
	this.shape_2.setTransform(191.8,264.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EAPmAoxQtzh0t1AMQk9AFhvgGQjwgNixg8QAvguBAgYQA/gXBCADIAtAEQAbABASgEQAigIAjgiQAUgSAmgpQA0gxBGgTQBGgUBGAOQgPhrAShNQAXhiBNgXQAugNBAAVQAkAMBJAeQA7ATA6gVQA/gWAAg2Qk3iVAbi4QAHgsAdgvQATgfAqgyQBlh4Bgg4QB+hJBnAyQA2AaAxBCQAcAnAwBSQAsBEA5AjQBEArA+gUQA5gSAbg+QAag7gQg9QgPg4gtgwQgngqg6ghIgzgdQgcgSgQgUQgkgtATg/QATg/A3gSQhXgOg/g9QhBhBADhRQACgoAcgkQAZggAmgSQAogSAmAFQApAGAYAfQAwh6AMiEQALiEgZh/QgZiBhCg1QghgbhKgZQhPgagegUQhRg0gYhyQgVhhAZhxQAZhzA1haQA7hlBWg5QBeg+BzAEQB3AEBMBLQgphBAChRQABhMAkhIQAlhJA9gtQBBgxBMgFQiZhqgnjOQgljFBViyQBPijCjh7QCThuDCg/IgLNWQApggA6ADQA2ADAvAfQAoAbAjAuQAbAlAcA3QCdE3ASG+QAHCtgMDjQgGBogYEmQgRDYgfG2QgeGCgjENQhhLkjjIHQgKAXgIANQgMATgPAJQgSANgdABIgHAAQgRAAgbgEg");
	this.shape_3.setTransform(191.8,264.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.9,0,650.9,540.8);


(lib.s1734 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s17315();
	this.instance.setTransform(332.1,246.2,1,1,0,0,0,332.1,246.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:246.3,y:244.5},0).wait(1).to({y:243.1},0).wait(1).to({y:242.1},0).wait(1).to({y:241.3},0).wait(1).to({y:240.7},0).wait(1).to({regY:246.2,y:240.2},0).wait(1).to({regY:246.3,y:242.3},0).wait(1).to({y:243.7},0).wait(1).to({y:244.7},0).wait(1).to({y:245.5},0).wait(1).to({y:246},0).wait(1).to({regY:246.2,y:246.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,664.3,492.6);


(lib.s17213 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s17212();
	this.instance.setTransform(85.2,85.2,1,1,0,0,0,85.2,85.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.5,170.5);


(lib.s1726 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1724();
	this.instance.setTransform(66.7,103.3,1,1,0,0,0,66.7,103.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4.4,133.5,202.3);


(lib.s1722 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("ADJATQgGAAgCgEQgPgGghgCQgrAAgOgBQg0gEgogBQhTgBhzACQgKAAAAgIQAAgKAKAAQCQgEBQAEQA+ADA8AGIAhABQAUACALAEQAGAEgCAHQgCAIgHAAg");
	this.shape.setTransform(158.5,86);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#041404").s().p("AicAoQgHgHAHgGQA/g1BVgNQBKgLBXAXQAKADgDAKQgDAJgJgCQhSgWhFAJQhQAMg7AxQgDADgEAAQgDAAgEgEg");
	this.shape_1.setTransform(155.9,198.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#041404").s().p("AiCAaQgJgCADgJQACgKAKACQA8AMBCgNQA2gIBGgdQAJgDADAJQACAKgIAEQhJAbg5AKQghAHgiAAQghAAgggHg");
	this.shape_2.setTransform(155.1,203);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#041404").s().p("AiuAqQgKgBAAgKQAAgKAKABQAoAEA0gKIBYgTIClgmQAKgCADAJQACAKgJACIi3ApQhBAPgSADQghAGgcAAIgYgBg");
	this.shape_3.setTransform(154.2,184.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#041404").s().p("AhFC2QhJgNgfhTQgPgsgLhqQgBgJAKAAQAKAAABAJQAIBLARA9QAOAtAYAVQAaAYAtADQA5ADA2ggQAzggAdg1QAeg0ADhCQACgqgFgPQgOgkgnABQgJAAg3AOIjwA8QgKACgCgKQgDgJAJgDIDeg3QATgEAzgQQAugKAWATQAgAagHBWQgFBLglA6QgkA6g+AeQgtAXguAAQgRAAgTgDg");
	this.shape_4.setTransform(154.9,193);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#041404").s().p("Ag4AFQgJgDAFgIQAFgIAJAEQAYAKAWAAQAJAAAOgBQAUgDAAgEQAAgKAKAAQAKAAAAAKQAAAMgPAGQgKAFgSACIgUABQgcAAgcgNg");
	this.shape_5.setTransform(71.4,294.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#041404").s().p("AkAF0QhqgnhQhLQhVhQgkhmQgkhmAXhsQAXhvBMhNQAHgHAHAIQAHAHgHAHQhfBfgGCNQgFCFBQBwQBSBzCNA4QCCA0CUgKQCdgKB4g7QCLhFBAh8QBPiWgKiJQgLimiVg8QgJgEADgJQACgKAJAEQA1AVApAmQApAnAXAzQAZA7gEBKQgDA7gWBJQhNEBjgBZQh8AyiFAGIgiAAQh3AAhpglg");
	this.shape_6.setTransform(158,219.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#041404").s().p("ADlHzQkonUi0oKQgDgJAKgCQAJgDADAJQCzIGEnHTQAGAIgJAFQgDACgDAAQgEAAgEgFg");
	this.shape_7.setTransform(100.4,437.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#041404").s().p("AizHtQgJgFAEgJQDNnWCRnwQADgKAKADQAJADgCAJQiRHvjQHcQgCAGgFAAQgCAAgDgCg");
	this.shape_8.setTransform(204.2,431.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#041404").s().p("AhOEwQgJgFAGgIQBPh7AligQAnidgNiSQAAgJAKAAQAKAAAAAJQAOCVgoCgQgoCihPB9QgDAEgFAAQgDAAgDgBg");
	this.shape_9.setTransform(37.1,466.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#041404").s().p("ABYFCQgWgwg8hkQg3hdgXg3QgghNgBhdQgBhOAVhhQACgKAJADQAKACgCAKQgWBmAEBSQAEBfAnBSQAVArA0BZQAzBVAWAwQAEAIgJAGQgDACgCAAQgFAAgCgGg");
	this.shape_10.setTransform(44.8,424.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#041404").s().p("ABDGoQhzmigmmrQAAgJAKAAQAKAAAAAJQAnGrBxGdQADAJgKADIgEAAQgGAAgCgHg");
	this.shape_11.setTransform(39.6,380.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#041404").s().p("ABSEGIhvkeQgjhLgQgpQgbhIAIgxQACgKAJADQAKADgCAJQgFAfAOAqQAIAZAUAtICQFyQAEAJgKADIgEABQgHAAgCgIg");
	this.shape_12.setTransform(41.6,361.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#041404").s().p("AANHLQhUnKBHnLQAAgKAJADQAKADgCAJQhDHHBTHEQABAKgJACIgEABQgGAAgCgIg");
	this.shape_13.setTransform(262.8,445);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#041404").s().p("AgmBJQgJgEAFgJQAhg4AjhJQAFgJAIAGQAJAFgEAIQghBBgkBAQgDAFgFAAQgCAAgDgCg");
	this.shape_14.setTransform(4.5,317.4);

	this.instance = new lib.s17qlcZ3R();
	this.instance.setTransform(265.7,260.1,1,1,0,0,0,54.4,59.9);
	this.instance.alpha = 0.77;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#041404").s().p("AgLAAQAAgIAJAAIAFgBQAJAAABAJQgBAJgJAAIgFABQgJAAAAgKg");
	this.shape_15.setTransform(265,399.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#041404").s().p("Ah5HUQgKgDAEgJQCsm+BBnWQABgKAKADQAKADgCAJQhBHaisG6QgDAHgHAAIgDAAg");
	this.shape_16.setTransform(260.2,402.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#041404").s().p("AiZFoQgJgDADgJQCZluCVlQQAEgJAIAFQAJAGgEAIQicFbiPFfQgDAHgHAAIgEgBg");
	this.shape_17.setTransform(253.9,374.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#041404").s().p("ABbAOQgpgKgyABIhdADQgJABAAgJQAAgJAJgBIBegDQA1AAAqAKQAKACgDAHQgCAIgHAAIgDAAg");
	this.shape_18.setTransform(248.1,207.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#041404").s().p("AAQA+Qgcg4gVg9QgDgJAKgCQAJgDADAJQATA8AcA0QAFAJgJAFQgDACgDAAQgEAAgDgGg");
	this.shape_19.setTransform(268.1,332.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#041404").s().p("AhwCRQgcgTg+g+QgggghPhTQhGhLgrgoQgHgHAIgHQAHgHAHAHQAoAmA/BDIBlBpQBOBRAlAXQBLAvBEggQA1gZA6gwQAqgiA4g3QAWgXAcgiIAwg7QAQgTAKgJQAPgMATgFQAJgCADAKQACAJgJADQgdAHgiAqIgzBDQgzA5g7AyQhAA3geATQg7AmgvADIgHAAQgyAAg2gng");
	this.shape_20.setTransform(152.9,202.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#041404").s().p("AnwEuQgKgCADgJQAghRATgnQAghAAogrQAqgtBKghICEg2QDvhkBdgkICfg8IBCgaQAogOAeADQAJABAAAKQAAAKgJgBQgfgDgsAQIhJAdIiOA2QhIAcjNBWQhhAkgxAUQhVAigvArQgtApgjBEQgVAoggBVQgDAHgGAAIgEgBg");
	this.shape_21.setTransform(56,204);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#041404").s().p("ACNEjQhkgxg8gzQhQhCgihTQghhRAPhZQAPhTA3hLQAFgIAJAFQAJAFgGAIQg5BMgLBWQgNBbApBQQAkBHBIA6QA4ArBbAsQAJAEgFAJQgEAGgFAAIgFgBg");
	this.shape_22.setTransform(124.1,218.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#041404").s().p("AhiFKQgXgDhvgRIg1gKQgigFgUAGQgKACgCgJQgDgKAJgDQAfgJA4AKQAfAFA4AMQBPANAkABQAeABAhgNQASgGArgVQBXgpBBhHQBEhKAchYQAehbgZhWQgbhehTgpQgIgEAFgJQAFgIAIAEQBIAjAiBMQAgBGgIBTQgJBTgyBSQgvBNhHA4Qg/AzhCAZQg4AXg4AAQgPAAgQgCg");
	this.shape_23.setTransform(173.1,217.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#041404").s().p("AEYCZQgDgKAKgBIADgCQkpiskyhsQgJgEADgJQADgKAJADQE5BwE1C0QAEADABAEQABAFgEAEQgIAJgDABQgCABgMACIgCABQgHAAgDgJg");
	this.shape_24.setTransform(231.2,192.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#041404").s().p("AhmBbQgBgIAGgEQBbhAAjhpQADgJAJADQAKACgDAJQghBghLBAQBQgLBBg4QAHgGAHAHQAHAHgHAGQhSBIhtAEIgBAAQgHAAgCgHg");
	this.shape_25.setTransform(78.7,110.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#041404").s().p("ABxBcQgMhLgygzIAKAwQABAIgHADQgIAEgFgIQgdgsgmglQAHBAgIBBQgBAIgIACQgJACgCgJQgShehOg8QgHgGAHgHQAHgHAHAGQA8AuAaBAQABgwgHgwQgBgHAGgEQAGgDAGAFQAiAdAdAlIgGgiQgCgIAGgDQAGgEAGAFQA4AvAXBAIACgaQABgPgCgKQgBgMAEgLIgDABQgJADgCgKIgBgEQgCgIAHgDIAEgDQAIgDAFAFQATAUgFAyQgCAZgMAzQgBAHgIABQgJAAgBgIg");
	this.shape_26.setTransform(192.7,95.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#041404").s().p("ABRB2QgIAAgCgHQgchVABhVIgxBnQgDAGgHgBQgIgBgBgGIgThfIhpCYQgDAGgGgBQgHAAgCgHQgXhSAkhMQAEgJAIAFQAJAGgEAIQgbA6ALA/IBpiZQAEgFAGABQAHAAABAHIATBYIA7h4QADgHAIACQAJACgBAIQgKBZAVBUQAVhaA4hPQAGgIAJAFQAIAFgFAIQhDBdgRBvQgBAHgHAAIgBAAg");
	this.shape_27.setTransform(120.9,95.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#041404").s().p("AD4HdQgJgDADgJQACgKAKADQBmAiBrgLQgigcgTgRQgngjgZghQgggsAYgoQAOgXAlghQAqgmANgPQA0hBAfhSQhbBFhtAmQgHACgDgFQgEgGADgGQA8h9gDiNQhVA/hoApQgFACgEgEQgFgFACgFQA0iVAIigQhTCGiGBVQgFADgFgDQgFgDAAgGIgGhAIhEAuQgFAEgFgEQgFgDAAgFQgGiLAKiLQg6A3g2AuIglAjQgZAVgSACQgTADgOgPQgFgGgOgZIhMiEQhNBxg5B9QgEAIgIgFQgJgFAEgJQA8iCBTh5QAEgFAFAAQAGAAADAFIA3BhIANAZQAIAPAHAJQASAWAMADQAOADAVgRQBPhABXhWQAFgEAGADQAHACAAAGQgLCPAECOIBDgtQADgDAFADQAEAEABAFIAIBAQCJhbBPiRQADgHAIACQAIACAAAIQgCCqg1CiQBfgoBUhBQAEgDAGADQAEADABAGQAICPg5CCQBrgpBbhJQAFgFAHAEQAHADgDAFQgpCDhaBdQgQAQgiAeQgPAPgHATQgGAUAGAUQACAHAKAKIAPAPQAsAwBGA4QAEAEgBAGQgCAGgFABQgoAFgnAAQhTAAhRgag");
	this.shape_28.setTransform(188.8,50.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#041404").s().p("Ak+H6QgHAAgCgHQgCgHAGgFQAmgcAggtQAhgvAMgsQALgngZgiIg1g5IhRhXQgGgGAEgGQAEgGAHABQBWAQBUgbQgegsgWgwQgCgGADgFQAEgFAGABQAuAJAsgOQglg0gQg9QgRhDAIhGQABgGAGgDQAGgDAEAFQBRBRBnAnIAFj4QAAgGAFgDQAEgCAGACICxBbIAPidQAAgHAGgDQAGgDAFAFQBTBeAlB0QADAKgKACQgKADgDgJQgghmhEhSIgOCUQAAAGgFADQgEACgGgCIiwhaIgED2QAAAFgEADQgEAEgFgCQhrglhThOQgIB+BNBmQADAEgDAFQgCAEgEACQguARgxgEQAXAsAcAoQADAEgCAFQgCAEgFACQhPAdhVgJIBtB1QAZAbAFAJQALASgHAZQgQA4gjA0QgaAnggAdQBZgJBBg/IAKgLQAHgHAHAHQAHAHgGAHIgNANIgTARQgdAXghAOQg0AXg7AAIgDAAg");
	this.shape_29.setTransform(99.6,55.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#041404").s().p("AJcAkQgVgCgbgMQhcgmhbAFQgaACiMANQhkAKhCgDQjmgUh0gFQjLgKiMAzQgJADgDgJQgCgKAJgDQCHgxC/AGQBuAEDbAWQBKAFBjgIQA5gEBygMQBZgJA9AQQAaAHAxAUQAsAQAigNQAJgDACAJQADAKgJADQgUAIgVAAIgJAAg");
	this.shape_30.setTransform(153,111.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#041404").s().p("AhcB4QgMhCABgpQAEhEAogRQAbgLB7grQAJgDADAKQADAKgKADIhuAnIgcAIQgUAGgFAGQgJAKgCAcIgCAmQgCAmAJAvQACAKgKACIgEABQgGAAgBgHg");
	this.shape_31.setTransform(96.1,101.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#041404").s().p("AApBuQAAgKAKgBQAMgBgNhlQgEgUgIgLQgJgNgQgKQghgUg1gXQgJgDAFgJQAFgJAJAEIBGAfQArAXAMAdQAPAiADAzQADBBggADIgCAAQgIAAAAgJg");
	this.shape_32.setTransform(213.2,103.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#041404").p("AgJALQAJgLANgI");
	this.shape_33.setTransform(155.6,171.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#041404").p("AgIgGIARAN");
	this.shape_34.setTransform(148.2,170.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#041404").ss(2).p("AA5hdQAFAogKATQgEAGgHAHQgDAFgJAIQgZAYgRAeQgOAWgGAGQgPAPgQgF");
	this.shape_35.setTransform(216.8,143.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#041404").ss(2).p("AArhbQgUASgKAhQgFAUgBAmQAAAOgCAHQgDAGgGAJIglAp");
	this.shape_36.setTransform(213.5,139.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#041404").ss(2).p("AAvi/IAcAhQAFAGABACQACAFAAAIIAGBAQACAdgCALQgEAageAiQgdAngUAWQgbAggFAHQgDADgLASQgIANgGAHQgVAYgXgD");
	this.shape_37.setTransform(216.8,142.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#041404").ss(2).p("Ag4hdQgCAUABAKQAAARAHAMQAEAIASASQAaAYARAeQALAVAIAHQAQAPAQgF");
	this.shape_38.setTransform(90.8,143.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#041404").ss(2).p("AgrhbQAWASAIAhQAGAYAAAiQABAQACAFQADAHAGAIIAlAp");
	this.shape_39.setTransform(94.2,139.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#041404").ss(2).p("Agui/IgcAhQgEAEgCAEQgBAEgBAJIgGBAQgDAaADAOQAEAZAeAjQAeAnAUAWQAZAdAGAKQAEAFAKAQQAJANAGAHQAUAYAXgD");
	this.shape_40.setTransform(90.8,142.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#041404").ss(2).p("AgUASQAWgQAOgX");
	this.shape_41.setTransform(202.2,142.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#041404").ss(2).p("AgRgNQATAOAVAL");
	this.shape_42.setTransform(165.3,149.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#041404").ss(2).p("AgfgWIAyAoIAEADQAEAAABgD");
	this.shape_43.setTransform(104.1,143.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#041404").ss(2).p("AgUANQAUgNARgP");
	this.shape_44.setTransform(137.8,148.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#041404").ss(2).p("ADBhpQiCAKhQA7QgkAbhbBlQgIAKgLADQgLAEgHgHQgGgFATggQAVgmAngfQBxhlC8AAg");
	this.shape_45.setTransform(177.7,120.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#041404").ss(2).p("AjAhpQCCAKBQA7QAkAbBbBlQAIAKALADQALAEAIgHQAFgFgSggQgWgmgngfQhxhli8AAg");
	this.shape_46.setTransform(127.4,120.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#041404").s().p("AgJAOQgEgGAAgIQAAgHAEgGQAFgGAEAAQAGAAAEAGQAEAGAAAHQAAAIgEAGQgEAGgGAAQgEAAgFgGg");
	this.shape_47.setTransform(176.6,142.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#041404").ss(2).p("ACignQgvgeg5gCQg6gCguAbQgbAPgYAYQgoAkgYAx");
	this.shape_48.setTransform(182.8,130.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#041404").ss(2).p("AB6ATQg5APhHgLQhVgMgegq");
	this.shape_49.setTransform(178.9,145.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#041404").s().p("ACCAsQAYggAMgdQiShvh2BNQg/Apg4BRQAPgaAOgUQAZgjAcgaQBRhPBnASQAcAFA5AaQBCAeASAFQg6BLhOA5QAhgmAPgTg");
	this.shape_50.setTransform(187.4,135.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#041404").s().p("AgJAOQgEgGAAgIQAAgHAEgGQAFgGAEAAQAGAAAEAGQAEAGAAAHQAAAIgEAGQgEAGgGAAQgEAAgFgGg");
	this.shape_51.setTransform(119.2,143.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#041404").ss(2).p("AihgnQAugeA7gCQA4gCAvAbQAaAOAZAZQAnAjAZAy");
	this.shape_52.setTransform(121.3,130.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#041404").ss(2).p("Ah5ATQA5APBHgLQBVgMAegq");
	this.shape_53.setTransform(125.2,145.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#041404").s().p("AjZgfQASgFBCgeQA5gaAcgFQBngSBSBPQAbAaAZAjQAOAUAPAaQg3hRhAgpQh2hNiSBvQAMAdAZAgIAvA5QhPg6g5hKg");
	this.shape_54.setTransform(116.7,135.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#041404").ss(2).p("Ag4gXIAyAoQgPgRgJgYQgPgogHgP");
	this.shape_55.setTransform(222.7,121.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#041404").ss(2).p("AhHhlQAEAGAWAYQAVAZAEAFQAaApANAVQAVAlALAgQACAHAEABIAJg6QAEgZABgMQACgZgBgLQgBgRgGgU");
	this.shape_56.setTransform(209.2,121.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#041404").ss(2).p("AgzhsQAHAkAbA1QAXAvAZAhQgNglADgm");
	this.shape_57.setTransform(206.4,121.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#041404").ss(2).p("AhhgfQAIADANALQAOAMAGAEQALAEAUAPQATALAOACQgzACgXgFQgWgGgDAA");
	this.shape_58.setTransform(164.8,114.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#041404").ss(2).p("Ahjg8QAaAaAOALQATANA9AXQA0AVAVAZQgDglgPgfQgHgRgJgLQgJgNgQgLQgQgNgOgE");
	this.shape_59.setTransform(148.5,119.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#041404").ss(2).p("Ah1hDQAhAlAzAgQA2AmArAKQgbgQgUga");
	this.shape_60.setTransform(141.6,117.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#041404").ss(2).p("AgWABQgFAfgOAbQAjghAbgjQAmgxAJgk");
	this.shape_61.setTransform(102.5,118.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#041404").ss(2).p("AgchGIg1CSQAKgKBUhLQA7g1Aags");
	this.shape_62.setTransform(93.5,124.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#041404").ss(2).p("AA/hGIgTA3QgKAcgKAPQgOAYgSAIQAHgBAKgGIA4gc");
	this.shape_63.setTransform(81.6,119.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#041404").ss(2).p("ABmkoQgRBNgmCQIglCJQgQBDgOAhQgQAmgTAiQgaAvgUAQ");
	this.shape_64.setTransform(205,154.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#041404").ss(2).p("AhdkoQARBNAmCQIAlCJQAQBDAOAhQAHASAUA2QAUAwASAP");
	this.shape_65.setTransform(101.4,154.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3652B3").s().p("AKCB8QgLgCgWgHQgzgShfgBQhHAAjvAJQi+AHh1gIQiygThZgFQiagIhrAgQCBhABwgQQAegEAngCIBGgDIHcgLQg6gjhEgTQg/gShCABIDagIQAigBATgFQAcgIAOgSQADgEgBgGIgCgEIANgCQCPgBCOAdQApAJAZAKQAjAPAUAYQAfAlAABMQABAcgMAMQgIAIgPAAIgGAAg");
	this.shape_66.setTransform(152.4,100.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFDD6").s().p("AlzA/QAMg8AlgrQABAiAMAfQAJAXAOgCQAFgBAGgGICQhoQgRAfgGAjQAlg0AygqQAzgqA5gaQADAxAFAbQAHApAQAfQAuhIBMgkQgGBEAZBAQA+hvBmhOIgIAgQgwBBgdBLQgdBKgIBPQgjgmgSgwQgSgxACgxQhhBQgpB6QgIhoAKhlIhGBsQgNg7AHg6QgeAIgiAqQgwBAgeBGQgIgdAAgmQgBgYAEgrQhOAvgiBWIgZhHQgaAVgPAfQgPAeAAAiQgRg4AMg8g");
	this.shape_67.setTransform(129.2,46.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D08C4D").s().p("AhUEWQgbgyghgIQAcA+gDBCQgNgtggglQghglgrgSIgogKIgXgGQgMgFgHgGQgXgUAFglQACgVASglIgMABQAmgsBShIQBVhOAlgoQB5iHAJiEQgCBPgHAvQgMBSgjBGQA1gGAxgdIBghGQALBHgSBGQgMAugpBXQAMAIASgGQAMgEASgMQASgJA/gjQAygbAdgYQABARgNAiQgKAbgMAVQgTAhgjAlQgUAWgsApQgZAYgJAMQgQAXgBAUQAAANAOASIAZAbQAcAoAVAUQAdAbAkANQgkALgngDQgmgDgjgPQgegOg8guQg2gsgjgMQAZBbgeBbQgGhRgmhJg");
	this.shape_68.setTransform(208.1,60.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D08C4D").s().p("AqyCjQASgSAIgMQAMgSACgRQAAgUgQgQQgQgPgSAIIAAgCIhxiaQBoBOBzA3QAIhNAihJQAQBJA0AyIADihQA4BFBCBBQAKg7Abg2QAdg2AqgrQAGA3AZAzQAXAzAmAnQgBgzANgvQBMBFBZA0QAFg1ATgxIBlBXQA9hSBPg/QADAqgBA0IgEBcQBYhEBPhQIgCBnQBCgtBIghIgHBBQgCAZAOADQAFACALgGQA+ggA7gvIgYBDQA3ggA5gpIhxClIAkApQgNgBgIANQgIANAEAOQAGAVAeATIAYAOQAOAIAGAKQhMgDhHgfQgmgSgWgVIgyhBQgegngfgHIALAzQhEgRhBgdIAJAiQgmgWgrgJIAFAfQidgRilgCQgvAAgXAJQghAOgYAmQgQAbgRAxQgGhhAkhZQglgNgnAQQgmASgOAlQgIgOgSgDQgQgEgPAHQgVAIgbAiQgCgHgHgDQgIgDgIACQgIADgQARQgoAqhwAdQhzAfgpAmg");
	this.shape_69.setTransform(149.7,79.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D9A991").s().p("AgxB5QgGgCgDgGQgDgGAAgGQAAgJAHgPQAphaARhhIgEgEIAGgHIgCALQAfAXALARQAWAggKAdQgEALgPARQgSAUgFAJQgGAJgJAVQgEALgQASQgOAPgLAAIgFgBg");
	this.shape_70.setTransform(215.9,139.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D9A991").s().p("AAbBqQgFgEgGgOQgQgjgYgcIgVgYQgLgMgEgNQgFgSAIgWQAFgPAOgZIAdgJQAOgCAOAMQANALAFARQAEANACAUIACAhIAMAwQAIAegDAUQgCAVgOAEIgEAAQgIAAgHgIg");
	this.shape_71.setTransform(90.8,139.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D9A991").s().p("Ag+AvQgRgDAAgKQAAgDADgFQAXglAhghIAYgJQAeAOAjAsQARAWgJANQgFAHgPACQgcAFgcAAQgfAAgggHg");
	this.shape_72.setTransform(151.8,168.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D9A991").s().p("AjLA6IgEgJQA5hHBQgyQBOgyBagTQAjgIAXAEQAiAGANAaQAIARgGAXQgDAQgMAYQgHALgFAEQgHAEgSgDQhtgShUAlQguAVghAmQgjAngKAvQgagqgNgvg");
	this.shape_73.setTransform(182.3,126.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D9A991").s().p("ADMB2QgGgIgOgNQgqgogugjQgbgVgSgFQgagJgkACQhqAGhYA8QgRANgIgJQgCgCgBgEQgMgcAIgPQAEgIAJgEIARgKQBDglAmhCQANgWALgEQANgFAXAMQBJAlAkAVQA9AjArAkQAfAXAfAhIAIAKIgaBSQgCgMgJgNg");
	this.shape_74.setTransform(117.4,124.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C34357").s().p("AiXAgIAJgCQgBgJANgLQA8gsBNgMQBRgMBAAgIgiAWQgXALgNAFIg6AVQgeAKgbAEQgUADgSAAQgtAAgjgSg");
	this.shape_75.setTransform(155.7,200.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D9A991").s().p("AhKDvQglgLglgeQgcgXghgmQiIiZgUiUIABABQAQAFAQANQAKAJAQASIBpB1QASATAKAJQAQAPAQAIQAbAOAoABQBhABBmhFQAzgjA1g3QAigiA7hFIAsgzQgGBDgdBJQgWA5gqBGQghA4gbAlQgkAwgoAeQguAkg1ANQgbAHgYABQgcgBgbgIg");
	this.shape_76.setTransform(157.4,212);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F9F9F9").s().p("AgwAvQgcgCgYgOQgZgOgNgVIADgJQAjAJAsgEQAdgCAxgKQBNgPAogLIgpAjQgYASgVAMQgwAcgrAAIgKAAg");
	this.shape_77.setTransform(154.5,205.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F9F9F9").s().p("AiiArQgJgEgDgJQgEgKAFgHIgJgIIC5glQA0gKAbgCQAsgEAiAJQALACAHAHQAIAHgDAJQgEAKgUABQg6ADhXAQIiNAdIgSABQgLAAgGgDg");
	this.shape_78.setTransform(153.6,182.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F4D865").s().p("AiHBeIAEgRIgDgLQAWgxAsgaQAJgGAQgHIAZgNQAXgMAzgcQAsgWAkAAQg+AFhABGIguA3QgdAhgZASQgSAOgOAAQgHAAgGgEg");
	this.shape_79.setTransform(173.9,120.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F4D865").s().p("AB8BhQgHgCgHgHIg6g7QgjghgZgUQgbgUgmgUQgWgMgvgWQBXAPAyAbQAYAOAcAYQATAPAfAbIAfAdIAHgBQAJAPgCASQgBAHgDADQgDAEgFAAIgGgCg");
	this.shape_80.setTransform(131.2,120.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F9F9F9").s().p("AgMBqQgpgFgZgMQghgQgdgjQgRgVgdgtIAEgJQAXgXANgLQAVgSAUgJQAngQA0AHQBAAKA3ArQA3AqAZA8QADAHgBAEQgBAFgHAGQg2AohTAAQgbAAgbgEg");
	this.shape_81.setTransform(118.1,137);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F9F9F9").s().p("AhWBkQgVgFgfgNQgngOgKgUIgKgDQAbgyAUgZQAegoAkgQQAYgLArgGQA6gHAmAFQA/AJAvAoQAHAFABAFQABAEgEAIQgIAQgQAQIgfAZQgyAogfARQgwAbgqABIgDAAQgXAAgcgIg");
	this.shape_82.setTransform(186.6,137.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E9CAB2").s().p("AAlE+IiTgOQg7gFgggJQgsgNg1glQg+gqgrgzQgpgwgRgvQgPgqAAg1QAAgoAJg8QAGgqAKgZQAOgkAagRIAJgKQAggCAhArQARAXAdAvQAeAxAQAVQA8BSBJAKQAuAHA9gVQBNgfBNhDQA5gzBHhWQAkgsAWgQQAUgOAQADQAKABAKAJIAOARQAZAhANAVQASAeAIAcQAPA1gPBQQgKA8gTArQgcA8g8A6QgmAlhOA6QgsAggaAKQgbAKglABIgFABQgWAAgmgEg");
	this.shape_83.setTransform(158.3,217.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F4D865").s().p("AAAAJQgHAkAHAhQg0hMgThaIAKgLQAjAbAUAJQAgAPAdgHQAIgBACABQABABABAEQAKAigJApQgGAcgTAvQgNgxgegqg");
	this.shape_84.setTransform(208.5,120);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F4D865").s().p("ABKAvQgGgKgqgNIgmgLIAJARQADAPgUgIQgWgJhBg1Ig8g2QAMgEBnAKIBiALIAuAGIBMA/IgpgHQgJAAgIABQgRACADAHQAIAMAJA7QgbgTgMgPg");
	this.shape_85.setTransform(146.6,117.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F4D865").s().p("AhBARQgEAKggAJIgeAHIAigrQAUg9AKgQIADgFIDDglIABAIQAAALgBARQgBAQg0A8QgaAcgaAbIARgjIAFgmIiWCRg");
	this.shape_86.setTransform(94.8,120.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#782B3B").s().p("Ah/CCQgRgCgFgIQgCgEgCgJIgThwIgQAPIgBg6QAAgKADgDIAJgFQCag0CmgQQANgBAFAEQAGAEACAJQArBwguA+QgfAshNAUQg6APg4AAQgkAAgjgFg");
	this.shape_87.setTransform(154.6,190.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F4D865").s().p("AgDgFIAWg/IA0glIAEADQADAEgHANQgGANAJA8QAEAcAGAcIgOAHQgVALgeATQgbATgpAFIgiABQAvgtAhhCg");
	this.shape_88.setTransform(79.8,108);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E9CAB2").s().p("Ag4IsQgmgHhBg6IjpjrIhQh1Ig6iYQgPgHgTgOQgMgIgIgNIgGgLQhKhXgeg2QgTghgDgtIAAgmIAdhMQgFgGAMgoQAJgiALgZQAHgQB4gNQCAgOALgGQAggSEAAnQA6AKBHADQBXADA7gIQA2gICBAAIB3ACICCAoQAhAKABAYQAAANgGAKIAZAGIA2AyIAFAyQAGA4gCAXQgBAYgdAmQgOATgPAPIgdAhIgzA+QgTAYgUAIIgRADIgPA1QgTA/gRAkQgRAjgYAaQgMANgJAGIhTBiIhnBeQhsBigVAQQgdAWglAMQgcAJgaAAQgPAAgPgDg");
	this.shape_89.setTransform(154.5,163.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F4D865").s().p("AnuHSQABhEAMglIhOAVQhPAWgGAHQgJANgyAmQgaAOgfAOQhAAbgagFQAeglAdguQA7hagGgkQgFglhJhJIhIhDIBIgFQBKgJAQgNQAPgMgWgtIgZgqIBegJQgVgtgSg2QgjhsAMguIBNA3QBTA4AfgCIAOj0IDDBdIAIilIA3BLQA4BQADAWICNjpIBvC3IAXgHQAcgLAVgVICHh7IAKEiIA/grIAYBEQAwgoA1gxQBrhhAZgpIgTCEQgUCMgNAlIAOAFQAUABAXgLQAlgTBng/IgNBfQgNBigGARQgIAfgRArQBegpAZgPQAPgKArgbIAngbIg1BnQg6BugiAXQgrAfgOAQQgRAUAJAQQAHALAdAiQAbAfACAHQAGAMBQBLQhagGgqABQgaAAgbgFIgVgFIhlg1IgQBrIhOiOIgEBBIhNhQIgFB5IhqiTImLgHIhqDMQgGgbgGgmQgLhLAIgzIg4CFIgqhzIh0C7QgBgbAAghg");
	this.shape_90.setTransform(154.5,53.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#577FEF").s().p("AJUCSQgbgFgqgSQgggOhJgEQg9gEgwAEIidAMQh/AHgzgHQgogFjQgEQjBgFgQgFQgQgFhJAUQhJAVgLgDQgPgEABgUQAFgZAAgNIAJhgQAEgIAigMIBxgnQBIgaDwgUQDRgSBbADQA7ACCmAiIDEApQAkAGAwAsQAZAUARAUIAIA0QAEA3gSANQgNAIgUAAQgKAAgNgCg");
	this.shape_91.setTransform(153.6,99.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7C91D5").s().p("AgmMdQhfgahihKQg9gthphmQhghdgugzQhLhUgshPIEgCyQA7AkAkAOQA4AVAvgJQA1gKA/g8QA3g1A1hKQApg3A2hVQB8jCCJj/QBRiYCek4IkML/Qh4FVg5CVQgkBegaA0QgnBPgvA1QgYAbgTAGQgHACgHAAQgPAAgUgGgAKJsQQgCgDgDABIgGAGQgCgEAFgCIADAAIAPgQIgJAaQABgFgCgDg");
	this.shape_92.setTransform(160.9,372.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D7964E").s().p("AhiFeQgHgCgKgIIg3grIACgEQAygYAZgPQAogYAZgcQAUgWARggQAMgVASgoQAag3AMggQASgxAEgrQAGgygOguQgPgxgjgfIgVgSQgMgLgFgKQgEgNAEgPQAGgPAOAAQAxAdAYAUQAlAfASAiQAQAhADAuQACAegFA0QgHBUgOAsQgLAlglBIQgoBLggAnQguA5g5APQgIADgGAAIgHgBg");
	this.shape_93.setTransform(196.7,217.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#412E73").s().p("ABPDiQhlimgyjfQgHgyhLBEIhbBVQgHgrgYgjQAbgVARgdQARggADghIATATQCUhxBsiVQgFCAABBAQACBqAPBUQAQBeA3CTQBBC0ARA8QAQA+AHATQALAcAOAVQiOi0g4hbg");
	this.shape_94.setTransform(37.7,349);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F4D865").s().p("AgjGMQiFgHh0gwQh8g0hShcQhXhigEhkQgChHAthjQBFiWAFgPQASAAANAPQANAQgEASIACADQgBAbgRAqQgVAygEASQgIAlAJAuQAGAfASAwQAWA/AYAcQASAVAdASQASALAmATQBOAmAqASQBEAdA6APQCRAmBzgoQBBgXA4gyQA1gtAohAQBIhygFhuQgCg9gcg2Qgdg5gygfQgLgHAAgHQgBgDAFgHIAZgkQCeBfARBwQAFAngMBEQgQBSgVA7QgaBMgoA3QhRBxiRA3QhqAnh+AAIgvgBg");
	this.shape_95.setTransform(157.7,219.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#412E73").s().p("ACrQAQl+gFpuACIDhiOIAUgSQAKgMAEgLQAEgRgJgUQgGgOgPgVQiKi6hfjTQhhjUgwjgQC5D4DMDzQBlB2BEBBQBjBeBjA1QAoAWAagEQAXgEAVgUQAOgOATgcQDyl2DOnOQDGm9CBnBID0FRQA5BhgZC+QgJBDgVBcIghCQQhAEkACEvQADEvBHDdQjRADjWAAQiiAAilgBg");
	this.shape_96.setTransform(175.3,395.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#5663B4").s().p("AxKZWQAigiAwiYQAoh/ARhcQALg7gJhQIgKhEQgthjgOhmQgDgZgHh4QgDgyATgfIATgUIgtjrIgbkrIAAhMQAjh+htjhQg+h0gbg3QgxhggLhFQgCgNgWhZQgPg9ABgvQADiICLjGINDlWQALgFHgAZIHgAZIAiATQAnAVASAGQBDAXClBNQDjBqBZBKQBXBJgGJzQgDE6gVEpIAKDlIgsDYIggChQgTBrgHBbQgHBXAJD9IAKEAQgBAhAoB/g");
	this.shape_97.setTransform(137.6,335.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.3,498);


(lib.s17110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s17111();
	this.instance.setTransform(96.6,42.9,1,1,0,0,0,96.6,37.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#041404").s().p("Aj/DrQgog7gLgxQgMg5AYg8QAWg2AagOQALgGAXABQAPgDAPgKIAZgTIAmggQAXgSASgGQALgDAVgCQAVgCAKgCQASgFATgOIAggbQAugnApAHIBQANQAuAGAiABQAFAAADAEQADAEgBAFQgHAzgwATQgNAFgQABIgdABIgdACQgRACgKAJQgMAKgLAvQgCAJgJgDQgKgCACgKQAQhIAigQQAKgEAQACIAaAFQAjADAXgPQAWgNAHgYQg1gCgtgIQgqgHgLAAQgegBgWAMQgKAFgLALIgUATQgPANgSAIQgNAFgYAEIgYADQgOABgJADQgOAFgKAJIgTASQggAcggASQgJAGgZAEQgXAEgKAJQgVASgPApQgNAoACAfQABAfASAkQAMAYAZAjQAFAIgIAFQgEACgDAAQgEAAgEgFg");
	this.shape.setTransform(31.6,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#041404").ss(2).p("AgGgjQAAAHAGANQAIANgBAFQAAAEgEAEQgBADgCAFQgIAKADAH");
	this.shape_1.setTransform(179.3,39.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#041404").ss(2).p("AAAgaQAGABADAGQADAGgBAGQgCAHgJAMIgLAU");
	this.shape_2.setTransform(178.5,27.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#041404").ss(2).p("AiwhNQAGAeAFARQAJAZAQANQAJAJAVALQAfASASAIQAcAMAZADQAMACAdgBICagH");
	this.shape_3.setTransform(146.5,53.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#041404").ss(2).p("Ai7hQQgRAFgEAkQgEAhAIAMQAKARAuASQAVAIA7ARQA4ARAegDQANgBASgFQALgCAVgGQAegIAngDQAVgCAxgC");
	this.shape_4.setTransform(144.6,42.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#041404").ss(2).p("AAEgfQAEAegNAY");
	this.shape_5.setTransform(133.1,32.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#041404").ss(2).p("AiwgJQAfANBUAEQBGAEAYgEQAVgDArACQAqgBAmgQ");
	this.shape_6.setTransform(147.1,36.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#041404").ss(2).p("AAhgdQgegEgaAAQgRAAgFAbQgEAYAKAEQArAQArgF");
	this.shape_7.setTransform(128.8,31.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#041404").ss(2).p("AjeAwQABguBEgdQA4gaA6gBQApgBA8AQQBAARAfAWQApAcAZAe");
	this.shape_8.setTransform(153.5,11.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#041404").ss(2).p("ADmhsQgMAhgVBEQgVA2ggAPQghARg0APQg7AQgfgCQgrgChNgxQhPgxABgaQAAgaAIgLIAJgF");
	this.shape_9.setTransform(156.7,62.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#041404").ss(2).p("AgRghQADATALAOQAJAQARAK");
	this.shape_10.setTransform(42.3,26);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#041404").ss(2).p("AAbgLQgPABgMAIQgKAHgHAN");
	this.shape_11.setTransform(64.1,37.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#041404").ss(2).p("Ag3gUIBvAp");
	this.shape_12.setTransform(37.8,27.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#041404").ss(2).p("AjMA4QATASAkANQAdAKAQAAQAXABA6gKQA4gJAWAAQAcABAQgDQAYgEAPgMQAGgEAOgQQAMgOAJgFQAPgIAEgDQAJgIgDgGIAAgRQgCgMgLgJQgJgJgNgDQgQgFgiADIirAQQgVACgLgCQgOgDgXgQIg6go");
	this.shape_13.setTransform(48.8,41.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#041404").ss(2).p("AjWA6QAmgIBaAGQAuADArAFQASAAAigMIBjgiQAvgQAFgXQAFgMACgGQAEgLgGgU");
	this.shape_14.setTransform(52.1,52.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#041404").ss(2).p("AjIBVQAYgDBKAAQBDABAWACQAmADAtgUQAegOAwghQAVgPAFgIQAQgSAGgPQANgdgZgV");
	this.shape_15.setTransform(49.2,62.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#041404").ss(2).p("AkLiBQA0BnBNBUQAbAfAYALQAQAIAgAFQA+AJAfACQA2AEAogKQAvgKAfggQAeggAMgt");
	this.shape_16.setTransform(32.8,68.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D9A991").s().p("AgnAVQgKgVgCgNQAAgNAEgQQAJgnAYgbQAXgfAigHQAFgBADACQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBAHIgDgIQgkBBgJBMQgGBMAUBIg");
	this.shape_17.setTransform(7.1,42.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D9A991").s().p("AgwDBQAAgDACgFIASgkQAMgXAEgPQAIgaAAghQAAgVgFglQgHhBgNgkQgUg4gpgZIgCgFQAEgHAMAHQBTAuA0BQQAfAvACAkQACAXgHAcQgFASgMAeQgRAsgTAPQgNAKgUAGQgLAEgXADIgGABQgHAAgCgFg");
	this.shape_18.setTransform(183.5,32.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D9A991").s().p("AA2DrQg3gdg3giQgXgPgJgLQgUgaAHgfQACgOAAgDQgBgDgPgFQgRgGgBgCQgJgNAAgXQABgbgDgLQgaAAgTgWQgTgVADgaQABgGAJgaQAHgTgCgNIgDgRQgBgXAggRQAjgTAugHQAjgGAxAAIBWAAQAxgBAkgKIgCAGQgTAIgLASQgLARABAUQABAUANARQAOARASAFQgMANgFASQgFASADASQADASALAPQAMAOAQAIQgTAUACAgQABAfAVAUQgEAIgLAHIgTANQgUAQgBAbQgBAcATARQgdAcgUAEIgLACQgWAAghgRg");
	this.shape_19.setTransform(144.6,48.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D9A991").s().p("AgaBPQgjgXgfgiIAHAGQAogIAXgfQAMgVAIgJQAMgSAPgBQgEAJACAFQACAFARgdQAPgbAAADQAAAMgSAzQgIAYAUAHQgBgDAbgJIAQgGQgVAHgQALQgQALgMARQgMARAAAPQgBAVAOALQgHADgJAAQgPAAgYgQg");
	this.shape_20.setTransform(39.5,27.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D9A991").s().p("AjEBSIASgHQgOgQgBgZQgBgXAJgUQAIgTALgIQAOgLAigBQBJgBA/AIIAcADQAQABAMgCQARgDAXgMIA1gZQALgFAGAAQAFAAADADQAEADABAEQgEAUgDAJQgFAPgIAKQgIAJgKAIIgzAoQgeAYgSAIQgVAJgoADQgyAEg1AAQgtAAgvgDg");
	this.shape_21.setTransform(49.1,62.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D9A991").s().p("AgQA8IgtgGQgtgEhcAGIAKgCQgUgSADgaQABgMAIgGQAEgDAIgCQAQgDAWAEIAlAGQA0AGAvgSIAegLQAJgCAnABQAdACAOgMIAIgHQAEgEAFgCQAGgCAPAEQAcAEAYgNQAJAKgEAQQgEAOgLAMQgSATggAPQgUAJgoAMQggAKgVADIgTABIgZgBg");
	this.shape_22.setTransform(51.3,52.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D9A991").s().p("AhnA3QgrgHgngTQgHgEgCgDQgFgHADgOQAHgcANgIQALgHAXACQAZACA4AKQA0AIAbACQBjAHA5grIgHABQAMgEAHABQAFABAEADQADAEAAAFQgBAEgEAFIgbAgQgPARgNAGIgTAKQgNAIgGAAQhAAFg0AJQgYAFgYAAQgTAAgUgDg");
	this.shape_23.setTransform(48.9,45.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D9A991").s().p("AA+CeQgrgTgTgXQgMgNgSggQhaibgrhcQBIBoAdAnQA0BFAlAiQA3AwA5ALIgPgWIAaAYIgLgCIAWAhIADAGQAAAIgOABIgKAAQghAAgtgTg");
	this.shape_24.setTransform(18.7,61.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D9A991").s().p("Ah5AtIgCgDQgPgPgDgPQgEgTANgMQALgJAaACQAXACAuAHQAnAGAbgFQAhgGAvgcQAGgEAHgBQAHAAACAFIABAGQgCAVgPAUQgOAQgVAMQgdAQg6AIQgmAGgYABIgDAAQgiAAgagLg");
	this.shape_25.setTransform(44,75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E9CAB2").s().p("Ah8E8QgNgIgZgRIgmgaQgKgGgJgRIgOgdQgJgOACgQQABgSAOgHQgagGgSgXQgRgXAAgaQAAgPgBgDQgDgHgMABQgNABgFgEQgPgKgHggQgGgdAIgSQADgIAPgCQAJgCAHAAQgJgCgKgHQgPgLAAgLQABgJAOgMIAXgRQAigdA+ABQATABAgADIAyAFQBDADBAgYQAUgIAFgKQAFgKgEgSQgKgzgcgGQgFgBgOACQgcAFhoAGQhoAGgdAFQAMgsA8gbQAxgXA6gEQAwgEBEAXQBEAXAuAgQAOgFAQADQAPADAMAJIACgHQAXAZA6AwQAxAuAMAnQAPAxgfBJQggBLgsAaQgHADgKAAQgIgBgFAIIgMAQQgFAIgBAMQgHAxgiAoQghAogwASQgzATgzACIgJAAQg1AAgmgVg");
	this.shape_26.setTransform(158.3,39.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E9CAB2").s().p("AABFeQhcgIg9gnQgqgbgeggQgagdgdgwQgdgugPgeQgVgrgJgnQgKgrAHgqQAHgvAaghQATgWATABQALABAHALQADAHgBAGQARgcAbgTQAfgVAkgGIgagKQAcgQAngMIBIgTQAYgFAGACQgBgFALgWQATgsBUAHQA7AFAjAPQAPAIASgDQAJgBAJAVQgjAjgyAKIhOAHQgOACgDAhQgDAtgEAKIgUAtQgLAeAMAMQAjgBBEgJQA+gFAqAFQAiAEAQANQAUASgJAeQgIAbgaAFQAIAEAMgBIAWgFQANgDANADQAQADABAJQACAHgmAyQgNAWAEAgQADAWgbAQQggAUgmA7QgmA6gbAQQguAdhKAAIgjgCg");
	this.shape_27.setTransform(37.5,45.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#041404").s().p("Ag/CMQgRgfAIgoQAIgmAagbQAHgEAtgfQAggVAJgcQANgrg3AJQg/ATgPADQgJACgDgKQgDgKAKgCQATgDBDgaQA8gOACAxQACAXgMAYQgLAWgSAPQgJAIgYANQgUAJgKAKQgVAWgHAfQgIAiAPAZQAFAIgJAFQgDACgDAAQgEAAgEgFg");
	this.shape_28.setTransform(50.7,14.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#041404").s().p("AijEIQgigygNgnQgQgyAMgxQAOg2AWgbQANgRAKgFQAEgCAZgGQAfgHAxgoQAugnAggFQAqgHAKgEQAWgIATgYIAmgwQAXgeARgRQAGgHAIAHQAHAHgHAHQgSATgZAhIgoA2QgOARgPAHQgOAGgZADQgdADgKACQgRAFgQAOIgeAZIgeAXQgSAPgNAFIgoAKQgUAFgOAWQgjA7AKA+QAIA2AqA9QAGAIgJAFQgDACgDAAQgEAAgEgFg");
	this.shape_29.setTransform(22.5,30.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D9A991").s().p("AhRBOQgDgHAEgMQARgzA9ghIAWgNQAOgIAJgIQANgLARgYIAFgDQAEADABAIQADAhggAeQgJAJgTAKIgbAVQgiAcgDAeQgBAKgEACQgCABgHAAQgYgDgFgMg");
	this.shape_30.setTransform(48.9,13.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#041404").ss(2).p("AgGgjQAAAHAGANQAIAMgBAGQgBAFgGALQgIAJADAI");
	this.shape_31.setTransform(179.3,39.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#041404").ss(2).p("AAAgaQAGAAADAHQADAFgBAHQgBAHgKAMIgLAU");
	this.shape_32.setTransform(178.5,27.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#041404").ss(2).p("AiwhNQAGAgAFAPQAJAZAPAMQALALAUAKQAgASARAIQAcAMAYADQAPACAbgCICZgG");
	this.shape_33.setTransform(146.5,53.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#041404").ss(2).p("Ai7hQQgRAGgEAkQgEAgAIAMQAKARAuASQAQAGA/AUQA3AQAfgDQANgBATgEQAKgDAVgGQAugLBegE");
	this.shape_34.setTransform(144.7,42.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#041404").ss(2).p("AADgfQAEAdgMAZ");
	this.shape_35.setTransform(133.2,32.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#041404").ss(2).p("AiwgJQAfAMBUAFQBFAEAZgEQAMgCAUABQAaAAAGAAQAqgBAmgQ");
	this.shape_36.setTransform(147.1,36.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#041404").ss(2).p("AAlgdQgdgEgbAAQgRAAgEAbQgFAYALADQAoAQAugE");
	this.shape_37.setTransform(128.4,32);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#041404").ss(2).p("AiUBCQABg2AegrQAggwAsgBQAgAAAhApQAxA4AKAHQAoAdAaAf");
	this.shape_38.setTransform(160.9,9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#041404").ss(2).p("ADmhsQgMAhgVBEQgVA2gfAPQgiARg0APQg7AQgfgCQgrgChNgxQhPgxABgZQAAgbAIgKIAJgF");
	this.shape_39.setTransform(156.7,62.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#041404").ss(2).p("AgRgiQADATALAPQAJAQARAK");
	this.shape_40.setTransform(42.3,26.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#041404").ss(2).p("AAbgLQgOABgNAJQgKAGgGAN");
	this.shape_41.setTransform(64.1,38);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#041404").ss(2).p("AjMA4QATASAkANQAdAKAQAAQAXABA6gKQA4gJAXAAQAcAAAPgCQAYgEAQgMQAFgFAOgQQAMgNAJgFQAPgIAEgDQAKgIgEgGIAAgRQgCgMgKgJQgKgJgNgEQgQgEgiADIirAQQgVACgLgCQgNgDgYgQIg6go");
	this.shape_42.setTransform(48.8,41.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#041404").ss(2).p("AjWA6QAmgJBaAGQAuADArAFQATABAhgMIBjgiQAvgQAFgXQAFgMACgGQAEgLgGgU");
	this.shape_43.setTransform(52.1,52.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#041404").ss(2).p("AjIBVQAZgDBJAAQBEABAVACQAmADAugUQAdgOAwghQAUgOAGgJQAQgRAGgQQANgdgZgU");
	this.shape_44.setTransform(49.2,62.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#041404").ss(2).p("AkLiBQA0BnBNBUQAcAfAXALQAPAHAhAFQA8AKAiACQA1ADApgJQAugKAfggQAfggALgt");
	this.shape_45.setTransform(32.8,68.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D9A991").s().p("AgoAUQgKgUgBgNQgBgLAFgTQAKgmAWgcQAYgfAigGQAFgBACABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgCAHIgCgIQglBBgIBMQgGBMAUBHg");
	this.shape_46.setTransform(7.2,42.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D9A991").s().p("AgwDBQAAgDACgFIASglQAMgWAEgPQAIgaAAghQAAgUgFgmQgIhFgMggQgUg5gpgYIgBgFQACgHANAGQBSAuA1BRQAfAuACAlQACAXgHAcQgFARgMAfQgRArgTAQQgNAKgUAGQgJADgZAEIgGABQgHAAgCgFg");
	this.shape_47.setTransform(183.5,32.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D9A991").s().p("ABSA5QgRgFgIgPIgGgQQgDgLgDgGQgGgJgQgEIgbgEQgWgEgfAEQgeAGgKABQgFABgFgDQAAAAgBAAQAAAAAAAAQAAABgBABQAAAAAAABIgDgFQAsgYA0gSQASgHALAAQATAAASANQAQAMALATQAGALAMAYQALAYAHAMQgIAEgIAAQgHAAgIgDg");
	this.shape_48.setTransform(158.3,16.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D9A991").s().p("AA2DrQg2gbg4gkQgWgNgKgNQgKgMgDgPQgEgPAEgPQACgOAAgDQgBgCgPgGQgRgGgBgBQgJgOAAgXQABgbgDgLQgaABgTgWQgTgWADgaQABgGAJgaQAHgTgCgNIgDgRQgBgWAggSQAjgTAugHQAjgFAxAAIBWAAQAxgCAkgKIgCAGQgTAIgLASQgLASABAUQABAUAOAQQANARATAFQgNAOgFASQgFASADARQADASALAPQAMAPAQAIQgSATABAgQACAfAUAUQgEAIgLAHIgTANQgUAQgBAcQgBAcATARQgdAbgUAFIgLABQgWAAghgRg");
	this.shape_49.setTransform(144.6,48.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D9A991").s().p("AgbBPQglgZgcggIAHAGQAogJAXgfQAMgUAIgKQAKgRARgBQgEAJACAFQACAEAQgcQAQgbAAADQAAAMgSAzQgIAYATAHQgBgDAbgJIARgGQgVAIgQAKQgRALgLAQQgMATgBAOQgBAVAPAKQgIAEgIAAQgQAAgYgQg");
	this.shape_50.setTransform(39.5,28.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D9A991").s().p("AjEBSIASgHQgOgQgBgZQgBgXAJgUQAJgTAKgIQAOgLAigBQBEgBBEAIIAcAEQAQABAMgDQAPgDAZgMIA1gZQAMgFAFAAQAEAAAEADQAEADABAEQgEAUgDAJQgFAPgIAKIgSARIgzAoQggAagPAGQgWAJgoADQg1AEg1AAQgtAAgsgDg");
	this.shape_51.setTransform(49.1,62.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D9A991").s().p("AgPA7IgugFQgwgFhYAHIAJgCQgUgSADgbQACgLAHgGQAFgEAHgBQAQgDAWADIAlAHQAzAGAwgSQAWgKAIgBQAIgCAoABQAdABAOgLIAIgHQAFgEAEgCQAFgCAQAEQAcAEAYgNQAIAKgDAQQgEANgKAMQgTATggAPQgVAKgnAMQgmALgPACIgSABIgZgCg");
	this.shape_52.setTransform(51.3,52.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D9A991").s().p("AhmA3QgsgHgngTQgHgEgCgEQgEgGADgPQAGgbANgIQALgHAXACQAZACA4AJQA1AJAaACQBjAHA5gsIgHACQANgFAGACQAFABAEADQADAEAAAFQgBAEgEAFIgbAgQgQASgMAEIgTALQgNAIgGAAQg+AEg2AKQgYAFgYAAQgTAAgTgDg");
	this.shape_53.setTransform(48.9,45.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D9A991").s().p("AA+CeQgqgTgUgXQgLgNgTggQhciggphXQBCBgAjAvQA0BFAlAiQA2AvA6AMIgPgXIAaAZIgLgCIAWAgIADAHQAAAIgOABIgJAAQgjAAgsgTg");
	this.shape_54.setTransform(18.7,61.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D9A991").s().p("Ah5AuIgCgEQgOgPgEgPQgEgSANgMQALgKAaACIBFAJQAnAGAcgFQAigGAtgcQASgKAEAKIABAGQgCAWgPATQgOAQgVAMQgRAKgZAGQgOAEgfAFQgmAGgYAAQgkAAgbgKg");
	this.shape_55.setTransform(44,75.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E9CAB2").s().p("Ah8FVQgNgIgZgRIglgZQgLgGgIgSIgPgdQgJgNACgRQACgSANgGQgagHgSgWQgRgXAAgbQAAgPgBgDQgDgGgMAAQgOABgEgDQgPgLgHggQgGgeAIgRQADgHAPgDQAIgCAHAAQgJgCgJgHQgPgLAAgKQABgKAOgMIAXgRQAjgdA9ABQASABAhADQAjAFAPAAQBFADA+gYQAUgHAFgLQAFgKgEgSQgKg0gcgFQgIgBgLADIh1ATQAUhIANgYQAZgxArgCQAkgDAtAwQBDBIAMAIQAOgFAQADQAPADAMAKIACgIQAXAZA6AxQAxAuAMAnQAPAwgfBJQggBLgsAaQgHAEgKgBQgIgBgFAIIgMARQgFAHgBAMQgHAxgiApQghAngwASQg0ATgxACIgKAAQg1AAgmgVg");
	this.shape_56.setTransform(158.3,37.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E9CAB2").s().p("AgDGJQhYgJg9goQgqgbgeghQgbgdgdgvQgdgvgOgdQgVgsgJgmQgLgtAHgpQAIguAaghQASgXATABQAMABAHAMQAEAHgBAFQAQgbAbgTQAegWAkgFIgZgKQAcgRAngMQAQgFA4gNQAggIAMgQQAFgHAVgqQAWgtA1gWQAtgSATAJQAVAKACAOQADAdAFAKQgYAAgdAmQgeAngWADQgOABgEA8QgEBBgJAHQgRAPgIAZQgKAbAMANQAkgCBEgIQA9gGAqAGQAkAFAOAMQAUASgIAbQgIAegaAFQAIAEAMgBIAWgFQANgDANADQAPACACAKQABAEgNAWIgQAaQgNAXgFAbQgFAWgSAZQgqA6gYAcQgrAxglAWQgrAbhCAAQgUAAgTgCg");
	this.shape_57.setTransform(37.5,41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{y:27.7}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_12,p:{y:27.9}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{y:27.7}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.1,193.2,81.7);


(lib.s1717 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah0TFIhngoQg6gYgkgVQhhg8glhuQgPgvgWhpQgZh8gNgwQg1jKhhgXIgmAPQAfgXAjgvQBGhdAUhzQAJg3ACikQADkaACgpQANm4BSiJQBWiPDMhOQBBgZBFgOQAvgLAOAAICWgGQCUAEAqAuQAQASA0AyQA0A0AiAwQBpCSACC1QABCOAyHhQAmHagxENQgpDggZCWQgJAjgPARQgGAGgqAfQhJA3jwAlQh5AThWAAQhZAAg0gWg");
	this.shape.setTransform(551.3,146.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C6A51").s().p("AosiwIgYgJQGhB9GxghQBfgIBCgPQBXgVA/gnIhKDtQgJAdgMAIQgNAKgfAAQiUABiSAXQgeAFgTAMQgZAPAAAWg");
	this.shape_1.setTransform(151,284);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C6A51").s().p("ACZNMQAaiSAIhbQALiDgPhrQgRh9g3hnQg8hxhcg/QgngbhbgqIiBg7IAOgDQCzgHCnA/QAZAKAOABQAWADAPgLQAOgKAJghQBIkHgikPQgIg8AAgXQgBgvAOghQAYB/AJCBQAEBBASBvQATBxAODOQAQDogGDwQgGD8gcDcg");
	this.shape_2.setTransform(74.2,373);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9C6A51").s().p("Al5OyQgbAAgNgIQgMgIgFgTQgEgNAAgWIgEkOQgBgzADgaQADgqAOgfQAOgjAhgkIA9g+QA/g+BBhVQAtg7BDhkQAlg2AQggQAYgzAHgtQAHg2gUgwQgXgzgtgSQA7ADA1AbQA3AbAoAsQAMANAIgCQAFgBAFgHQBFhTAahuQAZhtgZhpQgYhqhHhWQg9hKhRgrIAbANQB9BCBiBjQBaBaAbBUIAYBJQAKAhADAqQAKCFADA5QAGB2gEBJQgHCGhMCBQguBOh4CgQgyBHhnCwQhlCwgyBHQgJAOgIAEQgHADgQAAg");
	this.shape_3.setTransform(48.1,450.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C1A999").s().p("AoRLeQg8gRhrgwQgkgQgRgKQgbgRgQgUQgYgggHhBQgPhzATiOQAWisBEjLQAqh9BhjwQAPgmAJgRQAPgdARgUQAUgYAagMQAcgOAbADQBOg+BigeQB1gkB2ASQiPA6hlBzQhKBUgLBQQgIAzAQA4QAQAzAhAuQAyBGBuBMQDxCmDUAOQA/ADAlgPQAZgKARgTQASgUAEgYQAAA3AvBAQAbAkA9BFQAiAuAeBDQAHAPAqBqQAOAkAXBLQAYBAAmAdIlagMQjJgHidALQhRAGiiAcQiWAahYAIQgQABgSAAQhBAAhLgWg");
	this.shape_4.setTransform(551.4,410.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C1A999").s().p("AisMCQiPgHhOAJQgdADgpgJQgvgNgXgEQAxhhAciGQARhSASihQAIhIACgnQADg+gHgyQArAxBOAMQBAAJBQgPQB4gYBRgxQBng5BTh1QA1hMARg/QAUhEgMhMQgKhHgkhCQg4hqh0hXQBtASAkAJQBpAbBIAwIATgDQgGAoAMCFQAIBoggA8QgSAfgJBMQgIA7AAA2QABAegEAJIgQAkQgDAIgLAOQgJAKgEAJQgEALAFARIAIAdIAKA9QAGAdAQAdQASAiAPAzQARA7gHAdQgCAMgVAKQgTAIABAOQABAMAKAUQAUAmAzBQQAzBOAUAnQhmAkg0ASQhdAehBAIQggAEg9gFQg/gFgfAEQgjAEg4AAQgyAAhDgDgAA1r5IAFgDQAKgKAFADIAYASIgsgIg");
	this.shape_5.setTransform(145.8,402.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DED5CF").s().p("Al1REQgugFgigQQgSgJgegXQgggYgPgJQgZgOg0gPQg2gQgXgLQhjgyg2iRQgviAgCigQgCiAAaioQApkBBbknQBHjnB3kzQALgcALgFQAJgDAigJQAIANAIgMIAFgHIgKAGQATgUgJAOIACgBIEmEFQAUASAMADQAYAFAegZQAoghAMgEQARgHAfAOQAqAQAKABQArAEAzghQA6gqAdgSQEYisEvhuQgnBigWCGQgLBEgSCsQgvHIhSG3QgMA7ACAhQACA5AlBBIBKBvQA7BYA0CDQAdBNA3CdQm7g+nJA8QgoAGgWAFIg0APQgnALgyAEQggADg7AAIgaAAQgkAAgWgCg");
	this.shape_6.setTransform(542.2,376.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DED5CF").s().p("Am5QoQhAgBgsgNQAIgKAMgbIARgmQAFgLAOgLQANgJADgNQAIgdAFg7QAFg6AIgdQANgxACgvQABgbgEhHQgBgeAPg7QAQg7gCgeIgGhQQgEgwADggQAGhFgDhVQgBg3gHhgQgEhVgGgmQgGgpgThPQgHgfgLhjQgKhqgGgZQgZiBgEhoQgEhwATiFQCAA8CJBSQBXAzCmBtIAUAPQAMAJAIACQAGABAFAFQAFAEAGgDQDBg8EBAgQAAgPAHgJIATAcIgagEIACAOIAKAqIAFAuQADAQgPAaQgTAigCAGQg3CbgDCnQgCB4gBATQgJBNgiAtIgQAUQgIAMgEAKQgIAXAMAwQAOAygGAWQgEANgLARIgTAcQgXApAIA5QAGArAZA6QAdBDAIAgQAPA5gNAsIgLAbQgGAQgDALQgEAYAHAkQAUBbBABEIAUAWQAJAOACANQACARgNAPQgLAOgRAHQgMAEgXgBQgZgBgLACQiHAmjogRQiHgJgsgBQhmgChRAOQgyAJg1AAIgGAAg");
	this.shape_7.setTransform(147.1,372.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9C6A51").s().p("EAmaARLQjDgPjCAbIjkAnQiHAXhegCQg/gBhggNIifgWQhzgMjsABQjpABh2gOQgpgEhwgTQhggPg5gFQhugJiZANQitAThXAHQl5AjllgxQg2gHj1grQi2gfh1gIQh6gKiYAGQhbADi3ANIrTA0QBEiLAYiaIgZgEQCHgeBGgVQBxggBVgoQBMgjB5hMQCNhZA2gcQCphbDZg1QCogpD0gcQCMgQEZgbQD2gcCqgoQG5hmF5kUQF5kVDqmHQAlg+AagcQApgtAvgIQAcgFAjAJQATAFArAQQE5BzFWgZQFWgZElifQijJCAyJhQAxJkD9IhQi6g6jFgQg");
	this.shape_8.setTransform(363.1,384.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3A191").s().p("Eg0kAbhIAA6TQAhgvA5gwQBxhjB5gOIA0gFQgFlZgDlcQgHq5AJgMQAmhCAng1QBNhnA2AAMAirgABMAg+AAKIZiAwIAZANQAaASAGAYQAOgYAUgTQAoglAhAWQAhAWgNZ9QgHM9gNM7IAAB/g");
	this.shape_9.setTransform(339.9,370.7);

	this.instance = new lib.s17_path05();
	this.instance.setTransform(337.1,272.8,1,1,0,0,0,337.1,272.8);
	this.instance.alpha = 0.43;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4F4F4").s().p("Eg0YAqnMAAkhVNMBoNAAAMAAABVNg");
	this.shape_10.setTransform(340.4,268.9,1.003,0.986);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,676.6,546.8);


(lib.s1713 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Path();
	this.instance.setTransform(239.9,86.3,1.012,1.012,0,0,0,236.9,85.2);
	this.instance.alpha = 0.711;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,479.7,172.5);


(lib.s1712 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#041404").ss(2).p("AjXk6QgWBZBFBtQAQAaAtA6QApA0ATAgQANAWAVAtQATAtAMAVQAuBOA7AYQAQAHAcAFQAiAHAKADQglhGg+gx");
	this.shape.setTransform(77.8,112.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#041404").ss(2).p("AnAsdQAzBzBCDKQBNDuAfBRQBrESCrD1QCtD0DgDB");
	this.shape_1.setTransform(154,82.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#041404").ss(2).p("Ai1l4QAnDQBeC+QBcDACMCe");
	this.shape_2.setTransform(90.3,77.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#041404").ss(2).p("AibCQQADgsA2gsQAOgLB+hTQBWg6Acgl");
	this.shape_3.setTransform(71.4,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#041404").ss(2).p("AiUGwQB0iNAyhSQBTiCAZh3QAQhMADh1QAEhrgJhX");
	this.shape_4.setTransform(55,58);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#041404").ss(2).p("Aj3ouQAgA6AlBzQAVBCAsCOQBVEDBjBJQBUA8A5CAQBACNgyBL");
	this.shape_5.setTransform(26.7,83.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#041404").ss(2).p("AlSkUQAJAKAFAFQBRBUB8A7QBkAwCKAkQBMATA2BRQAmA6AjBqQADAJAKANQADAHgCAGQgCAHgGACQgGABgBgIQgBgIAGAB");
	this.shape_6.setTransform(37.4,143.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#041404").ss(2).p("ABcAgIhQgjQgcgOgQgCQgJAAgEgBQgIAAgFgCQgJgEgEgCQgIgDgGAB");
	this.shape_7.setTransform(54.5,161.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#041404").ss(2).p("AhEgKQBFAdBMgN");
	this.shape_8.setTransform(41.5,315.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#041404").ss(2).p("Ak5hXIBYBTQA/A5AqAZQBBAnA5gEQAngDA4gbQClhPAxh7");
	this.shape_9.setTransform(34,319.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#041404").ss(2).p("AFdCEQgig9g7gnQgzgvgsgjQhVhDhNgIQhegIh6AyQhkAqgfAi");
	this.shape_10.setTransform(36.5,160.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#041404").ss(2).p("ABWCTQgdg3gQgaQgbgsgbgaQgUgSgKgKQgSgQgJgOQgMgSgCgUQgCgWAMgQQA9AqAvA3");
	this.shape_11.setTransform(661.4,136);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#041404").ss(2).p("AlyAQQgNgQAAgTQC/g6DLAWQDMAWCvBh");
	this.shape_12.setTransform(626.2,102.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#041404").ss(2).p("ABcHZIhhiJQAmgSAPgzQANgugOgxQgHgcgbg7QgXg4gHgeQgHgeAAgqQAAgwAAgYQAAirhCie");
	this.shape_13.setTransform(549.5,63.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#041404").ss(2).p("Am6BZQAFgoAagiQAZggAmgOQASgHAZgEQALgCAggDIFzgdQA7gFAhACQAyAEAkATQAeAQAwAxQAgAiAYATQAMAJAKAG");
	this.shape_14.setTransform(590.7,115.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#041404").ss(2).p("AuPKeQBAAeByBnQBtBiBHAcQCKA2DUhIQAkgMBfglQB+gzA9ggQCuhaCBiUQBIhZAkgsQBAhNA5goQA2giAZgVQA+g0Aig1QAshDgIg9QAYjWARjaQAhmygyhY");
	this.shape_15.setTransform(580.5,245.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#041404").ss(2).p("AhJBDQBJgRAmgnQAngmgQgu");
	this.shape_16.setTransform(556.1,293.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#041404").ss(2).p("Ai1gKIgCApIFsgUIADgpg");
	this.shape_17.setTransform(432,179.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#041404").ss(2).p("AghhvIA5BoQAGAJACAHQAEAQgRAiQgPAfAHAR");
	this.shape_18.setTransform(507.6,206.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#041404").ss(2).p("AANhAQgeBBAIBJ");
	this.shape_19.setTransform(392.1,216.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#041404").ss(2).p("AgYhYQgJAbgCAQQgEAYAHATQAGANAVAWIAuA1");
	this.shape_20.setTransform(74.1,293.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#041404").ss(2).p("AgahnQgKAagCAPQgEAYAHARQAFANAMALQAHAIANAPQAkAoACAp");
	this.shape_21.setTransform(74,260.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#041404").ss(2).p("AAEiDQgTAVgIAfQgIAfAIAdQADANAIAQQAFAJAIAUQAXAyAEA1");
	this.shape_22.setTransform(69.3,205.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#041404").ss(2).p("AgIgSQAGASAPAL");
	this.shape_23.setTransform(197.1,239);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#041404").ss(2).p("AFSgBQlNg4lOA5QAAAMAIAKQAJAKALgC");
	this.shape_24.setTransform(340.3,291.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#041404").ss(2).p("AwKhuQEaBTDmAxQEUA9D0AaQAXADAMgBQAVAAAQgIQAQgHAXgWQAcgcAKgHQASgMAagIQAQgFAegFQBVgNE3gIQE2gIBVgO");
	this.shape_25.setTransform(296.2,303.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#041404").ss(2).p("AotDFQAHhNALgqQAQhAAjgmQAlgpBAgZQArgRBOgQIDSgsQBTgSAxgCQAugCA+AKQAjAFBIANQCJAXCMgC");
	this.shape_26.setTransform(545.9,140.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#041404").ss(2).p("AoIqZIDthwQAigQARgGQAdgKAYgDQApgDAwARQAfALA1AcQCLBKBFAwQBvBMA/BXQA0BJAhBlQAaBQASBuQATB2gPBgQAAAGgQBXQgMBBgGA6QhRCjhHBjQhfCDhiAyQhHAkgxAJQgXAFgwgEQgygDgWADQigAVhThPQgagZgQggIgKgb");
	this.shape_27.setTransform(543.2,230);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#041404").s().p("Ai7KTQgsgwAKhJQADgWAIgXIAHgSIBXgVQBdgZAagUQAUgNAEgEQAEgEANgVQBFhyA4hvQAYgxAIgbQAKggABgvQAChKgZhUQgahVgrg6QheiAhphuQglgmgcgTQgogbgmAAQgtADgWAAQgmAAgPgVQBCgbBNAUQBIATA5A1QBKBGAoArQBCBHAfA5QCcEcAiC8QAjDChDDhQgDAKg7AaQg+AbhLAXQiEAqhTAAQgrAAgdgMg");
	this.shape_28.setTransform(534.2,234.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#041404").ss(2).p("AgJhkQgEAUAUAlQAUAlgEASQgCALgKAMQgFAGgKANQgXAaAGAV");
	this.shape_29.setTransform(511.5,247.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#041404").ss(2).p("Aj9ojQAfgVAsAAQApAAAmASQA5AaA0BKQCgDeAuB3QBCCrgxC/QgGAXhTBgQhPBagbAUQgWASg1ANQgYAHgyAVQgxAVgYAG");
	this.shape_30.setTransform(530.7,227);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#041404").ss(2).p("AHvDtImsgIQgpgBgUgBQgggDgagEQhDgMhMgoQgugYhWg4QgfgVgLgIQgXgRgPgQQgxgzgRguQgTg2APg9QAGgYARgQIAPgM");
	this.shape_31.setTransform(425.3,275.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#041404").ss(2).p("AoKjyQgyAMgEBOQgEBHAcAhQAxA4BJApQCkBeAXAOQA4AkBHAYQBOAbA6gCQAlAAA0gKQAegGA7gMQBVgQBtgDQBBgCCCAD");
	this.shape_32.setTransform(422.4,245.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#041404").ss(2).p("Anog4QAiAMBaAFQBmAFAtAKQBIAPB0AkQBbAfAQgBQAegDBCgIQA7gHAlABQB1AEBsgq");
	this.shape_33.setTransform(428.5,230.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#041404").ss(2).p("AovA7QAlghBagMQAfgEBugEQAhgBDMAcQBkAOBfAPICqg8QA5gRBQgQQBHgOApgR");
	this.shape_34.setTransform(427.4,198.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#041404").ss(2).p("ABphNQgRgChAgMQgfgGgwgDQgugDgRBKQgHAcADAXQADAaALAFQBzA0B/gE");
	this.shape_35.setTransform(378.1,214.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#041404").ss(2).p("AoBBjQAsgaAfgwQAeg1ASgZQAwhFBjghQBTgbBfAEQBnAFBuA3QBaAtBjBPQBpBWBDBc");
	this.shape_36.setTransform(460.9,164);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#041404").ss(2).p("ApfhWIgFANQgEASALAcQAkBVCoCNQBLA/EgAEQBpABBigHQBdgHAXgKQA4gYAlgmQAigiAcg6QAOgcBEhAQBChCAUgqQAUgrgTgsQgagtgGgW");
	this.shape_37.setTransform(453.3,293.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#041404").ss(2).p("AglhTQAFA5AQAgQARAoAqAd");
	this.shape_38.setTransform(138.9,181.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#041404").ss(2).p("ABGgiQgogBgiAVQgkAUgTAj");
	this.shape_39.setTransform(198.7,220.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#041404").ss(2).p("As+AqQAHgGM/gmQGhgUGggT");
	this.shape_40.setTransform(278.8,239.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#041404").ss(2).p("AiKhCQAzAWBXAsQBYAtAzAW");
	this.shape_41.setTransform(125.3,187);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#041404").ss(2).p("A57CIQgGgVANgfQANgfAUgNQAcgRA8gHQBFgITag6QUAg9JkgY");
	this.shape_42.setTransform(310.4,201.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#041404").ss(2).p("Ao/CTQAxA0BhAqQBPAiAuADQA/AFCigQQChgPA/AEQBPAGArgEQBDgGAsgfQAQgMAqgqQAjgkAbgMQAigQAVgZQAcgigHgqQgFgfgagbQgYgZgjgOQhEgehcAiQgcAKgcAQQgOAIgIAFQhCgLhRgLQiggWhLACQgTAAglgDIghgDQhFgjgfgZIiah4");
	this.shape_43.setTransform(154.6,224.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#041404").ss(2).p("A6mDfQgfieBXhXQA+g/BKgFQHSgbQ8ghQQoghH6gfIARARQAVAWAQAZQA1BPgGBR");
	this.shape_44.setTransform(306.9,192.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#041404").ss(2).p("ApiBvQBqgRD5AgQB+ARB9AWQAfADApgIQAXgEAxgNIEbhPQA7gQAhgTQAvgcANgnQAQggAGgRQALgdgLg4");
	this.shape_45.setTransform(162.5,258.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#041404").ss(2).p("Ao2C5QBDgEDMANQC9ANA7AKQB9ATBMgnQAogUBVg1QBfg8AkgUQBKgqApguQBQhchIhW");
	this.shape_46.setTransform(151.6,287.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#041404").ss(2).p("ArolyQAwByBqClQCODZAdA0QAWAoAIANQAYAjAcASQAsAcA+ASQA1AQAZgBQB8gCDGASQCGAMBfgWQAigIAjgVQAtgbA8g4QBNhHAdgeQBBhFACgd");
	this.shape_47.setTransform(110.8,292.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#041404").ss(2).p("An4JrQAEAGgcAlQgeAogmAkQhrBlgzgnQhAgzg8isQg0iZgGhpQgOjhA9jbQA9jdCAi5QA5gHAkgKQATgFASgGQAQgDBcAYQAUgQAlgXQBJgwBSgoQEEiCD+gOQBBgDAyARQAiAMA0AhQA/AnAiARQBDAfBTARQBgATBLA2QAmAbATAX");
	this.shape_48.setTransform(108.1,233.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#041404").ss(3).p("EA0bAc9Mho1AAAMAAAg56MBo1AAAg");
	this.shape_49.setTransform(338,186.9);

	this.instance = new lib.s17_path01();
	this.instance.setTransform(500.6,203.8,1,1,0,0,0,3.1,6);
	this.instance.alpha = 0.711;

	this.instance_1 = new lib.s17_path02();
	this.instance_1.setTransform(77.6,199.6,1,1,0,0,0,5.5,6.4);
	this.instance_1.alpha = 0.711;

	this.instance_2 = new lib.s17_path03();
	this.instance_2.setTransform(440.7,202.7,1,1,0,0,0,49.2,10.6);
	this.instance_2.alpha = 0.711;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EBFEFD").s().p("AjqBSQARgiAggaQAwgiBggXQAXgFAKgEQAPgHAKgMQgzgbg8gFQg9gFg5ARQBEgpBKgWQBJgVArAVQgdALgQAYQA1AVAxAeQgRAQgGAXQBaALBMAnIADAWQgmgZg5gDQglgBhCAJQg2AIgbAGQgtAIgkAMQhaAgguA8QgGglATgmg");
	this.shape_50.setTransform(38.5,169.5);

	this.instance_3 = new lib.s17_path04();
	this.instance_3.setTransform(151.6,211.2,1,1,0,0,0,45.9,12.9);
	this.instance_3.alpha = 0.711;

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#869EDB").s().p("ABpLlQh3hwgigTQgvgbhqhUIhghOIAkAKQAyAMBDAEQBFAEgth0QgOgmgghAQgnhPgGgOQgehAgHhvIgChjIAlAuQAtAuAnAEQAlAEAglMQASi8AMjwIABgXIFHANIgtAtQg3A3gLARQghA6gRCCQgQB9BAhGQAUgWAagnIAWgiQAJFeiTCzQgsA1hDAuQg/AtgGAGQgaAiBBByIAvBSQAYApABAMQABAJgHAcQgIAfAAATQgBBCBHArQBMAtAYBDQARAvgJAlQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgRAAhUhNg");
	this.shape_51.setTransform(41.2,82);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#869EDB").s().p("AglIWIgrgfQghgYgFgeQgEgXAhgeQAigggCgsQgBgYgkhmQgghfADhhQAEhmgPhKIgPg1QiOkRDHgiQA8gKBiAMQBdALAFgCQATgHAGB0QADBIgCCYQAABHAECQQAAB6gZA9QgUAwg5A1Qg5A0gUAxQgWA8BpAgQA1ARA6AEIiGAMQgwAFgbAAQggAAgFgGg");
	this.shape_52.setTransform(566.4,54.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8FC5FA").s().p("AkCBTQAmgyAOgHQgKgCgUAGQgoAMg1ArQAPgwArgwQBVhjCJgIQCIgICHAMQBDAGAoAHQhsgChwAMQjhAXgZBCIBdgMQBngHAxAaQhQAChZAQQipAfg1BEIAdgng");
	this.shape_53.setTransform(528.3,143.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EBFEFD").s().p("Ah5BIIgoghIEniAQASgNAKAAIgcANQggAXg5BCQgrAygkA0IgFABQgmAAgsgfg");
	this.shape_54.setTransform(508.8,159);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#57499F").s().p("Aq/JlQgjgPgbgUQgYgRAHACQAjAXBbAAQCHABAqAGQBYAMEJh1QD7hwAkgzQA/hYBDhRQBuiGBLg3QBhhIAyg7QA8hGARhMQAQhDAjiPIAhiBIgHA9QgIBKgDBBIgGCSQgJBRgoBNQglBIhRA1IhAAkQglAWgUARQgeAahdBtQhpB6hKBIQhiBfjDBMQiuBDinAXQgiAFggAAQhbAAhSglg");
	this.shape_55.setTransform(591.3,275.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D9A991").s().p("AAiKqQgxgFgshNQhHh6ghiSQggiLAEiVQAEh9AziWQAZhLBSjAIAUgyQALgfAOgOQAHgIALgUQAIgQANgIQALgHAVAEQAbAFAHAAQAGgBASgLQALgHAIACIAWgVIgTAXIgDgCQg+A+gvBKQg3BYgcBiQgsCOAGC1QAFCDAkDDQAPBWAPAxQAYBJAoAvQAzA7BIAXQgcgIgyAVQgyAVgZAAIgFAAg");
	this.shape_56.setTransform(32.3,244.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D9A991").s().p("AiVDCQgVgJgggSQghgSg8gvQhHg5gTgNQApguALgTQAUglgGgqIgJgpQA6AMA8gPQA7gOAugmQgEAGABAJQABAIAGAFQAJAIATAEQApAIA7gFIBngIQA6gCBHANQAsAJBTAVQhmgHhPAHQhiAJhOAdQglAOgcAUQgcAUgQAkQgLAXgKAvQgKAvAAAbQAAAnASAeQgagDgegMg");
	this.shape_57.setTransform(145.9,194.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D9A991").s().p("AjCJrIgbgFQiXgiiZAgIBZg5QAngZAUgWQAcgfgCghQgCgjgigXQgcgTgfABQBLgFBHgVQA0gPAZgZQAggggDg2QgDgxgdgrQgTgcgbgQQgRgKgQgCIALgDQADgqgagnQgWglgogdQgYgSg8gWQg+gWgYgQQBHgKA2hHQA1hGgEhJQgEhFgrhBQgng7g/gqIA8ASQAdAMA1AqQAyAoAgAMQANAFAfgFQAkgFAKABQArAGBTAIIB7ANQAHABAMANQAKAMAIgBQAOgCAegOQBSgmA0gGQBRgJA2AoQAdAWANAiQANAkgKAhQgHAYgbAUQgQAMgiAWQgNAKgVAZQgXAZgMAKQAlABBPgGQBOgGAmABQAPAAALADQAUAEgQAMQgEACAIAaQADATgMAbQgHAQgRAaQgJAOgOAMIgbAWQgRAOgZAJQgaAHgQAOQAbAkgJA2QgIA4grAnQgVAThKArQg+AjgZAiQgGAIgIAQIgPAYQgPAXgiAgQhhBfh0BIQgYAQgQADIgNABIgPgBg");
	this.shape_58.setTransform(167.7,264.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D9A991").s().p("ADnAvQgYg2glgeQgIgHgMgBQgTgBgFgCQglgKg8AGQhPAKhPABQhfACAZgSQgmANgZABIBAgPIgBABQAtgPBAgfQBqg0BBAGQAqAFAkAXQAlAYAUAkQAWAjAMBFQAJA3AEA0QgRhEgPgjg");
	this.shape_59.setTransform(453.1,176.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D9A991").s().p("ADLJrQgsgKghABQgxACgcgCQgbgDg8gcQg4gagcgTIgggVQgVgNgHgLIhZiCQgZgmgHgVQgBgEAAgfQgBgWgMgDQgkgLgVgSQgOgNgagkQgagkgBhDQgBhAAYglQgrgdgUgQQgigbgTgcQgfgrgLgbQgRgqAPgeQAHgNAEgeQABgFARgOQAPgMgEgFQgYgaAEgpQACgaAQgwQACgGATgOIAXgSQAKgIATgDQCEgbCTAFQCJAGCLAgIAwALQAaAFAWgEQA0gHAdgIQAjgLAogWQAzgcBBgSQBIgTAyAGIAIAAQhGApg2AtQhNBBgMAwQgNA2AvA7QAvA5A5AHQguAggbAuQgfA2AQArQASA0AmAsQArAzAtAOQg6AggaAbQgiAkgJA0QgIAzAaA1QAUAnAtAzQgagFgiAcQgiAbgHAcQgKAnAUBEQgyAchFAAQgyAAg8gPg");
	this.shape_60.setTransform(422.5,257);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D7964E").s().p("ABcFuQgsgBgrgTQgjgQgngdQgcgVgpglQgigfgSgUQgagfgMgeQgMgigCg8QgIi3Ahi1QAXARANAHQAVAKASgBQAWgBAOgSQAPgUgKgRIALgQQgOBfAMBiQALBgAlBYQAlBdA1AtQAhAcApAKQArALAngMQATgGAGAEQAFADAEAIQASAogTAuQgSArgoAXQgkAUgtAAIgEgBg");
	this.shape_61.setTransform(24.5,293.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D7964E").s().p("Ai1JiQgxgDgegFQgrgIghgPQg0gXgagSQgqgegHgjQgIgkAtgxQArguAqgMQgBAfgFBDQACA3AhAVQAeATAsgEQAegDAwgQIDjhKQAsgOASgPQAbgXAQg4QAoh/gGiJQgGiFgxh9QBlhEA+htQA+huAGh5IAVBMQArBQALBXQAFAnADCLQACBogPBaQgSBrgmBQQhQCkhSBeQhuB+iCAdQgrAKg+AAQghAAglgDg");
	this.shape_62.setTransform(547.4,250.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#412E73").s().p("Ag9gmQgMAIgFAPIgBADIgFjYQgBgUAHgKQAHgKAYgFQBAgOBEgBIgRABQgkAtgQBEQgMA1gCBKQgCCqAoCmg");
	this.shape_63.setTransform(11.3,29);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#412E73").s().p("ABSGpIALi+QALi4gIhgQgOibg9htQgagygvg2Qgcghg9g+QCGgQCCACQApIKguILg");
	this.shape_64.setTransform(660.3,54.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#332562").s().p("AngTaQhZgIg9gkQghgThVhRQhGhCg4gQQgxgOACgYQABgKAOgPIBXhZQAPgQALgCQAOgCAPAMQAHAHAQAUQAsA1BWAQQA7ALBjgGQA/gEAhgEQA1gHAogOQAhgLAvgiIBKg4QAjgZAkg6QAmhEARgdQA5hVAdhWQAdhYAEhlIAGiUQAAhKgOhHQgUhqgmhhQgxh9g5gyQBFAtBRB/QBvCvATAXQAfAjAYAUQAgAcAiALQBLAaBSgyQBGgqA1hOQAng8AjhPQAZg4AhhaQAth6AIhTQANh0gzhPQgegvhMg5QiChhiOhHIEhBtQAhANAVAEQAfAGAXgJQAugQAIg5QAHg3ghgoQgcgjg0gVQgkgPg9gLQkng6kAAbIgKgCQDkhMDxAQQDRAPBuBfQAcAZAFAWQADANgFAgQgIAwgBA+QAAAmADBKQAEBigKC/QgJC/ADBjQACAgAFA/QADA3gKAnQgKAogEBEQgEBSgFAdQgHArgJBaQgKBRgSAxQgWA6hFA3QgnAfhTA7QgkAdgrAvIhKBSQitDAjZCIQhmBAhNAYQgvAOg9AHQglAFhKAEQg8AFgtAAQgfAAgYgDg");
	this.shape_65.setTransform(579.8,215.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#332562").s().p("AmoKcQBGiLAqhqQA1iJAWh5QAbiMgLh/QgMiOg4h1QBVB8AtCTQAtCQgCCYQBiiaArhOQBMiEAshxQB0kggtj4QAwB/AVBLQAfByAABeIAFBtQACBfgCAQIAXBIQAbBXAFAuQACAlgKARIgKANQgHAHgBAHQgBADgNAUQgMATABAFQAJAZAlAnQAsAtAKAQQg8AFgLAdQgDAHgUAfQgSAZABAPQg4gFg/AcQhOAhgqAFIhSgBQgrABgcAbQgJAKg0AbQgtAXgIATQgiBLgMAvQgRBGAMA4QhGhghvgsg");
	this.shape_66.setTransform(516.2,83.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#332562").s().p("AneMEQgeg0gQgiIgZgyQgOgZgTgTQgngogHgEQgdgXgZAFQAehigchyQgbhzhIhJQBXhDA/hiQA8hdAjhwQA6i5gFkGQABgWAEgJQAEgIAJgJQBjhhBEgPQBFgPA7ABQArABAnAEIAkCAQAjB9AvB/QAZBFBJCxQBtEHCtD/QCtD/DDC3Qg1gvhghQQhyhfg0gvQi/ithSibQhQiZhRhrQhjiFh1hQQgegVgVgBQgkgDgbAiQgYAegHAqQgPBeAjBtQAZBHA1BZIh1i6QgVgkgXgEQgTgDgcAVQhJA5gdBWQgXBDAdA6QARAjA1BQQgNgPgkAGQgxAHgQgMQgYBDgGAoQgKA9AWArQASAmA2ApQBSA/BGAUQA9ARBTgFICRgQQBUgKCEARQCAAQA7AeQgogShWgEQhlgFgyAQIhkAaQhCAQgjAOIilA0QhhAhgyAxQANgtgTgtg");
	this.shape_67.setTransform(117.6,86.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9898A4").s().p("AioAcQgPgEgDgMQgBgHADgFQAEgFAGgEQAKgFANADQAMgDAWgDQCPgLCQABQAJAAAEADQAHAFgDAOQgEAOADAGQimgMijAYQgJABgHAAIgJAAg");
	this.shape_68.setTransform(432.7,179.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#9898A4").s().p("AwmDcQA4gmAMgqQANgtgdgsQgcgrgwgNQhPgZhqAxIggAPQgSAJgPACQgRACgWgDQgNgCgZgHQgvgMhQgKQhQgJgugLQAJg3A1glQAxgjA/gFQCXgMBfAJQBeAJCcgKQCzgLBIACQAqACBogRQBkgPAuADQBXAHCdgRQDOgVAkgCIMyggQHRgSFWgTQAPgDgIAkQgIAjgNALQgKAIgRADIggADQhBAJhBAZQifBAjiguQhOgPg8gGQhIgHhDAEQhhAFgaAFQhGANgfAoQgVAcAFAvQAIBHgBAKQgBAWgGAsIgHBCQkWANo8AhQo+AgkXAOIBfg/g");
	this.shape_69.setTransform(310.9,215.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E7E7F1").s().p("A6kCTQgFgtAHgkQAIgtAZgmQAbgsAlgTQAVgMAfgFQARgEAlgDQBhgKA0gBQBSgDBCAJQAiAFAegBQAZgBAngFQANgCArgCQAmgDASgDQA/gNBVAAICWAAQC2gEBqgOQCFgSCGAMQBPAHCBgJIDUgOIISgQQEhgKDwgVQCvgPA7ASQAnAMAbAwQAZArAEAwQjPAhk2AHQlZAEivAIIoeAeQlCASjbAFQhfACjlAIQjSAHhxACQiNAChXAGQh+AKhjAVQgcAGgZARQgZARgPAXQgUAfgKAJQgTASgNgNIgRAYQgJg3gCgag");
	this.shape_70.setTransform(306.5,193.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F4D865").s().p("AguOQIgcgOQhSgogogbQhAgsgfg1QglhAgChkIAJiwQAEhVgJiBIgRjUQgDhQACiiIAHnWQAAghAJgOQAHgLASgMQBCguAmgTQA9gfA2gDQBhgGB6BWQAhAXBAAxQA5AqAsAVIAGAbQAQAHgUAPIgnAbQgOANgYAFQgOADgcABIiGAFQgyACgYALQgLAGgHAVQgIAbgGAHQgyA+giBSQgcBBgYBgQg8DvAADDQABDsBYC4QA6B5BPAOQAdAFA5gLQA5gMAcAEQgZBLgeAkQgSAWguAMQgmAKgkAAQgWAAgIgCg");
	this.shape_71.setTransform(36.3,238.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F4D865").s().p("AkSMoQhggagzhAQgKgNgBgJQgCgKAMgUQAdguATgXQAegjAhgRQAHBBAeA5QANAbASAJQAMAFAQgCQALgBASgFIEwhaIAdgJQAPgHAKgIQATgPAOghQA2h4gOieQgGhBgRhLQgNg4gZhQQgkhygehBQgVgtg3g6QhBhIgSgaIgkg3QgVgfgVgSQhwhhivgaQghgEgTgJQgcgLgKgWIgJAGQBjhQB0gxQBKggAxADQAlACA1AVQDYBTCtCeQBdBWAlBOQAWAuANBAQAHAnAJBNQALBnACA4QADBWgLBGQgPBkgzBxQgkBQhHB3QgcAwgTAaQgcAogcAbQhtBojPAQQgbACgaAAQhFAAg6gPg");
	this.shape_72.setTransform(543.2,231.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E9CAB2").s().p("AkYNgQg2gHgagFQgsgJghgPQgqgUgrgoQgYgXgvg2QgngpgSgWQgfgogCgiQAAgGAIgPQAIgNgCgHQgDgGgGgFQgMgKgNAFQgbAJgthAQghgvgXg2QgOgiALgrQAKgmAagjQhTgagqhXQgqhVAghRQgngmAOg9QAOg7AwggQApgcA9gJQAogGBIABICVABQA6AAAgACQAyACAnAIIBJASQAqAJAfgDIBGgHQApgGAagLQAegNA3gcQAygVApgCIAkgBQAYgBAFgKQACgFAAgZQAAgUgCgKQgMhuhbgyQgagNglgCQgVgCgrAEImzAqQAXgcA0hOQAuhFAhgiQApgsBEgSQA1gNA+ACIgYgBQA6gRBCAIQA7AIA7AbQBkAuBkBnQAcAbAKAJQAXATAWAHQAOAFAwgIQA0gJALABQAqAEAoAcQAYARAwApQAuAiAtA8QAaAjAyBJQA2BNAYAvQAoBLACA9QACAfAJBKQAGBEgLAlQgiBwhQBbQhRBehpAsQgMAFgnAEQgkADgNAIQgiASggAkQgTAWghAwQgMASgZAVQgaAVgMASQgsBCgPASQglAtgnATQgdAOgsADIhNAAQgSAAigAIQgpACgjAAQg7AAgtgFg");
	this.shape_73.setTransform(460.6,232.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E9CAB2").s().p("ACcNxQiagNhLgEIimgIQhOgDgtgNQhBgSgggsIgrhRQgZgugjgHQgOgDgSADQgKACgWAHIiZAyQgeAKgTACQgcAEgTgLQgPgIgMgSQgIgLgKgWQiGkoAdlRQAclOC0kOQAXghAUgDQALgBAYAGQAWAHALgEQAGgCAOgJQAMgIAJgBQAKgBAMAIIAUANQA+AlBghdIgYAGQDMheDQhGQBjgiA+gLQBfgQBCAZQAjANAyAeQA4AhAcANQB0AyBYATQA7ANAqAYQAyAdAWArIkyAPQg/ADghAEQg1AGgpAPQgwARgjAfQgnAigOAsQgJAagBAjQgBAWACAoQACAdAJALQAMAPAkADIFKAkQAdADAPAAQAZAAASgHQAPgFAUgNIAigWQA8giA/AeQA6AbAjBEQAPAdgKAZQgDAGAJACQAIABgFAEIioCOICKgBQBNgBA7gMQAABVgyA4QgoArhXApQABAUAWA0QAOAigUAfQgTAchDAzIhgBIQgMALgTAbQgTAagNALQgMAKhqByQhNBRg1AYQhRAkh1AAIgYgBg");
	this.shape_74.setTransform(119.7,240.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#332562").s().p("AAMGUQhvgliegfIkTgyQlWg/i7hgQDDjKB3j/QAggIAfABQJuhmJyArQBuAIBCAIQARADAHACQAOAEAJAIQALALAIAdQAHAgAIALQAFAHAPANQANALAGAIQAGANABAYQAAAZgIArQgIAwgBAUQgCAmAMAeQAMAjAcAQQAJAFASAIQAQAHAGAKQAFAHADALIADAUQAFAVAmAkQAhAeAaAOQg7AahrALIirANQhJAGiIgFQiQgGhAAEQhOAFg3AWQhGAcgcA3IgIAOQgFAIgGAEQgHAFgKAAQgMAAgRgGg");
	this.shape_75.setTransform(297,275.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#48569E").s().p("Eg0aAc3MAAAg56MBo1AAAMgASA6Hg");
	this.shape_76.setTransform(338,187.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.instance_3},{t:this.shape_50},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,675,373.8);


(lib.s1711 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s17219();
	this.instance.setTransform(606,390.6,1,1,0,0,0,606,390.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:390.5,scaleX:1.25,scaleY:1.25,x:606.1,y:390.5},3).to({regY:390.6,scaleX:1,scaleY:1,x:606,y:390.6},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1212.1,781.2);


(lib.s17310 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s1736();
	this.instance.setTransform(339.9,270.4,1,1,0,0,0,339.9,270.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:354.3,x:354.3,y:269.1},0).wait(1).to({y:268.2},0).wait(1).to({y:267.5},0).wait(1).to({y:267},0).wait(1).to({y:266.6},0).wait(1).to({regX:339.9,x:339.9,y:266.4},0).wait(1).to({regX:354.3,x:354.3,y:267.7},0).wait(1).to({y:268.6},0).wait(1).to({y:269.3},0).wait(1).to({y:269.8},0).wait(1).to({y:270.2},0).wait(1).to({regX:339.9,x:339.9,y:270.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.9,0,650.9,540.8);


(lib.s17 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_167 = function() {
		this.stop();
		try{app.showBtns()}catch(e){}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(167).call(this.frame_167).wait(1));

	// 手的逐帧
	this.instance = new lib.s17110();
	this.instance.setTransform(380.6,606,1,1,0,0,0,96.6,40.2);

	this.instance_1 = new lib.s17111();
	this.instance_1.setTransform(380.6,608.8,1,1,0,0,0,96.6,37.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},27).to({state:[{t:this.instance_1}]},3).to({state:[]},30).wait(108));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).to({y:508},3).to({_off:true},30).wait(108));

	// 嘴巴
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C0C0C").s().p("AivACQgFgBACgDQABgFAEABQBWAbBYgFQBagFBRgkQAEgCADAEQACAEgEACQhTAlhcAGIgbABQhNAAhJgZg");
	this.shape.setTransform(380.9,369.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C0C0C").s().p("AiaAMQgEgKAGgGQAJgNAcAFIBOAJQAqADAhgCQATgCAQgGIARgIQAMgFATAAQAggBADALQADAJgXAJQgGADgQAAQgSgBgdACIguACQg3gBgdABQguABggAMQgJgCgEgKg");
	this.shape_1.setTransform(380.8,369.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#041404").s().p("AhJAmQgkgMgpgbQgFgDADgEQACgFAEADQAnAZAiAMQApAOAmgFQA0gGAdgRQAdgOAdgrQACgEAEACQAFADgDAEQgaAngiATQghATgvAHQgNADgNAAQgeAAgegKg");
	this.shape_2.setTransform(380.7,373.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#041404").s().p("AhEA+QgrgMgegeQgmglAZgjQgDgCABgEQABgEAFABQCMAjCFgmQAVgFAHAAQANACABATQAAAfguAoQglAhg0AKQgVAEgTAAQgdAAgdgIgAiag1IAAABIABAAIAJACIgBACQgRAYATAZQAPAWAbAPQAkAUAxABQAuACAogTQArgTAagkQAcgrgcgCQgHAAgNAEIgVAHQgqAJgrADQhMAEhRgTQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBgBAAIgDgBQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
	this.shape_3.setTransform(381,373.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA2IgjgGQgtgFgcgaIgEABQgPgJgIgSQADgCAIACIA2AUQAhAOAVABQALAAANgBIAWgDQAYgDAngTQAcgMAlgqQACAHgHAPQgKAXgPAMQgWAVgfALQgbANgPAEQgJADgLAAIgNgBg");
	this.shape_4.setTransform(381.2,375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB5867").s().p("AgSAyQgVgBglgQIgugUQgTgKgGgHQgFgIAAgKIABgEIAAgEQADgLAHgEQAKgFAWAIQBRAcBugdQAYgGAMgBQAUgBAPAIQgNAagHAJQgLAPgPAJQgcARgiAJQgfAJgXAAIgJgBg");
	this.shape_5.setTransform(380.4,372.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#041404").s().p("AAdA4QgMgNgHgCQgVgEgLAPIg1gXQAUgFAYgRIAngdQAKgHAWgSQAXgTAJgHQAKAcgTAzQgDAJgFAZQgGAZgDAJQgEgDgNgPg");
	this.shape_6.setTransform(396.6,362.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#041404").s().p("AhjABQgKgegCgcQAOgCAWAJQASAHAPALIAQALQAIAEATADIA8AIQAjAEAQAHQgWAKgIAXQgfgKghABQgcAAgGARQgGgGgJgBQgJgCgIACQgOAEgOAPQgNgYgKghg");
	this.shape_7.setTransform(370.5,365.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#041404").ss(2).p("AisgQQANAPAwAMQAzAPAqAAQBWAAAzgUQACgBA5gf");
	this.shape_8.setTransform(380.3,362.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#041404").p("AgXALQAHgLAPgEQAMgGANAF");
	this.shape_9.setTransform(355.7,355.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#041404").p("AgiADQAGgFASgEQAPgEAHACQAMADAMAR");
	this.shape_10.setTransform(405.1,348.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#041404").ss(2).p("AhPAXQAOgSAUgJQAVgLAWgCQAVgCAWAHQAWAHARAO");
	this.shape_11.setTransform(386.3,367.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#041404").ss(2).p("Ag+ADQAcgXAlAFQAjAFAVAaQACACABAD");
	this.shape_12.setTransform(374.2,369.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#041404").ss(2).p("Ai7gSQAHgSAHgFQAGgFAIAAQAHgBAFAGQAEAEAAAIQAAAFgBAJQgCAaAVAYQATAXAdAIQAZAHAggCQAUgBAkgIQAmgHASgKQAegRAFgcQABgJgEgWQgFgWABgKQARgNAXAIQAWAIAGAU");
	this.shape_13.setTransform(382.4,373.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#041404").p("AjfhlQAHAAAkAOQA6APB1AAQB+ABA9glQAegSALgSQAIA3gmBgQgkBcgdARQg0Aeg/AHQhFAIgzgaQgxgYgnhuQgMghgJglQgIggABAAg");
	this.shape_14.setTransform(381.6,369.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhzgFQgRgHgFgJIgGgBQCPAFCQgFQgMANgeAJQgqARgVADQgPADgRAAQg1AAhFgcg");
	this.shape_15.setTransform(379.9,363.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag9BYQgNgCgVgMQgtgZgSgTQgOgOgHgQQgHgSACgTIABAFIACgKQADgMAJgHQAGgDAFgBQAHAAAEAEQAEAEAAAPQABAbARAVQASAXAaALQAyAUA3gaQAFgCAQgBQAQAAAFgDQAGgDAQgNQAMgKALgCQAIAAABAAQAEgDABgHQAHgfgEgfQgBgKAEgEIAFgCQAPgDAPAHQAPAIADAOQADAKgFANQgDAHgIAOQgYAigPAQQgYAbgcAJQgJAEgUADIhFALQgRAEgNAAIgNgCg");
	this.shape_16.setTransform(382.3,376.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BB5867").s().p("AgcBKQgSgCgjgGQgQgDgGgEQgMgHgIgZQgHgZgEgYQAIgKAOgEQAOgFAPACIAeADQAQACAKAHQAIgTAQgNQAOgMAUgDQAVgCAcAKQAbAKAPAOQACACABALQAAAMABACIAGAOQADAFAAAHQAAAEgHAFIgKAJQgCADgIAFQgwAdgkAGQgPADgPAAIgWgBg");
	this.shape_17.setTransform(381.7,373.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#041404").s().p("AA0AfQgogIgYAIIgKACIgNgCQgYgIgTABQgaACgOAOIABgFQgDgDgBgKQgBgLACgDQAGgKARgKIAfgQQAxgZBMALQAUACALAJIAOALQAIAHACAGQAFALACAPQADASgEAKQgsgMgYgEg");
	this.shape_18.setTransform(381.8,365.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#041404").s().p("AgCAKQABgKgEgIQgCgFAFgBQADgBACAEQAEALgBAKQgBAFgFAAQgDAAABgFg");
	this.shape_19.setTransform(381.1,370.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#041404").s().p("AB5AQQgZgQgggCIg8AAQgqgEgUAAQgkAAgYASQgEADgDgDQgEgEAEgDQAZgTAhgBQAUgBAsAEQAJAAAZgCQAXgCANACQAgAEAbARQAEADgDAEQAAABgBAAQAAABgBAAQAAAAAAAAQgBABgBAAIgCgBg");
	this.shape_20.setTransform(381.5,369.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#041404").s().p("AhygJQgEgCADgEQACgFAEADQAwAaA7AAQAcAAAegGIAcgDQASgDAFgFIABgDQACgFAEADIABABQAEACgCAFQgEAGgOAEIgXAEQgiAJghABIgJAAQhBAAgxgcg");
	this.shape_21.setTransform(380.6,378.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#041404").s().p("Ag6B5Qg0gVgPg6QgMgvARg7IABgCQgCgDADgDQAigiA8gNQAegHAXgBQAggCAXAIQApAPAFA3QAEAugVAoQgYAwgwAbQggASgcAAQgUAAgTgHgAgkhrQguAOgdAcQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgQA4ALAtQAOA5A0AQQAtAOAtgcQAqgaAWgsQAUgmgGgsQgFgegPgPQgQgRgigBIgLAAQgmAAgkAJg");
	this.shape_22.setTransform(381.4,373.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BB5867").s().p("AhuAjQgMgLgEgQQgEgPAHgPQAHgQARgJQAQgKATAAQAPgBAdAFQAMABAdgEQAbgDAPACQALACAZALQAXAKAEALQAEAJgGANIgNATIgLATQgOAQglAEQgTACgSAAQg/AAg7gYg");
	this.shape_23.setTransform(381.3,374.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVApQgKgCgKgFQgYgMgQgTQgRgSgFgXIABgCQAsAWA0AEQAzAEAvgQQALgEABAGQAAAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQgJASgXAMQgPAJgeALQgaALgPAAIgGAAg");
	this.shape_24.setTransform(379.9,381.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#041404").s().p("AhEA+QgrgMgegeQgmglAZgjIABAAIAJACIgBACQgRAYATAZQAPAWAbAPQAkAUAxABQAuACAogTQArgTAagkQAcgrgcgCQgHAAgNAEIgVAHQgqAJgrADQhMAEhRgTQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBgBAAQgEgCgDADIAAABQgDgCABgEQABgEAFABQCMAjCFgmQAVgFAHAAQANACABATQAAAfguAoQglAhg0AKQgVAEgTAAQgdAAgdgIgAiQgyIAAAAg");
	this.shape_25.setTransform(381,373.3);

	this.instance_2 = new lib.s17112();
	this.instance_2.setTransform(381.1,366.4,1,1,0,0,0,27.8,18.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},7).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},5).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_25},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_25},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},3).to({state:[]},30).wait(108));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({y:265.6},3).to({_off:true},30).wait(108));

	// 第一个线稿
	this.instance_3 = new lib.s1719();
	this.instance_3.setTransform(380,428.3,1,1,0,0,0,337.8,275);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({y:327.5},3).to({_off:true},30).wait(108));

	// 人
	this.instance_4 = new lib.s1718();
	this.instance_4.setTransform(394.3,438.2,1,1,0,0,0,175.8,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({y:337.4},3).to({_off:true},30).wait(108));

	// 沙发
	this.instance_5 = new lib.s1717();
	this.instance_5.setTransform(376.1,426,1,1,0,0,0,338.2,273.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({y:325.2},3).to({_off:true},30).wait(108));

	// 叮
	this.instance_6 = new lib.s1715();
	this.instance_6.setTransform(244,1004.4,0.006,0.006,0,0,0,162.2,97.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({regX:165,scaleX:1,scaleY:1,x:244.1},3).to({_off:true},25).wait(108));

	// 图层 48 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_36 = new cjs.Graphics().p("EAGKAlTId5AAIAAakI95BFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_graphics_36,x:230.7,y:415.6}).wait(132));

	// 宝石1
	this.instance_7 = new lib.s1714();
	this.instance_7.setTransform(372.5,881,1,1,0,0,0,40.9,51.4);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({_off:false},0).wait(1).to({regY:68.9,y:856},0).wait(1).to({y:828.4},0).wait(1).to({y:807.4},0).wait(1).to({y:790.8},0).wait(1).to({y:778.3},0).wait(1).to({y:770.3},0).wait(1).to({y:765},0).wait(1).to({regY:51.4,y:743.4},0).to({_off:true},10).wait(108));

	// 图层 50 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_36 = new cjs.Graphics().p("EgkLBBcMBVIgDVIABAWMhP8ADLg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EgkYAt7MBVLgBDIAORhMhP+ADDg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EgkSAn5MBVMgAXIAGW2MhQAADBg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EgkPAljMBVMgAFIACY5MhQAADAg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EgkNAk0MBVMAAAIAAZiMhQAAC/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_1_graphics_36,x:313.4,y:420}).wait(1).to({graphics:mask_1_graphics_37,x:313.8,y:418.9}).wait(1).to({graphics:mask_1_graphics_38,x:313.6,y:418.5}).wait(1).to({graphics:mask_1_graphics_39,x:313.5,y:418.4}).wait(1).to({graphics:mask_1_graphics_40,x:313.5,y:418.2}).wait(128));

	// 光
	this.instance_8 = new lib.s1713();
	this.instance_8.setTransform(343,739.4,1.09,1.09,0,0,0,239.8,86.2);
	this.instance_8._off = true;

	this.instance_8.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(36).to({_off:false},0).to({_off:true},24).wait(108));

	// 小白珠
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAIAJQAKAJgBALQABAMgKAJQgIAIgMABQgLgBgJgIg");
	this.shape_26.setTransform(322,805.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSAUQgJgJAAgLQAAgKAJgIQAIgJAKAAQALAAAJAJQAIAIAAAKQAAALgIAJQgJAIgLAAQgKAAgIgIg");
	this.shape_27.setTransform(417.6,794.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AggAhQgOgOAAgTQAAgSAOgOQAOgOASAAQATAAAOAOQAOAOAAASQAAATgOAOQgOAOgTAAQgSAAgOgOg");
	this.shape_28.setTransform(306,778.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMANQgHgFAAgIQAAgHAHgGQAFgFAHAAQAIAAAGAFQAFAGABAHQgBAIgFAFQgGAGgIAAQgGAAgGgGg");
	this.shape_29.setTransform(432.3,756);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSATQgJgIAAgLQAAgKAJgJQAIgIAKAAQALAAAJAIQAIAJAAAKQAAALgIAIQgJAJgLAAQgKAAgIgJg");
	this.shape_30.setTransform(323.9,753.8);

	this.instance_9 = new lib.s17114();
	this.instance_9.setTransform(367.7,764.3,1,1,0,0,0,66.5,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26}]},39).to({state:[{t:this.shape_26},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_26},{t:this.shape_28},{t:this.shape_30},{t:this.shape_27},{t:this.shape_29}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},18).wait(108));

	// 第二线
	this.instance_10 = new lib.s1712();
	this.instance_10.setTransform(379.7,1391.8,1,1,0,0,0,337.5,186.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},0).to({x:385.4,y:838.2},3).to({_off:true},30).wait(108));

	// 图层 4
	this.instance_11 = new lib.s17_dbtext_1();
	this.instance_11.setTransform(472.1,967,0.6,0.6,0,0,0,287.1,104.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(88).to({_off:false},0).to({_off:true},22).wait(58));

	// 宝石星星2
	this.instance_12 = new lib.s17214();
	this.instance_12.setTransform(348.7,289,1,1,0,0,0,99.2,105.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(63).to({_off:false},0).wait(1).to({y:279.7},0).wait(1).to({y:271.8},0).wait(1).to({y:264.4},0).wait(1).to({y:257.7},0).wait(1).to({y:252},0).wait(1).to({y:247.1},0).wait(1).to({y:243.1},0).wait(1).to({y:239.9},0).wait(1).to({y:237.4},0).wait(1).to({y:235.4},0).wait(1).to({y:233.8},0).to({_off:true},36).wait(58));

	// 宝石星星
	this.instance_13 = new lib.s17215();
	this.instance_13.setTransform(398.7,372.4,1,1,0,0,0,73.5,78.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(67).to({_off:false},0).wait(1).to({y:368.8},0).wait(1).to({y:365.8},0).wait(1).to({y:363.1},0).wait(1).to({y:360.8},0).wait(1).to({y:359},0).wait(1).to({y:357.5},0).wait(1).to({y:356.4},0).to({_off:true},36).wait(58));

	// 图层 61 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_60 = new cjs.Graphics().p("Az8XwMAAAgvfMAn4AAAMAAAAvfg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_2_graphics_60,x:358.5,y:251.1}).wait(108));

	// 宝石3
	this.instance_14 = new lib.s17216();
	this.instance_14.setTransform(371.6,418.8,1,1,0,0,0,72.7,91.4);
	this.instance_14._off = true;

	this.instance_14.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(60).to({_off:false},0).wait(1).to({y:398.3},0).wait(1).to({y:377.9},0).wait(1).to({y:360.2},0).wait(1).to({y:346.2},0).wait(1).to({y:335.8},0).wait(1).to({y:328},0).wait(1).to({y:321.5},0).wait(1).to({y:316.3},0).wait(1).to({y:312.1},0).wait(1).to({y:308.8},0).wait(1).to({y:306.2},0).wait(1).to({y:304.1},0).wait(1).to({y:302.5},0).wait(1).to({y:299.8},0).to({_off:true},36).wait(58));

	// 眼睛
	this.instance_15 = new lib.s17217();
	this.instance_15.setTransform(373.6,236.4,1,1,0,0,0,129.5,9.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(60).to({_off:false},0).wait(1).to({y:232.6},0).wait(1).to({y:229.3},0).wait(1).to({y:226.7},0).wait(1).to({y:224.7},0).wait(1).to({y:223},0).wait(1).to({y:221.6},0).wait(1).to({y:220.4},0).wait(1).to({y:219.4},0).wait(1).to({y:218.5},0).wait(1).to({y:217.7},0).wait(1).to({y:216.9},0).wait(1).to({y:216.3},0).wait(1).to({y:215.8},0).wait(1).to({y:215.4},0).to({_off:true},36).wait(58));

	// 第二个线稿
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#041404").ss(2).p("AEQmWQAKBXgCAwQgEBLgcA0QgQAdgdAhQgFAEgyAzQh1BxhRCMQglA8gDAGQgZAlgYAWQgeAcgkAMQgnANgjgL");
	this.shape_31.setTransform(662.7,236.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#041404").ss(2).p("ADCmkQhgBTgmCUQgPA8gGBKQgFA0gBBSQgBAfgBAQQgDAagIATQgHASgNATQgHAKgUAXIilC3");
	this.shape_32.setTransform(649.5,222);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#041404").ss(2).p("ADptbIB+CWQAUAaAFAMQAIAPAEAoIAaEiQAFA+ABAcQABAygIAnQgMBHguBMQgdAvhABTQhIBeglAuQg+BMg1A6QgyA4gaAcQguAxgbAnQgOAUgwBLQglA7gcAhQgpAugwAZQg3Acg1gH");
	this.shape_33.setTransform(662.2,230.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#041404").ss(2).p("AkPmWQgKBYACAvQADBLAdA0QAQAdAdAhQAHAHAwAwQBzBwBTCNQAiA4AGAKQAYAlAYAWQAeAcAkAMQAoANAjgL");
	this.shape_34.setTransform(100.4,236.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#041404").ss(2).p("Ai4maQBfBSAnCVQAPA8AHBKQAEA1ABBRQABAfABAQQADAaAIATQAHASANATQAHAKAUAXICUCj");
	this.shape_35.setTransform(112.6,221);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#041404").ss(2).p("AjotbIh9CWQgVAZgFANQgIAPgEAoIgZEiQgGA8AAAeQgCAyAIAnQAMBHAuBMQAcAuBBBUQBIBeAlAuQA+BMA1A6QAaAcAyA4QAtAxAcAnQAOAUAwBLQAlA7AcAhQApAuAwAZQA3AcA1gH");
	this.shape_36.setTransform(100.8,230.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#041404").ss(2).p("AhWBZQBphHBAhv");
	this.shape_37.setTransform(597.8,233.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#041404").ss(2).p("Ahag8QBXBDBjA0");
	this.shape_38.setTransform(438.4,247.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#041404").ss(2).p("AjGhxIASAPQA5ArBNAvQAuAZBcA0QAfASATAIQAcANAZAD");
	this.shape_39.setTransform(450,247.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#041404").ss(2).p("AiJhlIDnC8QANAKAHACQAHABAFgDQAGgCACgG");
	this.shape_40.setTransform(157.5,236.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#041404").ss(2).p("AhZBKQBXg9BXhKQADgDABgEQABgFgEAA");
	this.shape_41.setTransform(308.8,248.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#041404").ss(2).p("AkUB7QAgABAngJQAcgHApgPQC+hICmh1IgSAH");
	this.shape_42.setTransform(288.3,251.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#041404").ss(2).p("AJNmtQjyBOi7CHQiPBniZCmQizDNhgBtQgjApgvAPQg1ATggggQgJgJAOgsQAQgxAlhAQBjipCtiWQDjjGEshyQA9gXA/gT");
	this.shape_43.setTransform(464.6,139.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#041404").ss(2).p("ApAmpQDkBNCxCAQCPBnCZCmQBbBjC3DXQAkApAuAPQA2ATAfggQAKgJgOgsQgQgxglhAQhjipitiWQjjjGkshyQgwgSgygQ");
	this.shape_44.setTransform(288.6,140);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#041404").ss(2).p("ALbjAQjQiHkEgIQkEgIjWB5Qh1BChwBsQixCqhtDc");
	this.shape_45.setTransform(511.2,181.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#041404").ss(2).p("AIqBdQhwAeiZAGQijAHiagXQl+g4iJi/");
	this.shape_46.setTransform(493.6,247.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#041404").s().p("AJGDHQBviQA2iKQqPnwoZFaQitBviqDMQiXDKgoAnQAcgpBmimQBximB5h1QFxliHUBQQB+AWEAB0QErCJBNAYQkEFWlcEAQBKhdCIikg");
	this.shape_47.setTransform(532.3,201.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#041404").ss(2).p("ArajAQDQiHEEgIQEEgIDWB5QB2BCBvBsQCxCqBtDc");
	this.shape_48.setTransform(235.8,181.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#041404").ss(2).p("AopBdQBxAeCZAGQCjAHCZgXQF+g4CJi/");
	this.shape_49.setTransform(253.5,247.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#041404").s().p("AvTiOQBOgYEqiJQEAh1B+gVQHUhQFxFiQB5B1BxCmQA8BZBGB2QgVgVg4hKQhKhigogwQiqjMishvQoalaqPHwQA2CKBvCQQBABUCSCtQlaj/kGlXg");
	this.shape_50.setTransform(214.8,201.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#041404").ss(3).p("AicAUIDdC9QhAhNgyiZQhFjMgmhL");
	this.shape_51.setTransform(680.6,127.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#041404").ss(3).p("AkfmmQASAaA9BOQA+BPARAaQB+C7A4BiQBfCkAwCPQAKAhARAGIAokFQARhvAEg2QARjRg7jK");
	this.shape_52.setTransform(633.4,140.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#041404").ss(3).p("Ai0l7QAhCgBkDEQBWCqBxCZQg4iqAMiu");
	this.shape_53.setTransform(616.3,135.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#041404").ss(3).p("Ak2h9QB4A2A+AmQAxAeBcA+QBVA0BGAJQhyAGg3gBQhfgChJgSQgngKgTgFQghgIgZgB");
	this.shape_54.setTransform(417.7,111.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#041404").ss(3).p("Am5kHQA5A8AeAdQAxAvAtAhQBFAyBqAsQAJAECyBHQDrBdBgByQgPikhDiYQgghKgmgzQgpg1g4goQg3gnhBgV");
	this.shape_55.setTransform(357,129.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#041404").ss(3).p("AmTjoQChCvC1BqQCzBsDLAwQh9hJhYh1");
	this.shape_56.setTransform(323.7,121.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#041404").ss(3).p("AhhgXQgWCGhCB7QD5joCkks");
	this.shape_57.setTransform(150.5,127.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#041404").ss(3).p("AibkWIjuKZQBShXCChzQCViABGg/QEIjsBzjH");
	this.shape_58.setTransform(113,146.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#041404").ss(3).p("ADLkuIhWD2QguCDgrBGQg+BohaAlQAUgBAYgKQANgFAcgOID6h+");
	this.shape_59.setTransform(65.5,128.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#041404").ss(2).p("AGnzZQgxDdhGETQgpCihZFMIimJxQgoCdgVBFQgmB9goBgQh0ETizCM");
	this.shape_60.setTransform(615.1,279.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#041404").ss(2).p("AmnzZQAyDdBGETQApCiBYFMICnJxQAnCZAWBJQAmB9AoBgQBzETC0CM");
	this.shape_61.setTransform(146,279.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#041404").ss(3).p("EA00AYAMhpnAAAMAAAgv/MBpnAAAg");
	this.shape_62.setTransform(372.4,251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},60).to({state:[]},50).wait(58));

	// 人_1
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D1D1D1").s().p("AIbErQAZg0AJgvQAKg3gMgyQgMg3gjglQgigjhDgbQhmgoiBgIQhmgGiGAPQnzA2kMDuIAAgCQBZiQB0h4QBKhNA9glQAogYBSgiQAVgICChAQBfguA8gPQBEgQBVAIQA8AGBeAYQAwAMBGAaQBBAZAxAYQBJAjA5AjQA0AgBFAzIAiASQAaANAEAIQAHAQgWAkQgaAmgHAMQgsBchSBiQhkBwg0A9QAigyAUgog");
	this.shape_63.setTransform(525.9,200.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D1D1D1").s().p("AnDGLIgOgHQhZgnhPhbQg0g9hJh2QgVgigIgVQgMgeAEgcQAEgfAbgeQASgUAmgbQB/hbBPguQB2hDBrgbQB/ghCOAQQCCAOCCA3QDfBeDeDVQBGBCAeA0QhzhQhfgyQh1hAhugjQh9gnh4gCQiBgDhwAqQh4AshXBaQhaBhgZB2QgSBXAWBKQABgEAFAGQAGAHgGADIgCABIAAAAIgEAAQgDAAgEgBg");
	this.shape_64.setTransform(216.8,201.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D9A991").s().p("AqNDKQAogYAUgQQAfgYAPgcQATgggDglQgCgTgHgOQCLAwC1gDQB5gDDgggQBEgKAhgIQA3gKApgUQAygXBbhNQBYhJA3gXQAVgIALAFQAMAFADAQQACAMgDARQgPBFgvA/QgrA4g/AsQg5AnhKAdQg8AYhRAVQjTA3jaAJQgrACgrAAQixAAitgegAotACIgFgSQAOAKAIAOIgRgGg");
	this.shape_65.setTransform(528.4,256.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D9A991").s().p("AhUC0QlGgrkwh0IgKgXQgPgkAUgqQAQgkAkgfQAqglAwgMQA2gOAoAYQARAKASAUIAeAkQA4BABaAkQBQAeBiAHQBIAFBrgHIC0gNIDxgGQCJgMBYgyQgRAXgeASQgRAKgoARQgkARgUAPQgdAVgNAaQgPAdAKAhQAKAjAeAIQiUAQiVAAQiwAAivgWg");
	this.shape_66.setTransform(214.3,259.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D9A991").s().p("AqqGWQgLgHgGgTQgMgkAFgvQAEggAPgzQA2ixBYihQAlhFAhgtQAsg6AygjQBzhRDNADQDjADDDBYQDABXBxCWQgogVgxgDQhMgGg9AlQg+AmgdBFQgeBGARBHQhdgwiDgCQhTAAiXAWQhLAMgoAIQg/AOgwAUQhDAbhMA5QgUAOhuBbQgbAVgTAAQgIAAgHgEgAKahRQAXALAUARIgUADIgXgfg");
	this.shape_67.setTransform(211.1,136.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D9A991").s().p("Al7X/QDYjhCuk1QCWkICFlcQAehOALgwQARhIgIg6QgGgvgagTQgRgMglgEIkDgdIAygDQgMgIAFgQQAEgPANgOIIko5QhdgThshPQh3hig+gsQjLiSkCgaQkDgZjjBnQAjhHAAhSQAAhSgkhHQgRghgagUQgegXgeAJQArgvBYgiICVg4IBsgzQBRgnBSADICoAGQBVAEBrgGQBugGAlAIQAkAIAWAKQAWALAYAVQAbAZAVArQAKAWAUA6QBXD+CMDpQgZioAOisQAoA1AiBLQAVAvAiBbQAhBXANAvQAVBLABA/QAAAtgJA4QgGAihgFzQhhFyhtGWQhtGWhlCqQhkCqghAnQgiAoghAeQggAfglAMg");
	this.shape_68.setTransform(566.2,250.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F1F4D6").s().p("AlpEkQgkh2AqhrQARgqAhgsQAWggApgxQBsh+B+h/QAsguAfgYQAtgiAsgPIgaADQAsgJAvAMQAuAMAjAeQAjAeAUArQAUAqACAvQABAtgQAgQgOAbgfAZQgMAJgvAeQiOBciCCjQhUBniGDSQhfhAgkh2g");
	this.shape_69.setTransform(459.3,169.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F1F4D6").s().p("AgPBPQiniojWhbIgNASQANhrAZg9QAkhYBFgfQAwgVA8AJQAzAIA3AcQBaAwBcBcQA4A4BgB5QA6BIAaArQAoBFADBAQAFBVg4BaQglA8hVBaQhXjYikiqg");
	this.shape_70.setTransform(286.3,172.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D9A991").s().p("AkBHCQgXgGgJgNQgOgYAYglQANgUBGhMQA0g5ANguQAFgSACgZIADgsQADhWAWhpQAOhJAfh1QAKgkAHgTQALgeAPgVQAQgZAZgOQAbgQAbADQAZADAaASQAQALAaAaIgTgOQBSBLAiBgQAmBrgnBZQgfBFh8BeQh8BgghBEQgGALgPAoQgMAggLASQgcArgyATQgdAKgcAAQgVAAgVgGg");
	this.shape_71.setTransform(663.2,225.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D9A991").s().p("ACaGoQg5hfgbgoQgyhKgugzQhahSgrgpQhOhIgehDQgkhSAThdQATheBBg+QAhgfAngLIgRgTIArAOIgNACIgNADQBDBNAsBeQAvBqANByIAIBeQAHA3ARAlQAKAXATAaQALAPAYAeIBmB7QAVAaAKAPQAPAYAEAVQAEAagLAYQgNAZgXAGIgMABQgpAAgphDgAhmncQAsgEAbAcg");
	this.shape_72.setTransform(101.7,226.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F1F4D6").s().p("ABcC/Qg5gJg1gtQgogggxg9QgpgygVgkQgegzgHgwIAYgyQCHBUCpBwQAvAgASAYQAOASAEAVQAFAXgHATQgLAdgiANQgVAIgXAAQgLAAgLgBg");
	this.shape_73.setTransform(448,254.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F1F4D6").s().p("Ai0C7QgjgQgQgfQgNgYAIgVQAGgSAXgOQAhgXBJgdQBLgcAegWQARgLAogiQAkgfAXgNIA2gaQAhgQASgPIADgEIgFgFQgBgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAQAEgCABADQABAEgDAEIAMAOQgtBngwBIQg7BXhIA4QhBA0g+AFIgMAAQgeAAgbgNg");
	this.shape_74.setTransform(294.3,258.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D9A991").s().p("AE7YEIgUgJQg+ggg6g9QgtgvgzhMQgfgvgihQQgjhcgTgqQhWjBhEkFQgOg5hdmdQgUhXgghuQgRg6griMQgehjgtjFQgujGgJhMQgKhMgKgMQgKgLAJgDQAJgEAQgPQAPgPBRhIIB1hoQAkghBDhOQgQCQhVCkQEvkXCXk2IBrAAIjnD+Qg5BigbA0QgsBVgVBKQgNAsgKA5QgGAigKBEIgaDAQgFAogBAUQgCAhAEAbQAIAsAeAvQAUAfApAwQBeBvBzCAQhWAWgrAVQhFAdgjAxQgrA8gCBbQgCBPAdBdQAUBBAuBkQCME4CODcQCtEMDLC3g");
	this.shape_75.setTransform(161.5,251.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E9CAB2").s().p("AmZMwIAVgnQAEgIgPASQgfAmAThGIAfhiQAPgvAWhhQAYhqAOguQAKggALg8QAMhAAHgcQALglAVgzIAkhXQAfhLAShQIAujAQASg+Ayh7QAJgWAiioQAgiaAWgeIgggEQAZgfAsgCQAtgBAaAeQAMANAWAvQASAnAWANQAGADATA3QATA1AHAEQAcAMAaACQAOAEAHAjQAIAjAOAzQAOAyAHAlQATBbAPCOQARCqg3BrQgNAZgUAeIgnAzIh+CkQg4BIg+BCQg3A6hJBFQgLAKgTAcIgdApQgUAZgeA4QgeA6gTAYQgrA2hJAeQhAAahOAEQgDgqAshUg");
	this.shape_76.setTransform(661,222.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F4D865").s().p("An6GjIglgbQAAgoATgnQATgoBwigQBvieDniaQDkiaBWgaQBWgaAMgFIARgIIClAAQidA5hOA3QhPA4gxAmQgxAmg1AsIiTB9QguAygaAiQgaAihRBbIh1CFQgxA0gmASQgZAMgbAAIgCAAg");
	this.shape_77.setTransform(461.3,140.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("Aj8HUQgNgDgcABQgbABgOgEQgLgDgeABQgaABgNgHQgngWiRgwQh6gogzgtQgQgOgZgxQgUgpgbgMQDYlME7j4IgfA2QAegsA+gbQApgRBNgRQBqgXA4gIQBcgLBKAJQAYAEA7ANQA1AMAfADQANABBUAEQA8ACAkALQBTAYBZBiQAYAbAwA4QAsAyAhAdQg2CSiDCQQhSBcivCXQgqAlgdAQQgrAYgmgFQgJgBgSACQgRACgKgCQgQgEgbAIQgiAJgJAAIi7AMIgVAAQhgAAhKgRg");
	this.shape_78.setTransform(522.6,211.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgZH6QhQgKgmgHQhCgMgygSQg+gWhFgqQgsgahPg4Qg5gogfgZQgwgmgigkQgugzg/hnQghg1gPggQgWgygDgsQgDgcAJgUQAIgTAhgbIBehMQAkgdAZgLQARgIAPgCQDxhyDkgPQCEgIB6AaQCCAbBsBAQA5AhA8AxQAvAmA8A7IAYAYQAMAPAGAOQAJAUAXAiQAfAuBRBgQBBBPAgA8QAFAIAPAIQALAGgBANQgDAngqAtQglAogrAUIh3A6Qg5AbhPAQQhcAQgyAJQh5AYhAAHQg6AHgyAAQgqAAgjgFg");
	this.shape_79.setTransform(223.7,210.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F4D865").s().p("AHbGvQgqgLgfglQghgwgWgaQiDighcheIiViWQg7g6iIhYQiHhYiuhSIgbAAQBBgWAoACQAoACAVAHQAUAHAiARQCSA0BjA3QBuA+BOA5QBNA5BfBVQA5AwBtBsQAOAPAQAmQAUAuAGAKQAGAJAcAiQASAXAHAYQATBBgfAUQgOAJgRAGQgRAHgKAAIgFgBg");
	this.shape_80.setTransform(289.7,139.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F4D865").s().p("ADSCVQhzgwh5hAQg/gSgegLQg0gRhKgRQBCApAgAvQArBCAhANQixgii0h3Qi1h4iWiXQAPgBAJgHQAJgHAYADQAZAEAGgDQAGgCB+ADIEHAHQCIADBrgFQBpgEAnAAIBbgCQA1AAAkANQAcAJAlAcIA7AvQCrB8CuAqQhIAJiNACQiNABhkgyQAHAZAUAgQATAeAHAYQAMAoAMBKIAWCNQhPhkh0gwg");
	this.shape_81.setTransform(359.7,126.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F4D865").s().p("ABFE1QgthigYghQgYgkgWg/QgXhHgPghQgBgDgVgfQgRgbAAgJQgWBHAZB5QACANAxC2QgfgSgdgrQgQgXgcg2QgTgmhEhuQg7hdgYg2QghhLgRgxQgYhGgIg7IgEgNQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQgCgCABgDQABgDAIgCQA+gNBPAAQAxAABdAIIFgAaQAlADAPAJQAKAFAFAbQAFAfAEAGQAmA9ASAyQAUA4AFBBQABAQALAWIARAlQAEAJAUAkQAQAdABATIididQgHgHgFADIgEAEQgaA0gHA2QgDATgDA5QgMCnhDCcQglgngnhUg");
	this.shape_82.setTransform(640.4,138.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F4D865").s().p("AkrEDQAnhkAginQgzAWhtA/QhtBAhxAXQCWhHBbjCQAghGAihqIA1ivIAOANIFHgBQDEAACFgKQBBgFAhACQA2ADAnATQgoBGhKBxQhJBxgdAeQgcAehEBQQhEBTgeARQBki1gOhlQh3CHiYB6QiXB7goAoIhvBwQg/A+ghAmQArhfAohlg");
	this.shape_83.setTransform(110.5,142);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E9CAB2").s().p("A8AYMQg4gDgpgSQgpgTglgoQgagcgigyQg7hYg3h8QgNgehOjBQiQlmhHknIkkzEIgHAUQgbk5g3k0QEnAjGJgHQBHgBJrgXQExgMF6gFQDzgEG4gDIMkgFQJrgFFEACQIKADGkATQAWABAhgHIA0gKQA7gJAYAlQATAcAJBIQAIA+gDArQggGQiWI3IiHHoQhUEwgyDTQg+EFheDlQgqBpgwBJQg7BahTBDQgtAkhPAKIlLAJQj7AHk5gKQk5gLkSAHQkSAHl8ABQl/AAkvgCQkwgDj5AGQjQAEg5AAIgRAAg");
	this.shape_84.setTransform(378.1,250.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E9CAB2").s().p("ADVLuQgvhGg+hpQgTgfgxg2IkAkfQhmhwgshHQhFhsgEhnQgBgaADglIAGg+QABhqADg1QAFhcAcg6QAMgYAyhIQApg5AKgqIgFAAQArgTA2gRQATgGAIABQAMACASAOQBOA7A+BRQgDgRAVgIQAUgHAOAMQANAJAGAUQAEALAEAZQAmEXBlEDQAcBKAIAeQAQA5gIAvQgCAOgIAeQgIAdgCAPQgDAZAGAUQAGAYARAOQAGAFAPAHQAPAIAGAEQAQAMALAYQAHAPAHAdQA9DrAUDyQABAMgEAEQgEAFgKABQgOACgOAAQhtAAhJhwg");
	this.shape_85.setTransform(101.4,230.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},60).to({state:[]},50).wait(58));

	// 图层 59
	this.instance_16 = new lib.s17211();
	this.instance_16.setTransform(372.4,1523.8,1,1,0,0,0,338,269.4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(80).to({_off:false},0).to({y:799.7},4).to({_off:true},26).wait(58));

	// 图层 35 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_80 = new cjs.Graphics().p("Eg0yAqGMAAAhULMBplAAAMAAABULg");
	var mask_3_graphics_81 = new cjs.Graphics().p("Eg0yAqGMAAAhULMBplAAAMAAABULg");
	var mask_3_graphics_82 = new cjs.Graphics().p("Eg0yAqGMAAAhULMBplAAAMAAABULg");
	var mask_3_graphics_83 = new cjs.Graphics().p("Eg0yAqGMAAAhULMBplAAAMAAABULg");
	var mask_3_graphics_84 = new cjs.Graphics().p("Eg0yAqGMAAAhULMBplAAAMAAABULg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(80).to({graphics:mask_3_graphics_80,x:372.4,y:1523.7}).wait(1).to({graphics:mask_3_graphics_81,x:372.4,y:1342.7}).wait(1).to({graphics:mask_3_graphics_82,x:372.4,y:1161.6}).wait(1).to({graphics:mask_3_graphics_83,x:372.4,y:980.6}).wait(1).to({graphics:mask_3_graphics_84,x:372.4,y:799.6}).wait(84));

	// 速度线
	this.instance_17 = new lib.s1711();
	this.instance_17.setTransform(387.4,1517.5,2.182,2.182,0,0,0,605.9,390.6);
	this.instance_17._off = true;
	this.instance_17.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_17.cache(-2,-2,1216,785);

	this.instance_17.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(80).to({_off:false},0).to({scaleX:2.03,scaleY:2.03,x:387.5,y:793.3},4).wait(1).to({scaleX:0.91,scaleY:0.91,y:793.4},2).to({_off:true},23).wait(58));

	// 光晕
	this.instance_18 = new lib.s17213();
	this.instance_18.setTransform(320.9,1498.6,1,1,0,0,0,85.2,85.2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(80).to({_off:false},0).to({y:768.5},4).wait(1).to({y:761.9},0).wait(1).to({y:757.4},0).wait(1).to({y:754},0).wait(1).to({y:751.7},0).wait(1).to({y:750},0).wait(1).to({y:748.7},0).wait(1).to({y:747.9},0).wait(1).to({y:747.5},0).to({_off:true},18).wait(58));

	// 宝石2
	this.instance_19 = new lib.s17220();
	this.instance_19.setTransform(320.7,1498.4,1,1,0,0,0,23.5,29.6);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(80).to({_off:false},0).to({y:768.3},4).wait(1).to({regY:29.5,y:760.6},0).wait(1).to({y:755.7},0).wait(1).to({y:752.7},0).wait(1).to({y:750.4},0).wait(1).to({y:748.8},0).wait(1).to({y:747.8},0).wait(1).to({y:747.3},0).wait(1).to({regY:29.6},0).to({_off:true},18).wait(58));

	// 手机
	this.instance_20 = new lib.s1729();
	this.instance_20.setTransform(323.7,1554.3,1,1,0,0,0,63.9,29.2);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(80).to({_off:false},0).to({x:340.7,y:829.1},4).to({x:315.7,y:814.1},3).to({_off:true},23).wait(58));

	// 右下臂
	this.instance_21 = new lib.s1728();
	this.instance_21.setTransform(455.4,1499.6);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(80).to({_off:false},0).to({rotation:10.9,x:468.3,y:784.1},4).to({regX:0.2,regY:0.1,rotation:-9.5,x:426.5,y:773.7},3).to({_off:true},23).wait(58));

	// 左下臂
	this.instance_22 = new lib.s1727();
	this.instance_22.setTransform(136.3,1708.4,1,1,0,0,0,0,132.9);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(80).to({_off:false},0).to({regX:0.1,regY:133,rotation:-15,x:186.8,y:1006.3},4).to({rotation:-3.7,x:138.4,y:975.3},3).to({_off:true},23).wait(58));

	// 左手
	this.instance_23 = new lib.s1725();
	this.instance_23.setTransform(216.4,1619.7,1,1,0,0,0,0,108.6);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(80).to({_off:false},0).to({x:233.4,y:893.6},4).to({regX:0.1,regY:108.7,rotation:-2.2,x:209,y:881.1},3).to({_off:true},23).wait(58));

	// 左上臂
	this.instance_24 = new lib.s1726();
	this.instance_24.setTransform(271,1503.5,1,1,0,0,0,133.4,0);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(80).to({_off:false},0).to({regX:133.5,regY:0.1,rotation:-12.7,x:270.1,y:775.4},4).to({regX:133.4,regY:4.4,rotation:0,x:271,y:773.8},3).to({_off:true},23).wait(58));

	// 眼泪逐帧
	this.instance_25 = new lib.s17218();
	this.instance_25.setTransform(383,1472.1,1,1,0,0,0,47.6,26.9);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(80).to({_off:false},0).to({y:752},4).to({y:742},3).to({_off:true},23).wait(58));

	// 图层 62 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_84 = new cjs.Graphics().p("EgyHBThMAAAhUKMBpmAAAMAAABUKg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(84).to({graphics:mask_4_graphics_84,x:355.2,y:534.5}).wait(84));

	// 人
	this.instance_26 = new lib.s1722();
	this.instance_26.setTransform(368.7,1553.9,1,1,0,0,0,136.7,249);
	this.instance_26._off = true;

	this.instance_26.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(80).to({_off:false},0).to({y:831.8},4).to({y:821.8},3).to({_off:true},23).wait(58));

	// 右上臂
	this.instance_27 = new lib.s1723();
	this.instance_27.setTransform(491.3,1503.9);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(80).to({_off:false},0).to({rotation:7.2,y:784.7},4).to({rotation:-9.7,x:459.3,y:770.7},3).to({_off:true},23).wait(58));

	// 云
	this.instance_28 = new lib.s1721();
	this.instance_28.setTransform(372.8,1523.9,1,1,0,0,0,339.7,271.1);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(80).to({_off:false},0).to({y:799.8},4).to({_off:true},26).wait(58));

	// logo
	this.instance_29 = new lib.s17logo_1();
	this.instance_29.setTransform(145,99.5,0.75,0.75,0,0,0,203.6,110.5);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(122).to({_off:false},0).to({alpha:1},5).wait(41));

	// 图层 67
	this.instance_30 = new lib.s17318();
	this.instance_30.setTransform(-367.7,726.7,0.9,0.9,0,0,0,323.6,159.7);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(122).to({_off:false},0).wait(1).to({regX:390.9,regY:166.3,x:25.6,y:709.3},0).wait(1).to({x:204.1,y:696.8},0).wait(1).to({x:303.7,y:689.9},0).wait(1).to({x:354.2,y:686.3},0).wait(1).to({regX:323.6,regY:159.7,x:319.1,y:678.7},0).wait(41));

	// 图层 66
	this.instance_31 = new lib.s17312();
	this.instance_31.setTransform(-353.9,949.3,1,1,0,0,0,312.9,79.2);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(124).to({_off:false},0).wait(1).to({regX:310.4,regY:93.3,x:-11.3,y:929.7},0).wait(1).to({x:176.5,y:911.4},0).wait(1).to({x:293.7,y:900},0).wait(1).to({x:354.5,y:894.1},0).wait(1).to({regX:312.9,regY:79.2,x:385.5,y:877.2},0).wait(39));

	// 图层 68
	this.instance_32 = new lib.s17310();
	this.instance_32.setTransform(913.6,937.9,1,1,0,0,0,339.9,270.4);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(114).to({_off:false},0).to({x:785.6},5).wait(49));

	// 前云
	this.instance_33 = new lib.s1734();
	this.instance_33.setTransform(-146.1,953.2,1,1,0,0,0,332.1,246.2);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(114).to({_off:false},0).to({x:58.7},5).wait(49));

	// 宝石4
	this.instance_34 = new lib.s17311();
	this.instance_34.setTransform(369.6,112.7,1,1,0,0,0,21.2,26.7);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(110).to({_off:false},0).to({y:105.7},4).wait(54));

	// 光
	this.instance_35 = new lib.s1737();
	this.instance_35.setTransform(370.3,105.9,0.266,0.266,0,0,0,1107.5,1085.2);
	this.instance_35.alpha = 0.129;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(112).to({_off:false},0).to({alpha:1},2).wait(1).to({regY:1085,scaleX:0.59,scaleY:0.59},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:370.2,y:105.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:105.9},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({regX:1107.2,regY:1085.3,scaleX:0.88,scaleY:0.88,x:370.1,y:106},0).wait(48));

	// 山峰
	this.instance_36 = new lib.s17319("synched",0);
	this.instance_36.setTransform(378.2,850.2);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(110).to({_off:false},0).wait(58));

	// 右手下
	this.instance_37 = new lib.s17314();
	this.instance_37.setTransform(428.6,356.2,1,1,37.6,0,0,10.3,62.5);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(110).to({_off:false},0).to({regY:62.4,rotation:0,x:437.9,y:344.6},4).wait(54));

	// 右手上
	this.instance_38 = new lib.s17313();
	this.instance_38.setTransform(402.2,308.1,1,1,5.2);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(110).to({_off:false},0).to({rotation:0,y:298.1},4).wait(54));

	// 左手上
	this.instance_39 = new lib.s17316();
	this.instance_39.setTransform(358.8,339.4,1,1,-6.5,0,0,17.8,80.9);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(110).to({_off:false},0).to({rotation:0,y:329.4},4).wait(54));

	// 左手下
	this.instance_40 = new lib.s17317();
	this.instance_40.setTransform(336.1,286.1,1,1,-15,0,0,0.1,91.8);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(110).to({_off:false},0).to({regX:0,rotation:0,x:340.3,y:271.9},4).wait(54));

	// 人_2
	this.instance_41 = new lib.s1733();
	this.instance_41.setTransform(564.5,339.4,1,1,0,0,0,228,119.4);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(110).to({_off:false},0).to({y:329.4},4).wait(54));

	// 后云
	this.instance_42 = new lib.s1732();
	this.instance_42.setTransform(381.5,566,1,1,0,0,0,395.8,622.8);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(110).to({_off:false},0).wait(58));

	// 飞云
	this.instance_43 = new lib.s1731();
	this.instance_43.setTransform(373.5,303.9,1,1,0,0,0,414.5,355.9);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(110).to({_off:false},0).wait(58));

	// 第三个背景
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAiANQgigKgjAEQgKABAAgIQAAgKAKgBQAkgFAmALQAJADgDAIQgCAHgGAAIgDAAg");
	this.shape_86.setTransform(589,60.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgnAZQgJgDACgJQAIgbAggIQAdgIAVAWQAGAHgHAFQgHAHgHgHQgNgMgRAFQgUADgFASQgCAHgHAAIgEAAg");
	this.shape_87.setTransform(594.2,57.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAnAZQgjglgyAFQgJABAAgKQAAgKAJgBQAdgDAYALQAbAKATATQAHAHgHAIQgEADgDAAQgEAAgDgDg");
	this.shape_88.setTransform(584.7,57.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("Ag2AJQgDgJAJgCQAugPAwABQAKABAAAKQAAAIgKgBQgugBgqAPIgFABQgGAAgBgIg");
	this.shape_89.setTransform(570,44.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AhJA3QgJgDADgJQAOgwAtgcQAqgcAzAIQAKACgDAJQgCAKgKgCQgrgGgkAYQglAWgMAqQgCAHgGAAIgFAAg");
	this.shape_90.setTransform(578.2,38.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("ABNAqQgVgqgugSQgtgSgsAUQgJAEgFgJQgFgIAJgEQA0gYA0AUQA3ATAYAyQAEAIgIAFQgDACgDAAQgEAAgDgFg");
	this.shape_91.setTransform(561.4,39.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAnAaQgkgggxgCQgJAAAAgKQAAgKAJAAQA5ACAqAmQAHAHgHAHQgEADgDAAQgEAAgDgDg");
	this.shape_92.setTransform(244.7,219.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AhGARQgFgIAIgGQAegVAlgDQAjgCAhASQAIAFgFAHQgFAIgIgEQgdgOgdADQgfAAgaAUQgDACgDAAQgEAAgDgFg");
	this.shape_93.setTransform(253.8,216);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAlAtQgFgggYgUQgWgXgggBQgKgBAAgKQAAgKAKABQAnACAcAaQAeAYAFAnQABAJgJADIgEAAQgGAAgBgHg");
	this.shape_94.setTransform(241.4,212.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAsAWQgsgVgxgDQgJgBAAgKQAAgKAJABQA1AGAyAUQAJAEgFAJQgEAGgFAAIgFgBg");
	this.shape_95.setTransform(213,213.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AhDAPQgFgJAIgGQAegSAigBQAjgBAeATQAIADgEAJQgFAJgJgFQgagPgdAAQgcAAgaASQgDACgDAAQgEAAgDgFg");
	this.shape_96.setTransform(219.8,209.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("ABIAxQgZgogpgUQgmgWgwAAQgKAAAAgKQAAgKAKAAQA1AAArAZQAtAYAcArQAFAIgIAFQgEACgDAAQgEAAgDgFg");
	this.shape_97.setTransform(204.8,205.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAgAWQgggZgogCQgJAAAAgKQAAgKAJAAQAxACAmAfQAHAHgHAHQgEAEgEAAQgDAAgEgEg");
	this.shape_98.setTransform(231.4,198.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AhcAmQgJgGAFgIQAeguA5gNQA4gMAvAhQAIAFgFAJQgFAHgIgGQgpgagvAKQgxAKgZAoQgDAEgFAAQgDAAgDgBg");
	this.shape_99.setTransform(241.2,193);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AA0A1QgCgsgjgbQghgdgsAFQgKABAAgKQAAgKAKgBQA0gGAnAkQApAhACA0QABAKgKAAQgKAAgBgKg");
	this.shape_100.setTransform(225,189.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgvACQAAgIAKgBQAlgFAlACQAKABABAJQgBAJgKgBQglgCglAFIgCAAQgIAAAAgJg");
	this.shape_101.setTransform(480.5,384.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AglAVQgCgbAZgPQAWgPAZANQAJAFgFAIQgFAJgJgFQgQgIgLAKQgOAHABASQABAJgKAAQgKAAgBgJg");
	this.shape_102.setTransform(485.1,380.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAhARQgHgSgZgDQgNgCgbAFQgKABgCgJQgDgKAJgCQAkgFAUAFQAfAHAKAaQAEAJgKADIgFABQgGAAgCgIg");
	this.shape_103.setTransform(477.5,381.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgiAQQgFgJAIgEIA0gXQAJgEAFAJQAFAJgJADIg0AYIgFABQgFAAgDgGg");
	this.shape_104.setTransform(460.3,388.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgdAZQgDgWAPgRQAQgTAVABQAKAAAAAKQAAAKgKAAQgNgBgIALQgKAJACANQABAJgJADIgEABQgGAAgCgIg");
	this.shape_105.setTransform(462.9,383.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAfASQgUgQgLgCQgIgCgIACQgGADgJAJQgHAHgGgHQgHgHAGgFQAWgXAXADQARACAcAWQAHAHgHAHQgDADgEAAQgEAAgDgDg");
	this.shape_106.setTransform(456.4,384.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgfARQgHgHAHgHQAZgXAgAAQAJAAAAAKQAAAKgJAAQgaAAgRARQgDAEgDAAQgEAAgEgEg");
	this.shape_107.setTransform(467.4,372.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AglARQACgZAXgMQAVgNAXAOQAJAFgFAJQgFAHgJgDQgNgIgLAGQgOAFgBAPQAAAKgKAAQgKAAAAgKg");
	this.shape_108.setTransform(470.8,368.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAWAOQgJgKgNgCQgLgCgMAHQgIAFgFgIQgFgHAIgFQARgLATADQAUADANANQAHAHgHAHQgEAEgDAAQgEAAgDgEg");
	this.shape_109.setTransform(464.5,369.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["#B3F0FD","#7BB9E4"],[0.016,0.945],-10.1,-505.6,0,-10.1,-505.6,304.1).s().p("Eg6kBfTMAAAi+lMB1JAAAMAAAC+lg");
	this.shape_110.setTransform(410.8,609.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},110).wait(58));

	// 图层 2
	this.instance_44 = new lib.s1722s();
	this.instance_44.setTransform(34.4,94.6);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(60).to({_off:false},0).wait(108));

	// 第二个背景
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E9F8FE").s().p("Eg6lBfTMAAAi+lMB1LAAAMAAAC+lg");
	this.shape_111.setTransform(374.4,609.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_111).wait(168));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.7,750,1220);


// stage content:
(lib.qj_s17 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.s17();
	this.instance.setTransform(398.1,627.9,1,1,0,0,0,398.1,627.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(374.4,609.3,797.4,1257.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;