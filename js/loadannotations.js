/**
 * @file loadannotations.js
 * @description This script defines and manages annotations for a 3D scene using the Potree library.
 * Each annotation represents a point of interest in the scene, with properties such as position, title, camera position,
 * and description. The annotations include interactive elements (e.g., buttons, icons) that trigger specific actions,
 * such as moving the camera to a specific location, toggling visibility of other annotations, or displaying additional
 * information in a panel.
 *
 * The script also handles interactions with the parent window's sidebar, adjusting its opacity when certain annotations
 * are clicked or panels are displayed. It uses jQuery for DOM manipulation and event handling.
 *
 * Key features:
 * - Defines annotations for various points of interest, such as bastions, indoor spaces, and historical artifacts.
 * - Provides interactive controls for navigating the scene and exploring annotations.
 * - Integrates with the parent window's UI to enhance the user experience.
 * - Includes descriptions and images for annotations to provide additional context and information.
 * @author Federica Gaspari (tars4815)
 */

/**
 * Sets the opacity of the parent window's sidebar element.
 *
 * This function accesses the parent window of the current iframe and modifies
 * the opacity of an element with the ID 'split-container' in the parent document.
 *
 * @param {string} opacity - The desired opacity value (e.g., "0.5", "1").
 */
function setParentOpacity(opacity) {
  const parentWin = window.parent;
  const sidebar = parentWin.document.getElementById("split-container");
  if (sidebar) sidebar.style.opacity = opacity;
}

/**
 * Displays the annotation panel and adjusts the parent sidebar opacity.
 *
 * @param {string} panelId - The ID of the panel to display.
 * @param {number} [annotationIndex] - The index of the annotation to move the camera to (optional).
 */
function showAnnotationPanel(panelId, annotationIndex) {
  $(`#${panelId}`).fadeIn();
  setParentOpacity("0.5");
  if (annotationIndex !== undefined) {
    scenears.annotations.children[annotationIndex].moveHere(scenears.camera);
  }
}

/**
 * Hides the annotation panel and resets the parent sidebar opacity.
 *
 * This function fades out the specified annotation panel and restores
 * the opacity of the parent window's sidebar element to its default value.
 *
 * @param {string} panelId - The ID of the panel to hide.
 */
function hideAnnotationPanel(panelId) {
  $(`#${panelId}`).fadeOut();
  setParentOpacity("1");
}

/**
 * Sets up click event listeners for multiple annotation panels.
 * When a panel is clicked, it triggers the hideAnnotationPanel function.
 *
 * @param {string} panelIds - An array of panel IDs to set up listeners for.
 */
function setupPanelListeners(panelIds) {
  panelIds.forEach((panelId) => {
    const panel = document.getElementById(panelId);
    if (panel) {
      panel.addEventListener("click", () => hideAnnotationPanel(panelId));
    }
  });
}

/**
 * Sets the visibility of multiple annotations based on a provided mapping.
 *
 * @param {*} visibilityMap - An object mapping annotation indices to their desired visibility (true/false).
 */
function setAnnotationsVisibility(visibilityMap) {
  Object.entries(visibilityMap).forEach(([index, visible]) => {
    scenears.annotations.children[index].visible = visible;
  });
}

// Create icon element for annotation titles
/**
 * Creates an HTML string for an icon element used in annotation titles.
 *
 * @param {string} iconName - The name of the icon file (without extension).
 * @param {string} actionName - The name of the action associated with the icon.
 * @param {boolean} invert - A boolean indicating whether to apply an invert filter to the icon.
 * @returns
 */
function createIconElement(iconName, actionName, invert = false) {
  const style = invert ? "filter: invert(1);" : "";
  return `<img src="./libs/potree/resources/icons/${iconName}.svg" name="${actionName}" class="annotation-action-icon" ${
    style ? `style="${style}"` : ""
  }/>`;
}

