// import * as THREE from "./libs/three.js/build/three.module.js";

const cameraParamsPath = "./assets/img_selected/arsenale/calib_anafi_fullRes.xml";
const imageParamsPath = "./assets/img_selected/arsenale/imagesEO.txt";

Potree.OrientedImageLoader.load(cameraParamsPath, imageParamsPath, viewer).then(images => {
    images.visible = false;
    viewer.scene.addOrientedImages(images);
});

const cameraParamsPath2 = "./assets/img_selected/arsenale22/calib_anafi_fullRes.xml";
const imageParamsPath2 = "./assets/img_selected/arsenale22/imagesEO2022.txt";

Potree.OrientedImageLoader.load(cameraParamsPath2, imageParamsPath2, viewer).then(images2 => {
    images2.visible = false;
    viewer.scene.addOrientedImages(images2);
});

const cameraParamsPath3 = "./assets/img_selected/arsenale21/calib_anafi_fullRes.xml";
const imageParamsPath3 = "./assets/img_selected/arsenale21/imagesEO.txt";

Potree.OrientedImageLoader.load(cameraParamsPath3, imageParamsPath3, viewer).then(images3 => {
    images3.visible = false;
    viewer.scene.addOrientedImages(images3);
});