/* Annotation definitions */
{
    // Bastione San Benedetto
    let Titolo0 = $(`
                <span>
                    <img src="./libs/potree/resources/icons/orbit_controls.svg" name="action_set_name" class="annotation-action-icon" />
                    <!---Bastione San Benedetto--->
                    <img src="./libs/potree/resources/icons/orbit_controls.svg" name="action_set_camera" class="annotation-action-icon" />
                </span>
                `);
    Titolo0.find("img[name=action_set_name]").click((event) => {
        changeHotspotName("San Benedetto");
        scenears.annotations.children[3].visible = false;
        scenears.annotations.children[4].visible = false;
        scenears.annotations.children[5].visible = false;
        scenears.annotations.children[6].visible = false;
        scenears.annotations.children[7].visible = false;
        scenears.annotations.children[8].visible = false;
        scenears.annotations.children[9].visible = false;
        scenears.annotations.children[10].visible = false;
    });
    /* MODIFICA TEST */
    Titolo0.find("img[name=action_set_camera]").click(() => {
        console.log('Hai cliccato!');
        let element = viewer.scene.orientedImages[0].images[0];
        console.log(element);
        // const orientedImageControls = new Potree.OrientedImageControls(viewer);
        viewer.scene.view.setView(viewer.scene.orientedImages[0].images[0].position.clone(), viewer.scene.orientedImages[0].images[0].mesh.position.clone(), 500, () => {
            Potree.OrientedImageControls.capture(element);
        });
        //viewer.scene.view.setView(viewer.scene.orientedImages[0].images[0].position.clone(), viewer.scene.orientedImages[0].images[0].mesh.position.clone(), 500, //() => {
        //viewer.scene.orientedImageControls.capture(viewer.scene.orientedImages[0].images[0]);
        //}
        console.log(element.id);
        console.log('Funziona!');
    });
    /* Fine modifica Test */
    let nota = new Potree.Annotation({
        position: [553516.631, 4988714.121, 104.338],
        title: Titolo0,
        cameraPosition: [553451.045, 4988694.422, 140.490],
        cameraTarget: [553516.631, 4988714.121, 104.338],
        description: "Prova prova prova"
    })
    nota.visible = true;
    scenears.annotations.add(nota);
    Titolo0.toString = () => "Bastione San Benedetto";

}
{
    // Bastione San Giovanni
    let Titolo2 = $(`
                <span>
                    <img src="./libs/potree/resources/icons/orbit_controls.svg" name="action_set_name" class="annotation-action-icon" />
                    <!---Bastione San Giovanni--->
                </span>
                `);
    Titolo2.find("img[name=action_set_name]").click((event) => {
        changeHotspotName("San Giovanni");
        scenears.annotations.children[3].visible = false;
        scenears.annotations.children[4].visible = false;
        scenears.annotations.children[5].visible = false;
        scenears.annotations.children[6].visible = false;
        scenears.annotations.children[7].visible = false;
        scenears.annotations.children[8].visible = false;
        scenears.annotations.children[9].visible = false;
        scenears.annotations.children[10].visible = false;
    });
    let nota2 = new Potree.Annotation({
        position: [553699.160, 4988620.828, 105.011],
        title: Titolo2,
        cameraPosition: [553708.348, 4988541.235, 145],
        cameraTarget: [553699.160, 4988620.828, 105.011],
        description: "Prova prova prova"
    })
    nota2.visible = true;
    scenears.annotations.add(nota2);
    Titolo2.toString = () => "Bastione San Giovanni";
}
{
    // Bastione San Giacomo
    let Titolo = $(`
                <span>
                    <img src="./libs/potree/resources/icons/orbit_controls.svg" name="action_set_name" class="annotation-action-icon" />
                    <!---Bastione San Giacomo--->
                    <img src="./libs/potree/resources/icons/goto.svg" name="action_set_scene" class="annotation-action-icon" style="filter: invert(1);"/>
                </span>
                `);
    Titolo.find("img[name=action_set_name]").click((event) => {
        changeHotspotName("San Giacomo");
    });
    Titolo.find("img[name=action_set_scene]").click((event) => {
        event.stopPropagation();
        changeHotspotName("Indoor View")
        // viewer.setScene(indoor);
        scenears.annotations.children[3].moveHere(scenears.camera);
        scenears.annotations.children[3].visible = true;
        scenears.annotations.children[4].visible = true;
        scenears.annotations.children[5].visible = true;
        scenears.annotations.children[6].visible = true;
        scenears.annotations.children[7].visible = true;
        scenears.annotations.children[8].visible = true;
        scenears.annotations.children[9].visible = true;
        scenears.annotations.children[10].visible = true;
    });
    Titolo.toString = () => "San Giacomo";

    let nota3 = new Potree.Annotation({
        position: [553430.471, 4988914.868, 103.226],
        title: Titolo,
        cameraPosition: [553333.7713011784, 4988883.975343259, 166.10804103291153,],
        cameraTarget: [553430.471, 4988914.868, 103.226],
        description: 'Prova prova prova'
    });

    nota3.visible = true;
    scenears.annotations.add(nota3);
}
{
    // Indoor
    let Titolo4 = $('<span>Start exploring! <input type="button" name="outdoor" value="Go back outdoor!"/></span > ')
    Titolo4.find("input[name=outdoor]").click((event) => {
        event.stopPropagation();
        changeHotspotName("San Giacomo");
        scenears.annotations.children[2].moveHere(scenears.camera);
        scenears.annotations.children[3].visible = false;
        scenears.annotations.children[4].visible = false;
        scenears.annotations.children[5].visible = false;
        scenears.annotations.children[6].visible = false;
        scenears.annotations.children[7].visible = false;
        scenears.annotations.children[8].visible = false;
        scenears.annotations.children[9].visible = false;
        scenears.annotations.children[10].visible = false;
    });
    Titolo4.toString = () => "Start exploring!";
    let nota4 = new Potree.Annotation({
        position: [553471.056, 4988913.293, 95.054],
        title: Titolo4,
        cameraPosition: [553474.7425516201, 4988912.090928567, 96],
        cameraTarget: [553471.056, 4988913.293, 96],
        description: 'Welcome to the indoor portion of the San Giacomo rampart!<br>This space is the site of a permanent exhibition of historic cartography and documents about the evolution of the city of Piacenza.<br>You can start exploring the two wings of this space by clicking on the "Tour Right" and "Tour Left" annotations.<br>The indoor point cloud has been completely acquired through TLS scans with a CAM2 Focus M70.'
    })
    nota4.visible = false;
    scenears.annotations.add(nota4);
}
{
    // Tour Left
    let Titolo5 = $(`
                <span>
                    Tour Left
                    <img src="./libs/potree/resources/icons/goto.svg" name="action_set_animation" class="annotation-action-icon" style="filter: invert(1);"/>
                    </span>
                `);
    const elPlay = Titolo5.find("img[name=action_set_animation]");
    elPlay.click(() => {
        event.stopPropagation();
        console.log('Hai cliccato sulla nota');
        animation.play();
    });
    Titolo5.toString = () => "Tour Left";
    let nota5 = new Potree.Annotation({
        position: [553468.485, 4988909.747, 95.010],
        title: Titolo5,
        cameraPosition: [553471.5649587561, 4988912.824383096, 96.74929992934102],
        cameraTarget: [553470.9753199244, 4988912.469004575, 96.60109365898464],
        description: 'Prova prova prova'
    })
    nota5.visible = false;
    scenears.annotations.add(nota5);
}
{
    // Tour Right
    let Titolo6 = $(`
                <span>
                    Tour Right
                    <img src="./libs/potree/resources/icons/goto.svg" name="action_set_animation2" class="annotation-action-icon" style="filter: invert(1);"/>
                    
                    </span>
                `);
    const elPlay2 = Titolo6.find("img[name=action_set_animation2]");
    elPlay2.click(() => {
        event.stopPropagation();
        console.log('Hai cliccato sulla nota');
        animation2.play();
    });
    Titolo6.toString = () => "Tour Right";
    let nota6 = new Potree.Annotation({
        position: [553470.899, 4988918.329, 94.915],
        title: Titolo6,
        cameraPosition: [553471.5649587561, 4988912.824383096, 96.74929992934102],
        cameraTarget: [553470.899, 4988918.329, 95.915],
        description: 'Prova prova prova'
    })
    nota6.visible = false;
    scenears.annotations.add(nota6);
}
{
    // Old Piacenza plastico
    let Titolo7 = $(`
                <span>
                    <img src="./libs/potree/resources/icons/orbit_controls.svg" name="anno_panel1" class="annotation-action-icon"/>
                </span>
                `);
    const elAnno1 = Titolo7.find("img[name=anno_panel1]");
    elAnno1.click(() => {
        event.stopPropagation();
        console.log('Hai cliccato sulla nota');
        $("#anno1").fadeIn();
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "0.5";
    });
    var annoPanel1 = document.getElementById('anno1');
    annoPanel1.addEventListener('click', function () {
        $("#anno1").fadeOut();
        //reset opacity of parent page
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "1";

    });
    Titolo7.toString = () => "Plastico Piacenza";
    let nota7 = new Potree.Annotation({
        position: [553468.241, 4988914.587, 96.098],
        title: Titolo7,
        cameraPosition: [553469.8194153706, 4988913.956457145, 97.93433745029579],
        cameraTarget: [553469.779872537, 4988913.96702074, 97.87532042534758],
        description: '<img src="assets/anno-img/piacenza-plastico.jpg" alt="Old Piacenza Plastico" title="Old Piacenza Plastico" width="270px">'
    })
    nota7.visible = false;
    scenears.annotations.add(nota7);
}
{
    // Old Piacenza map
    let Titolo8 = $(`
                <span>
                    <img src="./libs/potree/resources/icons/orbit_controls.svg" name="anno_panel2" class="annotation-action-icon" "/>
                </span>
                `);
    const elAnno2 = Titolo8.find("img[name=anno_panel2]");
    elAnno2.click(() => {
        event.stopPropagation();
        console.log('Hai cliccato sulla nota');
        $("#anno2").fadeIn();
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "0.5";
    });
    var annoPanel2 = document.getElementById('anno2');
    annoPanel2.addEventListener('click', function () {
        $("#anno2").fadeOut();
        //reset opacity of parent page
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "1";

    });
    Titolo8.toString = () => "Old map of Piacenza";
    let nota8 = new Potree.Annotation({
        position: [553469.053, 4988920.173, 96.870],
        title: Titolo8,
        cameraPosition: [553471.1851376052, 4988920.489146103, 97.20975445747173],
        cameraTarget: [553470.2150590685, 4988920.39096358, 96.99985462186642],
        description: '<img src="assets/anno-img/piacenza-map.jpg" alt="Old Piacenza Map" title="Old Piacenza Map" width="270px">'
    })
    nota8.visible = false;
    scenears.annotations.add(nota8);
}
{
    // Armor 1
    let Titolo9 = $(`
                <span>
                    <img src="./libs/potree/resources/icons/orbit_controls.svg" name="anno_panel3" class="annotation-action-icon" "/>
                </span>
                `);
    const elAnno3 = Titolo9.find("img[name=anno_panel3]");
    elAnno3.click(() => {
        event.stopPropagation();
        console.log('Hai cliccato sulla nota');
        $("#anno3").fadeIn();
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "0.5";
    });
    var annoPanel3 = document.getElementById('anno3');
    annoPanel3.addEventListener('click', function () {
        $("#anno3").fadeOut();
        //reset opacity of parent page
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "1";

    });
    Titolo9.toString = () => "Armor 1";
    let nota9 = new Potree.Annotation({
        position: [553467.122, 4988906.703, 96.305],
        title: Titolo9,
        cameraPosition: [553465.5320448811, 4988908.552441066, 97.55644288528843],
        cameraTarget: [553467.3375243957, 4988906.725013733, 96.24520099166907],
        description: '<img src="assets/anno-img/armor1.jpg" alt="Medieval armor" title="Medieval Armor" width="270px">'
    })
    nota9.visible = false;
    scenears.annotations.add(nota9);
}
{
    // Armor 2
    let Titolo10 = $(`
                <span>
                    <img src="./libs/potree/resources/icons/orbit_controls.svg" name="anno_panel4" class="annotation-action-icon" "/>
                </span>
                `);
    const elAnno4 = Titolo10.find("img[name=anno_panel4]");
    elAnno4.click(() => {
        event.stopPropagation();
        console.log('Hai cliccato sulla nota');
        $("#anno4").fadeIn();
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "0.5";
    });
    var annoPanel4 = document.getElementById('anno4');
    annoPanel4.addEventListener('click', function () {
        $("#anno4").fadeOut();
        //reset opacity of parent page
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "1";

    });
    Titolo10.toString = () => "Armor 2";
    let nota10 = new Potree.Annotation({
        position: [553464.626, 4988905.101, 96.204],
        title: Titolo10,
        cameraPosition: [553463.4076802338, 4988907.264894535, 96.3396021385902],
        cameraTarget: [553463.9388958209, 4988906.130368572, 96.05896626293325],
        description: '<img src="assets/anno-img/armor2.jpg" alt="Medieval armor" title="Medieval Armor" width="270px">'
    })
    nota10.visible = false;
    scenears.annotations.add(nota10);
}
{
    // Armor 3
    let Titolo11 = $(`
                <span>
                    <img src="./libs/potree/resources/icons/orbit_controls.svg" name="anno_panel5" class="annotation-action-icon" "/>
                </span>
                `);
    const elAnno5 = Titolo11.find("img[name=anno_panel5]");
    elAnno5.click(() => {
        event.stopPropagation();
        console.log('Hai cliccato sulla nota');
        $("#anno5").fadeIn();
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "0.5";
    });
    var annoPanel5 = document.getElementById('anno5');
    annoPanel5.addEventListener('click', function () {
        $("#anno5").fadeOut();
        //reset opacity of parent page
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "1";

    });
    Titolo11.toString = () => "Armor 3";

    let nota11 = new Potree.Annotation({
        position: [553462.022, 4988903.801, 96.413],
        title: Titolo11,
        cameraPosition: [553463.4076802338, 4988907.264894535, 96.3396021385902],
        cameraTarget: [553463.9388958209, 4988906.130368572, 96.05896626293325],
        description: '<img src="assets/anno-img/armor3.jpg" alt="Medieval armor" title="Medieval Armor" width="270px">'
    })

    nota11.visible = false;
    scenears.annotations.add(nota11);
}