// Annotation configurations
const annotationConfigs = [
  {
    // Bastione San Benedetto
    name: "Bastione San Benedetto",
    displayName: "San Benedetto",
    position: [553516.631, 4988714.121, 104.338],
    cameraPosition: [553451.045, 4988694.422, 140.49],
    cameraTarget: [553516.631, 4988714.121, 104.338],
    description:
      "<b>San Benedetto Bastion</b><br>----<br>The bastion of San Benedetto (St. Benedict) is the only one with an eaves and the only survivor of the city's 16th-century rampart wall. Of the two original auricles, the one facing the Porta Sant'Antonio gate was demolished between the end of the last century and the beginning of the current one for the construction of the railway line connecting with the state railroad yard (involving the Porta del Soccorso). The surviving auricle, on the other hand, has remained almost intact, on which it is possible to note the presence of a burrow at the base, made in years yet to be determined, but thanks to which it was possible to observe its internal structure and note its height of about 12 meters.",
    visible: true,
    actions: [
      {
        icon: "orbit_controls",
        handler: () => {
          changeHotspotName("San Benedetto");
          setAnnotationsVisibility({
            3: false,
            4: false,
            5: false,
            6: false,
            7: false,
            8: false,
            9: false,
            10: false,
            11: false,
            12: false,
          });
        },
      },
    ],
  },
  {
    // Bastione San Giovanni
    name: "Bastione San Giovanni",
    displayName: "San Giovanni",
    position: [553699.16, 4988620.828, 105.011],
    cameraPosition: [553708.348, 4988541.235, 145],
    cameraTarget: [553699.16, 4988620.828, 105.011],
    description:
      "<b>San Giovanni Bastion</b><br>----<br>Another item of considerable interest is certainly the finding of spaces interiors and basements in both ramparts, rooms that present both significant damage but also spaces in excellent condition, in which the destinations of the structures of the bastions as warehouses and the constructions of false walls, had resulted in the complete concealment the view of the entrance to the dungeon (up to 10 m below the level of the street)",
    visible: true,
    actions: [
      {
        icon: "orbit_controls",
        handler: () => {
          changeHotspotName("San Giovanni");
          setAnnotationsVisibility({
            3: false,
            4: false,
            5: false,
            6: false,
            7: false,
            8: false,
            9: false,
            10: false,
            11: false,
            12: false,
          });
          showAnnotationPanel("anno10");
        },
      },
    ],
  },
  {
    // Bastione San Giacomo
    name: "San Giacomo",
    displayName: "San Giacomo",
    position: [553430.471, 4988914.868, 103.226],
    cameraPosition: [553333.7713011784, 4988883.975343259, 166.10804103291153],
    cameraTarget: [553430.471, 4988914.868, 103.226],
    description:
      "<b>San Giacomo Bastion</b><br>----<br>Differently from the twin San Giovanni bastion, it has been affected by additional military intervention. Indeed, on the upper part merlons have been added while an underground shelter, adopted as bomb shelter during World War, is still present and partially accessible through a lateral external access.<br>The indoor space is visitable.",
    visible: true,
    actions: [
      {
        icon: "orbit_controls",
        handler: () => changeHotspotName("San Giacomo"),
      },
      {
        icon: "goto",
        invert: true,
        handler: (event) => {
          event.stopPropagation();
          changeHotspotName("Indoor View");
          scenears.annotations.children[3].moveHere(scenears.camera);
          setAnnotationsVisibility({
            0: false,
            1: false,
            2: false,
            3: true,
            4: true,
            5: true,
            6: true,
            7: true,
            8: false,
            9: false,
            10: false,
            11: false,
            12: false,
            13: false,
            14: false,
            15: true,
            16: true,
          });
        },
      },
    ],
  },
  {
    // Indoor entrance
    name: "Start exploring!",
    position: [553471.056, 4988913.293, 95.054],
    cameraPosition: [553474.7425516201, 4988912.090928567, 96],
    cameraTarget: [553471.056, 4988913.293, 96],
    description:
      '<b>Welcome to the indoor portion of the San Giacomo rampart!</b><br>----<br>This space is the site of a permanent exhibition of historic cartography and documents about the evolution of the city of Piacenza.<br>You can start exploring the two wings of this space by clicking on the <i>"Tour Right"</i> and <i>"Tour Left"</i> annotations.<br>The indoor point cloud has been completely acquired through TLS scans with a CAM2 Focus M70.',
    visible: false,
    customTitle:
      '<span>Start exploring! <input type="button" name="outdoor" value="Go back outdoor!"/></span>',
    customHandler: (titleElement) => {
      titleElement.find("input[name=outdoor]").click((event) => {
        event.stopPropagation();
        changeHotspotName("San Giacomo");
        scenears.annotations.children[2].moveHere(scenears.camera);
        setAnnotationsVisibility({
          0: true,
          1: true,
          2: true,
          3: false,
          4: false,
          5: false,
          6: false,
          7: false,
          8: false,
          9: false,
          10: false,
          11: false,
          12: false,
          13: false,
          14: false,
          15: false,
          16: false,
        });
      });
    },
  },
  {
    // Tour Left
    name: "Tour Left",
    position: [553468.485, 4988909.747, 95.01],
    cameraPosition: [553471.5649587561, 4988912.824383096, 96.74929992934102],
    cameraTarget: [553470.9753199244, 4988912.469004575, 96.60109365898464],
    description:
      "Click on the icon and walk through the indoor left wing of the bastion...<br>----<br>You could also learn more about some <b>hidden treasures</b>!",
    visible: false,
    actions: [
      {
        icon: "goto",
        invert: true,
        handler: (event) => {
          event.stopPropagation();
          animation1.play();
          setAnnotationsVisibility({
            8: true,
            9: true,
            10: true,
            11: true,
            13: true,
          });
        },
      },
    ],
  },
  {
    // Tour Right
    name: "Tour Right",
    position: [553470.899, 4988918.329, 94.915],
    cameraPosition: [553471.5649587561, 4988912.824383096, 96.74929992934102],
    cameraTarget: [553470.899, 4988918.329, 95.915],
    description:
      "Click on the icon and walk through the indoor left wing of the bastion...<br>----<br>You may discover a <b>secret passage</b>!",
    visible: false,
    actions: [
      {
        icon: "goto",
        invert: true,
        handler: (event) => {
          event.stopPropagation();
          animation2.play();
          setAnnotationsVisibility({ 12: true, 14: true });
        },
      },
    ],
  },
];

