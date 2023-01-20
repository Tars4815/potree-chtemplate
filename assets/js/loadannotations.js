/* Annotation definitions */
{
    // Bastione San Benedetto
    let Titolo0 = $(`
                <span>
                    <img src="./libs/potree/resources/icons/orbit_controls.svg" name="action_set_name" class="annotation-action-icon" />
                    <!---Bastione San Benedetto--->
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
        scenears.annotations.children[11].visible = false;
        scenears.annotations.children[12].visible = false;
    });
    let nota = new Potree.Annotation({
        position: [553516.631, 4988714.121, 104.338],
        title: Titolo0,
        cameraPosition: [553451.045, 4988694.422, 140.490],
        cameraTarget: [553516.631, 4988714.121, 104.338],
        description: "<b>San Benedetto Bastion</b><br>----<br>The bastion of San Benedetto (St. Benedict) is the only one with an eaves and the only survivor of the city's 16th-century rampart wall. Of the two original auricles, the one facing the Porta Sant'Antonio gate was demolished between the end of the last century and the beginning of the current one for the construction of the railway line connecting with the state railroad yard (involving the Porta del Soccorso). The surviving auricle, on the other hand, has remained almost intact, on which it is possible to note the presence of a burrow at the base, made in years yet to be determined, but thanks to which it was possible to observe its internal structure and note its height of about 12 meters."
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
    const elGiovanni = Titolo2.find("img[name=action_set_name]");
    elGiovanni.click(() => {
        changeHotspotName("San Giovanni");
        scenears.annotations.children[3].visible = false;
        scenears.annotations.children[4].visible = false;
        scenears.annotations.children[5].visible = false;
        scenears.annotations.children[6].visible = false;
        scenears.annotations.children[7].visible = false;
        scenears.annotations.children[8].visible = false;
        scenears.annotations.children[9].visible = false;
        scenears.annotations.children[10].visible = false;
        scenears.annotations.children[11].visible = false;
        scenears.annotations.children[12].visible = false;
        $("#anno10").fadeIn();
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "0.5";
    });
    var annoPanel10 = document.getElementById('anno10');
    /*annoPanel10.addEventListener('click', function () {
        $("#anno10").fadeOut();
        //reset opacity of parent page
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "1";
    });*/
    let nota2 = new Potree.Annotation({
        position: [553699.160, 4988620.828, 105.011],
        title: Titolo2,
        cameraPosition: [553708.348, 4988541.235, 145],
        cameraTarget: [553699.160, 4988620.828, 105.011],
        description: "<b>San Giovanni Bastion</b><br>----<br>Another item of considerable interest is certainly the finding of spaces interiors and basements in both ramparts, rooms that present both significant damage but also spaces in excellent condition, in which the destinations of the structures of the bastions as warehouses and the constructions of false walls, had resulted in the complete concealment the view of the entrance to the dungeon (up to 10 m below the level of the street)"
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
        scenears.annotations.children[3].moveHere(scenears.camera);
        scenears.annotations.children[0].visible = false;
        scenears.annotations.children[1].visible = false;
        scenears.annotations.children[2].visible = false;
        scenears.annotations.children[3].visible = true;
        scenears.annotations.children[4].visible = true;
        scenears.annotations.children[5].visible = true;
        scenears.annotations.children[6].visible = true;
        scenears.annotations.children[7].visible = true;
        scenears.annotations.children[8].visible = false;
        scenears.annotations.children[9].visible = false;
        scenears.annotations.children[10].visible = false;
        scenears.annotations.children[11].visible = false;
        scenears.annotations.children[12].visible = false;
        scenears.annotations.children[13].visible = false;
        scenears.annotations.children[14].visible = false;
        scenears.annotations.children[15].visible = true;
        scenears.annotations.children[16].visible = true;
    });
    Titolo.toString = () => "San Giacomo";

    let nota3 = new Potree.Annotation({
        position: [553430.471, 4988914.868, 103.226],
        title: Titolo,
        cameraPosition: [553333.7713011784, 4988883.975343259, 166.10804103291153,],
        cameraTarget: [553430.471, 4988914.868, 103.226],
        description: '<b>San Giacomo Bastion</b><br>----<br>Differently from the twin San Giovanni bastion, it has been affected by additional military intervention. Indeed, on the upper part merlons have been added while an underground shelter, adopted as bomb shelter during World War, is still present and partially accessible through a lateral external access.<br>The indoor space is visitable.'
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
        scenears.annotations.children[0].visible = true;
        scenears.annotations.children[1].visible = true;
        scenears.annotations.children[2].visible = true;
        scenears.annotations.children[3].visible = false;
        scenears.annotations.children[4].visible = false;
        scenears.annotations.children[5].visible = false;
        scenears.annotations.children[6].visible = false;
        scenears.annotations.children[7].visible = false;
        scenears.annotations.children[8].visible = false;
        scenears.annotations.children[9].visible = false;
        scenears.annotations.children[10].visible = false;
        scenears.annotations.children[11].visible = false;
        scenears.annotations.children[12].visible = false;
        scenears.annotations.children[13].visible = false;
        scenears.annotations.children[14].visible = false;
        scenears.annotations.children[15].visible = false;
        scenears.annotations.children[16].visible = false;
    });
    Titolo4.toString = () => "Start exploring!";
    let nota4 = new Potree.Annotation({
        position: [553471.056, 4988913.293, 95.054],
        title: Titolo4,
        cameraPosition: [553474.7425516201, 4988912.090928567, 96],
        cameraTarget: [553471.056, 4988913.293, 96],
        description: '<b>Welcome to the indoor portion of the San Giacomo rampart!</b><br>----<br>This space is the site of a permanent exhibition of historic cartography and documents about the evolution of the city of Piacenza.<br>You can start exploring the two wings of this space by clicking on the <i>"Tour Right"</i> and <i>"Tour Left"</i> annotations.<br>The indoor point cloud has been completely acquired through TLS scans with a CAM2 Focus M70.'
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
        scenears.annotations.children[8].visible = true;
        scenears.annotations.children[9].visible = true;
        scenears.annotations.children[10].visible = true;
        scenears.annotations.children[11].visible = true;
        scenears.annotations.children[13].visible = true;
    });
    Titolo5.toString = () => "Tour Left";
    let nota5 = new Potree.Annotation({
        position: [553468.485, 4988909.747, 95.010],
        title: Titolo5,
        cameraPosition: [553471.5649587561, 4988912.824383096, 96.74929992934102],
        cameraTarget: [553470.9753199244, 4988912.469004575, 96.60109365898464],
        description: 'Click on the icon and walk through the indoor left wing of the bastion...<br>----<br>You could also learn more about some <b>hidden treasures</b>!'
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
        scenears.annotations.children[12].visible = true;
        scenears.annotations.children[14].visible = true;
    });
    Titolo6.toString = () => "Tour Right";
    let nota6 = new Potree.Annotation({
        position: [553470.899, 4988918.329, 94.915],
        title: Titolo6,
        cameraPosition: [553471.5649587561, 4988912.824383096, 96.74929992934102],
        cameraTarget: [553470.899, 4988918.329, 95.915],
        description: 'Click on the icon and walk through the indoor left wing of the bastion...<br>----<br>You may discover a <b>secret passage</b>!'
    })
    nota6.visible = false;
    scenears.annotations.add(nota6);
}
{
    // Old Piacenza city plastico
    let Titolo7 = $(`
                <span>
                    <img src="./libs/potree/resources/icons/orbit_controls.svg" name="anno_panel1" class="annotation-action-icon"/>
                </span>
                `);
    const elAnno1 = Titolo7.find("img[name=anno_panel1]");
    elAnno1.click(() => {
        event.stopPropagation();
        console.log('Hai cliccato sulla nota');
        scenears.annotations.children[6].moveHere(scenears.camera);
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
        description: '<b>Old Piacenza City Model</b><br>----<br>The model reconstruct the situation of the Piacenza city in the first half of the XVI century. The river Po visible in the bottom part of the picture indicates the geographical north. The 6 km-long urban walls were built by the will of Pope Clemente VII at the beginning of that century to reinforce the city defense system.<br>----<br><img src="assets/anno-img/piacenza-plastico.jpg" alt="Old Piacenza Plastico" title="Old Piacenza Plastico" width="270px">'
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
        scenears.annotations.children[7].moveHere(scenears.camera);
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
        description: '<b>Old Piacenza Map</b><br>----<br>The map illustrates the city plan in the XVI century. In the upper right portion it is visible the Farnese castle with its peculiar pentagonal plan. The map clearly shows how its external rampart walls were part of the enceinte of the city, already existent before the construction of the castle.<br>----<br><img src="assets/anno-img/piacenza-map.jpg" alt="Old Piacenza Map" title="Old Piacenza Map" width="270px">'
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
        scenears.annotations.children[8].moveHere(scenears.camera);
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
        description: '<b>Armor</b><br>----<br><img src="assets/anno-img/armor1.jpg" alt="Medieval armor" title="Medieval Armor" width="270px">'
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
        scenears.annotations.children[9].moveHere(scenears.camera);
        $("#anno4").fadeIn();
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "0.2";
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
        description: '<b>Armor</b><br>----<br><img src="assets/anno-img/armor2.jpg" alt="Medieval armor" title="Medieval Armor" width="270px">'
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
        scenears.annotations.children[10].moveHere(scenears.camera);
        $("#anno5").fadeIn();
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "0.2";
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
        cameraPosition: [553461.0117883002, 4988905.83894213, 96.30264985111171],
        cameraTarget: [553461.660989483, 4988904.760987417, 96.04839188043876],
        description: '<b>Armor</b><br>----<br><img src="assets/anno-img/armor3.jpg" alt="Medieval armor" title="Medieval Armor" width="270px">'
    })

    nota11.visible = false;
    scenears.annotations.add(nota11);
}
{
    // Cittadella plastico
    let Titolo12 = $(`
                <span>
                    <img src="./libs/potree/resources/icons/orbit_controls.svg" name="anno_panel6" class="annotation-action-icon" "/>
                </span>
                `);
    const elAnno6 = Titolo12.find("img[name=anno_panel6]");
    elAnno6.click(() => {
        event.stopPropagation();
        console.log('Hai cliccato sulla nota');
        scenears.annotations.children[11].moveHere(scenears.camera);
        $("#anno6").fadeIn();
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "0.2";
    });
    var annoPanel6 = document.getElementById('anno6');
    annoPanel6.addEventListener('click', function () {
        $("#anno6").fadeOut();
        //reset opacity of parent page
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "1";

    });
    Titolo12.toString = () => "Plastico Castello";

    let nota12 = new Potree.Annotation({
        position: [553452.063, 4988908.686, 95.781],
        title: Titolo12,
        cameraPosition: [553452.8222248793, 4988906.980127202, 97.1850908613455],
        cameraTarget: [553452.2814114128, 4988908.670055407, 95.68378200038859],
        description: '<b>Old Piacenza Citadel Model</b><br>----<br>The model reconstructs the original structure of the castle commissioned by Pier Luigi Farnese in the XVI century. The 3 surveyed bastions are visible in the upper part of the picture, corresponding to the southernmost area of Piacenza. The buildings inside the walls are part of the pre-existing monastery of St. Benedict, destroyed by an explosion in 1805 when the Farnese castle complex was used as a weapons and powder store for military artillery. <br>----<br><img src="assets/anno-img/castello-plastico.jpg" alt="Plastico castello" title="Plastico castello" width="270px">'
    })

    nota12.visible = false;
    scenears.annotations.add(nota12);
}
{
    // Sotterranei bastione
    let Titolo13 = $(`
                <span>
                    <img src="./libs/potree/resources/icons/orbit_controls.svg" name="anno_panel7" class="annotation-action-icon" "/>
                </span>
                `);
    const elAnno7 = Titolo13.find("img[name=anno_panel7]");
    elAnno7.click(() => {
        event.stopPropagation();
        console.log('Hai cliccato sulla nota');
        scenears.annotations.children[12].moveHere(scenears.camera);
        $("#anno7").fadeIn();
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "0.2";
    });
    var annoPanel7 = document.getElementById('anno7');
    annoPanel7.addEventListener('click', function () {
        $("#anno7").fadeOut();
        //reset opacity of parent page
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "1";

    });
    Titolo13.toString = () => "San Giacomo Bastion Dungeons";

    let nota13 = new Potree.Annotation({
        position: [553470.263, 4988927.862, 94.700],
        title: Titolo13,
        cameraPosition: [553467.7806220746, 4988926.3230987545, 95.9174366691439],
        cameraTarget: [553468.8885795458, 4988926.818049205, 95.80151137015869],
        description: '<b>San Giacomo Bastion Dungeons</b><br>----<br><img src="assets/anno-img/sotterranei.jpg" alt="Sotterranei" title="Sotterranei" width="270px">'
    })

    nota13.visible = false;
    scenears.annotations.add(nota13);
}
{
    // Go back left
    let Titolo14 = $(`
                <span>
                    Go back to entrance
                    <img src="./libs/potree/resources/icons/goto.svg" name="go-back-left" class="annotation-action-icon" style="filter: invert(1);"/>
                </span>
                `);
    const elAnno8 = Titolo14.find("img[name=go-back-left]");
    elAnno8.click(() => {
        event.stopPropagation();
        console.log('Hai cliccato sulla nota');
        scenears.annotations.children[3].moveHere(scenears.camera);
        scenears.annotations.children[8].visible = false;
        scenears.annotations.children[9].visible = false;
        scenears.annotations.children[10].visible = false;
        scenears.annotations.children[11].visible = false;
        scenears.annotations.children[13].visible = false;
    });
    Titolo14.toString = () => "Go back to entrance";

    let nota14 = new Potree.Annotation({
        position: [553451.946, 4988904.035, 94.906],
        title: Titolo14,
        cameraPosition: [553455.5741941927, 4988905.668038199, 96.31654328895252],
        cameraTarget: [553451.946, 4988904.035, 94.906],
        description: ''
    })

    nota14.visible = false;
    scenears.annotations.add(nota14);
}
{
    // Go back right
    let Titolo15 = $(`
                  <span>
                      Go back to entrance
                      <img src="./libs/potree/resources/icons/goto.svg" name="go-back-right" class="annotation-action-icon" style="filter: invert(1);"/>
                  </span>
                  `);
    const elAnno9 = Titolo15.find("img[name=go-back-right]");
    elAnno9.click(() => {
        event.stopPropagation();
        console.log('Hai cliccato sulla nota');
        scenears.annotations.children[3].moveHere(scenears.camera);
        scenears.annotations.children[12].visible = false;
        scenears.annotations.children[14].visible = false;
    });
    Titolo15.toString = () => "Go back to entrance";

    let nota15 = new Potree.Annotation({
        position: [553461.037, 4988936.183, 94.739],
        title: Titolo15,
        cameraPosition: [553463.0115106291, 4988933.638064064, 95.78213209344673],
        cameraTarget: [553461.037, 4988936.183, 94.739],
        description: ''
    })

    nota15.visible = false;
    scenears.annotations.add(nota15);
}
{
    // Paolo III print
    let Titolo16 = $(`
                  <span>
                  <img src="./libs/potree/resources/icons/orbit_controls.svg" name="anno_panel8" class="annotation-action-icon" "/>
                  </span>
                  `);
    const elAnno10 = Titolo16.find("img[name=anno_panel8]");
    elAnno10.click(() => {
        event.stopPropagation();
        console.log('Hai cliccato sulla nota');
        scenears.annotations.children[15].moveHere(scenears.camera);
        $("#anno8").fadeIn();
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "0.2";
    });
    var annoPanel8 = document.getElementById('anno8');
    annoPanel8.addEventListener('click', function () {
        $("#anno8").fadeOut();
        //reset opacity of parent page
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "1";

    });
    Titolo16.toString = () => "Paolo II print";

    let nota16 = new Potree.Annotation({
        position: [553468.173, 4988913.334, 96.274],
        title: Titolo16,
        cameraPosition: [553470.5484979739,4988913.944287285,97.04518532773058],
        cameraTarget: [553468.173, 4988913.334, 96.274],
        description: '<b>Paolo II print</b><br>----<br>The Pope is shown seated and flanked by Cardinal Alessandro Farnese as he approves the plan of the castle of Piacenza. The plan is presented to him by Pierluigi, who is kneeling, and is dressed in yellow and blue and has a white mantle. Architecture can be glimpsed in the background.<br>Original paint from 1685 - 1687 by Sebastiano Ricci, preserved at the Civic Museum of the Farnese Palace (Piacenza).<br>----<br><img src="assets/anno-img/paoloIII.jpg" alt="Paolo III Print" title="Paolo III Print" width="270px">'
    })

    nota16.visible = false;
    scenears.annotations.add(nota16);
}
{
    // Pier Luigi Farnese print
    let Titolo17 = $(`
                  <span>
                  <img src="./libs/potree/resources/icons/orbit_controls.svg" name="anno_panel9" class="annotation-action-icon" "/>
                  </span>
                  `);
    const elAnno11 = Titolo17.find("img[name=anno_panel9]");
    elAnno11.click(() => {
        event.stopPropagation();
        console.log('Hai cliccato sulla nota');
        scenears.annotations.children[16].moveHere(scenears.camera);
        $("#anno9").fadeIn();
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "0.2";
    });
    var annoPanel9 = document.getElementById('anno9');
    annoPanel9.addEventListener('click', function () {
        $("#anno9").fadeOut();
        //reset opacity of parent page
        parentWin = window.parent;
        var sidebar = parentWin.document.getElementById('split-container');
        sidebar.style.opacity = "1";

    });
    Titolo17.toString = () => "Pier Luigi Farnese print";

    let nota17 = new Potree.Annotation({
        position: [553468.945, 4988915.666, 96.280],
        title: Titolo17,
        cameraPosition: [553470.1248426964,	4988913.89451259, 96.98269181617856],
        cameraTarget: [553468.945, 4988915.666, 96.280],
        description: '<b>Pier Luigi Farnese print</b><br>----<br>The pope is shown seated and covered in a green and gold mantle while receiving Pier Luigi, dressed in yellow and covered in a blue mantle. Surrounding are cardinals and noble figures, two of whom are holding a crown. The pope is seated under a red canopy.<br>Original paint from 1685 - 1687 by Sebastiano Ricci, preserved at the Civic Museum of the Farnese Palace (Piacenza).<br>----<br><img src="assets/anno-img/pierluigifarnese.jpg" alt="Pierluigi Farnese Print" title="Pierluigi Farnese Print" width="270px">'
    })

    nota17.visible = false;
    scenears.annotations.add(nota17);
}