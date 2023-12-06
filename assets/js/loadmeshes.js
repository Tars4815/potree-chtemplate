import { PLYLoader } from "../../libs/three.js/loaders/PLYLoader.js";

function loadConstructionPhase(file_path, name, label) {
    var loader = new PLYLoader();
    loader.load(Potree.resourcePath + file_path, (geometry) => {
        geometry.computeVertexNormals();

        let mesh;
        {
            let material = new THREE.MeshNormalMaterial();
            mesh = new THREE.Mesh(geometry, material);
            mesh.scale.multiplyScalar(1);
            mesh.rotation.set(0, 0, 0)
            viewer.scene.scene.add(mesh);
            mesh.name = name;
            mesh.visible = false;
        }

        viewer.onGUILoaded(() => {
            // Add entries to object list in sidebar
            let tree = $(`#jstree_scene`);
            let parentNode = "other";

            let test_mesh = tree.jstree('create_node', parentNode, {
                "text": label,
                "icon": `${Potree.resourcePath}/icons/triangle.svg`,
                "data": mesh
            },
                "last", false, false);
            tree.jstree(mesh.visible ? "check_node" : "uncheck_node", test_mesh);
        });
    })

}

let loadedPhases = [
    {
        path: "/models/fase_1_utm_simpl.ply",
        internal: "fase1",
        label: "FASE 1",
        loaded: false,
        visibility: false
    },
    {
        path: "/models/fase_2_utm_simpl.ply",
        internal: "fase2",
        label: "FASE 2",
        loaded: false,
        visibility: false
    },
    {
        path: "/models/fase_3_utm_simpl.ply",
        internal: "fase3",
        label: "FASE 3",
        loaded: false,
        visibility: false
    },
    {
        path: "/models/fase_4_utm_simpl.ply",
        internal: "fase4",
        label: "FASE 4",
        loaded: false,
        visibility: false
    },
    {
        path: "/models/fase_5_utm_simpl.ply",
        internal: "fase5",
        label: "FASE 5",
        loaded: false,
        visibility: false
    },
    {
        path: "/models/fase_6_utm_simpl.ply",
        internal: "fase6",
        label: "FASE 6",
        loaded: false,
        visibility: false
    },
    {
        path: "/models/fase_7_utm_simpl.ply",
        internal: "fase7",
        label: "FASE 7",
        loaded: false,
        visibility: false
    },
    {
        path: "/models/fase_8_utm_simpl.ply",
        internal: "fase8",
        label: "FASE 8",
        loaded: false,
        visibility: false
    },
    {
        path: "/models/fase_9_utm_simpl.ply",
        internal: "fase9",
        label: "FASE 9",
        loaded: false,
        visibility: false
    }
]

// Test separando funzionalità bottone in index
for (let i in loadedPhases) {
    loadedPhases[i].visibility = false;
    loadConstructionPhase(loadedPhases[i].path, loadedPhases[i].internal, loadedPhases[i].label);
    console.log("Elemento caricato: " + loadedPhases[i].label)
}

/* OLD

let visiblePhase = -1;

function changeVisible(modelNumber){
    let model = loadedPhases[modelNumber];
    if(!model.loaded){
        loadConstructionPhase(model.path, model.internal, model.label);
        model.loaded = true;
    }
    if(!model.visibility){
        model.visibility = true;
        //show model modelNumber
        //let phase = model.internal;
        console.log("nome element "+ model.visibility)
        console.log(viewer.scene.scene.children.find(element => element.name = model.internal).visible = true);
        //viewer.scene.scene.children.find(element => element.name == phase).visible = true;
        viewer.scene.scene.children.find(element => element.name = "fase1").visible = true;
        console.log("showing " + modelNumber);

        for(let i in loadedPhases){
            if(i != modelNumber){
                loadedPhases[i].visibility = false;
                //hide specific model i
                viewer.scene.scene.children.find(element => element.name = loadedPhases[i].internal).visible = false;
                console.log("Elemento nascosto: " + loadedPhases[i].label)
                console.log("hiding " + i);
            }
        }
    }
}

let castlePhasesButton = document.getElementById("castle_phases");
castlePhasesButton.onclick = () => {
    visiblePhase += 1;
    if(visiblePhase >= loadedPhases.length){
        visiblePhase = 0;
    }
    changeVisible(visiblePhase);
}; */

/* loadConstructionPhase("/models/fase_1_reg.ply", 'fase1', "FASE 1")
loadConstructionPhase("/models/fase_2_reg.ply", 'fase2', "FASE 2")
loadConstructionPhase("/models/fase_3_reg.ply", 'fase3', "FASE 3")
loadConstructionPhase("/models/fase_4_reg.ply", 'fase4', "FASE 4")
loadConstructionPhase("/models/fase_5_reg.ply", 'fase5', "FASE 5")
loadConstructionPhase("/models/fase_6_reg.ply", 'fase6', "FASE 6")
loadConstructionPhase("/models/fase_7_reg.ply", 'fase7', "FASE 7")
loadConstructionPhase("/models/fase_8_reg.ply", 'fase8', "FASE 8")
loadConstructionPhase("/models/fase_9_reg.ply", 'fase9', "FASE 9") */