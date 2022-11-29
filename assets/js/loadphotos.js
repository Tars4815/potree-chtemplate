// import * as THREE from "./libs/three.js/build/three.module.js";

const cameraParamsPath = "./img_selected/arsenale/calib_anafi_fullRes.xml";
const imageParamsPath = "./img_selected/arsenale/imagesEO.txt";

Potree.OrientedImageLoader.load(cameraParamsPath, imageParamsPath, viewer).then(images => {
    images.visible = true;
    viewer.scene.addOrientedImages(images);
});

const cameraParamsPath2 = "./img_selected/arsenale22/calib_anafi_fullRes.xml";
const imageParamsPath2 = "./img_selected/arsenale22/imagesEO2022.txt";

Potree.OrientedImageLoader.load(cameraParamsPath2, imageParamsPath2, viewer).then(images2 => {
    images2.visible = false;
    viewer.scene.addOrientedImages(images2);
});

const cameraParamsPath3 = "./img_selected/arsenale21/calib_anafi_fullRes.xml";
const imageParamsPath3 = "./img_selected/arsenale21/imagesEO.txt";

Potree.OrientedImageLoader.load(cameraParamsPath3, imageParamsPath3, viewer).then(images3 => {
    images3.visible = false;
    viewer.scene.addOrientedImages(images3);
});