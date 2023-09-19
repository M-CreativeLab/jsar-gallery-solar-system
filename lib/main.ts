const scene = spaceDocument.scene as BABYLON.Scene;
const model = scene.getNodeById('model');
model.getChildMeshes().forEach(mesh => {
  if (mesh.material.getClassName() === 'PBRMaterial') {
    const mat = mesh.material as BABYLON.PBRMaterial;
    mat.metallic = 0;
  }
});

new Audio('https://ar.rokidcdn.com/web-assets/pages/sounds/violons11.wav')
  .play();