// Image annotation configurations
const imageAnnotations = [
  {
    id: "anno1",
    name: "Plastico Piacenza",
    position: [553468.241, 4988914.587, 96.098],
    cameraPosition: [553469.8194153706, 4988913.956457145, 97.93433745029579],
    cameraTarget: [553469.779872537, 4988913.96702074, 97.87532042534758],
    description:
      '<b>Old Piacenza City Model</b><br>----<br>The model reconstruct the situation of the Piacenza city in the first half of the XVI century. The river Po visible in the bottom part of the picture indicates the geographical north. The 6 km-long urban walls were built by the will of Pope Clemente VII at the beginning of that century to reinforce the city defense system.<br>----<br><img src="assets/anno-img/piacenza-plastico.jpg" alt="Old Piacenza Plastico" title="Old Piacenza Plastico" width="270px">',
    visible: false,
    index: 6,
  },
  {
    id: "anno2",
    name: "Old map of Piacenza",
    position: [553469.053, 4988920.173, 96.87],
    cameraPosition: [553471.1851376052, 4988920.489146103, 97.20975445747173],
    cameraTarget: [553470.2150590685, 4988920.39096358, 96.99985462186642],
    description:
      '<b>Old Piacenza Map</b><br>----<br>The map illustrates the city plan in the XVI century. In the upper right portion it is visible the Farnese castle with its peculiar pentagonal plan. The map clearly shows how its external rampart walls were part of the enceinte of the city, already existent before the construction of the castle.<br>----<br><img src="assets/anno-img/piacenza-map.jpg" alt="Old Piacenza Map" title="Old Piacenza Map" width="270px">',
    visible: false,
    index: 7,
  },
  {
    id: "anno3",
    name: "Armor 1",
    position: [553467.122, 4988906.703, 96.305],
    cameraPosition: [553465.5320448811, 4988908.552441066, 97.55644288528843],
    cameraTarget: [553467.3375243957, 4988906.725013733, 96.24520099166907],
    description:
      '<b>Armor</b><br>----<br><img src="assets/anno-img/armor1.jpg" alt="Medieval armor" title="Medieval Armor" width="270px">',
    visible: false,
    index: 8,
  },
  {
    id: "anno4",
    name: "Armor 2",
    position: [553464.626, 4988905.101, 96.204],
    cameraPosition: [553463.4076802338, 4988907.264894535, 96.3396021385902],
    cameraTarget: [553463.9388958209, 4988906.130368572, 96.05896626293325],
    description:
      '<b>Armor</b><br>----<br><img src="assets/anno-img/armor2.jpg" alt="Medieval armor" title="Medieval Armor" width="270px">',
    visible: false,
    index: 9,
    opacity: 0.2,
  },
  {
    id: "anno5",
    name: "Armor 3",
    position: [553462.022, 4988903.801, 96.413],
    cameraPosition: [553461.0117883002, 4988905.83894213, 96.30264985111171],
    cameraTarget: [553461.660989483, 4988904.760987417, 96.04839188043876],
    description:
      '<b>Armor</b><br>----<br><img src="assets/anno-img/armor3.jpg" alt="Medieval armor" title="Medieval Armor" width="270px">',
    visible: false,
    index: 10,
    opacity: 0.2,
  },
  {
    id: "anno6",
    name: "Plastico Castello",
    position: [553452.063, 4988908.686, 95.781],
    cameraPosition: [553452.8222248793, 4988906.980127202, 97.1850908613455],
    cameraTarget: [553452.2814114128, 4988908.670055407, 95.68378200038859],
    description:
      '<b>Old Piacenza Citadel Model</b><br>----<br>The model reconstructs the original structure of the castle commissioned by Pier Luigi Farnese in the XVI century. The 3 surveyed bastions are visible in the upper part of the picture, corresponding to the southernmost area of Piacenza. The buildings inside the walls are part of the pre-existing monastery of St. Benedict, destroyed by an explosion in 1805 when the Farnese castle complex was used as a weapons and powder store for military artillery. <br>----<br><img src="assets/anno-img/castello-plastico.jpg" alt="Plastico castello" title="Plastico castello" width="270px">',
    visible: false,
    index: 11,
    opacity: 0.2,
  },
  {
    id: "anno7",
    name: "San Giacomo Bastion Dungeons",
    position: [553470.263, 4988927.862, 94.7],
    cameraPosition: [553467.7806220746, 4988926.3230987545, 95.9174366691439],
    cameraTarget: [553468.8885795458, 4988926.818049205, 95.80151137015869],
    description:
      '<b>San Giacomo Bastion Dungeons</b><br>----<br><img src="assets/anno-img/sotterranei.jpg" alt="Sotterranei" title="Sotterranei" width="270px">',
    visible: false,
    index: 12,
    opacity: 0.2,
  },
  {
    id: "anno8",
    name: "Paolo II print",
    position: [553468.173, 4988913.334, 96.274],
    cameraPosition: [553470.5484979739, 4988913.944287285, 97.04518532773058],
    cameraTarget: [553468.173, 4988913.334, 96.274],
    description:
      '<b>Paolo II print</b><br>----<br>The Pope is shown seated and flanked by Cardinal Alessandro Farnese as he approves the plan of the castle of Piacenza. The plan is presented to him by Pierluigi, who is kneeling, and is dressed in yellow and blue and has a white mantle. Architecture can be glimpsed in the background.<br>Original paint from 1685 - 1687 by Sebastiano Ricci, preserved at the Civic Museum of the Farnese Palace (Piacenza).<br>----<br><img src="assets/anno-img/paoloIII.jpg" alt="Paolo III Print" title="Paolo III Print" width="270px">',
    visible: false,
    index: 15,
    opacity: 0.2,
  },
  {
    id: "anno9",
    name: "Pier Luigi Farnese print",
    position: [553468.945, 4988915.666, 96.28],
    cameraPosition: [553470.1248426964, 4988913.89451259, 96.98269181617856],
    cameraTarget: [553468.945, 4988915.666, 96.28],
    description:
      '<b>Pier Luigi Farnese print</b><br>----<br>The pope is shown seated and covered in a green and gold mantle while receiving Pier Luigi, dressed in yellow and covered in a blue mantle. Surrounding are cardinals and noble figures, two of whom are holding a crown. The pope is seated under a red canopy.<br>Original paint from 1685 - 1687 by Sebastiano Ricci, preserved at the Civic Museum of the Farnese Palace (Piacenza).<br>----<br><img src="assets/anno-img/pierluigifarnese.jpg" alt="Pierluigi Farnese Print" title="Pierluigi Farnese Print" width="270px">',
    visible: false,
    index: 16,
    opacity: 0.2,
  },
];

