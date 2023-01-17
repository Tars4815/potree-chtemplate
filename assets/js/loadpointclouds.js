window.viewer = new Potree.Viewer(document.getElementById("potree_render_area"));

viewer.setEDLEnabled(true);
viewer.setFOV(60);
viewer.setPointBudget(2_000_000);

viewer.loadSettingsFromURL();
viewer.setDescription(`Explore the old Farnese Castle in Piacenza!`);

viewer.loadGUI(() => {
    viewer.setLanguage('en');
    $("#menu_tools").next().show();
    let section = $(`<h3 id="menu_meta" class="accordion-header ui-widget"><span>Credits</span></h3><div class="accordion-content ui-widget pv-menu-list"></div>`);
    let content = section.last();
    content.html(`
    <div class="pv-menu-list">
        Survey and images by Francesco Ioli e Federico Barbieri.<br> Data integration in the Potree environment by Federica Gaspari.<br> Historical documentation and original thesis project by Michele Dondi and Clara Riveri.
        <br>
    </div>
    `);
    content.hide();
    section.first().click(() => content.slideToggle());
    section.insertBefore($('#menu_appearance'));
    $("#menu_filters").hide();
    $("#menu_appearance").hide();
});

let scenears = new Potree.Scene();
let indoor = new Potree.Scene();

viewer.setScene(scenears);

Potree.loadPointCloud("./pointclouds/arsenaletot/metadata.json", "Arsenale", e => {
    let scene = viewer.scene;
    let pointcloud = e.pointcloud;
    let material = pointcloud.material;
    pointcloud.projection = "+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs +type=crs";
    material.size = 1;
    material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
    material.shape = Potree.PointShape.CIRCLE;
    material.activeAttributeName = "rgba";

    scenears.addPointCloud(pointcloud);
    viewer.setFrontView()

});

Potree.loadPointCloud("./pointclouds/indoor/metadata.json", "Indoor", e => {
    let pointcloud = e.pointcloud;
    let material = pointcloud.material;
    pointcloud.projection = "+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs +type=crs";
    material.size = 1;
    material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
    material.shape = Potree.PointShape.CIRCLE;
    material.activeAttributeName = "rgba";

    scenears.addPointCloud(pointcloud);
    scenears.view.position.set(553471.5649587561, 4988912.824383096, 96.74929992934102);
    scenears.view.lookAt(new THREE.Vector3(553470.9753199244, 4988912.469004575, 96.60109365898464));
});