/**
 * @file loadphotos.js
 * @description This script is responsible for loading and configuring oriented image sets 
 *              into the Potree viewer. It defines the image set configurations and provides 
 *              a function to load all oriented images into the viewer.
 * @author Federica Gaspari (tars4815)
 */

/**
 * @typedef {Object} ImageSet
 * @property {string} cameraParams - The file path to the camera parameters XML file.
 * @property {string} imageParams - The file path to the image parameters text file.
 */

// Image set configurations
const imageSets = [
    {
        cameraParams: '../assets/img_selected/arsenale/calib_anafi_fullRes.xml',
        imageParams: '../assets/img_selected/arsenale/imagesEO.txt'
    },
    {
        cameraParams: '../assets/img_selected/arsenale22/calib_anafi_fullRes.xml',
        imageParams: '../assets/img_selected/arsenale22/imagesEO2022.txt'
    },
    {
        cameraParams: '../assets/img_selected/arsenale21/calib_anafi_fullRes.xml',
        imageParams: '../assets/img_selected/arsenale21/imagesEO.txt'
    }
];

/**
 * Loads all oriented image sets into the Potree viewer.
 * 
 * This function iterates over the predefined image sets, loads each set using the 
 * Potree.OrientedImageLoader, and adds the loaded images to the viewer's scene. 
 * The images are initially set to be invisible.
 * 
 * @function
 * @returns {void}
 */
function loadAllOrientedImages() {
    const loadPromises = imageSets.map(set => 
        Potree.OrientedImageLoader.load(set.cameraParams, set.imageParams, viewer)
            .then(images => {
                images.visible = false;
                viewer.scene.addOrientedImages(images);
                return images;
            })
    );
    
    Promise.all(loadPromises)
        .then(() => console.log(`Loaded ${imageSets.length} image sets`))
        .catch(error => console.error('Error loading images:', error));
}

// Load all image sets on page load
loadAllOrientedImages();