// Navigation annotations
const navigationAnnotations = [
  {
    name: "Go back to entrance",
    position: [553451.946, 4988904.035, 94.906],
    cameraPosition: [553455.5741941927, 4988905.668038199, 96.31654328895252],
    cameraTarget: [553451.946, 4988904.035, 94.906],
    visible: false,
    actions: [
      {
        icon: "goto",
        invert: true,
        handler: (event) => {
          event.stopPropagation();
          scenears.annotations.children[3].moveHere(scenears.camera);
          setAnnotationsVisibility({
            8: false,
            9: false,
            10: false,
            11: false,
            13: false,
          });
        },
      },
    ],
  },
  {
    name: "Go back to entrance",
    position: [553461.037, 4988936.183, 94.739],
    cameraPosition: [553463.0115106291, 4988933.638064064, 95.78213209344673],
    cameraTarget: [553461.037, 4988936.183, 94.739],
    visible: false,
    actions: [
      {
        icon: "goto",
        invert: true,
        handler: (event) => {
          event.stopPropagation();
          scenears.annotations.children[3].moveHere(scenears.camera);
          setAnnotationsVisibility({ 12: false, 14: false });
        },
      },
    ],
  },
];

// Create annotation from config
/**
 * Creates and adds an annotation to the scene based on the provided configuration.
 *
 * @param {*} config - Configuration object for the annotation.
 */
