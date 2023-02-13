let image = new Image();
image.src = 'my pic.jpeg';

image.onload = function() {
    let width = image.width;
    let height = image.height;
    console.log("Width: " + width + ", Height: " + height);
};
