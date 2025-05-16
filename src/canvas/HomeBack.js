import * as THREE from 'three';

import { useEffect, useRef } from "react";
import zIndex from '@mui/material/styles/zIndex';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import MyFace from '../assets/face.glb';
import { useMousePosition } from '../hooks/mousePosition'

function getRandomColor(scaler) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * scaler)];
    }
    return color;
}


function HomeBackgroundCanvas() {
    const refContainer = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        camera.lookAt(0, 0, 0);
        renderer.setSize(window.innerWidth, window.innerHeight, false);
        refContainer.current.appendChild(renderer.domElement);

        scene.background = new THREE.Color(0x323232);

        let LSign = [];
        let clock = new THREE.Clock();
        clock.start();

        const scaler = 10;
        // GLTF Loading
        // Load GLB file
        const loader = new GLTFLoader();
        loader.load(MyFace, (gltf) => {
            // gltf.scene.scale.set(scaler, scaler, scaler)
            const model = gltf.scene;
            // scene.add(model);

            // Traverse through the model to find meshes
            model.traverse((child) => {
                if (child.isMesh) {

                    const geometry = child.geometry;

                    const vertices = geometry.attributes.position.array;

                    // Print vertex coordinates
                    for (let i = 0; i < vertices.length; i += 160) {
                        // const x = vertices[i];
                        // const y = vertices[i + 1];
                        // const z = vertices[i + 2];
                        // console.log(`Vertex ${i / 3}: (${x}, ${y}, ${z})`);

                        LSign.push(new THREE.Vector3(scaler * vertices[i], scaler * vertices[i + 1] - 1, scaler * vertices[i + 2]));
                    }

                    console.log(`Vectices length: ${vertices.length}}, LSign: ${LSign.length}`)
                }
            });
        });



        for (let i = 0; i < 50; i++) {
            const geometry = new THREE.SphereGeometry(0.03);

            const material = new THREE.MeshBasicMaterial({ color: getRandomColor(16) });

            const dot = new THREE.Mesh(geometry, material);

            dot.position.add(new THREE.Vector3(i * (Math.random() * scaler - 1) * 0.5,
                i * (Math.random() * scaler - 1) * 0.5, i * (Math.random() * scaler - 1)));

            scene.add(dot);

            const animate_dot = () => {
                requestAnimationFrame(animate_dot);
                if (LSign.length > i) {
                    LSign[i].y += (Math.sin(clock.getElapsedTime() - LSign[i].x)) / 800;
                    LSign[i].x += (Math.sin(clock.getElapsedTime() - LSign[i].x - LSign[i].y) - 0.1) / 600;
                    // LSign[i].z += (Math.sin(clock.getElapsedTime() - LSign[i].x - LSign[i].y - LSign[i].z) - 0.1) / 500;
                    dot.position.lerp(LSign[i], 0.01)
                    // dot.material.color.setHex(dot.material.color.getHex() + 1 * LSign[i].z)
                    // dot.material.color.lerp(LSign[i], 0.01)
                    // dot.scale.lerp(new THREE.Vector3(0.1), 0.01)
                }
                // renderer.render(scene, camera);
            }


            animate_dot();
        }



        camera.position.z = 5;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            refContainer.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    const canvasStyles = {
        // backgroundAttachment: 'fixed',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',

        height: '100%',
        position: 'fixed',
        display: 'block',
        top: '0',
        left: '0',
        // width: '100%',
        zIndex: -99,
        // border: '1px solid #000', // Optional: border for each canvas
        // Optional: border for each canvas
    };

    return (
        <div ref={refContainer} style={canvasStyles}>

        </div>
    );
}

export default HomeBackgroundCanvas