function createAnnotation(config) {
  let titleElement;

  if (config.customTitle) {
    titleElement = $(config.customTitle);
    if (config.customHandler) {
      config.customHandler(titleElement);
    }
  } else {
    const icons =
      config.actions
        ?.map((action) =>
          createIconElement(action.icon, `action_${action.icon}`, action.invert)
        )
        .join("") || createIconElement("orbit_controls", "action_default");

    titleElement = $(`<span>${icons}</span>`);

    config.actions?.forEach((action, idx) => {
      titleElement
        .find(`img[name=action_${action.icon}]`)
        .click(action.handler);
    });
  }

  titleElement.toString = () => config.name;

  const annotation = new Potree.Annotation({
    position: config.position,
    title: titleElement,
    cameraPosition: config.cameraPosition,
    cameraTarget: config.cameraTarget,
    description: config.description || "",
  });

  annotation.visible = config.visible;
  scenears.annotations.add(annotation);
}

/**
 * Creates and adds an image-based annotation to the scene based on the provided configuration.
 *
 * @param {*} config
 */
function createImageAnnotation(config) {
  const titleElement = $(
    `<span>${createIconElement(
      "orbit_controls",
      `anno_panel_${config.id}`
    )}</span>`
  );

  titleElement.find(`img[name=anno_panel_${config.id}]`).click((event) => {
    event.stopPropagation();
    showAnnotationPanel(config.id, config.index);
    if (config.opacity) setParentOpacity(config.opacity);
  });

  titleElement.toString = () => config.name;

  const annotation = new Potree.Annotation({
    position: config.position,
    title: titleElement,
    cameraPosition: config.cameraPosition,
    cameraTarget: config.cameraTarget,
    description: config.description,
  });

  annotation.visible = config.visible;
  scenears.annotations.add(annotation);
}

/**
 * Initializes and loads all annotations into the scene.
 * This function creates annotations based on predefined configurations,
 * sets up event listeners for annotation panels, and logs the total number of loaded annotations.
 */
function loadAllAnnotations() {
  // Load main annotations
  annotationConfigs.forEach(createAnnotation);

  // Load image annotations
  imageAnnotations.forEach(createImageAnnotation);

  // Load navigation annotations
  navigationAnnotations.forEach(createAnnotation);

  // Setup panel listeners
  const panelIds = imageAnnotations.map((a) => a.id);
  setupPanelListeners(panelIds);

  console.log(
    `Loaded ${
      annotationConfigs.length +
      imageAnnotations.length +
      navigationAnnotations.length
    } annotations`
  );
}

// Load all annotations
loadAllAnnotations();
