import * as $ from "jquery";

function createToggleableLayers(n, size, canvasContainer, toggleContainer) {
	var cs = [];
	for (var i = 0; i < n; i++) {
        var cLayer = $(document.createElement('CANVAS'))
            .attr("width", size)
            .attr("height", size)
            .attr("id", "layer_" + i)
            .addClass("canvasLayer");

	    var toggle = $(document.createElement('INPUT'))
	        .attr('id', "toggle_" + i)
	        .attr('type', 'checkbox')
	        .data('target', '#' + cLayer.attr('id'))
	        .click(function() {
                $($(this).data('target')).css('display', $(this).prop('checked') ? "none" : "");
	        });
        toggle.data();
		
        var label = $(document.createElement('LABEL'))
            .attr('for', toggle.attr('id'))
            .html("Level " + i);
		
		toggleContainer.append(label);
		toggleContainer.append(toggle);
		canvasContainer.append(cLayer);
		
		cs = cs.concat(cLayer.get());
	}
	
	return cs;
}

function createColourLegend(container, colourFunction, width, height) {
    var canvas = <HTMLCanvasElement> document.createElement('CANVAS');
    canvas.width = width;
    canvas.height = height;

    container.append(canvas);
    var ctx = canvas.getContext('2d');

    var pixelLine = [];
    for (let i = 0; i < canvas.width; i++) {
        pixelLine = pixelLine.concat(colourFunction(i / 999).map(x => Math.floor(x))).concat([255]);
    }

    var data = [];
    for (let i = 0; i < canvas.height; i++) {
        data = data.concat(pixelLine);
    }

    var img = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < img.data.length; i++) {
        img.data[i] = data[i];
    }

    //img.data = data; can't do this for some reason...
    ctx.putImageData(img, 0, 0);
}

function render(ctx, drawDict) {
    for (let col in drawDict) {
        ctx.fillStyle = "#" + col;
        var rects = drawDict[col];
        for (var i = 0; i < rects.length; i++) {
            var rect = rects[i];
            ctx.fillRect(rect[0], rect[1], rect[2], rect[3]);
        }
    }
}

export { createToggleableLayers, createColourLegend, render };