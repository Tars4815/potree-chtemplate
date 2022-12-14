//-------Definition of Animation 1

const animation = new Potree.CameraAnimation(viewer);


const positions = [
    [553471.5649587561, 4988912.824383096, 96.75],
    [553468.5406591574, 4988910.128623269, 96.75],
    [553464.7474747964, 4988906.992126563, 96.75],
    [553461.7708505556, 4988905.213628605, 96.75],
    [553456.671652177, 4988904.093441524, 96.75]
];

const targets = [
    [553470.9753199244, 4988912.469004575, 96.55],
    [553466.6034696557, 4988908.379363626, 96.55],
    [553463.7472720352, 4988906.132089904, 96.55],
    [553459.5019240862, 4988904.733406158, 96.55],
    [553456.3547397406, 4988904.085110492, 96.55]
];

for (let i = 0; i < positions.length; i++) {
    const cp = animation.createControlPoint();

    cp.position.set(...positions[i]);
    cp.target.set(...targets[i]);
}

indoor.addCameraAnimation(animation);
animation.visible = false;

//--------
//-------Definition of Animation 2

const animation2 = new Potree.CameraAnimation(viewer);

const positions2 = [
    [553471.5649587561, 4988912.824383096, 96.74929992934102],
    [553470.8266211117, 4988920.956978676, 96.96684674759675],
    [553468.970057797, 4988925.671973037, 96.93937869520164],
    [553466.3895679122, 4988928.694618191, 96.67629091896133],
    [553464.5111995947, 4988930.979751398, 96.70556033095784]
];

const targets2 = [
    [553470.899, 4988918.329, 95.915],
    [553470.7600219863, 4988921.507467228, 96.832169690892],
    [553468.7403491414, 4988926.177655794, 96.80849752652905],
    [553465.620604052, 4988930.300358385, 96.4827080923057],
    [553464.0111806979, 4988932.023884267, 96.57968306104952]
];

for (let i = 0; i < positions2.length; i++) {
    const cp = animation2.createControlPoint();

    cp.position.set(...positions2[i]);
    cp.target.set(...targets2[i]);
}

indoor.addCameraAnimation(animation2);
animation2.visible = false;