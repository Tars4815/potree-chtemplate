// Initialize Potree Viewer
window.viewer = new Potree.Viewer(document.getElementById("potree_render_area"));
viewer.setEDLEnabled(true);
viewer.setFOV(60);
viewer.setPointBudget(2_000_000);
viewer.loadSettingsFromURL();
viewer.setDescription(`Explore the old Farnese Castle in Piacenza!`);

// Initialize scenes
let scenears = new Potree.Scene();
let indoor = new Potree.Scene();
viewer.setScene(scenears);

// Point cloud configurations
const pointCloudConfigs = [
    {
        path: './pointclouds/arsenaletot/metadata.json',
        name: 'Arsenale',
        scene: scenears,
        setView: () => viewer.setFrontView()
    },
    {
        path: './pointclouds/indoor/metadata.json',
        name: 'Indoor',
        scene: scenears,
        setView: () => {
            scenears.view.position.set(553471.5649587561, 4988912.824383096, 96.74929992934102);
            scenears.view.lookAt(new THREE.Vector3(553470.9753199244, 4988912.469004575, 96.60109365898464));
        }
    }
];

// Default material settings for all point clouds
const defaultMaterialSettings = {
    size: 1,
    pointSizeType: Potree.PointSizeType.ADAPTIVE,
    shape: Potree.PointShape.CIRCLE,
    activeAttributeName: 'rgba'
};

const defaultProjection = '+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs +type=crs';

/**
 * Load a single point cloud with configuration
 * @param {Object} config - Point cloud configuration
 */
function loadPointCloud(config) {
    Potree.loadPointCloud(config.path, config.name, e => {
        const pointcloud = e.pointcloud;
        const material = pointcloud.material;
        
        // Set projection
        pointcloud.projection = defaultProjection;
        
        // Apply material settings
        Object.assign(material, defaultMaterialSettings);
        
        // Add to scene
        config.scene.addPointCloud(pointcloud);
        
        // Set view if specified
        if (config.setView) {
            config.setView();
        }
        
        console.log(`Loaded point cloud: ${config.name}`);
    });
}

/**
 * Load all point clouds
 */
function loadAllPointClouds() {
    pointCloudConfigs.forEach(config => loadPointCloud(config));
}

// Load GUI with custom settings
viewer.loadGUI(() => {
    viewer.setLanguage('en');
    $("#menu_tools").next().show();
    
    // Add credits section
    const section = $(`
        <h3 id="menu_meta" class="accordion-header ui-widget">
            <span>Credits</span>
        </h3>
        <div class="accordion-content ui-widget pv-menu-list"></div>
    `);
    
    const content = section.last();
    content.html(`
        <div class="pv-menu-list">
            Survey and images by Francesco Ioli e Federico Barbieri.<br>
            Data integration in the Potree environment by Federica Gaspari.<br>
            Historical documentation and original thesis project by Michele Dondi and Clara Riveri.
            <br>
        </div>
    `);
    
    content.hide();
    section.first().click(() => content.slideToggle());
    section.insertBefore($('#menu_appearance'));
    
    // Hide unnecessary menus
    $("#menu_filters").hide();
    $("#menu_appearance").hide();
});

// Load all point clouds on initialization
loadAllPointClouds();