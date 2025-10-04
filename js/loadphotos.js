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
 * Load all oriented image sets into the viewer
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